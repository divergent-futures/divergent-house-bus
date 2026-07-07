# Controls & Software - Design Track

**Status:** Detailed v0.2 (Ethernet backbone + phone/tablet access) → **see `Controls_Brain_Orchestration_v0_3.md` for the full intelligent-orchestration layer (6-layer stack, load-shed ladder, state machine, predictive MPC)**  ·  **Priority/Sequence:** 2  ·  **Depends on:** Electrical, Thermal (and reads from every track)
**Part of:** House BUS subsystem design tracks. Integration is the thesis - and this is the track that makes the integration actually happen.

---

## 1. Purpose

The hardware is only as good as the logic that coordinates it. This is the supervisory brain: it reads every sensor and the BMS, decides where heat and cold go, protects the drive-reserve and the battery, sheds load by priority, arbitrates charging, secures and unlocks the bus, and surfaces it all on a tablet and phone app. It is **interface I12 (controller -> all)** made real.

Design stance: **safety logic is simple, deterministic, and local; comfort/efficiency logic can be smarter; nothing clever is ever allowed to override a safety interlock.** Everything is open source and version-controlled, so the community can read exactly how the bus thinks.

## 2. Control hierarchy (priority order)

1. **Safety** - never charge a cold battery; never let a loop freeze; hold the drive-reserve floor; shut down on CO, CO2/low-O2, over-temperature, over-pressure, or insulation fault. Fail to safe.
2. **Comfort** - hold cabin (zoned), hot-water, and sleep-surface set points.
3. **Efficiency** - capture and reuse recoverable heat before any electric top-up; run compressors and the genset in buffered bursts; favour solar.
4. **Autonomy** - manage state of charge to ride out low-sun periods; call the CHP before the reserve is reached, not after.

## 3. The control loops it owns

| Loop | What it does | Talks to |
|---|---|---|
| Thermal manifold routing | Sets valve positions + pump speeds per operating mode | Thermal track (manifold, I1-I9) |
| Dual-compressor management | Duty split + failover to limp mode if one fails | Thermal track |
| Battery thermal + charge gate | Warm/cool the pack; lock out cold charging | BMS, Thermal, Electrical |
| Drive-reserve + load-shed | Map house-available envelope; shed discretionary loads near the floor | Electrical track |
| Charge-source arbitration | solar -> stored -> CHP -> shore -> DC fast | Electrical track |
| Ventilation / air quality | Tie fresh-air rate to CO2/O2; trigger on CO/smoke/particulates | Thermal/ERV, Safety |
| Water monitoring | Tank levels, UV health, filter life, leak alerts | Water track |
| CHP supervisor | Start/stop on SoC + heat demand; CO interlocks | Thermal, Electrical, Safety |
| Access & security | Lock/unlock, identity, intrusion | Section 7 |

## 4. Hardware architecture

- **Linux host** - a rugged, fanless, vibration-rated in-vehicle PC (wide DC input, **automotive-Ethernet** ports + a CAN-gateway port for legacy devices). Runs the mission-critical Python services and the dashboard.
- **Optional Windows VM** - everyday computing, run as a guest **strictly isolated from the control network** (no path from the VM to vehicle control).
- **Zonal edge nodes** - small controllers (Pi / ESP32-class) at each zone/cluster, talking Ethernet back to the host - short local wiring, fewer long runs.
- **Victron Cerbo GX / VRM** - off-the-shelf power-system brain for inverter/charger/MPPT/BMS data, bridged onto the network.
- Located in the central mechanical bay next to the BMS, 48 V and HV connections.

## 5. Network - Ethernet backbone (moving off CAN)

The vehicle backbone is **automotive Ethernet**, not CAN. CAN is robust and ubiquitous but bandwidth-starved and dated; for a brand-new build we want the modern, IP-native, high-bandwidth path that also carries cameras and rich sensors and matches where the industry (zonal architectures) is going.

- **Backbone:** automotive Ethernet (100BASE-T1 / 1000BASE-T1), IP-native, with a managed switch in the central bay; **TSN (time-sensitive networking)** or kept-local timing for the safety-critical loops so determinism isn't lost.
- **Legacy devices via gateway:** many off-the-shelf EV parts (some BMS, VCUs, MPPTs, valves) are CAN-native - these sit behind a **CAN-to-Ethernet gateway** so the backbone stays Ethernet while we still use proven components. (Exactly how each device bridges is to be worked out later.)
- **House/IoT:** MQTT over the same Ethernet/Wi-Fi for sensors and edge nodes.
- **Comms:** Starlink + cellular with failover; remote monitoring, pre-conditioning, OTA (software-only; never an open path to safety controls).
- *This is a deliberate move to 21st-century networking; the detailed topology and per-device bridging are a granular-round item.*

## 6. Software stack

