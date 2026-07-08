# The Genset: a Series Range-Extender (Not a Hybrid) + the Cold-Weather Multiplier

**Date:** 2026-07-07 · V2 bus. TJ's two points: (1) adding the diesel CHP **doesn't make the bus a hybrid** — it only feeds the electrical bus, never the wheels; (2) in the cold, firing that one genset does **many jobs at once** (charge, cabin heat, hot water, warm pipes, precondition the battery so it takes regen, melt snow off the panels), so you actually **lose *less* battery by having it.** See `08_Controls_and_Software/genset_series_and_cold_chp.png` and the runnable `digital_twin/cold_precondition_experiment.py`. Extends the CHP + winter-energy docs; cold-regen facts web-verified.

---

## 1. Why it's NOT a hybrid (the architecture point)

A **parallel hybrid** (a Prius) can drive the wheels with the engine *or* the motor — the engine is mechanically coupled to the driveline. This bus is the opposite: the diesel engine **has no mechanical path to the wheels at all.** It spins a generator and makes electricity + heat; the **battery alone drives the wheels, always.**

That makes it a **series range-extender / auxiliary power unit (APU)** — the same idea as a BMW i3 REx or a diesel-electric locomotive: the engine is a **charger + furnace**, not a second way to make torque. So the "delete the diesel drivetrain" identity holds: **it's a battery-electric vehicle**, and the genset is a boondocking backstop, not a powertrain.

Practically this matters because it keeps the drivetrain pure-electric (simple, one traction path), and it keeps the diesel's *only* jobs — electricity and heat — where they're efficient.

## 2. How the genset actually connects (the brainstorm TJ flagged)

TJ: *"it's technically only feeding the 48 V house battery, which can in turn feed the high-voltage system... I don't know how that would work."* Here are the real options:

| Option | Path | Pros | Cons |
|---|---|---|---|
| **A — inject at 48 V** *(recommended)* | genset → rectifier → **48 V house bus** (alongside solar) → **bidirectional DC-DC** → 400 V pack | genset is "just another 48 V source" like solar; unifies control; the DC-DC already exists; simple | genset energy bound for the pack takes one conversion (~2–4 % loss); DC-DC must carry genset + solar + house |
| **B — inject at 400 V** | genset → rectifier → **400 V pack** directly (like a small onboard DC charger); then HV→48 V DC-DC feeds the house | direct to the traction pack, no step-up for charging | genset can't run the 48 V house without going through the pack; a second high-voltage rectifier |
| **C — hybrid of both** | genset on 48 V for house + reserve-hold; a separate path to 400 V only if fast pack-charging is ever wanted | flexible | more parts |

