# Two Structural Packs — LFP Blade vs Sodium Prismatic (potted sandwich)

**Date:** 2026-07-03  ·  V2 bus. TJ's question: is there a way to make a **structural** pack from the larger sodium prismatic cells, and does the sodium version need a heavier bottom plate / internal beams to stop sagging (since the cells aren't blade beams)? Designs both: an **LFP Blade** (BYD cell-to-body v2) pack and a **sodium prismatic structural** pack. See `two_structural_packs.png`. Pairs with `Pack_Sizing_98_vs_102_and_Structural_CTP.md`.

---

## 1. The governing fact — stiffness = sandwich action, not the plate
A floor pack is stiff because it's a **sandwich**: two face sheets held apart by a **continuous shear core**. Bending stiffness ≈ face area × separation² — huge with a 200 mm core — *but only if the core transfers shear between the faces*.

**A heavy bottom plate alone cannot substitute.** To match the sandwich (2 × 3 mm Al faces, 200 mm apart) with a single solid plate you'd need **~90 mm of aluminium — ~15× the mass** (~178 kg vs ~2,660 kg over an 11 m² floor). So "thicker plate to stop sag" helps at the margin but can't carry the job. **The core is what matters.**

## 2. Why blade is inherently structural
A blade cell (960 × 90 × 13.5 mm) laid **across the pack width is a continuous beam** — its own can is the shear web. Bonded between a thin top plate and the bottom cold-plate, **the cells ARE the core**; the faces stay thin (~2–3 mm). That's BYD's cell-to-body: cells + honeycomb Al plates = one rigid sandwich. Lightest, most volume-efficient (~76% utilisation). **Structure ≈ 220 kg** (two thin faces + perimeter frame).

## 3. Why sodium prismatic needs help — and the right help
A chunky prismatic cell (~205 × 72 × 200 mm) is a **discrete block, not a beam** — between blocks the shear path is broken, so the array sags unless the core is made continuous. Three ways, ranked:

| Fix | Mass added | Capacity | Verdict |
|---|---|---|---|
| **Structural foam potting between cells** (Tesla-structural-pack style) | **~+164 kg** | **~0 loss** (fills existing gaps) | **Best** — makes the discrete cells one continuous shear core |
| Cross-beam grid (beams = shear webs, both directions) | ~+226 kg | **−~19%** (beams displace cells) | Works, but heavy and costs range |
| Heavy bottom plate alone | ~+2,500 kg to match | — | **Not viable** (the 90 mm number) |

So TJ's instinct is right that sodium needs added structure — but it wants **potting, not a plate, and not (ideally) a beam grid.** Foam potting turns the chunky cells into a continuous core with modest mass and no capacity hit. (This also honors the earlier "no internal structural rails segmenting the pack" — potting is monolithic, not module dividers.)

## 4. The two designs (102 in floor, 2.43 m³)
| | **A — LFP Blade (CTB v2)** | **B — Sodium prismatic (potted sandwich)** |
|---|---|---|
| Cell | 960 × 90 × 13.5 mm blade, LFP | large prismatic (future ~300 Ah sodium) |
| How it's structural | cells = continuous beams/core; thin Al faces | cells + **structural foam** = continuous core; slightly thicker faces |
| Structure mass | ~220 kg | ~370 kg (**~+150 kg**) |
| Capacity (nom) | **~571 kWh** (~1.45×) | **~394 kWh** |
| Chemistry pros | more range, proven structure | **non-flammable, −40 °C cold** performance |
| Chemistry cons | LFP fire class, weaker cold | lower density (the range tax), needs potting |

## 5. The "bigger future sodium cell" point
Sodium makers will grow the cell (more Ah per cell) in the ~18-month window — that **improves packing a little** (fewer inter-cell gaps) but the cell **stays chunky, not a beam**, so it still needs the potted continuous core. The only thing that would let sodium skip potting is **sodium arriving in a long blade / CTP format** — plausible (CATL Naxtra is already CTP) but **not yet confirmed as a blade**. BYD has not announced sodium blade.

## 6. Recommendation
**Baseline: sodium potted-sandwich structural pack** (keeps the non-flammable/cold chemistry thesis; ~394 kWh; ~+150 kg structural foam vs blade). **Fallback: LFP Blade** (proven structural, ~1.45× energy) if sodium-CTP isn't buyable at small-builder scale, or if we later trade cold/fire for range. **Decide at cell selection** (battery tracker), watching for a **sodium blade/CTP** cell that would give us blade structure *and* sodium chemistry — the best of both.

## 7. Open / next
- Redraw the pack see-through as **potted CTP** (no modules) at 98 & 102 in — supersedes the module drawing.
- Battery tracker: add a **sodium-CTP vs LFP-blade** row; hunt a sodium long-format/CTP cell.
- Structure track: potting foam spec (structural grade, fire, serviceability = pack-level swap not cell-level), face-sheet + cold-plate gauges, perimeter frame, bond to the separate body rocker.
- Mass budget: fold in ~+150–370 kg pack structure.

---
*Two structural packs, 2026-07-03. Governing fact: pack stiffness = SANDWICH action (2 faces + continuous shear CORE), not plate thickness — matching the sandwich with a solid plate needs ~90 mm Al (~15× heavier), so a heavy plate alone is NOT the fix. BLADE (LFP, 960×90×13.5) cells are continuous beams = the core → thin faces, ~220 kg structure, ~571 kWh. SODIUM prismatic cells are chunky blocks, not beams → make them a continuous core with STRUCTURAL FOAM POTTING (~+164 kg, ~0 capacity loss) — better than a beam grid (~+226 kg, −19%) or a heavy plate (not viable). Sodium potted ~394 kWh, ~+150 kg vs blade. Bigger future sodium cells help packing but stay chunky → still need potting UNLESS sodium ships in a blade/CTP format (Naxtra is CTP; no sodium blade yet). Recommend sodium-potted baseline + LFP-blade fallback; decide at cell selection. See `two_structural_packs.png`.*
