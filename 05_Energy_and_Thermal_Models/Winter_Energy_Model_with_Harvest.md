# Winter Energy Model — Re-run with Drivetrain-Heat Harvest + AM Heat Exchangers

**Date:** 2026-07-03  ·  V2 bus. Re-runs the winter diesel picture now that (a) the drivetrain's ~10 kW of driving heat is harvested, (b) the CO₂ heat-pump COP rises ~3 → 4 with AM heat exchangers, and (c) the CHP recovers ~65% (not ~46%) via the AM gyroid recuperator. See `winter_energy_harvest.png`. Feeds the mass budget + the modular-CHP configurator sizes.

---

> **⚠ SUPERSEDED (v0.6, 2026-07-07) — see `Heat_Load_and_Winter_Diesel_v0_6.md`.** Rebuilt from envelope physics (UA ~48 W/K): heat demand at −12 °C is **~38 kWh/day thermal, ~17 kWh/day electric** via the heat pump (COP ~2.2). The **battery-warming term is deleted** (sodium charges/discharges cold, no warming). With a heat pump on ~12 kW of solar, typical winter diesel is **~0–1 L/day**, sunless deep cold ~3 L/day. Section kept for history.

## 1. Assumptions (first-order, ~-10 °C design day) — *superseded, see v0.6*
- **Heat demand ~60 kWh/day** (~2.5 kW avg: cabin ~1.5 + battery ~0.4 + DHW ~0.5 + drying ~0.1) with high-spec insulation. *(v0.6: ~38 kWh/day thermal at −12 °C; the ~0.4 kW battery term removed — sodium needs no warming.)*
- **Free heat:** fridge/freezer reject ~7 kWh/day; **drivetrain + battery ~10 kW while driving**.
- **Solar→heat via HP:** ~6 (old, COP 3) / ~8 (new, COP 4) kWh/day.
- **CHP heat recovery:** 46% (old, conventional HX) / **65% (new, AM gyroid + condensing)**. Diesel ~10 kWh/L.

## 2. Result — winter diesel per day
| Day type | Driving | OLD | **NEW** | saving |
|---|---|---|---|---|
| Parked (cold, no driving) | 0 h | 10.2 L | **6.9 L** | −32% |
| Edges-of-day | ~2 h | 10.2 L | **3.8 L** | −62% |
| Travel day | ~5 h | 10.2 L | **~0 L** | −100% |

**Typical winter mixes some driving → ~3–4 L/day (new) vs ~10 L/day (old). Travel days ≈ 0 — the drive heats the bus.** The parked-day drop (10.2 → 6.9) is the AM-HX recovery + higher COP alone; the harvest does the rest whenever you move.

## 3. What it changes
- **Diesel/day:** ~10 → **~3–4 L** typical (travel days ~0).
- **Tank endurance (30 L):** ~3 days → **~8 days** between fills.
- **CHP size:** parked peak heat ~2.4 kW → a **3.5 kW CHP** (recovers ~2.3 kW @65% + buffer + driving harvest) is **sufficient; 5 kW not needed.**
- **Weight:** smaller CHP + smaller tank + fewer/smaller AM HXs → **lighter** (feeds the mass budget).
- **Configurator:** many builds now sensibly run **3.5 kW CHP or none** (warm-climate/grid-tied) — the genset is a smaller, optional bolt-in, not a big fixed burden.

## 4. The takeaway
**Winter's dominant load is heat, not electricity.** Making heat cheap — harvest the drivetrain + fridge + exhaust heat, run the CO₂ core at higher COP, recover the exhaust at ~65% — **collapses the genset's job.** You burn far less diesel, carry a smaller tank, shed weight, and most builders can down-size or skip the genset. The efficiency feedback loop (see `../04_.../Whole_Vehicle_Thermal_Integration_AM_HX.md`) shows up directly as diesel litres.

## 5. Open / next
- Firm the cabin heat-loss (UA) with the real insulation envelope + slide-out bridges → tighten the 60 kWh/day.
- Add the harvest + revised CHP to the main energy-model spreadsheet (`House_BUS_Energy_Model.xlsx`).
- Down-size the CHP + diesel tank in the mass budget; update the configurator CHP op