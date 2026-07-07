# The House-Bus Microgrid — The Bus IS the Family's Mobile Powerwall

**Date:** 2026-07-03  ·  V2 bus. TJ's refinement of bidirectional: it's not really grid-offloading — **the house is off-grid entirely, and the bus is its big battery when home.** The house gets solar + a *small* battery; the bus's 330 kWh does the heavy lifting. See `house_bus_microgrid.png`. Extends `Bidirectional_V2X_Power_Station.md`; a strong thesis + product angle.

---

## 1. The concept
- **The house is off-grid.** No grid tie — no point. It has its own **~4 kW solar + a small ~6–7 kWh battery** and modest loads (servers/network, fridge, occasional HVAC).
- **The bus is the anchor battery.** When it's **home**, it **powers the house** (V2H) — including HVAC — off its **330 kWh (~220 kWh exportable)**.
- **When the bus is away**, the house rides its **own small solar + battery** — which is plenty, because the base load is tiny with nobody there.
- **House solar surplus tops the bus** when it's docked. Bidirectional both ways through a **dock**.

## 2. Why more SOLAR than BATTERY on the house (the counterintuitive bit)
- **House base load when away ~5 kWh/day** (fridge ~1.5 + servers/network ~2.5 + standby ~1.0).
- A **~6–7 kWh house battery = ~1.3 days** ride-through — plenty for overnight + a cloudy gap.
- **~4 kW solar → ~20 kWh/day ≫ 5** — a big surplus that banks or tops the bus.
- **When home, the big loads (HVAC) run off the bus** — ~220 kWh covers **~15 days of house HVAC alone**.
So you **buy solar (cheap, roof space), not a big house battery** — the base load is small when away, and the bus is the big battery when you're there.

## 3. The insight
**One big mobile battery (330 kWh) serves BOTH the vehicle AND the home.** Instead of a house Powerwall *and* a vehicle pack, the bus's pack is both. The house only needs a small buffer for the gaps. **Capital-efficient** — you don't pay for two big batteries.

## 4. Why it's on-thesis
This is **decoupling the dwelling from the land** made literal: the mobile battery **unifies home + vehicle energy**, and the house becomes a **light off-grid shell** anchored by the bus. It's a clean story and a real capability. *(For grid-connected users who want it, V2G / grid backup stays a configurator option — but the flagship pattern is off-grid house + mobile anchor.)*

## 5. Open / next
- **The dock:** DC-coupled (bus 400 V ↔ house DC bus) vs AC (via the bidirectional inverter) — DC-coupling is more efficient; spec the connector + transfer + power level (~7.6 kW).
- **House kit spec:** ~4 kW solar + ~6–7 kWh battery + a small inverter + the dock; a publishable "off-grid house companion" BOM.
- **Controls:** coordinate house ↔ bus (when to power the house, when to top the bus from house solar, reserves) — part of the controls brain.
- **Configurator/content:** the "off-grid homestead + mobile anchor" package as a headline story.

---
*House-bus microgrid, 2026-07-03. The house is OFF-GRID (no grid tie); it has ~4 kW solar + a SMALL ~6-7 kWh battery + modest loads (servers/fridge/occasional HVAC). The BUS (330 kWh, ~220 exportable) is the anchor battery — powers the house (incl. HVAC) when HOME (~15 days of house HVAC alone); when the bus is AWAY the house rides its own small solar+battery (base load only ~5 kWh/day). House solar surplus tops the bus. WHY more solar than battery: base load tiny when away → small battery rides gaps + abundant solar; the bus is the big battery when home. INSIGHT: ONE mobile battery serves BOTH vehicle + home (capital-efficient; no separate house Powerwall). ON-THESIS: decouples dwelling from land; mobile battery unifies home+vehicle energy; house = light off-grid shell + bus anchor. Grid V2G stays a configurator option for grid-tied users. Next: spec the DC-coupled dock + the off-grid-house companion kit BOM + house↔bus controls. See house_bus_microgrid.png.*
