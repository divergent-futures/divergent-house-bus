# Safety & Egress - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  V2 bus. Pairs with `Safety_and_Egress.design.md`.

## Requirement
**Per-zone air-quality arrays** (CO / CO2 / O2 / RH / particulates) in all 4 zones; **smoke + CO detection**; a **second independent egress** (rear hatch/window); **fire extinguishers** front + rear; **fire suppression** for the contained HV/mechanical bay; **HV safety** (IMD + pyro fuse - covered in the Battery vetting); **Legionella disinfection** on the recovered-heat tank (thermal). Note: **sodium pack is non-flammable** (removes Li thermal-runaway fire mode) but **HV fault energy** remains.

## Step 1-2 field, vetted

| Element | Tier | Candidate | Fit | Verdict |
|---|---|---|---|---|
| **Smoke + CO detectors** | B (adopt) | **First Alert RV-approved** smoke + CO (12 V / battery) | RV-rated, off-the-shelf (no propane detector needed - no propane aboard) | **adopt** |
| **AQ sensor arrays** | A | **Sensirion SCD40/41** (NDIR CO2 + RH/T), + CO (Figaro/Sensirion), O2, **Plantower PM** | Build 4 zone arrays on ESP32 -> Controls | **self-build arrays** |
| **HV/mech-bay fire suppression** | B | **automatic aerosol/tube systems (Blazecut / StealthFire-class)** in the contained bay | Auto-discharge in the sealed bay | **adopt** |
| **Living-space extinguishers** | B | ABC extinguishers front + rear | Code-simple | **adopt** |
| **Second egress** | B | RV **emergency-exit window / roof hatch** (off-the-shelf) at the bed | Independent rear exit | **adopt** |
| **Legionella** | A | thermal disinfection cycle on the DHW tank (from Thermal track) | Periodic >60 C cycle | **integrate (thermal)** |

## Verdict
**Adopt the detectors, suppression, extinguishers, and egress hardware** (all off-the-shelf, RV-rated); **self-build the 4-zone AQ sensor arrays and the deterministic safety logic** that consumes them (ties to Controls - local, never overridden). The sodium chemistry already removes the biggest fire mode; the residual job is **HV fault containment** (bay suppression + IMD/pyro fuse from the Battery track) and **air-quality + egress** for a live-aboard.

## Open questions
1. Which suppression agent for the **HV/mech bay** (aerosol vs novel clean agent; auto + manual).
2. AQ sensor selection per zone (which gases beyond CO2/CO/PM are worth it - O2 only where combustion/CHP).
3. Egress window/hatch placement vs the bespoke frame + slide-out.
4. CHP-genset exhaust/CO interlock logic.

## V2+ headroom
Sensor fusion + predictive alarms; integrated bay fire/temperature interlocks with the BMS.

## Sources
- [First Alert RV smoke + CO](https://support.firstalert.com/s/article/rv-smoke-co) · [Sensirion SCD40 NDIR CO2](https://sensirion.com/products/catalog/SCD40)

---
*Safety & egress, steps 1-2 done. Adopt detectors/suppression/egress; self-build the 4-zone AQ arrays + deterministic safety logic. HV fault containment + AQ are the residual jobs (sodium removes the fire mode). Resolve suppression-agent + sensor-selection Qs, then a tracker.*
