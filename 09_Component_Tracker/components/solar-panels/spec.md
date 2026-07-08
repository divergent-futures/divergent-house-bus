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

## Zones for quoting (RFQ) — see `photos/solar_zones.png` + `../../RFQ_solar_panels_template.md`
~12 kW split into 4 zones so each can be quoted + wired to its own MPPT tracker:

| Zone | Target | ~Area | Mounting |
|---|---|---|---|
| **A — Roof-main** (fixed) | ~3.4 kW | ~18 m² | rigid flat (PV/T) |
| **B — Fold-out wings** (×2–3, parked) | ~6.6 kW | ~34 m² | rigid flat (PV/T) |
| **C — Vertical sides** (fixed) | ~1.3 kW | ~7 m² | rigid vertical (winter sun) |
| **D — Slide-out tops** (parked) | ~0.7 kW | ~3.6 m² | rigid flat |

Budget ~12 kW × ~$1–1.2/W (glass-free class) ≈ **~$12–14k** panels. The **ready-to-send RFQ** (`RFQ_solar_panels_template.md`) asks each supplier for panels/zone, kg, $/W, hail class, and **custom narrow sizes** for the sides + wings.

## Manufacturer directory (Europe · US · China)
Broad sweep across regions (`photos/solar_manufacturers.png`). Grouped by the technology class that actually decides light-vs-strong:

**Glass-free composite / honeycomb (BEST for impact + weight):**
- **Sunman (CN, eArc)** — glass-free composite, "airplane-window" skin, no-shatter, ~19.3 %. *(the class flagship)*
- **SunWare (DE)** — glass-FREE (Nowoflon fluoropolymer film), marine since 1987, salt-proof, deliberately "no dangerous glass on board."
- **Solarge + EconCore (NL)** — glass-free **honeycomb** composite, ~65 % lighter, recyclable.
- **Levante (IT)** — glass-free **carbon-fibre**, waterproof, recycled CF (collab with Solbian), new (2025).
- **Bila Solar (US)** — glass-less silicon + composite frame (new, 2024).

**Reinforced flexible (good — light + tough cells):**
- **Merlin Solar (US)** — metal-grid, **walkable, ~50× cell durability**, marine/military.
- **Solbian (IT)** — premium ETFE, Maxeon cells up to **25.9 %**, marine-extreme durability (thermal shock, salt, impact).
- **Sunbeam System (SE/DE)** — "Tough" walkable marine *(verify spec)*.
- **Sunport Power (CN)** — MWT ETFE flexible 370–380 W, **buyable mid-tier**.

**Thin-film CIGS / a-Si (most impact-tolerant + ultralight, but LOW efficiency → needs ~2–3× area):**
- **Ascent Solar (US)** — CIGS thin-film, rugged/impact, aerospace.
- **PowerFilm (US)** — a-Si thin-film, 30-yr durable, weatherproof.

**Rigid glass (highest eff + cheapest $/W, but HEAVY + shatters → cost/efficiency anchor, not the roof):**
- **Maxeon / SunPower (US)** — up to **22.7 %**, hail-resistant, 40-yr warranty (premium cells; flexible options exist).
- **LONGi / JinkoSolar / Trina / JA / DAH (CN)** — mass rigid glass, ~22 %, cheapest $/W — the cost anchor.
- **Meyer Burger (CH/DE)** — high-eff glass, European-made (heavy).

**Budget flexible (AVOID the cheap end):**
- **Renogy / BougeRV / Rich Solar (US brands, CN-made)**, **Sungold / Lensun (CN)**, generic Alibaba OEM — many are cheap PET (poor lifespan/punctures). Verify ETFE + a real datasheet before buying.

**Regional sourcing read:** *Europe* = premium marine-grade durability (Solbian, SunWare) + glass-free innovators (Sola