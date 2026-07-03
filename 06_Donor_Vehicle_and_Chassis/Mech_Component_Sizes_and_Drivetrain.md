# Mechanical Component Sizes + Drivetrain (hub vs e-axle)

**Date:** 2026-06-29  ·  V2 bus. Firms what the core actually needs (so floor-plan v0.5 + the pack-shape are real), and settles hub-motor vs e-axle. Class-typical estimates - confirm at part selection.

## A. Thermal-core component sizes (what takes up what)
| Component | Approx size (L×W×H) | Vol | Where it goes |
|---|---|---|---|
| HT compressor (400 V CO2, ~6 kW) | ~25×25×30 cm, ~15 kg | ~0.02 m³ | mech cabinet (needs air + service) |
| LT compressor (48 V Secop, fridge/freezer) | ~25×15×20 cm, ~5 kg | ~0.008 m³ | mech cabinet, or **relocate to the fridge** |
| 18-port manifold + valves/actuators | ~40×30×20 cm | ~0.024 m³ | mech cabinet (the routing hub) |
| Plate HXs (gas cooler + evap/intermediate ×~4) | stack ~40×25×20 cm | ~0.02 m³ | mech cabinet |
| Coolant/refrigerant pumps ×2-3 | ~10×10×12 cm each | ~0.004 m³ | on the manifold plate |
| Receiver / accumulator / filter-drier / oil sep | small | ~0.01 m³ | mech cabinet |
| Thermal ECU + wiring | small | ~0.005 m³ | mech cabinet |
| **Heat-rejection "gas-cooler + FAN" pack** | core ~60×40×15 cm + **1-2 axial fans ~35-40 cm dia** | ~0.05 m³ + duct | **its own air path** - side/underfloor grille or roof (NOT the cabinet; needs ambient air in/out) |
| Zone air-handlers (cab + rear blowers) | small each | - | at the zones (cab front, rear) |
| Hot buffer / DHW (~60 L) | ~40×40×40 cm | ~0.064 m³ | **under-floor / rear** (free non-pack) |
| Cold buffer (~35 L) | ~35×35×35 cm | ~0.043 m³ | under-floor / rear |
| CHP genset (3.5 kW diesel) + exhaust/intake | ~60×40×45 cm + ducting | ~0.108 m³ | **rear wheel-well bay** (sealed, outside air) |
| Diesel fuel (~30 L) | ~35×25×35 cm | ~0.03 m³ | under-floor |
| Water tanks (drinking ~80 L + grey ~60 L) | ~0.14 m³ | ~0.14 m³ | under-galley / peripheral |

**Totals:**
- **Mech cabinet hardware ~0.07 m³** -> with service clearance + mounting, a cabinet **~0.5-0.6 m deep × ~1.0 m long × ~1.0-1.2 m tall** (waist-to-shoulder) is comfortable. That's the in-cabin core footprint - a slim cabinet, not a room.
- **Air-path item:** the **heat-rejection gas-cooler + fan** is the one thing that *must* breathe ambient air - route it to a side/underfloor grille (or roof). TJ's "large fan" instinct is right: sizing ~10 kW of reject needs an automotive-condenser-class fan pack. It's used mainly in **cooling-dominant (summer) mode**; in heating/DHW mode the heat goes to the tank/loads, not ambient.
- **Under-floor / rear demand ~0.4 m³** (buffers + CHP + fuel + water tanks) -> must fit the rear wheel-well + peripheral non-pack bays (Structure to confirm).

## B. Drivetrain: hub motors vs e-axle (with air suspension)
**Question:** in-wheel hub motors (free the centre/floor, independent AWD) vs a conventional e-axle - especially given the air-suspension lift/lower.

**The physics that decides it - unsprung mass.** A hub motor puts the motor **in the wheel**, so its mass is **unsprung** (not carried by the springs/dampers). High unsprung mass **worsens ride, tire grip, and durability**, and **makes the air suspension work harder** - the air springs + dampers have more inertia to control, so ride and body control degrade, exactly on the rough forest/boondock surfaces we care about. *(Hub motors are tolerated on heavy, low-speed transit buses, and damping/torque-vectoring can mitigate - but that's for vehicles where ride comfort isn't the point.)*

**Why hub motors lose for THIS vehicle:**
1. **It's a home you live in, at highway speed, and ride comfort is a feature** - the unsprung-mass penalty hits the thing we're selling, and fights the air suspension.
2. **Exposure/durability/cooling:** motor + power electronics in the wheel cop heat, water, dust, and impact, and are hard to cool - bad for boondocking + the repairable/durable ethos.
3. **Cost / maturity / sourcing:** hub motors are niche and pricey; a **3-in-1 e-axle is proven and sourced** (JJE etc., per our tracker) - on-thesis (adopt what's proven + repairable).
4. **The packaging upside isn't needed:** hub motors free central/floor space - but our motor is a **rear e-axle at the driven axle** (not central), the **floor is already the battery** (no prop-shaft tunnel), and the reduction/diff live inside the e-axle. So we gain little floor by going hub, and the central-core packaging is solved by the under-floor budget, not the drivetrain.

**Air-suspension interaction (the specific ask):** air springs raise/lower ride height regardless of motor location - but ride **quality** and lift/lower control are **better with LOW unsprung mass**. So the airbag lift/lower goal argues **for** the e-axle, **against** hub motors.

**Recommendation: rear e-axle** (motor at the driven axle) - low unsprung mass, proven, repairable, sourced; packages at the rear axle line (under the bedroom / by the rear wheel-well CHP bay), doesn't fight the central core. **Optional front e-axle for AWD** if light off-road wants it; the **toad** handles extreme terrain. (Hub motors: considered, rejected for the live-in/highway/boondock use-case.)

## Feeds
- **Floor-plan v0.5:** in-cabin core = a ~0.5-0.6 × 1.0 × 1.0-1.2 m mech cabinet + the wet room + WC; heat-rejection fan pack -> a grille location; buffers/CHP/fuel/tanks -> under-floor/rear bays.
- **Structure/pack-shape:** confirm the **rear wheel-well bay** volume (CHP + buffers) around the **rear e-axle** + suspension.
- **E-axle tracker:** confirm **e-axle (not hub motors)** as the drivetrain path.

## Open
1. Rear wheel-well bay real volume around the e-axle + air-suspension links (needs the drivetrain package cross-section).
2. Heat-rejection grille location + duct (side vs underfloor vs roof) and fan sizing for ~10 kW reject.
3. AWD? single rear e-axle (RWD) + air-lift vs add a front e-axle.

---
*Mech sizes + drivetrain, 2026-06-29. In-cabin core = a slim ~0.5-0.6×1.0×~1.1 m mech cabinet (compressors+manifold+HXs+pumps+electronics); the heat-rejection gas-cooler+fan needs its own ambient-air grille; buffers/CHP/fuel/water tanks (~0.4 m³) go under-floor/rear. DRIVETRAIN = rear e-axle, NOT hub motors: unsprung mass hurts ride + fights the air suspension, plus exposure/cost/sourcing; the e-axle sits at the rear axle so it doesn't cost central space anyway. Toad for extreme off-road; optional front e-axle for AWD.*
