# Controls & Software - Design Track

**Status:** Seeded (ready to detail)  ·  **Priority/Sequence:** 2  ·  **Depends on:** Electrical, Thermal
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component below names its interface back to the shared loop / bus.

## 1. Purpose & requirements
The supervisory brain: route heat and cold, protect the drive-reserve floor and battery temperature window, shed load by priority, and surface dashboards and alerts - human oversight with manual fallback.

## 2. Interfaces (to the integrated loop / bus)
These are the couplings this subsystem owns or touches, from the architecture interface map (I1-I12):

- I12 Controller -> all (signals)
- Reads BMS, MPPT, thermal valves/pumps, sensors over CAN

## 3. Components
- Linux host (rugged in-vehicle PC) + optional Windows VM, isolated from the CAN control plane
- Pi / ESP32 edge nodes; CAN bus backbone
- Home Assistant + Python services (thermal PID, load-shed, logging); Victron Cerbo/VRM
- Sensors: temperature, pressure, flow, level, CO, CO2; touchscreen + remote dashboard

## 4. Electrical load contribution
Computer ~1.2 kWh/day + controls/monitoring (see model).

## 5. Mass contribution
Computer, controls, sensors ~70 lb.

## 6. Open questions
- Priority / load-shed logic and drive-reserve enforcement
- Watchdog + redundancy + safe-default behaviour on fault
- Comms: Starlink + cellular failover
- Security isolation of CAN from the Windows VM

## 7. Sourcing & decisions
- Neousys / OnLogic rugged PCs; python-can, Victron VE libraries; Home Assistant / Node-RED

---
*Seeded 2026-06-26. Fill in detail as the subsystem is designed; keep Section 2 in sync with the architecture interface map.*
