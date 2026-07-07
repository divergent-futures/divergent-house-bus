# Solar Everywhere + "Too Much Heat": the Waste-Heat-to-Power Verdict

**Date:** 2026-07-03  ·  V2 bus. Two TJ questions: (1) put solar **everywhere** — multiple rigid fold-outs, vertical sides, slide-out tops; (2) with low-grade heat (solar PV/T, drivetrain, fridge) **and** high-grade heat (CO₂ gas-cooler, diesel exhaust), there's a lot of heat — should we run a **steam/ORC generator** to make electricity from it? See `solar_wide_and_heat_verdict.png`.

---

## 1. Solar everywhere (~12 kW+ deployed potential)
| Placement | ~kW | Notes |
|---|---|---|
| **Roof: main + 2–3 rigid fold-outs** | ~10 | All **rigid → all PV/T-coolable** (the cooling-loop win applies to all of them). Fold sideways when parked. |
| **Bus sides (vertical)** | ~1.3 | ~40% yield, **but vertical faces catch the low WINTER sun well** — good when we most need it — and always-on, no mechanism. |
| **Slide-out tops (parked)** | ~0.7 | Bonus area when the slides are out. |
| **Total deployed** | **~12 kW+** | vs ~3.4 kW driving-roof-only. |

**Principle:** panels anywhere that isn't wasteful — more area = more parked charging (the "range engine"). Rigid surfaces get PV/T cooling; the flexible fold-out wings stay air-cooled.

## 2. Steam / ORC generator — the honest verdict: **NO**
A heat engine's efficiency is capped by the source temperature. Practical ORC:
| Heat grade | Temp | ~ORC → electricity |
|---|---|---|
| **Low (solar / drivetrain / fridge)** — our dominant waste heat | ~80 °C | **~5%** (10 kW heat → 0.5 kW elec) |
| Mid (CO₂ gas-cooler) | ~120 °C | ~9% |
| High (diesel exhaust) | ~500 °C | ~24% |

**Why not:**
- **Most of our waste heat is low-grade** → ~5% conversion. Tiny electricity for a heavy, complex system.
- **The one high-grade source (diesel exhaust) is better USED directly** (heating = ~100% effective) — and we already recover it (the AM gyroid recuperator). Converting it to electricity (~24%) then back to heat is a huge loss.
- **Excess heat happens in summer** = exactly when solar is abundant (you don't need the ORC's trickle); in **winter you WANT the heat** (don't convert it). There's never a good time.
- **ORC/steam = heavy, complex, another failure point** — against "best part is no part."

## 3. The governing insight
**A heat pump is the same machine run backwards, and it's ~20× better in the heat economy.** COP 4 → 1 kW electricity makes **4 kW of heat (400%)**; an ORC makes ~5% electricity from heat. So **electricity is high-value** (buys 4× its heat) and **heat is low-value** (buys ~5% its electricity). *Never* convert heat → electricity if you can avoid it. The CO₂ **heat pump is the answer to "what do we do with heat"** — move it to where it's useful, don't try to make power from it.

## 4. So what DO we do with "too much heat"?
1. **USE it** — DHW, drying, **dehumidification (desiccant regeneration)**, battery conditioning, hydroponics warmth, bath/sauna.
2. **STORE some** — the hot/cold thermal buffers ride through peaks.
3. **REJECT the rest** — cheaply, and the **AM heat-rejection HX does it efficiently** (compact grille). Rejecting low-grade heat isn't wasteful — it's nearly worthless as electricity anyway.

That's the disciplined answer: it keeps the ORC's weight/complexity out and doubles down on the heat-pump + use-it-everywhere strategy.

## 5. Open / next
- Solar: cooling-plate for the fold-outs; side-panel mounting + the winter-yield model; total-area vs weight/aero.
- Add the wider solar (~12 kW) + the side-panel winter yield to the energy model.
- Dehumidification via waste-heat desiccant regeneration — a genuinely good low-grade-heat use to spec.

---
*Solar-everywhere + waste-heat verdict, 2026-07-03. SOLAR: roof main + 2-3 rigid fold-outs (~10 kW, all PV/T-coolable) + vertical SIDE panels (~1.3 kW, ~40% yield but great for low WINTER sun, always-on) + slide-out tops (~0.7 kW parked) = ~12 kW+ deployed. STEAM/ORC VERDICT = NO: low-grade heat (our majority) converts at only ~5%; high-grade diesel exhaust is better used directly (100%) + already recovered; excess heat coincides with abundant summer solar; ORC = heavy/complex/failure-point. KEY INSIGHT: a heat pump is the same machine backwards and ~20x better — COP 4 = 400% (elec->heat) vs ORC ~5% (heat->elec); electricity is high-value, heat is low-value; never convert heat->elec. DO instead: USE (DHW/drying/dehumid/battery/hydro) -> STORE (buffer) -> REJECT (cheap, AM HX). See solar_wide_and_heat_verdict.png.*
