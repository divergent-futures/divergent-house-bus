# Water Systems - Design Track

**Status:** Detailed v0.1 (first deep pass)  ·  **Priority/Sequence:** 2  ·  **Depends on:** Electrical, Thermal (hot water + reservoir cooling)
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component names its interface back to the shared loop / bus.

---

## 1. Purpose & the two-water principle

Water splits into two completely separate domains, and keeping them separate is the safety backbone of the whole system:

- **Drinking / cooking water** - clean, from a dedicated tank, filled externally; never mixed with reclaimed water.
- **Wash water** - a recirculating loop (shower, dishes, laundry) topped up with UV-treated AC condensate; "human-use clean," not drinking-clean.

Plus the closed bio-loops on the edges: hydroponics and the composting toilet's urine stream. The governing rule throughout is **treatment matched to contaminant: UV kills pathogens, filtration removes particulates, RO/electrodialysis strips dissolved salts** - they are not interchangeable.

## 2. Water domains at a glance

| Domain | Source | Treatment | Notes |
|---|---|---|---|
| Drinking / cooking | External fill tank + rooftop rainwater | Sediment -> carbon -> (RO if from dirty source) -> UV; remineralise if RO'd | Stays separate; the only water you ingest |
| Shower (wash) | Recirculating loop + AC condensate top-up | Particulate filter -> UV; anti-scald valve | ~10-15 gal inventory; keeps heat in |
| Dish wash | Condensate / treated, via the UV loop | Filter -> UV | Low-mineral water is ideal for dishes |
| Laundry | Reclaimed / condensate | Filter + UV | - |
| Hydroponics | Condensate + treated grey | Nutrient-dose; reservoir cooled by thermal loop | Demonstrator + greens, not food self-sufficiency |
| Toilet | Composting - no flush water | Urine diverted, treated, salt-stripped (Section 8) | Closes a nutrient loop |

## 3. Drinking & cooking water

- **Dedicated stainless-steel potable tank**, filled from outside through a **hose connection / potable inlet** so you can top up directly from a known-good source.
- Pump + inline **sediment -> carbon -> UV** at point of use; RO + remineralisation only if the fill source is questionable.
- Completely isolated plumbing from the wash loop (no cross-connection, backflow prevention at the inlet).
- This cleanly answers the "drinking-water source" gap: the source is an external fill (and rainwater, Section 7), not the condensate.

## 4. Reticulating shower / wash loop

- A small **recirculating (reticulating) loop, ~10-15 gal total inventory**, that filters out hair, dirt, and oils in real time while keeping the heat in the water - so a shower uses a fraction of the fresh water of a conventional one (proven approach, e.g. Orbital Systems ~80-90% reduction).
- **Inline electric coil (~3-4 kW)** trims the temperature back up from whatever it has dropped to - small, because the thermal loop preheat does most of the lift (instead of a 10-12 kW heater).
- **Anti-scald mixing valve** at the outlet; UV on the loop keeps it germ-free; topped up from UV-treated AC condensate.
- Avoid aerosolising any untreated water (Legionella) - the UV stage handles it.

## 5. Hot water (cross-ref Thermal)

Hot water is preheated by recovered heat on the coolant loop (interface I3); the small inline coil does the final lift and the periodic **>60 C Legionella disinfection** of the recovered-heat tank, anti-scald valve at the tap. (Full logic in the Thermal track + Architecture heat-reuse section.)

## 6. Condensate harvesting

- AC/HVAC condensate is **nearly distilled** - almost no minerals - which makes it ideal washing water (no scale, less soap) but means it is **for washing, not drinking**.
- It is **not safe raw** (bacteria/coliforms in the coil/drip pan); a **particulate filter + inline UV** on the loop makes it germ-free.
- Effectively **free** (the AC runs anyway) but only while cooling, in modest volumes - it supplements the wash loop, it is not a primary source.
- Harvested at the central thermal bay where the AC/condenser sits (interface I10), close to the mid-bus shower.

## 7. Rainwater catchment (optional, designed-in path)

The roof needs drainage anyway; runoff goes to the sides and down to a collection point. A **diverter** there can route rainwater into a holding tank -> filter/UV -> the fresh/drinking supply, topping up when it rains - the cheapest closed-loop source, and it works in exactly the cool/wet conditions where condensate dries up. **Open:** include in V1 or reserve the path for later; sizing.

## 8. Sanitation & the urine -> hydroponics nutrient loop

