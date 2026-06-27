# Electric E-House Bus Conversion Planning Summary

**Project:** Full electric bus conversion into a self-contained E-House (tiny home on wheels)  
**Core Philosophy:** Maximize efficiency through integrated systems, waste heat recovery, high-voltage architecture, commercial-grade components, and smart software control. All systems designed around an 800V high-voltage lithium battery bank as the central power source.  
**Key Focus Areas:** Component sourcing, wiring/electrical architecture, battery systems, thermal engineering, vehicle design/layout, coding for automation and autonomy, and household amenities.  
**Date of Summary:** June 25, 2026  
**Status:** Living planning document – iterative and expandable.

---

## 1. Initial Comprehensive List of Household Amenities

The conversation began with building an exhaustive list of every household amenity needed inside the bus. The goal was to think like a full home but constrained by vehicle realities (space, weight, vibration, power budget, off-grid capability).

### Kitchen Amenities
- Fridge (compact, efficient compressor)
- Freezer (separate or combo)
- Induction cooktop (high power draw – key challenge)
- Microwave / Convection oven combo
- Sink + electric faucet with pump
- Dishwasher (mini / optional for space)
- Blender / Food processor
- Coffee maker + Toaster
- Custom pantry storage with slide-outs
- Under-sink water filtration (RO with pump)

### Bathroom Amenities
- Toilet (composting or cassette preferred for no blackwater tank)
- Shower (enclosed stall)
- Sink + vanity
- Mirror + LED lighting
- Exhaust fan (roof vent for moisture control)
- Towel warmer (optional)
- On-demand water heater

### Bedroom / Sleeping Area
- Custom platform bed with storage
- Bedside tables + reading lamps
- Wardrobe / closet storage
- Climate control (AC + heat)

### Living / Entertainment Area
- Computer / workstation
- TV or smart display
- Convertible seating (sofa-bed or dinette)
- Sound system
- Gaming console (optional, low-power)
- Bookshelves / media storage

### Laundry and Cleaning
- Washer / Dryer combo (ventless preferred)
- Cordless vacuum
- Storage for broom/mop

### Utilities and Core Systems
- Battery bank + inverter/charger
- Solar panels + MPPT
- Wiring, electrical panel, fuses, breakers
- Freshwater tank + fill pump
- Greywater + blackwater tanks with level sensors
- Heating system
- Air conditioning
- All LED lighting
- Smart home hub / automation
- Security cameras + alarms

### Miscellaneous / Outdoor
- Electric awning
- Outdoor kitchen / fold-out prep area
- Bike / storage racks
- Emergency generator backup (quiet inverter type)

**Initial Power Consideration:** Many items (especially induction cooktop, water heater, AC, washer/dryer) have high peak draws. Early estimates suggested 5–10+ kWh daily consumption depending on usage and climate.

---

## 2. Shift to a Full 48V DC Powered Architecture

The list was then updated to prioritize **native 48V DC** components wherever possible. This reduces inverter losses, allows thinner wiring in some cases, and improves overall system efficiency for off-grid operation.

### Key 48V DC Upgrades Identified
- **Fridge & Freezer:** SunDanzer or similar 48V compressor models (thick insulation, vibration-resistant mounting).
- **Induction Cooktop:** Limited but available 24/48V DC induction units (e.g., solar-specific or industrial modules ~800–1200W).
- **Water Pumps & Faucets:** 48V DC diaphragm or submersible pumps (Shurflo, MarsRock, VEVOR equivalents).
- **Water Heater:** 48V DC immersion or tankless models (Dernord, Safiery-style).
- **Lighting:** Full 48V DC LED strips and fixtures throughout (SuperBrightLEDs, Larson Electronics).
- **Fans & Ventilation:** 48V DC exhaust fans and MaxxAir-style vents.
- **Climate Control:** 48V DC mini-split heat pumps or rooftop units.
- **Computer:** Rugged 48V-compatible in-vehicle PCs or step-down from higher voltage.
- **Washer/Dryer:** Compact ventless models adaptable to DC motors/pumps.
- **Smart Hub:** Raspberry Pi or similar running on 48V (or stepped down).

