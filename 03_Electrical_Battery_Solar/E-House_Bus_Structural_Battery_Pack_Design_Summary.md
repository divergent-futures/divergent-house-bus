# E-House Bus Structural Battery Pack Design Summary
**Project:** Lightweight 25-foot Electric House Bus (E-House Bus) Conversion / Ground-Up Build  
**Key Goals:** Ultra-efficient EV with structural battery pack, composite construction, adjustable air suspension for aero + off-road capability, 300 kWh LFP Blade pack, NACS/MCS charging, EPP foam interiors. Target curb weight under 18,000–20,000 lbs (GVWR < 25,000 lbs). Focus on the virtuous weight-efficiency loop unique to EVs.

**Date Compiled:** June 25, 2026  
**Status:** Planning & Sourcing Phase

---

## 1. Project Overview & Design Philosophy

This is a collaborative design for a 25-foot electric house bus optimized for overland travel, boondocking, and occasional off-roading. The core innovation is a **structural battery pack** that doubles as a load-bearing chassis spine, replacing traditional frame rails in the central section.

**Core Principles:**
- **Weight Snowball Effect (EV-Specific):** Every pound removed improves efficiency → allows smaller/lighter battery or more range → lighter e-axle/suspension → further weight savings. This feedback loop does not exist with hydrocarbons.
- **Aero + Adjustable Ride Height:** Drop low on highways (minimize drag) and raise for off-road clearance.
- **Future-Proofing:** Design for easy mid-2030s swap from LFP Blade to Sodium-ion Blade cells. Use NACS + MCS charging ports (CCS via adapter only).
- **Lightweight Materials Everywhere:** Composites for chassis/body, Expanded Polypropylene (EPP) foam for interiors (no wood framing where possible).
- **Practical Daily Use:** ~3 hours driving max per day (~165–180 miles). 235+ mile real-world range is acceptable and preferable to carrying excess battery weight.

**Target Specs:**
- Length: 25 ft overall
- GVWR: < 25,000 lbs (Class 6)
- Curb Weight Goal: 15,000–18,000 lbs unladen
- Battery: 300 kWh structural LFP Gen 2 Blade pack
- Drive: Single e-axle (moderate power, ~200–250 kW continuous)
- Efficiency Target: 1.0–1.2 kWh/mile at 55 mph (highway, dropped suspension)
- Range: ~235–285 miles usable at 55 mph
- Charging: Native NACS + MCS ports

---

## 2. Battery System: LFP Blade (Current) → Sodium Blade (Mid-2030s)

### LFP Gen 2 Blade Specifications (BYD)
- **Cell-Level Energy Density:** Up to 210 Wh/kg (long blade variant)
- **Pack-Level Energy Density (CTP/Structural):** ~190 Wh/kg realistic with enclosure, cooling, BMS, and structural elements
- **Form Factor:** Very long, flat prismatic cells (up to 2.5 m long × ~90–96 mm wide × ~12–13.5 mm thick)
- **Advantages for Structural Use:** Excellent safety (nail penetration test pass), long cycle life (3,000–5,000+), high discharge (up to 16C), no cobalt.
- **Why Blade for Structural Pack:** Cells themselves act as structural beams when arrayed and sandwiched. Minimal module overhead = higher pack density and better integration as chassis member.

### Weight Calculation for 300 kWh Pack
Using 190 Wh/kg pack-level density:

**Weight = 300 kWh ÷ 0.19 kWh/kg ≈ 1,579 kg (3,480 lbs)**

This is ~500–600 lbs lighter than a 400 kWh pack at the same density. The weight savings directly feeds the efficiency loop.

### Sodium-Ion Blade Transition (Mid-2030s)
- Sodium-ion offers 20–30% lower cost, abundant materials, similar safety to LFP.
- Current Na-ion pack densities are lower (~150–170 Wh/kg), but improving rapidly.
- **Design Strategy:** Make the pack modular with standardized bolted sub-arrays and connectors so sodium blades can be dropped in later with minimal chassis changes (expect ~10–20% volume increase initially).

**Sourcing Path (2026):**
- BYD/FinDreams partners or EV conversion shops (EV West, etc.)
- Salvage from wrecked BYD buses/vehicles on Copart
- Target: $80–120/kWh for modules
- Total pack cost estimate: $24k–36k before custom fabrication

---

## 3. Structural Integration: Battery as Chassis Spine

### Can Blade Cells Replace Frame Rails Between E-Axle Wheels?
**Yes.** Blade cells are specifically designed for this. In BYD electric buses, the blade array spans nearly the full vehicle width and contributes directly to torsional rigidity.

