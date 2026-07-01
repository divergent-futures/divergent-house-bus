# Front-End Design - Aero (CFD), Crumple Zone & Driving Cabin

**Date:** 2026-06-29  ·  V2 bus. Feeds floor-plan v0.3 and the range model. Pairs with Structure, Thermal, and Compliance tracks.

## Why the front end is a keystone
On a fixed **25-27 ft** length, the front does three competing jobs at once - **aerodynamics (range)**, **crash protection (crumple zone)**, and **the driving cabin** - and every inch spent on one is an inch not spent on living space. Getting them to *overlap* is the whole game.

## 1. Aero / CFD - the range lever
A stock school-bus brick is ~**Cd 0.6+**. A raked, rounded, faired front can pull V2 toward ~**Cd 0.40-0.45** - not car-like (~0.3), but a big cut that feeds directly into kWh/mi and the ~245 mi range (and the net-positive-while-parked story). Aero priorities: a **raked windshield + rounded leading edges + smooth underbody + roof-to-body fairing + wheel-gap management**; minimise frontal-area protrusions (hence mirrors that fold/remove toward the future CMS).

**The length trick:** don't treat the aero nose as "lost" length - **integrate the driving cabin *into* the raked nose** (the slope forms the windshield over the cab). A cab-forward, raked-front design buys the Cd improvement while the nose volume is still usable cabin. That's how we get good CFD without surrendering interior box.

## 2. Front crumple zone - length + what goes in it
A ground-up V2 needs a real **sacrificial crush structure** ahead of the cabin (~**2-3 ft** of programmed crush). The governing rule: **only crash-tolerant, sacrificial, low-hazard items live in the crush path.**
- **OK in the front:** front lighting (the FMVSS 108 set), steering rack, wiper/washer, a **"frunk" storage cavity** (good use of the space), the **cab climate air-handler / evaporator + blower** (small), 12 V aux. 
- **KEEP OUT of the crush path:** the **HV battery** (it's the structural floor, mid/low - safe), the **main CO2 thermal core** (central mid-bus bay), and **high-pressure CO2 lines** (route them away from the crush zone). No HV and no pressure vessels where they'd be hit first.

So the front carries cab-climate + steering + lighting + frunk + crush structure - light, serviceable, and crash-safe. The heavy/hazardous thermal + electrical mass stays central and low.

## 3. Driving cabin - size, sealing, climate
- **Size:** ~**5 ft**, 2-3 seats + controls + tablet (no traditional key). Integrated into the raked nose (above).
- **Sealable from the rear:** an **insulated bulkhead + sliding/hinged door** between cab and lounge so that **on the move only the cab is conditioned** - this is the binding fast-charge thermal case kept small (per the Thermal track). Sealed, it's a small, efficient zone to cool while driving + DC-fast-charging on a hot day.
- **Cab climate feed:** a **branch of the central CO2 thermal core** - glycol/refrigerant ducted forward to a **front air-handler/evaporator** (the small unit that lives in the front, not in the crush path). The big compressors/manifold/buffers stay in the central bay (low, central, short loops); only the cab *air handler* is forward. This answers "AC inside or under the bus": **heavy thermal gear central/under-floor; cab air-handler forward; condenser/gas-cooler heat rejection on the roof or underfloor.**

## 4. The length/space tradeoff (feeds floor-plan v0.3)
- Nose rake + crumple consume length; integrating the cabin into the raked nose recovers most of it.
- Net rule: **maximise overlap of crumple + raked windshield + cabin** so the front delivers best Cd with minimal interior loss; whatever length the front consumes comes off the rear/living box, so it's a direct floor-plan input.
- Action for v0.3: fix the **front-zone length** (crumple + cabin) and the **cab/lounge bulkhead position**, then re-allocate the remaining length to lounge/core/bedroom.

## Frunk, ride-height & body form (TJ, 2026-06-29)
- **Frunk contents:** the non-crush part of the nose is a storage cavity for **bulky outdoor gear** - tents, boots, SUP boards, inflatable kayaks, awnings, camp equipment. (Crush structure still sits ahead of it.)
- **Air-suspension ride height (dual-use: capability + aero):** the air suspension (Structure track) **lifts** for ground clearance / light off-road access and **drops on the highway to cut drag** - lower ride height + smaller underbody gap = measurably better CFD at speed. A free aero win from hardware we already carry.
- **Uniform front curvature:** curve the *entire* front consistently (not just the windshield) for clean attached flow - part of the raked l