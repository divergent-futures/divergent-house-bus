# Electrical & Power Distribution - Design Track

**Status:** Detailed v0.1 (first deep pass)  ·  **Priority/Sequence:** 1 (foundation - feeds everything)  ·  **Depends on:** none
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component names its interface back to the shared loop / bus.

---

## 1. Purpose & requirements

The single shared structural pack is the only energy store. This subsystem must:

- Deliver **800 V** for traction and the large thermal loads, and a stable **48 V** house rail for everyday loads, with **local 12/5 V** bucked near devices and a small **120 V AC** island for legacy appliances.
- **Protect mobility absolutely**: a software drive-reserve floor (~80 kWh) that house loads can never deplete.
- Accept charge from **solar, shore, the CHP genset, and DC fast charge (NACS/MCS)** and arbitrate between them.
- Be **safe in a wet, occupied dwelling**: HV isolated and monitored, SELV 48 V in wet zones, every circuit fused, correct grounding on shore and off-grid.
- Be **light and serviceable**: thin conductors where voltage allows, sealed vibration-rated connectors, an accessible distribution bay.

Design targets: house-available energy ~190 kWh (270 usable minus 80 reserve); whole-home use ~10.7 kWh/day (see energy model); driving range ~245 mi.

## 2. The four voltage domains

The core move is to put each load on the **highest practical voltage** so currents - and therefore copper, heat, and connector cost - stay low. Conversions happen once, deliberately.

| Domain | Serves | Why here |
|---|---|---|
| **800 V HV** | Traction motor/inverter, heat-pump compressor, any HV resistive heat (cabin/water final-lift, battery PTC), DC fast charge, DC-DC input | Big loads at low current; matches commercial EV/bus parts |
| **48 V house rail** | Lighting, pumps, fans, fridge/freezer DC compressors, ERV, water UV, hydroponics, controls, and the AC inverter | The off-grid sweet spot: ~1/4 the current of 12 V, sealed TE connectors exist |
| **12 / 5 V local** | Electronics, sensors, network, USB | Bucked at point of use - no long low-voltage runs |
| **120 V AC island** | Induction hob, microwave, washer/dryer, power tools | Legacy appliances only; kept as small as possible |

**Load-placement rule:** anything multi-kW and resistive or motor-driven goes on 800 V; everything with an efficient native-48 V part goes on the 48 V rail; only true legacy AC appliances justify the inverter.

## 3. Power & current budget (representative)

Currents are what size the hardware. Peak, not average, sizes conductors and protection.

| Load | Domain | Peak (W) | Current | Notes |
|---|---|---|---|---|
| Traction drive | 800 V | 200-250 kW | ~310 A pk / ~100 A cont | Separate from house; drive-reserve protects it |
| Heat-pump compressor | 800 V | ~6 kW | ~7.5 A | EV-grade HV compressor |
| HV resistive heat (cabin/water/battery) | 800 V | ~8-10 kW | ~10-12 A | Final-lift coil + battery PTC, intermittent |
| DC-DC input (to 48 V rail) | 800 V | ~10 kW | ~12.5 A | See sizing below |
| 48 V house base (lights, fridge, pumps, ERV, controls, hydro) | 48 V | ~1.5-2 kW pk | ~30-40 A | ~10.7 kWh/day average |
| AC inverter draw (if 48 V-fed) | 48 V | ~5 kW | ~104 A | Dominant 48 V current term |
| Induction hob | 120 V AC | ~1.8 kW | 15 A AC | Intermittent |
| Microwave | 120 V AC | ~1.0 kW | 8 A AC | Intermittent |
| Washer/dryer (heat-pump) | 120 V AC or 48 V | ~0.5 kW | - | Domain TBD |

**Pack C-rate check:** 250 kW traction on a 300 kWh pack is ~0.83C - comfortable for sodium/LFP; house loads are negligible against pack capacity.

## 4. DC-DC and inverter sizing

The 48 V rail must feed both the house base **and** the AC inverter, so the DC-DC is sized to their combined peak:

- House base peak ~2 kW + inverter peak ~5 kW = **~7 kW**, sized up to **~10 kW** for surge and headroom.
- At 800 V input, 10 kW is ~12.5 A (trivial wiring). At 48 V output, 10 kW is **~208 A** - the high-current node that drives busbar and fuse sizing.
- Build from stackable modules (e.g. 4 x 2.5 kW or 2 x 5 kW) for redundancy and serviceability.

**Open architecture choice:** feed the 120 V inverter from the **48 V rail** (simpler ecosystem, but the DC-DC must carry inverter current) **or** from an **800 V-input inverter** (keeps the 48 V rail and DC-DC small, fewer conversions, but a less common part). This one decision sizes the whole 48 V backbone - resolve early. *Recommended start: 48 V-fed Victron-class inverter for V1 maturity; revisit HV-fed for V2.*

