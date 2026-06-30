# Lighting & 48V Internal - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  V2 bus. Pairs with `Lighting_and_48V_Internal.design.md`.

## Requirement
**DC LED lighting** (zoned, dimmable, tunable-white/circadian), fed by **point-of-use bucks off the 48 V rail** (12/24 V), plus **USB-C PD** outlets - all consistent with the all-DC reframe (no inverter). Low parasitic draw.

## Step 1-2 field, vetted

| Element | Tier | Candidate | Fit | Verdict |
|---|---|---|---|---|
| **LED lighting** | B (adopt) | Off-the-shelf 12/24 V RV LED (dimmable, tunable-white); ~3-6 W fixtures, 50k hr | Draws ~80% less than incandescent; native DC | **adopt** |
| **48 V -> 12 V bucks** | B | **Victron Orion** / generic DC-DC | Point-of-use, ~95-98%, no standby | **adopt** |
| **USB-C PD outlets** | B | Off-the-shelf USB-C PD modules | Powers electronics natively (per the all-DC audit) | **adopt** |
| **Zone/circadian control** | A | dimming via the Controls layer (Home Assistant) | Per-zone scenes, circadian CCT | **self-build (control)** |

## Verdict
**The most off-the-shelf subsystem on the bus - adopt essentially everything.** 12/24 V LED + point-of-use bucks + USB-C PD are mature and cheap, and they fit the all-DC backbone perfectly (no inverter in the path). The only value-add is **integration**: clean DC wiring runs and **circadian/zone control via the Controls layer**. No bespoke hardware required.

## Open questions
1. Fixture selection + colour temperature range (circadian tunable-white vs fixed).
2. Dimming protocol (PWM vs 0-10 V vs smart/ESPHome).
3. USB-C PD outlet count + per-zone placement (sets buck count).
4. Exterior/utility lighting (awning, service bay, hydroponics grow LED - on which rail).

## V2+ headroom
Fully circadian, occupancy- and daylight-aware lighting integrated with the controls + AQ sensors.

## Sources
- [12 V LED RV lighting (~80% less draw, 50k hr)](https://www.thervgeeks.com/12-volt-led-lights-for-rv/) · Victron Orion DC-DC (Electrical track sourcing leads)

---
*Lighting & 48V, steps 1-2 done. Adopt off-the-shelf LED + bucks + USB-C PD (the most off-the-shelf subsystem); value-add = clean DC wiring + circadian/zone control via Controls. Trivial tracker.*
