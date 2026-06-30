# House BUS - Feasibility Assay

**Instrument:** The Assay v0.7 (Divergent Futures credibility-and-extrapolation instrument), run per the Operating Protocol.
**Subject:** the House BUS integrated all-electric dwelling, assayed against itself.
**Date:** 2026-06-27

> **Feasibility != desirability.** This answers *can it be built, and how far does it scale* - not *should it*. And the honest framing up front: the bus is **integration over invention**. It does not claim to beat a physics ceiling, so it will pass triage easily. The Assay's value here is the opposite of a fraud-hunt - it is to find **where the real binding constraints are**, and to name the few claims that are genuinely optimistic.

---

## Rapid Screen (project level)

1. **Decode:** "A 400 V (V1), ~300 kWh, sodium-ion, all-electric self-moving dwelling that reuses waste heat across one integrated thermal loop, ~245 mi range, ~15 kWh/day house load, at ~13,000 lb curb." Mostly an *assembly* of mature parts.
2. **Single-axis ceiling:** nothing claimed beats a hard limit - COP, heat recovery, range, and efficiency all sit well inside physics.
3. **Tradeoff frontier:** the one place a free-energy tell could hide is the heat reuse. It does **not** trip, because the design is explicitly **grade-matched** - recovered heat is low-grade and only does low-grade jobs; high-grade loads (sauna, cooking) stay electric. "Waste heat runs the appliances" would be fool's gold; "waste heat preheats, electricity finishes" is honest.
4. **Provenance/incentive:** a design in the open, no metric being sold, no raise/stock riding on belief. Incentive to over-claim is low.
5. **TRL gap:** small for components (most are TRL 9), larger for the *integration* and for two specific bets (below).

**Screen verdict:** clean - no violation. Proceed to per-claim triage on the parts that carry the risk.

---

## Per-claim scorecards (the risk-bearing claims)

### A - The integrated thermal core (one machine, every thermal job)
```
DECODED:        one heat-pump system (dual compressors + a >8-port custom manifold) serves
                zoned cabin + battery + drivetrain + fridge/freezer (2 set points) + hot water
                + drying + dehumid + ventilation, grade-matched.
TRL act/impl:   components ~9 (EV TMS, Tesla Octovalve, heat-pump water heaters all ship)
                / integration ~4-5. Gap = moderate, and it is the integration, not the parts.
Ceiling:        below - COP/recovery all within physics.
Tradeoff:       inside - the binding case (cool cabin + cool pack on fast charge) is solved by
                SIZING (~8-10 kW core), not denied. Fridge-on-loop at two set points is hard
                CONTROL, not an impossible combination.
Provenance:     design-stage; components independently proven.
VERDICT:        PLAUSIBLE. Binding constraint = systems-integration + controls complexity +
                serviceability (a single core many things depend on), NOT physics.
Analogue (bull):   Tesla Octovalve TMS (battery+cabin+powertrain on one routed loop, TRL 9).
Analogue (failed): over-integrated one-off RV/marine builds that become unserviceable or
                   cascade on a single failure - the warning the dual-compressor + degradation
                   plan exists to answer.
```

### B - The 400 V (V1; 800 V future), ~300 kWh sodium-ion structural pack (the floor)  [UPDATED 2026-06-29: CATL Naxtra]
```
DECODED:        ~300 kWh sodium-ion pack, 400 V (V1), structural floor, for a build ~18 months out.
NEW EVIDENCE:   CATL's Naxtra sodium-ion line is in MASS PRODUCTION (launched Apr 2025) at
                ~175 Wh/kg cell - essentially LFP-comparable - with large-scale deployment
                across passenger AND commercial vehicles through 2026, >10,000 cycles, and a
                -40 to 70 C range. This materially de-risks the bet vs the first assay.
TRL act/impl:   sodium CELLS now ~8-9 (mass-produced, in shipping vehicles). The remaining gap
                is the FORM FACTOR - a ~300 kWh, 400 V (V1), STRUCTURAL (cell-to-chassis) pack - an
                integration/engineering item, NOT a chemistry-availability one.
Density:        ~175 Wh/kg cell ~ near parity with the ~190 Wh/kg pack figure used for LFP. The
                first assay's ~140-160 was too pessimistic; the mass penalty now ~+300 lb (table).
Tradeoff:       still the honest sodium trade (slightly lower density for non-flammability + cost
                + abundance) - but the density gap is now SMALL, and sodium ADDS cold-weather
                performance (-40 C), a genuine plus for the ski-weekend case.
VERDICT:        PLAUSIBLE, and now largely DE-RISKED on chemistry for an ~18-month horizon.
                Remaining gate = engineering/sourcing the 400 V (V1) STRUCTURAL pack (not the cells); 400 V is a more mature voltage class than 800 V, lowering this risk.
                Honest call shifts: sodium is viable for the actual build window, not only V2.
Leading indicator: a sodium PACK (not just cells) in a commercial truck/bus; a CTP/structural
                sodium pack product.
Sources:        CATL Naxtra launch + 2026 commercial-vehicle deployment; RDWorld "175 Wh/kg".
```

