# The DF Materials Matrix — one scorecard for every material

**Date:** 2026-07-07 · TJ: *"we need a matrix system to apply to every different material"* — structural, glazing, insulation, skin, etc. This is that system: a **consistent 1–5 rubric** scored on the **same seven axes** for any material in any category, plus a **vehicle-dwelling weighted total** so choices are directly comparable. Viewer: `materials_matrix.html` (data: `materials_matrix.js`). Figure: `figures/materials_matrix_heatmap.png`.

---

## The seven axes (score each 1–5, 5 = best for a mobile dwelling)
1. **Performance** — the job-specific metric normalized to 1–5 (insulation → R/inch; structural → strength-to-weight; glazing → clarity + insulation + optics; etc.).
2. **Lightness** — mass per functional unit. Lighter = higher (it's a vehicle; every kg is GVWR + range).
3. **Cost** — per functional unit. Cheaper = higher.
4. **Workability / manufacturability** — ease to cut, form, join, install, and **field-repair** (DIY + open-source friendliness).
5. **Durability / impact** — impact, puncture, abrasion, and **fatigue under vibration** (a moving house).
6. **Health / non-toxicity** — off-gassing + install safety in a **sealed living space** (why spray foam scored low).
7. **Sustainability / repairability** — eco footprint, recyclability, repairable-not-replace.

## The weighting (tuned for a vehicle you live in)
| Axis | Weight | Why |
|---|---|---|
| Performance | ×1.5 | it has to do its job |
| Lightness | ×1.5 | vehicle: weight = GVWR + range |
| Durability | ×1.2 | it moves + gets hit |
| Health | ×1.2 | sealed living space |
| Cost | ×1.0 | matters, but not over safety/weight |
| Workability | ×1.0 | build + repair friendliness |
| Sustainability | ×0.8 | valued, secondary to the above |

**Weighted score = Σ(axis × weight) / 8.2**, on the same 1–5 scale. Re-weight for a different priority (e.g. a cost-driven tier could push Cost to ×1.5) — the framework stays the same.

## How to use it
- Every material is one row with its seven scores + a one-line **performance metric, weight, cost, pros, cons**.
- **Compare within a category** by weighted score, but always read the axes — the "best average" isn't always right for a specific job (e.g. **laminated glass** scores mid overall but is *mandated* for the windshield; **polycarbonate** wins only where impact dominates).
- The **insulation database** (`09_.../components/insulation/`) already uses this schema — it's the same matrix, just with R/inch as the performance axis.
- Structural rows are **provisional** (fill next); glazing is fully scored.

## First results
- **Glazing:** **Acrylic (PMMA) dual-pane wins (3.82)** for living-area windows — lightest, clearest (92%), no-shatter, UV-stable, insulating (RV-proven). **Polycarbonate (3.62)** for impact zones / skylights (~250× glass impact, but scratches + yellows). **Laminated glass** is the mandated **windshield**. Vacuum glazing is a premium niche for a thin high-R view pane.
- **Structural (now scored with real specific-strength + cost/kg — see `figures/structural_ashby.png`):** ranked, **aluminium 6063 extrusion (4.27)** leads (the dry-frame material: strong-per-kg, cheap, T-slot-easy), then **6061-T6 (4.02)** and **aluminium honeycomb sandwich (4.02)** for panels, **7075 (3.82)** for high-load fittings, **UHSS/AHSS (3.68)** for the crash structure. **Titanium (3.59)** and **carbon fibre (3.41)** have the best strength-to-weight but the matrix correctly discounts them for cost (~$40 and ~$30/kg) + repairability — CFRP is the "spaceship" material, aluminium is the "bus." **316L (3.38)** scores low overall but is *mandatory* for the wet trays (corrosion + food-safe).

## Structural — material-to-role map (for this bus)
The winner isn't one material; it's the *right* material per job:
| Role | Material | Why |
|---|---|---|
| **Dry frame + slide-out frames** | **Aluminium 6063 extrusion** | strong-per-kg, cheap, T-slot cut/join, corrosion-safe |
| **Rocker sill + crash/crush zones** | **UHSS/AHSS** (Tesla-M3-style Al sill + steel) | highest strength for impact structure |
| **Floor + wall panels** | **Aluminium honeycomb sandwich** | best stiffness-to-weight, flat, ultralight |
| **High-load fittings / hardpoints** | **Aluminium 7075** (or CFRP where weight-critical) | near-steel strength at 1/3 the weight |
| **Wet trays, tanks, hydro** | **Stainless 316L** | corrosion + food-safe (no aluminium in nutrient water) |
| **Cabinetry / wet substrate** | **Coosa board** (or bamboo ply budget) | rot-proof, screws like wood, light |
| **Molded skins / exterior parts** | **GFRP** | moldable, corrosion-proof, tough |
| **Brackets / subfr