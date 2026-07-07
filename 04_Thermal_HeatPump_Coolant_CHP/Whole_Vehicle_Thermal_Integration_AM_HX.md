# Whole-Vehicle Thermal Integration — AM Heat Exchangers as a System Strategy

**Date:** 2026-07-03  ·  V2 bus. TJ's realization from the CHP work: LEAP-71-class **additive (gyroid/TPMS) heat exchangers aren't one part — they're a system strategy.** Put a compact, high-effectiveness AM HX at **every place heat moves** (CHP exhaust, CO₂ gas-cooler/evaporators, heat-rejection grille, **and the drivetrain**), and the whole thermal system gets more efficient — with a **virtuous feedback loop** that shrinks the diesel, the tank, and the weight. See `thermal_system_integration.png`. Extends `CHP_Exhaust_Heat_Recovery_AM_Gyroid.md`.

---

## 1. Harvest drivetrain heat (the big new source)
A bus/large truck **makes a lot of heat while driving.** At 65 mph cruise (~68 kW battery draw, ~88% drivetrain efficiency): **~8 kW of drivetrain loss + ~1–2 kW battery = ~10 kW of heat** available continuously while moving (much more on grades/acceleration/fast-charge).
- **Winter heat demand is only ~4–5 kW** (cabin + battery + DHW). So **driving harvests ~2× the winter heat demand** → in winter, **driving heats the bus for free** and the diesel barely runs. (This is the Konvekta e-bus axle/battery-scavenging idea, supercharged by AM-HX effectiveness.)
- **Summer:** the same drivetrain heat is **rejected more efficiently** through a compact AM grille — the drivetrain runs cooler (which itself helps efficiency + longevity).

## 2. Higher heat-pump COP
Better AM heat exchangers (gas-cooler + evaporators) tighten the approach temperatures → the CO₂ heat-pump **COP rises ~3 → 4** ≈ **~25% less electricity per unit of heat**. Everything thermal costs less energy.

## 3. The efficiency feedback loop (TJ)
> Better AM HX → **higher COP + more harvest** → **less energy for heat** → **CHP runs much less** → **less diesel + smaller tank + less weight** → **more range/efficiency** → less energy needed → (loop).

The insight: **winter's dominant load is heat, not electricity.** Make heat cheap (harvest + high COP) and the genset's job collapses — so you carry **less diesel, a smaller tank, and less weight**, which makes the whole vehicle more efficient, which lowers the energy need again. A genuine virtuous cycle.

## 4. Consolidation
Compact AM HX **do more per unit volume**, so you need **fewer/smaller separate condensers, evaporators, and coils** → **less mass + volume in the rear mech cluster**. The thermal core trends toward **one AM-HX manifold** doing capture, reject, and transfer, instead of a rack of discrete conventional HXs.

## 5. So the strategy
- **AM (gyroid/TPMS) HX everywhere heat moves:** CHP exhaust recuperator (done) · CO₂ **gas-cooler** · plate **evaporators** · cooling-mode **heat-rejection grille** · **drivetrain cooling/harvest** loop.
- **Harvest > reject:** in winter, route drivetrain + exhaust + fridge heat to cabin/battery/DHW; in summer, reject efficiently.
- **Design them ourselves, open-source:** LEAP 71's **PicoGK** (open geometry kernel) + Noyron approach → we computationally design our own gyroid HX and publish them — on-thesis.
- **Result:** higher COP, near-zero winter diesel while driving, smaller/lighter genset + tank, a more compact thermal core, and better range — all from making heat exchange excellent.

## 6. Open / next
- Quantify the winter energy model with drivetrain-heat harvest (re-run autonomy + diesel/day — likely far lower).
- Size the drivetrain-heat AM HX + the loop tie-in (e-axle/inverter/battery → CO₂ core).
- Down-size the CHP + diesel tank given the harvest (feeds mass budget + the modular-CHP configurator sizes).
- Apply the AM-HX study to the gas-cooler + heat-rejection grille (the still-hand-waved "large fan" reject pack).

---
*Whole-vehicle thermal integration, 2026-07-03. AM (LEAP-71-class gyroid/TPMS) HX = a SYSTEM strategy, not one part: put compact high-effectiveness HX everywhere heat moves. DRIVETRAIN makes ~10 kW of heat while driving (~2× the ~4-5 kW winter demand) → driving heats the bus for FREE in winter (near-zero diesel while moving); rejected efficiently in summer. Better HX raises heat-pump COP ~3→4 (~25% less electric/heat). FEEDBACK LOOP: better HX → higher COP + more harvest → less energy for heat → CHP runs much less → less diesel + tank + weight → more range → less energy needed (virtuous cycle; winter's dominant load is HEAT not electricity). CONSOLIDATION: compact AM HX → fewer/smaller condensers/evaporators/coils → less mass+volume; trend to one AM-HX manifold. Open-source design via LEAP 71 PicoGK. Next: winter energy model w/ drivetrain harvest, size the drivetrain AM HX, down-size CHP+tank. See thermal_system_integration.png.*
