# The Digital Twin (v0.5) — Build It, Then Try to Break It

**Date:** 2026-07-07 · V2 bus. The controls brain (v0.3/v0.4) is only trustworthy if we can **test it before it touches hardware.** The digital twin is a runnable simulation of the bus — pack, solar, loads, thermal, and the reactive controller — that lets us (a) **verify everything reconciles** (energy balances, SOC stays in bounds, the drive-reserve floor is never breached) and (b) **attack it** with faults and abusive scenarios to find where it breaks. This is the "make sure everything is in order and where it should be" checkpoint TJ called for — and it becomes the test-bed that every later system plugs into.

**Deliverables (runnable):** `digital_twin/house_bus_twin.py` (the plant + controller), `digital_twin/break_tests.py` (the fault suite), `digital_twin/make_plots.py`, and `digital_twin_results.png`. All open-source (MIT), all in the repo.

---

## 1. Why a twin, and why now

Every efficiency win we've designed — drivetrain-heat harvest, PV/T, CHP heat, energy-aware grow lighting, V2X, the microgrid — is a *scheduling* claim: "if the brain runs this at the right time, it pays off." You can't validate a scheduling claim on a spreadsheet snapshot; you need to **run it through time** against weather, solar, drives, and faults. And you *definitely* don't want the first test of "does the reserve floor actually hold?" to be a real family stranded on a mountain.

The twin is also the answer to v0.4's biggest open item — **calibrating the coefficients** (`e_drive`, the weather/terrain multipliers, the MPC weights). You tune them against the twin (and later against logged real data), not by guessing.

## 2. What it models

A 1-hour time-step simulation with:
- **Pack** — 390 kWh nameplate → ~351 kWh usable (charge ceiling ~95 %, app-0 % at ~5 %) + a hidden ~2 % survival floor; sodium 0 V-safe. See `03_.../Pack_Capacity_Usable_and_BMS_Window.md`.
- **Solar** — up to ~12 kW deployed (roof + fold-outs + sides), a half-sine day × a weather factor; ~3.4 kW roof-only while driving.
- **Loads** — house base (network/controls/standby), fridge, energy-aware grow lights, and **HVAC as a function of |T_out − T_set|** through a heat-pump COP.
- **CHP** — 3.5 kW electrical **and 7 kW thermal**; the thermal output directly offsets cabin heating (the whole point of CHP), dispatched in ≥2 h efficient blocks near the reserve.
- **Drive** — traction at ~1.2 kWh/mi actual, **plus real climb energy** `m·g·Δh/η` on grades.
- **The reactive controller** — the v0.3 load-shed ladder + power-flow arbitration + the **dynamic drive-reserve floor** (v0.4) it must never cross when parked.

*Fidelity note:* this is an **energy/SOC twin**, not a CFD or transient-thermal model. It's the right level to validate control logic and reconcile the energy budget. Higher-fidelity thermal/aero models can hang off it later.

## 3. The invariants it checks

Every run audits three hard safety properties:

| # | Invariant | Meaning |
|---|---|---|
| **INV-1** | parked SOC ≥ drive-reserve floor, always | you can always get to safety |
| **INV-2** | never stranded mid-drive | the pack never hits minimum while you still must move |
| **INV-3** | SOC ≥ 5 % always | pack protection |

A scenario **passes** if it either rode through comfortably *or* **degraded safely** (shed comfort load, fired the CHP) without violating an invariant.

## 4. What the first runs found (the reconciliation caught real errors)

Running the twin immediately surfaced **three modeling inconsistencies** in our own numbers — exactly its job:

1. **Reserve rate ≠ driving rate.** I had used the *conservative reserve* rate (1.6 kWh/mi) as *actual* consumption, which made drives look far worse than reality. Split into `e_drive_act` ≈ 1.2 (actual, → ~275 mi from 330 kWh) and `e_drive_res` ≈ 1.3 (planning, with the weather/terrain multipliers on top). **This is a correction that should propagate to the range/tier numbers.**
2. **CHP heat wasn't being credited.** The first winter run burned ~9.7 L/day of diesel because the model ran the heat pump on electricity *and* the genset — ignoring that the CHP's ~7 kW of **waste heat** covers the cabin directly. Crediting it collapsed winter diesel toward the doc's ~3–4 L/day figure. (In fact, with a 330 kWh pack a single winter week often needs *no* genset at all — the pack is that big.)
3. **Climb energy was free.** The sim applied the 900 m pass to the reserve calc but not to actual traction. Adding `m·g·Δh/η` (~21 kWh) to real consumption made the mountain day honest — and revealed it's a genuine edge case (below).

None of these were "bugs in the bus" — they were **inconsistencies in our own model**, which is precisely what a reconciliation twin is for.

## 5. Baseline scenarios (all pass)

| Scenario | Result | Diesel | Notes |
|---|---|---|---|
| **A — Summer boondock** (7 d, hot, sunny, exporting) | SAFE | 0 L | huge surplus; exports + banks; ~198 kWh dumped (room for more loads/export) |
| **B — Winter ski week** (7 d, −8 °C, thin sun) | SAFE | 0 L | rides the whole week on pack + thin solar; reserve held at ~44 % end |
| **C — Mountain drive day** (180 mi + 900 m pass) | SAFE | 0 L | arrives at a resort *with* charging (small reserve) at ~21 % — safe |
| **D — Storage** (10 d, unoccupied) | SAFE | 0 L | solar keeps it topped; nothing to do |

