# Bidirectional / V2X — The Bus as a Power Station

**Date:** 2026-07-03  ·  V2 bus. TJ asked "how would we do bidirectional?" The answer: the pack + the **bidirectional DC-DC** (already being designed) are ~90% of a power station, and the all-DC house makes DC export nearly free. See `bidirectional_v2x.png`. Feeds Electrical + Controls + the persona/config story.

---

## 1. How it works (in the all-DC architecture)
The pack (400 V) ↔ **bidirectional DC-DC** ↔ 48 V DC house bus. That bidirectional DC-DC is the internal enabler — it already moves power both ways. Export paths hang off it:

| Export | How | Add needed |
|---|---|---|
| **Exterior DC outlets** | 48 / 24 / 12 V + USB-C PD straight off the DC bus (tools, camp, the toad's 12 V) | just weatherproof outlets — **nearly free** (house is already DC) |
| **Charge an EV toad (V2V)** | a **rear HV DC port** presents ~400 V DC to the toad's charge port + a charge controller | a port + controller |
| **Home / grid backup (V2H / V2G)** & **AC power tools** | a **bidirectional inverter-charger** makes 120/240 V split-phase AC | **one unit** — the shore charger made two-way (Sol-Ark / Victron MultiPlus-II class, ~7.6 kW) |

**So the only real hardware add for AC export is a bidirectional inverter-charger** — and it doubles as the shore charger you already need. Everything else is ports + software.

## 2. Capacity
Pack 330 kWh − ~80 kWh drive-reserve − ~30 kWh house-reserve = **~220 kWh exportable.**
- **~7 days** of home backup (~30 kWh/day).
- **~22 days** of job-site tools (~10 kWh/day).
- **~4× fills** of a ~50 kWh EV toad.

## 3. Control rules (mostly software)
- **Protect the drive-reserve floor** — never export below ~80 kWh (you still have to drive home).
- **House-reserve buffer** — keep a cushion for your own use.
- **Anti-islanding + GFCI** for any grid-tie (safe transfer switch).
- **Metering + app control** — sell / share / charge on your terms.
- Ties into the controls "brain" (the same load-shed/priority layer, extended to export).

## 4. Why it matters
For the cost of **one inverter + software**, bidirectional unlocks three personas at once:
- **Contractor** → job-site power (AC tools all week).
- **Resilience** → home backup in an outage (~7 days).
- **Overlander** → charge the EV toad from the bus (V2V).

It also turns the 330 kWh pack — which is huge for a dwelling — into a genuinely useful asset when parked (the "parked bus earns" story), and it's a clean **configurator branch** (DC-only export baseline; add the bidirectional inverter for AC/V2H/V2G).

## 5. Open / next
- Pick the bidirectional inverter-charger (size, split-phase, transfer switch/anti-islanding).
- Rear HV DC port + toad-charge controller (V2V) — standard/connector.
- Export power-flow logic in the controls brain (reserves, metering, scheduling).
- Configurator: DC-export baseline vs +AC-export (V2H/V2G) option.

---
*Bidirectional / V2X, 2026-07-03. The pack + the bidirectional DC-DC (already being designed) + the all-DC house = ~90% of a power station. DC export (48/24/12/USB-C exterior outlets) is nearly free. Toad EV charging = a rear HV DC port (400 V direct, V2V). Home/grid + AC tools (V2H/V2G) = ONE add — a bidirectional inverter-charger (the shore unit made two-way, ~7.6 kW split-phase). ~220 kWh exportable (330 − 80 drive − 30 house) = ~7 days home backup / ~22 days job-site tools / ~4x toad fills. Control (software): protect the drive-reserve floor, house-reserve buffer, anti-islanding + GFCI, metering/app. Unlocks contractor + resilience + overlander personas for ~one inverter + software. Configurator branch. See bidirectional_v2x.png.*
