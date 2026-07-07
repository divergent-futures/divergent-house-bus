# The Controls "Brain" — Whole-Vehicle Orchestration (v0.3)

**Date:** 2026-07-07 · V2 bus. Extends `Controls_and_Software.design.md` (v0.2: Ethernet backbone + phone/tablet access) into the **intelligent orchestration layer** — the part that actually *runs* everything we've designed since: drivetrain-heat harvest, PV/T, the CO₂ core, energy-aware grow lights, V2X, the house-bus microgrid, the transforming interior, auto-leveling. See `controls_architecture_stack.png` and `controls_brain_mpc_ladder.png`.

**One-line thesis:** *the hardware is a kit of clever parts; the brain is what makes them behave like one intelligent machine.* Every efficiency win we found (heat harvest, PV/T, load-shifting, V2X) is only real if something schedules it. That "something" is this.

---

## 0. What v0.3 adds over v0.2

v0.2 nailed the **plumbing**: Ethernet backbone, CAN gateways, Linux host + edge nodes, Victron brain, phone-as-key, fail-safe philosophy. It listed the control loops but treated them as independent thermostats.

v0.3 adds the **intelligence on top**: a formal **6-layer stack**, a **priority load-shed ladder**, a **whole-vehicle state machine** (operating modes), a **predictive optimizer (MPC)** that plans 24–48 h ahead, and the **cross-subsystem orchestration** that ties heat/power/water/grow/drive/interior into one coordinated system — plus the **house-bus microgrid** coordination. It's the difference between "each system minds itself" and "the bus thinks."

---

## 1. The six-layer stack

Top layers optimize; bottom layers guarantee. The rule: **L3–L5 (smart) can never override L1 (safety).** If the smart layers die, every subsystem falls back to safe *local* control.

| Layer | Job | Runs on | Timescale |
|---|---|---|---|
| **L5 HMI / App / Connectivity** | phone-key, app modes, monitoring, OTA, cloud, house↔bus link | tablet + phone + cloud | human / async |
| **L4 Predictive / Optimization** | plan next 24–48 h (charge, thermal, grow, V2X, level) | Linux host (Python/Rust) | minutes–hours |
| **L3 Supervisory Energy Manager** | load-shed ladder, power-flow, mode state-machine, microgrid | Linux host | seconds |
| **L2 Subsystem Controllers** | thermal / electrical / battery / drive / water / grow / interior loops | host + zonal edge nodes | 0.1–1 s |
| **L1 Real-time Safety** | interlocks, drive-reserve floor, air quality, egress, fail-safe | deterministic firmware (STM32/ESP32) | ms, hard real-time |
| **L0 Sensors & Actuators** | the I/O — read the world, move the valves | edge I/O | continuous |

**Why this split matters:** the safety layer (L1) is small, dumb, deterministic, and *independent*. It doesn't need the Linux host, the network, the cloud, or the optimizer to keep you alive and the pack safe. Everything smart is a layer *above* that floor and is allowed to fail without endangering anyone.

---

## 2. L1 — Real-time Safety Layer (the floor)

Deterministic firmware, hard real-time, redundant on the critical path, **never overridden by anything above.** It is the one part that must be boringly reliable.

**Interlocks it enforces (fail to safe):**
- **HV protection** — insulation-monitoring (IMD), contactor sequencing, pyro fuse, HVIL loop. Any fault → open contactors.
- **Battery gates** — never charge below ~0 °C; over-temp / over-voltage / over-current cutback; **thermal-event containment** (less acute with sodium/LFP than NMC, but still monitored).
- **Drive-reserve floor** — a hard kWh floor the house/export side can *never* draw below. You must always be able to drive to safety.
- **Air quality → life-support** — CO, CO₂, low-O₂, smoke/particulate → force ventilation, cut the offending source (CHP/cooktop), alarm, and in the limit shut down and unlock egress. (Ties to the 4-zone AQ sensing.)
- **Freeze protection** — no coolant loop is allowed to freeze; pumps/valves default to no-freeze positions on any loss.
- **Egress / emergency** — doors/hatch always openable from inside; power loss defaults to *unlocked from inside*. "Never sealed into or out of your own home."
- **Watchdog** — hung smart-layer service → restart; if it can't, subsystems drop to safe local control.

