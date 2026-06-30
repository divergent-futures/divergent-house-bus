# Thermal - Manifold Port Map, Valve Logic & Compressor Duty (granular)

**Status:** Granular v0.1  ·  **Parent:** Thermal / HVAC Integration (v0.2)  ·  **Depends on:** Thermal v0.2, Electrical
**Part of:** House BUS subsystem design tracks - the first granular pass below the basic v0.x layer.

This drills into the three items the Thermal track deferred: the **manifold port map**, the **valve-logic mode matrix**, and the **dual-compressor duty split** - plus first-pass buffer sizing.

---

## 1. The multi-temperature problem (the real reason for two compressors)

A single evaporator at one temperature cannot efficiently serve a **-18 C freezer** AND a **+4 C fridge** AND **cabin cooling** AND **+15-30 C battery** at once - dragging the whole system down to freezer temperature would wreck efficiency. So the system splits into **two refrigeration circuits by temperature level**, each on its own compressor:

- **High-temp circuit** (efficient, evaporating ~0 to +7 C): cabin zones, battery cooling, drivetrain/power-electronics, hydroponic reservoir. Its condenser heat is the recovered heat for hot water / cabin / drying.
- **Low-temp circuit** (evaporating ~-25 C): fridge cold-store (+2..+4 C) and freezer (-18 C) only - a small, steady load.

**This temperature split - not just redundancy - is the engineering rationale for the dual compressors.** You only run the small circuit cold; the big circuit stays at an efficient, high evaporating temperature.

## 2. Port map (the manifold "beyond Octovalve")

| Port | Connects to | Side | Type | Design band | Notes |
|---|---|---|---|---|---|
| P1 | Heat-pump evaporator - HIGH-temp circuit | cold | cold source | ~0..+7 C | Compressor A suction |
| P2 | Driving-cabin fan-coil | cold/hot | zone sink (bi) | 18-24 C air | Conditioned on the move |
| P3 | Rear-cabin fan-coil | cold/hot | zone sink (bi) | 18-24 C air | Sealable; off while driving |
| P4 | Battery cold-plates | both | bidirectional | 15-35 C cells | Cool on charge/drive; warm in winter |
| P5 | Drivetrain + power electronics | cold | cold sink | <60 C parts | Driving load |
| P6 | Hydroponic reservoir | cold | cold sink | 18-22 C root-zone | Trim only |
| P7 | Heat-pump evaporator - LOW-temp circuit | cold | cold source | ~-25 C | Compressor B suction |
| P8 | Fridge cold-store | cold | cold sink | +2..+4 C | Buffered box |
| P9 | Freezer | cold | cold sink | -18 C | Hardest sink; low-temp circuit only |
| P10 | Heat-pump condenser (both circuits) | hot | heat source | 40-55 C | Recovered heat |
| P11 | Hot-water tank coil | hot | heat sink | preheat to ~45 C | Small coil finishes (Water track) |
| P12 | Drying-room coil | hot | heat sink | 35-45 C | By-product heat |
| P13 | Cabin heat (zoned, via P2/P3) | hot | heat sink | 25-40 C | Shoulder/winter |
| P14 | Climate bed | both | bidirectional | sleep surface | Small micro-climate loop |
| P15 | CHP genset heat exchanger | hot | heat source | 50-80 C | Winter; jacket+exhaust |
| P16 | Hot buffer store | hot | store (bi) | banked heat | Decouples DHW timing |
| P17 | Cold buffer / PCM | cold | store (bi) | ride-through | Cuts compressor cycling |
| P18 | Dehumidifier coil | cold/hot | sink | condense + reheat | Shared-loop option (open) |

18 ports - the reason it is an expanded manifold, not an 8-port Octovalve.

## 3. Dual-compressor duty split

