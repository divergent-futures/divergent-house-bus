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
- **Structural (provisional):** **aluminium honeycomb (4.02)** and **aluminium extrusion (4.0)** lead on light + workable; **carbon fibre** is strongest-per-weight but the matrix correctly discounts it for cost + repairability.

## Categories to populate next
glazing ✓ · structural (provisional) · insulation (in the tracker) · **exterior skin/cladding** · **flooring** · **sealants/adhesives** · **fasteners** · **interior surfaces**. Each is scored on the same seven axes → one comparable database across the whole build.

---
*DF Materials Matrix, 2026-07-07 (TJ: one matrix system for every material). Universal 1-5 axes: performance, lightness, cost, workability, durability, health, sustainability. Vehicle-dwelling weights: performance/lightness ×1.5, durability/health ×1.2, cost/workability ×1.0, sustainability ×0.8; weighted=Σ(axis×w)/8.2. Same schema for ALL categories (insulation DB already uses it). GLAZING scored (research): Acrylic dual-pane 3.82 = RECO living windows (lightest ~40% of glass, clearest 92%, no-shatter, UV-stable, insulating, RV-proven); Polycarbonate 3.62 = impact zones (~250x glass impact but scratches+yellows); laminated glass = mandated windshield; tempered glass 3.21; vacuum glazing 2.84 premium-niche; ETFE 3.43 skylight-niche. STRUCTURAL provisional: Al-honeycomb 4.02 + Al-extrusion 4.0 lead (light+workable); UHSS steel 3.56 (crash but heavy); carbon fibre 3.41 (best strength/weight but cost+repair penalized); FRP 3.41; marine-ply 3.43. Files: materials_matrix.js/.json + materials_matrix.html + figures/materials_matrix_heatmap.png. Next: fill structural scores, add exterior-skin/flooring/sealants/fasteners categories.*
