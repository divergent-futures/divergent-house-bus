# Thermal / HVAC Integration - Design Track

**Status:** Detailed v0.2 (TJ decisions folded in)  ·  **Priority/Sequence:** 1 (keystone - the core integration problem)  ·  **Depends on:** Electrical
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component names its interface back to the shared loop / bus.

---

## 1. Purpose & the integration-sizing problem

One machine serves every thermal job on the bus: zoned cabin cooling and heating, battery thermal conditioning, drivetrain cooling, the fridge/freezer (yes - on the same loop), hot-water / drying-room / climate-bed heat reuse, dehumidification, ventilation tempering, and capture of CHP genset heat. It is **one integrated system** - the fridge is not a separate appliance, it is the same compressor and loop pulling a small box down to two set points. That is harder than bolting on separate units, and it is the point: build the one system to do everything.

The keystone question is **not** "add up the averages." It is: **what is the worst load the core must serve when several jobs land at once?** Size for that, then let modulation, zoning, and a thermal buffer handle everything smaller.

## 2. The loop at a glance

| Role | Elements |
|---|---|
| Cold source | Heat-pump evaporator(s) |
| Heat sources | Heat-pump condenser (recovered), CHP genset jacket+exhaust, small electric resistive top-up |
| Cold sinks | Driving-cabin zone, rear-cabin zone, **fridge + freezer (two set points)**, hydroponic-reservoir cooling |
| Heat sinks (low-grade) | Hot-water preheat, drying room, cabin heat (zoned), climate bed, battery warming |
| Bi-directional | Battery (warm in winter / cool on fast-charge & hard drive), drivetrain(s) |
| Buffers | Hot store + cold store (sizing tabled - see Section 14) |
| Router | An expanded multi-port thermal manifold ("beyond Octovalve" - Section 6) |

## 3. Loads & the sizing cases (from the energy model)

| Load | Magnitude | When |
|---|---|---|
| Cabin cooling - driving zone only (on the move) | ~1-2 kW thermal | Travel |
| Cabin cooling - full bus (driving + rear) | ~3.5-4 kW thermal | Hot day, occupied rear |
| Cabin heating (-10 C / -20 C) | ~1.2 / ~1.6 kW continuous | Winter |
| Fridge + freezer (on loop, two set points) | ~0.2-0.4 kW | Year-round |
| Hydroponic reservoir cooling | ~0.1-0.3 kW | Grow cycle |
| Battery cooling on DC fast charge (~200-250 kW) | ~4-6 kW thermal | While fast charging |
| Battery cooling on hard driving | ~2-4 kW thermal | Grades |
| Drivetrain cooling | ~1-2 kW thermal | Driving |
| Battery warming (cold soak) | ~1-2 kW thermal | Deep winter |

**Binding case - CONFIRMED:** you **always cool the driving cabin during a fast charge**. So the worst simultaneous load is: fast-charge pack cooling (~5 kW) + driving-cabin cooling (~1.5 kW) + fridge/drivetrain (~1 kW) = **~7-8 kW thermal**. This sets the core. (Zoning helps here: only the driving cabin needs conditioning at a charge stop, not the whole bus.)

## 4. Heat-pump core sizing

- Size the core at **~8-10 kW thermal**, modulating to **~1 kW** for efficient part-load.
- Cooling electric input at COP ~3: ~2.7-3.3 kW - an **800 V HV compressor** (this is why the compressor lives on 800 V, not 48 V; see Electrical track).
- Heating: same core delivers ~3-5 kW thermal at COP ~2-2.5 in the cold; CHP supplements and warms the battery when air-source COP collapses.
- **Size reference to watch:** the Tesla Semi's thermal system is the closest production analogue to our scale (large cabin + big pack + drivetrain). When teardowns appear, use it to sanity-check loop sizing - we will be a bit larger again (fridge, multiple HVAC zones, water, hydroponics).

## 5. Dual-compressor architecture (redundancy + task-matching)

A single compressor is a single point of failure and a poor fit for loads with very different duty. The plan is **two compressors** sharing the manifold:

- **A variable-speed (inverter) compressor** - the workhorse; modulates smoothly across the wide range (cabin pull-down to part-load loafing), best for HVAC and battery duty.
- **A scroll compressor** - efficient at steady duty; well suited to the fridge/freezer and other near-constant loads.
- **Why two:** (1) **redundancy** - if one fails, the other carries a reduced "limp" mode so you never lose all heating/cooling or battery protection; (2) **task-matching** - a fridge, an HVAC zone, a dehumidifier, and battery/drivetrain cooling want different temperatures, lifts, and duty cycles; splitting the work lets each compressor run near its sweet spot instead of one compromise unit doing everything badly.

*The compressor choice is coupled to the refrigerant lane (Section 11) - CO2 needs a high-pressure compressor and stainless lines.*

## 6. The thermal manifold - "beyond Octovalve"