### C - Full battery-electric drivetrain, ~300 mi, 25-27 ft, ~13,000 lb curb
```
TRL:            EV bus drivetrains TRL 9. PLAUSIBLE.
Arithmetic:     300 kWh x ~1.0-1.2 kWh/mi = ~245-285 mi (matches the energy model).
Binding constraint: vehicle mass + aero efficiency. The sodium density penalty (B) erodes
                range/efficiency - another reason to track mass hard.
VERDICT:        PLAUSIBLE; range is an arithmetic consequence of mass + efficiency, both tracked.
```

### D - Closed-loop water + urine -> hydroponics
```
TRADEOFF FLAG:  the *fully* closed-loop claim is the fool's-gold-adjacent one - and the project
                already downgrades it honestly: UV kills pathogens but sodium accumulates and
                turns phytotoxic, needing RO/electrodialysis and producing a brine bleed.
                Greywater + condensate + brine are real OUTPUT streams = "closed loop with an
                asterisk." Correctly stated, not oversold.
Binding constraint: salt management + hydroponics is energy/light-limited (demonstrator + greens,
                not calorie self-sufficiency). Honest.
VERDICT:        PLAUSIBLE as bounded; would be VIOLATES if it claimed true closure. It doesn't.
```

### E - The ~20-29% mass strip via advanced materials
```
IDIOT-INDEX READ: structural mass reduction (composite body, EPP interior, deleted frame rails)
                is real removable mass - but the optimized figures are the AMBITIOUS end, and
                cost/fabrication maturity of CF/composites is the practical limiter.
COUNTER-FORCE:  the sodium density penalty (B) pushes mass the OTHER way.
VERDICT:        PLAUSIBLE as a TARGET with margin, not a floor. Treat ~20% as the conservative
                expectation, ~29% as the stretch; re-run the mass budget with sodium density.
```

### F - ~15 kWh/day house load + heat reuse
```
Arithmetic + grade-matched (energy model). PLAUSIBLE and honestly bounded. Winter heat is the
one load that legitimately exceeds it - which is what the CHP exists for.
```

---

## Synthesis - the binding constraints, ranked

The Assay's core output is *where the gate is*. For the House BUS it is emphatically **not physics**. In order:

1. **The 400 V (V1) STRUCTURAL sodium pack (form factor, not chemistry)** - chemistry availability is now largely solved (CATL Naxtra in mass production, ~175 Wh/kg, commercial-vehicle scale through 2026). The remaining gate is sourcing/engineering a ~300 kWh **400 V (V1)** *structural* pack and its packaging (400 V is more mature than 800 V, which lowers this risk; 800 V is the V2 target); the density penalty vs LFP is now small (~+300 lb).
2. **Systems-integration & controls complexity** - one core, a custom >8-port manifold, dual-compressor failover, fridge-on-loop. Integration TRL, not component TRL.
3. **Mass / payload discipline** - compounded by sodium density; the "silent governor."
4. **Regulatory wildcard** - registration class, full-time-occupancy legality, insurance, reclaimed-water rules (see Wildcard below).
5. **Closed-loop water salt management** - bounded, but real.

None are physics walls. Every one is engineering, supply chain, or regulation - which is the honest, and the interesting, finding.

---

## Wildcard Layer (non-engineering friction - LOW confidence, kept separate)

- **Brakes (dominant here):** vehicle registration as RV vs custom/commercial; full-time-occupancy bans; insurance for a one-off HV (400 V) build; reclaimed-water-for-washing legality; GVWR/licence class. The project already names this the **"regulatory cage"** - its own antagonist. This is the **widest band** in the assay.
- **Accelerants (weak):** the open-source community (replication, scrutiny, improvement); no DIY subsidies to lean on. Mostly road-clearing at best, not ramp-bending.
- **Wildcard = binding constraint?** Plausibly **yes** for *deploying and living in it legally*, even when the engineering is sound. Classic Divergent Futures line: *the tech is feasible; the friction is political.*

---

## AI Acceleration Layer (apply after the clean run; bounded by Amdahl)

