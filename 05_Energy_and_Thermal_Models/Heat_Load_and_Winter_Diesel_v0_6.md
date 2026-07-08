# Corrected Winter Heat Load + Diesel (v0.6) — "48 kWh/day was too hefty"

**Date:** 2026-07-07 · V2 bus. TJ pushed back: *"48 kWh/day at −12 °C seems like an awful lot for a well-insulated bus... run the numbers again."* He was right. The old figure was a lumped fudge-factor, not physics. Rebuilt from the actual envelope (`digital_twin/heat_loss_model.py`), corrected the twin, and re-ran the winter diesel picture (`digital_twin/winter_diesel_sweep.py`). See `08_.../winter_heat_and_diesel_v0_6.png`. This is the v0.6 reconciliation; it also folds in the sodium cold behavior and the usable-capacity/e_drive corrections.

---

## 1. Where the number went wrong

The twin used `hvac = 0.06 kW-electric per °C` of ΔT → at −12 °C that's ~48 kWh/day **electric**. Working backward, that implies ~**120 kWh/day of heat loss** (≈5 kW), i.e. a heat-loss coefficient of ~150 W/K — an **ordinary, leaky RV**, not the well-insulated four-season shell we're designing. TJ's instinct was correct.

## 2. The physics-based heat load (UA model)

Building the whole-bus heat-loss coefficient from the envelope (`heat_loss_model.py`):

| Contribution | ~UA (W/K) |
|---|---|
| Walls (~R-20), roof (~R-25), floor (~R-20) | ~27 |
| Windows (~6 m², triple) | ~8 |
| Thermal bridges + slide-out seals (+25 %) | ~9 |
| Ventilation (ERV ~80 %) + infiltration | ~5 |
| **Total UA** | **~48 W/K** |

Steady heat loss = UA · ΔT. At −12 °C (ΔT = 33 K): **~1.6 kW → ~38 kWh/day of *heat*.** But that heat is delivered by a **heat pump at COP ~2.2**, so the **electricity** drawn is only **~17 kWh/day** — *not* 48. The old number was ~2.8× too high because it (a) modeled a leaky envelope and (b) didn't credit the heat pump's COP.

| Outdoor | ΔT | Heat loss | Heat/day (thermal) | Electric/day (HP) |
|---|---|---|---|---|
| −5 °C | 26 | 1.3 kW | ~30 kWh | ~14 kWh |
| **−12 °C** | 33 | 1.6 kW | **~38 kWh** | **~17 kWh** |
| −20 °C | 41 | 2.0 kW | ~48 kWh | ~22 kWh |
| −25 °C | 46 | 2.2 kW | ~54 kWh | ~25 kWh |

## 3. Sodium removes "warm the battery" from the job

TJ: *"we don't have to keep [the pack] warm... it can trickle-charge and discharge cold, it just can't fast-charge cold."* **Verified:** sodium-ion charges to **−50 °C** (CATL Naxtra) and holds **>85 % capacity at −40 °C** — unlike LFP, which can't charge below 0 °C. So the pack needs **no survival heating**; the winter heat is **cabin + water + pipes only.** (The old winter model's "60 kWh/day" explicitly included a ~0.4 kW battery-warming term — now deleted.) The one caveat (honest): sodium discharge *power* still sags somewhat in extreme cold, so it's not magic — but it removes the cold-charging and freeze-protection burden that drives LFP designs.

## 4. Winter diesel — re-run (the real answer to "how much to stay warm")

With the corrected load, a heat pump, and ~12 kW of solar (`winter_diesel_sweep.py`, 10-day parked spells):

| Spell | Heat (thermal) | Solar | **Diesel (with sun)** | Sunless steady-state |
|---|---|---|---|---|
| Mild (−5 °C, decent sun) | 30 kWh/d | 46 kWh/d | **0 L/day** | ~2–6 L/day |
| Cold, thin sun (−12 °C) | 38 kWh/d | 27 kWh/d | **0 L/day** | ~3–7 L/day |
| Deep cold, low sun (−18 °C) | 45 kWh/d | 14 kWh/d | **~0.3 L/day** | ~3–8 L/day |
| Extreme sunless (−25 °C storm) | 54 kWh/d | 5 kWh/d | **~1.0 L/day** | ~4–10 L/day |

**Two honest numbers.** The *with-sun* column (twin 10-day average) is low — near **0 L/day even at −12 °C** — because a heat pump on solar carries the cabin, and the huge pack buffers the gaps. The *sunless steady-state* is the ongoing cost if the sun never returns and the buffer is gone: the low end (~3 L/day at −12 °C) uses **smart dispatch** — run the heat pump *off* the CHP's electricity (COP ~2.2) **and** capture the CHP's own waste heat, ≈13 kWh heat per litre; the high end (~7 L/day) is naive pure-direct-CHP-heat.