Tesla's Octovalve (8 ports) is the right concept at the wrong scale. Ours is a **larger multi-port manifold with more than eight loops**, because we add the fridge/freezer, two-to-three HVAC zones, drivetrain(s), hot-water, hydroponic-reservoir cooling, and the CHP heat input on top of the cabin/battery/recovery loops Tesla already routes. Treat "Octovalve" as the heritage reference and design our own expanded manifold + variable-speed glycol pumps. The Tesla Semi system (Section 4) is the closer size benchmark.

## 7. Zoned HVAC (modular by design)

The bus is two thermal zones that can be sealed from each other:

- **Driving cabin** (front seats, 2-4 travellers) - conditioned on the move and at charge stops, so you are not heating/cooling the whole bus to keep the driver and passengers comfortable.
- **Rear cabin** (bedroom / living) - conditioned when occupied/parked; can be sealed off and left unconditioned while driving to save load.
- **Modular control:** run the rear too (more power), run only the driving cabin, or shed small loads - the controller treats each zone and small load as independently switchable. Maximise modularity so power tracks need, not habit.

## 8. Fridge / freezer on the loop

The fridge and freezer are **served by the central thermal system**, not by their own compressors - the same cold the heat pump makes, distributed to two small insulated boxes at two set points via cold plates / a chilled-coolant cold store. Harder to control than a drop-in fridge; accepted, because it removes a separate compressor, shares the cold already being made, and lets recovered heat and load-shifting work across the whole system. The cold store also lets the boxes ride through compressor-off periods.

## 9. Battery thermal management

The 300 kWh structural pack is the biggest thermal mass and the most safety-critical sink.

- Keep cells in band (~15-35 C; exact window per final chemistry).
- **Winter:** warm from the loop (CHP heat in deep cold) so charging is permitted - never charge a cold battery (BMS lockout).
- **Fast charge / hard drive:** actively cool - the dominant term in the binding case.
- Structural-floor pack = large, low, distributed mass; cold-plate routing must reach the whole floor (routing open).

## 10. Operating modes (manifold routing)

| Mode | Cold to | Heat to | Notes |
|---|---|---|---|
| Travel (driving) | Driving cabin, battery, drivetrain | Hot water / dump | Rear sealed/off; drive-reserve protected |
| Fast-charge | Battery (priority) + driving cabin | Hot water / dump | Binding case; cabin always cooled |
| Summer parked | Both cabins, fridge | Hot-water tank then dump | Hot water "free"; bank surplus |
| Shoulder heating | (reverse) | Cabins, hot water | Air-source on solar/battery |
| Deep-winter CHP | (reverse/off) | Cabin + battery from genset heat | CHP primary; heat pump trims |
| Idle | Fridge cold store | Trickle to buffers | Minimal pump energy |

## 11. Refrigerant - two lanes (decision rationale)

The choices here are deliberate, and fire risk is the governing concern in a vehicle you live in full time.

- **Propane (R290) is rejected.** It is flammable (A3); adding a propane charge to a full-time dwelling raises fire risk, which the whole design works to reduce. Not used.
- **Lane A - V1, off-the-shelf:** the **standard automotive refrigerant (R1234yf**, as used by Tesla and most modern vehicles - low-GWP HFO, A2L). Chosen because the hardware (compressors, valves, lines, service tools) is mature and available now, and it keeps V1 buildable. *Note: A2L is "mildly flammable" - far less than propane, but not zero; handled with automotive-standard practice.* EPA refrigerant rules are evolving (HFC/HFO phase-downs), so this lane is reviewed over time.
- **Lane B - future / open-source-watch:** **CO2 (R744)**. Kept explicitly open because: **(1) non-flammable (A1)** - the best fire-safety answer for a live-in bus; **(2) more efficient on a system this size**, especially for the high-lift hot-water duty; **(3) ubiquitous, cheap, and trivial to charge.** The cost: CO2 runs ~5-6x higher pressure, so **aluminium lines/connectors between compressor and condenser must become stainless steel**, and the compressor must be a high-pressure type; CO2 also goes supercritical at different temperatures than conventional refrigerants, changing the control map.

**Why both lanes stay open:** Lane A makes V1 real today with existing parts; Lane B is the future-facing, fire-safest, most efficient path that the open-source community can track and adopt as CO2 hardware matures. The document records this so the *why* behind every choice is explicit: efficiency, availability, and above all keeping fire risk down.

## 12. System location - centre of the bus

The thermal/HVAC core, BMS, 48 V and HV battery connections live in a **central mechanical bay**, not the old front engine bay.

- **Shorter runs:** the battery (structural floor), most cooling demand (rear drivetrain, bedroom), and the mid-bus cluster - shower, hydroponics, fridge, drying unit, dehumidifier, HVAC/AC - are all near the centre. A front bay would force long coolant loops and extra wiring/hoses front-to-back.
- **Better heat harvest:** the recovered-heat users (hot water, shower, drying, hydroponics) are mid-bus, so the heat is captured and used right where it is made.
- **Serviceability & security:** easier to work on from inside; reachable from an external service door too; not exposed to tampering at the front.
- **Fire containment:** a central energy/thermal bay needs a dedicated fire-containment enclosure (ties to the Safety track) - more practical to contain mid-bus than in a front bay.

