# E-Axle Ride Height, Ground Clearance & Rear Equipment Clustering

**Date:** 2026-07-03  ·  V2 bus. Answers TJ's gating question: what's the e-axle's ride height, how low can the bus get to the ground, how does the e-axle attach to the structural pack — and does it make sense to cluster the mechanical/energy bay **around the rear e-axle** (rear two-thirds) rather than dead-center. Pairs with `Mech_Component_Sizes_and_Drivetrain.md`, `Underfloor_Packaging_Budget.md`, `Central_Core_Component_List_and_Consolidation.md`, and feeds floor-plan v0.5 + the Structure pack-shape spec. Class-typical estimates — confirm at e-axle + suspension selection.

---

## 1. The reframe (TJ's insight — and it's the right one)
The mechanical/energy bay shouldn't hang under the **middle** of the belly. Off-road, a mid-belly box is the first thing a rock finds, and the mid-body has no cooling, no impact structure, and long cable runs to it. The **rear e-axle already has all three**: it's cooled (its own loop), it's inside crash/skid structure, and the fattest cabling in the bus already terminates there. It's also at the **rear two-thirds**, near mass and serviceable from the back. So the mechanical/energy bay should **cluster around the e-axle**, not dead-center. The wet cluster (bath, hydro, fridge) stays mid for plumbing; the *mechanical* bay migrates rear.

This is a refinement of the earlier "keep it central" call, not a reversal — the driver of "central" was short HV runs + mass over the drivetrain. The e-axle **is** the drivetrain and the biggest HV load, so clustering on it satisfies the same goals while getting protection, cooling, and off-road belly-clearance for free.

## 2. E-axle ride height & how low the bus can go
Ride height is set by three things: wheel/tire radius (fixes the axle centerline), how far the e-axle's motor/reduction housing hangs below that centerline, and air-suspension travel. Class-typical for a ~19.5 in commercial wheel:

| Element | Estimate | Notes |
|---|---|---|
| Tire OD (e.g. 245/70R19.5) | ~31 in / ~790 mm | axle **centerline ≈ 15.5 in / ~395 mm** above ground |
| E-axle housing lowest point (motor/reduction "pumpkin") | hangs ~5–7 in below centerline | **lowest hard point ≈ 9–11 in / ~230–280 mm** at nominal ride |
| Skid plate under that housing | +1–2 in of sacrificial structure | protects the pumpkin; becomes the true belly low point |
| **Air-suspension travel** | ~±3–4 in about nominal | raise for clearance, drop for highway Cd |

**So, practically:**
- **Nominal ride:** belly (e-axle/skid) clearance **~10–11 in**.
- **Highway-dropped:** **~6–7 in** — lower body, lower Cd. Body rockers can kneel further, but the **axle housing sets the real floor** — air springs can't lower the axle below its wheel-radius geometry; they lower the *body* toward the axle.
- **Off-road-lifted:** **~13–15 in** at the axle.

**The key limit:** the e-axle pumpkin + skid is the lowest fixed point on the whole vehicle. Nothing else may hang below it. That single line defines the bottom of the packaging envelope — everything mechanical must live **above** it, inside the wheel track, behind the skid.

## 3. How the e-axle attaches to the pack — and the one rule that matters
The e-axle is **unsprung** — it moves with the wheels over every bump. It connects to the body through the **air suspension** (trailing/control arms + air springs + shocks) into mounts on a **rear subframe that is integrated into the structural pack's rear structure**. The pack is the sprung mass; the e-axle is not bolted rigidly to it.

**The rule (this is the hub-motor trap again):** cluster the equipment **around** the e-axle, but bolt every heavy item to the **sprung rear subframe / pack structure**, **never to the axle beam itself**. Hanging compressors or buffers on the moving axle would re-create exactly the unsprung-mass penalty we rejected hub motors to avoid — it would wreck ride and fight the air suspension. "Around the e-axle" = in the protected sprung structure that surrounds it, above max suspension jounce. Keep a clear articulation gap so a fully-compressed axle never touches a mechanical box.

