# Water - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  V2 bus. Pairs with `Water_Systems.design.md`.

## Requirement
Two-water principle (drinking isolated from wash). **SS drinking tank** + external potable fill + **rainwater diverter**; **reticulating shower** (~10-15 gal, real-time filter + UV + heat recovery) with a small inline booster; **composting toilet + urine separator**; **urine -> hydroponics** nutrient loop with a **sodium-accumulation bleed** (RO/electrodialysis -> brine); condensate = washing only; **DC pumps**.

## Step 1-2 field, vetted

| Element | Tier | Candidate | Fit | Verdict |
|---|---|---|---|---|
| **Composting toilet + urine sep** | B (adopt) | **Nature's Head** (fan, cruiser-proven), **Separett** (Tiny, Swedish), **OGO** (compact) | Exactly our spec; mature | **adopt** |
| **Reticulating shower** | A/B | **Showerloop** (open-source: real-time filter+UV+heat recovery), **Orbital Systems** (premium closed-loop), **Hamwells Loopz** (12 V, 6 L portable) | Real-time recycle+filter | **Showerloop fits our open-source ethos**; integrate |
| **Water disinfection (UV)** | B | **Acuva** UV-LED (12 V, on-demand, low power) ; **Viqua** S2Q/S5Q (12 V lamp, 3-6 GPM) | On-demand point-of-use | **adopt (Acuva LED lead)** |
| **Salt bleed (urine->hydro)** | A | small **RO** unit / **electrodialysis** | Manages Na accumulation | **self-build integration** |
| **DC pumps** | B | **Shurflo / Seaflo / Flojet** 12/24 V | Standard RV/marine | **adopt** |
| **Tanks** | A/B | SS drinking (fab), poly grey, **rainwater diverter** (off-the-shelf RV) | - | adopt + fab drinking tank |

## Verdict
**Heavily adopt off-the-shelf** (toilet, UV, pumps, diverters); the **value-add is the closed-loop integration** - the reticulating shower + condensate harvest + urine->hydroponics nutrient/brine management as one loop. **Showerloop's open-source design aligns directly with our ethos** and is the lead for the shower. Nothing here needs bespoke beyond the SS drinking tank and the salt-bleed integration.

## Open questions
1. Water-inventory sizing (drinking tank + wash loop + reservoir) - also fixes the bath/hydro footprint over the pack.
2. Showerloop vs Orbital vs Hamwells (open-source vs polished vs portable).
3. Sodium-accumulation bleed method (RO vs electrodialysis) + brine disposal.
4. Condensate plumbing + UV placement.

## V2+ headroom
Tighter closed loop toward MELiSSA-style nutrient recovery; greywater-to-hydroponics polishing.

## Sources
- [Nature's Head urine-diverter](https://natureshead.net/) · [Separett waterless](https://separett.com/en/en/) · [Showerloop (open-source recycle+UV+heat)](https://showerloop.org/) · [Orbital Systems](https://www.orbital-systems.com/) · [Hamwells Loopz (12 V)](https://hamwells.com/en/loopz/)
- [Acuva UV-LED RV purifier](https://nomadicsupply.com/acuva-wanderer-2-0-12v-ac-dc-uv-led-water-purifier/) · [Viqua 12 VDC UV](https://espwaterproducts.com/products/viqua-s2q-p-12vdc-uv-system-3-gpm-12vdc)

---
*Water, steps 1-2 done. Adopt toilet/UV/pumps; integrate the closed loop ourselves (Showerloop-led shower + condensate + urine->hydroponics brine bleed). Resolve inventory sizing + the 3 open Qs, then a water tracker.*