## 13. Hot side & grade-matching (recap)

Recovered heat is low-grade (~30-50 C): hot-water **preheat**, drying room, cabin heat, climate bed, battery warming. High-grade jobs stay electric - the **small ~3-4 kW inline coil** does the final hot-water lift and the periodic **>60 C Legionella disinfection**, anti-scald valve at the tap. (See Architecture heat-reuse section.)

## 14. Dehumidification & thermal buffers

- **Dehumidification:** warm moist upper-layer air drawn forward, water pulled out; kitchen range hood at source. Leaning **shared loop** (reuses the compressor and harvests the condensed water as washing-water condensate). Open: shared vs dedicated.
- **Buffer tanks (hot + cold): TABLED for now.** Sizing comes with the system sizing once the layout is set - how much hydroponics, where the HVAC/electrical/hot-water cluster sits, and the loop lengths that follow from the central-bay location. Revisit when the floor plan firms up.

## 15. Charging interface (cross-ref Electrical)

Confirmed standards (detail in the Electrical track):

- **MCS (Megawatt Charging System)** - primary for the heavy vehicle, ~1 MW class (up to ~1.2 MW).
- **NACS** - to use Tesla's network, including emerging **drive-through truck/trailer stalls** on major corridors (I-5 / I-10). NACS charges at ~250 kW; with a 300 kWh pack we expect to hold ~200 kW fairly consistently across ~10-60%, so a large slice of the Tesla network is usable.
- **No J1772, no CCS ports** - both covered by adapters.

This is why fast-charge battery cooling (Section 3) is a real, frequent load, and why the core must cool the cabin and the pack together.

## 16. Controls interface

Manifold valve positions, pump speeds, and per-compressor modulation are commanded by the supervisory controller (Controls track, interface I12) from temperature/pressure/flow sensors and BMS data, priority: safety (battery temp, no-freeze) -> comfort (zoned) -> efficiency (reuse before any electric top-up) -> autonomy. Dual-compressor failover logic lives here too.

## 17. Interfaces (to the shared loop / bus)

- I1 AC condenser -> coolant loop (recovered heat)
- I2 Heat-pump cold -> fridge/freezer (now on the loop, two set points)
- I3 Loop -> hot-water preheat
- I4 Loop -> drying room / climate bed
- I7 Genset -> coolant loop (CHP waste heat)
- I8 Loop -> battery warmer/cooler; drivetrain cooling
- I9 ERV <-> cabin air (zoned)
- Power: 800 V HV compressors + pumps from the Electrical track

## 18. Open questions (resolve to close v0.3)

- **Refrigerant lane for V1 build** confirmed as R1234yf; CO2 lane documented - decide trigger for switching.
- **Dual-compressor split** - exact models/duty assignment (variable vs scroll) and failover map.
- **Manifold port count & map** once all loops are enumerated.
- **Dehumidifier:** shared loop vs dedicated.
- **Buffer sizing** - tabled until layout firms up.
- **Battery cold-plate routing** across the structural floor; drivetrain loop tie-in (front and/or rear).
- **Central-bay packaging** and its fire-containment enclosure (with Safety track).

## 19. Sourcing leads

- TMS platforms / size reference: Tesla Semi thermal system (watch teardowns), Grayson CM1, Webasto eTM, Bergstrom, Thermo King zero-emission heat pump.
- HV compressors: Guchen, Sanden, Songz/Sanan (variable-speed + scroll options); CO2-rated compressors for Lane B.
- Multi-port valves: Infineon / Eaton EV valves; custom manifold for the expanded port count.
- Pumps: Grayson CP2, Davies Craig ECM (48 V variable speed). Plate exchangers: Alfa Laval.

## 20. Decision checklist (to mark this track "designed")

- [x] Binding concurrency confirmed (cool cabin during fast charge = yes)
- [x] Refrigerant approach set (R1234yf V1 lane + CO2 future lane; propane rejected)
- [x] Core capacity fixed (~8-10 kW, modulating)
- [x] System location set (central mechanical bay)
- [x] Compressor strategy set (dual: variable + scroll)
- [ ] Manifold port map enumerated and validated against all loops
- [ ] Dual-compressor duty split + failover logic specified
- [ ] Battery cold-plate + drivetrain routing designed
- [ ] Buffer sizes computed (after layout) and added to the energy model
- [ ] Fire-containment enclosure for the central bay (with Safety track)
- [ ] Cross-checked against the energy model and mass budget

---
*Detailed 2026-06-27 (v0.2). Decisions folded in: cabin-cool-during-charge, MCS+NACS charging, refrigerant two-lane (no propane), central-bay location, dual compressors, fridge-on-loop, zoned cabins. Next: enumerate the manifold port map and the dual-compressor duty split.*
