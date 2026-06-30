# Bus V1 - the "Scavenged Ford" Variant (resurrect a wrecked Tesla)

**Date:** 2026-06-29  ·  A sub-variant of Bus V1 (`Bus_V1_YellowBus_Scope.md`). The most-scavenged, most-on-thesis, **non-CDL** entry path. Recorded for the open-source family alongside the 30 ft skoolie (the chosen primary V1).

## The idea
Drop a **whole wrecked Tesla Model 3 Performance** - motor, battery, inverter, onboard charger, DC-DC - into a **Ford E-450 short bus** (~22 ft, 14,500 lb GVWR, **non-CDL**). One salvage purchase donates the entire drivetrain. Circular-economy and a great channel story: *we brought a totalled EV back to life as a home.*

## Honest numbers
- **Donor pack:** Model 3 Performance = **82 kWh usable, 350 V nominal (400 V-class, 96S), 393 kW dual-motor.** The car does ~300+ mi at ~0.33 kWh/mi.
- **But the bus is ~5x less efficient** (3x heavier, ~4x the aero drag), so it runs ~**1.3 kWh/mi**. The car's 300 mi does **not** carry over:
  - **1 pack (82 kWh) -> ~60-65 mi** real-world.
  - **2 packs in parallel (~164 kWh) -> ~120-130 mi** - right on the V1 charger-hopping target. (Two M3 packs conveniently land at the ~165 kWh sweet spot.)
- **Power is a non-issue** - 393 kW is far more than a ~14 k lb bus needs (could even run just the rear PM drive unit ~200-250 kW). Range, not power, is the constraint.

## The "pack a lot of tech in" part (real, but a solved DIY space)
A Tesla drive unit isn't a standalone motor - this is the integration work:
- **Drive-unit controller:** off-the-shelf - **EV Controls T-2C**, **AEM EV** control boards, or **OpenInverter / Flash Drive Motors**; EV West sells M3 rear-drive-unit starter kits with the T-2C. Runs the unit without gutting Tesla's inverter logic.
- **CAN + BMS:** reverse-engineer/emulate the CAN network and either reuse Tesla's BMS or substitute one. Large open-source community + parts pool (M3 is among the most-converted EVs).
- **Two packs in parallel:** feasible at matched voltage/SOC with proper contactor + BMS management - an advanced but documented config. (Parallel at the same 350 V nominal; isolate/pre-balance before joining.)

## Cost (see `House_BUS_V1_BOM.xlsx` -> "V1 BOM (Scavenged Ford)")
- A wrecked M3 Performance donor (~$10-20 k; documented salvage M3 LR AWD ~$17 k) yields **motor + 82 kWh pack + inverter + charger + DC-DC in one buy** - far cheaper than sourcing those separately.
- **2-pack build (~120 mi): ~$59-139 k all-in.** Single-pack (~60 mi): subtract the 2nd pack (~$7-15 k) -> ~**$50-124 k**.
- This is the **cheapest-floor, non-CDL** V1 path; cheaper entry than the 30 ft skoolie (~$82-174 k, CDL).

## Where it sits vs the 30 ft skoolie (the chosen primary V1)
| | Scavenged Ford | 30 ft skoolie (primary V1) |
|---|---|---|
| CDL | **No** | Likely yes |
| Range | ~60 (1 pack) / ~120 mi (2 packs) | ~120 mi |
| Living space | tight (~22 ft) | comfortable (~30 ft) |
| Integration difficulty | **high** (Tesla CAN/BMS/parallel) | moderate (off-the-shelf parts) |
| Cost floor | **lowest (~$50-59 k)** | ~$82 k |
| Story | "resurrect a wrecked Tesla", circular | "big electric skoolie" |

## Verdict
A genuinely **doable, compelling, non-CDL** V1 - the cheapest and most circular path - at the cost of **short range** (~60-120 mi) and **real integration tech** (Tesla drive-unit control + CAN/BMS + parallel packs). Best framed as the **scrappy, accessible open-source build** that proves anyone with a wrecked EV and a short bus can do it - complementary to the roomier 30 ft skoolie. Both belong in the open-source family.

## Packaging & range feasibility check (2026-06-29) - confirms the Ford is range-limited

How much battery actually *fits*, between the frame rails + engine bay + outboard saddles, without eating the living space (assumptions: salvage packs ~50 Wh/lb and ~120 Wh/L installed):

| | Practical battery | Limited by | Efficiency | Range |
|---|---|---|---|---|
| **Ford E-450 short bus** | **~100 kWh** (up to ~125 by weight) | **space + 14,500 lb payload** | ~1.3 kWh/mi | **~77 mi** (≈126 mi only if 2 packs crammed into the interior, over-tight) |
| **30 ft skoolie** | **~293 kWh** | space (payload allows ~350) | ~1.9 kWh/mi | **~154 mi** |

**Verdict:** the bigger bus fits **~3x the battery** and gets **~2x the range** *despite being less efficient* - the longer underfloor and the ~12,000 lb payload headroom win. The Ford-scavenged build is a cheap, non-CDL novelty but is genuinely **range-limited (~77 mi practical)** - it doesn't work out as a range vehicle. This is the feasibility study doing its job: it confirms the **30 ft skoolie as the V1** and keeps the Scavenged Ford as a documented, scrappy entry option, not the range pick.

## Open questions
1. **Single vs dual pack** (range ~60 vs ~120 mi) - sets cost + integration complexity.
2. **Which drive unit:** rear-only (~250 kW, simpler) vs full dual-motor.
3. **BMS path:** reuse Tesla BMS (CAN emulation) vs aftermarket.
4. **Donor sourcing:** one wrecked M3P for everythin