**Engineering Notes at this stage:**
- Central 48V bus with proper fusing and distribution.
- Battery bank sized in 48V configuration (e.g., Battle Born, Renogy lithium).
- Still required some AC inversion for very high-power items like full induction or certain appliances.
- Focus remained on direct DC connection to minimize conversion losses.

---

## 3. High-Voltage Exploration: Moving to an 800V Battery Architecture

The design evolved significantly when the decision was made to run a large **800V high-voltage battery bank**. This is a game-changer for efficiency in a vehicle of this scale:

- Lower current = thinner, lighter, cheaper wiring for high-power circuits.
- Reduced I²R losses.
- Better alignment with commercial EV and electric bus components.
- Enables direct connection of high-power systems without massive step-down losses.

### High-Voltage (400–800V DC) Component Opportunities Identified
**Big Wins (Direct Commercial Options Exist):**
- **Hot Water Heater / Heating:** Excellent commercial options from EV and bus suppliers.
  - Webasto 800V HVH (up to 10kW)
  - BorgWarner 800V HVCH
  - Valeo 400/800V high-voltage coolant heaters (2–10kW range)
  - Generic 800V PTC heaters
  - These are designed for buses, trucks, and EVs – vibration-rated and CAN-bus controllable.

- **Air Conditioning & Heat Pump Systems:** Strong commercial high-voltage options.
  - Guchen EV 400–800V compressors
  - Sanan / Songz 800V platform compressors (5kW+)
  - DC Airco 400–800V wall-mount or rooftop units
  - Grayson and Bergstrom electric TMS units

- **Pumps:** Grayson CP2 and similar 400–800V DC coolant pumps for large loops.

**Items That Remain Lower Voltage or Require Adaptation:**
- Fridge/Freezer compressors (still best as low-voltage or integrated into TMS)
- Induction cooktop (limited native high-V; may need custom module or minimal inverter)
- Microwave/Convection oven (mostly AC; custom or inverter path)
- Washer/Dryer motors (typically 120/240V AC or low-V DC; high-V adaptation possible but custom)
- Computer, lighting, small pumps, fans, sensors, and smart hub (stay on 12V/24V/48V step-down buses)

**Architectural Recommendation:** Segregated power distribution:
- **800V bus** → TMS, high-power heating/cooling, large pumps, future drivetrain.
- **48V / 24V / 12V buses** (via DC-DC converters) → lighting, computer, small appliances, controls.

Safety features emphasized: HVIL (High Voltage Interlock Loop), proper fusing, insulation monitoring, and CAN-bus integration for control and diagnostics.

---

## 4. Integrated Thermal Management System (TMS) – The Core Efficiency Engine

This was the pivotal conceptual shift in the conversation.

Instead of treating the fridge, freezer, air conditioning, cabin heating, hot water, and drivetrain/battery thermal management as separate systems, we designed a **unified, closed-loop thermal management system** that scavenges and redirects waste heat across the entire bus.

### Core Concept
- One central, high-voltage, commercial-grade heat pump / TMS unit serves multiple zones.
- When the refrigeration system creates cold (for fridge/freezer), it rejects a large amount of heat — this heat is captured and redirected to:
  - Domestic hot water storage
  - Cabin heating when needed
  - Battery preconditioning (cold weather)
  - Drivetrain component warming
- Excess drivetrain or battery heat can be routed to hot water or cabin.
- Result: Dramatically higher overall system efficiency (potentially 20–40% energy savings vs. separate systems).

### Recommended Commercial TMS Platforms (800V Native or Compatible)
- Grayson CM1 series (chassis-mount, integrated battery + power electronics + cabin cooling with waste heat recovery)
- Webasto eTM (scalable electric thermal management for buses)
- Bergstrom Electrical TMS (coolant distribution to multiple zones)
- Eberspaecher all-electric units
- Thermo King zero-emission heat pump platforms

**Typical Specs:** 5–15kW capacity, CAN-bus control, multiple coolant loops, heat exchangers, accumulators for thermal storage, electronic expansion valves.

