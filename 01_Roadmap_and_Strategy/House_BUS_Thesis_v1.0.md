# House Bus - Thesis v1.0

**Canonical thesis snapshot - 2026-06-29.** A standalone, reference-grade summary of the project as it stands after the first full design pass + the start of the granular round. Consolidates and supersedes the concept draft (`house-bus-concept-v0_1.md`). Part of **Divergent Futures - Terrestrial Technology**; open-source at `github.com/divergent-futures/divergent-house-bus`.

> Written to be portable: drop this whole file into another project as the reference for what the House Bus is, why, and how far it's been taken.

---

## 1. What it is

A full-time, four-season, **all-electric, self-moving dwelling** - the thing that comes after the RV and the tiny house. The distinction is behavioural before it is technical: in an RV your life lives in a fixed house and the RV is a shell you pack; in a **house bus the bus *is* the home** and any fixed structure becomes an accessory "home port" you dock to for power/water/sewer/data. A towed all-electric 4WD ("toad") handles last-mile access so the dwelling itself needn't fit everywhere.

It is simultaneously two real things: a **Divergent Futures proof-of-frame** (the terrestrial counterpart to HABITAT's space one - demonstrating a thesis through engineering, not assertion) and **a home the operator and his wife actually want to live in.**

## 2. The thesis (two legs)

**Leg 1 - integration over invention.** The next leap lives in *connecting* mature technologies, not inventing new ones. Every conventional rig wastes the by-product one system makes while another pays to recreate it. The house bus refuses that: **one structural battery, one thermal loop, one DC bus, closed-loop water** - so cooling the cabin makes the hot water, the fridge shares the heat pump's cold, and the winter generator that charges the pack also heats the cabin. Heat is moved, stored, and reused - never dumped.

**Leg 2 - decoupling the dwelling from the land.** Autonomy + closed-loop self-sufficiency + full electrification make it possible to detach a dwelling from fixed land. When the mobile shell becomes the home and the fixed house becomes the accessory, the structures built on land-bound housing (mortgages, zoning, property tax, address) start to wobble. The bus is the object that demonstrates the decoupling - argued as an honest hypothesis to be checked against reality over years, not a prophecy.

## 3. The integration spine (locked architecture)

- **Energy.** A single **~300 kWh sodium-ion structural pack** (**400 V for V1**; 800 V a future target) forms the *floor* of the bus and is the only energy store - it drives the vehicle and runs the home. Stepped once from the pack to a **48 V house rail** (DC-DC), with **12/5 V** bucked locally and a small **120 V AC** island for legacy appliances only. A **software drive-reserve floor** (~80 kWh) means house loads can never strand mobility. Charge from rooftop+deployable **solar**, a winter **CHP genset**, shore, and DC fast charge (**MCS ~1 MW + NACS ~250 kW**; J1772/CCS via adapter).
- **Thermal (the keystone).** One integrated heat-pump core does cabin (zoned), battery, drivetrain, fridge/freezer, hot water, drying, dehumidification, and ventilation - routed by an expanded **18-port Octovalve-style manifold**. It uses **two compressors** because the system spans freezer-cold to cabin-warm: a **high-temp circuit** (variable-speed; cabin/battery/drivetrain/hydro + all heat reuse) and a **low-temp circuit** (scroll; fridge + freezer). Heat reuse is strictly **grade-matched**: low-grade recovered heat preheats water, runs the drying room and climate bed and battery warming; high-grade loads (sauna, cooking, final hot-water lift) stay electric. A **3.5 kW diesel CHP genset** is the winter backstop - its waste heat is the product, not a loss.
- **Water.** Two separate domains: a clean **stainless drinking tank** (external fill + rainwater) and a **recirculating wash loop** (shower/dishes) topped up with UV-treated AC **condensate** - "human-use clean, not drinking." **Composting toilet** with urine diverted to a **hydroponic nutrient loop** (bounded honestly: sodium accumulation needs RO/electrodialysis -> a small brine bleed). It is a closed loop *with an asterisk* - greywater, brine, and condensate are real output streams.
- **Structure.** **25-27 ft** (park access; tight places) with **slide-outs** for interior width. Composite body over foam core, EPP-foam interior, **double-layer polycarbonate glazing** + insulated covers, adjustable air suspension. The full-floor battery slab gives the lowest possible CG (rollover-resistant) and deletes wasteful frame rails.
- **Controls.** **Automotive Ethernet** backbone (CAN only at gateways for legacy parts), Linux host + zonal edge nodes, **phone/tablet access - no traditional key** (+ backup key + mechanical override). Safety logic is simple, local, deterministic, and never overridden by the smart layer. Everything open-source and logged.
- **Occupancy.** 2 full-time (squeeze to 4).

## 4. The numbers (current validated state)

| Metric | Value | Source |
|---|---|---|
| Whole-home use (3-season) | ~15 kWh/day | energy model |
| Driving range (usable pack) | ~245 mi | energy model |
| Curb weight (optimized) | ~13,270 lb | mass budget |
| Mass strip vs steel-heavy baseline | ~27% | mass budget |
| GVWR margin (vs 19,500 lb) | ~4,460 lb | mass budget |
| Winter pack-only autonomy (-10 C) | ~13 days | energy model |
| Winter CHP runtime to hold pack | ~2.3 h/day (~2.6 L diesel) | energy model |
| Indicative build cost (with contingency) | ~$142k - $354k | BOM v0.1 |
| Battery chemistry | sodium-ion (CATL Naxtra-class ~175 Wh/kg, mass-produced) | feasibility assay |

## 5. Feasibility posture (assayed against The Assay v0.7)

**Verdict: PLAUSIBLE - a buildable integration, not a physics gamble.** It claims no physics ceiling; the heat reuse is grade-matched, not free energy. The gate is **supply + integration + regulation, never physics.** The biggest flagged risk - the sodium pack - is materially **de-risked**: CATL's Naxtra sodium-ion is in mass production at near-LFP density and scaling across commercial vehicles, so the chemistry is available for the build window; the remaining piece is engineering the 800 V *structural* pack form factor.

## 6. Honest bounds - what could actually stop it

- **Regulatory cage** (widest band, lowest confidence): registration class, full-time-occupancy legality, insurance, reclaimed-water rules. Often the real binding constraint - *the tech is feasible; the friction is political.*
- **Integration / controls complexity**: one core many things depend on; mitigated by dual-compressor failover and a written single-unit degradation plan.
- **Mass discipline**: the "silent governor"; tracked live in the mass budget.
- **Water salt management** and the closed-loop asterisk (stated, not hidden).
- **Base rate**: most ambitious lab-to-build projects slip; this one earns its plausibility by being integration of mature parts, not invention.

## 7. Why it matters (Divergent Futures fit)

It pays off three ways independently: as **content** (a public, honest build - including the project assaying *itself*), as **engineering** (a genuinely integrated dwelling), and as a **personal build**. If the systemic decoupling thesis proves out over years, the channel called an inflection early; if not, that's honest data about where the regulatory cage really binds. There is no failure mode that wastes it.

## 7b. Design philosophy - extrapolate every permutation; adopt what already fits; roadmap the rest

The channel's purpose is to **extrapolate every permutation, however hard** - because most of what we would ideally build with is **5-10 years out and does not exist yet**, so the default working assumption is that we will have to engineer it ourselves. But this is **not** a reflex to reject good products. Where a company has **genuinely already done the engineering, their product fits our envelope, and we cannot add value by vertically integrating it ourselves**, we **adopt it without hesitation.** That is not laziness or a concession to planned obsolescence - it is spending our finite engineering where it actually moves the needle, and this bus has plenty of harder problems that deserve it. Self-build is reserved for what does not yet exist, or where we can do meaningfully better. (We have already found one off-the-shelf fit worth taking seriously - Konvekta's CO2 bus heat pump for the high-temp circuit.)

The discipline that makes this honest is the one most people skip: **roadmap the permutations forward.** Building V1 forces concessions - a **400 V pack** (mature today) and a **hybrid thermal core** where that is the right call - but we **record where the technology is heading and design headroom in** for the better, more-integrated V2, instead of discovering the upgrade path only after the line is built. The model is Tesla: the Model 3 launched without structural castings or a heat-pump HVAC; the Model Y added both (the heat pump replacing the PTC heater bought range and serviceability) - but t