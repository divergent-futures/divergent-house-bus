# Body & Structure - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  **Process:** per `01_.../House_BUS_System_Build_Process.md` - identify (1), vet fit (2), tracker later (3). Pairs with the Structure design track (`Structure_Chassis_Mass.design.md`) and the mass budget.

## Our requirement
- **25-27 ft**, **~13,670 lb curb** (optimized), GVWR ~19,500 lb with ~4,000 lb margin; **lowest practical CG**.
- **Structural battery pack IS the floor/spine** (full-floor square slab) - no traditional chassis frame rails.
- **Slide-outs** (lounge + bedroom) for space without length.
- **~20-25% mass strip** vs a typical RV via advanced materials (not brute-force steel).
- **Four-season-capable** (ski-weekend cold, not deep-winter living) - good envelope, manageable thermal bridging.
- **Low Cd** (ties to the ~245 mi range), roof structured for solar.

## RESOLVED (TJ, 2026-06-29): two-version staging, not a fork
The donor-vs-bespoke question is settled by **staging the two builds**:
- **V1 - the "Yellow Bus" proof-of-concept:** an actual **school bus converted to electric**, using **off-the-shelf parts** wherever possible. Goal = prove the concept works, build it **on-channel**, and possibly **crowdfund (Kickstarter)**. The pack is *carried* (not structural) here - that's fine, because V1's job is to validate and to build audience, not to embody the full thesis.
- **V2 - the integrated House Bus:** the full **bespoke structural-pack frame** with everything we've been detailing (structural sodium floor, roboformed enclosure, all-DC, CO2 thermal core, dual-domain, 800 V-ready). This is the north star.
- (**Slipstream** remains the stage-0 adjacent learning article - the aero EV trailer.)

So the **skoolie is the deliberate V1, not a fallback**, and the bespoke structural-pack frame is V2. **Most of this project's deep design = V2 spec.** This vetting's "bespoke" column is the V2 path; V1 reuses the donor bus's frame/floor and leans on off-the-shelf EV-conversion parts.

## Step 1-2: field, vetted

| Element | Tier | Candidate / approach | Fit vs our spec | Verdict |
|---|---|---|---|---|
| **Primary structure** | A (the path) | Bespoke space-frame on the structural pack floor (roboformed enclosure + Al/composite frame) | The only path that delivers structural-pack + low CG + mass strip | **V1 path** |
| | C (ref) | Purpose commercial EV skateboard (REE-class) / bus glider | Proves a flat structural platform exists | reference / not buildable-for-us |
| | **V1** | **School bus converted to electric** (off-the-shelf EV parts, pack carried not structural) | Cheap, fast, on-channel, Kickstarter-able; proves the concept | **the deliberate V1 PoC** |
| **Body panels / shell** | B/A | **FRP composite sandwich panels** (Composite Box, TOPOLO, Boxmanufaktur, RaxPanel) - XPS/PU core, FRP skins, Al-profile joints | **~40% lighter than wood/Al**; strong, insulating, corrosion-proof | **V1 pick (adopt panels)** |
| | A | Roboformed Al/steel load-bearing members (Machina Labs) | Bespoke structural bits + composite skin | pairs with panels |
| **Structural battery enclosure** | A | Roboforming (Machina Labs) - steel shell + Al crush rails, no welding | Handles wheel-well geometry; = the floor | **see Battery vetting** |
| **Slide-out mechanism** | B | **Lippert** Schwintek in-wall (electric) / above-floor / hydraulic | Industry-standard, serviceable, off-the-shelf | **adopt** |
| **Insulation (4-season)** | A (mix) | **Aerogel** (R10-30/in, robust, moldproof) in thin walls + **VIP** (R~45/in, fragile, can't cut) in ultra-thin high-R zones + **closed-cell spray foam** (R6-7/in) for sealing/general | Engineered mix hits four-season in a thin wall | **V1 pick (mix)** |
| | B | Closed-cell spray foam only | Cheap baseline; thicker wall for same R | cost-down |
| **Glazing** | (decided) | Double-layer polycarbonate + concealed insulated drop-down covers | Already in gap analysis | locked |
| **Suspension / leveling** | B/C | **Air suspension** (Firestone/Hendrickson bags; Liquid Spring) + auto-leveling (Lippert) | Ride height, load-leveling, park-level for a heavy dwelling | **adopt (confirm load rating)** |
| **Aero / exterior** | A | Bespoke low-Cd shaping; roof structured for solar | Drives range; bespoke | design item (Cd check queued) |

## The honest verdict
**Body/structure is the one subsystem that is mostly bespoke by necessity** - the structural-pack floor, low CG, and 20-25% mass strip simply can't be bought off a shelf. But it is **not invent-from-scratch**: it *adopts* proven components (FRP composite panels ~40% lighter, Lippert slide-outs, air suspension, aerogel/VIP/foam insulation) and assembles them on a bespoke roboformed structural-pack frame. That's the philosophy exactly: build the frame that doesn't exist, adopt the panels/slides/suspension that do.

The donor-vs-bespoke question is now settled by **staging**: V1 = the off-the-shelf school-bus EV conversion (proof-of-concept, on-channel, Kickstarter-able); V2 = this bespoke structural-pack build. The bespoke verdicts above are the V2 spec.

## Open questions (before a structure tracker)
1. *(Resolved: V1 = skoolie EV conversion; V2 = bespoke structural-pack frame.)* **V1 scope:** which off-the-shelf EV-conversion parts (drivetrain, pack, etc.) on the donor bus.
2. **(V2) Frame material:** aluminum extrusion space-frame vs composite monocoque vs hybrid (+ which members are roboformed).
3. **Insulation mix + envelope** to a four-season target R with thin walls (aerogel/VIP where, foam where).
4. **Air suspension + leveling** spec at our axle loads.
5. **Real Cd target** (queued) - feeds the range model.
6. **Slide-out thermal-bridge mitigation** (accepted tradeoff, but design it).
7. **Crash / rollover validation** of the bespoke frame + structural pack.

## V2 headroom
- Ground-up composite monocoque; more roboformed structure; integrated solar skin; next-gen lighter cores.

## Sources
- [FRP composite sandwich RV bodies (~40% lighter)](https://composite-box.com/) · [TOPOLO RV body solutions](https://topologroup.com/frp-composite-motorhome-bodies/) · [Motorhome composite panel specs](https://www.raxpanel.com/blog/motorhome-composite-panels/)
- [Lippert Schwintek in-wall slide-outs](https://corporate.lippert.com/products/rv/slide-outs) · [VIP vs aerogel vs foam R-values](h