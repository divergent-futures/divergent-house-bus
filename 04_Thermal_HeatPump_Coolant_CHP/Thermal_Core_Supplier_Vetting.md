# Thermal Core - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  **Process:** per `11_.../Sourcing_Strategy_ThreeTier.md` - identify the field (1), vet fit-for-purpose (2), *then* build a tracker (3, NOT yet). This is steps 1-2 for the thermal core, the same vetting the e-axle got.

## Our requirement (what the core must actually do)

From the Thermal track (v0.2) + the granular manifold doc:
- **High-temp circuit** (~0-7 C evap): zoned cabin, battery, drivetrain/power-electronics, hydroponic reservoir - **plus condenser heat reused** to hot water, drying room, climate bed, cabin.
- **Low-temp circuit** (~-25 C evap): fridge (+2..+4 C) + freezer (-18 C).
- **~8-10 kW** core, modulating; **dual compressors**; **400 V (V1; 800 V future)**; **scavenging + thermal storage**; routed by our expanded manifold. Refrigerant: CO2 (Lane B) or R1234yf (Lane A).

The unusual part is the **breadth**: vehicle TMS + domestic refrigeration + domestic hot water + drying, on one integrated loop.

## Step 1-2: candidate field, vetted against that requirement

| Candidate | Tier | What it actually covers | Sized for us? | Gaps vs our scope | Fit verdict |
|---|---|---|---|---|---|
| **Konvekta CO2 (EmCO2S)** | C (premium) | Cabin heat/cool, battery preheat+cool, power-electronics cool, **with scavenging** (heat cabin while cooling battery). CO2. 400/600 V AC + 24 V DC. Rooftop or chassis; compact or modular. | Yes - bus-scale; very efficient (~45 kWh/100km at -10 C vs >100 resistive) | **No fridge/freezer**; no explicit domestic hot-water/drying tap; **400/600 V, not 800 V** | **Excellent for the HIGH-temp circuit + validates the CO2 lane**; covers ~half our scope |
| **Guchen ES-04 + BTMS** | B (China, cheap) | Compact rooftop bus AC **with integrated reversible heat pump**, sized **for 7-8.5 m buses** (= our size); battery TMS in **3 models, 3-8 kW**; optional 6-14 kW PTC | **Yes - explicitly our bus size and ~kW class** | Same: no fridge/freezer, no DHW/drying integration; conventional refrigerant; voltage TBD | **Good, cheap HIGH-temp circuit, right-sized** |
| **Webasto eVTM** | C | Cabin + battery + electronics thermal, modular, conventional refrigerant | Yes | Same gaps | Alternative high-temp circuit |
| **Self-build** (Sanden/Guchen/BITZER compressors + plate exchangers + our manifold) | A (default) | **Everything** - both circuits, fridge/freezer, DHW, drying, on one manifold | Built to spec | None - but we build it | **The only path that delivers the FULL integrated scope** |

## The honest verdict

**No off-the-shelf product delivers our full integrated scope.** Every OEM bus system (Konvekta, Guchen, Webasto) is a **cabin + battery + power-electronics** thermal manager - i.e. our **HIGH-temp circuit only**, and they're well-sized for a small bus (Guchen literally targets 7-8.5 m buses at 3-8 kW; Konvekta adds CO2 + scavenging and is the premium pick). **None of them do the LOW-temp refrigeration (fridge/freezer) or the domestic heat reuse (hot water, drying, climate bed)** - those are not vehicle-TMS functions.

This maps cleanly onto our **dual-compressor design**: an OEM unit *is* essentially "Compressor A's circuit"; **Compressor B's circuit (fridge/freezer) and the heat-reuse plumbing are ours regardless.**

So two architectures fall out:

- **Hybrid (faster / Tier B-C):** buy a proven bus TMS for the cabin+battery+PE high-temp circuit (Guchen cheap, or Konvekta CO2 premium) + **self-build the low-temp fridge/freezer circuit and the DHW/drying heat-reuse** off its condenser + our manifold/controls. Caveat: it's then *two* coupled systems, which dilutes the "one integrated machine" thesis, and depends on whether the OEM unit's condenser heat is **tappable** (often it's a closed product).
- **Full self-build (Tier A / the thesis):** one manifold, both circuits, all reuse, built from compressors + exchangers - the only route that is *genuinely* the integrated machine, fully open-source. Hardest, but it's the project's whole point.

**Integration note - voltage (now RESOLVED by the 400 V pack decision):** the V1 pack is **400 V**, and the OEM units are **400/600 V** - so they are **directly compatible** (400 V direct, or 400->600 V boost via DC-DC), no AC inversion. The earlier '800 V mismatch' is gone; in fact the industrial 400/600 V compressor ecosystem is a **reason** for the 400 V pack. (800 V V2 would reintroduce the step.)

## The 5 open questions - ANSWERED (2026-06-29 research pass)

**1. Can a small open-source builder buy a whole Konvekta/Webasto unit? — Largely moot, because the whole units don't fit our envelope.** Konvekta is a series product (since 2018, 1,300+ vehicles, 100+ operators, 40+ countries) sold to bus OEMs/transit operators - small-builder access is uncertain and would hinge on the channel-as-market leverage (see outreach note). **But the decisive finding is sizing:** even Konvekta's *lightest* unit, the **UltraLight 700 CO2, is 26.5 kW cooling / 21 kW heating and ~2.08 x 2.66 m** - a full-12 m-bus rooftop unit, **~2.5-3x our ~8-10 kW need and physically too large** for a 25 ft bus roof. Guchen ES-04 is closer (right bus class) but still a sealed cabin-AC product. **Conclusion: adopting a whole OEM unit fails the fit test on size** - so per our philosophy (adopt only where it genuinely fits and we can't add value), the whole-unit path is out; the *components* are the play.

**2. Is the OEM/condenser heat tappable for DHW + drying? — YES, natively, IF the circuit is CO2.** Transcritical CO2 is a *consolidated* domestic-hot-water technology: its **gas cooler** rejects high-grade heat across a temperature glide that produces **60-95 C water with no supplementary heat**, and a **tri-partite gas cooler** does *simultaneous* DHW + space heating. Waste heat that a subcritical system dumps to ambient is, in CO2, directly recoverable for hot water / drying / defrost. **This is the single biggest finding: the heat-reuse leg of our thesis is a native property of a CO2 high-temp circuit, not a bolt-on.** A subcritical R1234yf circuit tops out far lower and needs a resistive final lift.

**3. 400 V compressor sourcing (high-te