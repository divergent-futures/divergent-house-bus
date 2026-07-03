# Structural Pack — Shape & Build-Up Spec (v0.1)

**Date:** 2026-07-03  ·  V2 bus. Consolidates the session's structural decisions into one bespoke-pack geometry + build-up spec: the 102 in body, body-over-pack rocker, potted cell-to-pack core, the notches, mounting, and materials. See `pack_buildup_spec.png` (exploded build-up) + the supporting figures (`structural_pack_seethrough.png`, `pack_width_bodyover_crosssection.png`, `two_structural_packs.png`, `axle_load_balance.png`). This is the Structure-track spec that the earlier analyses fed.

---

## 1. Principle
The pack is **the floor and the structure at once** — a monolithic **cell-to-pack sandwich**: two aluminium faces (bottom cold-plate + top lid) with the **cells + structural foam potting as the continuous shear core**. **No modules, no internal structural rails.** The body's **rocker is a separate outboard crash member** (body-over-pack), so the pack is serviceable/swappable and impact never reaches the cells directly.

## 2. Envelope (102 in body, 25 ft)
| Dimension | Value |
|---|---|
| Body | 2,591 mm (102 in) W × 7,620 mm (25 ft) L × ~2,560 mm tall |
| Cell zone | ~6,705 mm long (between front 2 ft + rear 1 ft crush) × **2,181 mm** wide × **220 mm** thick |
| Net usable cell footprint | ~11.0 m² (after wheel-wells + rear notch) |
| Capacity | sodium potted-CTP ~394 kWh available; **install ~360 kWh** (300 traction + house + margin) |
| Per-side edge (cell→body) | skin 15 + **rocker 130** + gap 15 + pack rail 30 + thermal 15 = **205 mm** |

## 3. Through-thickness build-up (bottom → top)
| Layer | ~Thk | Role / material |
|---|---|---|
| **Skid plate** (under e-axle/pumpkin zone) | — | sacrificial Al/steel; sets the ~10–11 in belly low-point |
| **Bottom cold-plate = structural floor** | ~20–40 mm | Al; battery cooling **and** the lower sandwich face |
| **Cells + structural foam potting = the CORE** | ~200 mm | sodium prismatic, bonded; **foam = the continuous shear core** (makes chunky cells structural) |
| **Top structural lid + HV busbars** | ~20 mm | Al upper sandwich face; BDU + both BMS mount under it |
| **Mica fire barrier + water membrane** | 20 mm | HV-fault containment (sodium is non-flammable, so this is fault/ingress, not Li-runaway) |
| **Finished floor** | 15 mm | cabin sits here |
| *(pack = cold-plate + cells + lid ≈ 220 mm)* | | |

## 4. Plan-shape carve-outs
- **Cells occupy the front + middle only.** The **rear third is the mech + e-axle zone — no cells** (the pack lifts into the raised rear floor / bed platform).
- **4 wheel-well notches** (front + rear axles), ~0.35 × 0.6 m each.
- **Rear e-axle/mech notch** (~1.2 m of length) — pack steps up over the axle centerline (~395 mm) into the raised rear floor.
- **Peripheral spine channels** outboard (was the ~100 mm floor edge) now largely consumed by the rocker; plumbing/LV spine moves to the **wall/ceiling chase**.
- **Reminder:** every m² of notch/well ≈ **30 kWh (~30 mi)** — keep carve-outs tight.

## 5. Mounting & load path
- **Pack bolts UP to the body rocker** across the 15 mm gap (body-over-pack). The rocker (Al extrusion + UHSS steel, Tesla-M3-style) is the **side-impact crash member**; the pack's own perimeter rail is inboard of it.
- **Rear subframe integrated into the pack** carries the **sprung e-axle + air suspension** — *all drivetrain/mech gear bolts to this sprung structure, never the axle beam* (avoids the unsprung-mass penalty).
- **Suspension + axle loads** (from the balance): front ~7,680 lb / rear ~8,647 lb loaded → pack hardpoints + rear subframe sized to these; rear ≥ ~9,000 lb GAWR path.
- **Both BMS + the BDU/HV junction live inside the pack** (zero cabin volume); HV connectors exit rearward (→ e-axle, → charge inlet, → DC-DC/house).

## 6. Materials (adopt-where-proven, self-build the integration)
- **Enclosure:** roboformed steel shell + aluminium crush rails (Machina-Labs-style dieless forming, no weld).
- **Faces:** aluminium honeycomb plates (bottom = cold-plate, top = lid).
- **Core bond:** structural foam potting (continuous shear core; also fire/vibration isolation).
- **Barriers:** mica board (fire) + water-ingress membrane above the pack.
- **Rocker:** aluminium multi-void extrusion + UHSS steel cross-beams (separate body member).

## 7. Verified against this session
- **Fit:** ~360–394 kWh fits the net ~11 m² (cells front+mid). ✓
- **Side impact:** rocker outboard of cells; 205 mm/side edge. ✓
- **Structure:** potted core (not modules, not a heavy plate — a plate alone would need ~90 mm Al). ✓
- **Ride/clearance:** skid = lowest hard point ~10–11 in; pack notches up over the e-axle. ✓
- **Balance:** CG ~156 in, 47/53, both axles within GAWR. ✓

## 8. Open / next
1. **Lock the cell** (sodium-CTP vs LFP-blade) → refines core height, potting, and the S×P.
2. **Face-sheet + cold-plate gauges + potting-foam grade** (structural + fire) → real pack mass (folds into the mass budget).
3. **Wheel-well + rear-notch exact geometry** (tire size 19.5 vs 22.5) → real carve-out area = real range cost.
4. **Rocker spec** (extrusion section, steel backing) + pack-to-body bolt pattern.
5. **Rear subframe** detail (e-axle + air-suspension mounts) + skid design.
6. Refresh the **mass budget** positions/masses; then **floor-plan v0.6** at 102 in.

---
*Structural pack shape spec v0.1, 2026-07-03. Monolithic cell-to-pack sandwich: Al cold-plate (bottom face) + cells & structural-foam core + Al lid (top face) ≈ 220 mm; mica fire barrier + membrane + floor above; skid below the e-axle. 102 in body → cell zone ~6,705 × 2,181 × 220 mm, ~360–394 kWh, cells front+mid, rear third = mech+e-axle notch. Body-over-pack: separate rocker (205 mm/side edge) is the crash member; pack bolts up to it; rear subframe (sprung) carries the e-axle. No modules, no internal rails. Materials: roboformed steel shell + Al crush rails, Al honeycomb faces, foam potting, mica, membrane. Consistent with fit/side-impact/ride/balance analyses. Open: lock cell, gauges/foam grade, notch geometry, rocker + subframe detail, mass-budget refresh, floor-plan v0.6. See pack_buildup_spec.png.*
