# Solar - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  V2 bus. New subsystem (flagged from the dual-domain/solar discussion).

## Requirement
**~3.5 kW fixed roof + autonomously deployable array extending to ~5-10 kW**; MPPT to the **48 V house domain** (and/or HV to the 400 V pack); **net-positive while parked in sun** (covers the ~10-15 kWh/day house *and* banks miles); feeds the 48 V house pack directly.

## Step 1-2 field, vetted

| Element | Tier | Candidate | Fit | Verdict |
|---|---|---|---|---|
| **Fixed roof panels** | B (adopt) | **Rigid monocrystalline** (~22-23% cell); **tilt mounts add ~40-50% yield** | Best yield/area; tiltable | **adopt - rigid, tiltable where possible** |
| **Low-profile / curved areas** | B | **Flexible mono/CIGS** (~20-23% cell *but* ~10-20% lower real yield - runs hot, mounted flat) | Conforms to curves, light | **only where shape demands** |
| **Deployable / tilting array** | A | off-the-shelf RV tilt mounts; **bespoke autonomous-deploy** mechanism | The "extends to 5-10 kW" idea | **self-build the auto-deploy** |
| **MPPT** | B | **Victron SmartSolar** (48 V) or HV MPPT direct to pack | Integrates with the chain | **adopt** (from Power-Electronics) |

## Verdict
**Adopt panels + MPPT off-the-shelf; lean rigid + tiltable for yield** (flexible only where the roof shape forces it - it runs hotter and yields ~10-20% less). The **value-add is the autonomously deployable array** (Tier A) - the thing that turns ~3.5 kW fixed into ~5-10 kW parked and makes the bus **net-positive while parked** (banks ~5-15 mi/day in summer while running the house - the "parked car loses range, parked house bus gains it" point). MPPT and the 48 V-direct feed are already covered in the Power-Electronics track.

## Open questions
1. **Fixed vs deployable split** (how much kW fixed vs the deployable array) - sets roof layout + the deploy mechanism size.
2. Rigid-vs-flexible mix by roof region (yield vs conformity).
3. **Autonomous-deploy mechanism** design (actuators, stow/deploy, wind/stow safety, theft).
4. **48 V MPPT vs HV MPPT** path (ties to the bidirectional-DC-DC + dual-domain decisions).

## V2+ headroom
Integrated solar skin (body-integrated PV); sun-tracking deploy; bifacial.

## Sources
- [Flexible vs rigid (rigid + tilt = best real yield; flexible ~10-20% lower, runs hot)](https://www.thervgeeks.com/flexible-solar-panels-vs-rigid/) · [Flexible panel 2025 efficiency ~22.5%](https://solartechonline.com/blog/flexible-solar-panels-guide/) · Victron SmartSolar (Power-Electronics track)

---
*Solar, steps 1-2 done. Adopt rigid+tiltable panels + Victron MPPT; the autonomously deployable array (3.5 -> 5-10 kW) is the Tier-A value-add that makes the bus net-positive parked. Resolve the fixed/deployable split + deploy mechanism, then a solar tracker.*
