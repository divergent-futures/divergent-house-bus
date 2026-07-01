# Aero (Cd) vs Solar - Tradeoff Matrix

**Date:** 2026-06-29  ·  V2 bus. Pairs with `CFD_Cd_Aero_Analysis.md` + `Solar_Supplier_Vetting.md`.

## The framing that dissolves most of the conflict
The two only compete if you assume they fight over the same surface. They don't - they matter in **different regimes**:
- **Solar matters while PARKED** - which, per the duty cycle (live in it, drive the cool edges of the day, park through peak sun), is **most of the time**. Solar is about **roof area + orientation**, and it's the **net-positive range engine**.
- **Drag matters only while DRIVING at highway speed** - a minority of the time - and it scales with v³, so it's ~nil below 40 mph and dominant at 60-65.

So the rule writes itself: **the roof is prioritised for solar; Cd is bought from everything that isn't the solar roof.** Almost all the drag is elsewhere anyway.

## Roof-NEUTRAL Cd levers - do all of these (free range, zero solar cost)

| Lever | Cd benefit (est., non-additive) | Solar impact | Verdict |
|---|---|---|---|
| **Boat-tail / tapered rear** | -0.02 to -0.05 (biggest after the nose) | none | **do** |
| **Smooth underbody tray** (pack floor helps) | -0.02 to -0.04 | none | **do** |
| **Wheel covers/spats + gap management** | -0.01 to -0.03 | none | **do** |
| **Front & A-pillar edge radii** (clean flow onto the flat roof) | -0.01 to -0.02 | none (helps roof flow) | **do** |
| **Side skirts / flush sides, flush glazing** | -0.01 to -0.02 | none | **do** |
| **Highway ride-drop** (air susp, already have) | -0.03 | none | **do** |
| **Mirror delete/faring** (CMS-ready) | ~-0.03 (~15 mi) | none | **do (when legal)** |
| **Clean cooling airflow** (gas-cooler intake/exhaust ducted low/smooth) | small | none | **do** |
| **Flush-mount accessories** (ladder, antennas, awning boxes) | small | none | **do** |

**Stacking these plausibly gets Cd from ~0.45 to ~0.35-0.40 - with the full solar roof intact.** That's ~**307-326 mi at 65 mph** (vs ~270), all without touching a single panel. (Non-additive; CFD confirms.)

| Cd | kWh/mi @65 | range @65 | @60 |
|---|---|---|---|
| 0.45 (nose + ride-drop only) | 1.05 | ~270 mi | ~305 mi |
| 0.40 | 0.96 | ~295 mi | ~332 mi |
| 0.38 | 0.93 | ~307 mi | ~344 mi |
| 0.35 (full roof-neutral stack) | 0.87 | ~326 mi | ~365 mi |

## Where solar and Cd GENUINELY trade (the real matrix)

| Design item | Solar wants | CFD wants | The tension | Recommendation |
|---|---|---|---|---|
| **Roof camber** | flat (max panel area, easy mount) | slight curve | small - a flat roof is fine *if* the leading edge is rounded | **flat roof** (win for solar) |
| **Roof leading edge** | panels to the front edge | rounded/raked transition | rounding costs a little front panel length | **round it** - clean flow onto the roof matters more than a few cm of panel |
| **Rear roofline / boat-tail above roofline** | panels to the back | downward taper (kammback) | a roof-height taper shortens rear panels | **partial** - taper mostly *below* roofline; keep the roof flat for panels, taper the body |
| **Overall height** | taller = more side-wing stow + interior | lower = smaller frontal area (A) | **the real lever** - height drives both frontal area (drag) and interior/solar | **balance**: only as tall as standing room needs; height is the main Cd knob, so don't over-height for its own sake |
| **Deployable-wing stow** | thick stack on the roof | flush, smooth | stowed wings add roof bulk + disrupt flow | **flush-stow** the wings into a shallow roof recess (protect the flat aero surface) |

## Priority verdict (solar vs CFD)
- **On the roof: solar wins.** Keep it flat and full; the only concession is rounding the front (and slightly the rear) roof *edges* for clean flow - a few cm, not the field.
- **Everywhere else: CFD wins**, freely - tail, underbody, wheels, sides, edges, ride-height, mirrors. That's where ~all the drag is, and none of it costs solar.
- **The one shared knob is HEIGHT** - it sets both frontal area (drag) and interior/side-panel room. Treat height as *the* deliberate trade: set it by standing-room need, not by wanting a taller box.
- **Weighting:** because parked hours >> driving hours and solar is the range engine, when a true conflict is ~even, **lean solar**; only give up roof area when the Cd payoff is large (e.g. the roof leading-edge radius, which also *helps* solar-roof airflow).

## Open questions
1. Real **CFD** to rank the roof-neutral levers by actual ΔCd (boat-tail and underbody are likely the big two).
2. Set **overall height** (the shared knob) from standing-room + floor-pack + roof-stack stack-up.
3. Deployable-wing **flush-stow** recess design (keeps the aero roof clean).
4. Rear treatment: how much taper below vs at roofline before it eats rear panels.

---
*Aero-vs-solar matrix, 2026-06-29. They mostly don't conflict: solar owns the (flat, full) roof; Cd is won from tail/underbody/wheels/sides/edges/ride-height/mirrors - roof-neutral, plausibly Cd ~0.35-0.40 (~307-326 mi @65). The one real shared trade is overall HEIGHT. When a true tie, lean solar (parked-dominant duty cycle).*
