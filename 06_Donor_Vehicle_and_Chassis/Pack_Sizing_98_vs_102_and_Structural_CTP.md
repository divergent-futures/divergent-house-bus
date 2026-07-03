# Pack Sizing — 98 in vs 102 in, and the Structural Cell-to-Pack Correction

**Date:** 2026-07-03  ·  V2 bus. TJ's ask: compute the two packs (98 in vs 102 in body) and their capacity — and the structural correction: **modules don't make a structural pack; the cells must be packed tight and act as the structure** (cell-to-pack / blade). Supersedes the module grid in `structural_pack_seethrough.png` (to be redrawn as CTP). Pairs with `Structural_Pack_Layout_and_Fit.md`.

---

## 1. The two packs (body-over-pack rocker, 205 mm/side)
| Body | Cell-block width | Net cell footprint | Pack volume (×0.22 m) |
|---|---|---|---|
| **98 in** (2,489 mm) | 2,079 mm | 10.35 m² | 2.28 m³ |
| **102 in** (2,591 mm) | 2,181 mm | 11.03 m² | 2.43 m³ |
*(net = 22 ft zone × cell width − 4 wheel-wells 0.84 − rear e-axle notch 2.75)*

## 2. Capacity — packing matters more than width
Sodium cell ref: 3.1 V × 200 Ah = 620 Wh, ~205 × 72 mm footprint, ~200 mm tall.

| | Module (rails+walls, PF ~0.70) | **Cell-to-pack / structural (PF ~0.85)** |
|---|---|---|
| **98 in** | ~491 cells → **~304 kWh** | ~596 cells → **~370 kWh** |
| **102 in** | ~523 cells → **~324 kWh** | ~635 cells → **~394 kWh** |

**Two levers:**
- **Width 98 → 102 in: ~+7% (~24 kWh).** Real but modest.
- **Module → cell-to-pack: ~+22% (~70 kWh).** The dominant lever — deleting module overhead — *and* it's what makes the pack structural.

## 3. The structural correction (TJ) — modules out, cell-to-pack in
A pack with **structural rails between modules isn't a structural pack** — the load path is broken at every module boundary. A true structural pack is **module-free cell-to-pack (CTP)**: cells butted tight and **bonded** so the **cell array itself is the structure**.

**BYD Blade is the reference** (researched): blade cells **960 × 90 × 13.5 mm**, upright dense array, **module-free CTP**; **each cell is a structural beam**, and with **top + bottom honeycomb aluminium plates** the array becomes a **rigid sandwich panel** (high rigidity, impact/deformation resistance). Volumetric utilisation ~76% (CTB 2.0), vs ~40–50% for module packs. That's exactly why the CTP column above holds ~+70 kWh: no module walls, no internal rails, cells are the shear web; the cold-plate is the bottom structural sheet.

**Design consequences:**
- Delete modules. Cells butted, structural-adhesive bonded, top + bottom structural face sheets = the floor sandwich.
- No internal structural rails inside the cell field (they'd waste the space AND aren't needed — the bonded cells carry load).
- Perimeter frame + the cold-plate (bottom sheet) + lid (top sheet) close the sandwich; the **body rocker stays separate** (outboard crash member, §6 of the pack doc).

## 4. Chemistry vs format — the one fork (decide at cell selection)
BYD Blade = **LFP**, not sodium. Options:
- **Sodium cell-to-pack (preferred):** keep our sodium chemistry in a bonded-prismatic CTP (CATL-Naxtra-class is CTP). The §2 numbers assume sodium. Keeps non-flammability + cold performance.
- **LFP blade (fallback):** proven, buyable, inherently structural — but gives up sodium's non-flammability + cold edge (LFP is still safe, no NMC-style runaway; just less cold-tolerant). Higher volumetric density than sodium, so it would *exceed* the §2 numbers.
- (**NMC** would give ~450–550 mi in the same floor but is rejected on fire safety for a live-in vehicle.)

## 5. Recommendation
**102 in body + sodium cell-to-pack structural (no modules).** ~394 kWh available in the floor → use ~330 (300 traction + 30 house) and bank the rest as margin, or spend the footprint back on the rocker + rear notch. Confirm sodium-CTP small-builder availability at cell selection; LFP blade is the structural fallback.

## 6. Next
- **Redraw the two packs (98 vs 102) as fully-structural cell-to-pack** — blade/bonded cells as the honeycomb sandwich, no modules, top/bottom structural plates, perimeter frame, separate body rocker. Supersedes the module see-through.
- Then: front/rear axle-load balance; lock cell (sodium-CTP vs LFP-blade); wheel-well/notch geometry.

---
*Pack sizing 98 vs 102 + structural CTP, 2026-07-03. Two packs (body-over-pack rocker 205 mm/side): 98 in → cells 2,079 mm / 10.35 m² / 2.28 m³; 102 in → 2,181 mm / 11.03 m² / 2.43 m³. Capacity (sodium 620 Wh cell): MODULE 98/102 = ~304/~324 kWh; CELL-TO-PACK 98/102 = ~370/~394 kWh. Width lever ~+7%; module→CTP lever ~+22% (the big one, and the real structural pack). TJ correct: modules ≠ structural pack — go module-free CTP/blade (BYD Blade ref: 960×90×13.5 mm cells = structural beams + honeycomb Al plates = sandwich). Fork: sodium-CTP (preferred, keep chemistry) vs LFP-blade (fallback, proven+structural, loses cold/non-flammable edge). Recommend 102 in + sodium CTP → ~394 kWh available, use ~330. Redraw packs as CTP next; supersedes the module see-through.*
