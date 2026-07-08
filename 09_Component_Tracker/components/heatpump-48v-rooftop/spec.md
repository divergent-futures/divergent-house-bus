# 48V DC rooftop heat pump (Explorer tier)

**Subsystem:** Thermal/CHP · **Status:** candidate-selected · **Qty:** 1
**Function:** a native **48V DC rooftop heat pump** (cool + heat) that runs **straight off the house bus with ZERO inverter load** — the simple, off-the-shelf **"Explorer-tier"** HVAC, versus the flagship **integrated CO₂ core**.
**Source:** TJ's find, 2026-07-07.

## The find (TJ)
- **RecPro 48V DC rooftop heat pump** — **$1,850**, **9,500 BTU (~2.8 kW)**, **cool + heat**, **native 48V DC**.
- Runs directly off the 48V house bus → **no inverter, no AC conversion loss** — perfectly on-thesis for the all-DC system.

## Where it fits (the tiering insight)
This is a **product-line fork for HVAC**:
- **Explorer tier (Entry/Mid): the RecPro 48V rooftop heat pump.** Cheap (~$1,850), simple, all-DC, off-the-shelf, drop-in. Trade-offs: **air-source** (lower COP in deep cold than the CO₂ core), and **no integration** — it can't harvest waste heat, feed DHW, warm the pack, or share the manifold loop.
- **Signature/High tier: the integrated CO₂ core** (`co2-compressor-ht`) — higher COP, waste-heat harvest, DHW, battery conditioning, the 18-port manifold. More complex + costly, but it's the whole thermal-integration thesis.

So the configurator can offer **"simple 48V heat pump" vs "integrated CO₂ core"** as an HVAC choice — big cost/complexity swing, and the RecPro makes the cheaper tier genuinely easy.

## Open / next
- **Verify** the exact RecPro model, its **heating COP at low temp**, rated heat output, and dimensions (TJ-provided figures — confirm on RecPro's site).
- Check it against the corrected heat load (~38 kWh/day thermal at −12 °C ≈ 1.6 kW): a 9,500 BTU (2.8 kW) unit covers it at mild cold, but confirm heat output holds in deep cold (air-source derates).
- Photo + GLB → this folder.

---
*RecPro 48V DC rooftop heat pump (TJ's find, 2026-07-07): $1,850, 9,500 BTU (~2.8 kW), cool+heat, NATIVE 48V DC = zero inverter load, on-thesis all-DC. = EXPLORER-TIER HVAC (simple/cheap/off-shelf, air-source, NO waste-heat/DHW/battery/manifold integration) vs the flagship INTEGRATED CO2 CORE (co2-compressor-ht: higher COP + harvest + DHW + manifold). Configurator HVAC fork: simple 48V heat pump vs integrated CO2 core. Verify: exact model, heating COP at low temp, rated heat output vs our ~1.6 kW peak (-12C) heat load (air-source derates in deep cold), dims.*
