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

## The "triplicate" deployable roof (TJ, 2026-06-29)

Roof kept **flat/square** to host a three-panel deployable array:
- **Center panel - fixed, rigid glass mono (~3.4 kW):** always on top, efficient, durable; this is the **driving-mode array** (stays put when moving).
- **Two flexible wings - deploy outward when parked:** flexible mono on a **fiberglass substrate** (light, thin, stow flat over/under the center panel), each ~roof-sized. Deployed they roughly **triple the footprint -> ~8.7 kW over ~50 m^2**, and **shade the bus + make covered outdoor space** (cuts cabin solar gain -> less A/C - a thermal co-benefit).
- **Panel-type decision:** **rigid glass = fixed center** (protected base, highest yield); **flexible = the fold-out wings** (light enough to cantilever on actuators). A heavy glass wing cantilevered out would be a weight/wind/mechanism problem, so **glass-on-wings is rejected**. The wings give up ~10-20% efficiency + run hotter, but they're *bonus parked area*, so that's the right trade.
- **Stowed (driving) ~3.4 kW; deployed (parked)