**Design tenet:** the safety layer has its own sensors on the critical loops (redundant with L2's), its own power, and its own logic. It is the answer to "what if the fancy brain crashes."

---

## 3. L2 — Subsystem Controllers (the hands)

Each subsystem is an autonomous controller that can run *on its own* (safe local mode) but takes setpoints/schedules from L3–L4 when they're alive. This is where every subsystem we've designed lives as code.

| Controller | Control loops it owns | Key inputs | Draws on |
|---|---|---|---|
| **Thermal** | CO₂-core compressor duty (dual, failover), the **18-port manifold** valve routing per mode, **heat-harvest capture** (drivetrain ~10 kW, exhaust gyroid, fridge reject, PV/T), buffer charge/discharge, zone HVAC, dehumid (desiccant regen off waste heat) | zone temps, buffer temps, COP, source-heat availability | Thermal track, `CHP_Exhaust…`, `Whole_Vehicle_Thermal…`, `Solar_PVT…` |
| **Electrical / Power** | **bidirectional DC-DC** both ways, MPPT (multi-array: roof + fold-outs + sides), **charge-source arbitration** (solar > stored > CHP > shore > DC-fast), **V2X export** paths, **microgrid** power-flow | SOC, solar in, load, export demand | Electrical, `Bidirectional_V2X…`, `House_Bus_Microgrid…` |
| **Battery** | 2× BMS (traction + house buffer if split), SOC/SOH, cell balancing, charge/discharge/temp limits, pre-conditioning | cell V/T, current | Battery track |
| **Drive / Suspension** | e-axle torque + **regen blending**, **air-suspension** ride-height (aero-lower at speed, lift for clearance), **auto-level** when parked, AWD split (if fitted) | speed, grade, load, level sensors | `Eaxle_RideHeight…`, `Rear_Hardpoints…` |
| **Water** | pumps, UV-health, filtration/filter-life, tank levels, greywater, **closed-loop shower** recirculation + condensate capture | levels, flow, water quality | Water track |
| **Hydro / Grow** *(Signature)* | **energy-aware grow lighting** (DLI target, chase solar, SOC-dim), pump/dosing, EC/pH, the **slide + dock** mechanism (auto-level-first, self-locking), **water-sensor light-dim** | DLI-so-far, SOC, solar forecast, water-present sensor | `Food_and_Hydroponics…`, Signature wet-room docs |
| **Interior / Comfort** | circadian lighting zones, the **slide-out MODES** (sleep/work/exercise/social), screens, per-zone air quality, dehumidification | occupancy, mode, schedule | `Reconfigurable_Interior…` |

**The point:** these aren't independent thermostats anymore. L3 arbitrates *between* them (the fridge's reject heat feeds the thermal buffer; the grow lights back off when the drive-reserve is tight; the suspension levels before the hydro tray deploys). That cross-talk is the whole game.

---

## 4. L3 — Supervisory Energy Manager (the referee)

Three responsibilities: **the load-shed ladder**, **power-flow arbitration**, and **the operating-mode state machine.**

### 4.1 The priority load-shed ladder
When supply is tight, shed from the **bottom up**; when abundant, add from the **bottom down**. (See `controls_brain_mpc_ladder.png`.)

| Tier | Contents | Rule |
|---|---|---|
| **1 Safety / life-support** | air quality, fire/gas, HV protection, egress, comms-for-help | **never shed** |
| **2 Drive-reserve floor** | the kWh reserved to reach your destination + margin | **protected floor** |
| **3 House essentials** | fridge/freezer, water + pumps, network, medical, minimum heat | shed last |
| **4 Comfort** | cabin HVAC to setpoint, full lighting, hot water | modulate |
| **5 Deferrable** | grow lights, dryer, dishwasher, water heating, toad charge | shift to surplus |
| **6 Opportunistic** | bank surplus, V2X export/sell, pre-charge, dump to buffers | only on surplus |

Tiers 1–2 are **hard floors** the smart layer physically can't cross (enforced at L1). Tiers 3–6 are where the intelligence lives: modulate comfort, time-shift deferrables to sunny/cheap windows, and only export/bank on genuine surplus.

### 4.2 Power-flow arbitration
Priority of *sources* to serve a load or a charge: **solar → stored (battery) → CHP (diesel) → shore → DC-fast.** Always use free/clean energy first; only fire the genset when the reserve is threatened *and* solar can't cover it; treat shore/DC-fast as backstops. The **thermal-first rule** rides on top: recover and reuse heat (harvest, buffers) before spending any electricity on heating.

