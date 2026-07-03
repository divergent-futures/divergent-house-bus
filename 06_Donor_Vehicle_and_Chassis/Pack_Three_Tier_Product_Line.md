# Structural Pack — 3-Tier Product Line (Entry / Mid / High)

**Date:** 2026-07-03  ·  V2 bus. TJ's framing: like any company (small / mid / high), publish a **battery tier line** so open-source builders pick by budget + how far they roam — and we do all the math for them. Same bespoke structural pack shell every tier; only the **cell count** changes (cell-free zones = lightweight honeycomb, not foam). See `pack_three_tier.png`. Builds on `Two_Structural_Packs_Blade_vs_Sodium.md` + `Structural_Pack_Shape_Spec.md`.

---

## 1. The three tiers (sodium potted-CTP, 102 in floor)
| | **ENTRY ~100 mi** | **MID ~200 mi** | **HIGH ~300 mi (max)** |
|---|---|---|---|
| Battery total | 155 kWh | 280 kWh | 390 kWh |
| Split | 125 kWh traction + 30 house | 250 + 30 | 360 + 30 |
| Range (cons.–ideal) | 99–115 mi | 198–230 mi | 286–331 mi |
| Cells weight | ~1,953 lb | ~3,527 lb | ~4,913 lb |
| **Pack weight** | **~2,845 lb** | **~4,356 lb** | **~5,688 lb** |
| Cells cost (basis ~$80/kWh) | ~$12.4k | ~$22.4k | ~$31.2k |
| Est. retail @ scale (~1.75×) | ~$21.7k | ~$39.2k | ~$54.6k |
| Δ vs High | −2,845 lb · −$18.8k cost (~−$32.9k retail) | −1,332 lb · −$8.8k cost (~−$15.4k retail) | — |

**Who each is for:** Entry = stay-local living, rarely far, little/no towing (lightest, cheapest, best efficiency, biggest GVWR margin). Mid = regional roaming, the sweet spot for most (solar + drive-the-edges-of-the-day covers most days). High = cross-country, towing the toad, far off-grid boondocking — the most the floor holds with all the equipment installed.

## 2. Why this works as a product line
- **One structural shell to manufacture, three fills.** The bespoke pack floor/shell (and its stiffness) is identical across tiers; the tier is set purely by how many sodium cells go in. Cell-free volume is **lightweight honeycomb sandwich** (keeps the sandwich structural without the mass of foam).
- **The honeycomb-not-foam rule is what makes Entry light.** Foam-filling the freed space would add most of the weight back (foam ≈ 5× honeycomb density). With honeycomb, Entry is **~2,845 lb of pack vs ~5,688 lb for High** — a huge swing that also drops vehicle weight, lifts efficiency, and grows GVWR margin (Entry could even change axle/CDL class).
- **Cost scales at the far end.** TJ's point: a ~$6.4k cost-basis saving becomes **~$10–12k at retail** (we used ~1.75× on the cell delta). So Entry lands ~**$33k retail below** High — real money for a budget/local builder.

## 3. Chemistry note (same across tiers)
All tiers are **sodium** (non-flammable, −40 °C cold, ESG-clean). Same floor, swap chemistry for different range at the same size: **LFP blade ≈ 1.45×** these ranges; **NMC ≈ 450–550 mi** (rejected on fire safety for a live-in vehicle). So a builder could also pick chemistry as a second axis later.

## 4. Assumptions / caveats
- Range = usable traction (0.92 × nominal) ÷ **1.16 (conservative) to 1.00 (idealised, firmed A≈5.5) kWh/mi**; real-world lands in-band. Lighter tiers do slightly better per mile (less mass) — not yet credited, so Entry/Mid ranges are mildly conservative.
- Cells ~$80/kWh sodium (cost basis, rough); retail ~1.75× on the **cell delta** (pack structure/BMS/electronics are ~common across tiers, so the *difference* is mostly cells).
- Pack mass = cells + inter-cell foam potting (~12%) + honeycomb fill + Al faces/frame (~220 kg). Firm at cell selection.

## 5. Recommendation / use
- **Publish all three** in the open-source repo as the pack menu; **High = our reference build** (the full-thesis bus, tows the toad, goes far), **Mid = the recommended default** for most buyers, **Entry = the budget/local option**.
- Fold the chosen *reference* (High) into the mass budget + floor-plan v0.6; keep Entry/Mid as documented variants.

## 6. Open / next
- Credit the lighter tiers' efficiency gain (re-range Entry/Mid after the mass drop).
- Confirm Entry's vehicle-level weight vs axle/CDL thresholds (possible extra selling point).
- Cost model: firm cell $/kWh + the retail multiple with the BOM.

---
*3-tier pack line, 2026-07-03. Same 102 in structural shell; tier = cell count; cell-free zones = light honeycomb (NOT foam — foam ≈ 5× denser, would erase the saving). ENTRY 155 kWh (125+30) ~2,845 lb ~$12.4k → ~99-115 mi; MID 280 (250+30) ~4,356 lb ~$22.4k → ~198-230 mi; HIGH 390 (360+30) ~5,688 lb ~$31.2k → ~286-331 mi. Δ Entry vs High −2,845 lb, ~−$33k retail. Sodium throughout (LFP blade ~1.45×, NMC ~450-550 rejected on fire). High = reference build, Mid = default, Entry = budget/local. See pack_three_tier.png.*
