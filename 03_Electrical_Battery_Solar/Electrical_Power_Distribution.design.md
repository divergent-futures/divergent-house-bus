# Electrical & Power Distribution - Design Track

**Status:** Detailed v0.2 (400 V V1 voltage decision)  ·  **Priority/Sequence:** 1 (foundation - feeds everything)  ·  **Depends on:** none
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component names its interface back to the shared loop / bus.

> **VOLTAGE DECISION (V1 = 400 V pack; 800 V is the V2/future target).** Chosen because (a) industrial/EV thermal gear - compressors, AC units, Konvekta/Guchen - is mostly **400/600 V**, so the pack feeds them **DC-DC (buck/boost), avoiding 48 V->AC inversion losses**; and (b) **800 V structural-pack architecture is not yet mature (~5-7 yrs out)**, so ~90% likely V1 is 400 V. Cost: 400 V carries **~2x the HV current** of an 800 V system for the same power (heavier HV cable) - acceptable at our modest power. Current figures below are at 400 V.

---

## 1. Purpose & requirements

The single shared structural pack is the only energy store. This subsystem must:

- Deliver **400 V** (V1; 800 V is the future/V2 target) for traction and the large thermal loads, and a stable **48 V** house rail for everyday loads, with **local 12/5 V + USB-C PD** bucked near devices. **No global 120 V AC island** - the bus is all-DC; a small switchable convenience inverter (~1.5 kW) feeds a few AC outlets for rare plug-in items only (see all-DC reframe, §2).
- **Protect mobility absolutely**: a software drive-reserve floor (~80 kWh) that house loads can never deplete.
- Accept charge from **solar, shore, the CHP genset, and DC fast charge (NACS/MCS)** and arbitrate between them.
- Be **safe in a wet, occupied dwelling**: HV isolated and monitored, SELV 48 V in wet zones, every circuit fused, correct grounding on shore and off-grid.
- Be **light and serviceable**: thin conductors where voltage allows, sealed vibration-rated connectors, an accessible distribution bay.

Design targets: house-available energy ~190 kWh (270 usable minus 80 reserve); whole-home use ~10.7 kWh/day (see energy model); driving range ~245 mi.

## 2. The four voltage domains

The core move is to put each load on the **highest practical voltage** so currents - and therefore copper, heat, and connector cost - stay low. Conversions happen once, deliberately.

| Domain | Serves | Why here |
|---|---|---|
| **400 V HV** (V1; 800 V future) | Traction motor/inverter, heat-pump compressor, any HV resistive heat (cabin/water final-lift, battery PTC), DC fast charge, DC-DC input | Big loads; **400 V matches industrial 400/600 V compressors** (DC-DC, no AC inversion); 800 V is the future efficiency step |
| **48 V house rail** | Lighting, pumps, fans, ERV, water UV, hydroponics, controls, **induction cooktop (48 V DC), washer/dryer** (fridge/freezer cooling rides the thermal loop) | The off-grid sweet spot: ~1/4 the current of 12 V, sealed TE connectors exist; carries the high-power DC house loads |
| **12 / 5 V local + USB-C PD** | Electronics, TV, laptops, sensors, network, USB | Bucked at point of use - no long low-voltage runs |
| **(no 120 V AC island - deleted)** | optional small switchable inverter for rare AC-only items only | see all-DC reframe below |

**Load-placement rule:** anything multi-kW and resistive or motor-driven goes on the 400 V HV bus; high-power DC house loads (induction, dryer, big pumps) on 48 V; electronics on 12/5 V or USB-C PD via point-of-use bucks. **No global AC inverter** - the bus is all-DC (below).

> **ARCHITECTURE REFRESH (2026-06-29) - ALL-DC, inverter deleted.** The bus is a DC island (battery + solar are DC; shore/genset are rectified to charge the pack), so making 120 V AC internally only to have each appliance rectify it back to DC wastes ~10-20% per electronic load **and** burns ~0.5-1.2 kWh/day in inverter idle. **Decision: delete the 120 V AC island and the ~5 kW always-on inverter; run everything on 48 V / 24 V / 12 V / USB-C PD via efficient point-of-use bucks.** A small switchable inverter (~1.5 kW, hair-dryer-driven; 2 kW only for a full salon dryer; eco mode, off by default) is kept only as a convenience backstop for rare AC-only items (guest devices, odd tool). Cooking = 48 V DC induction. Full component-by-component audit + holdouts in `DC_Native_Appliance_Audit.md`.

