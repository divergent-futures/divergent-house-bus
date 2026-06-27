# Safety & Egress - Design Track

**Status:** Seeded (ready to detail)  ·  **Priority/Sequence:** 2  ·  **Depends on:** Electrical, Thermal, Controls
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component below names its interface back to the shared loop / bus.

## 1. Purpose & requirements
This is a single unit, so failures are acute - the answer is graceful degradation within one vehicle, with detection, suppression, and two ways out.

## 2. Interfaces (to the integrated loop / bus)
These are the couplings this subsystem owns or touches, from the architecture interface map (I1-I12):

- Ties to the controller (I12) for interlocks and safe-shutdown

## 3. Components
- Fire extinguishers front + rear; battery aerosol suppression; galley/electrical-bay coverage
- Egress: front entrance + rear emergency hatch release with a window at the bed
- Detection: CO (genset), CO2 (ventilation), smoke/heat, refrigerant leak (if flammable refrigerant)
- HV safety: HVIL, insulation monitor, contactors, fusing; anti-scald valve; backup cabin-heat path

## 4. Electrical load contribution
Detectors (minor).

## 5. Mass contribution
Folded into misc.

## 6. Open questions
- Written single-unit degradation plan (heat / water / power failure paths)
- Suppression agent choice; egress hardware; detector placement

## 7. Sourcing & decisions
- Marine CO/CO2 detectors; battery aerosol suppression; Gigavac contactors; Bender IMD

---
*Seeded 2026-06-26. Fill in detail as the subsystem is designed; keep Section 2 in sync with the architecture interface map.*
