# E-House Bus Conversion Project
## Comprehensive Planning Document: Solar, Power Architecture, Thermal Management & Engineering

**Project Goal**: Convert a 25 ft short school bus into a self-sufficient electric e-house (mobile tiny home / off-grid capable). Maximize on-board solar generation, use the structural 300 kWh high-voltage traction battery pack as the sole energy reservoir, maintain a highly efficient 48 V DC house system, minimize inverter size through DC-native loads and waste-heat recovery, and implement smart thermal routing inspired by the Tesla Octovalve.

This document consolidates all discussions, calculations, component recommendations, wiring strategies, coding concepts, and engineering trade-offs from the planning conversation (June 2026).

---

## 1. Bus Dimensions & Roof Solar Capacity Baseline

### Key Dimensions (Standard Short School Bus)
- **Total length**: 25 ft
- **Usable roof length** (after 4 ft chassis nose loss): **20 ft (240 inches)**
- **Standard exterior width**: 8 ft (96 inches)
- **Usable roof width** (accounting for edges, slight curve, mounting margins): **~94 inches**
- **Total usable roof area**: ~160 sq ft (14.86 m²)
- **Roof characteristics**: Gentle curve (2–4 in drop from center to edges). No AC unit or vents on roof — **entire surface dedicated to solar**.

### Why 15 kW Is Not Feasible
Highest commercially available 2025 panel efficiency ≈ 23–25 % (RECOM Black Tiger, AIKO Neostar, Belinus GAIA, back-contact/TOPCon/perovskite-enhanced).

Theoretical maximum at 25 W per sq ft:
\[
160 \text{ sq ft} \times 25 \text{ W/sq ft} = 4{,}000 \text{ W (4 kW)}
\]

Real-world installed capacity after packing losses (gaps, mounting, curve, wiring access, 90–95 % coverage) and derating (heat, dirt, angle, vibration):
- **Realistic maximum on clean 20 ft roof**: **3.0 – 3.5 kW**

Typical real-world skoolie results on similar short buses: 1–3 kW. We are pushing the upper limit with 2025 high-wattage panels.

### Recommended Rigid Panels (Top Layer – Always Mounted)
| Panel Model                  | Power | Efficiency | Dimensions (in)     | Weight | Notes / Sourcing                  | Approx. Price |
|------------------------------|-------|------------|---------------------|--------|-----------------------------------|---------------|
| RECOM Black Tiger 700W      | 700 W | 25 %      | 93.9 × 44.6        | ~60 lb | Best wattage fit, hail-rated     | $350–450     |
| AIKO Neostar 3P54 500W      | 500 W | 25 %      | 69.4 × 44.6        | ~45 lb | Lighter, excellent shade tolerance | $250–300     |
| Belinus GAIA 510W (bifacial)| 510 W | 25 %      | 70.9 × 44.6        | ~52 lb | Rear-side gain if roof reflective | $280–350     |

**Optimal rigid layout** (RECOM 700W example):
- Orient 93.9 in side across width → fits 1 panel per row snugly.
- 44.6 in side along length → 5 panels end-to-end (223 in used, 17 in remainder for small panel or gap).
- **Total**: 5 × 700 W = **3.5 kW**
- Coverage: ~92 % of usable area.
- Total weight: ~300 lb (roof structure can handle with proper rib reinforcement).

Alternative lighter layout with 6 × AIKO 500 W = 3.0 kW.

**Mounting**: Aluminum rails or Z-brackets into roof ribs + Dicor lap sealant. Low-profile (< 6 in total height) for highway aerodynamics. Adjustable for roof curve.

---

## 2. Layered Solar System – Rigid Top + Deployable Flexible Bottom

### Concept
- **Top layer**: Rigid high-efficiency panels (hail, branch, and road-debris protection). Always exposed.
- **Bottom layer**: Low-profile flexible panels that **slide out sideways or rearward only when parked**. Hidden/protected under the rigid layer during travel.
- Recent 2025 flexible tech (perovskite-enhanced CIGS/monocrystalline) reaches 22–26 % efficiency — approaching rigid parity in full sun while remaining bendable up to 30° (conforms to roof curve).

