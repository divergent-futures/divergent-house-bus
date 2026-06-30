# AC-Only Load List & the Convenience Inverter

**Date:** 2026-06-29  ·  **Track:** Electrical  ·  Companion to `DC_Native_Appliance_Audit.md`

Per the all-DC reframe, the bus has **no main inverter**. This list isolates the few loads that are genuinely AC (or only practical as AC), decides whether each can be made DC *safely*, sizes **one small convenience inverter**, and says **where** the AC outlets live.

## The "can it be DC safely?" rule
- **Resistive heat (elements):** runs on DC identically (heat is polarity-independent) - **safe**. The one design requirement is **DC-rated switching** (SSR / MOSFET / DC contactor) because DC has no zero-crossing and arcs more than AC. Standard, solved. So ovens, air-fry, kettles = DC-capable.
- **Motors:** use BLDC / DC fans and pumps (we already do). Induction (asynchronous) AC motors are the thing to avoid - and modern efficient appliances don't use them.
- **Electronics:** DC-inside already (buck / USB-C PD).
- **Net:** the only things worth leaving on AC are *low-use plug-in personal items* where a DC version is weak or doesn't exist - not worth converting each. That's exactly what the small inverter is for.

## Cooking trio - all can be DC (kept OFF the inverter, on 48 V / HV)

| Appliance | Power | AC or DC? | Verdict |
|---|---|---|---|
| **Induction cooktop** | 1.5-3.5 kW | DC-inside; **48 V DC hobs exist** (marine/off-grid) | **DC - 48 V rail** |
| **Oven** | 2-4 kW | resistive -> DC-safe with DC-rated controls | **DC - 400 V HV or 48 V** |
| **Air fryer** | 1.4-1.8 kW | it's just a convection oven (resistive element + fan) | **fold into a DC convection oven** (air-fry mode); avoid a standalone AC unit |
| **Microwave** | - | - | **none** (TJ's call) |

Standalone RV air-fryer/convection units (e.g. Furrion ~1,450 W) are AC - we avoid them by giving the **DC oven an air-fry mode** (resistive + DC fan), so all cooking stays DC and off the inverter.

## The genuinely-AC plug-in list (-> convenience inverter)

| Item | Typ. power | DC option? | Decision | Where (zone) |
|---|---|---|---|---|
| **Hair dryer** | 1,200-1,800 W | 12 V DC dryers exist but ~220 W (too weak/slow) | **AC, on the inverter** - the sizing driver | **bathroom** |
| Hair straightener / curling iron | 50-200 W | resistive, DC-convertible but niche | AC on inverter (or DC if found) | bathroom |
| Guest / visitor AC device (unknown) | <500 W typ | n/a | AC on inverter | galley + lounge outlet |
| Corded power tool (occasional) | up to ~1,200 W | most are cordless DC now | cordless DC preferred; else inverter | exterior/service outlet |
| Small AC kitchen gadget (blender etc.) | 300-800 W | cordless/DC versions exist | DC if practical; else inverter | galley |
| Electric shaver / toothbrush | <20 W | **DC/USB** | **move to USB-C / 12 V** (not AC) | bathroom (USB) |

Personal electronics (laptops, phones, tablets) are **DC/USB-C - not on this list.**

## Convenience inverter - size & placement
- **The hair dryer sets the size.** A 1,200-1,500 W travel/mid dryer fits a **~1.5 kW** pure-sine inverter; a full 1,800 W salon dryer needs **~2 kW**. **Recommend ~1.5 kW** (pairs with a <=1,500 W dryer) - bump to 2 kW only if a full-power dryer is a must. **Never the old 5-10 kW class.**
- **Switchable + eco/standby, OFF by default** (~0-10 W idle vs ~40 W always-on) - flip on when an AC item is plugged in.
- **Outlets:** a small dedicated AC network, **primary outlet at the bathroom** (hair dryer/grooming), plus one in the **galley** and one in the **lounge/exterior service** point. Run the inverter near the bathroom (shortest run to the dominant load), fed from the 48 V rail.

## Decision summary
- **Cooking = all DC:** 48 V induction + a DC convection oven with air-fry mode; no microwave. None on the inverter.
- **One ~1.5 kW switchable convenience inverter** (2 kW only for a full salon dryer), eco/off, feeding a few AC outlets (bathroom-primary, galley, lounge/service).
- Everything else is DC / USB-C.

## Open
1. Hair dryer wattage target -> fixes the inverter at 1.5 kW vs 2 kW.
2. Confirm a 48 V DC induction hob + a DC convection/air-fry oven (source or build).
3. Final AC-outlet count/locations.

## Sources
- [Furrion RV convection/air-fry ovens (AC, ~1,450 W)](https://nomadicsupply.com/furrion-09-cu-ft-rv-convection-microwave-oven-air-fryer-fman09-bl/) · [12 V DC hair dryers ~220 W (weak); AC-on-inverter preferred](https://wethedryers.com/12-volt-hair-dryer/) · [48 V DC induction & DC appliances](https://www.offhighwayvan.com/post/12v-48v-camper-van-electrical-systems-compared)

---
*AC-only load list (2026-06-29). Cooking forced DC; one small (~1.5 kW) switchable convenience inverter for plug-in personal AC items, outlets at bathroom/galley/lounge. Companion to the all-DC reframe.*