| | Compressor A | Compressor B |
|---|---|---|
| Type | Variable-speed (inverter scroll) | Scroll (fixed / 2-stage) |
| Circuit | HIGH-temp (~0..+7 C evap) | LOW-temp (~-25 C evap) |
| Serves | Cabin zones, battery, drivetrain, hydro + ALL condenser heat reuse | Fridge cold-store + freezer |
| Duty | Wide modulation (1 -> 8+ kW), most of the work | Steady, small, near-constant |
| Why | Matches the big, variable comfort/battery load | Matches the small, cold, constant refrigeration load |

**Failover (limp mode):**
- **A fails:** B + the cold buffer carry minimal refrigeration; cabin/battery cooling cross-connects to B's circuit at reduced capacity (warmer-than-ideal); heating falls to CHP/resistive; discretionary cooling shed. Vehicle stays safe and drivable.
- **B fails:** A serves the fridge via the cold-store at reduced efficiency (higher evaporator temp); the freezer is at risk -> consume/relocate frozen goods or accept loss; battery + cabin protected. 
- Both share the condenser/manifold so heat reuse continues on whichever compressor runs.

## 4. Valve-logic / mode matrix

| Mode | High-temp circuit (A) | Low-temp circuit (B) | Condenser heat to | Compressors |
|---|---|---|---|---|
| Travel (driving) | Driving cabin + battery + drivetrain | Fridge/freezer | Hot-water tank, then dump | A modulating, B as needed |
| Fast-charge | Battery (priority) + driving cabin | Fridge/freezer | Hot water / dump | A high, B steady |
| Summer parked | Both cabins + hydro | Fridge/freezer | Hot-water tank, bank surplus to buffer | A modulating, B steady |
| Shoulder heating | (reverse) cabins from condenser/buffer | Fridge/freezer | Cabins + hot water | A in heat mode, B steady |
| Deep-winter CHP | Cabins + battery warmed from CHP/loop | Fridge/freezer | CHP primary; A trims | A low/off, B steady, CHP on |
| Idle / parked-off | Cold buffer top-up | Fridge/freezer (buffered) | Trickle to buffers | Both cycling minimally |

## 5. First-pass buffer sizing

- **Hot buffer:** one shower ~8 L/min x 8 min = ~64 L; reheat 15 -> 45 C (dT 30) = 64 x 1.163 x 30 / 1000 = **~2.2 kWh thermal**. A **~60 L** insulated buffer, charged when cooling/CHP runs, banks an evening shower's worth - the small inline coil only trims the final few degrees.
- **Cold buffer / PCM:** fridge + freezer reject ~0.2-0.4 kW thermal; to ride ~2 hr of compressor-off needs **~0.4-0.8 kWh** of cold storage - a modest chilled-glycol mass or PCM module - which also halves compressor short-cycling.
- These stay first-pass until the layout fixes tank locations and the energy model takes the loads back.

## 6. Open questions / next granular

- Validate evaporating temps + COP per circuit; confirm refrigerant per circuit (R1234yf both lanes, or CO2 for the high-temp/DHW circuit).
- **Cold-plate routing** across the structural battery floor (with Structure).
- Manifold **valve count / type / actuators** and the failover cross-connect valves.
- **Hydraulics:** flow rates, dT, pump sizing, parasitic power per loop.
- Dehumidifier: shared loop (P18) vs dedicated - resolve.
- Feed buffer sizes back into the energy model once the layout firms.

## 7. Decision checklist

- [x] Two-circuit (high/low temp) split defined and justified
- [x] 18-port manifold map enumerated
- [x] Dual-compressor duty split + failover logic specified
- [x] Mode matrix drafted
- [x] First-pass buffer sizing (hot ~60 L, cold ~0.4-0.8 kWh)
- [ ] Per-circuit evaporating temps + COP validated
- [ ] Cold-plate routing across the floor
- [ ] Manifold valve/actuator selection
- [ ] Loop hydraulics + pump sizing
- [ ] Buffer sizes reconciled into the energy model

---
*Granular v0.1 (2026-06-29). The dual compressors exist because the system spans freezer-cold to cabin-warm - one temperature can't serve all. Next granular: per-circuit COP validation + cold-plate routing, which need the layout's tank/plate locations.*
