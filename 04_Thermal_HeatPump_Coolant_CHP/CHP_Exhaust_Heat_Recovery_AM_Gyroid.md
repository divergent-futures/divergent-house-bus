# CHP Exhaust Heat Recovery — 2-Stage AM Gyroid Recuperator

**Date:** 2026-07-03  ·  V2 bus. The CHP's whole point is that **heat is the product** — so a conventional exhaust HX that recovers only ~20% of the exhaust heat wastes most of it. TJ wants a genuinely high-recovery unit (à la **LEAP 71**-style additively-manufactured heat exchangers). This specs a **2-stage additive gyroid/TPMS recuperator** with a condensing stage. See `chp_exhaust_hx.png`. Feeds the Thermal core + the modular-CHP configurator branch.

---

## 1. The problem
A diesel CHP puts ~**30% of fuel energy out the exhaust**; a typical exhaust HX grabs only ~20% of *that*. So most exhaust heat is lost — undercutting the reason to carry a genset. We want to capture almost all of it into the glycol loop / hot buffer / DHW.

## 2. The design — 2-stage additive recuperator
- **Stage 1 — sensible (hot):** an **additively-manufactured gyroid/TPMS** heat exchanger; exhaust ~500 → ~120 °C into the glycol. Gyroid/TPMS geometry gives **effectiveness ~85%** (+55% vs conventional; ~4× the Nusselt number of printed-circuit HX) in a **compact, quiet** package (huge area/volume, no rattly fins). High-temp alloy (Inconel/316L).
- **Stage 2 — condensing (latent):** cool the exhaust **below its dew point (~50 °C)** to **condense the water vapour and recover its latent heat** (~6% of fuel energy). Corrosion-resistant alloy (**316L / titanium**) because the condensate is **acidic** (sulphur/NOx) — exactly where exotic **additive** materials earn their keep; acidic condensate is neutralised/drained.
- **Out:** exhaust leaves near coolant temperature (~50 °C) → most heat captured → **exits low, out the bottom/side**, quietly. All inside the **rear side cabinet**.

## 3. The numbers (3.5 kWe CHP, ~11.7 kW fuel)
| | Exhaust heat recovered | Total CHP heat | of fuel |
|---|---|---|---|
| Typical exhaust HX (~20%) | ~0.7 kW | ~5.4 kW | ~46% |
| **AM gyroid + condensing (~85%)** | **~2.9 kW** | **~7.6 kW** | **~65%** |

**→ exhaust recovery 0.7 → 2.9 kW (~4×); CHP heat recovery 46% → 65% → ~29% less diesel burned for the same heat.** (Plus the jacket/coolant heat ~4.7 kW, already captured.)

## 4. Why it's the right kind of creative
- **Additive gyroid/TPMS** = the high-effectiveness + compact + quiet combo a bus needs (vs a big finned shell-and-tube that rattles and half-works).
- **Condensing stage** = the extra win most systems skip; needs corrosion-resistant additive alloys → this is where LEAP-71-class AM HX is genuinely enabling, not just cool.
- **Open-source design path:** LEAP 71's **Noyron** computational model + **PicoGK** (their **open-source** geometry kernel) → we can **computationally design our own gyroid HX** — on-thesis (build-it-ourselves with open tools) and shareable.
- **Dual-use:** the same additive-HX approach upgrades the **whole thermal core** — the CO₂ gas-cooler, the plate evaporators, and the **cooling-mode heat-rejection grille** (the earlier "large fan" reject pack) all get smaller + more effective. So the AM-HX tech is a systemic lever, not a one-off.

## 5. Open / next
- Size the gyroid HX (area, print volume, pressure drop vs the CHP backpressure limit) at each CHP size (3.5 / 5 kW).
- Condensate handling: neutralisation cartridge + drain routing (acidic).
- Print alloy + vendor (or self-print via PicoGK-designed geometry); cost vs a conventional HX.
- Apply the AM-HX study to the heat-rejection grille + gas-cooler (dual-use).

---
*CHP exhaust heat recovery, 2026-07-03. 2-stage additive gyroid/TPMS recuperator: Stage 1 sensible (ε~85%, Inconel/316L) + Stage 2 CONDENSING (recovers latent below the dew point; 316L/Ti for acidic condensate). Recovers ~2.9 kW vs ~0.7 kW typical (~4×) → CHP heat recovery 46%→65% → ~29% less diesel for the same heat. Gyroid = compact + quiet (fits the side cabinet). Open-source design via LEAP 71 Noyron + PicoGK (open kernel). DUAL-USE across the thermal core (gas-cooler, evaporators, heat-rejection grille). Feeds the modular-CHP configurator branch. See chp_exhaust_hx.png.*