### 4.3 The whole-vehicle state machine (operating modes)
One explicit state at a time; each mode sets the behavior of every subsystem. This is what an app "mode" button actually does.

| Mode | Thermal | Power | Drive/Susp | Grow/Interior | Notes |
|---|---|---|---|---|---|
| **DRIVE** | harvest drivetrain heat → buffers; pre-heat/cool cabin from motion | traction priority; solar tops pack; hold drive-reserve | aero-lower at speed; regen blend | modes locked to travel; grow on maintenance-DLI | the range-critical state |
| **PARK-CAMP** | full zone comfort; buffers ride peaks | solar + battery; CHP only if reserve threatened | auto-level; suspension soft | full interior modes; grow full-DLI on surplus | boondocking |
| **PARK-HOME (microgrid)** | house + bus share thermal | **bus powers the house** (V2H); house solar tops bus | leveled/docked | full modes; grow full | the anchor-battery state |
| **CHARGE** | pre-condition pack to ideal temp | pull from best source; balance cells | parked | defer heavy loads to charge window | shore/DC-fast/solar-bulk |
| **AWAY** | house on its own small solar+battery; bus dormant/storage | house base-load only (~5 kWh/day) | bus parked/stored | grow on low-maintenance; security armed | bus may be elsewhere |
| **STORAGE / SLEEP** | freeze-protect only | self-discharge-minimizing SOC hold | parked, immobilized | dark; monitoring only | long idle |
| **EMERGENCY** | safe-state thermal | shed to tier 1–2; V2X for backup power | unlock egress | alarms; comms-for-help | fault or hazard |

Transitions are guarded (you can't enter DRIVE with the hydro tray deployed or the slides out; you can't deep-export in a mode that needs the reserve). The state machine is the backbone the app rides on.

### 4.4 House-bus microgrid coordination
When docked in **PARK-HOME**: the bus serves the house (including HVAC) off its ~220 kWh exportable, while **house solar surplus tops the bus.** Reserve logic keeps a drive-reserve on the bus at all times (so you can always leave) and a house-reserve buffer. When the bus leaves (→ AWAY), the house seamlessly falls back to its own ~6–7 kWh battery + ~4 kW solar (base load only ~5 kWh/day, so it rides easily). The controller manages the handoff both directions. *(See `House_Bus_Microgrid.md`.)*

---

## 5. L4 — The Predictive Optimizer (the "AI brain")

This is the layer that makes the bus *anticipate* instead of *react*. A **Model-Predictive Controller (MPC)** plans a rolling **24–48 h** horizon, re-solved every cycle. (See `controls_brain_mpc_ladder.png`, left.)

### 5.1 Inputs (forecasts)
- **Route + elevation** — distance and climb to the destination → kWh needed to arrive *with reserve*. Sets tier-2's floor dynamically (a mountain pass tomorrow raises the reserve today).
- **Weather** — temperature → heating/cooling demand; cloud cover → solar yield.
- **Solar forecast** — expected kWh by hour across the arrays, next 2 days.
- **Prices / grid** — cheap windows (only relevant when grid-tied).
- **Occupancy / calendar** — home vs away, planned drives, wake/sleep times.
- **Battery SOC / SOH** — what you have and how hard the pack can be pushed.

### 5.2 The objective
Minimize **diesel burned** + maximize **comfort delivered**, subject to the hard constraint: **you can always reach your destination with reserve intact.** It's a constrained optimization, not a vibe — the arrival guarantee is inviolable; everything else is traded within it.

### 5.3 Scheduled actions (outputs)
- **Charge timing** — fill on the sunniest/cheapest windows; **pre-condition the pack** to ideal temperature just before a fast charge or a cold drive.
- **Thermal pre-positioning** — pre-heat the cabin off drivetrain heat *before* you park; pre-cool before a forecast hot afternoon; bank heat/cold in the buffers when energy is cheap so the compressor doesn't run at peak.
- **Grow-light DLI plan** — deliver the daily light integral **when energy is surplus** (chase the solar curve); dim/defer under low SOC; winter maintenance-DLI.
- **V2X export budget** — how much you can sell/share today given *tomorrow's* drive and weather (never export into a deficit).
- **Auto-level + slide modes** — level before a hydro deploy; set interior modes by schedule (exercise-floor at 6 a.m., dual-office at 9).
- **Diesel CHP windows** — if the genset must run, run it in **efficient full-power blocks** (charging the buffer + battery together) rather than inefficient trickle.

