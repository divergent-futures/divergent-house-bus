# Open Items & Theoretical Branches — Living Backlog

**Date:** 2026-07-03 (living — keep pushing to it). A project-wide dump of everything still to do + the branches we haven't landed on. Tags: **[NOW]** do next · **[SOON]** near-term · **[LATER]** · **[FORK]** undecided decision · **[BLUE-SKY]** speculative. See `theoretical_branches_map.png` for the big open forks.

---

## 1. Near-term concrete to-dos (teed up, not done)
- **[NOW] Mass-budget refresh** — fold in the firmed pack (bigger, 102 in, potting), body rocker, rear subframe, hydro block (~185–222 kg), grow system; update curb/loaded/CG + axle loads.
- **[NOW] Energy-model update** — add the grow-light seasonal load (~0.8 summer / ~1.6–2.7 winter kWh/day) + hydro pump/dosing; re-run daily balance + winter autonomy.
- **[NOW] CFD rerun** — A ≈ 5.7 m² (firmed 5.5 + 102 in +4.2%); re-price boat-tail/underbody/wheel-cover levers → updated Cd + range.
- **[SOON] Floor-plan v0.7** — fold in 102 in, potted-CTP pack, 35×35 wet bath + 41 in wardrobe, galley fridge + herb planter, the hydro stack.
- **[SOON] Standard wet bath** — draw the "for everyone else" variant at equal fidelity (fixed compact shower+WC).
- **[SOON] Lock the cell** — sodium-CTP vs LFP-blade; sets potting, gauges, S×P, real pack mass.
- **[SOON] Nutrient loop detail** — urine→nutrient processing (dilution, EC/pH, **sodium bleed**), dosing, reservoir sizing, sensors.
- **[SOON] Kitchen herb planter** — small galley window + LED unit (Signature *and* nice-to-have for Standard).

## 2. Subsystem completion gaps (by track)
- **Structure/Pack:** rocker section + pack-to-body bolt pattern; **rear subframe** (e-axle + air-susp mounts); skid plate; potting-foam grade; FRP panel supplier; insulation envelope; slide-out thermal bridge; crash/rollover FEA.
- **Thermal:** per-circuit COP in hot ambient; **combined heat-rejection grille sizing** (compressors + CHP + e-axle inverter); loop hydraulics/pump sizing; front-cab loop run sizing; buffer sizing final.
- **Electrical/Solar:** 48 V backbone final sizing; MPPT + **deployable-wing** control + real yield model; charge arbitration; grounding/IMD; the wand + grow + pump DC branches.
- **Controls/Software:** the whole thing is high-level — needs the **state machine**, the load-shed ladder implementation, hydro/grow logic, **air-leveling interlock**, phone-key, deterministic safety layer, sensor fusion, telemetry/VRM/OTA.
- **Water:** closed-loop shower (Showerloop) detail; condensate harvest; drinking RO/UV; tank sizing; greywater/brine; wand-as-tap plumbing.
- **Safety/Egress:** rear-bay fire suppression + **CHP fire separation**; 4-zone AQ arrays; HV-fault containment; egress validation; crash structure sign-off.
- **Interior/Habitability:** climate bed detail; boat-tail bedroom ergonomics; galley (48 V induction + DC oven sourcing); storage volumes; NVH/acoustic comfort (e-axle, compressors, pumps, the slide).

## 3. Theoretical / undecided branches (the forks) — see the map
- **[FORK] Drivetrain:** RWD single rear e-axle **vs** add a front e-axle (onboard AWD) **vs** lean on the toad for all off-road.
- **[FORK] Winter heat / genset:** keep the **diesel CHP** vs delete it for warm-climate builds (bigger battery only) vs an **alt fuel** (methanol / fuel cell) — and is it a tier option?
- **[FORK] Reference build order:** build **Signature first** (thesis demonstrator, content) vs **Standard first** (the replicable, sellable one).
- **[FORK] Chemistry roadmap:** sodium-CTP (baseline) vs LFP-blade (proven/denser) **now**, and **when** to jump to 800 V / higher-density later (V2-headroom).
- **[FORK] Business model:** pure open-source (plans only) vs **kits** vs **turnkey builds** vs a co-op/shop (Mutiny-style) — and the revenue (content, kits, consulting, licensing).
- **[FORK] Water closure:** how closed is the loop really — brine/greywater disposal, is atmospheric-water-generation worth it, drinking-water strategy.
- **[FORK] Toad:** spec the towed 4WD (which vehicle), hitch + charging integration, or drop it for AWD-onboard builds.
- **[FORK] Manufacturing:** roboformed bespoke pack shell (Machina-style) vs simpler weldment; who fabricates; DIY-buildability vs shop-built.