Because the axle centerline (~395 mm) sits **above** the pack's underside (~230 mm in the height stack-up), the pack can't run flat over the axle — it **notches up** into a raised rear floor (the wheel-well notch we already spec'd). That raised rear floor is the top of the rear mech zone and the platform the bed sits on.

## 4. The rear mechanical zone — the box we get
Bounded by: the rear edge of the main pack (front), the rear crumple (back), the wheel track (sides), the raised bed floor (top), and the skid/clearance line (bottom). Usable pockets are **forward of the axle**, **above the axle** (above jounce), and **between the frame rails and the wheels**.

| Envelope | Rough figure |
|---|---|
| Rear zone length (rear ~1/3 of 25 ft) | ~1.5–2.0 m |
| Width (inside wheel track / rails) | ~1.0–1.5 m usable |
| Height under raised bed, above axle jounce | ~0.4–0.6 m |
| **Usable clustered volume (net of axle + travel)** | **~0.6–1.0 m³** |

That comfortably swallows the **~0.4 m³** of buffers + CHP + fuel + water tanks *and* the **~0.07 m³** mech-cabinet hardware (compressors, manifold, HXs, power electronics) — with room to spare, which is what TJ wants ("I don't want to package it really, really tight"). The heat-rejection gas-cooler + fan still needs its **own ambient-air grille**, but now it can share the rear zone's airflow path with the e-axle's cooling instead of needing a separate mid-body grille.

## 5. What clusters rear vs what stays mid
| Stays mid-bus (plumbing/use-point driven) | Migrates to the rear e-axle zone (protection/cooling/cabling driven) |
|---|---|
| Wet room: shower pan + composting WC | HT + LT compressors |
| Hydroponic wall (vertical) | 18-port manifold + plate HXs + pumps |
| Fridge/freezer (galley appliance) | Hot + cold buffers / DHW |
| Convenience inverter (bath branch) | Power electronics: DC-DC, PDM, IMD, charger, controls hub |
| Cab air-handler (front) | CHP genset + diesel (sealed, outside air + exhaust — exits at rear anyway) |
| — | Heat-rejection gas-cooler + fan (shares rear air path) |
| — | Water tanks (or keep under-galley — see tradeoff #2) |

Net: the **mid-bus "core"** shrinks to the wet cluster + a short run of galley — freeing cabin length — and the **mechanical/energy bay becomes a serviceable rear module** under the raised bed, over the driven axle.

## 6. Tradeoffs — honestly
1. **Longer thermal run to the front cab.** A rear thermal core means the glycol loop to the front cab air-handler is the longest run in the bus. Acceptable: loop pipe is cheap and light vs the belly-clearance + protection + short-HV win, and the **peripheral spine** already carries it. But size that loop for the front-cab cooling case (fast-charge summer) so it isn't starved.
2. **Rear axle-load bias.** Clustering ~200–300 kg of mechanicals + CHP + water at the rear, on top of the e-axle and bed, loads the rear axle. The battery (the heavy item) is the full mid-floor, so this mostly *helps* rear traction on the driven axle — but check the front/rear split so steering/handling and the front axle rating stay in band. Water tanks are the swing weight; keeping them under-galley (mid) is the easy balance lever (tradeoff #2 is really a balance knob).
3. **Heat concentration.** Compressors + CHP + the e-axle inverter in one zone concentrates heat rejection. Upside: one shared grille + one loop. Requirement: size the rear heat-rejection grille for the *combined* load, and keep **fire/thermal separation** around the CHP + diesel (sealed bay, its own intake/exhaust).
4. **Articulation clearance.** Everything must clear full suspension jounce — package above max travel, with a guard gap. This costs a little of the rear zone's height budget (already netted out in §4).
5. **Serviceability vs crash structure.** Good rear access (rear hatch + external door) is a plus, but the rear crumple zone must stay clear of rigid mechanical boxes — keep the heavy cluster **forward of** the rear crush structure, over/ahead of the axle.

## 7. Recommendation
**Yes — cluster the mechanical/energy bay around the rear e-axle.** It's the right call: shared cooling, existing impact/skid structure, shortest HV runs to the biggest load, rear serviceability, and it keeps the mid-belly clear for off-road. Constraints: (a) mount everything to the **sprung rear subframe/pack**, never the axle beam; (b) keep all of it **above the e-axle/skid low line** and clear of jounce; (c) size the front-cab thermal loop for the long run; (d) watch rear axle-load balance (water tank as the trim weight); (e) fire-separate the CHP; (f) keep the heavy cluster ahead of the rear crush zone. Don't pack it tight — the ~0.6–1.0 m³ envelope has margin for the ~0.5 m³ of contents.

## 8. Feeds
- **Floor-plan v0.5:** mechanical/energy bay → **rear module under the raised bed, over the e-axle**; wet cluster stays mid; show the raised rear floor (pack wheel-well notch), the skid low-line, and the rear heat-rejection grille.
- **Structure / pack-shape spec:** rear subframe integrated into the pack; wheel-well notch geometry (pack lifts over the ~395 mm axle centerline); mounting hardpoints for the cluster on the sprung structure; skid plate under the pumpkin.
- **Thermal:** size the front-cab glycol loop for the long run; combined rear heat-rejection grille sizing.
- **Suppliers:** confirm e-axle package height + lowest-point dimension + air-suspension travel at part selection (JJE 3-in-1 class per the tracker).

## 9. Open
1. Real e-axle pumpkin lowest-point + housing envelope (needs the selected e-axle datasheet) — confirms the ~9–11 in nominal.
2. Air-suspension travel + whether we want a bigger drop for highway Cd vs the axle-geometry floor.
3. Front/rear axle-load split with the rear cluster + water placement — the balance calc.
4. Rear heat-rejection grille location/size for the combined compressor + CHP + inverter load.
5. Wheel size choice (19.5 vs 22.5) — trades axle centerline height (floor/clearance) against tire availability/load rating.

---
*E-axle ride height + rear clustering, 2026-07-03. Nominal belly clearance ~10–11 in (highway-dropped ~6–7, lifted ~13–15); the e-axle pumpkin + skid is the lowest hard point and sets the packaging floor. Axle centerline (~395 mm) sits above the pack underside, so the pack notches up into a raised rear floor. Cluster the mechanical/energy bay AROUND the e-axle (rear two-thirds) — shared cooling, impact/skid protection, shortest HV runs, serviceable, mid-belly stays clear for off-road — but bolt everything to the SPRUNG rear subframe/pack, never the axle beam (else unsprung-mass penalty returns), above jounce, above the skid line. Rear zone ~0.6–1.0 m³ usable, comfortably holds the ~0.5 m³ of contents. Wet cluster stays mid. Tradeoffs: longer front-cab thermal loop, rear axle-load bias (water tank = trim weight), heat concentration (shared grille + fire-separate CHP), articulation clearance, keep cluster ahead of rear crush. Feeds floor-plan v0.5 + Structure pack-shape.*