### System Architecture Elements
- **Cooling Loop:** Serves fridge compartment, freezer compartment, battery pack, power electronics, and cabin AC.
- **Heating / Recovery Loop:** Uses waste heat via plate heat exchangers for hot water, cabin heat, and defrost.
- **Control Layer:** Electronic valves (solenoid or stepper, CAN-controlled), temperature/pressure/flow sensors, priority logic (e.g., hot water production can take precedence over cabin comfort in certain conditions).
- **Storage:** Insulated hot and cold accumulators to buffer peaks.
- **Integration Points:** Glycol-based coolant (food-safe or automotive grade), short insulated lines to zones, central mounting location (underfloor or dedicated utility bay).

**Power & Efficiency:** Peak draw in the 5–10kW+ range but with high COP (Coefficient of Performance) thanks to heat recovery. Daily energy significantly lower than discrete systems.

---

## 5. Washer/Dryer Combo with TMS Heat Scavenging

The washer/dryer was specifically called out for tight integration with the central TMS hub.

### Design Requirements
- Position the combo unit physically close to the TMS central hub to minimize coolant line runs.
- Use a **ventless heat pump** dryer (critical for a sealed bus environment).
- Add a custom heat exchanger (plate type) that allows the TMS recovery loop to inject waste heat directly into the dryer’s air stream or condenser during drying cycles.
- This can reduce the electrical energy required for drying by a significant percentage (potentially 20–50% depending on load and available waste heat).

### Recommended Units (Compact, Mobile-Friendly)
- Speed Queen Quantum Touch combo (highly durable, good controls)
- Bosch 800 Series ventless heat pump dryer (stackable, efficient)
- Whirlpool True Ventless compact models
- Techomey or similar 4+ cu ft ventless heat pump units (budget-friendly starting point)
- Yamamoto commercial-grade for extreme durability

**Integration Engineering:**
- Solenoid or motorized valves on the TMS side to divert heat only when the dryer is in a drying cycle.
- Temperature sensors in the dryer to modulate valve opening (prevent overheating clothes).
- Python control script on the Linux host to manage priority and timing.
- Water connection to freshwater and greywater tanks via high-voltage or stepped-down pumps.

**Location in Vehicle:** Dedicated utility bay or mid/rear compartment near the TMS core, with vibration isolation mounts.

---

## 6. Integrated Dual-OS Computer System (Linux + Windows on Shared Hardware)

The computer was re-imagined not as two separate machines but as a single rugged hardware platform running two operating systems side-by-side with intelligent resource sharing.

### Core Requirements
- **Linux Host (Primary – Mission Critical):** Ubuntu (or Debian with PREEMPT_RT for real-time performance). Runs all Python-based control systems:
  - Bus autonomy / drive-by-wire interfaces (if applicable)
  - TMS valve control, heat routing logic, and sensor fusion
  - Battery BMS monitoring and thermal protection
  - CAN bus communication with drivetrain, motor controllers, and TMS
  - Smart home automation, logging, alerts
  - Potential ROS2 or custom autonomy stack

- **Windows 11 Guest (Secondary – Everyday Use):** Runs in a virtual machine for normal computing tasks (browsing, Office, media, development work that prefers Windows tools).

- **Resource Sharing:** Single physical computer. Linux gets priority allocation (CPU cores, RAM, GPU access for AI/autonomy). Windows gets the remainder. Shared storage (NTFS partition or network share), bridged networking, and controlled USB/GPU passthrough.

### Recommended Rugged In-Vehicle Hardware
- Neousys Nuvo-9000 series (Intel 13th Gen, up to 64GB RAM, optional NVIDIA GPU, fanless, MIL-STD vibration, wide DC input, CAN 2.0 ports)
- OnLogic Helix HX500 (AMD Ryzen, excellent Linux support, Jetson option for edge AI)
- Premio VCO-6000-RPL (high-end, used in EV/autonomous shuttles, up to 128GB RAM, strong automotive Ethernet/CAN)
- Advantech DLT-V73 (transit-certified)
- Sintrones or similar for lower-cost prototyping

**Power Connection:** 800V battery → DC-DC converter (e.g., 800V to 24V) → PC input. Typical draw 50–200W depending on load. Optional coolant jacket tie-in to TMS for high AI/autonomy workloads.