**Recommendation: Option A.** The CHP is small (~3.5 kW electrical) and its job is **hold the drive-reserve + precondition**, not bulk-charge the 390 kWh pack (that's what shore/DC-fast/solar are for). At 3.5 kW it would take ~100 h to fill the pack anyway — so "slow trickle to the 48 V bus, DC-DC lifts the surplus to the pack" is exactly right. Everything becomes a source on the 48 V house bus; the one **bidirectional DC-DC** is the single gateway between the 48 V house world and the 400 V traction world. Clean, and it matches TJ's mental model.

**Key nuance — two different "feeds" when the genset runs:**
- **Electrical feed** (above): charge/hold the pack via the 48 V bus + DC-DC.
- **Thermal feed**: the CHP's waste heat goes into the **glycol loop** and *warms the pack through its cold-plate* — that's what "precondition the battery" physically means. Warming the cells is a **thermal** job, not an electrical one. Both happen at once when you fire the genset.

## 3. The cold-weather multiplier — one run, many jobs

This is the payoff. In deep cold, without an external heat source you must make **all** your heat from the battery (via the heat pump), *and* spend battery energy warming the pack itself — right when cold has already cut your range. Firing the CHP flips that: **one run does six jobs simultaneously** (see the figure):

1. **Charge the pack / hold the reserve** (the 35 % electrical share).
2. **Heat the cabin / living area** (waste heat, directly).
3. **Hot water** (waste heat).
4. **Keep the pipes warm** — circulate warm water so lines never freeze.
5. **Precondition the battery** — warm the cells via the loop so **they accept regen when you drive** (a cold pack can't — the BMS curtails regen, and you lose that recuperation to the friction brakes).
6. **Melt snow off the solar panels** — a little heat clears them so they generate again.

### The regen point (web-verified)
Cold is a real EV problem: internal resistance rises, so a cold battery **can't accept charge/regen efficiently** — the BMS limits it — and cold weather can cut rated range **by ~40 % at ~20 °F**. Preconditioning from an *external* source (normally shore power) recovers **20–30 %** of that loss. **Off-grid, the CHP is that external source** — the boondocking equivalent of plugging in to precondition. Warm pack → full regen on descents → more effective range in winter.

## 4. How much heat, and how much diesel — quantified (v0.6 corrected)

**⚠ The heat numbers here were corrected on 2026-07-07 — see `05_.../Heat_Load_and_Winter_Diesel_v0_6.md`.** An earlier draft used ~48 kWh/day *electric* for heat, which implied a leaky RV. Rebuilt from envelope physics (UA ~48 W/K): at −12 °C the cabin needs **~38 kWh/day of *heat*, ~17 kWh/day of *electricity*** (heat pump, COP ~2.2).

The winter diesel sweep (`digital_twin/winter_diesel_sweep.py`, 10-day parked spells, heat pump + ~12 kW solar):

| Spell | Heat (thermal) | **Diesel (with sun)** | Sunless steady-state |
|---|---|---|---|
| −5 °C, decent sun | 30 kWh/d | **0 L/day** | ~2–6 L/d |
| −12 °C, thin sun | 38 kWh/d | **0 L/day** | ~3–7 L/d |
| −18 °C, low sun | 45 kWh/d | **~0.3 L/day** | ~3–8 L/d |
| −25 °C, storm | 54 kWh/d | **~1.0 L/day** | ~4–10 L/d |

**With any sun, a heat pump on solar carries the cabin for ~0 diesel** even at −12 °C — the big pack buffers the gaps. Diesel is only really needed in a **sustained sunless deep freeze**, and even then **smart dispatch** (run the heat pump off the CHP's electricity at COP ~2.2 *and* capture its waste heat, ≈13 kWh heat/L) holds it to **~3 L/day at −12 °C**. So TJ's "happy to burn ~1 L/day" is comfortable for typical winter, with margin.

**The rule:** make heat with the **heat pump on solar/battery** (~2.2× more effective than burning fuel for heat); the CHP's *direct* heat is a bonus you take **when it's already running to hold the reserve**, not something you fire up *for* heat while the sun is up.

**And sodium removes a whole job:** the pack needs **no warming** to charge or discharge in the cold (charges to −50 °C, >85 % capacity at −40 °C), so this heat is **cabin + water + pipes only** — not battery survival. "Precondition the battery for regen" is a real benefit for *LFP*, but much weaker for our *sodium* pack (it already takes charge cold). The genset's cold value is therefore mostly **comfort heat + holding the reserve in a sunless stretch**, not keeping the battery alive.

## 5. The energy accounting (why so little diesel buys so much)

Per ~1 L diesel (~10 kWh of fuel energy):
- **~35 % → electricity** (~3.5 kWh) — charges the pack / holds reserve.
- **~65 % → heat**, of which we recover **~85 %** (2-stage condensing + the AM gyroid HX) = **~55 % of the fuel as usable heat** (~5.5 kWh).
- **Total useful ~90 %** of the fuel (35 % electricity + 55 % heat). The ~10 % lost is un-recovered flue/radiative.

That's the CHP thesis: a normal genset throws away the 65 %; **we use it**, so a *small* amount of diesel yields a *large* amount of total energy — and in winter the heat is the more valuable half.

## 6. Honest framing

It's still diesel, still not zero-carbon. But: (a) it's a **backstop**, not a daily driver — the twin shows most weeks never start it; (b) when it does run, **~90 % of the fuel is used**, not ~35 %; (c) it **saves battery** and enables winter regen, so the *net* energy cost of a cold week is lower with it than without. The honest goal is "delete the diesel drivetrain and burn as little as possible, as efficiently as possible" — not "no combustion ever." (A future all-electric shore-precondition or a cleaner fuel could replace it; the architecture doesn't depend on diesel specifically — any APU that makes electricity + heat drops in.)

## 7. Open / next

- **Genset injection point** — confirm Option A (48 V) sizing: rectifier, DC-DC headroom for genset + solar + house simultaneously.
- **Thermal path to the pack cold-plate** — confirm the loop can warm the pack fast enough for pre-drive preconditioning (tie to the thermal manifold modes).
- **Twin: model regen explicitly** — add a cold-drive scenario that credits recovered regen with a warm vs cold pack (quantify the range gain).
- **APU-agnostic** — note the drop-in path for a cleaner range-extender later (the architecture is fuel-agnostic).

---

*Genset = series range-extender + CHP, 2026-07-07. NOT A HYBRID: the diesel engine has NO mechanical path to the wheels — it spins a generator (electricity) + gives heat; the BATTERY alone drives the wheels. = series range-extender / APU (cf. BMW i3 REx, diesel-electric locomotive); keeps the "delete the diesel drivetrain / it's a BEV" identity. CONNECTION (TJ's brainstorm): recommend OPTION A — genset rectifies to the 48V HOUSE bus (like solar), the existing BIDIRECTIONAL DC-DC lifts surplus to the 400V pack; genset is small (3.5kW, job = hold-reserve + precondition, NOT bulk-charge — 3.5kW would take ~100h to fill 390kWh, so trickle-to-48V is right); the one DC-DC is the single 48V<->400V gateway. NUANCE: firing the genset does TWO feeds — electrical (charge via 48V+DC-DC) AND thermal (waste heat warms the pack via cold-plate = what 'precondition the battery' physically means; warming cells is a THERMAL job not electrical). COLD-WEATHER MULTIPLIER: one run = 6 jobs at once — (1) charge/hold reserve, (2) cabin heat, (3) hot water, (4) keep pipes warm, (5) PRECONDITION battery so it ACCEPTS REGEN when driving (cold pack can't — BMS curtails 