# Lighting & 48V Internal Systems - Design Track

**Status:** Detailed v0.1 (first deep pass)  ·  **Priority/Sequence:** 3 (research-led)  ·  **Depends on:** Electrical
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component names its interface back to the shared loop / bus.

---

## 1. Purpose

Run lighting, networking, and devices **natively at 48 V wherever possible**, converting only when a load genuinely needs it. Every avoided conversion is avoided loss and avoided heat. This is the "48 V internal" research track: work out what runs native at 48 V, what needs a small local buck, and what truly needs 120 V AC.

## 2. The 48 V-first rule

The 48 V house rail (from the Electrical track, downstream of I11) is the default home for low-voltage loads. Decision order for each device:

1. **Native 48 V** if an efficient part exists (LED lighting, many fans/pumps, PoE).
2. **Local buck** (48 -> 12/5 V) at the device for legacy electronics - short low-voltage runs only.
3. **120 V AC** (inverter) only for true legacy appliances that have no DC option.

## 3. Lighting

- **Native 48 V LED** throughout, **zoned and dimmable** (driving cabin, galley, bedroom, bath, exterior/awning), scene + motion + door-switch control via the Controls track.
- Warm-dim capable where it matters (bedroom, evening); daylight-balanced over the galley and workspace.
- Low standby; lighting is a small but always-on load (~250 Wh/day in the energy model).

## 4. Network & comms (PoE++)

- **Managed switch with PoE++ (802.3bt, up to ~90 W/port)** to power and data cameras, access points, sensors, and the touchscreen over a single cable each - clean, and it rides the 48 V rail naturally (PoE is ~48-57 V).
- **Router + Starlink + cellular** with failover (shared with Controls); Wi-Fi mesh for the cabin.
- Wired backbone (Ethernet) to the central bay; MQTT for IoT sensors/edge nodes.

## 5. Local DC for devices

- **48 V -> 12/5 V buck converters** mounted near load clusters (TVs, laptops, monitors, USB, networking) - avoids the ~10-20% round-trip waste of inverting to 120 V AC and rectifying back.
- USB-C PD outlets where useful; 12 V accessory points for legacy gear.
- Per-zone current monitoring (INA219-class) so the dashboard shows where the watts go.

## 6. What stays on 120 V AC

Only true legacy appliances with no efficient DC option - induction hob, microwave, washer/dryer, occasional power tools - on the small inverter island (Electrical track). Keep this list short; every item moved off it shrinks the inverter and its losses.

## 7. Interfaces, loads & mass

- Draws from the **48 V rail** (downstream of I11, Electrical track); comms shared with Controls (I12).
- **Loads:** lighting ~250 Wh/day + electronics/network (energy model).
- **Mass:** folded into wiring / misc in the mass budget.

## 8. Open questions (research items)

- **Native-48 V availability** for the full lighting set and any 48 V appliances worth adopting.
- **PoE++ device budget** - which devices, total watts, switch sizing.
- **Per-device decision** - native 48 V vs local buck vs 120 V AC (build the device-by-device table).
- **Conductor sizing + TE connector map** for the low-voltage branches.

## 9. Sourcing leads

- 48 V LED: SuperBrightLEDs, Larson Electronics. Buck: Daygreen / ATO 48 V modules.
- PoE++ switches (802.3bt); Starlink + cellular router. Monitoring: INA219.

## 10. Decision checklist

- [x] 48 V-first decision rule set
- [x] Lighting approach (native 48 V, zoned, dimmable)
- [x] PoE++ networking approach
- [ ] Device-by-device native/buck/AC table
- [ ] PoE++ power budget + switch sizing
- [ ] Low-voltage conductor + connector map
- [ ] Cross-checked against energy model

---
*Detailed 2026-06-27 (v0.1). Research-led track. Next: the device-by-device native-48V / buck / AC table and the PoE++ budget.*
