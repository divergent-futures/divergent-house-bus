# The Controls "Brain" — Buildable Spec (v0.4)

**Date:** 2026-07-07 · V2 bus. Turns the v0.3 concepts (`Controls_Brain_Orchestration_v0_3.md`) into **specifications you could hand to a controls engineer.** Four pieces: (1) the **dynamic drive-reserve formula**, (2) the **state-machine transition table with interlock guards** (`controls_state_machine.png`), (3) the **MPC formulation** (objective, variables, constraints), and (4) the **sensor + redundancy map**. Still not final code — but the math and tables are now concrete.

---

## 1. The dynamic drive-reserve floor (tier 2)

The whole safety story rests on one number: **how many kWh must stay untouchable so you can always drive to safety.** In v0.3 it was "a floor"; here it's a formula that *moves with conditions*.

### 1.1 The formula

```
E_reserve = ( D_safe · e_drive · k_wx · k_terrain  +  E_climb )  ·  (1 + m)
```

| Term | Meaning | Nominal |
|---|---|---|
| `D_safe` | distance to the nearest "safe out" (town / charger / help), miles | set by route + map; default 50 mi if unknown |
| `e_drive` | baseline energy rate, kWh/mi | ~1.6 kWh/mi (loaded 25 ft bus) |
| `k_wx` | weather multiplier (cold + headwind raise it) | 1.0 mild … 1.35 at −15 °C |
| `k_terrain` | rolling-terrain multiplier (grade, surface) | 1.0 flat … 1.25 mountainous |
| `E_climb` | net elevation-gain energy = `m_veh · g · Δh / η`, kWh | computed from route Δh |
| `m` | safety margin | 0.20 (20 %) |