- **Composting toilet** with urine diverter - aerobic solids composting (no anaerobic stink), no flush water, no black tank.
- **Urine treated and fed into the hydroponic loop** as a nitrogen / N-P-K source - closing a nutrient loop, not just disposing of waste.
- **Critical bound - sodium, not pathogens, is the real enemy.** UV kills pathogens, but urine is salt-heavy (NaCl) and plants take up almost none; in a closed loop, transpiration concentrates the salt cycle after cycle until it turns phytotoxic. Managing it needs **RO or electrodialysis to strip sodium**, which produces a small **brine bleed** (so "fully closed" honestly carries an asterisk).
- **Throughline:** nitrogen recovery + salt management in a closed bio-loop is exactly the ESA **MELiSSA** problem that HABITAT builds on - the house bus and the space module are solving the same closed-loop chemistry.

## 9. Greywater & the output streams

- **Shower / sink overflow** that leaves the wash loop, plus the **dishwasher stream**, are the dirty greywater (food fats, soap, toothpaste) - too contaminated to reclaim cheaply.
- These become a **greywater output** that leaves the bus at a dump/home-port connection. The loop is honestly *not fully closed*: condensate and the brine bleed and the greywater are real output streams. Saying so keeps the design honest.

## 10. Hydroponics water (cross-ref Thermal)

- Fed by AC condensate + treated grey + the urine-derived nutrients; nutrient/pH dosed; **don't RO clean condensate** (it wastes the purity the plants want added back).
- The **hydroponic reservoir is cooled by the thermal loop** (a manifold port) to hold root-zone temperature - another reason the water and thermal tracks are one system.
- Bounded honestly as a **demonstrator + fresh greens**, energy/light-limited, not calorie self-sufficiency.

## 11. Water balance & inventory (first pass)

- 2 occupants, ~40 L/person/day nominal; the reticulating shower collapses fresh demand dramatically.
- Target onboard inventory: a **drinking tank** (size TBD with layout) + the **~10-15 gal wash loop** + small hydroponic reservoir + grey holding.
- Reclaim target ~85-95% on the wash side; drinking comes from fill + rain. Full numbers firm up with the layout and hydroponics sizing (same gate as the thermal buffer sizing).

## 12. Monitoring & instrumentation

Tank levels, TDS and turbidity, UV-lamp health, filter-life counters, leak detection - surfaced on the same dashboard as energy and thermal (Controls track). Reclaimed water without monitoring is a health risk, not a feature.

## 13. Location & integration

The wet cluster - shower, hydroponics, hot-water tank, dehumidifier condensate, fridge - sits **mid-bus next to the thermal core**, so recovered heat is captured where it is used and condensate is harvested where it is made. Interfaces: **I10** (condensate -> UV -> wash), **I3** (hot water via thermal loop), plus the hydroponic-reservoir cooling port on the thermal manifold.

## 14. Loads & mass

- **Electrical:** pumps + UV on the 48 V rail (see energy model: water UV + filter pump, water pumps); small inline coil draws from HV/AC for the final lift.
- **Mass:** drinking + grey tanks, reticulating shower + filters, composting toilet, plumbing (see mass budget Water group ~400 lb optimized).

## 15. Open questions (resolve to close v0.2)

- **Rainwater catchment:** include in V1 or reserve the path?
- **Shower loop volume** (10 vs 15 gal) and filter media selection.
- **Urine salt-strip:** RO vs electrodialysis, sizing, and where the brine bleed goes.
- **Drinking-vs-wash plumbing separation** detail + backflow prevention.
- **Greywater boundary:** what gets reclaimed vs sent to the dump.
- **Water-quality monitoring set** (which sensors, thresholds).
- Inventory sizing - tabled with the layout (same gate as thermal buffers).

## 16. Sourcing leads

- Pumps: Shurflo / diaphragm (48 V). UV: marine/RV inline UV. Filters: sediment + carbon + fine media for the wash loop.
- Composting head: Nature's Head / Trelino. Recirculating-shower precedent: Orbital Systems.
- RO / electrodialysis stack for the urine salt-strip (Lane B / granular round).
- SS potable tank: custom fabrication.

## 17. Decision checklist (to mark this track "designed")

- [x] Two-water principle set (drinking isolated from wash)
- [x] Drinking source set (external fill + rainwater path; SS tank)
- [x] Wash loop approach set (reticulating + condensate + small coil + UV)
- [x] Treatment-matched-to-contaminant rule applied across all streams
- [ ] Rainwater V1 include/defer decision
- [ ] Urine salt-strip method + brine-bleed handling
- [ ] Inventory + reservoir sizing (after layout)
- [ ] Monitoring sensor set finalised
- [ ] Cross-checked against energy model + mass budget

---
*Detailed 2026-06-27 (v0.1). Honest bounds carried through: condensate is washing-not-drinking; the loop has real output streams (greywater, brine bleed, condensate) - "closed loop" with an asterisk. Next: rainwater V1 decision + urine salt-strip method (granular round, with layout).*
