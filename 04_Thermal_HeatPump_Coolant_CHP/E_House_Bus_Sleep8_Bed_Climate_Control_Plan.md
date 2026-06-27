# E-House Bus Conversion Project: Climate-Controlled "Sleep 8" Bed Integration Plan

**Document Purpose:**  
This is a detailed planning reference capturing our discussion on integrating a temperature-regulated "Sleep 8" style bed into the electric E-house bus conversion (or ground-up design). The core concept is to leverage the **existing HVAC and refrigeration loop** — already responsible for cooling and heating the cabin, drivetrain, and battery systems — to deliver targeted personal climate control for optimal sleep.  

This document is structured for practical use in the project: sourcing parts, figuring out wiring, battery integration, engineering details, vehicle design considerations, coding design, and house components. It serves as a living record to guide next steps, prototyping, and decision-making.

**Created:** June 25, 2026  
**Project Focus:** Electric E-house bus — sustainable mobile living with integrated systems thinking. Every addition must justify itself in terms of efficiency, weight, complexity, and synergy with existing infrastructure.

---

## 1. Project Overview & User's Original Vision

**User's Proposal:**  
"Why not use the existing HVAC and refrigeration loop cooling and heating the cabin, the drivetrain and battery for the bed to get better sleep?"

The idea is elegant systems-level thinking: instead of bolting on a completely separate bed cooling/heating appliance (like a commercial Eight Sleep Pod or BedJet), tap into the thermal infrastructure that's already being engineered for the rest of the vehicle. This keeps added battery draw minimal and treats the bed as just another intelligently managed "house component."

**Interpretation of "Sleep 8 Type Bed":**  
A temperature-regulated sleep surface optimized for a full 8-hour rest cycle. Target surface/body temperature range is typically 60–67°F (15–19°C) for deep, restorative sleep. The system should support both cooling (critical in hot climates or summer travel) and heating (cold nights or shoulder seasons). Future extensibility could include automation tied to sleep schedules or basic sensors.

**Why This Matters in an E-House Bus:**  
- Mobile living means highly variable external conditions.  
- Cabin-wide HVAC can be overkill (and noisy) when only the sleep zone needs conditioning.  
- Battery energy is precious — targeted micro-climate control is far more efficient than conditioning the entire living volume.  
- Aligns with first-principles vehicle/house design: reuse existing loops, pumps, heat exchangers, and controls wherever possible.

---

## 2. Concept Benefits (Efficiency & Integration Wins)

- **Superior Sleep Quality:** Stable personal micro-climate reduces awakenings caused by temperature swings, especially valuable during travel or boondocking.
- **Energy Efficiency:** A dedicated bed circuit might only draw 100–300 W versus 1–2 kW+ for full cabin HVAC. With good insulation and smart controls, nightly impact on the battery bank stays very low.
- **Reduced System Complexity & Weight:** No need for a second compressor, separate refrigerant circuit, or bulky standalone unit. Fewer parts to source, mount, wire, and maintain on the road.
- **Better Battery Management:** The coding layer can prioritize or shed the bed load based on state-of-charge, driving vs. parked mode, or time-of-day rules.
- **Future-Proofing & Automation:** Easy to tie into the overall bus automation system (scheduling pre-cool/pre-heat, integration with other house loads).
- **Resilience:** The bed circuit can act as a small redundant thermal zone if the main cabin system is down or deprioritized for drivetrain/battery protection.

---

## 3. Design Options Explored

We evaluated three practical approaches for routing conditioned media from the main HVAC/refrigeration loop to the bed:

### Option 1: Air-Based Distribution
**How it works:** Extend or branch the existing HVAC ducting (or add a small dedicated diverter) to deliver conditioned air into channels or a perforated layer under/within the mattress or mattress topper. A small booster blower may be needed at the bed.

**Implementation Notes for Bus:**
- Use flexible insulated duct or perforated air-distribution fabric/mattress topper.
- Motorized damper or diverter valve to control flow without affecting main cabin performance.
- Return air path back to HVAC intake (important for closed-loop efficiency).

**Pros:** Leverages existing air handler; conceptually simpler plumbing.
**Cons:** Can introduce noise/vibration at the bed, less precise temperature control, potential dust/allergen issues, duct routing can be bulky in a bus conversion.
**Best suited if:** Your HVAC is already heavily air-based and you prefer to avoid fluid lines.

### Option 2: Fluid-Based Circulation (Strongly Recommended)
**How it works:** Tap a small side-stream from the main refrigeration loop (chilled glycol or refrigerant via a secondary heat exchanger) and circulate it through a water-circulating mattress pad or embedded channels in the bed platform using a dedicated low-flow 12 V DC pump. For heating, reverse the heat pump or use a small heat exchanger on the warm side.