### Flexible Panel Recommendations (Deployable Layer)
| Model                        | Power | Efficiency | Dimensions (in)   | Weight | Notes                              | Price    |
|------------------------------|-------|------------|-------------------|--------|------------------------------------|----------|
| Renogy 200W Flexible        | 200 W | 22 %      | 59 × 26.5        | ~10 lb | Proven in RV conversions          | ~$200   |
| Newpowa 300W CIGS Flexible  | 300 W | 19–22 %   | 65 × 39          | ~15 lb | Better heat tolerance             | ~$300   |
| EcoFlow 110W Flexible       | 110 W | 23 %      | 47 × 21          | ~4.4 lb| Marine-grade, easy bend           | ~$150   |

**Deployed capacity**: 10–12 × 200 W or 6–8 × 300 W flexible panels → **additional 2.0–2.4 kW**

**Total parked system capacity**: **5.5 – 6.0 kW** (3.5 kW rigid + 2–2.4 kW flexible)

### Deployment Mechanism (Engineering)
- Raise rigid panels on **2–4 in aluminum extrusions** (80/20 Inc. or McMaster-Carr) creating a protected “garage” space underneath.
- Flexible panels mounted on **linear sliders / low-profile rails** (Igus or Amazon linear bearings).
- Actuation: Manual crank (budget) or **12 V / 48 V linear actuators** (Progressive Automations, ~$150–300 each) with limit switches.
- Locking pins for highway travel.
- Added height: 1–2 in total. Weight penalty vs all-rigid: ~100–150 lb saved.
- Wiring: Flexible liquid-tight conduit to handle movement; MC4 connectors into a central combiner box.

This approach gets close to the “7 kW with two smaller slide-outs” target while keeping everything on the main roof envelope (no massive side extensions).

---

## 3. Side-Wall Flexible Solar Integration

### Available Area
- Typical short bus: ~18–24 in vertical space above windows to roof curve (use **20 in conservative**).
- Length per side: 20 ft usable.
- Two sides: **~80 sq ft total**.

### Capacity
At 22 W/sq ft (2025 flexible efficiency) and 85–90 % coverage:
- Nameplate: **1.5 – 1.8 kW**
- Effective after vertical-mount derating (angle, shading, one side often in shadow): **0.8 – 1.1 kW average output equivalent**

**Vertical orientation advantage**: Excellent winter / low-sun-angle performance and diffuse-light capture (can outperform flat roof on cloudy days or early/late hours).

### Recommended Panels & Layout
- EcoFlow 110W or Renogy 100–200W flexible panels oriented horizontally along length.
- 8–12 panels total across both sides.
- Mounting: 3M VHB tape + screws into side ribs + aluminum edge trim for branch protection. Total added thickness < 0.5 in.

### Daily Generation Contribution (NYC baseline, 15 % system losses)
- Winter average: **+4.5 – 6.5 kWh/day**
- Summer average: **+7 – 10 kWh/day**

Park facing south when possible to maximize south-facing wall.

---

## 4. Power Architecture – 300 kWh Structural Pack → 48 V DC House Bus (No Separate House Battery)

### Core Principle
Use the vehicle’s structural high-voltage traction battery (typically 400–800 V nominal in modern electric buses) as the **single energy source**. Step down once to a stable **48 V DC house bus**. This eliminates the weight, cost, and complexity of a second lithium house bank (potentially 500–1,000 lb saved).

### HV → 48 V DC-DC Converter (Primary Step-Down)
Size: 5–10 kW continuous (oversize 20–50 % for peaks). Efficiency target > 95 %.

Recommended modules (automotive / EV-grade, 2025):
- **Vicor BCM6135** series – 2.5 kW per module, stackable, 400–900 V in → 48 V out, 98 % eff, compact, vibration-rated.
- **Eaton eMobility DC/DC** – 5–8 kW, IP67 sealed, regen support.
- **Infineon HV-LV modules** – up to 10 kW, CAN bus monitoring.

Mount near the pack with forced-air or liquid cooling if > 5 kW. Input fusing at 1.25× max current. Output ripple < 1 % for sensitive electronics.