## 4. Validation & verification (the "is it real" list)
- **[LATER]** Real CFD / wind-tunnel (Cd); structural **FEA** on the pack + rocker; **crash/rollover** sim (SPCV path); thermal-model validation; energy-model vs a real logged week; a **hydro grow trial** (yields, DLI, nutrient/sodium drift); the slide-mechanism cycle/life test + seal.

## 5. Business / open-source / content
- **[SOON]** Complete build docs + **per-tier BOM**; the **"vs RV" durability + TCO one-pager**; TAM/SAM per persona; supplier outreach (gated on channel reach); the **Mutiny Motors** collaboration; the Divergent Futures org page/README; content flywheel (do-the-math-for-everyone series).

## 6. Wildcards / blue-sky
- **[BLUE-SKY]** Any driver-assist/autonomy? (probably no, but flag); pets / 4-occupant / accessibility variants; end-of-life circularity + repairability index; a "sleeps-4 family" layout fork; extreme-cold (Arctic) vs desert build variants; grid-services (V2G/V2H) when parked; a smaller/shorter model + a longer model (the platform scaling curve, §6b).

## 7. Modular configurator — "choose your own adventure" (TJ, 2026-07-03)
The productization model: **maximize the number of branches** and let builders pick. GitHub carries many option-branches; a **downloadable HTML configurator** (prototype: `House_BUS_Configurator.html`) lets people toggle what they want — like a car configurator. Every option is a real design fork we spec once and anyone composes.

**Option branches (live in the configurator):**
- **Battery tier** — Entry/Mid/High (100/200/300 mi).
- **Chemistry** — sodium (safe baseline) vs LFP blade (denser).
- **Drivetrain** — RWD (+ toad) vs **AWD / Overlander** (front e-axle for Utah-style off-road, no toad needed; more rugged).
- **Bathroom** — Standard vs Signature (transforming grow-shower).
- **Winter heat (CHP)** — **agnostic bolt-in**: none / 3.5 kW / 5 kW. *Not necessary* — for cold-climate (Canada/Alaska/Siberia, ~6 cold months you'll want the extra energy; likely grid-tied too). The **exhaust routes through an onboard heat-exchanger inside the side cabinet** (quiet, no rattle) via an attachment, then out the bottom/side. Heat is the product.
- **Rear hardpoints / towing** — **design the hitch + hardpoints in from the start**: none / bike rack / **toy or storage trailer** / tow a 4WD toad. (Rear structure must carry tongue + hardpoint loads.)
- **Solar** — roof-fixed vs + deployable wings.
- *(future branches: slide-out extents, occupancy/layout 2 vs 4, insulation/climate package, galley loadout, accessibility.)*

## 8. Chemistry & voltage decision logic (TJ, 2026-07-03)
- **Baseline now = sodium** (non-flammable, cold-tolerant, buyable). **LFP (China/BYD blade) is great but its fire risk is still being perfected** — so sodium leads on safety.
- **Adopt LFP blade WHEN it becomes agnostic** — i.e., BYD (or others) sell the blade pack **outside their own vehicles**, or offer a **bus/skateboard platform** we can build the shell on top of. Trigger = an off-the-shelf, buildable-upon blade pack/shell exists.
- **Jump to 800 V WHEN the ecosystem is ubiquitous + cheap** — 800 V inverters, chargers, BMS, contactors, connectors all commodity-priced. Until then 400 V (V1/V2) with 800 V designed-in as headroom.

---
*Living backlog, 2026-07-03. Near-term: mass-budget refresh, energy-model (grow load), CFD rerun (A~5.7), floor-plan v0.7, Standard wet bath, lock the cell. Subsystem gaps across Structure/Thermal/Electrical/Controls/Water/Safety/Interior (Controls is the least-developed). Big FORKS: drivetrain (AWD?), winter genset (keep/delete/alt-fuel), reference build order (Signature vs Standard first), chemistry roadmap (sodium/LFP + 800V-when), business model (open-source/kits/turnkey/co-op), water closure, toad, manufacturing. Validation list = CFD/FEA/crash/thermal/energy/grow-trial/slide-life. See theoretical_branches_map.png.*