**Implementation Notes for Bus:**
- Small circulation pump (peristaltic or centrifugal, quiet model preferred).
- Insulated supply/return lines with quick-connect fittings for modularity.
- Bypass valve or solenoid so the bed circuit can be isolated when not in use (protects main loop priorities).
- Heat exchanger (compact plate or tube-in-tube) to transfer thermal energy without mixing fluids if needed.

**Pros:** Highest efficiency, quietest operation, precise control, compact routing (small-diameter tubing is easier to hide in vehicle design than large ducts).
**Cons:** Requires careful plumbing, insulation, and leak management; fluid maintenance (glycol checks).
**Best suited for:** Most E-house bus builds because it directly reuses the refrigeration infrastructure you’re already installing for cabin + drivetrain + batteries. This is the cleanest integration path.

### Option 3: Hybrid (Fluid Cooling + Electric Heating)
**How it works:** Use the refrigeration loop for cooling via a small evaporator or fluid pad, but handle heating with low-voltage resistive heating elements (carbon-fiber or silicone pads) powered directly from the battery bank.

**Pros:** Simpler heating control; good fallback if the main loop is cooling-only or hard to reverse.
**Cons:** Adds dedicated heating hardware and slightly higher parts count.
**Best suited if:** Your primary HVAC is cooling-dominant and you want simple supplemental heat.

**Overall Recommendation:** Proceed with **Option 2 (Fluid-Based)** as the primary path. It best matches the "use what we already have" philosophy and minimizes new battery draw and complexity.

---

## 4. System Integration with Existing E-House Infrastructure

### Thermal Loop Integration
- **Cooling:** Tap the cold side (evaporator or post-expansion) with a secondary heat exchanger or controlled diversion of chilled fluid. A small dedicated evaporator coil under the bed is another clean option.
- **Heating:** Heat-pump reversal on the main loop (preferred) or capture waste heat from drivetrain/batteries if temperatures align. Supplemental resistive heat as backup.
- **Flow Control:** 12 V solenoid or motorized valves + check valves. The coding layer decides when to open the bed circuit.
- **Priority Logic:** Bed load is always lower priority than drivetrain and battery thermal management. Cabin comfort sits in the middle. Smart controls can pre-condition the bed while the vehicle is plugged in or has surplus solar.

### Power & Battery Considerations
- All bed components (pump, valves, controls, optional heaters) run on the main 12 V or 24 V DC house battery system.
- Expected continuous draw is low enough that it should fit comfortably within normal overnight parasitic loads.
- Integration point: Add the bed circuit to your central power distribution and BMS monitoring so you can track its contribution to daily cycling.
- Safety: Over-current protection, low-voltage disconnect logic if battery SOC drops too low during sleep mode.

### Vehicle Design & House Components Fit
- **Bed Platform:** Custom or RV-style modular queen (60 × 80 in) or king platform with generous under-bed storage for batteries, tools, water tanks, or other house utilities. Design lift-up or removable sections for service access.
- **Routing Strategy:** Run insulated tubing and wiring along existing utility corridors (walls, floor channels, ceiling) to keep the conversion clean. Plan for vibration isolation and service loops.
- **Modularity:** Quick-disconnect fittings on all thermal and electrical connections so the entire bed assembly can be removed for major maintenance or reconfiguration.
- **Weight & Balance:** Account for the small added fluid volume (~5–10 lb) and frame reinforcement in your overall vehicle weight and weight-distribution calculations (important for EV range and handling).

### Controls & Coding Design
The bed becomes one more managed subsystem in your overall E-house automation architecture.

**Hardware Suggestions:**
- Local controller: ESP32, Arduino, or Raspberry Pi (or integrate into whatever central controller you’re already planning for the bus).
- Sensors: Multiple DS18B20 digital temperature sensors (bed surface, inlet/outlet fluid, ambient cabin). Optional humidity or occupancy sensor.
- Communication: MQTT, ESPHome, or direct integration with your main bus control software for unified dashboard and automation.

**Example Control Logic (Pseudocode for Planning & Coding Implementation):**

```python
# Sleep Bed Climate Controller - High-level logic
# Runs on Pi/ESP32 or integrated into central house controller

while True:
    bed_temp = read_sensor("bed_surface_temp")
    cabin_temp = read_sensor("cabin_ambient")
    sleep_mode = get_sleep_schedule_status() or manual_override

    if sleep_mode and bed_temp > 68:
        # Cooling request
        if main_loop_has_capacity():
            open_bed_cooling_valve()
            set_pump_speed(medium)          # or variable based on delta-T
        else:
            # Fallback: reduce cabin setpoint slightly or alert
            log("Bed cooling deferred - main loop priority")
    
    elif bed_temp < 60:
        # Heating request
        if heat_pump_reversible():
            reverse_heat_pump_for_bed()
        else:
            activate_resistive_heating_pad(power_level=low_to_medium)
    
    else:
        # Within deadband - maintain idle / minimal circulation for sensor accuracy
        set_pump_speed(idle_or_off)
        close_bed_valves()

    # Safety layer (always active)
    if leak_sensor_triggered() or over_temp_detected():
        emergency_shutdown_bed_circuit()
        send_alert("Bed thermal circuit fault - check immediately")

    sleep(30)  # loop interval
```