Inverter: **3-6 kW pure sine** (e.g. Victron MultiPlus-II 48/5000) with transfer switch and charger built in.

## 5. Protection & fusing

| Level | Protection |
|---|---|
| Pack | Main HV fuse (class T / EV fuse, ~400-600 A to suit traction), main + pre-charge contactors (Gigavac), HVIL loop, insulation monitor (Bender IMD) |
| HV branches | Individual HV fuses per branch: compressor, HV heater, DC-DC, charge inlet |
| 48 V | DC-DC output main fuse; PDM (Victron Lynx-class) with MIDI/MEGA fuses per circuit (30-100 A); matched to conductor ampacity |
| 120 V AC | Breakers; **GFCI on every wet-zone circuit** (galley, bath); shore inlet surge protection + transfer switch |
| Local | Per-branch fusing at each buck converter |

Every positive leg fused at 1.25x continuous current. HV orange conduit, physically separated from LV.

## 6. Conductors & connectors

- **800 V runs are thin** (low current) - the win of HV. Keep them short, sealed, orange, and clear of wet zones (SELV discipline keeps only 48 V in bath/galley).
- **48 V backbone is the heavy copper** - the ~208 A DC-DC output and inverter feed need **2/0-4/0 AWG or copper busbars**; keep runs under ~20 ft to hold voltage drop below 2-3%.
- **Connectors:** TE Connectivity 48V portfolio - **HALVONEX** (sealed, up to 400 A) for the backbone; **Heavy-Duty Sealed** for chassis branches; **mixed signal+power** for smart subsystems (pump+sensors in one housing); Anderson Powerpole for modular low-power branches.
- Marine-grade tinned cable, proper crimps, strain relief, grommeted bulkhead passes.

## 7. Charging sources & arbitration

| Source | Path | Notes |
|---|---|---|
| Solar (~3.5 kW roof / ~6 kW parked) | MPPT -> 48 V rail, then bidirectional DC-DC up to 800 V (or HV MPPT direct to 800 V) | Primary summer; arbitration favours solar first |
| Shore (NEMA 14-50) | Inverter/charger -> 48 V -> DC-DC to 800 V (or HV charger) | Galvanic protection, transfer switch |
| CHP genset (3.5 kW) | Rectifier -> pack (HV or via 48 V) | Winter; also delivers heat (Thermal track I7) |
| DC fast charge | NACS direct to 800 V; MCS-ready | Travel charging; LFP/sodium take high C-rate |

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
- Solar input is prioritised to house charge; the CHP is called before the reserve is reached, not after.

## 10. Monitoring

Pack shunt + BMS (CAN); DC-DC and major-branch shunts; INA219 per 48 V zone; HV IMD; all surfaced on the controls dashboard (Controls & Software track, I12) with logging.

## 11. Open questions (resolve to close v0.2)

- **Inverter feed: 48 V-fed vs 800 V-fed** - sizes the whole 48 V backbone (Section 4).
- **Solar charge path:** 48 V MPPT + bidirectional DC-DC vs HV MPPT direct to 800 V.
- **Bidirectional DC-DC** yes/no (48 V solar assisting traction charge).
- **HV resistive heat placement** (cabin/water final-lift on 800 V vs 48 V vs AC).
- **Washer/dryer domain** (48 V DC vs 120 V AC).
- **PDM topology:** zonal vs star; final TE connector/part map per branch.
- **Pack main-fuse and contactor ratings** once traction power is fixed.

## 12. Sourcing leads

- **Cells/pack:** sodium-ion (target) or LFP blade; structural enclosure (see Structure track).
- **DC-DC:** Vicor BCM (2.5 kW stackable), Eaton eMobility (5-8 kW), Infineon HV-LV (CAN).
- **Inverter/charger + MPPT + monitoring:** Victron (MultiPlus-II, SmartSolar, Lynx, Cerbo/VRM).
- **Connectors:** TE HALVONEX, Heavy-Duty Sealed, mixed families; Anderson Powerpole.
- **HV safety:** Gigavac contactors, Bender IMD, class-T/EV fuses.

## 13. Decision checklist (to mark this track "designed")

- [ ] Inverter feed decided (48 V vs 800 V) and DC-DC sized to match
- [ ] Solar charge path and bidirectional-DC-DC decision
- [ ] HV branch list frozen with fuse/contactor ratings
- [ ] 48 V backbone conductor + busbar sizing to under 3% drop
- [ ] TE connector part map per circuit
- [ ] Grounding/bonding scheme drawn (shore vs off-grid)
- [ ] Load-shed priority table loaded into the controller
- [ ] Single-line diagram drawn and cross-checked against the energy model and mass budget

---
*Detailed 2026-06-26 (v0.1). Next: lock the inverter-feed decision (Section 4), then draw the single-line diagram. Keep Section 2 interfaces in sync with the architecture map.*
