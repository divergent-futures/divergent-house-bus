# House BUS — Master Index & Reconciliation

**Compiled:** 2026-06-25 · **Owner:** TJ (@humansinspace) · **Umbrella:** Divergent Futures
**Open source:** public repo `divergent-house-bus` — hybrid license (CERN-OHL-S-2.0 hardware / MIT code / CC-BY-4.0 docs). See `README.md`, `LICENSE.md`. A ready-to-push `divergent-house-bus.bundle` and `.zip` are in this folder.
**Status:** Living index. Folds the nine source documents together with the three starter deliverables and flags what's locked, what conflicts, and what needs deciding.

---

## 1. What this project is (consolidated)

A full-time, four-season, **all-electric self-moving dwelling** — "the thing that comes after the RV and the tiny house." Not a camper you return home from; the bus *is* the home. It carries a personal goal (a dwelling the operator and his wife actually want to live in) and a Divergent Futures thesis (*decoupling the dwelling from the land*) at the same time. The engineering signature is **integration over invention**: one structural battery, one thermal loop, closed-loop water, and waste-heat reuse, amalgamating technologies that exist separately but have never been tied together.

The build philosophy mirrors HABITAT: prove the integrated concept on a converted **school bus (V1 prototype)**, then carry the validated architecture into a purpose-built **ground-up vehicle (V2)**.

---

## 2. Folder index — where everything lives

| Folder | Contents now |
|---|---|
| `01_Roadmap_and_Strategy` | `House_BUS_Thesis_v1.0.md` (**canonical portable thesis snapshot** — drop into other projects for reference) · `house-bus-concept-v0_1.md` (original concept anchor) · `PROJECT-SLIPSTREAM-Prototype-Roadmap.md` (separate sibling project — see §6) · `House_BUS_Master_Roadmap.docx` (roadmap v0.2, locked) · `House_BUS_Gap_Analysis.docx` · `House_BUS_Design_Decisions_Log.docx` · `House_BUS_Feasibility_Assay.md` |
| `02_Systems_Architecture` | `E-House_Bus_Project_Design_Document.md` (central reference) · `E-House_Bus_Conversion_Planning_Summary.md` (TMS / HV evolution) · `House_BUS_Systems_Architecture.docx` (starter architecture) |
| `03_Electrical_Battery_Solar` | `E-House_Bus_Structural_Battery_Pack_Design_Summary.md` · `e-house-bus-solar-power-thermal-plan.md` |
| `04_Thermal_HeatPump_Coolant_CHP` | `E_House_Bus_Sleep8_Bed_Climate_Control_Plan.md` (climate-bed on the shared loop) |
| `05_Energy_and_Thermal_Models` | `House_BUS_Energy_Model.xlsx` (starter model) |
| `07_Interior_and_Habitability` | `EHouse_Bus_Closed_Loop_Shower_System_Design.md` · `E-House_Bus_Composting_System_Brainstorm.md` · `e-house-bus-composter-design-premise.md` |
| `00_Admin_Budget_Schedule` | `House_BUS_Mass_Budget.xlsx` (component mass tally, payload & GVWR check) |
| `11_Suppliers_BOM_Procurement` | `House_BUS_BOM.xlsx` (v0.1 BOM + cost ranges) · `Sourcing_Strategy_ThreeTier.md` (build-ourselves / low-end-China / high-end per subsystem; range & sizing rationale) · `House_BUS_EAxle_Sourcing.xlsx` (e-axle candidate tracker, tiered) |
| `12_Reference_and_Research` | `House_BUS_Research_and_Validation_v0.1.md` (confirmation-phase: efficiency, thermal, heat-scavenging products, e-axles, sourced + cited) |
| `06, 08–14` | Empty — ready for chassis, controls/software, build logs, testing, BOM, research, V2, and an inbox. |

---

## 3. The current architecture, as the documents describe it

