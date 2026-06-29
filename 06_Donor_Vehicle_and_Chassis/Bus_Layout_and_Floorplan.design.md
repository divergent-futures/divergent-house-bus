# Bus Layout & Floor Plan - V1 (first pass)

**Status:** Layout v0.1 (format pass)  ·  **Depends on:** all 7 subsystem tracks (basic pass complete)
**Part of:** House BUS subsystem design tracks. This is where the sized components become a physical arrangement.

---

## 1. Purpose

The subsystem tracks told us *what is in the bus* and roughly *how big*. This is the first pass at *where it all goes* - a top-down floor plan that turns those component decisions into a physical layout. Dimensions here are first-pass and will firm up in the granular round once real component footprints are fixed; the goal now is the arrangement and the logic behind it.

## 2. The floor plan

![House BUS V1 floor plan](bus_floorplan.png)

Front (cab) at left, rear (bed) at right. ~27 ft x 8 ft body, slide-outs widening the lounge and bedroom when parked. The 800 V sodium pack is the full structural floor under everything.

## 3. Zone allocation (front -> rear, first pass)

| Zone | Approx length | Contents |
|---|---|---|
| Front crash / steering | ~2 ft | Stub structure, steering, front crash |
| **Driving cabin** | ~5 ft | Driver + 2-3 passenger seats, screen/tablet; conditioned zone on the move |
| **Main lounge / galley** | ~6 ft | Convertible dinette/sofa-bed, table, induction + sink; slide-out widens |
| **Central core** | ~7 ft | Central mechanical bay + bath/shower + hydroponics + fridge/freezer + drying/dehumidifier |
| **Bedroom** | ~6 ft | Climate bed, storage, rear emergency hatch; slide-out widens |
| Rear crash / e-axle | ~1.5 ft | e-axle, rear crash, hitch |

## 4. The central mechanical bay (the heart)

Mid-bus, exactly where the Thermal track put it. It holds the **thermal core (dual compressors + manifold), BMS, 48 V and HV connections, hot-water tank + buffers, and the CHP genset**. Accessible from inside and from an external service door, inside a **fire-containment enclosure**.

Why the centre, restated physically: the battery floor, the rear drivetrain, and the mid-bus wet cluster (shower, hydroponics, fridge, drying, dehumidifier) are all close, so coolant loops and wiring stay short and recovered heat is captured right where it is used. A front (old engine-bay) location would force long runs front-to-back.

## 5. The wet / utility cluster (mid-bus)

The bathroom/closed-loop shower, hydroponic green wall, fridge/freezer, drying area and dehumidifier all sit around the central bay - so the heat-reuse loop, the condensate harvest, and the hot water all happen in one tight zone with minimal plumbing. This clustering is the physical expression of the integration thesis.

## 6. Living zones & air quality

Four living zones - **driving cabin, main lounge, bath/hydroponics, bedroom** - each with its own air-quality array (CO / CO2 / O2 / humidity / particulates), feeding the ventilation logic (Controls + Safety tracks). Each zone is independently conditioned/ventilated, and the driving cabin can be sealed from the rear so only it is conditioned on the move.

## 7. Slide-outs, roof & underfloor

- **Slide-outs** widen the lounge and bedroom when parked (accepted thermal-bridge trade; winter is occasional).
- **Roof:** ~3.5 kW fixed solar + deployable array; ERV intake/exhaust; kept clear of clutter.
- **Underfloor:** the 800 V sodium structural pack spans the whole floor - lowest possible CG, stiff floor, rollover-resistant.

## 8. Circulation & egress

- **Main entry** at the front by the lounge/cab.
- **Rear emergency hatch + window** at the bed - the second independent exit (Safety track), so a mid-bus fault never traps you.
- **External service door** to the central bay for maintenance without entering the living space.
- A clear walk-through aisle front-to-back; the central core is passed on one side so the aisle is never blocked.

## 9. Why this arrangement

- **Heaviest mass central + low** (battery floor) -> stable handling, the mechanical bay sits on top of it for short HV/48 V runs.
- **Thermal core central** -> shortest loops to the biggest heat/cold users and the best heat harvest.
- **Wet cluster central** -> one plumbing zone, condensate harvested where made.
- **Sleep at the rear** -> quietest, furthest from the cab and the mechanical bay, with its own egress.
- **Driving cabin sealable** -> condition only the front on the move (the binding fast-charge case stays small).

## 10. What firms this up (granular round)

Exact dimensions wait on the component footprints that are still open:

- Thermal core + dual-compressor + buffer **physical size** -> sets the central-bay volume.
- **Battery floor thickness** and cold-plate routing -> floor height / step-in.
- **Water inventory** (drinking tank + wash loop + reservoir) -> tank locations and the bath/hydro footprint.
- **Slide-out** travel and mechanism depth.
- e-axle packaging (rear only vs front+rear) -> rear zone length.

## 11. Open questions

- Galley position - along the lounge wall vs wrapped into the central core.
- Bathroom vs hydroponics split within the wet cluster (and the rail-mounted shower/hydro space-share idea from the concept doc).
- Driving cabin seat count (2 vs 3-4) and whether seats convert/stow.
- Storage volume targets (pantry, gear) folded into each zone.
- Exact slide-out extents and which zones get them.

---
*Layout v0.1 (2026-06-27). First-pass arrangement from the completed basic subsystem pass; dimensions provisional. Next: feed real component footprints back in, then iterate the plan toward a measured V1.0.*
