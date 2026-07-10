# Tier × Cell Flagship Decision — resolved by the GVWR reconciliation

**Date:** 2026-07-07 · The v0.2 mass reconciliation showed the 390 kWh HiNa High-tier is GVWR-tight (+575 lb). This matrix maps **every pack size × cell chemistry** to **GVWR margin, range, and cell cost** so the flagship call is made on numbers. See `tier_cell_matrix.png`.

---

## The matrix (GVWR 19,500 lb, Class-5 non-CDL; same shell every tier, only the pack changes)
| Tier (kWh) | HiNa (now, 133 Wh/kg) | Naxtra (2025-26, 175 Wh/kg) |
|---|---|---|
| **Entry 155** | +4,781 lb · ~116 mi · ~$14.0k | +5,447 lb · ~116 mi · ~$17.1k |
| **Mid 280** | **+2,543 lb · ~210 mi · ~$25.2k ★** | +3,746 lb · ~210 mi · ~$30.8k |
| **High 390** | **+574 lb (TIGHT)** · ~292 mi · ~$35.1k | **+2,250 lb · ~292 mi · ~$42.9k ★** |

*(loaded = curb + 1,767 lb payload; range ≈ 90 % usable ÷ 1.2 kWh/mi.)*

## The decision
- **Buildable-now flagship = Mid, 280 kWh on HiNa cells.** Comfortable **+2,543 lb** GVWR margin, ~**210 mi** highway, ~**$25k** in cells, and it's sourceable **today**. This is the bus you can actually build this year without a weight fight.
- **High tier (390 kWh) is only sensible on Naxtra-class cells** (+2,250 lb margin) — which the pack is already designed to accept. Building 390 kWh on HiNa lands at +574 lb: technically legal, zero headroom, not worth the risk of build creep.
- **Entry (155 kWh)** is featherweight on either cell — the local/budget bus, huge margin, ~116 mi.

## Why this is the right resolution
- It **keeps GVWR at 19,500 lb** (non-CDL — the easy license), which the length/parking work already favored.
- It **turns the Naxtra-ready pack decision into a roadmap**, not just a hedge: ship the flagship at Mid-HiNa now, and the *same pack design* unlocks the High-tier 390 kWh when Naxtra reaches retail — a clean upgrade path, not a redesign.
- It **matches the tiers to real personas** (from `Customer_Segmentation_and_Personas.md`): Entry = stay-local; **Mid = the default full-timer bus** (now the flagship); High = cross-country / max-boondock, once the light cell is available.

## What it changes downstream
- **Configurator:** the tier selector should show the **GVWR margin + range + cost per tier×cell** (this matrix is the data) and **grey-out / warn on High-HiNa** (tight) unless a GVWR-class bump is chosen.
- **Range numbers:** Entry ~116 / Mid ~210 / High ~292 mi (on the corrected 1.2 kWh/mi + 90 % usable) — update the tier doc's headline ranges to these real figures.
- **Cells RFQ:** the near-term order is a **Mid ~280 kWh (~470 cells)**, not 650 — adjust the quantity in the cell RFQ.

## Open / next
- Re-run the **axle-load balance** at the flagship (Mid-HiNa 280 kWh) — lighter pack shifts CG vs the 390 kWh assumption.
- Update the **tier doc** headline ranges + add the GVWR-margin column.
- Reflect **Mid-HiNa as the default** in the configurator + the roadmap.

---
*Tier×Cell flagship decision, 2026-07-07. Matrix (GVWR 19,500 Class-5 non-CDL, same shell, pack varies; loaded=curb+1,767; range≈0.9 usable ÷1.2 kWh/mi): Entry-155 HiNa +4,781lb/116mi/$14k · Naxtra +5,447/116/$17k; Mid-280 HiNa +2,543/210/$25.2k [FLAGSHIP] · Naxtra +3,746/210/$30.8k; High-390 HiNa +574 TIGHT/292/$35.1k · Naxtra +2,250 OK/292/$42.9k [needs Naxtra]. DECISION: buildable-now FLAGSHIP = MID 280 kWh on HiNa (comfortable margin, ~210mi, ~$25k cells, sourceable today); HIGH 390 kWh only on Naxtra-class (+2,250) — pack already designed to accept it = clean upgrade path, not redesign; Entry featherweight either cell. Keeps 19,500 non-CDL. DOWNSTREAM: configurator shows GVWR-margin+range+cost per tier×cell + warns High-HiNa; tier-doc ranges → Entry 116/Mid 210/High 292 mi; near-term cell RFQ = ~280 kWh (~470 cells) not 650. Next: re-run axle balance at Mid-HiNa; update tier doc; set Mid-HiNa default in configurator/roadmap. See tier_cell_matrix.png.*
