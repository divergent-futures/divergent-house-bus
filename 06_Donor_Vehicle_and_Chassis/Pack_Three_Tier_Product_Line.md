# Structural Pack — 3-Tier Product Line (Entry / Mid / High)

**Date:** 2026-07-03  ·  V2 bus. TJ's framing: like any company (small / mid / high), publish a **battery tier line** so open-source builders pick by budget + how far they roam — and we do all the math for them. Same bespoke structural pack shell every tier; only the **cell count** changes (cell-free zones = lightweight honeycomb, not foam). See `pack_three_tier.png`. Builds on `Two_Structural_Packs_Blade_vs_Sodium.md` + `Structural_Pack_Shape_Spec.md`.

---

## 1. The three tiers (sodium potted-CTP, 102 in floor)
| | **ENTRY** | **MID** | **HIGH (max)** |
|---|---|---|---|
| Battery total | 155 kWh | 280 kWh | 390 kWh |
| Split | 125 kWh traction + 30 house | 250 + 30 | 360 + 30 |
| **Range @65 mph (highway)** | **~111 mi** | **~217 mi** | **~307 mi** |
| **Range @~50 mph (local)** | **~165 mi** | **~321 mi** | **~450 mi** |
| Efficiency (weight-adj.) | 1.04 kWh/mi | 1.06 kWh/mi | 1.08 kWh/mi |
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

## 3b. Range is now WEIGHT-ADJUSTED (corrected)
Earlier the tiers used a fixed kWh/mi (didn't credit the lighter packs). Fixed: **E/mi = a mass-independent aero term + a rolling term that scales with mass.** Calibrated at High (1.08 kWh/mi, aero ~78% / rolling ~22%), scaling rolling by loaded mass.

**Two lessons:**
1. **At 65 mph the weight credit is small (~+5 mi for Entry).** Aero is ~78% of highway drag and **doesn't change with weight**; only the ~22% rolling part scales. So dropping ~3,000 lb moves efficiency 1.08 → 1.04 kWh/mi, not dramatically. The bus is **aero-limited** at highway speed.
2. **The bus eats ~1.0 kWh/mi (~5× a car)** because a 25-ft dwelling is a big, draggy brick — so **155 kWh ≈ ~110 mi at highway is correct**, not a low estimate. Car intuition (155 kWh should go far) doesn't transfer to a rolling apartment.
3. **Weight + aero both pay off at low speed** (aero energy ∝ v²): at ~50 mph the Entry tier does **~165 mi** (not 110), the whole line stretches (Mid ~321, High ~450). Since the Entry buyer drives **local/slower**, the "~100 mi" label is the conservative *highway* figure — real local use is 150+.

> **⭐ FLAGSHIP DECISION (2026-07-07, `Tier_Cell_Flagship_Decision.md` + `tier_cell_matrix.png`):** the GVWR reconciliation resolves the tier×cell call. **Buildable-now flagship = MID 280 kWh on HiNa cells** (GVWR margin **+2,543 lb**, ~210 mi, ~$25k cells, sourceable today). **High 390 kWh is GVWR-TIGHT on HiNa (+574 lb) → build it only on Naxtra-class cells** (+2,250 lb; the pack is already designed to accept them = clean upgrade path). Entry 155 kWh is featherweight on either cell. Near-term cell RFQ = ~280 kWh (~470 cells), not 650.

> **v0.6 note (2026-07-07):** these ranges are computed on **nameplate** kWh at an idealized ~1.08 kWh/mi. Two honesty corrections from the digital twin (`08_.../Digital_Twin_v0_5.md`, `Pack_Capacity_Usable_and_BMS_Window.md`): (a) usable capacity is **~90 % of nameplate** (BMS window), and (b) real-world highway consumption is **~1.15–1.2 kWh/mi** (HVAC, wind, margin). Net: treat the highway figures as **~10 % optimistic planning numbers** — e.g. High tier ~307 → **~275–290 mi** real. Low-speed/local figures are more forgiving.

## 4. Assumptions / caveats
- Range @65 mph (highway planning) and @~50 mph (local); real-world in-band. Loaded masses: Entry ~14,252 lb, Mid ~15,763, High ~17,095 (non-pack curb ~9,640 + pack + payload ~1,767).
- Cells ~$80/kWh sodium (cost basis, rough); retail ~1.75× on the **cell delta** (pack structure/BMS/electronics are ~common across tiers, so the *difference* is mostly cells).
- Pack mass = cells + inter-cell foam potting (~12%) + honeycomb fill + Al faces/frame (~220 kg). Firm at cell selection.

## 5. Recommendation / use
- **Publish all three** in the open-source repo as the pack menu; *