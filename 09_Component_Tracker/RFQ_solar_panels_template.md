# RFQ — Solar panels, per zone (ready to paste)

**You send this** (I can't contact suppliers). Get **3 quotes** spanning the classes: **Sunman** (glass-free, the pick), **Merlin** (walkable/toughest), and **Sunport** (buyable mid-tier) — add **SunWare/Solbian** if you want a European marine option. Paste replies into the tracker (`components/solar-panels/`).

## The zones (target ~12 kW deployed) — see `photos/solar_zones.png`
| Zone | Target power | ~Area (@~193 W/m²) | Mounting | Notes |
|---|---|---|---|---|
| **A — Roof-main** (fixed) | **~3.4 kW** | ~18 m² | rigid, flat (PV/T cooling plate) | always-on driving roof |
| **B — Fold-out wings** (×2–3, parked) | **~6.6 kW** | ~34 m² | rigid, flat (PV/T) | fold out sideways when parked |
| **C — Vertical sides** (fixed, both sides) | **~1.3 kW** | ~7 m² | rigid, vertical | great for low **winter** sun |
| **D — Slide-out tops** (parked) | **~0.7 kW** | ~3.6 m² | rigid, flat | bonus when slides are out |
| **Total** | **~12 kW** | ~62 m² | — | wire each zone as its own MPPT string |

*(Areas assume ~19.3 % glass-free panels; they shrink with higher-efficiency cells — the supplier's panel count is what matters.)*

## The message (edit brackets)

> Subject: RFQ — lightweight impact-resistant solar panels for a vehicle roof (~12 kW, 4 zones)
>
> Hello,
>
> I'm building a large solar array on an off-grid vehicle (open-source project) and need **lightweight, thin, impact-resistant** panels (a falling branch / hail must not destroy them) — ideally **glass-free composite** or a **reinforced flexible** module, not standard glass.
>
> I have **four mounting zones** and want to hit these targets. Please propose the **best panel model(s)** for each and quote:
>
> - **Zone A — roof-main (flat, rigid): ~3.4 kW**
> - **Zone B — fold-out wings (flat, rigid): ~6.6 kW**
> - **Zone C — vertical side strips (~0.85 m tall): ~1.3 kW**
> - **Zone D — slide-out tops (flat): ~0.7 kW**
>
> For each proposed panel please give:
> 1. **Model, wattage, dimensions (mm), and weight (kg)** — and **panels needed + total kg** per zone.
> 2. **$/W** (EXW and CIF [your port]) and the **total per zone + all-in**.
> 3. **Efficiency** and **temperature coefficient**.
> 4. **Impact / hail rating** — what test class does it pass (IEC 61215 hail, walkability, mechanical-load)? Is it **glass-free** (composite/ETFE)? What's the front surface?
> 5. **Construction** — cell type, front skin (composite / ETFE / glass), rigid vs semi-flexible (can it mount rigid *and* conform to a slight curve?).
> 6. **Warranty** (product + power).
> 7. **MOQ + lead time** for this ~12 kW order.
> 8. **Samples** — can I buy 1–2 panels to test first?
> 9. **Custom sizes** — can you make a **narrow panel** to fit the vertical side strips + the fold-out wing dimensions? Give the size range.
>
> Thank you — happy to share the roof drawings.

## Grading the replies
- **Compare on $/W AND kg/W** — for a vehicle roof, weight matters as much as price. Glass-free should be **~50–70 % lighter** than glass.
- **Demand the impact/hail test class in writing** — this is the whole reason we're going glass-free; a vague "durable" isn't enough.
- **Custom narrow panels** for the side strips + fold-out wings are the differentiator — Sunman/Merlin/Solbian all do custom; ask early.
- **Buy 1–2 samples** and load-test (stand on one, ice-drop test) before the full ~62 m² order.
- Rough budget: ~12 kW × ~$1–1.2/W (glass-free class) = **~$12–14k** for panels (add MPPTs ~$2.6k, mounts, wiring).

---
*Solar-panel RFQ, 2026-07-07. 4 ZONES for ~12 kW: A roof-main 3.4kW/~18m² (flat rigid, PV/T), B fold-out wings 6.6kW/~34m² (flat rigid, PV/T), C vertical sides 1.3kW/~7m² (rigid vertical, winter sun), D slide-tops 0.7kW/~3.6m². Send to Sunman + Merlin + Sunport (+SunWare/Solbian for EU marine). Ask per panel: model/W/dims/kg + panels-per-zone + total kg; $/W EXW+CIF + zone+all-in totals; efficiency + temp coeff; IMPACT/HAIL test class + glass-free? + front skin; construction (cell/skin/rigid-vs-flex); warranty; MOQ+lead; samples; CUSTOM narrow sizes for sides+wings. Grade on $/W AND kg/W; demand hail class in writing; custom narrow panels = differentiator; buy 1-2 samples + load-test first. Budget ~12kW × ~$1-1.2/W = ~$12-14k panels. See photos/solar_zones.png.*