### 48 V DC House Bus Distribution
Powers directly (no inversion):
- LED lighting
- Water pumps, fans, ventilation
- Control electronics, Raspberry Pi / ESP32 / Arduino
- Buck converters for TVs, laptops, USB devices
- HVAC controls, thermal valves, actuators
- Future: 48 V mini-split or heat-pump components if available

**Distribution hardware**:
- Main bus bars: ¼ in × 2 in copper (McMaster-Carr)
- Cable: 2–4 AWG tinned marine-grade (Southwire)
- Connectors: Anderson Powerpole (modular)
- Protection: Victron Lynx Distributor + MIDI fuses (30–100 A per circuit)
- Grounding: Isolated returns + chassis ground + Bender IR155 ground-fault detector

**Estimated auxiliary daily draw**: 2–5 kWh (highly efficient DC system) → negligible impact on 300 kWh pack range.

### 110 V AC Inverter (Only What’s Truly Needed)
Size reduced because:
- Most loads are native 48 V DC or bucked lower
- Hot water heating largely eliminated via waste-heat recovery
- Typical recommendation: **3–6 kW pure sine**

Top choices:
- **EG4 6000XP** (6 kW, built-in MPPT, UL-listed, ~$1,200)
- **Victron MultiPlus-II 48/5000** (premium reliability, hybrid/grid capable, ~$1,500)
- **SunGoldPower 6000W split-phase** (budget, ~$800)

Wire from 48 V bus with 2/0 AWG, 150 A fuse. Mount with good ventilation.

---

## 5. Buck Converters for TVs, Computers & Small Electronics

Modern electronics (TVs, laptops, routers, monitors, USB hubs) run internally on 5 V / 12 V / 19–20 V DC. Inverting to 110 V AC then rectifying back wastes 10–20 % energy.

**Solution**: Distributed 48 V → lower voltage buck converters mounted near loads.

Recommended:
- Vicor BCM or Zonal modules (high efficiency, automotive)
- Daygreen / ATO 48 V buck modules (3–20 A, aluminum heatsink, ~$50–100 each) — budget-friendly for multiple zones

**Example savings**: A 200 W TV via buck path draws ~210 W from 48 V bus vs ~240 W via inverter + AC-DC brick.

Total “small stuff” load (2–3 TVs + laptops + networking): 300–500 W peak. Multiple small bucks prevent voltage drop.

**Monitoring**: INA219 current sensors + ESP32 → simple dashboard showing per-zone power draw.

---

## 6. Waste-Heat Scavenging for Domestic Hot Water

### Concept
HVAC heat-pump compressor and refrigeration loop reject significant waste heat (compressor discharge line often 80–100 °C). Capture this via a heat exchanger and route to a domestic hot-water tank. This can cover 50–80 % of shower / dish-washing hot-water demand without electric resistance heating.

**Benefits**:
- Dramatically reduces peak inverter load (no 1.5–2 kW water-heater element)
- Smaller inverter size possible
- Less high-current AC wiring
- Improves overall system COP (coefficient of performance)

### Recommended Components
- **HotSpot HRU** or similar waste-heat recovery unit for AC systems (~$400–600)
- Plate heat exchanger (Alfa Laval CB30 or equivalent, ~$200) installed on hot-gas line
- Glycol loop (non-toxic Prestone) with **48 V Shurflo pump**
- Insulated lines (Armaflex)
- 10–20 gal stainless or Whale marine hot-water tank
- Optional: Aqua-Hot style hydronic integration for cabin + water heating

**Expected yield**: From a typical 12 k BTU bus heat pump (~1 kW electrical input), recover 0.5–1 kW thermal to water. Fridge adds 200–500 W extra in summer.

**Safety**: DS18B20 temp sensors + cutoff at 120 °F to prevent scalding. Anti-scald mixing valve on shower.

---

## 7. Smart Thermal Management – Octovalve-Inspired Multi-Port Valve

Tesla’s Octovalve (8-port rotary) elegantly routes coolant between cabin, battery, chiller, and waste-heat recovery. We replicate the functionality with commercial multi-port valves.