**User Experience Features to Plan:**
- Phone/tablet app or wall-mounted touchscreen control.
- Scheduling (e.g., “pre-cool bed 30 min before bedtime”).
- Manual override + boost modes.
- Integration with overall house energy dashboard (show bed circuit’s contribution to battery drain).
- Data logging for later analysis (sleep quality vs. temperature correlation).

---

## 5. Parts Sourcing Strategy

Focus on 12 V / 24 V DC components rated for mobile/RV use, vibration resistance, and wide temperature range. Prioritize quality and serviceability for life on the road.

### Recommended Components & Sourcing Table

| Component                  | Recommended Specs                              | Est. Cost (USD) | Primary Sources                          | E-Bus Specific Notes |
|----------------------------|------------------------------------------------|-----------------|------------------------------------------|----------------------|
| Circulating Mattress Pad   | Water-circulating topper/pad (or air-perforated for Option 1) | $50–500        | Amazon, AliExpress (DIY), BedJet, RV suppliers | Breathable, washable cover; size-matched to your mattress |
| 12 V DC Circulation Pump   | Low-flow (1–5 L/min), quiet centrifugal or peristaltic | $20–80         | Amazon, March Pumps, bilge-pump equivalents | Mount on rubber isolators; continuous-duty rated |
| Control Valves             | 12 V DC solenoid or motorized ball valve, quick-connect ports | $10–30 each    | Amazon, McMaster-Carr, industrial supply | Normally-closed preferred; brass or high-quality plastic |
| Tubing & Fittings          | 1/4"–1/2" reinforced silicone, PEX, or automotive coolant hose + quick-connects | $0.50/ft + fittings | Home Depot, McMaster-Carr, plumbing suppliers | Food-grade or coolant-rated; plan extra length for service loops |
| Pipe Insulation            | Closed-cell foam (Armaflex or equivalent)     | $1–3/ft        | HVAC suppliers, Home Depot               | Mandatory on all chilled lines to prevent condensation |
| Temperature Sensors        | DS18B20 waterproof digital or IR non-contact  | $5–20          | Amazon, Adafruit, SparkFun               | Multiple sensors for redundancy and control accuracy |
| Bed Platform / Frame       | Custom welded or RV bunk frame (queen/king) with under-storage and service access | $200–600       | RecPro, eTrailer, local fab shop         | Design specifically for your bus floor plan and weight limits |
| Control Electronics        | ESP32 / Arduino + relay board or Raspberry Pi | $10–50         | Electronics suppliers, Adafruit          | Choose platform that matches your overall bus coding architecture |
| Optional Resistive Pads    | Carbon-fiber or silicone heating pads (if hybrid) | $30–100        | Amazon, specialty suppliers              | Low-wattage, even heat distribution |

**Total Budget Estimate:**  
- Basic functional fluid-based system: **$300–600**  
- Smart/automated version with good components: **$700–1,200**

**Sourcing Best Practices for This Project:**
- **Fast prototypes:** Amazon + AliExpress for initial testing.
- **Precision/engineering parts:** McMaster-Carr (excellent specs, fittings, tubing).
- **RV / vehicle-specific:** etrailer.com, RecPro, battlebornbatteries.com ecosystem.
- **Local:** HVAC supply houses for insulation, glycol, and heat-exchanger advice.
- **Salvage / used:** RV bone yards or Facebook Marketplace for frames and some components to keep conversion costs down.
- Always verify vibration rating, temperature range, and IP/water resistance for mobile use.

---

## 6. Wiring, Plumbing & Engineering Considerations

### Electrical Wiring
- **Voltage & Gauge:** 12 V or 24 V DC. Use 10–14 AWG marine/automotive grade wire depending on pump current (typically 2–5 A).
- **Protection:** Proper fusing (e.g., 10 A inline), circuit breakers, and chassis grounding. Integrate into main house electrical panel.
- **Routing:** Follow existing wire runs where possible. Use loom, conduit, or secure zip-tie methods. Keep away from high-heat zones and moving parts.
- **BMS Integration:** Monitor bed circuit current so the overall battery management system sees the true load picture.

### Plumbing / Fluid Circuit
- **Material Selection:** Coolant-rated hose or PEX; avoid cheap vinyl that becomes brittle.
- **Connections:** Push-to-connect or barb + quality hose clamps. Include service valves and drain points.
- **Insulation:** Non-negotiable on every chilled line inside the conditioned space. Condensation is the #1 enemy in a bus conversion.
- **Leak Mitigation:** Pressure-test before closing up walls/floors. Add a small drip tray or leak sensor under the bed platform with automatic shut-off logic.
- **Fluid:** Match whatever is in your main loop (typically propylene glycol/water mix). Keep volume small.