### 5.4 The feedback loop (it learns)
Each cycle compares **measured vs predicted** — actual solar harvested, actual drive energy, actual cabin response — and corrects the models. Over weeks it learns *your* patterns (your commute, your thermostat habits, your roof's real yield in this spot) and gets better at pre-positioning. This is where "AI-designed vehicle" earns the name: not a chatbot, but a controller that continuously fits itself to reality.

### 5.5 Two worked examples

**Winter travel day.** Forecast: −8 °C, a 180 mi drive with a 900 m climb, thin sun. The MPC raises the drive-reserve for the climb, schedules a CHP block overnight (cheap, and the waste heat pre-warms the cabin and pack), pre-conditions the pack to ideal temp at departure, harvests drivetrain heat into the buffer *while driving* so arrival heating is nearly free, and holds grow lights at maintenance-DLI. Diesel is burned in one efficient block, not all day.

**Hot parked day, boondocking.** Forecast: 34 °C, full sun, no drive tomorrow. The MPC pre-cools the cabin and banks cold in the buffer during the solar peak (so the compressor rides the free energy), runs the grow lights hard at midday surplus, tops the pack, and — with a big SOC and no drive coming — opens the **V2X export budget** to charge the toad / share power. Comfort is delivered on sunlight; the genset never starts.

---

## 6. L5 — HMI, App & Connectivity (the face)

Mostly specified in v0.2 §7–8; the brain adds the **mode** and **schedule** surfaces:
- **Phone-as-key** (+ card/fob backup + mechanical override) — unchanged.
- **App / tablet** — the **mode selector** (sleep/work/exercise/social/travel/away) that drives §4.3; live SOC/range, thermal + zone temps, 4-zone air quality, water, solar/charge, **V2X export controls**, **grow status**, security. Pre-conditioning from anywhere.
- **Connectivity** — Starlink + cellular failover for weather/route/solar data (feeds the MPC), remote monitoring, **signed OTA** (software only; never a path to L1), cloud logging (Victron VRM + custom), and the **house↔bus link** when apart.
- **Community layer** — because it's open source, configs/automations/MPC models are shareable; the fleet's real-world data improves everyone's models (the Mutiny-Motors-style open commons).

---

## 7. Degradation ladder (single-unit philosophy, for controls)

What happens as pieces fail — always toward safe + still-livable:

| Failure | Behavior |
|---|---|
| Lose the **predictive layer (L4)** | fall back to reactive L3 rules (ladder + arbitration still work; you just lose look-ahead) |
| Lose the **smart layers (L3–L4)** | subsystems drop to **safe local control** — thermostatic heat, manual lights, hold reserve; the bus is "dumb but fine" |
| Lose a **compressor** | thermal limp mode on the survivor |
| Lose **comms / cloud** | everything keeps running locally; you just lose remote view + fresh forecasts (MPC coasts on last-known) |
| Lose a **sensor** | redundant sensor or safe default; flag for service |
| Lose a **phone** | backup key card; mechanical override |
| Lose the **Linux host entirely** | L1 safety firmware keeps the pack safe, loops unfrozen, egress open; edge nodes hold safe local control |

The invariant: **there is no single failure that either endangers you or seals you in/out.**

---

## 8. Compute & network (extends v0.2)

- **Split-brain by design:** the *smart* layers (L3–L5) run on the rugged Linux host (Python for services + optimization, Rust where determinism/perf matters); the *safety* layer (L1) runs on **separate deterministic firmware** (STM32/ESP32-class) with its own I/O — so a host crash can't take out safety.
- **Backbone:** automotive Ethernet (100/1000BASE-T1) + managed switch; **CAN gateways** only where legacy EV parts require it; TSN or kept-local timing for safety loops.
- **Edge nodes** at each zone/cluster (thermal bay, battery, water, grow, interior) — short local runs, Ethernet home.
- **Redundant on the critical path**; the guest/Windows compute stays hard-isolated from the control network.

---

## 9. Software stack & the digital twin

- **OS/services:** Ubuntu + PREEMPT_RT; Python (FastAPI local API, pandas/NumPy for logging + the optimizer), state-machines + PID/MPC; MQTT/SOME/IP middleware; `python-can` only at gateways.
- **Automation/UI:** Home Assistant (or Node-RED) for high-level rules + tablet UI; local web dashboard for the phone.
- **Data:** time-series (InfluxDB) — the same logs that prove the energy model *and* train the MPC.
- **Digital twin (new):** a simulation model of the bus (thermal masses, pack, solar, loads) so the control logic is **tested in software before it ever touches hardware** — you can replay a winter week, a heat wave, a fault, and tune the MPC offline. This is how you de-risk "the brain" without bricking the real vehicle.
- **Everything in Git**, MIT, in this repo — the community can read exactly how the bus thinks.

---

## 10. Security & OTA

- Cryptographic phone-as-key (rolling credential, hard-to-clone), drive-enable auth, intrusion alerts.
- **Signed, staged OTA** for the smart layers only — **no OTA path to L1 safety firmware** (updated only by deliberate physical/service action).
- Guest compute + any cloud path **hard-isolated** from the control network.
- Privacy: telemetry is the owner's; sharing to the community commons is **opt-in** and scrubbed.

---

## 11. Build phasing (don't boil the ocean)

- **Phase 1 (V1 / first build):** L0–L2 + a *reactive* L3 (ladder + arbitration + state machine) + L5 app. **No MPC yet** — conservative, monitor-and-automate. Prove the sensors, the safety layer, the ladder.
- **Phase 2:** turn on **L4 MPC** once you have real logged data to fit it to. Start with the highest-value schedules (charge timing, thermal pre-position, grow DLI), add V2X budgeting.
- **Phase 3:** the learning loop + digital-twin-in-the-loop tuning + community model-sharing. Autonomy/ADAS stays a *separate compute lane*, out of scope for the control plane.

The architecture supports all three from day one; you just light up layers as the data justifies them.

---

## 12. Open items (to close v0.4)

- **MPC formulation** — pick the solver/approach (rule-based → linear MPC → learned); define the objective weights + the hard arrival constraint precisely.
- **State-machine spec** — enumerate every mode transition + its guards (the interlocks between DRIVE and deployed slides/tray/dock).
- **Reserve math** — the dynamic drive-reserve formula (distance + climb + weather + margin) that sets tier-2's floor.
- **Sensor list + redundancy map** — every L0 point, which are safety-redundant, failure defaults.
- **Digital-twin scope** — how detailed a model to build for offline control testing.
- **Ethernet topology + per-device bridging** (carried from v0.2) — which parts are CAN, how they gateway, TSN vs local timing.
- **Host hardware** finalized with headroom for the MPC (and a future autonomy lane).

---

*Controls brain v0.3, 2026-07-07. Extends the v0.2 track (Ethernet + access) into full intelligent orchestration. SIX LAYERS: L0 sensors, L1 deterministic SAFETY (interlocks/drive-reserve/air-quality/egress — never overridden), L2 subsystem controllers (thermal/electrical/battery/drive/water/grow/interior, each safe-local-capable), L3 supervisory ENERGY MANAGER (priority load-shed LADDER [1 safety>2 drive-reserve>3 house-essentials>4 comfort>5 deferrable>6 opportunistic]; power-flow arbitration solar>stored>CHP>shore>DC-fast; whole-vehicle STATE MACHINE drive/park-camp/park-home/charge/away/storage/emergency; house-bus microgrid coordination), L4 PREDICTIVE MPC (plans 24-48h: inputs route+elevation/weather/solar/prices/occupancy/SOC → actions charge-timing/thermal-pre-position/grow-DLI/V2X-budget/auto-level/CHP-windows; objective = min diesel + max comfort s.t. always-reach-destination; feedback loop learns your patterns), L5 HMI/app/connectivity (phone-key, mode selector, OTA, house↔bus link, open-source community). KEY RULE: smart layers optimize, safety guarantees — L3-L5 can NEVER override L1; on smart-layer loss everything falls to safe LOCAL control. Degradation ladder = no single failure endangers or seals in/out. Split-brain compute (Linux host for smart + separate deterministic firmware for safety). Digital twin = test control in sim before hardware. Phasing: V1 reactive (no MPC) → V2 MPC once data exists → V3 learning + community models. Figures: controls_architecture_stack.png, controls_brain_mpc_ladder.png. Next (v0.4): MPC formulation, state-machine transition spec, dynamic reserve math, sensor/redundancy map, digital-twin scope.*
