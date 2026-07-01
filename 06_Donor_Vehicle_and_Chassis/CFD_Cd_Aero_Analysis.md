# CFD / Cd - Aerodynamic Drag & Range Analysis (first-order)

**Date:** 2026-06-29  ·  V2 bus. Pairs with `Front_End_Design.md` + the range/energy model. *First-order analytical Cd·A model (literature Cd values), not a meshed CFD sim - use to set targets + confirm the range; a real CFD/wind-tunnel pass verifies the actual Cd.*

## Method & assumptions
Road power at cruise = aero + rolling: **P = ½·ρ·Cd·A·v³ + Crr·m·g·v**, then energy/mile = P/v ÷ drivetrain efficiency.
Assumptions: air ρ 1.2 kg/m³; **frontal area A ≈ 7.0 m²** (~2.5 m wide × ~3.0 m tall, shape-filled); loaded mass **7,000 kg**; Crr 0.007 (good tyres); drivetrain η 0.88; **usable traction ≈ 285 kWh** (~95% of the 300 kWh domain).

## Results

| Configuration | Cd | @ 60 mph | @ 65 mph |
|---|---|---|---|
| Stock school-bus **brick** | 0.65 | 1.24 kWh/mi · ~229 mi | 1.42 kWh/mi · ~201 mi |
| Ours: **raised + mirrors** (town/off-road) | 0.48 | 0.98 · ~291 mi | 1.11 · ~257 mi |
| Ours: **highway dropped + mirrors** (now) | 0.45 | 0.93 · ~305 mi | 1.05 · ~270 mi |
| Ours: **highway dropped, no mirrors** (future CMS) | 0.42 | 0.89 · ~321 mi | 1.00 · ~285 mi |

**Aero is ~75-83% of drag at highway speed** - so the body shaping, not rolling resistance, dominates. That's why the CFD work pays.

## What it tells us
- **The shaping supports the range with headroom.** At a realistic Cd ~0.45 (dropped, mirrors on), we get **~1.05 kWh/mi and ~270 mi at 65 mph** (more at 60). The locked **245 mi floor is conservative** - good; keep it as the planning floor, treat the extra as margin.
- **Mirrors cost ~5% / ~15 mi of range** at 65 mph (+0.05 kWh/mi). Your instinct is right: fit them **as small/faired as compliance allows and make them removable** - switching to camera monitors (when FMVSS 111 permits) claws back ~15 mi. Design them so the day they come off, aero improves and nothing else changes.
- **The highway ride-drop is worth ~13 mi** (raised 0.48 → dropped 0.45) - a free win from the air suspension we already carry. Drop on the highway, lift for clearance.
- **Speed is the biggest lever** (drag ∝ v³): cruising **60 instead of 65 adds ~35 mi** (~305 vs ~270). Reinforces the "≤65 mph, don't oversize the drivetrain" stance and the drive-the-cool-edges-of-the-day rhythm.
- **The flat solar roof is affordable aero.** Its penalty is real but small next to nose shaping + ride-drop; a **flat roof + rounded leading edge + side fairings + tapered tail** keeps the ~0.42-0.45 target while preserving the triplicate-solar real estate.

## Design targets that fall out
- **Cd target ~0.42-0.45** (dropped): raked nose with **uniform curvature**, rounded leading edges, smooth underbody, roof-to-side fairings, tapered rear, wheel-gap management, minimal protrusions.
- **Mirrors:** minimal frontal area, faired, **removable / CMS-ready**.
- **Cruise 60-65 mph**; **drop ride height on the highway**.

## Open questions
1. Real **CFD / wind-tunnel** pass to confirm Cd (this model assumes it).
2. Firm the **frontal area A** once height/width are fixed (standing room + solar roof + floor pack).
3. Rear/tail treatment (a boat-tail/taper is the next-biggest Cd lever after the nose).
4. Mirror model + fairing that minimises ΔCd while meeting FMVSS 111.

## Sources / basis
- Physics: standard aero+rolling road-load model. Cd values from vehicle-class literature (boxy RV/bus ~0.6-0.7; well-shaped large vehicle ~0.4-0.45). Confirm by CFD.

---
*CFD/Cd first-order pass, 2026-06-29. Target Cd ~0.42-0.45 -> ~1.0-1.05 kWh/mi @65 mph -> ~270 mi (245 floor is conservative). Mirrors ~-15 mi (remove when CMS-legal); ride-drop ~+13 mi; 60 vs 65 mph ~+35 mi. Real CFD to verify.*
