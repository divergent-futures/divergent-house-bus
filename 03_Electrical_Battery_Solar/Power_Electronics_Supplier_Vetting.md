# Power Electronics - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  **Process:** per `01_.../House_BUS_System_Build_Process.md` - identify field (1), vet fit (2), tracker later (3). Scope = the conversion + protection hardware between the pack and the loads. (Traction inverter lives in the e-axle tracker; cells/BMS in the Battery vetting.)

## Our requirement
From Electrical track v0.2 (400 V V1):
- **DC-DC HV->48 V**, ~10 kW, stackable/modular for redundancy (~208 A at 48 V is the high-current node).
- **AC inverter/charger** 3-6 kW pure sine for the 120 V legacy island; doubles as shore charger.
- **Solar MPPT** (48 V rail and/or HV).
- **DC fast-charge interface**: NACS (~250 kW) + MCS (~1 MW future); J1772/CCS via adapter.
- **HV protection**: main contactors + pre-charge, class-T/EV fuses, insulation monitor (IMD), HVIL.

## Step 1-2: field, vetted against that requirement

| Function | Tier | Candidate | Fit vs our spec | Verdict |
|---|---|---|---|---|
| **DC-DC HV->48 V** | B/A (builder-accessible) | **Vicor BCM** (400 V & 800 V -> 48 V, modular, light) | **Matches our "stackable modules" design exactly**; supports 400 V now and 800 V V2; sold as modules | **V1 pick** (adopt) |
| DC-DC | C/B | **Eaton eMobility** (custom HV DC-DC), **Delta** (400/800 V -> 48/12 V) | Proven, but more OEM-tier | References / scale options |
| DC-DC | B | Inovance / V&T (China) | Cheaper, quote-based | Cost-down |
| **Inverter/charger** | B/A | **Victron MultiPlus-II 48/5000** | Mature marine/RV part, fully **builder-accessible**, inverter+charger+transfer switch in one | **V1 pick (adopt)** |
| Inverter/charger | B | EG4 / Growatt | Cheaper alt | Cost-down |
| **Solar MPPT** | B/A | **Victron SmartSolar** (48 V) or HV MPPT | Off-the-shelf, integrates with the Victron ecosystem | **V1 pick (adopt)** |
| **DC fast charge - NACS** | (standard) | NACS ~250 kW (Tesla network) | **The V1 workhorse** - mature, dense, ~200 kW held 10-60% | **Primary V1 DC charging** |
| **DC fast charge - MCS** | (emerging) | MCS ~1 MW (CharIN; IEC TS 63379 pub Feb 2026) | **Real but EARLY** - first NA session Mar 2026 (Kempower 1.2 MW, 1,500 A, San Bernardino); depot/hub-based, not yet roadside-ubiquitous | **Design the inlet for it; rely on NACS for V1** |
| **HV protection** | B/A | **Gigavac/TE contactors, Bender IMD, Sensata, class-T/EV fuses** | All off-the-shelf, builder-accessible | **Adopt wholesale** |

## The honest verdict
**Power electronics is the most "adopt-off-the-shelf" subsystem on the bus - and that is the correct call.** Vicor (DC-DC), Victron (inverter/charger + MPPT + monitoring), and Gigavac/Bender (protection) are mature, builder-accessible, and a near-perfect fit; Vicor's modular HV->48 V even matches our stackable design and spans 400/800 V. Per the philosophy, **we do not reinvent any of this** - the value-add is **integration and packaging** (the distribution bay, busbars, fusing layout, single-line diagram), not new converters. Self-build here would be pure vanity and would steal engineering from the battery and thermal cores where it actually matters.

The one genuinely moving target is **charging standard timing**: NACS carries V1; MCS is arriving in 2026 but is still depot/hub-scale, so we build the bus **NACS-first with an MCS-ready inlet**.

## Open questions (resolve before a power-electronics tracker)
1. **Inverter feed: 48 V-fed vs HV (400 V)-fed** - the Electrical track's standing open decision; sizes the whole 48 V backbone.
2. **Vicor BCM module count + redundancy** for the ~10 kW DC-DC node.
3. **Bidirectional DC-DC** yes/no (48 V solar assisting traction charge; V2G later).
4. **MCS inlet**: which connector/standard to design the inlet around (IEC TS 63379) so it is future-fittable.
5. **Onboard AC charger**: rely on the Victron charger, or add a dedicated higher-power OBC for shore?

## V2 headroom to design in now
- **800 V-native** DC-DC (Vicor already spans it) and HV-fed inverter option.
- **MCS inlet provision** + cabling rated for the future high-power path.
- **Bidirectional DC-DC** for V2G / solar-to-traction assist.

## Sources
- [Vicor HV-to-48 V modules](https://www.vicorpower.com/industries-and-innovations/vicor-48v/hv-to-48v) · [Eaton HV DC-DC](https://www.eaton.com/us/en-us/catalog/emobility/high-voltage-dc-dc-converter.html) · [Delta EV DC-DC (400/800 V)](https://www.deltaww.com/en-US/products/ev-dc-dc-converters)
- [MCS deployment 2026 / first NA session](https://electrek.co/2026/03/26/this-chargers-first-megawatt-truck-charge-hits-north-america/) · [CharIN MCS](https://www.charin.global/technology/mcs/)

---
*Power electronics, steps 1-2 done. Verdict: ADOPT (Vicor / Victron / Gigavac-Bender); value-add is integration, not new converters. NACS-first, MCS-ready inlet. Resolve the 5 open questions, then build the (short) power-electronics tracker.*
