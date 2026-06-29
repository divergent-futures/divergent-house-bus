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

- **Structural battery floor (full-floor, square-ish pack):** legacy buses run steel frame rails down the middle - wasteful and a poor fit for an EV. Instead the ~300 kWh sodium pack is a **large, square-ish slab roughly the size of the floor**, acting as the load-bearing structure itself, with **aluminium/composite stub rails** front and rear for crash structure, steering, and hitch loads.
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

## 7. Open questions (resolve to close v0.2)

- **Conversion vs ground-up for V1** - the structural sodium floor implies ground-up for the real build; a donor-bus conversion may prove the systems first.
- **Structural pack fabrication** method (composite vs cast vs hybrid).
- **Slide-out winter seam** detailing.
- **Glazing mounting** in composite walls; **air-suspension** selection.
- **e-axle / drivetrain** packaging (single rear vs front+rear) - affects cooling routing.

## 8. Sourcing leads

- EPP foam: FoamByMail, Arplank. Composites: Fibre Glast, Rock West.
- e-axle: Allison eGen Power 85S, ZF AxTrax, Dana. Suspension: MAD, LiquidSpring.
- Polycarbonate glazing: multiwall PC sheet suppliers.

## 9. Decision checklist

- [x] Form factor set (25-27 ft + slide-outs)
- [x] Structural strategy set (battery floor + composite body + EPP interior)
- [x] Glazing + insulation approach set
- [x] Mass target + live budget in place (~20-29% strip)
- [ ] Conversion-vs-ground-up for V1
- [ ] Structural pack fab method
- [ ] Slide-out seam + glazing mounting detail
- [ ] e-axle packaging + cooling routing (with Thermal)
- [ ] Component masses refined as parts are chosen

---
*Detailed 2026-06-27 (v0.1). The mass budget is the live tracker for this track. Next (granular round, needs layout): pack-fab method, slide-out seam, e-axle packaging.*
