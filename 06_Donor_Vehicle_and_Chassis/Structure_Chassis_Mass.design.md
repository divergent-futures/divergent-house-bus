# Structure / Chassis / Mass - Design Track

**Status:** Detailed v0.1 (first deep pass)  ·  **Priority/Sequence:** 2 (parallel - informs all)  ·  **Depends on:** none (the mass budget tracks it)
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component names its interface back to the shared loop / bus.

---

## 1. Purpose

A lightweight structural shell with the **sodium pack as the structural floor**, targeting a **20-25% mass strip** off a typical RV through advanced materials and smart engineering - because on an EV, every pound removed compounds (less mass -> less energy/mile -> smaller pack possible -> less mass again).

## 2. Form factor

- **25-27 ft** overall (national-park access, tight places, e.g. South America), with **slide-outs** to gain interior width when parked.
- Two thermal/living zones (driving cabin + rear) that can seal from each other (Thermal track).
- A **central mechanical bay** housing the thermal core, BMS, 48 V and HV connections (Thermal track decision).

## 3. Structural strategy

- **Structural battery floor (full-floor, square-ish pack):** legacy buses run steel frame rails down the middle - wasteful and a poor fit for an EV. Instead the ~300 kWh sodium pack (**400 V for V1; 800 V a future target**) is a **large, square-ish slab roughly the size of the floor**, acting as the load-bearing structure itself, with **aluminium/composite stub rails** front and rear for crash structure, steering, and hitch loads.
- **Why a floor pack:** it puts the single heaviest mass as low as physically possible, giving a **very low centre of gravity** (rollover becomes extremely unlikely) and the stiffest possible floor, **while saving the weight of the deleted frame rails** - weight you need back, because the pack is far heavier than a conventional chassis. The sodium chemistry is also non-flammable (see Safety track), which makes a large under-floor pack much more acceptable.
- **Body:** carbon/glass-over-foam composite panels (light, stiff, insulating).
- **Interior:** EPP foam with carbon/fibreglass skins instead of wood/metal framing - large mass saving, integral insulation, wiring channels mouldable in.
- **Insulation:** vacuum-insulated panels / aerogel in the high-value areas; eliminate thermal bridging (the envelope drives every thermal number).
- **Glazing:** double-layer polycarbonate (lighter, tougher, cheaper than glass) + concealed insulated drop-down covers for deep cold.
- **Suspension:** adjustable air ride (drop for highway aero/CG, raise for clearance).

## 4. Mass & the virtuous loop

- Baseline (steel-heavy) ~18,240 lb -> optimized target ~12,970 lb = **~29% strip** (see `00_Admin_Budget_Schedule/House_BUS_Mass_Budget.xlsx`; the optimized figures are deliberately ambitious and editable).
- The **battery (~3,480 lb) is the fixed anchor** - the strip comes from structure, body, interior, wiring, and glazing.
- Loaded ~14,740 lb against a 19,500 lb (Class 5) GVWR target -> ~4,760 lb margin; curb CG ~156 in (centred by the low floor pack).
- The mass budget is this track's live tracker - update component cells as parts are chosen.

## 5. Fabrication options (structural pack enclosure)

- **3D-printed continuous-fibre composite enclosure** (lightest, custom fit, integrates with the composite chassis) vs **cast/CNC aluminium** (strong, great thermal path, heavier). Hybrid: composite shell + aluminium cold plates where the battery cooling needs it (ties to Thermal cold-plate routing).

## 6. Integration touchpoints

- Hosts every subsystem; the **central bay** must allow service access (inside + an external door) and a **fire-containment enclosure** (Safety track).
- Cold-plate channels for the battery floor (Thermal); coolant/loop and wiring runs kept short by the central-bay location.
- Roof: solar array + mounts (Electrical); slide-out seams engineered for the winter thermal bridge (accepted trade).

## 6a. Why slide-outs + 25-27 ft (the form-factor rationale)

Slide-outs add a large amount of interior space **while keeping the bus short** - and short is what unlocks everything else: a 25-27 ft bus **goes anywhere in the continental US**, is **easily shipped**, drives small roads, fits **national and state parks**, and parks/boondocks in a small footprint. A 35 ft bus gains ~10 ft of floor but loses that go-anywhere parkability and adds weight. The accepted cost of slide-outs is some structure around the openings and **winter thermal bridging at the seams** - acceptable because winter use is **short ski trips (a weekend, maybe a week), not months**, with the slide-outs in and energy use low. Net: **25-27 ft + slide-outs is the optimum** of space vs go-anywhere.

## 6b. Scalability - length variants scale sub-linearly

The **25-27 ft is the reference platform**, not the only size. Scaling up (e.g. a 35 ft variant) scales **sub-linearly**, which is the nice property of this architecture:

- **Battery does NOT scale with length.** Adding ~10 ft does not mean adding ~100 kWh. The extra length adds some mass and a little aero/rolling load, but the marginal energy-per-mile rise is modest - roughly **+50 kWh keeps the same ~250 mi range**. You scale the pack to hold the range target, not to fill the floor.
- **Drivetrain DOES need uprating.** A longer, heavier bus raises GVWR and grade loads, so the e-axle steps up a size (and the tiered sourcing picks a higher-power option). This is the main thing that genuinely scales with length.
- **Structure/thermal/water scale gently** with occupancy and volume, not dramatically.

Net: the platform is a family, not a one-off - a builder who wants 35 ft pays mostly in a bigger drivetrain and modestly more battery, not a proportional blow-up of every system.

## 6c. Pack footprint - does 330 kWh fit in a single layer? (sizing check, 2026-06-29)

Yes, with ~20-25% spare. Using a representative current sodium prismatic cell (~3.1 V, 200 Ah, **620 Wh**, 280-class can 207 x 72 x 174 mm):

- **330 kWh (300 traction + 30 house) = ~532 cells** (the 30 kWh house domain = ~49 of them, wired 15S, own small BMS).
- Raw cell footprint ~7.9 m^2; single-layer packed at 72-78% (cooling plates, module frames, busbars) -> **~10-11 m^2**.
- Plus a ~0.4 m **control bay** at one end (both BMS + contactors + fuses + IMD) and aluminium side-intrusion rails + walls.
- **Envelope ~= 5.4 m x 2.3 m x 0.22 m (~17.5-18.5 ft x ~90-92 in x ~8.7 in).**

Available flat floor on the 25-27 ft platform is ~18-22 ft x ~7.4 ft (~13-15 m^2 gross within a 96-102 in body, inboard of the rockers), so the pack at ~11 m^2 is **~75-80% fill**. The binding constraint is **wheel-well intrusion** (notches around the rear/front arches), which the spare ~20-25% absorbs - not total area. At ~8.7 in thick it is a genuine low floor (lowest CG, the structural-floor concept holds).

*Sensitivities:* larger ~300 Ah cells -> ~355 cells (simpler, similar area); packing efficiency is the main swing. Feeds floor-plan v0.2. Open: exact cell choice, wheel-well notch geometry, whether a thin second sub-layer is wanted in the arch-free zone for spar