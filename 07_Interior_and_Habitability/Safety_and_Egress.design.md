# Safety & Egress - Design Track

**Status:** Detailed v0.1 (first deep pass)  ·  **Priority/Sequence:** 2  ·  **Depends on:** Electrical, Thermal, Controls
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component names its interface back to the shared loop / bus.

---

## 1. Purpose & philosophy

This is a single unit you live in, with an 800 V pack, a combustion genset, and water all in the same space - so failures are more acute than HABITAT's redundant modules. The answer is **graceful degradation within one vehicle**: detect early, contain, keep a safe fallback for every life-support leg, and always have two ways out.

**Battery chemistry helps, but does not remove the risk.** Sodium-ion is a major reason for the chemistry choice: it is **non-flammable**, which largely removes the lithium thermal-runaway *fire* mode. But it is still an **800 V pack holding a very large amount of energy** - so electrical-arc, short-circuit, and high-energy fault risks remain. Battery safety here is about HV fault management and energy containment, not just flammability.

## 2. Air-quality sensing (per living zone) + hazard detectors

A full **air-quality array - CO, CO2, O2, humidity, and particulates - in each of the four living zones: bedroom, main lounge, bathroom/hydroponics, and driving cabin.** Together they catch combustion products, ventilation/occupancy load, oxygen depletion (or refrigerant displacement), condensation/mould risk, and cooking air quality. They feed the ventilation rate (Controls) and trigger alarms and safe-states.

| Signal (every zone) | Why it matters | Action |
|---|---|---|
| CO | Genset / combustion products | Alarm; stop genset; ventilate |
| CO2 | Occupancy + ventilation load; CO2-refrigerant leak | Ramp ERV; alarm if high |
| O2 | Depletion in a sealed space (combustion, or a CO2-refrigerant leak displacing air) | Alarm; ventilate; stop genset |
| Humidity | Condensation / mould; dehumidification feedback | Dehumidify / ventilate |
| Particulates | Cooking / air quality | Ventilate; range hood |

**Hazard-specific detectors (beyond the per-zone arrays):**

| Hazard | Sensor | Action |
|---|---|---|
| Fire / heat | Smoke + heat (galley, central bay, each zone) | Alarm; trigger suppression; controller safe-state |
| Refrigerant leak | A2L sensor (R1234yf lane); the CO2 array doubles as the CO2-lane leak/asphyxiation sensor | Alarm; ventilate; isolate |
| HV insulation fault | Bender IMD (Electrical) | Alarm; isolate HV |

## 3. Fire suppression & containment

- **Extinguishers front and rear** - one always reachable from either end.
- **Battery aerosol/clean-agent suppression** in the pack enclosure (thermal-runaway response).
- **Central-bay fire-containment enclosure** around the thermal core + BMS + HV (ties to Structure track) - contain an energy-system fire away from the living space.
- Galley + electrical-bay coverage; fire-rated separation around the genset.

## 4. Egress

- **Two independent exits:** the main entrance door (front) and a **rear emergency hatch + window at the bed**. If the front is blocked (e.g. an electrical/genset fire mid-bus), you exit out the back.
- Egress paths kept clear by the floor-plan rules (layout/format round).

## 5. High-voltage & electrical safety (cross-ref Electrical)

- HVIL loop, insulation monitor (IMD), main + pre-charge contactors, emergency HV disconnect, class-T/EV fuses, lock-out/tag-out for service, annual insulation test.
- HV runs isolated (IT system), orange, clear of wet zones; SELV 48 V only in bath/galley.
- GFCI on every wet-zone AC circuit; anti-scald mixing valve on hot water.

## 6. Single-unit degradation plan (the written fallback)

For each life-support leg, what happens when the primary fails:

| Leg | Primary | Fallback |
|---|---|---|
| Heat | Heat pump | CHP genset heat -> resistive coil -> (last) shore/electric |
| Cooling | Heat-pump core (dual compressor) | Limp mode on the surviving compressor; shed non-essential cooling |
| Power | Battery + solar | CHP genset -> shore -> DC fast; drive-reserve always protected |
| Water (drink) | Tank + treatment | External fill; manual bypass of failed UV/filter with boil notice |
| Controls | Supervisory host | Thermostatic + manual control; fail-safe valve/pump defaults |
| Comms | Starlink | Cellular failover; satellite SOS/PLB in backcountry |

## 7. Occupant safety kit

- First-aid kit; **satellite SOS / PLB** for backcountry beyond cell range (the toad goes where the bus can't).
- Clear labelling of HV disconnect, fuel shutoff, extinguisher locations; a printed quick-reference safety card.

## 8. Interfaces

- **Controller interlocks (I12)** - detection -> automatic safe-state (genset stop, HV isolate, ventilation ramp, suppression trigger).
- Cross-track: HV safety (Electrical), genset CO + central-bay containment (Thermal + Structure), water anti-scald/quality (Water).

## 9. Open questions (resolve to close v0.2)

- **Suppression agent** choice (battery vs cabin; clean-agent vs aerosol).
- **Detector placement** map (with the floor plan).
- **Egress hardware** (hatch type, emergency release, glazing break-out for polycarbonate).
- **Genset bay** fire/CO/exhaust detailing.
- Formal **degradation plan** sign-off once all tracks are at v1.0.

## 10. Sourcing leads

- Marine/RV CO + CO2 + smoke detectors; A2L refrigerant sensors.
- Battery aerosol suppression (e.g. Stat-X class); clean-agent for cabin.
- Gigavac contactors, Bender IMD (Electrical). PLB: ACR/Garmin inReach.

## 11. Decision checklist

- [x] Detection suite defined (CO, CO2, smoke/heat, refrigerant, HV fault)
- [x] Two-egress plan set (front door + rear hatch/window)
- [x] Fire suppression + central-bay containment approach
- [x] Single-unit degradation plan drafted
- [ ] Suppression agents finalised
- [ ] Detector + egress placement (with floor plan)
- [ ] Genset bay safety detailing
- [ ] Degradation plan signed off at system v1.0

---
*Detailed 2026-06-27 (v0.1). Core philosophy: detect early, contain, fall back gracefully, always two ways out. Next: placement maps with the floor plan + suppression-agent selection.*
