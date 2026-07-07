# Rear Hardpoints & Towing — Spec (configurator branch)

**Date:** 2026-07-03  ·  V2 bus. Designs the rear hitch + hardpoints in **from the start** so builders can pick bike rack / toy or storage trailer / tow a 4WD toad (configurator branch). The engineering crux: the hitch is **behind the rear axle**, so its load must feed the **structural rear subframe/pack rail — not the crumple zone**. See `rear_hardpoints_towing.png`. Pairs with the rear e-axle/mech cluster + axle-load balance.

---

## 1. Load path (the key rule)
The rear of the bus is: structural **pack rail + rear subframe (sprung, carries the e-axle)**, then an **outboard rear crush zone**. A hitch bolted to the crumple structure would defeat it. So:
- **Hitch receiver ties into the sprung rear subframe / pack rail** (the strong, load-bearing structure), routed **below/through** the crush zone so the **crumple still crumples** in a rear impact.
- The **e-axle + mech cluster are untouched** — the receiver runs beneath them to the subframe.

## 2. Loads & axle effect
Tongue weight sits **behind the rear axle**, so it's a lever about that axle (unloads the front slightly, loads the rear):
| Option | Tongue | Front axle Δ | Rear axle Δ |
|---|---|---|---|
| Bike rack (loaded) | ~120 lb | −14 lb | +134 lb |
| Toy / storage trailer (~2,000 lb) | ~240 lb | −23 lb | +263 lb |
| **4WD toad (~3,500 lb)** | ~420 lb | −40 lb | +460 lb |

Loaded baseline was front 7,680 / rear 8,647 lb (GAWR ~9,000 / ~13,500). **Toad worst case → front 7,640, rear 9,107 lb — both within GAWR** (rear had ~4,850 lb of margin). The small front-axle reduction is negligible for steering.

## 3. Spec
- **Hitch:** Class III/IV receiver (~3,500–5,000 lb GTW) — covers a toad, a toy hauler, or a cargo trailer; a bike rack is a trivial hitch-mount.
- **Range while towing:** ~**184–221 mi** (vs ~307 solo, High tier) — towing is for **repositioning**, not continuous cruising (extra mass + trailer drag).
- **Wiring:** trailer lights + an **electric brake controller** (required for the heavier trailers/toad); rear hardpoints carry the harness.
- **Dynamics:** sway control + weight-distribution for the toad; keep tongue weight ~10–12% of trailer weight.
- **Structure:** the rear subframe + pack rail sized for tongue (vertical) + drawbar (longitudinal) + dynamic/sway loads; hardpoints designed in, not retrofitted.

## 4. Branches this enables (configurator)
- **None** (clean tail) · **bike rack** · **toy/storage trailer** (extra storage without a toad) · **tow a 4WD toad** (for non-AWD builds / extreme off-road).
- **[BRANCH] Charge an EV toad from the bus pack** — a rear HV/charge port so an electric toad tops up off the ~330 kWh pack (complex: pack-to-vehicle charging, connector, arbitration — flag as a future option, not baseline).
- Interacts with the **AWD/Overlander** branch: pick AWD **or** a toad for off-road (the configurator can nudge "AWD → toad optional").

## 5. Open / next
- Rear subframe FEA with tongue + drawbar + sway loads; the receiver-to-subframe joint.
- Weight-distribution/sway-control selection; brake-controller integration into the DC/controls.
- The EV-toad-charging port feasibility (a genuinely useful, on-thesis branch).

---
*Rear hardpoints & towing, 2026-07-03. Hitch ties into the sprung rear subframe/pack rail (NOT the crumple zone — crush still crumples; e-axle/mech untouched). Tongue weight is a lever about the rear axle: toad (~420 lb tongue) → front −40 / rear +460 lb, both within GAWR. Class III/IV receiver (~3.5-5k lb GTW); towing range ~184-221 mi (repositioning); trailer lights + electric brake controller. Branches: bike rack / toy-storage trailer / tow a toad; future = charge an EV toad from the bus pack. Design hardpoints in from the start. See rear_hardpoints_towing.png.*
