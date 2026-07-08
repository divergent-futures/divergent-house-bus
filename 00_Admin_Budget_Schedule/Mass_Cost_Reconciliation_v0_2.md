# Mass + Cost Reconciliation v0.2 — real materials folded in

**Date:** 2026-07-07 · Folds the **real component + material masses/costs** (from the component tracker + the materials matrix) into the v0.1 mass budget, and re-checks GVWR. **Headline: the buildable-now config is GVWR-tight** — the old +4,063 lb margin shrinks to **+575 lb**. See `mass_reconciliation.png`. *(Source budget `House_BUS_Mass_Budget.xlsx` was open in Excel — this is a non-destructive companion; roll the accepted numbers back into the xlsx when free.)*

---

## The finding
The v0.1 budget assumed the **optimistic** build — **Naxtra-density cells** (~175 Wh/kg) and a **carbon-fibre body**. The materials we've actually *chosen to build with* are heavier-but-buildable, and it moves the needle:

| Config | Curb | Loaded (+1,767 payload) | GVWR 19,500 | Margin |
|---|---|---|---|---|
| **Old budget (optimistic)** | 13,670 | 15,437 | — | +4,063 |
| **Naxtra-class cells (390 kWh)** | 15,484 | 17,251 | — | **+2,249** ✅ |
| **HiNa cells (buildable NOW, 390 kWh)** | 17,158 | 18,925 | — | **+575** ⚠ |

**The buildable-now High-tier bus sits ~575 lb under GVWR** — almost no headroom for build-weight creep. The **Naxtra-ready pack decision** (design the pack to accept the lighter cell later) is what buys back **~1,675 lb** of margin.

## What changed (key line deltas, lb)
| Line | Old (opt.) | New (real) | Δ |
|---|---|---|---|
| **Battery pack** | 4,180 | **6,981** | **+2,801** (real HiNa sodium ~133 Wh/kg × 390 kWh) |
| Solar | 300 | 789 | +489 (12 kW eArc + mounts vs old ~3.5 kW) |
| Insulation | 300 | 617 | +317 (VIP + aerogel premium stack) |
| Body shell & panels | 1,200 | 1,600 | +400 (aluminium vs the old carbon-fibre assumption) |
| Interior walls/cabinets | 350 | 450 | +100 (Al honeycomb + Coosa + PET felt) |
| Glazing | 180 | 200 | +20 (acrylic dual-pane + laminated windshield) |
| **E-axle + motor** | 950 | 551 | −399 (real JJE-class ~250 kg) |
| Power electronics | 200 | 110 | −90 (BRUSA DC-DC + MPPT) |
| Inverter/charger | 100 | 57 | −43 (2× Victron MP-II) |
| CHP genset | 180 | 143 | −37 (Fischer Panda ~65 kg) |
| Fridge/freezer | 180 | 110 | −70 (custom loop-fed box) |
| **Net** | | | **+3,488** |

**The battery is the driver** (+2,801 lb), all from sodium's real energy density — the tradeoff for its safety, cold tolerance, and cost. Solar, insulation, and the aluminium body add the rest; the lighter e-axle + power electronics claw a little back.

## The levers (how to keep GVWR margin)
1. **Naxtra-class cells** when sourceable → **+1,675 lb** back (loaded 17,251, margin +2,249). The pack is already designed to accept them.
2. **Size the pack to the tier:** a **Mid-tier 280 kWh** HiNa pack (~5,000 lb) instead of 390 kWh saves ~2,000 lb — the buildable-now *flagship* may be better at Mid, with High reserved for Naxtra cells.
3. **Step up the GVWR class:** Class 6 (~26,000 lb) removes the constraint entirely — but check the **licensing** (some jurisdictions require a non-CDL medium-truck or CDL above 26,000 lb GVWR; ~19,500 keeps it easy). *(Ties to the length/parking-access research.)*
4. **Trim solar** (12→8 kW ≈ −160 lb) or **lighter insulation** (PIR instead of VIP where thickness allows).

## Recommendation
- **Keep GVWR at 19,500 lb (Class 5, non-CDL)** — the easy-license threshold.
- **Buildable-now flagship = Mid-tier 280 kWh on HiNa** (comfortable margin) **or** High-tier **only when Naxtra cells are sourceable.** Don't build a 390 kWh HiNa High-tier without either a GVWR-class bump or a strict weight budget — +575 lb is too thin for build reality.
- **Track every kg from here** — the margin is now the constraint, not an afterthought.

## Cost (folds in, no blow-up)
Tracked hardware (component tracker sourcing) sums to **~$126k**, landing inside the old rollup's hardware band. Full build with interior fit-out + structure fab + labour + 20% contingency stays in the prior **~$150k–$320k** indicative range. **Cost is roughly unchanged; mass is the story.**

## Open / next
- Roll the accepted line values into `House_BUS_Mass_Budget.xlsx` + the master cost/mass xlsx (when not open).
- Firm the **structure mass** (aluminium body/frame) — the biggest remaining estimate.
- Decide the **flagship tier vs cell** (Mid-HiNa now vs High-Naxtra later vs GVWR-class bump) — this is now a real decision the mass forces.
- Re-run the **axle-load balance** with the heavier real pack (CG shifts).

---
*Mass+cost reconciliation v0.2, 2026-07-07. Folded REAL materials/components into the v0.1 budget. FINDING: old budget assumed optimistic (Naxtra-density cells + CF body); real buildable materials (HiNa sodium ~133 Wh/kg × 390 kWh, aluminium body, 12 kW eArc solar, VIP+aerogel insulation) push loaded 15,437 → 18,925 lb = margin +4,063 → +575 lb under GVWR 19,500 (Class 5 non-CDL). NAXTRA-class 390 kWh = 17,251 lb = +2,249 (healthy) — the Naxtra-ready pack decision buys ~1,675 lb. KEY DELTAS: battery +2,801 (THE driver, sodium density), solar +489, insulation +317, body +400 (Al vs CF), interior +100; offset e-axle −399, power-elec −90, inverter −43, genset −37, fridge −70; net +3,488 curb. LEVERS: Naxtra cells (+1,675 back); Mid-tier 280 kWh HiNa (~−2,000 lb); step to Class 6 26,000 GVWR (check licensing/CDL); trim solar/insulation. RECO: keep 19,500 Class-5 non-CDL; buildable-now flagship = Mid 280kWh HiNa OR High only when Naxtra sourceable; DON'T build 390kWh HiNa High-tier w/o GVWR bump or strict weight budget; track every kg now. COST: tracked hardware ~$126k, full build ~$150-320k — roughly unchanged, mass is the story. Fig mass_reconciliation.png. Next: roll into xlsx, firm structure mass, decide tier-vs-cell, re-run axle balance w/ heavier pack.*
