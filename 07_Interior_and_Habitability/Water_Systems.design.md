# Water Systems - Design Track

**Status:** Seeded (ready to detail)  ·  **Priority/Sequence:** 2  ·  **Depends on:** Electrical, Thermal (hot water)
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component below names its interface back to the shared loop / bus.

## 1. Purpose & requirements
Keep a clean drinking line fully separate from recirculating wash water. Drinking/cooking from a stainless tank filled externally; washing from a reticulating loop topped up with UV-treated AC condensate; optional rainwater catchment.

## 2. Interfaces (to the integrated loop / bus)
These are the couplings this subsystem owns or touches, from the architecture interface map (I1-I12):

- I10 Condensate -> filter + UV loop -> wash water
- Hot water served by the thermal loop (I3); small inline coil does the final lift

## 3. Components
- Dedicated stainless-steel drinking tank + external potable fill (hose) inlet + pump + inline filter/UV
- Reticulating shower loop (~10-15 gal): real-time hair/dirt/oil filtration + UV + small inline coil + anti-scald mixing valve
- Grey capture; composting toilet with urine diverter (no flush water)
- Rainwater diverter off roof drainage -> holding tank -> filter/UV (optional, V1 TBD)
- Plumbing, pumps, level/turbidity/UV-health sensors

## 4. Electrical load contribution
Pumps + UV (see model: water UV + filter pump, water pumps).

## 5. Mass contribution
Water group: tanks ~200 lb, reticulating shower ~60, composting toilet ~50, plumbing ~90.

## 6. Open questions
- Drinking-vs-wash plumbing separation detail
- Shower loop volume (10 vs 15 gal)
- Rainwater: include in V1?
- Water-quality monitoring set (TDS / turbidity / UV-lamp health)

## 7. Sourcing & decisions
- Shurflo / diaphragm pumps; marine UV; Nature's Head or Trelino head; SS tank fabrication

---
*Seeded 2026-06-26. Fill in detail as the subsystem is designed; keep Section 2 in sync with the architecture interface map.*