**Key Dimensions for Our Build:**
- Typical bus e-axle track width: 2.1–2.5 m (82–98 inches)
- Usable space between wheel wells: ~60–80+ inches
- Our chosen cell length: **2.5 meters** (fits transversely inside the e-axle wheels)
- Cells oriented transversely (left-to-right across the bus) → act as a very stiff crossmember/beam
- Cells sandwiched along their 12–13.5 mm thickness → builds the longitudinal length of the pack

### Pack Length Calculation (300 kWh, Single-Layer Sandwich)
- Scaled cell capacity for 2.5 m length: ~1.15 kWh per cell
- Number of cells required: ~261 cells
- Thickness added per cell when sandwiched: 12–13.5 mm
- **Core stack length: 261 × 0.013 m ≈ 3.39 m** (conservative)
- **Final structural pack length (including end plates, busbars, mounting flanges):** **~3.1 meters (≈ 10 feet)**

This leaves **~7–7.5 feet of traditional rail/crash structure on each end** of the 25-foot bus — front crash/hitch rail and rear crash/hitch rail. This is considered reasonable and practical.

**Layout Benefits:**
- Battery mass centered between axles → excellent weight distribution
- Very low center of gravity
- Pack acts as the primary load-bearing "spine" in the middle section
- Front and rear stub rails handle steering, hitch loads, and crash energy absorption
- Easy integration with composite chassis (bolted or bonded flanges)

---

## 4. Weight Targets & The Virtuous Efficiency Loop

**Starting Point (300 kWh Gen 2 Blade):**
- Battery pack: ~1,579 kg (3,480 lbs)
- Target total curb weight: 15,000–18,000 lbs

**The Loop:**
Lighter battery → less total vehicle weight → lower rolling resistance + better aero efficiency → fewer kWh/mile needed → can remove more cells (or keep range while reducing weight) → lighter e-axle and suspension possible → repeat.

This is why we deliberately stepped down from 400 kWh to 300 kWh. The goal is the lightest possible safe pack that still delivers practical range.

---

## 5. E-Axle Selection (Single Axle Preferred)

Given the light target weight (<25k lbs GVWR) and moderate power needs, a **single e-axle** is sufficient. No tandem required.

**Recommended Options (Bus/Medium-Duty Compatible):**

| Model                  | Continuous / Peak Power | Torque          | Approx. Weight | Best For Our Build                  | Notes |
|------------------------|--------------------------|-----------------|----------------|-------------------------------------|-------|
| **Allison eGen Power 85S** | 225 kW / 325 kW         | 12,000 Nm      | ~800–1,000 kg | **Top Recommendation**             | 2-speed gearbox, excellent regen, proven in buses |
| ZF AxTrax 2 (Portal)   | 210 kW                  | 26,000 Nm      | ~600–900 kg    | Low-floor composite builds         | Coaxial portal design, very compact |
| Dana eS9000r           | Up to 250 kW            | High           | ~700–900 kg    | Drop-in conversions                | Parallel-axis, good efficiency |

**Why Single Axle?**
- Keeps unsprung weight low
- Simpler wiring and control
- Sufficient for our efficiency-focused, non-drag-racing use case
- Leaves budget/weight for better suspension and aero

---

## 6. Adjustable Air Suspension & Aero Strategy

**Requirement:** High-riding air suspension that can:
- Drop significantly on highways (minimize drag, lower CG)
- Raise for off-road clearance (rocks, trails, boondocking)

**Recommended Systems:**
- MAD Suspension Air Master Ultimate (6–8+ inches of adjustment)
- LiquidSpring Smart Suspension (4–6 inches + smart damping)
- Custom Ridewell or Air Lift kits with extended bellows (can push to 8–10+ inches with mods)

**Aero Optimizations (Critical for Range):**
- Tesla Semi-inspired sloped nose and rounded windshield (target Cd 0.36–0.42 vs. school bus 0.63–0.66)
- Underbody panels and wheel skirts
- Drop suspension on highway → further reduces effective frontal area and turbulence
- Low rolling resistance tires (e.g., Michelin X One)

**Expected Efficiency at 55 mph (dropped suspension):**
- 1.0 – 1.2 kWh/mile (very achievable with composite build + aero)

---

## 7. Range Projections with 300 kWh Pack

**Usable Capacity:** 300 kWh × 95% = 285 kWh

| Efficiency     | Range          | Real-World Context                     |
|----------------|----------------|----------------------------------------|
| 1.0 kWh/mile   | **285 miles**  | Excellent aero, dropped suspension, light load |
| 1.2 kWh/mile   | **238 miles**  | Realistic mixed highway use            |
| 1.5–2.0 kWh/mile | 143–190 miles | Off-road or heavy house loads          |