Headline: **the pack (390 kWh nameplate / ~351 usable) is so large that most normal weeks never start the genset** — the CHP is a true backstop, not a daily crutch. (See `digital_twin_results.png`.)

## 6. Break tests (5/6 held; the 6th is a documented limit)

`break_tests.py` injects faults and abuse:

| Test | Injected | Result |
|---|---|---|
| **1** CHP dead, winter week | genset won't start | **SAFE** — pack+solar carry it, reserve held |
| **2** 14-day solar blackout | ~zero sun for 2 weeks | **SAFE** — CHP pins SOC exactly at the reserve floor (see plot B) |
| **3** Forced 8 kW over-export | user tries to dump power | **SAFE** — **export self-limits at the reserve floor; you cannot sell below get-home energy** |
| **4** −25 °C cold snap, 4 d | extreme heating | **SAFE** — CHP heat carries the cabin, reserve held |
| **5** Deep remote mountain arrival, no charger | 240 mi + pass, land 60 mi from help | **VIOLATION (expected)** — below ideal reserve until CHP/solar recover; the bigger 390 kWh pack pushed this edge out from ~180 mi (on 330 kWh) to ~240 mi |
| **6** Solar reads 40 % low all week | bad array/sensor | **SAFE** — just more CHP; reserve held |

**Test 3 is the reassuring one:** the reserve floor is a *hard* limit even against a user actively trying to over-export. **Test 5 is the honest one:** a big-climb day deep into the backcountry is a **charge-stop trip, not a single-charge trip** — the twin quantifies exactly when you'd dip below your safety margin, so it's an operating rule, not a surprise.

## 7. How the twin feeds the rest of the project

This is the part TJ flagged — *"it starts to feed other systems as we make it."*

- **Calibrates the controls brain** — the coefficients and MPC weights (v0.4/v0.5 open items) get tuned here first.
- **MPC test-bed** — the MPC (v0.3 §5) plugs in *above* this same plant model; you replay a winter week and compare MPC vs the reactive ladder to prove the look-ahead pays off before writing firmware.
- **Reconciles the energy model** — it already flagged the reserve-rate and CHP-heat errors; those corrections flow back into the range/tier and winter-fuel numbers.
- **Sizes hardware honestly** — want to know if 280 kWh (Mid tier) survives a 14-day blackout? Change one parameter and re-run.
- **Sales/thesis proof** — "we simulated a −25 °C snap and a 2-week blackout and the reserve held" is a concrete, credible claim, and the code is open for anyone to check.
- **Regression net** — as the design changes, re-running the suite catches anything that breaks a safety invariant.

## 8. Open / next (→ v0.6)

- **Propagate the corrections** — fold `e_drive_act` ≈ 1.2 and the CHP-heat credit back into the range/tier doc and the winter energy model (their headline numbers should shift slightly).
- **Add the MPC** — implement the optimizer on top of the plant and A/B it against the reactive ladder in the twin.
- **Finer weather** — real TMY weather + solar data for a specific base location instead of the half-sine placeholder.
- **Thermal-mass dynamics** — give the cabin/buffer real time-constants so pre-heat/pre-cool timing can be tuned.
- **Toad + microgrid** — model the house-bus microgrid handoff and toad charging as scenarios.
- **Monte-Carlo** — randomize weather/drives over a season to get distributions (e.g., "P95 annual diesel").

---

*Digital twin v0.5, 2026-07-07 ("this seems very important... then it feeds other systems as we make it and try to break it"). A runnable 1-h-step energy/SOC simulation of the bus (pack 330 kWh, ~12 kW solar, HVAC=f(dT)/heat-pump, CHP 3.5 kW elec + 7 kW heat, drive 1.2 kWh/mi + real climb energy) with the reactive controller (load-shed ladder + dynamic reserve floor). Files: digital_twin/house_bus_twin.py, break_tests.py, make_plots.py, digital_twin_results.png (MIT, in repo). CHECKS 3 INVARIANTS: INV-1 parked SOC>=reserve, INV-2 never stranded mid-drive, INV-3 SOC>=5%. RECONCILIATION CAUGHT 3 OF OUR OWN MODEL ERRORS: (1) reserve rate (1.6) was wrongly used as actual driving rate -> split to e_drive_act~1.2 (actual, ~275mi) vs e_drive_res~1.3 (planning) -> SHOULD PROPAGATE to range/tier numbers; (2) CHP waste HEAT (7kW) wasn't crediting cabin heat -> winter diesel dropped from ~9.7 to ~0-4 L/day (330kWh pack often needs NO genset for a winter week); (3) climb energy (~21kWh for 900m) applied to reserve but not actual traction -> fixed. BASELINES all SAFE (A summer boondock, B winter ski week 0L diesel, C mountain drive arrives safe, D storage). BREAK TESTS 5/6 held all invariants: CHP-dead, 14-day solar blackout (CHP pins SOC at floor), FORCED 8kW over-export (self-limits at reserve floor - can't sell below get-home!), -25C snap, solar 40% derate = all SAFE; test 5 (180mi+900m pass arriving 40mi from any charger) = EXPECTED violation = documents a real limit (big-climb backcountry = charge-stop trip, not single-charge). FEEDS: calibrates the brain, MPC test-bed (MPC plugs in above same plant), reconciles energy model, sizes hardware, thesis proof, regression n