# Thermal / HVAC Integration - Design Track

**Status:** Seeded (ready to detail)  ·  **Priority/Sequence:** 1 (keystone - the core integration problem)  ·  **Depends on:** Electrical
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component below names its interface back to the shared loop / bus.

## 1. Purpose & requirements
One unit does cabin cooling and heating, battery thermal conditioning, fridge cold-share, hot-water / drying-room / climate-bed heat reuse, ventilation, and capture of CHP genset heat - all grade-matched (low-grade recovered heat to low-grade jobs; high-grade loads stay electric).

## 2. Interfaces (to the integrated loop / bus)
These are the couplings this subsystem owns or touches, from the architecture interface map (I1-I12):

- I1 AC condenser -> coolant loop (recovered heat)
- I2 Heat-pump cold -> fridge/freezer (shared cooling)
- I3 Loop -> hot-water preheat
- I4 Loop -> drying room / climate bed
- I7 Genset -> coolant loop (CHP waste heat)
- I8 Loop -> battery warmer (safe cold charging)
- I9 ERV <-> cabin air (ventilation built into the loop)

## 3. Components
- Reversible heat-pump / AC core (EV-grade compressor, 400/800 V)
- Octovalve-style multi-port valve + glycol loop + variable-speed pumps + buffer thermal store
- Condenser heat-recovery exchanger; chilled-coolant fridge cold store
- Hot-water tank + small 3-4 kW inline coil (final lift + Legionella disinfection); drying-room coil; climate-bed manifold
- Battery cold/warm plates; ERV / duct integration down the side walls; diesel-CHP jacket+exhaust heat exchangers
- Dehumidification path (loop-shared vs dedicated - open)

## 4. Electrical load contribution
COP-driven cooling/heating electricity; pumps; ERV fan; water UV. Summer house demand ~15.3 kWh/day, winter heat ~33 kWh/day at -10C - see energy model.

## 5. Mass contribution
Thermal group: HVAC ~280 lb, coolant loop ~200, genset ~180, hot water ~120.

## 6. Open questions
- HVAC sizing for SIMULTANEOUS cabin + battery + ventilation + generator (the keystone sizing problem)
- Refrigerant choice (R290 vs CO2 vs HFC) and its safety case
- Dehumidifier: shared HVAC loop vs dedicated circuit
- Buffer-store sizing; Legionella disinfection control logic

## 7. Sourcing & decisions
- TMS platforms: Grayson CM1, Webasto eTM, Bergstrom, Thermo King heat-pump
- EV compressors (Guchen, Sanden); multi-port EV valves (Infineon/Eaton, Belimo for simpler)

---
*Seeded 2026-06-26. Fill in detail as the subsystem is designed; keep Section 2 in sync with the architecture interface map.*