**So TJ's "~1 L/day is fine" holds comfortably for typical winter** (with any sun it's ~0), and even a sustained sunless deep freeze is ~3 L/day with smart dispatch — the pack's size means you almost never hit steady-state anyway.

## 5. The rule this establishes

**Make heat with the heat pump on solar/battery, not by burning diesel for its direct heat.** A heat pump is ~2.2× (COP) more effective per unit electricity than burning fuel for heat, and solar is free. The CHP's *direct* heat is a bonus you take **when it's already running to hold the reserve** — you don't fire it *for* heat while the sun is up. Burning diesel purely for cabin heat (~7 L/day at −12 °C) is the expensive path we avoid.

## 6. v0.6 propagation (what else this corrects)

Folding in the twin's other findings so the doc set is consistent:
- **Winter model** (`Winter_Energy_Model_with_Harvest.md`): heat demand **~60 → ~38 kWh/day** (thermal, −12 °C; battery-warming term deleted); typical winter diesel **~3–4 → ~0–1 L/day with sun** (heat pump + solar); 30 L tank endurance improves accordingly.
- **Range on usable, not nameplate** (`Pack_Capacity_Usable_and_BMS_Window.md`): quote range on ~90 % usable; High tier ~360 kWh traction → **~290–300 mi**, not the nameplate-math ~307–333.
- **Driving rate**: the twin uses ~1.2 kWh/mi (real-world, incl. HVAC/wind margin) vs the tier doc's idealized ~1.08; the honest planning figure is ~1.15–1.2, so **tier ranges are ~10 % optimistic** as highway *planning* numbers.

## 7. Open / next

- Firm UA with the **real insulation spec + slide-out seal detail** (UA could tighten to ~35 with passive-house detailing, or rise to ~65 with big windows / poor seals) → re-run.
- Add **solar gain** to the cooling side (the UA model ignores it — summer cooling is understated).
- Update the **energy-model spreadsheet** (`House_BUS_Energy_Model.xlsx`) and the **winter model doc** headline numbers.
- Twin: implement the **smart cold dispatch** (CHP-elec → heat pump + waste-heat capture) explicitly so the sunless number is empirical, not analytical.

---

*Heat load + winter diesel v0.6, 2026-07-07 (TJ: "48 kWh/day seemed hefty — run it again"; correct). OLD hvac coeff 0.06 kW-elec/°C = ~48 kWh/day ELECTRIC implied ~120 kWh/day heat = UA ~150 W/K = a LEAKY RV, wrong. REBUILT from envelope physics (heat_loss_model.py): UA ~48 W/K (walls R20/roof R25/floor + windows + bridges/slide-seals + ERV vent). At -12C: heat loss ~1.6 kW = ~38 kWh/day THERMAL, but via HEAT PUMP COP 2.2 = ~17 kWh/day ELECTRIC (not 48). SODIUM removes 'warm the battery' (verified: charges to -50C, >85% cap at -40C, unlike LFP <0C) -> winter heat is CABIN+water+pipes only; deleted the old 60 kWh/day's battery-warming term. WINTER DIESEL re-run (winter_diesel_sweep.py, heat pump + 12kW solar): with ANY sun ~0 L/day even at -12C (heat pump on solar + pack buffers); sunless STEADY-STATE ~3 L/day at -12C with SMART dispatch (CHP elec->heat pump COP2.2 + capture CHP waste heat = ~13 kWh heat/L) up to ~7 naive direct. TJ's ~1 L/day holds easily for typical winter. RULE: make heat with the HEAT PUMP on solar/battery, NOT by burning diesel for direct heat (COP 2.2x better); CHP direct heat is a bonus when it's already running to hold reserve. PROPAGATION: winter model heat 60->38 kWh/day, diesel ~3-4 -> ~0-1 L/day w/ sun; range on USABLE ~90% (High ~290-300 mi not 307-333); driving rate ~1.15-1.2 real vs tier 1.08 idealized (tier ranges ~10% optimistic as highway planning). Figure winter_heat_and_diesel_v0_6.png. Next: firm UA w/ real insulation+seals, add solar gain to cooling, update xlsx + winter doc headline, implement smart cold dispatch in twin. Sources: sodium cold (scientificamerican/CATL Naxtra, bonnenbatteries, highstar).*
