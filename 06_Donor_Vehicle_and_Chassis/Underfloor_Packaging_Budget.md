# Under-Floor / Bespoke-Pack Packaging Budget

**Date:** 2026-06-29  ·  V2 bus. How much of the central core can sink into/around the bespoke structural pack - and what it costs in range. Pairs with the Central-Core consolidation + Structure + Battery tracks.

## Keep it central - that part is right
Clustering the mechanicals mid-bus is correct: **short pipe + wire runs, less copper (weight), heavy mass over the drivetrain / mid-wheelbase**. The goal is **not** to scatter the core to the ends - it's to keep it central but stop it eating *cabin floor* by sinking the bulky, low-value items into **free under-body volume**, using the fact that the pack is bespoke (any shape we want).

## The one hard constraint: carving the pack costs battery
Pack ~11 m^2 x 0.22 m = ~2.42 m^3 = 330 kWh -> **~136 kWh per m^3 (~0.14 kWh per litre).** So *volume carved out of the pack = range lost*:

| Carve-out (if taken from the pack) | Volume | Range cost |
|---|---|---|
| Deep mech trough under core (buffers+tanks) | ~270 L | **~37 kWh (~37 mi)** - too much |
| Shallow shower-pan + WC-base well | ~72 L | ~10 kWh (~10 mi) - OK |
| Central plumbing/wiring spine *carved down the pack* | ~60 L | ~8 kWh - avoid (do it peripherally instead) |

**Rule: never carve a big/deep well out of the pack. Use the free non-pack volume first; spend pack only on shallow, high-value wells.**

## Free / near-free volume (no kWh cost) - use these first
- **Peripheral outboard channels** - the ~0.1 m gap each side between the 2.3 m pack and the 2.5 m body, full length. **-> the plumbing + wiring SPINE** (keeps runs central + short, ~0 kWh).
- **Rear wheel-well / axle zone** - the pack is already notched around the rear wheels. **-> the CHP genset + diesel + exhaust bay** (near the drivetrain, where exhaust exits, with fire isolation).
- **Ground-clearance zone under the pack** (skid-protected) - thin/low items, protected runs.
- **Front (ahead of the pack)** - frunk + cab air-handler (already assigned).

## Placement plan (central, but off the cabin floor)
| Item | Where | Cost |
|---|---|---|
| Plumbing + wiring **spine** | peripheral outboard channels (free) | ~0 kWh |
| **CHP genset + fuel + exhaust** | rear wheel-well / axle bay (sealed, free) | ~0 kWh |
| **Hot + cold buffers** | rear / peripheral non-pack space | ~0 kWh |
| **Water tanks** (SS drinking + grey) | under-galley / peripheral non-pack | ~0 kWh |
| Shower pan + composting-WC base | **shallow pack well** | ~10 kWh |
| Manifold + plate HXs | slim under-core **lift-panel bay** (shallow) | small |
| **Compressors x2** | central cabinet (need air + service) - **not buried** | in-cabin (slim) |
| DC-DC + PDM + IMD + charger + controls hub | central cabinet / liftable floor bay (service) | in-cabin (slim) |
| BMS x2, contactors, pyro fuse, busbars, cold-plate | **inside the pack already** | 0 (in floor) |

## Net effect
- The core stays **fully central** - the integration thesis, short runs, and mid-mass all hold.
- The bulky masses (CHP, fuel, buffers, tanks) go into **free non-pack volume** near the drivetrain; the **spine routes peripherally** (free).
- Only a **shallow wet-floor well (~10 kWh)** is carved from the pack - a deliberate, priced trade, not a 37 kWh trough.
- The in-cabin core shrinks to a **slim central cabinet** (2 compressors + manifold/HXs + electronics) + the wet room + composting WC - freeing core length for the bedroom/lounge.
- **Total range cost ~10-15 kWh** (vs 37+ for the naive deep-trough approach).

## Feeds
- **Structure track:** the bespoke pack shape spec - peripheral channels, wheel-well CHP bay, shallow wet-floor well, under-core lift-panel bay, the ground-clearance protected runs. (Needs the pack cross-section + the rear-axle/suspension package to confirm the wheel-well bay volume.)
- **Floor-plan v0.5:** redraw the core at the consolidated in-cabin footprint (slim mech cabinet + wet room + WC), with the bulky items shown under-floor/rear.

## Open questions
1. **Rear wheel-well / axle bay volume** - real usable space around the e-axle + suspension for the CHP bay (needs the drivetrain package).
2. **Peripheral channel width** - is ~0.1 m each side enough for the spine, or do we widen the body slightly (still <102 in) / narrow the pack?
3. **Under-core lift-panel bay depth** - how shallow can the manifold/HX bay be before it costs meaningful kWh.
4. Confirm the **shallow wet-floor well** (~10 kWh) is worth the flush floor vs a small step.

---
*Under-floor packaging budget, 2026-06-29. Keep the core central (short runs + weight + mid-mass), but sink bulky items into FREE non-pack volume (peripheral spine, rear wheel-well CHP bay, under-galley tanks) rather than carving the pack (~136 kWh/m^3). Spend pack only on a shallow ~10 kWh wet-floor well. In-cabin core shrinks to a slim central cabinet + wet room + WC. ~10-15 kWh total range cost. Feeds pack-shape spec + floor-plan v0.5.*