**Software Stack Recommendations:**
- Host: Ubuntu 24.04 LTS + KVM/QEMU or Proxmox VE hypervisor
- Virtualization: Virt-Manager or Proxmox for easy Windows 11 VM management
- Inter-OS Communication: Python Flask/FastAPI on Linux exposing bus data (battery SOC, TMS temperatures, valve states) via local API or MQTT. Windows apps can query this safely.
- Example Control Logic: Python daemon that monitors CAN messages and TMS sensors, then commands valves for optimal heat routing (e.g., “if dryer active and waste heat available → open recovery valve”).

**Vehicle Integration:** Mount in a protected, accessible location (under dash or utility bay). Multiple displays possible (one Linux dashboard for bus systems, one Windows desktop). Full CAN/Ethernet connectivity to vehicle systems. Ignition-sense power for clean boot/shutdown.

**Security:** Strong isolation between the Windows VM and the Linux control plane (especially CAN bus access) to prevent any potential compromise of critical systems.

---

## 7. Overall System Architecture & Engineering Considerations

### Power Distribution Philosophy
- Primary: 800V high-voltage bus for TMS, large heating/cooling loads, and future drivetrain.
- Secondary: 48V (or 24V/12V) buses created via high-efficiency DC-DC converters for lighting, small pumps, computer, controls, and low-power appliances.
- Goal: Minimize AC inversion to only what is absolutely necessary.

### Thermal Integration Summary
Everything heating or cooling related (fridge, freezer, cabin climate, hot water, battery thermal management, drivetrain heat) should ultimately route through the central TMS with smart priority logic.

### Vehicle Design Implications
- Central utility / mechanical bay for TMS hub, laundry, and computer.
- Short, well-insulated coolant lines.
- Vibration isolation on all major components (especially compressor, PC, washer/dryer).
- Weight distribution and CG considerations as components are added.
- Roof space for solar (800–2000W+), with proper mounting for bus dynamics.
- Access panels for maintenance of TMS, battery, and high-voltage components.

### Coding & Automation Layer
- Primary language: Python on Linux host.
- Key libraries: python-can, pyserial, Flask/FastAPI (for inter-OS API), pandas/NumPy for logging and optimization, potentially OpenCV/TensorFlow for vision-based autonomy.
- Control loops: PID or state-machine logic for valve positioning, temperature targets, and priority-based heat routing.
- Data logging and remote monitoring capability (Starlink or cellular).

### Safety & Reliability
- HVIL, insulation monitoring, emergency disconnects.
- Watchdog timers and failover for the control computer.
- Redundant sensors on critical thermal loops.
- Proper fusing and wire sizing at both 800V and lower voltage levels.

---

## Next Steps & Open Items

1. **Power Budget Modeling** — Detailed daily/peak kWh calculation based on usage profiles (cooking, laundry, climate control, computing).
2. **Battery & Solar Sizing** — Determine Ah/kWh capacity of the 800V pack and roof solar array needed for multi-day off-grid capability.
3. **Detailed Schematics** — Coolant loop diagrams, electrical single-line diagrams, and CAN bus topology.
4. **Sourcing & Quotes** — Specific distributors for Grayson/Webasto TMS, Neousys/OnLogic computers, Speed Queen or Bosch laundry, high-voltage heaters, etc. (US and CT-friendly suppliers prioritized).
5. **Floorplan & Packaging** — 3D layout or 2D scaled drawings showing placement of TMS, laundry, computer, tanks, and zones.
6. **Control Software Prototyping** — Start building Python modules for TMS valve control and heat routing logic.
7. **Drivetrain Integration** (future) — How the propulsion system will share the 800V bus and thermal loops.
8. **Regulatory & Safety Compliance** — High-voltage vehicle standards, RV/tiny home codes, and insurance considerations.

---

**Document Purpose:** This Markdown file serves as the single source of truth for the E-House bus conversion project. It will be updated as decisions are made, parts are sourced, and engineering details are refined.

**How to Use:** Open in any Markdown viewer, VS Code, or Obsidian for easy navigation and future edits. Tables, diagrams, and code snippets can be added in future iterations.

---

*End of Summary – Conversation captured through June 25, 2026*