- **AI-exposed (HIGH):** design search, energy/thermal modelling, controls software, the integration logic - *this very design set was AI-accelerated.* The front-end (figuring out what to build) is highly compressible.
- **AI-resistant (LOW):** the physical build - composite fabrication, HV install, plumbing, skilled trades, the bespoke one-off bus. AI barely touches the gate.
- **Amdahl re-check:** accelerating the design does **not** speed the build; the binding constraint relocates to physical construction + the sodium supply curve. AI sharpens the *design*, not the *timeline to a finished bus*.
- **AI-layer confidence:** high for the design/controls portion, ~0 for construction.

---

## Verdict, leading indicators & logged predictions

**Overall: PLAUSIBLE - a buildable integration, not a physics gamble.** With today's LFP it is buildable now; the headline ambitions (sodium structural floor, fully-closed loops, ~29% mass strip) are the *bets*, each gated by supply timing, integration complexity, mass, or regulation - not by any physical wall. The honest story is "what won't let it," and the answer is supply + integration + politics.

**Leading indicators to watch**
- Commercial **sodium-ion structural packs** / sodium Wh/kg crossing a floor-pack threshold (gates the V2 sodium build).
- **Tesla Semi thermal-system teardown** - the closest size analogue for the integrated core (validates manifold/loop sizing).
- A V1 (LFP) build proving the **integrated thermal core** actually routes and fails over as designed.

**Logged predictions (dated, gradable - for the ledger)**
1. *Sodium-ion cells at ~LFP-comparable density (~175 Wh/kg, CATL Naxtra) are in mass production NOW and at commercial-vehicle scale through 2026 - the chemistry is available for an ~18-month build. The open call narrows to: by the build date, can a ~300 kWh 400 V (V1) STRUCTURAL sodium pack (not just cells) be sourced or built?* (Confidence: medium.)  **[Original end-2028 'no sodium pack' call superseded by CATL mass-production evidence - logged as a corrected forecast: the chemistry arrived faster than the first assay assumed.]**
2. *A re-run of the mass budget with sodium density (~150 Wh/kg) raises pack mass to ~4,000-4,600 lb, cutting the curb-weight margin under the 19,500 lb GVWR target by ~600-1,100 lb.* (Confidence: medium-high; checkable by recompute.)
3. *The dominant V1 build risk logged in the build log will be integration/controls or regulatory - not a physics/components failure.* (Confidence: medium; resolves during V1.)
4. *Sodium-ion cell $/kWh falls below LFP by ~2027-2028 as CATL/BYD ramp and new entrants come online - so the pack costs less than today's budget by build time.* (Confidence: medium; checkable against cell price indices. Basis for the "design for today's cells; price + density gains are upside" stance - the dual-domain pack is sized at ~330 kWh / 245 mi floor now, enclosure able to accept denser/cheaper drop-in cells later.)

**Kill / change conditions**
- If sodium structural packs ship sooner and lighter than expected -> the V2-only phasing was too conservative (good problem).
- If the integrated single-core proves unserviceable or failure-prone in V1 -> revisit toward more modular, separable thermal sub-systems (the failed-analogue warning).

---

## Actions this assay generates

- [ ] **Re-run the mass budget battery line at sodium density** (~150 Wh/kg) and re-check GVWR margin - the one concrete number this assay says is currently optimistic.
- [ ] Treat the **~29% mass strip as a stretch target**; carry ~20% as the planning figure.
- [ ] Keep the **LFP-for-V1 / sodium-for-V2** phasing explicit in the roadmap (it already is).
- [ ] Start the **jurisdiction/regulatory map** (the widest-band wildcard).
- [ ] Log the three predictions above to the project ledger.


## Sodium-density sensitivity (updated to CATL Naxtra 175 Wh/kg)

Re-running the mass-budget battery line at CATL Naxtra's mass-production density - and the penalty I first flagged largely evaporates:

| Pack chemistry | ~Wh/kg | Pack mass | Curb | Loaded | GVWR margin (vs 19,500) |
|---|---|---|---|---|---|
| LFP (original budget) | ~190 (pack) | 3,480 lb | 12,970 | 14,737 | 4,763 |
| **Sodium - CATL Naxtra (cell)** | **175** | **3,780 lb (+300)** | **13,270** | **15,037** | **4,463** |
| Sodium - conservative pack-derate | 160 | 4,134 lb (+654) | 13,624 | 15,391 | 4,109 |

At CATL's shipping 175 Wh/kg the pack is only ~+300 lb over the LFP assumption - **near parity**, and the GVWR margin barely moves (4,763 -> 4,463). A conservative structural/pack derate to ~160 still leaves >4,000 lb of margin. Net: with Naxtra-class sodium, **t