**Daily Use Fit:** 3 hours driving at 55–60 mph = 165–180 miles. 235+ mile range gives comfortable buffer + margin for detours, headwinds, or using house power (induction cooking, AC, etc.).

**Charging:** NACS + MCS ports native. MCS future-proofs for heavy truck charging networks. V3/V4 Superchargers will add massive power quickly (LFP handles high C-rates well).

---

## 8. Charging Ports

- **Native:** NACS (Tesla standard) + MCS (Megawatt Charging System for trucks)
- **Legacy:** CCS via adapter only (we are not installing native CCS ports)
- Location: Low on side or rear for easy access while parked
- High-voltage busbars and contactors rated for 800V+ architecture

---

## 9. Interior Construction – Expanded Polypropylene (EPP) Foam

**Decision:** Move away from traditional wood framing for internal walls, cabinets, and partitions.

**Why EPP Pink Foam?**
- Extremely lightweight (50–70% lighter than plywood for same volume)
- High rigidity and compressive strength
- Excellent thermal insulation (R-value ~3.5–4.0 per inch)
- Cheap and easy to CNC/hot-wire cut
- Can be laminated with carbon fiber or fiberglass for added strength where needed
- Good sound deadening and impact resistance

**Applications:**
- Kitchen cabinets and counters
- Bedroom platforms and storage
- Partition walls
- Overhead lockers (with CF/FG skins)

**Construction Method:**
- Cut EPP to shape
- Laminate 1–2 mm carbon fiber or fiberglass sheets on faces using epoxy/vacuum bagging
- Bond panels with structural adhesive
- Integrate wiring channels and LED lighting directly into the foam

**Weight Savings:** Estimated 300–500+ lbs vs. traditional RV wood + metal construction. Directly improves range.

**Sourcing:** FoamByMail, Arplank, Engineered Foam Products. Carbon fiber from Fibre Glast or Rock West Composites.

---

## 10. Structural Battery Pack Fabrication

**Two Main Options Evaluated:**

### Option A: 3D Printed Composite Enclosure (Recommended)
- Large-format continuous fiber 3D printing (carbon fiber reinforced PA-CF or PEEK)
- Print in sections, embed blade cells + cooling channels during/after printing
- Bond with structural adhesives + vacuum bag outer layers
- **Advantages:** Lowest weight, perfect custom fit, seamless integration with composite bus chassis, easy to add mounting flanges and wiring paths
- **Challenges:** Print time and access to large-format printers

### Option B: CNC-Machined Aluminum Casting
- Sand or die cast large aluminum billet, then 5-axis CNC mill cell pockets and cooling channels
- **Advantages:** Excellent thermal conductivity, very strong
- **Disadvantages:** Heavier (20–30% more than composites), more waste, harder to integrate with composite chassis

**Hybrid Recommendation:** 3D printed composite outer shell with embedded aluminum cooling plates or heat spreaders where thermal management is critical.

**Next Step:** Create detailed CAD model (FreeCAD) around the 2.5 m blades, then prototype a small section to validate structural performance.

---

## 11. Overall Vehicle Layout Summary (25 ft Bus)

- **Front 7–7.5 ft:** Crash structure + steering + hitch rail + possible storage or seating
- **Center ~10 ft:** Structural 300 kWh LFP Blade battery pack (spine) + low-floor composite construction above it
- **Rear 7–7.5 ft:** E-axle + crash/hitch structure + possible bedroom or mechanical space
- **Suspension:** Full air ride with 6–10+ inches of adjustable height
- **Body:** Composite panels (carbon fiber / fiberglass over foam core)
- **Interiors:** EPP foam primary structure, laminated where structural demands exist
- **Roof:** Solar array + skylights + HVAC unit (minimized draw due to excellent insulation)

---

## 12. Open Questions & Next Steps

1. Exact blade cell configuration (series/parallel count for target voltage — 800V architecture recommended)
2. Detailed thermal management design (liquid cooling channels integrated into pack)
3. BMS choice and Python/CAN bus control code
4. Solar array sizing and integration with the structural pack
5. Specific composite layup schedule for chassis and body panels
6. Budget and timeline for prototype pack section
7. Sourcing of 2.5 m Gen 2 Blade cells (or closest current equivalent)

---

**Document Purpose:** This Markdown file serves as the living design bible for the E-House Bus project. It captures all key decisions, calculations, and rationale from our discussion so far.

**Next Action:** Review this document, then decide on priorities for the next deep dive (CAD modeling, thermal simulation, supplier outreach, or e-axle final selection).

---

*This summary was compiled directly from our conversation thread for reference and planning.*