**`E_climb`** is the honest one: lifting ~7,400 kg up a 900 m pass ≈ `7400·9.81·900 / (3.6e6·0.85)` ≈ **21 kWh** just for the climb (regen returns some on the far side but *reserve doesn't bank on the descent*). That's why a mountain tomorrow raises today's floor.

### 1.2 Worked numbers

| Scenario | D_safe | k_wx | k_terrain | E_climb | **E_reserve** |
|---|---|---|---|---|---|
| Suburban, mild | 30 mi | 1.0 | 1.0 | 0 | ~58 kWh |
| Remote boondock, cold | 60 mi | 1.25 | 1.1 | 0 | ~158 kWh |
| Mountain pass, winter | 45 mi | 1.30 | 1.25 | 21 | ~166 kWh |

So the reserve isn't the flat "~80 kWh" placeholder — it breathes between ~55 and ~170 kWh with where you are and what's ahead. The MPC reads this each cycle and hands it to L3 as tier-2's hard floor; L1 enforces it.

### 1.3 Rules around it
- **Never optimizeable away.** Tiers 3–6 see `SOC − E_reserve` as their available envelope; they can't touch the reserve.
- **Grows before it's needed.** If tomorrow's route needs more, the reserve rises *tonight* — the MPC won't let you wake to an unmakeable drive.
- **Manual override is explicit + logged.** An owner can lower `D_safe`/`m` deliberately (you *know* there's a charger 5 mi away), but it's a conscious action with a warning, not a default.

---

## 2. State-machine transition table + guards

One active state at a time (see `controls_state_machine.png`). The app's "mode" button *requests* a transition; **L3 grants it only if the guard passes.** The DRIVE-entry guards are the safety-critical ones — they're what stops you towing your house down the road with the slides out.

### 2.1 The DRIVE-entry guard (the big one)

Before **any → DRIVE**, ALL must be true:
1. **Slides IN** and latched (position sensors confirm stowed).
2. **Hydro tray stowed** + wet-room locked (Signature only).
3. **Dock disconnected** (shore/house/DC-fast physically unplugged, interlock open).
4. **Suspension at ride-height** (not lifted/kneeling/leveled-off).
5. **Drive-reserve met** (`SOC ≥ E_reserve`) — or explicit owner override.
6. **Steps/awning/exterior arms retracted**; doors closable.
7. **BMS + drivetrain healthy** (no active HV fault, pack in drive-temp window).

Fail any → transition **denied**, app shows *which* item blocks it. This is a hard interlock, mirrored at L1 (the smart layer can't fake it).

### 2.2 Full transition table

| From → To | Trigger | Guard (must pass) | On entry, sets |
|---|---|---|---|
| STORAGE → any | wake (app/schedule) | self-test pass; SOC > minimum | run pre-checks |
| any → DRIVE | drive requested | **§2.1 full DRIVE guard** | traction priority; harvest loop on; reserve held |
| DRIVE → PARK-CAMP | stop, not at dock | v = 0, park brake set | auto-level; comfort zones on |
| DRIVE → PARK-HOME | arrive at home dock | v = 0, docked, leveled | V2H enable; microgrid coordination on |
| PARK-CAMP → DRIVE | drive requested | **§2.1 full DRIVE guard** | (as DRIVE) |
| PARK-HOME → DRIVE | drive requested | **§2.1** + dock released + house handed to own supply | (as DRIVE) |
| PARK-HOME → AWAY | bus departs | house fallback confirmed (own solar+batt live) | house base-load mode; bus → DRIVE elsewhere |
| AWAY → PARK-HOME | bus returns + docks | docked, leveled, both reserves OK | resume V2H |
| PARK-CAMP → CHARGE | shore/DC-fast plugged | connector locked, handshake OK | pre-condition pack; defer heavy loads |
| PARK-HOME → CHARGE | house dock (bi-dir) | dock handshake OK | balance house↔bus flows |
| CHARGE → prior park | charge done / unplug | connector released | return to PARK-CAMP/HOME |
| PARK-* → STORAGE | long idle / command | occupancy = none, armed | freeze-protect; SOC hold; immobilize |
| **any → EMERGENCY** | **L1 hazard trip** | **none — always allowed** | shed to tier 1–2; unlock egress; V2X backup; alarm |
| EMERGENCY → prior | hazard cleared + ack | fault resolved, manual confirm | resume guarded |

**EMERGENCY is special:** reachable from everywhere, needs no guard, and always wins. It's the L1 safety layer forcing the whole machine to a safe state (fire/gas/CO₂, HV fault, crash detected, or reserve breach).

---

## 3. MPC formulation

The predictive layer (v0.3 §5) as an actual optimization problem. Start rule-based, graduate to this.

### 3.1 Shape
- **Horizon:** 48 h, **timestep** 15 min → 192 steps (coarsen to 1 h beyond 24 h to save compute).
- **Re-solve:** every 15 min, or on any big event (drive started, plugged in, forecast changed).
- **Class:** linear/convex MPC to start (fast, guaranteed solve); a learned/stochastic layer later.

### 3.2 Decision variables (per step)
- `P_chg[t]`, `P_dis[t]` — pack charge / discharge power
- `P_solar_use[t]` — solar routed to load vs battery vs export
- `P_chp[t]` — genset output (0 or a discrete efficient block)
- `P_export[t]` — V2X out (house / grid / toad)
- `P_grow[t]` — grow-light power (0 … rated)
- `P_hvac[t]`, `Q_buffer[t]` — comfort power + thermal-buffer charge/discharge
- `u_defer[t]` — on/off for dryer, dishwasher, water heat, toad charge

### 3.3 Objective (minimize)

```
J = Σ_t [ c_diesel·fuel(P_chp[t])           # burn as little diesel as possible
        + w_comfort·comfort_gap[t]           # penalize missing setpoints
        + w_grow·grow_DLI_shortfall          # penalize missing the daily light target
        - w_export·value(P_export[t])        # reward useful export (on surplus)
        + w_cycle·battery_throughput[t] ]     # gently penalize needless cycling
```

Weights `w_*` are tunable; `c_diesel` dominates (diesel is the thing we're really trying to delete).

### 3.4 Constraints (the hard ones)
- **Energy balance** each step: solar + discharge + CHP + shore = load + charge + export + losses.
- **SOC dynamics:** `SOC[t+1] = SOC[t] + (η_c·P_chg − P_dis/η_d)·Δt`.
- **⭐ Reserve floor (inviolable):** `SOC[t] ≥ E_reserve(t)` for all t — this is §1, and it's the constraint that makes "you can always get home" a guarantee, not a hope.
- **Pack limits:** SOC ∈ [min, max]; charge/discharge power ≤ BMS limits; no cold-charge.
- **Thermal:** buffer temps in range; comfort_gap tracks zone-temp error.
- **Grow:** Σ P_grow·Δt ≥ maintenance-DLI (winter) up to target-DLI (surplus).
- **CHP:** if on, runs a minimum efficient block (no trickle); respects fuel level.
- **Export:** only from `SOC − E_reserve` surplus; never crosses the floor.

### 3.5 If the solver fails / infeasible
Fall back to the **reactive L3 ladder** (v0.3 §4) — the ladder always produces a safe, sensible action without an optimizer. The MPC is an *enhancement*, never a dependency for safety.

---

## 4. Sensor + redundancy map (L0)

Which sensors exist, which are **safety-redundant** (duplicated, cross-checked by L1), and what the actuator does on signal loss. This is the L0 layer made concrete.

| Domain | Sensors | Safety-redundant? | Actuator default on loss |
|---|---|---|---|
| **Air quality** (×4 zones) | CO, CO₂, O₂, smoke/PM, humidity | **Yes** — CO + CO₂ dual, cross-checked | force ventilation open; cut CHP/cooktop |
| **HV / battery** | pack V, per-cell V/T, current, IMD, HVIL | **Yes** — current + IMD independent | contactors OPEN |
| **Coolant loops** | temps, pressures, flow, level | Partial — freeze-critical temps dual | pumps ON, valves to no-freeze |
| **Drive-reserve** | SOC (coulomb + voltage model) | **Yes** — two SOC estimators cross-checked | assume worst-case; hold floor |
| **Suspension / level** | ride-height ×4, load | single + plausibility | inhibit DRIVE; hold safe height |
| **Slides / tray / dock** | position/latch switches | single, but DRIVE-guard-critical | assume NOT stowed → inhibit DRIVE |
| **Water** | tank levels, flow, UV-health, leak | single | close supply on leak; alert |
| **Grow** | DLI/PPFD, EC, pH, water-present | single | lights to safe/off; pause dosing |
| **Fuel (CHP)** | level, run status, exhaust temp | single + CO interlock (redundant) | stop genset |
| **Comms/GPS** | Starlink/LTE link, GPS | n/a (not safety) | local operation continues |

**Redundancy principle:** anything that can **hurt a person** (air quality, HV) or **strand the vehicle** (SOC/reserve) is duplicated and cross-checked; everything else is single-sensor with a safe default and an alert. The **DRIVE-guard sensors** (slides/tray/dock/level) get the "assume unsafe on loss" rule — a failed latch switch reads as *not stowed*, so it blocks DRIVE rather than risking a transition it shouldn't allow.

---

## 5. What's now specified vs still open

**Specified (v0.4):** the reserve formula + worked numbers; the DRIVE-entry interlock; the full transition table; the MPC objective/variables/constraints; the sensor/redundancy map with fail-safe defaults.

**Still open (→ v0.5):**
- **Coefficient calibration** — `e_drive`, `k_wx`, `k_terrain`, the `w_*` weights — need real drive data (Phase-2 territory; the digital twin can pre-tune them).
- **Solver choice + compute budget** — which convex solver, how much host headroom, real-time-ness.
- **Digital-twin fidelity** — the thermal/pack/solar model detail needed to test all this offline.
- **Ethernet topology + per-device CAN bridging** (still carried from v0.2).
- **Host hardware finalized** with MPC + future-autonomy headroom.

---

*Controls brain SPEC v0.4, 2026-07-07. Makes v0.3 buildable. (1) DYNAMIC DRIVE-RESERVE FORMULA: E_reserve = (D_safe·e_drive·k_wx·k_terrain + E_climb)·(1+m); e_drive~1.6 kWh/mi, k_wx 1.0-1.35, k_terrain 1.0-1.25, E_climb = m·g·Δh/η (~21 kWh for 900 m), m=0.20. Breathes ~55-170 kWh with conditions (NOT the flat ~80 placeholder); a mountain tomorrow raises tonight's floor; tiers 3-6 only see SOC−E_reserve; L1 enforces. (2) STATE-MACHINE TRANSITION TABLE + GUARDS (controls_state_machine.png): one state at a time; app requests, L3 grants only if guard passes. DRIVE-ENTRY GUARD (the big interlock): slides IN + tray stowed + dock disconnected + ride-height set + reserve met + exterior retracted + BMS healthy — fail any = denied. EMERGENCY reachable from ALL states, no guard, always wins (L1 trips on fire/gas/CO2/HV/crash/reserve-breach). (3) MPC FORMULATION: 48h horizon @15min (192 steps), re-solve every 15min, linear/convex to start. Vars: charge/discharge, solar routing, CHP block, export, grow, HVAC, buffer, deferrable on/off. Objective min: diesel + comfort-gap + grow-shortfall − export-value + cycling. HARD CONSTRAINT: SOC≥E_reserve all t (the always-get-home guarantee). Infeasible→fall back to reactive ladder (MPC never a safety dependency). (4) SENSOR+REDUNDANCY MAP: air-quality (CO/CO2 dual) + HV + SOC are safety-REDUNDANT/cross-checked; DRIVE-guard sensors (slides/tray/dock/level) 'assume unsafe on loss' → block DRIVE; rest single-sensor + safe default + alert. Figure: controls_state_machine.png. Open→v0.5: coefficient calibration (needs drive data/digital twin), solver+compute budget, twin fidelity, Ethernet topology, host hardware.*
