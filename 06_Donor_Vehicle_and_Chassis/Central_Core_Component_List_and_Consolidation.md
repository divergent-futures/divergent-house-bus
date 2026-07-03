# Central Core - Component List & Consolidation Analysis

**Date:** 2026-06-29  ·  V2 bus. Assembled from the Thermal (manifold/granular + core vetting + tracker), Battery, Power-Electronics, and Water tracks. Purpose: list *everything* the core holds, see why it's big, and find the consolidation.

## First finding: the "core" is really FOUR functions bundled
What I drew as one 6 ft zone is a **mechanical/energy bay + a bathroom + the cold-kitchen + a laundry/utility closet**. That's why it looks huge. And some items I labelled "core" actually live **in the structural floor pack**, not the core - so they cost zero core volume. Splitting these out is most of the win.

## A. Mechanical / energy bay (the true "core")
| # | Component | Approx size | Notes / consolidation |
|---|---|---|---|
| 1 | High-temp compressor (400 V CO2, ~6 kW) | shoebox (~30x25x25 cm) | modular; wall-mount low |
| 2 | Low-temp compressor (48 V Secop BD, fridge/freezer) | small (~30x15x20) | **could relocate to the fridge** (local) |
| 3 | 18-port manifold + valves/actuators | ~40x30x20 block | the consolidation *win* - one block replaces many valves |
| 4 | CO2 gas cooler + intermediate/evaporator plate HXs (x3-5) | several ~30x10x10 | **integrate the gas cooler into the hot buffer** (one unit) |
| 5 | Hot buffer / DHW tank (~60 L) | ~40x40x40 (~0.06 m3) | **move under-floor / low** (it's just a tank) |
| 6 | Cold buffer / thermal store (~0.4-0.8 kWh) | ~30-40 L | **move under-floor / low** |
| 7 | **CHP genset (3.5 kW diesel)** + intake/exhaust | ~60x40x40 + ducting | **biggest single item** - move to its own **sealed under-floor/rear bay** (needs outside air + exhaust anyway) |
| 8 | Diesel fuel tank (CHP) | ~20-40 L | **under-floor** |
| 9 | Coolant pumps (x2-3), expansion, receiver, filter-drier, EEVs | small, scattered | mount on the manifold plate |
| 10 | Thermal ECU / controls | small | with controls hub |

## B. Power electronics (also in the bay)
| # | Component | Approx size | Notes / consolidation |
|---|---|---|---|
| 11 | Bidirectional DC-DC (HV<->48 V, ~10 kW, Vicor BCM stack) | ~30x20x15 | keep in bay (short HV run to pack) |
| 12 | 48 V PDM / distribution (Victron Lynx) + fuses | ~40x20x15 | keep in bay |
| 13 | IMD (Bender) | small | keep |
| 14 | Solar MPPT (x1-2) | ~40x25x15 ea | **relocate near the roof entry**, not the bay |
| 15 | Shore AC->DC charger | ~30x20x15 | keep (or near shore inlet) |
| 16 | Small convenience inverter (~1.5 kW) | ~30x20x15 | **already on its own branch near the bath** - not the bay |
| 17 | Controls hub (Cerbo GX + Pi + edge) | small | keep |

## C. Already in the FLOOR pack (NOT the core - zero core volume)
Traction BMS, house BMS, HV contactors + pre-charge, **pyro fuse**, class-T/branch fuses, copper busbars, and the **battery cold-plate** all live **inside the structural pack** (Battery vetting). If the v0.4 drawing implied these were in the bay, that was a drawing error - they're in the floor.

## D. Wet / utility cluster (shares the core zone, but is NOT the mech bay)
| # | Component | Approx footprint | Notes / consolidation |
|---|---|---|---|
| 18 | Wet room: shower pan + enclosure | ~36x36 in | genuine fixed floor - the biggest single core floor user |
| 19 | Reticulating-shower kit (pump, filter, UV, inline coil) | small, behind wall | mounts in the wall/under-pan |
| 20 | Composting toilet + urine separator | ~19x20 in | compact; in the wet room |
| 21 | Fridge / freezer | ~24 in wide column | **it's a galley appliance - move to the galley**, fed by the core loop lines |
| 22 | Hydroponic green wall | vertical surface | **wall-mounted - ~zero floor**; not a floor box |
| 23 | Drying | - | **make it a MODE of the heat-pump dryer**, not a separate drying room |
| 24 | Water: SS drinking tank + grey tank + rainwater | tanks | **under-floor / under-galley** |
| 25 | Water pumps, UV, filtration, salt-bleed RO | small | with the tanks / wall |

## Why it's big - and the consolidation
The core looked huge because it bundled a mechanical room + bathroom + cold-kitchen + laundry, **and** double-counted floor-pack items. The moves:
- **To the structural floor (already there):** BMS x2, contactors, pyro fuse, busbars, cold-plate (C).
- **Under-floor / low:** hot + cold buffers (5,6), CHP genset + fuel + exhaust in a sealed bay (7,8), water tanks (24). *These are the bulky, no-reason-to-be-at-counter-height items.*
- **Relocate out of the bay:** fridge/freezer -> galley (21), MPPT -> roof entry (14), convenience inverter -> bath branch (16), low-temp compressor -> at the fridge (2).
- **Integrate:** gas cooler into the hot buffer (4); all valves into the one manifold block (3).
- **Zero-floor:** hydro wall is vertical (22); drying is a dryer mode (23).

**What's actually left as the "mech bay":** the two compressors (or one + a fridge-local unit), the manifold block, the plate HXs, the DC-DC + PDM + IMD + charger + controls hub, and the pumps - a **single ~24-28 in deep x ~3-4 ft long, waist-to-shoulder-height cabinet**, not a full 6 ft room. The **wet room + composting toilet** become the core zone's real floor consumer; everything mechanical either drops under-floor or shrinks to that one cabinet.

## Net effect on the floor plan
- The **mech bay footprint roughly halves** (buffers/CHP/fuel/tanks go under-floor; fridge to galley; MPPT/inverter out).
- The **core zone** then = a compact mech cabinet on one wall + the wet room + composting WC across the aisle, with the hydro wall as a vertical surface - which should let the core shrink from ~6 ft or free that length for the bedroom/lounge.
- **Under-floor becomes a real packaging asset** (buffers, CHP bay, fuel, water tanks) - the battery is the floor, but there's still peripheral under-body volume outboard/around the pack and in a dedicated sealed CHP bay.

## Open questions (to firm the consolidation)
1. **Under-floor volume budget** - how much peripheral under-body space really exists around the structural pack for buffers/tanks/CHP (needs the Structure cross-section).
2. **CHP bay location** - under-floor mid vs a sealed rear bay (exhaust + intake + fire separation).
3. **Fridge to galley** - confirm the low-temp loop line run vs a local Secop unit at the fridge.
4. **Re-draw the core** at the consolidated footprint -> floor-plan v0.5.

---
*Central core component list + consolidation, 2026-06-29. The core bundled 4 functions + double-counted floor-pack items. Move buffers/CHP/fuel/water-tanks under-floor, fridge to galley, MPPT/inverter out, integrate gas-cooler+buffer and the valve manifold, hydro=vertical, drying=dryer-mode. Result: mech bay -> a single ~24-28 in x ~3-4 ft cabinet; core zone can shrink/free length. Re-draw as floor-plan v0.5.*