**Energy core.** A single **structural high-voltage traction battery** is the only energy reservoir — it drives the bus *and* runs the house, eliminating a separate house bank. Latest docs converge on **~300 kWh LFP Blade cells** acting as the chassis spine (battery-as-structure) with a **48 V DC house bus** stepped down once via a 5–10 kW DC-DC converter. The 48 V house side is locked (TE Connectivity's 48 V connector portfolio is treated as the enabling technology). A small **110/120 V AC inverter** (3–6 kW) covers only the few legacy loads.

**Propulsion.** Full battery-electric drivetrain: single e-axle (~200–250 kW), ~300-mile target range, NACS + MCS charging, aero + adjustable air suspension. This is core identity, not optional.

**Thermal — the integration heart.** One closed glycol loop, Tesla-Octovalve-style multi-port routing, serving cabin HVAC (heat pump), battery conditioning, fridge/freezer, **domestic hot water from compressor waste heat**, a ventless heat-pump dryer, and even a **climate-controlled "Sleep 8"-style bed** tapped off the same loop. A **CHP genset** is the affirmed winter/off-grid backstop — its waste heat is the product, not a loss.

**Water & loops.** Closed-loop recirculating shower (85–95% reuse, ~10–15 gal total inventory), AC condensate / AWG as a near-distilled water source for hydroponics, urine-diverting composting toilet / electric food recycler, greywater to hydroponics. Bounded honestly as a *demonstrator + fresh greens*, not food self-sufficiency.

**Controls.** Linux host (Python, CAN bus) + optional Windows VM, Raspberry Pi/ESP32 edge nodes, Home Assistant, Victron VRM. Priority-based load shedding with a protected **drive-reserve floor**.

---

## 4. Decisions — now LOCKED (TJ, 2026-06-25)

| # | Decision | Locked value | Rationale |
|---|---|---|---|
| D1 | **Pack voltage** | **400 V for V1** (mature; matches industrial 400/600 V thermal/compressor gear via DC-DC, no AC inversion). **800 V = V2/future** (~5–7 yrs to maturity; thinner HV cable). | 400 V trades ~2× HV current for availability + off-the-shelf-compressor compatibility. *Updated 2026-06-29, revising the earlier 800 V-first call.* |
| D2 | **Battery capacity** | **~300 kWh**, structural — **sodium-ion floor** of the bus by build time | 300 kWh is far less LFP volume/cost in ~18 mo; sodium pack expected at similar weight, forming the entire structural floor. |
| D3 | **Vehicle length** | **25–27 ft**, with **slide-outs** to gain interior space | National-park entrances and tight places (e.g. South America). Slide-out thermal bridging is accepted because deep-winter living is out of scope. |
| D4 | **Build path** | **Slipstream first** (learning trailer) → bus is effectively "version two" | Low-cost way to test shared components and learn lessons before committing to the bus. |
| D5 | **Winter use** | **Occasional (ski weekends)**, not full-time cold living | Run the diesel CHP genset to hold heat for short cold stays. |
| D6 | **Genset** | **3.5 kW diesel CHP** — heat fed to battery reservoir + cabin via the Octovalve cooling loop | Combined heat & power; the heat is the winter product. |
| D7 | **Occupancy** | **2 full-time** (squeeze to **4** with kids) | Sizes water, beds, loads. |

Foundational items also locked from the strategy doc: all-electric closed-loop dwelling; single shared structural traction pack (no separate house battery); 48 V house bus; towed all-electric 4WD ("toad") for park access; integrated thermal loop as the efficiency engine.

**Correction applied to the starter roadmap:** it had suggested deferring EV drive for V1. That's reversed — **full battery-electric propulsion is core identity**. "Delete the diesel" = full EV drivetrain (the only liquid fuel aboard is for the small winter CHP genset).

---

## 5. How the three starter deliverables relate

The starter docs were built before these sources were available, on deliberately generic assumptions. Reconciliation:

- **`House_BUS_Systems_Architecture.docx`** — its thesis (heat is never wasted; one thermal loop feeds hot water, fridge, drying, cabin, battery) **matches your TMS / Octovalve vision well**. It generalises cleanly; mainly needs the shared-traction-pack framing and the 48 V/HV split added.
- **`House_BUS_Energy_Model.xlsx`** — **re-based (v2, 2026-06-25)** on the locked decisions: shared **300 kWh** structural pack (90% usable, 80 kWh drive-reserve floor → **190 kWh house-available**), full-amenity loads (~**10.3 kWh/day**), roof+deployable solar (**6 kW parked**), and the **3.5 kW diesel CHP** in a ski-weekend winter. Headline results: summer solar runs a **+11 kWh/day surplus**; the pack alone gives **~13 days** of winter autonomy at −10 °C, so the genset is only needed for longer/colder stays (**~2.3 h/day, ~2.6 L diesel** to hold the pack indefinitely); driving range **~245 mi**.
- **`House_BUS_Master_Roadmap.docx`** — structure (phases, gates, risks) is reusable, but it must absorb: full EV propulsion as core, the 25-vs-35 ft and 180-vs-300 kWh decisions, the toad, closed-loop water, and the Divergent Futures framing.

*Note:* "Sleep 8" refers to an **Eight Sleep-style climate-controlled bed**, not eight occupants — occupancy still reads as **2 (operator + wife)** from the concept doc. Good news: the 2-occupant basis in the energy model stands.

---

## 6. Project Slipstream — a separate, adjacent project

`PROJECT-SLIPSTREAM-Prototype-Roadmap.md` is **not the bus** — and its role is now decided: it is the **deliberate learning precursor.** A low-cost aerodynamic **electric weekend trailer towed behind a Tesla Model Y** (sleeps two, summer-only) used to test the same classes of component — LFP/sodium pack, Victron electrical, pop-up linear actuators, composting toilet, the daily solar→battery loop — on a smaller, cheaper article. The lessons learned feed forward so that by the time the bus is built, it is effectively **"version two."** Filed under `01_Roadmap_and_Strategy`.

---

## 7. Status & next moves

**Done:** D1–D7 locked (§4) · Slipstream role decided (§6) · energy model re-based to v2 (§5) · roadmap rewritten to v0.2 · architecture updated to v0.2 (heat-reuse + 800V/48V split) · gap analysis written. Condensate decided as **washing water only** (filter + UV), not drinking; ERV ventilation, Legionella disinfection cycle, and the small final-lift coil folded into the architecture; ERV + water-UV loads added to the model (summer house demand now ~15.3 kWh/day, on target).

**Gap resolutions (TJ, 2026-06-26 — see Design Decisions Log):** ventilation is **built into the cooling loop** (no standalone ERV) — HEPA-filtered fresh air ducted down the side walls inside the insulation, recovery happening in the loop; dehumidification pulls moist upper-layer air to the front (loop-shared vs dedicated TBD) + kitchen range hood; **dedicated SS drinking tank** with external potable hose inlet; **reticulating shower** (~10–15 gal, real-time filtration) with a small 3–4 kW inline booster; **egress** = front door + rear emergency hatch/window at the bed; **fire extinguishers** front & rear; **glazing** = double-layer polycarbonate + concealed insulated drop-down covers; **rainwater** = optional diverter off the roof drainage → holding tank → filter/UV; **mass** = strip 20–25% off typical-RV weight via advanced materials (carbon-fibre/aluminium replacing brute-force steel).

**Still open (deferred deliberately):** HVAC sizing to serve cabin + battery + generator together (the core integration-sizing problem); dehumidifier loop-shared vs dedicated; rainwater include-in-V1 decision; turn the 20–25% mass target into a component-by-component budget.

**Latest (2026-06-29):**
- **D1 revised to 400 V (V1).** Industrial/EV thermal gear is 400/600 V → DC-DC to the pack (no AC inversion); 800 V structural packs not yet mature. 800 V is now the V2/future target. **Consistency sweep DONE** — propagated through Electrical track (v0.2), Thesis v1.0, Thermal vetting, Thermal HVAC + granular docs, Feasibility Assay, and the Architecture **.docx** (cleaned via find-replace, since the build script is gone). Remaining "800 V" mentions are all explicit V2/future context.
- **Thermal core RESOLVED (research pass, 2026-06-29).** Answered all 5 open questions. Key findings: whole OEM units (Konvekta UltraLight 700 = 26.5 kW / ~2.1×2.7 m) are **oversized 