### Recommended Hardware
- **Infineon / Eaton EV multi-port valves** (6–8 port, electric actuator, CAN controllable) — closest commercial analog
- Belimo or HVAC zone valves (4–8 port servo, ~$200–400) for simpler builds
- Custom rotary valve fabricated from EV teardown insights (advanced)

### Control Modes (Examples)
1. Summer day: HVAC cooling → divert compressor waste heat to hot-water tank
2. Winter: Heat-pump heating mode + waste heat to cabin or water
3. Parked / shower use: Prioritize water heating
4. Travel: Minimal routing, protect components

### Automation & Coding
**Hardware**: Raspberry Pi 4/5 or ESP32 with CAN hat + servo driver board. 48 V powered.

**Simple Python control example** (RPi + gpiozero):
```python
from gpiozero import Servo, Button
import time

valve = Servo(17)  # PWM pin
# Positions: 0.0 = full cabin, 0.5 = 50/50 water, 1.0 = full water heat recovery

def set_thermal_mode(mode):
    if mode == "shower_priority":
        valve.value = 1.0
    elif mode == "balanced":
        valve.value = 0.5
    # Add temp sensor logic here (DS18B20 via OneWire)

# Add Flask web endpoint or MQTT for phone/app control
```

**Arduino version** (for simpler actuator control) also feasible with Servo library and limit switches.

Integrate temperature sensors on water tank, HVAC lines, and ambient to create closed-loop logic. Log data to InfluxDB or local SD card for efficiency analysis.

---

## 8. Daily Solar Generation Estimates (NYC / Southern CT Baseline)

**Assumptions**:
- Flat or near-flat mounting (0–10° effective)
- 15 % total system losses (heat, dirt, wiring, inverter, controller)
- Peak Sun Hours (PSH) from NREL/PVWatts data for ~40° N latitude:
  - Winter (Dec–Feb avg): **2.2 PSH**
  - Summer (Jun–Aug avg): **5.3 PSH**
- Worst-case heavily overcast days: **~20 % of average output**

### Generation Table

| Season   | Scenario     | PSH (eff.) | 7 kW System (kWh/day) | 10 kW System (kWh/day) | ~6 kW Stacked (kWh/day) |
|----------|--------------|------------|-----------------------|------------------------|-------------------------|
| Winter  | Average     | 2.2       | 13.1                 | 18.7                  | 11.2                   |
| Winter  | Worst-Case  | 0.44      | 2.6                  | 3.7                   | 2.2                    |
| Summer  | Average     | 5.3       | 31.5                 | 45.1                  | 27.0                   |
| Summer  | Worst-Case  | 1.06      | 6.3                  | 9.0                   | 5.4                    |

**Annual average** (~3.8 PSH): ~22–32 kWh/day depending on total capacity.

**Interpretation**:
- 6–7 kW parked system comfortably covers efficient e-house loads (LEDs, efficient fridge, pumps, electronics, partial cooking) on average days.
- Worst-case winter requires battery buffer or small generator backup.
- Side-wall contribution helps winter mornings/evenings and cloudy days.
- With heat recovery, hot-water load drops dramatically → more kWh available for other uses.

---

## 9. Component Sourcing Summary & Rough Cost Estimates (2025–2026 Pricing)

**Solar (Roof + Sides + Deployables)**: $3,000 – $5,500
- Rigid panels + mounts: $1,800–2,500
- Flexible panels (underside + sides): $1,200–2,000
- Rails, actuators, wiring, combiner: $500–1,000

**Power Conversion & Distribution**: $3,000 – $6,000
- HV→48 V DC-DC (5–10 kW): $1,000–2,500
- 48 V bus bars, cable, fuses, Lynx: $400–700
- 3–6 kW Inverter (EG4/Victron): $800–1,500
- Buck converters (multiple): $300–600

**Thermal / Heat Recovery**: $2,000 – $4,000
- Plate exchanger + glycol loop + pump: $400–700
- HotSpot-style HRU or Aqua-Hot integration: $1,500–2,500
- Multi-port valve + sensors + controller: $400–800

**Total Core System (excluding structural pack, bus modifications, labor)**: **~$8,000 – $15,000**