> **OPEN ARCHITECTURE REFINEMENT (2026-06-29) - dual-domain structural pack.** Option under consideration: rather than a single 400 V pack feeding the 48 V rail entirely through the DC-DC, build **two sodium domains inside the one structural enclosure** - ~270 kWh @ 400 V (traction) + ~20-30 kWh @ 48 V (house) - both BMS sealed inside, linked by a **bidirectional** DC-DC. Wins: physical fault isolation (house independent of the HV drive system), native-48 V efficiency, direct solar-to-48 V, one sealed enclosure. Costs: 2nd BMS + 2nd cell config; DC-DC stays (bidirectional, recharge/rebalance duty, not full-house-load duty); sizing trades house autonomy vs traction range/mass. Softly revises the founding "single shared reservoir / no separate house bank" decision. See `Battery_Pack_Supplier_Vetting.md` for the full analysis + the open sizing decision.

## 3. Power & current budget (representative)

Currents are what size the hardware. Peak, not average, sizes conductors and protection.

| Load | Domain | Peak (W) | Current | Notes |
|---|---|---|---|---|
| Traction drive | 400 V | 200-250 kW | ~500-625 A pk / ~250 A cont | Separate from house; drive-reserve protects it |
| Heat-pump compressor | 400 V | ~6 kW | ~15 A | EV-grade HV compressor |
| HV resistive heat (cabin/water/battery) | 400 V | ~8-10 kW | ~20-25 A | Final-lift coil + battery PTC, intermittent |
| DC-DC input (to 48 V rail) | 400 V | ~10 kW | ~25 A | See sizing below |
| 48 V house base (lights, fridge, pumps, ERV, controls, hydro) | 48 V | ~1.5-2 kW pk | ~30-40 A | ~10.7 kWh/day average |
| Induction cooktop (DC) | 48 V | ~1.5-3.5 kW | ~30-73 A | 48 V DC hob; intermittent, dominant 48 V term |
| Washer/dryer (heat-pump, DC) | 48 V / 24 V | ~0.5-1 kW | ~10-20 A | BLDC, DC-native |
| Electronics (TV, laptops, etc.) | 12/5 V + USB-C PD | <0.5 kW | - | point-of-use bucks |
| (optional convenience inverter) | 48 V | ~1.5 kW | ~31 A | hair-dryer-driven; off by default; AC-only items |

**Pack C-rate check:** 250 kW traction on a 300 kWh pack is ~0.83C - comfortable for sodium/LFP; house loads are negligible against pack capacity.

## 4. DC-DC sizing (no global inverter)

With the all-DC reframe, the 48 V rail feeds **DC house loads directly** - including the induction cooktop, the dominant peak - and there is **no 5 kW AC inverter** to carry. (In the dual-domain pack option the 48 V house pack supplies these directly and the DC-DC just recharges/rebalances.)

- 48 V peak driver is now the **induction cooktop (~1.5-3.5 kW, ~30-73 A)** plus house base ~2 kW - call it **~5-6 kW** peak, intermittent.
- DC-DC (or house-pack feed) sized to **~6-8 kW** for surge/headroom; built from **stackable modules** (Vicor BCM-class) for redundancy.
- Electronics convert **once at point of use** (DC-DC buck / USB-C PD, ~95-98%, near-zero standby) - not through a global inverter.
- Optional convenience inverter is small (~1.5 kW, hair-dryer-driven), **switchable/eco**, on its own branch - it does not size the backbone.

*The old "inverter feed 48 V-fed vs HV-fed" open question is moot - there is no main inverter. Resolved by deletion.*

## 5. Protection & fusing

