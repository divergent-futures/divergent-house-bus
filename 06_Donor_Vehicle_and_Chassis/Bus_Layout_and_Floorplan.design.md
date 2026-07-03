# Bus Layout & Floor Plan - V2 (integrated bus)

**Status:** Layout v0.3 (measured, 25 ft — for iteration)  ·  **Applies to:** Bus **V2** (the bespoke integrated House Bus; V1 = the skoolie repower has its own simpler layout)  ·  **Depends on:** all subsystem tracks + the V1-vs-V2 staging
**Part of:** House BUS subsystem design tracks. Where the now-sized components become a physical arrangement.

---

## 1. Purpose & what changed since v0.1

v0.1 was the first arrangement from the basic subsystem pass. **v0.2 folds in the footprints that have since firmed up:**
- **400 V / 48 V dual-domain structural pack** (~330 kWh: 300 @ 400 V traction + 30 @ 48 V house) - *was* 800 V single pack. Both BMS sealed inside; **roboformed enclosure**, wheel-well-notched; **~11 m^2 single-layer footprint, ~8.7 in thick**; cold-plate cooled off the thermal loop.
- **CO2 dual-circuit thermal core** in the central bay (high-temp 400 V CO2 compressor + low-temp 48 V Secop; gas cooler -> hot water; 18-port manifold; hot/cold buffers; CHP genset).
- **All-DC electrical** - no main 5 kW inverter; 48 / 24 / 12 V + USB-C via point-of-use bucks; a small **~1.5 kW switchable convenience inverter near the bathroom** feeds AC outlets at bath/galley/lounge; galley cooking = **48 V DC induction + DC oven**.

Dimensions are firmer but still provisional; the goal remains the arrangement and its logic.

## 2. The floor plan

![House BUS V2 floor plan v0.3](bus_floorplan_v0_3.png)

Front (cab) at left, rear (bed) at right. **25 ft (locked) x ~98 in body**, slide-outs widening the lounge and bedroom when parked. The **400 V/48 V sodium structural pack is the full floor** (~8.7 in, lowest CG). Side elevation shows the **raked low-Cd nose**, the **flat 6 ft 4 in standing box** (cab -> lounge -> core), and the **boat-tail** tapering over the rear bedroom. *(v0.2 schematic image retained as `bus_floorplan.png`.)*

## 3. Zone allocation (front -> rear) — measured, 25 ft (300 in)

| Zone | Length | Contents |
|---|---|---|
| Front crush / steering | 2.0 ft | crumple structure, steering, front lighting; **no HV/pressure vessels** (Front-End doc) |
| **Driving cabin** | 4.5 ft | 2-3 seats + tablet; **sealable** (insulated bulkhead); integrated into the **raked nose**; cab air-handler off the central core |
| **Main lounge / galley** | 6.0 ft | convertible dinette/sofa-bed; **48 V induction + DC oven** + sink; slide-out widens |
| **Central core** | 6.0 ft | mech bay (top: CO2 core, manifold, DHW+buffers, DC-DC/IMD, CHP, both BMS) + wet cluster (bottom: shower+composting WC, hydroponic wall, fridge/freezer, drying) |
| **Bedroom** | 5.5 ft | climate bed + storage; under the **boat-tail** (sit/lie, no standing); rear emergency hatch; slide-out widens |
| Rear crush / e-axle | 1.0 ft | e-axle, rear crumple, hitch for the toad |
| **Total** | **25.0 ft** | usable interior ~22 ft (cab -> bed) |

## 4. The central mechanical bay (the heart)

Mid-bus, on the structural pack. Holds the **CO2 dual-circuit thermal core** (high-temp 400 V CO2 compressor + low-temp 48 V Secop), the **18-port manifold**, **hot-water gas-cooler tank + hot/cold buffers**, the **power electronics** (Vicor HV->48 V DC-DC, contactors, Bender IMD), the **HV + 48 V distribution**, and the **CHP genset**. Both pack BMS are accessed here. Fire-contained enclosure, reachable from inside and from an **external service door**.

Centre placement keeps coolant loops and HV/48 V runs short and captures recovered heat right where the mid-bus wet cluster uses it.

## 5. The wet / utility cluster (mid-bus)

Bath + closed-loop reticulating shower, composting toilet (urine -> hydroponics), hydroponic green wall, fridge/freezer, drying + dehumid - all around the central bay, so the heat-reuse loop, condensate harvest, and hot water happen in one tight plumbing zone. The CO2 gas cooler's 60-95 C water feeds the shower and the drying right here.

## 6. Electrical distribution (all-DC)

- **No whole-bus AC bus.** 48 V backbone (induction, big pumps, dryer) + 12/24 V + USB-C via point-of-use bucks.
- A small **~1.5 kW switchable convenience inverter near the bathroom** (hair-dryer-driven, off by default) feeds **GFCI AC outlets at bath (primary), galley, and lounge**.
- Shore AC -> DC charger; solar -> 48 V MPPT; DC fast charge (NACS, MCS-ready) -> the 400 V pack.

## 7. Living zones & air quality

Four zones - **driving cabin, main lounge, bath/hydroponics, bedroom** - each with its own air-quality array (CO / CO2 / O2 / humidity / particulates) feeding ventilation logic. Driving cabin seals from the rear so only it is conditioned on the move.

## 8. Slide-outs, roof & underfloor

- **Slide-outs** widen the lounge and bedroom when parked (accepted thermal-bridge trade; winter occasional).
- **Roof:** ~3.5 kW fixed solar + deployable array (to ~5-10 kW); ventilation built into the loop; kept clear.
- **Underfloor:** the 400 V/48 V structural pack spans the floor - lowest CG, stiff, rollover-resistant; ~8.7 in thick with wheel-well notches.

## 9. Circulation & egress

- **Main entry** front by the lounge/cab.
- **Rear emergency hatch + window** at the bed - the second independent exit, so a mid-bus fault never traps you.
- **External service door** to the central bay.
- Clear walk-through aisle; the central core is passed on one side.

## 10. Why this arrangement

Heaviest mass central + low (battery floor) -> stable handling; thermal core central -> shortest loops + best heat harvest; we