### Structural & Vehicle Engineering
- **Vibration:** All pumps and lines need rubber isolation mounts and flexible sections to survive road travel.
- **Weight Distribution:** Include the bed assembly and fluid in your center-of-gravity and axle-weight calculations.
- **Serviceability:** Design the platform so major components (pump, valves, heat exchanger) remain accessible without removing the entire bed.
- **Safety & Compliance:** Ensure nothing compromises structural integrity, fire ratings, or egress. Document changes for insurance/DMV if the bus remains titled as a vehicle.
- **Condensation & Moisture Management:** Good insulation + positive drainage paths + breathable mattress materials.

**House Components Philosophy:**  
Treat the bed thermal circuit exactly like your lighting, water pump, or cooking systems — planned, documented, and integrated into the single “house” utility backbone running through the bus.

---

## 7. Challenges, Risks & Mitigation Strategies

| Challenge                    | Potential Impact on E-House Bus                          | Mitigation / Planning Response |
|-----------------------------|----------------------------------------------------------|--------------------------------|
| Condensation on chilled lines | Moisture damage, mold, corrosion inside living space    | Heavy closed-cell insulation on all cold lines; condensate drain paths; monitor cabin humidity |
| Pump noise or vibration     | Disturbs sleep (defeats the purpose)                    | Choose quiet models; rubber isolation mounts; locate pump remotely if possible |
| Added parasitic battery draw | Reduced overnight capacity or driving range             | Low-wattage components + smart controls (only active in sleep mode); track via BMS |
| Plumbing leaks              | Water damage to interior, electrical hazards            | Quality fittings, pressure testing, accessible shut-offs, optional leak sensors + auto-shutoff |
| System complexity on the road | Harder troubleshooting away from home base             | Modular design, clear labeling, spare-parts kit, start with bench prototype |
| Regulatory / insurance questions | Road legality or coverage concerns                     | Keep modifications reversible where practical; consult conversion communities or professionals |
| Initial design risk         | Time/money spent on concept that under-performs         | Build and test a small-scale prototype (cot or bench) first before committing to vehicle design |

**Strongly Recommended:** Prototype the fluid loop on a workbench or spare cot using a small test compressor or your existing HVAC test setup. Measure real temperatures, flow rates, power draw, and noise before any cutting or permanent installation in the bus.

---

## 8. Next Steps & Action Items

To move from discussion to executable plan:

1. **Provide HVAC / Refrigeration Details** — Brand, model, capacity (BTU or tons), refrigerant type, whether it’s already a heat pump (reversible), current glycol vs. direct-expansion setup, and any available diagrams or photos. This is the single most important input for detailed engineering.
2. **Define Bed Specifications** — Exact size (queen/king?), preferred location in the bus layout, and any constraints on under-bed space or routing paths.
3. **Share Battery & Electrical Overview** — Bank size (kWh), nominal voltage, BMS type, and current major house loads so we can model the bed circuit’s impact accurately.
4. **Decide on Primary Design Path** — Confirm preference for fluid-based (recommended), air-based, or hybrid so we can focus sourcing and diagrams.
5. **Sourcing Sprint** — Identify 2–3 critical long-lead or high-risk parts (pump, valves, insulation, mattress pad) and pull current pricing/availability.
6. **Coding Architecture Decision** — Choose the controller platform and communication method so the bed logic can be written consistently with the rest of the bus automation.
7. **Create Visuals** — Rough plumbing schematic and bed platform concept (we can do ASCII diagrams, draw.io, or more formal engineering sketches next).

**Immediate Action Items (for us to tackle together):**
- [ ] User supplies HVAC model/specs/photos.
- [ ] Research and short-list 2–3 quiet, continuous-duty 12 V circulation pumps with good reviews for RV/mobile use.
- [ ] Draft a simple plumbing schematic (supply/return, valves, heat exchanger location, bypass).
- [ ] Outline prototype test plan (bench/cot version) with success criteria (target bed surface temp, power draw, noise level).
- [ ] Decide whether to integrate leak detection and automatic isolation into the first revision.

---

**Document Status:** Living planning document. We will update it as we refine the design, lock in parts, complete engineering drawings, and write the actual control code.

**Maintained for:** Terence’s Electric E-House Bus Conversion Project  
**Next Review Trigger:** New HVAC details, prototype results, or major design decision.

---

*This document keeps all discussion, sourcing, wiring, engineering, vehicle design, coding, and house-component considerations in one place so we can iterate quickly and build the best possible integrated sleep system for the bus.*

---

**End of Document**