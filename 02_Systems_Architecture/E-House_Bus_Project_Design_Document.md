# E-House Bus Project: Comprehensive Design Summary & Living Planning Document

**Version:** 1.0  
**Date:** June 25, 2026  
**Status:** Initial detailed compilation from project kickoff discussion  
**Maintainers:** Terence (@humansinspace) + AI collaboration  
**Purpose:** This is our central reference document for the 25-30 ft battery-electric house bus (E-House) conversion or ground-up build. It captures the full vision, technical architecture, component recommendations, engineering considerations, sourcing leads, and next steps. We will iterate on this file as we source parts, run calculations, create diagrams, test subsystems, and refine the design. All decisions prioritize **extreme efficiency**, reliability in a mobile environment, modularity, and self-sufficiency (kitchen, shower, hydroponics, storage, long-range travel).

---

## 1. Project Vision & Core Goals

We are designing a highly capable, long-range (300 miles), extremely efficient battery-electric "E-House" bus that functions as a comfortable tiny home on wheels while being a proper EV. Key enablers:
- Modern **48V low-voltage architecture** for the house systems (finally practical at scale thanks to TE Connectivity's new 48V connector portfolio).
- **400V high-voltage propulsion** for power density and efficiency.
- Integrated everything: propulsion + house loads + thermal management + water/hydroponics + maximum solar.
- Full off-grid capability with reticulated (pressurized/on-demand) water, full kitchen, extensive storage, and productive hydroponics using "spare" water.
- Future-proof, maintainable, and upgradable (modular battery, zonal wiring, open control software).

**Target Specifications (Midpoint for Planning)**
- **Length**: 27 ft (balances interior space, aerodynamics, parking/turning radius, and chassis availability).
- **Curb Weight Target**: < 10,000–11,000 lbs (critical for efficiency and handling; achieved via lightweight body if ground-up, strategic battery placement, and efficient components).
- **Range**: 300 miles real-world at 55–65 mph highway cruise + 20% reserve. Efficiency target: **≥ 2.0 mi/kWh** overall (aero + low rolling resistance + efficient accessories + regen).
- **Top Speed / Gradeability**: Adequate for highway passing and mountain grades (150+ kW peak power).
- **House Power**: Primary **48V DC** bus for lights, pumps, controls, fridge, fans, hydroponics, and some heating. **110–120V AC** pure sine via inverter(s) for induction cooktop, microwave, power tools, etc.
- **Charging**: NACS (Tesla-compatible DC fast charging) as primary inlet. MCS (Megawatt Charging System) capable or adapter-ready for future heavy-duty infrastructure.
- **Key Features**: Full kitchen, reticulated shower (on-demand pressurized), integrated single-loop thermal management (battery + cabin HVAC + cooling), hydroponic growing system, tons of storage (under-bed, overhead, dedicated pantry/gear lockers), extensive roof + deployable solar.
- **Build Approach**: Flexible — strong preference for school bus conversion (cost-effective shell + proven structure) or ground-up on a modern EV chassis/skateboard (e.g., Rivian-derived or custom). Decision point early in process.

This project has been years in conceptual development; the recent availability of robust **TE 48V connectors** (HALVONEX high-power series, Heavy Duty Sealed, mixed signal/power families) removes the last major barrier to a clean, high-current, vibration-proof 48V house architecture.

---

## 2. Electrical Architecture (The Foundation)

### High-Level Power Flow
- **400V HV DC Bus** (propulsion priority):
  - Main traction battery pack (LFP chemistry, ~150–180 kWh total, 80% usable DoD recommended for longevity).
  - Motor + inverter (direct 400V).
  - High-power DC-DC converter(s) stepping down to 48V house bus (isolated, bidirectional preferred for flexibility).
  - NACS (and future MCS) charge port → onboard charger or direct HV DC charging path.

- **48V LV DC Bus** (house + auxiliary priority):
  - Powers: LED lighting, water pumps (shower + hydro), circulation pumps (thermal loop), fans, hydroponic air stones/dosers, fridge/freezer compressors (DC models), control electronics, some small heaters, and future accessories.
  - Fed primarily from solar MPPT controllers + DC-DC from 400V pack + optional secondary DC-DC from 12V starter/aux if retained.
  - Central Power Distribution Module (PDM) or fuse/relay box with contactors for safety and load shedding.

- **110–120V AC Bus**:
  - Pure sine wave inverter(s) (e.g., Victron MultiPlus-II 48V input, 3–5 kW continuous with high surge).
  - For legacy household appliances: induction cooktop (resistive, clean), microwave, coffee maker, power tools, laptop chargers, etc.
  - Auto-transfer switch for shore power when available.

**Why 48V for the House Side?**  
At 48V you deliver the same power with roughly 1/4 the current of a 12V system. Result: dramatically thinner cables (less copper weight, less I²R heat loss, easier routing in a bus chassis), lower voltage drop over long runs, and now — thanks to TE — industrial-grade sealed, high-current, vibration-resistant connectors purpose-built for exactly this transition in automotive, commercial vehicle, and off-highway applications. This is the "final piece of the puzzle" that makes the entire 48V house vision clean and reliable.

### TE Connectivity 48V Connector Strategy (Critical Enabler)
TE has developed a full **48V Ready portfolio** specifically to support the industry shift from 12V to 48V architectures. These connectors meet strict creepage and clearance requirements (per DIN EN 60664-1) to prevent arcing, are sealed for harsh mobile environments, and support the wire gauges needed for high-power house loads.

**Recommended TE Families for This Build**:
- **HALVONEX Connector Series** (High-Power Backbone): Sealed 48V power connectors, IP67/IP69K, up to **400A**, supports 50–95 mm² (or larger) wire, -40°C to +120°C, 1–2 positions, 90°/180° options. Ideal for main 48V distribution from battery/DC-DC to PDM, high-power HVAC compressor, large pumps, and backbone feeds. Extremely robust for bus/truck vibration and road spray.
- **Heavy Duty Sealed Connector Series**: IP67/IP69K, slide-lock, designed for trucks, buses, construction, and agriculture. Excellent for chassis-level connections exposed to elements. Supports AMP MCP terminals; multiple cavity arrangements (2–18 pins). Vibration and mechanical stress rated.
- **48V Ready Mixed (Signal + Power) Connectors**: Hybrid/modular solutions combining power pins with signal/data pins in one housing. Perfect for "smart" subsystems — e.g., hydroponic pump + level/EC/pH sensors, thermal loop valves + temp sensors, HVAC blower + control signals. Reduces connector count and harness complexity (zonal architecture friendly).
- **Specific Tab Sizes for Power Branches**:
  - 9.5 mm or 12 mm tabs (MCON / AMP MCP families): Up to ~70–179 A depending on derating and wire size.
  - 6.3 mm tabs: Good balance for medium loads (pumps, fans, fridge).
  - Smaller (1.2–2.8 mm): Low-power sensors, controls, lighting.
- **IPT Termination System**: Bolt-down high-power terminals up to 120 mm² wire and 400 A — useful for battery pack internal connections or main bus bars.

**Benefits in Practice**:
- Reduced overall harness weight and volume (thinner wires).
- Lower power losses and heat.
- Plug-and-play maintenance/repairs with keyed, color-coded, environmentally sealed connectors.
- Future-proof for zonal E/E architectures (power + CAN/LIN + sensors in single connectors).
- Proven in commercial vehicle and off-highway environments — directly applicable to a house bus that will see vibration, temperature swings, and occasional road spray.

**Wiring Philosophy**: Zonal or star topology from a central, accessible PDM. All 48V circuits fused or breaker-protected. Proper strain relief, grommets through bulkheads, and EMI shielding where needed (especially near motor/inverter). Full harness documentation (wire gauge, color code, from-to, connector part numbers) will live in this document or linked appendices.

---

## 3. Propulsion & Drivetrain (400V HV Focus)

**Requirements**: ~150–200 kW peak for confident highway merging/passing and grades; ~70–90 kW continuous for efficient 60 mph cruise. High regen capability for efficiency and brake life. Single-speed reduction for simplicity and reliability.

**Recommended Approach**:
- **Motor**: Axial-flux permanent magnet (high power density, compact, excellent efficiency >95%, strong regen). Examples: Equipmake HTM series or similar high-torque EV motors. Alternative: ABB or other bus-optimized units.
- **Inverter/Controller**: Liquid-cooled, 400V-class, CAN bus enabled (Curtis, Sevcon Gen5, or open-source friendly options). Easy integration with custom control code.
- **Driveline**: Direct drive or single reduction gearbox + portal or conventional axle. Consider Dana or Meritor EV-ready axles for bus applications. Portal axles if extra ground clearance desired for boondocking.

**Rough Efficiency Math (for 300-mile target)**:
- At 2.0 mi/kWh → 150 kWh usable needed.
- Add 20% buffer + house loads during travel + aging → target **~180 kWh total pack capacity**.
- Aero drag is the dominant highway loss; rolling resistance secondary. Target Cd < 0.28 (teardrop nose, smooth underbody, wheel skirts, tapered rear). Low rolling resistance EV tires (e.g., Michelin Pilot Sport EV or e.Primacy equivalents in bus sizes).

**Sourcing Leads (Ballpark 2025–2026 pricing; obtain current quotes)**:
- Motor + Inverter combo: $15k–25k range.
- Axle/gearbox: $6k–12k.
- Full propulsion integration (including mounts, cooling, half-shafts/CV joints if conversion): Budget $25k–40k total.

**Control Coding Note**: Motor controller typically speaks CAN. We can use a Raspberry Pi + Python (python-can + PyVESC or custom libraries) or dedicated VCU for torque mapping, regen curves optimized for efficiency vs. one-pedal feel, and thermal derating.

---

## 4. Battery Pack & Power Management

**Chemistry**: LFP (LiFePO4) prismatic cells — safest for a living space (very low thermal runaway risk), long cycle life, tolerant of partial SOC, good value.
**Configuration**: ~400V nominal string (e.g., 120–125 series cells at 3.2 V nominal). Modular 16s or similar blocks for serviceability and thermal management.
**Capacity**: 180 kWh total / ~144 kWh usable (80% DoD) → supports 300 miles + healthy house loads + margin.
**BMS**: Active balancing, cell-level monitoring, CAN output, Bluetooth/app for diagnostics. Options: REC BMS, Orion BMS, or Victron-compatible smart BMS. Integrate with central controller for SOC, SOH, temp limits, and contactor control.
**48V Interface**: Isolated DC-DC converter(s) from 400V pack to 48V bus (e.g., Victron Orion XS or similar high-efficiency units, 3–5 kW+). Bidirectional capability allows 48V solar to assist propulsion charging if desired (future feature).
**Safety Features**: Multiple contactors (main + pre-charge), insulation monitoring device (IMD), fuses/breakers at pack level, temperature sensors throughout, fire suppression integration (aerosol or clean agent), and robust enclosure (vented or sealed with pressure relief as appropriate for LFP).

**Placement**: Lowest possible CG, centered or slightly forward of axle centerline for balance. Modular trays that can be removed for service or capacity upgrades. Active liquid cooling/heating via the integrated thermal loop.

**Sourcing**: CATL, EVE, or equivalent UL-listed 280–300+ Ah prismatic cells. Full pack assembly can be DIY modular or turnkey from specialists (BigBattery, etc.). Budget $20k–35k for cells + BMS + enclosure + bus bars + cooling hardware.

---

## 5. House Systems & Appliances (48V + 110V Hybrid)

**Kitchen**: Compact but capable — induction cooktop (Duxtop or similar 1800W, 110V), sink with reticulated water, under-counter fridge/freezer (prefer 48V DC compressor models like Engel, Nova Kool, or Dometic CRX series for efficiency — ~40–60 W average draw), microwave/convection (110V), pantry storage, and prep space. Exhaust fan (48V) with grease filter.

**Shower & Bath**: Reticulated/on-demand pressurized water (Shurflo or similar 48V pump, 2–5 GPM adjustable). Instant water heater (48V DC or 110V tankless, e.g., Eccotemp). Greywater capture for hydroponics or treatment. Compact wet bath or dry bath layout. 40–60 gal fresh water tank + 20 gal grey.

**Storage**: "Tons of storage" — under-bed drawers (full-width), overhead lockers, dedicated gear/garage area at rear or slide-out, vertical pantry, exterior access compartments for tools/hydro supplies. Maximize vertical space with mezzanine or high-roof conversion if starting from school bus.

**Lighting & Controls**: All LED, 48V native where possible. Dimmable, zoned. Motion or door switches. Central touchscreen or app control.

**Load Management (Coding)**: Raspberry Pi or similar runs priority-based load shedding script. Example logic:
- If SOC < 30% → disable non-critical loads (hydroponic lights/pumps, secondary fans) first.
- Thermal loop and fridge always protected until very low SOC.
- Solar input prioritized for house bus charging.

**Inverter**: Victron MultiPlus-II 48/3000 or 48/5000 (or Quattro for more features). High surge rating for induction/microwave startup. Built-in transfer switch and battery charger functionality.

---

## 6. Integrated Thermal Management (Single Loop — Major Efficiency Win)

One closed glycol/water loop serves multiple masters:
- Battery cold plates / heat exchangers (maintain 15–30°C optimal for LFP).
- Cabin HVAC (heat pump mode for heating and cooling, ~8–12k BTU target).
- Possible integration with fridge/freezer condenser or a shared chiller.

**Components**:
- EV-grade electric compressor (Sanden or equivalent, 400V or 48V driven).
- Heat exchangers, expansion valve(s), reversing valve for heat pump.
- 48V variable-speed coolant pumps (Davies Craig or equivalent ECM).
- PTC auxiliary heaters (48V) for cold-weather cabin boost or battery preconditioning.
- Radiator + fan (or shared with propulsion if applicable) for heat rejection.

**Benefits**: 15–25% energy savings vs. separate systems. Waste heat from battery/motor can preheat cabin or domestic water in winter. Precise PID control via central software. Single fluid, fewer pumps, simpler plumbing.

**Engineering Note**: Model flow rates, pressure drops, and delta-T using Python/SymPy or simple spreadsheet. Target <5°C temperature difference across critical components. Include bypass valves and sensors at key points.

---

## 7. Water System & Hydroponics (Recirculating Efficiency)

**Fresh Water**: 40–60 gallon potable tank with level sensor. 48V pump for reticulated pressure to kitchen + shower. Inline filter/UV for safety.

**Greywater**: Capture from shower/kitchen sink → coarse filter → storage → UV/RO or advanced treatment → hydroponic reservoir. 95%+ water reuse goal.

**Hydroponic System**: Compact, high-yield setup for fresh herbs, greens, microgreens, and possibly small fruiting plants. Uses "spare" recirculated greywater + minimal fresh top-up. 
- Recommended: Recirculating Deep Water Culture (RDWC) or Nutrient Film Technique (NFT) channels/wall-mounted.
- 4–8 growing sites initially.
- 48V air pump + stones for oxygenation, recirculation pump (low wattage), pH/EC auto-doser or manual monitoring, full-spectrum LED grow lights (48V or efficient 110V via inverter, dimmable, ~100–200W total).
- Expected yield: Several pounds of produce per month with good management — meaningful supplement for long trips or off-grid living.
- Reservoir: 15–30 gallons dedicated, with overflow protection and easy drain/clean.

**Integration**: Hydroponics runs on 48V bus with its own fused circuit and priority in load-shed logic (can be throttled). Sensors (water level, EC, pH, temp) feed into central controller for alerts/automation. Easy-access location (perhaps a dedicated "green wall" or under-counter module).

---

## 8. Solar Power & Energy Harvesting (Maximum Roof Utilization)

**Fixed Roof Array**: 1.0–1.5 kW of high-efficiency flexible or semi-flexible panels (Renogy, SunPower, or similar walkable-rated). Mounted flat or low-profile on reinforced roof. MPPT charge controllers (Victron SmartSolar) feeding the 48V bus directly — highest efficiency path.

**Deployable / Slide-Out Array**: 600–1000 W additional capacity on a motorized or manual awning-style slide-out or folding mechanism. Deploys when parked for maximum harvest (doubles or triples daily yield in good sun). Xponent-style or custom DIY with linear actuators + robust hinges. Important for boondocking and extended off-grid stays.

**Expected Yield**: 4–8+ kWh/day average depending on location, season, and deployment. Covers 30–70% of typical house loads (fridge, lights, pumps, hydro, fans) plus battery top-up. In sunny climates or with good parking orientation, can be near net-zero for house systems.

**Integration**: All solar → 48V bus via MPPT. Central controller monitors production vs. consumption and SOC. Future option: motorized tilt or sun-tracking on the slide-out for even higher yield.

---

## 9. Software, Controls, Monitoring & Coding Design

**Central Brain**: Raspberry Pi 5 (or industrial equivalent) + touchscreen dashboard running a mix of:
- Home Assistant (or similar) for high-level automation, UI, and integrations.
- Custom Python/C++ services for real-time vehicle functions (CAN handling, thermal PID loops, load shedding, safety interlocks).
- Victron VRM or Cerbo GX for power system visibility (already excellent CAN/Bluetooth ecosystem).

**Key Integrations (all via CAN bus where possible)**:
- Motor controller / VCU
- BMS (SOC, cell temps, contactors)
- Solar MPPTs
- Thermal management valves, pumps, compressor
- 48V PDM / load shedding relays
- Water level, hydro EC/pH/temp sensors
- GPS + accelerometer for efficiency logging and range prediction

**Dashboard Features** (web or local touchscreen):
- Live SOC, range estimate (incorporating current load + predicted aero/grade), solar production, consumption breakdown.
- Thermal loop status (battery temp, cabin setpoint, heat pump mode).
- Hydroponic parameters + automation schedule.
- Alerts (low SOC, high temp, water level, system faults).
- Historical graphs and efficiency logs (exportable for analysis).

**Automation Examples**:
- Precondition battery/cabin while plugged in or on solar.
- Night-time hydroponic lighting schedule optimized for plant needs and available solar.
- Automatic load priority: propulsion/house critical loads protected; discretionary loads (extra lights, non-essential hydro) shed first.
- Regen mapping tuned for one-pedal driving feel while maximizing energy recovery.

**Safety & Redundancy**: Watchdog timers, redundant contactors, manual overrides, insulation monitoring, and clear fault codes. All code version-controlled (Git) with documented SOPs.

This software layer turns the bus into a smart, self-optimizing system — AI-augmented where helpful (e.g., predictive range, anomaly detection) but always with human oversight and manual fallback.

---

## 10. Vehicle Layout, Structure, Aerodynamics & Practical Considerations

**Suggested Floorplan (27 ft)**:
- Front: Driver area + small lounge/dinette (convertible).
- Mid: Full kitchen (counter, sink, induction, fridge/freezer) + wet/dry bath with reticulated shower.
- Rear: Bedroom (fixed or convertible bed) + extensive storage / hydroponic green wall + mechanical room access (battery, thermal loop, water tanks, inverter, PDM).
- Roof: Fixed solar + deployable slide-out array.
- Possible slide-outs or pop-tops for extra interior space when parked (adds complexity/weight — evaluate carefully).

**Structure**:
- **Conversion route**: Strip used school bus (Blue Bird, Thomas, etc.) to shell, reinforce floor/roof as needed for battery/solar, add insulation (closed-cell foam + vapor barrier), new windows/doors if desired, custom interior framing.
- **Ground-up route**: Custom composite or aluminum body on EV skateboard chassis (lighter, better aero/handling, more design freedom). Higher cost and engineering effort.

**Aerodynamics**: Critical for 300-mile range. Smooth nose (or faired school bus front), underbody panels, wheel skirts, tapered rear, minimal protrusions. Target Cd 0.25–0.30. Future CFD or wind-tunnel validation.

**Weight & Handling**: Battery mass low and central. Proper weight distribution (scale all corners). Suspension upgrades (air ride desirable for comfort and leveling). Tires: low rolling resistance EV-rated in appropriate load/speed rating.

**Other Practical**:
- Insulation (walls, floor, roof, windows) for thermal efficiency and condensation control.
- Sound deadening + vibration isolation for pumps, fans, and road noise (bus conversions can be noisy otherwise).
- Exterior storage/garage for bikes, tools, recovery gear.
- Leveling system (manual or auto) for boondocking and hydroponic stability.

---

## 11. Bill of Materials (High-Level Summary) & Rough Budget

**Major Categories (Ballpark USD, 2025–2026 pricing — get fresh quotes)**:
- Base vehicle/shell or custom chassis: $8k–30k (used school bus vs. new EV platform).
- Propulsion (motor, inverter, axle, cooling, mounts): $20k–40k.
- Battery pack (180 kWh LFP + BMS + enclosure + cooling plates + contactors): $25k–40k.
- Power electronics (DC-DC converters, 48V PDM/fusing, Victron inverter/chargers/MPPTs): $4k–8k.
- TE Connectors & full wiring harness materials: $1.5k–4k (HALVONEX high-power pairs, Heavy Duty Sealed, mixed families, terminals, wire, looms, strain relief).
- Thermal management loop (compressor, heat exchangers, pumps, valves, glycol, controls): $2.5k–5k.
- House appliances (fridge/freezer, induction, water heater, pumps, lights, fixtures): $2k–4k.
- Water & hydroponics (tanks, pumps, filters, RDWC/NFT system, LEDs, sensors, dosers): $1k–2.5k.
- Solar (fixed + deployable arrays, mounts, MPPTs): $2k–5k.
- Interior build (insulation, flooring, cabinetry, storage, shower, kitchen, upholstery): $8k–20k (DIY vs. professional).
- Controls/software hardware (Pi, touchscreen, sensors, CAN interfaces): $500–1.5k.
- Misc (tools, fasteners, safety gear, testing equipment, contingencies): $5k+.

**Total Estimated Build Cost**: $120k–180k+ depending on new/used base, DIY labor intensity, and upgrade level. Phased build possible (propulsion + battery first for drivable platform, then house systems).

**Sourcing Strategy**:
- Cells & major power electronics: Direct from manufacturers or specialists (UL-listed where possible).
- TE Connectors: TE.com, Mouser, DigiKey, or authorized distributors. Request samples of HALVONEX and Heavy Duty Sealed series early.
- Victron ecosystem: Strong recommendation for reliability and integration (marine/RV/off-grid proven).
- Local fabrication: Custom brackets, bus bars, interior cabinetry, solar mounts.
- Used market: School bus shells, EV components from salvage/auctions (with caution on condition/warranty).

---

## 12. Engineering Challenges, Risks & Mitigation

- **Weight & CG**: Battery is heavy — model in CAD early. Use lightweight materials elsewhere.
- **Vibration & Durability**: Everything must survive road use. TE connectors + proper harnessing + isolation mounts are key. Test subsystems on vibration table or rough-road shakedowns.
- **Thermal Extremes**: Design loop and insulation for -20°F to 110°F+ ambient. Preconditioning and active management essential.
- **Efficiency Reality**: Real-world range depends heavily on speed, wind, grade, temperature, and accessory load. Build in generous margins and logging for continuous improvement.
- **Regulatory/Title**: Converted bus may have specific FMVSS, state registration (RV vs. custom vehicle), and electrical inspection requirements. Research early for your jurisdiction (CT/NY area + travel states).
- **Complexity Creep**: Start simple (core propulsion + 48V distribution + basic house) and layer on hydroponics, advanced automation, etc.
- **Safety**: High voltage, high current, water + electricity, lithium (even LFP), propane alternative (induction), and living space. Multiple layers of protection + clear documentation.

---

## 13. Next Steps & Immediate Action Items

1. **Decide Build Path** — Conversion vs. ground-up. Pros/cons discussion + rough timeline/budget.
2. **Base Vehicle Research** — Identify specific school bus models/years available locally or shippable. Or explore EV chassis options.
3. **Detailed Layout & CAD** — Create scale floorplan + 3D model (Fusion 360, Onshape, or similar). Include battery trays, water tanks, thermal loop routing, solar mounts, and storage.
4. **Battery Pack Detailed Design** — Cell configuration, cooling plate layout, BMS selection, enclosure specs.
5. **TE Connector Deep Dive** — Download datasheets for HALVONEX, Heavy Duty Sealed, and mixed families. Request samples/quotes. Map every 48V circuit to specific connector part numbers.
6. **Power System Modeling** — Simple spreadsheet or Python script for load analysis, solar yield by location/season, and range vs. speed/efficiency curves.
7. **Thermal Loop Simulation** — Basic model of flow rates, heat loads, and component sizing.
8. **Hydroponic Prototype** — Small-scale bench test of RDWC/NFT + greywater integration + sensor automation.
9. **Vendor Outreach** — Victron system quote, motor/inverter options, TE samples, cell pricing.
10. **Living Document Updates** — Add wiring diagrams (as images or text), detailed BOM with part numbers, CAD screenshots, test results, and decision logs to this file.

---

## 14. Open Questions & Discussion Points

- Preferred starting point: Specific length within 25–30 ft? Any non-negotiable layout features (e.g., dedicated office nook, larger shower, exterior kitchen hatch)?
- Budget reality or phased approach preference?
- Any brand lock-ins or strong preferences (Victron ecosystem? Specific motor supplier?)?
- Build location / shop access / help available (CT area)?
- Timeline goals (e.g., drivable prototype by certain date, full self-sufficient by X)?
- Interest in adding specific capabilities later (e.g., Starlink integration, advanced watermaker, off-road capable suspension, trailer tow package)?

---

**This document is now our single source of truth for the E-House Bus project.** Everything we have discussed — the 400V/48V architecture, TE connectors as the enabling technology, propulsion sizing, battery strategy, integrated thermal loop, reticulated water + hydroponics, max solar (roof + slide-out), full kitchen/storage, control software, and sourcing/engineering considerations — is captured here in actionable detail.

We can expand any section, add diagrams/images, insert vendor quotes, or create appendices (e.g., full connector pinouts, wire schedule, Python load-shedding script examples) as we progress. Just say the word on what to tackle next.

**What fires you up most right now?**  
- Diving deeper into the TE HALVONEX / 48V harness design and creating a sample circuit map?  
- Battery pack mechanical/thermal layout?  
- Solar deploy mechanism concepts (with possible CAD or image generation)?  
- Hydroponic system specifics and greywater integration?  
- Propulsion math and motor options with real quotes?  
- Or something else entirely (layout sketches, cost spreadsheet, regulatory checklist)?

I'm ready to keep building this with you — part by part, decision by decision. Let's make this E-House Bus a reality. 🚀

---

*Changelog*  
- v1.0 (2026-06-25): Initial comprehensive compilation from kickoff discussion, expanded with TE connector research and full system breakdowns. Ready for iterative updates.