Sourcing channels: Signature Solar, A1 Solar Store, Renogy, Victron dealers, McMaster-Carr, 80/20 Inc., Digi-Key/Mouser (for modules), Progressive Automations, Amazon (for flex panels and small parts). Check skoolie forums for used high-wattage panels.

---

## 10. Wiring, Safety & General Engineering Notes

### 48 V DC Best Practices
- Keep cable runs short (< 20 ft) to minimize voltage drop.
- Use tinned marine cable, proper crimps, heat-shrink.
- Fuse at 1.25× continuous current on every positive leg.
- Separate HV (orange conduit) and LV wiring.
- Chassis grounding with isolation monitoring.

### HV Safety (Critical)
- Integrate with pack BMS (CAN bus, contactors).
- Gigavac or equivalent HV contactors for auxiliary isolation.
- Intumescent fire protection around pack.
- Lock-out/tag-out procedures for maintenance.
- Annual insulation testing.

### Structural & Aerodynamic
- Roof load: 300–600 lb total solar + mounts — verify with bus manufacturer or structural engineer. Reinforce roof ribs if needed.
- Wind load at highway speeds: Secure all mounts for 100+ mph.
- Added height: Keep < 6 in above original roofline.
- Weight distribution: Balance side-wall panels; consider slight CG shift.

### Future-Proofing
- Leave spare capacity in combiner box and MPPTs for additional ground-deployable arrays or trailer solar.
- CAN bus / MQTT backbone for future smart-home integration (Home Assistant, Node-RED).

---

## 11. Coding & Automation Roadmap

**Priorities**:
1. Thermal valve position control + temperature feedback loop
2. Deployable flexible panel actuator control (extend/retract + limit switches)
3. Power monitoring dashboard (48 V bus voltage, current per zone, solar yield)
4. Data logging (daily kWh in/out, efficiency metrics)

**Stack suggestions**:
- Primary controller: Raspberry Pi 5 (or Pi 4) running Python + Flask/FastAPI for local web UI + MQTT
- Edge nodes: ESP32 (cheaper, lower power) for individual sensors/actuators
- Integration: Victron VE.Bus / VE.Direct Python libraries for inverter/MPPT data

**Example simple monitoring snippet** (Python + INA219):
```python
import board
import busio
from adafruit_ina219 import INA219

i2c = busio.I2C(board.SCL, board.SDA)
sensor = INA219(i2c)
print(f"Bus Voltage: {sensor.bus_voltage:.2f} V")
print(f"Current: {sensor.current:.2f} mA")
print(f"Power: {sensor.power:.2f} mW")
```

Expand with DS18B20 OneWire for temps, servo control for valve, and MQTT publishing to a central dashboard.

---

## Next Steps & Open Questions

1. **Confirm exact bus model** (e.g., Blue Bird, Thomas, IC Bus) for precise roof curve radius, side-wall height above windows, and structural rib locations.
2. **Structural battery pack specs**: Exact nominal voltage (400 V? 600 V? 800 V?), BMS type/CAN protocol, and available auxiliary output studs.
3. **Daily load audit**: List all 48 V DC loads and 110 V AC loads with estimated Wh/day (fridge, induction cooktop, mini-split or heat pump size, water pump duty cycle, lighting, electronics, etc.). This drives final inverter and converter sizing.
4. **Location-specific solar modeling**: Run PVWatts or SAM for your actual parking latitude/longitude (CT data is close to NYC but micro-climate and tree cover matter).
5. **Prototype path**: Start with one side-wall flexible panel + one deployable flexible test section + small buck converter setup to validate real-world output and mounting before full roof commitment.
6. **Detailed diagrams needed next**:
   - Full 48 V single-line diagram
   - Thermal loop schematic (HVAC → heat exchanger → valve → tank)
   - Roof mounting cross-section showing rigid + flexible layers + slider rails
   - Wiring harness routing plan

This document serves as the living master plan. We can iterate on any section, add CAD sketches, source specific quotes, or generate wiring diagrams / BOM spreadsheets as the build progresses.

**Status**: Solid conceptual architecture complete. Ready for detailed engineering, parts ordering, and prototyping.

---

*Document generated from collaborative planning session – June 2026. All recommendations based on 2025–2026 commercially available components and real-world skoolie / EV conversion experience.*