- **OS:** Ubuntu/Debian (PREEMPT_RT for real-time-ish behaviour on the safety services).
- **Services:** Python (Flask/FastAPI for the local API; pandas/NumPy for logging/optimisation); state-machine + PID where appropriate. Ethernet middleware (plain TCP/UDP, MQTT, or SOME/IP); `python-can` used only at the CAN gateway for bridged devices.
- **Automation/UI:** Home Assistant (or Node-RED) for high-level rules and the tablet UI; a local web dashboard reachable from the phone app.
- **Data:** time-series logging (InfluxDB / SD), exportable - the same data that proves the energy model and tunes the system.
- **Everything in Git**, in this repo, with documented SOPs.

## 7. Access, entry & security

- **No traditional key.** The bus is controlled and unlocked from a **tablet (built-in) and a phone app** - your phone is the key.
- **Tesla-style key option** - a phone-as-key model with an optional hardware key card/fob as backup (the same proven, hard-to-clone approach), so you are never locked out if a phone dies.
- **Secure by design:** rolling-credential / cryptographic auth for entry and drive-enable; the access system can lock/immobilise and is isolated from guest computing; failed-entry and intrusion alerts via the app.
- **Graceful fallback:** a physical mechanical override for entry exists for emergencies, documented and secured (you must never be sealed out of or into your own home).

## 8. Dashboards & UX

- **On-board tablet** - live SoC and range, thermal mode + zone temps, air quality per zone, water levels, solar/charge status, alerts, lock/unlock.
- **Phone app** - the same view plus pre-conditioning, entry, and fault alerts, anywhere with comms.
- **Manual overrides** - physical and in-software fallbacks for every critical function.

## 9. Safety, redundancy & failure behaviour

- **Watchdog timers** restart hung services; the safety layer runs even if the smart layer dies.
- **Fail-safe defaults** - on controller loss, valves/pumps default to safe positions (no-freeze, battery-protect), the genset stops, contactors open as appropriate.
- **Hard isolation** of the Windows VM and guest comms from the control network; OTA cannot reach safety interlocks.
- **Graceful degradation** (single-unit philosophy): lose the smart layer -> basic thermostatic + manual control; lose a compressor -> limp mode; lose comms -> local control continues; lose a phone -> backup key.
- Redundant sensors on the critical thermal/battery loops.

## 10. Autonomy (future, scoped out of V1)

V1 is **monitoring + automation**, not self-driving. The architecture leaves room for a later drive-by-wire / ADAS stack on a separate compute lane; out of scope for the first build and never on the safety-critical control plane.

## 11. Interfaces

- **I12 Controller -> all** (commands + telemetry over Ethernet; CAN devices via gateway).
- Reads: BMS, MPPT/charger, thermal valves/pumps/compressors, all air-quality and water sensors.
- Cross-track: enforces Electrical drive-reserve/load-shed, runs the Thermal manifold + failover, watches Water quality, gates the CHP, owns access/security.

## 12. Loads & mass

- **Electrical:** host + edge nodes + tablet ~1.0-1.5 kWh/day (energy model: computer, controls & monitoring).
- **Mass:** computer, controls, sensors ~70 lb (mass budget).

## 13. Open questions (resolve to close v0.3)

- **Ethernet topology + per-device bridging** (which devices are CAN-native and how they gateway); TSN vs local-timing for safety loops.
- **Host hardware** selection and compute headroom for future autonomy.
- **Access/security model** - phone-as-key implementation, backup key, cryptographic scheme, mechanical override.
- **V1 automation vs manual** scope - start conservative, automate as field data proves it.
- **OTA signing + remote-access hardening.**

## 14. Sourcing leads

- Rugged PC with automotive Ethernet: Neousys, OnLogic, Premio. Edge: Pi 5, ESP32 (Ethernet-capable).
- Automotive-Ethernet switches/PHYs (100/1000BASE-T1); CAN-to-Ethernet gateways for legacy parts.
- Power brain: Victron Cerbo GX + VRM. Software: Home Assistant, Node-RED, InfluxDB/Grafana.

## 15. Decision checklist

- [x] Control hierarchy set (safety -> comfort -> efficiency -> autonomy)
- [x] Backbone = automotive Ethernet (CAN only at gateways for legacy parts)
- [x] Access = phone/tablet, no traditional key (+ backup key, mechanical override)
- [x] Hardware architecture + VM/comms isolation
- [x] Fail-safe / degradation philosophy
- [ ] Ethernet topology + per-device bridging map
- [ ] Host hardware finalised
- [ ] Access/security cryptographic scheme
- [ ] V1 automation-vs-manual scope
- [ ] Cross-checked against every other track's control needs

---
*Detailed 2026-06-27 (v0.2). Decisions folded in: Ethernet backbone (off CAN; gateways for legacy devices), phone/tablet access with no traditional key (+ backup key + mechanical override). Next: Ethernet topology + bridging map, and the access cryptographic scheme.*
