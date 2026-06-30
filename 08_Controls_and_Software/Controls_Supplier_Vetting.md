# Controls & Software - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  V2 bus. Pairs with `Controls_and_Software.design.md`.

## Requirement
**Automotive-Ethernet backbone** (100/1000BASE-T1) off CAN; **CAN via gateways** for legacy EV parts (drive unit, BMS); **edge nodes** for the per-zone AQ arrays + actuators; **energy management** across pack/solar/charge/loads; **phone/tablet-as-key** (no traditional key) + backup; a **monitoring dashboard**; and **safety logic that is local, deterministic, and never overridden**.

## Step 1-2 field, vetted

| Layer | Tier | Candidate | Fit | Verdict |
|---|---|---|---|---|
| **Energy hub / GX** | B (adopt) | **Victron Cerbo GX + VRM** (2x CANbus, relays, tank/digital inputs, VE.Direct; MQTT + Modbus-TCP out) | Purpose-built energy hub; integrates the whole Victron chain | **adopt as the energy hub** |
| **Automation brain** | A/B | **Home Assistant** on a **Raspberry Pi** (pulls Cerbo via MQTT/Modbus-TCP) | Whole-home automation + dashboards; huge ecosystem | **adopt + self-build automations** |
| **Edge nodes** | A | **ESP32 / Raspberry Pi** (AQ arrays, sensors, actuators, ESPHome->HA) | Cheap, flexible | **self-build** |
| **CAN / Ethernet** | A/B | automotive-Ethernet switches + **CAN gateways**; Cerbo handles CAN (RPi has no native CAN -> PiCAN/Cerbo) | Legacy EV parts on CAN, house on Ethernet | **self-build integration** |
| **Phone-as-key / access** | A | BLE + app (custom) + backup keycard + mechanical override | Tesla-style | **self-build** |

## Verdict
**Adopt the proven layers - Victron Cerbo/VRM as the energy hub and Home Assistant (on a Pi) as the automation brain** - and **self-build the integration**: the edge-node AQ/actuator network, the CAN-to-Ethernet gatewaying, the phone-as-key, and (critically) the **deterministic safety logic that runs locally and can't be overridden by the smart layer**. Value-add is integration + safety architecture, not a new controller. (Venus OS vs Home Assistant as the top layer is the main open choice.)

## Open questions
1. **Top layer:** Home Assistant over Cerbo vs Venus OS-centric (HA is more flexible; Venus is more integrated/robust).
2. Automotive-Ethernet backbone vs a simpler hub-and-CAN topology for V1-of-V2.
3. Phone-as-key implementation + secure backup.
4. **Safety-logic isolation** - which functions are hard-wired/local-deterministic vs software (load-shed, HV disconnect, detectors).

## V2+ headroom
A more integrated custom vehicle controller; OTA updates; tighter sensor fusion.

## Sources
- [Cerbo GX + Home Assistant via MQTT/Modbus](https://diysolarforum.com/threads/my-victron-cerbo-gx-home-assistant-integration.101852/) · [Cerbo vs RPi/Venus (no native CAN on Pi)](https://communityarchive.victronenergy.com/articles/278446/cerbo-gx-mk1-2-vs-raspberry-pi-4-model-b-the-facts.html) · [Victron HA energy automation](https://energymonkey.co.uk/victron-home-assistant-setup-ultimate-energy-automation/)

---
*Controls, steps 1-2 done. Adopt Victron Cerbo/VRM (energy hub) + Home Assistant on a Pi (automation); self-build edge nodes, CAN/Ethernet gatewaying, phone-key, and the deterministic safety logic. Resolve the top-layer + safety-isolation Qs, then a controls tracker.*