| Level | Protection |
|---|---|
| Pack | Main HV fuse (class T / EV fuse, ~700-900 A to suit 400 V traction), main + pre-charge contactors (Gigavac), HVIL loop, insulation monitor (Bender IMD) |
| HV branches | Individual HV fuses per branch: compressor, HV heater, DC-DC, charge inlet |
| 48 V | DC-DC output main fuse; PDM (Victron Lynx-class) with MIDI/MEGA fuses per circuit (30-100 A); matched to conductor ampacity |
| AC convenience outlets (off small inverter) | **GFCI on the bathroom + galley outlets**; shore inlet has its own surge protection + transfer to the AC->DC charger (no whole-bus AC bus) |
| Local | Per-branch fusing at each buck converter |

Every positive leg fused at 1.25x continuous current. HV orange conduit, physically separated from LV.

## 6. Conductors & connectors

- **400 V HV carries ~2x the current** of an 800 V system for the same power - heavier HV cable than the 800 V ideal, accepted for V1 (mature packs + industrial 400/600 V gear compatibility). Keep runs short, sealed, orange, clear of wet zones (SELV discipline keeps only 48 V in bath/galley). 800 V (thinner cable) is the V2 efficiency step.
- **48 V backbone is the heavy copper** - the ~208 A DC-DC output and inverter feed need **2/0-4/0 AWG or copper busbars**; keep runs under ~20 ft to hold voltage drop below 2-3%.
- **Connectors:** TE Connectivity 48V portfolio - **HALVONEX** (sealed, up to 400 A) for the backbone; **Heavy-Duty Sealed** for chassis branches; **mixed signal+power** for smart subsystems (pump+sensors in one housing); Anderson Powerpole for modular low-power branches.
- Marine-grade tinned cable, proper crimps, strain relief, grommeted bulkhead passes.

## 7. Charging sources & arbitration

| Source | Path | Notes |
|---|---|---|
| Solar (~3.5 kW roof / ~6 kW parked) | MPPT -> 48 V rail, then bidirectional DC-DC up to the 400 V pack (or HV MPPT direct) | Primary summer; arbitration favours solar first |
| Shore (NEMA 14-50) | Inverter/charger -> 48 V -> DC-DC to the 400 V pack (or HV charger) | Galvanic protection, transfer switch |
| CHP genset (3.5 kW) | Rectifier -> pack (HV or via 48 V) | Winter; also delivers heat (Thermal track I7) |
| DC fast charge - MCS | ~1 MW (up to 1.2 MW) direct to the 400 V pack | Primary heavy-vehicle standard |
| DC fast charge - NACS | ~250 kW to the 400 V pack (hold ~200 kW across ~10-60%) | Tesla network incl. emerging drive-through truck/trailer stalls (I-5 / I-10) |
| J1772 / CCS | via adapter only | Not installed as native ports |

Charge priority (controller): **solar -> stored -> CHP (also yields heat) -> shore -> DC fast**. Bidirectional DC-DC is an open decision (lets 48 V solar assist traction charge).

## 8. Grounding, bonding & safety

- HV runs **isolated (IT system)**, continuously watched by the IMD; chassis is not a HV return.
- 48 V negative bonded to chassis at a single point; clean isolated returns for electronics.
- Shore: correct neutral-ground bonding **only when off-grid**, switched when on shore (avoid double-bond); GFCI wet zones; surge protection at the inlet.
- HVIL, emergency HV disconnect, lock-out/tag-out for service, annual insulation test, intumescent protection around the pack.

## 9. Drive-reserve floor & load-shed logic

The rule that makes a shared pack safe: **house loads may never touch the ~80 kWh drive reserve.**

- BMS reports SOC/energy; the controller maps a house-available envelope (usable - reserve).
- As SOC approaches the reserve, loads shed by priority:
  1. **Protected:** drive reserve, battery thermal/BMS, controls, safety detection
  2. **Essential:** fridge/freezer, minimal lighting, water, comms
  3. **Discretionary (shed first):** hydroponics lights/pumps, climate bed, dryer, sauna, AC inverter non-critical
- Solar input is prioritised to house charge; the CHP is called before the reserve is rea