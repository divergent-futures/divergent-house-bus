# Solar panels

**Subsystem:** Battery/Electrical (Solar) · **Status:** candidate-selected · **Qty:** many (multi-array, mixed sizes)
**Function:** ~**12 kW deployed** across roof-main + 2–3 fold-outs + vertical side panels + slide-out tops. Must be **lightweight** (it's a vehicle roof), **thin**, and **impact-resistant** (a falling branch / hail must not kill a panel).
**Source spec:** `03_.../Solar_Everywhere_and_Waste_Heat_Verdict.md`, `Solar_PVT_Cooling_Loop.md` · **Figure:** `photos/solar_options.png` · **Researched:** 2026-07-07 (TJ flagged impact resistance + lightweight + thin).

---

## The requirement (TJ): light + strong + thin
The hard part is that "light + thin" and "impact-strong" usually fight. The resolution: **go glass-free.** A glass panel is heavy *and* shatters when a branch hits it; the vehicle-grade answer is a **composite / metal-grid module** that's both lighter *and* can't shatter.

## Candidates
| Panel | Weight | Eff | Impact / durability | Verdict |
|---|---|---|---|---|
| **Sunman eArc** (glass-FREE composite) | ~70 % lighter than glass (430 W ≈ 11 kg) | ~19–19.3 % | **composite "like an airplane window" — no glass to shatter, passes the same hail/impact durability tests as glass**; semi-flexible (bends to 240°) | **RECO — light + no-shatter + thin** |
| **Merlin Solar** (metal-grid) | < 12 lb, light | ~19.3–19.6 % | **walkable, ~50× cell crack-resistance**, marine/military proven, flexible | **RECO-alt — toughest cells** |
| **Maxeon flexible** | light | highest (~22 %+) | hail-resistant, 40-yr warranty, premium cells | premium; pricier |
| **Rigid glass / Tesla** | HEAVY (glass) | ~20–22 % | tempered glass is strong but **shatters if hit hard** + heavy for a roof | strong but wrong weight class for a vehicle |
| **Cheap PET flexible** | lightest | low | poor lifespan, punctures, delaminates | **AVOID** |

*(On TJ's mentions: **Tesla** panels are strong but residential glass — too heavy and still shatterable for a vehicle roof. **Polydrops**-style teardrop builds use thin/flexible panels; the eArc / Merlin category is exactly that class, done durably.)*

## Why glass-free wins the impact case
- **Sunman eArc** — no glass, so nothing to smash; the composite skin absorbs/flexes on impact and passes hail testing. Comes in many wattages (100 W → 520 W) → **fits the different roof zones** (big roof panels, smaller fold-outs, narrow vertical side strips, slide-top panels).
- **Merlin** — the metal-grid makes the *cells* ~50× more crack-tolerant and the panel **walkable** (you can stand on the roof array). Also multiple sizes.
- Both are **semi-flexible**: mount **rigid** on the flat roof + fold-outs (for the PV/T cooling-plate bond), or let them **conform** to a curved boat-tail. This also matches the `Solar_PVT_Cooling_Loop.md` plan (rigid panels get cooling plates).

## Recommendation
**Sunman eArc as the primary** (lightest, glass-free/no-shatter, thin, sized per zone) — with **Merlin** as the walkable/toughest alternative where foot traffic or max crack-resistance matters. **Avoid glass** (weight + shatter) and **cheap PET flexibles** (durability). Wire panels in **series strings (65–450 V)** to suit the Victron MPPT RS input window; keep each roof zone on its own MPPT tracker so orientations don't drag each other down.

## Open / next
- **Quote eArc + Merlin** in the sizes we need (roof-main, fold-out, side-strip, slide-top) → $/W + kg each; pick per zone.
- Confirm **impact/hail rating** figures on the datasheets (eArc composite test class; Merlin cell-crack spec).
- Tie to **PV/T**: which panels get cooling plates (rigid roof/fold-outs) vs air-cooled (any that conform).
- String design → MPPT tracker map (see `mppt/spec.md`).
- Photos + a GLB (flat panel boxes at true size) → this folder.

---
*Solar panels, researched 2026-07-07 (TJ: lightweight + strong/impact-resistant + thin; branch/hail smash is the worry). ~12 kW deployed across roof-main + 2-3 fold-outs + vertical sides + slide-tops (mixed sizes). KEY: go GLASS-FREE (glass = heavy AND shatters). CANDIDATES: Sunman eArc glass-free COMPOSITE (~70% lighter than glass, 430W~11kg, ~19.3%, 'airplane-window' composite = NO shatter, passes hail, semi-flex to 240deg, sizes 100-520W) = RECO; Merlin metal-grid (<12lb, ~19.6%, WALKABLE, ~50x cell crack-resistance, marine/military) = RECO-alt toughest cells; Maxeon flexible (highest eff ~22%, hail-resist, 40yr) = premium pricey; rigid glass/Tesla = strong but HEAVY + shatters (wrong for a roof); cheap PET flexible = AVOID (poor lifespan/punctures). Tesla = residential glass too heavy; Polydrops-class thin panels = the eArc/Merlin category. Both eArc+Merlin semi-flexible → mount RIGID on flat roof/fold-outs (PV/T cooling-plate bond) or conform to curves. Wire series strings 65-450V for Victron MPPT RS; each zone its own tracker. RECO: eArc primary + Merlin where walkable/toughest needed; avoid glass+PET. Next: quote eArc+Merlin per zone ($/W+kg), confirm impact/hail datasheet ratings, PV/T which-get-cooling, string→tracker map. See photos/solar_options.png. Sources: sunman-energy.com, merlinsolar.com, maxeon.com, pv-magazine.*
