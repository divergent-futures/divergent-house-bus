# Structural Pack — Layout, See-Through & 330 kWh Fit-Check

**Date:** 2026-07-03  ·  V2 bus. Answers TJ's questions: does the pack run the full length; is it "one job = structure"; and — with real cell dimensions — **can we actually fit ~300 kWh traction + 30 kWh house in the floor we have?** See `structural_pack_seethrough.png` (top + side see-through). Pairs with `Battery_Pack_Supplier_Vetting.md`, `Height_Stackup.md`, `Eaxle_RideHeight_and_Rear_Packaging.md`, `Bus_Layout_and_Floorplan.design.md`.

---

## 1. Two questions, answered
**Does the pack run the entire length, front to back?** The **structural skateboard** — the load-bearing floor — effectively does: it *is* the chassis, replacing frame rails bumper-to-bumper (lowest CG, stiff, rollover-resistant). **But the cell-filled volume does not.** Cells stop short of the **front crush** (2 ft, crash structure, no HV/pressure vessels), the **rear crush** (1 ft), the **four wheel-well notches**, and the **rear e-axle/mech notch** (the pack lifts there). So: *structure = full length; cells = most of the length, minus those carve-outs.* My v0.5 side view drew the cells only mid-bus — that was schematic shorthand and wrong; the cells actually have to run **forward under the cab/lounge** (see §3).

**Is it "one job = structure"?** No — that's the key thing about a structural (cell-to-chassis) pack: it's **multi-function**. It's simultaneously the **structure**, the **energy store**, part of the **crash load path**, and part of the **thermal path** (the cold-plate is the pack floor). That integration is exactly why it saves weight vs a separate frame + bolt-in battery.

## 2. The cell + the numbers
Representative sodium-ion prismatic (the class small builders can buy now; CATL Naxtra is the OEM reference at ~175 Wh/kg, large-format 300+ Ah — ours is a smaller, finer-resolution cell for clean 400 V / 48 V grouping):

| | Cell | Traction | House |
|---|---|---|---|
| Chemistry / format | sodium prismatic | — | — |
| Nominal V / capacity | 3.1 V · 200 Ah = **620 Wh** | — | — |
| Cell size (standing) | ~205 × 72 mm footprint, ~200 mm tall | — | — |
| Config | — | **128S 4P** | **16S 3P** |
| Cells | — | **512** | **48** |
| Nominal voltage | — | ~397 V | ~50 V |
| Energy (nominal) | — | **~317 kWh** (~300 usable) | **~30 kWh** |

**Total ~560 cells, ~347 kWh nominal.** (Cell choice quantises capacity — a 300 Ah cell would jump in ~120 kWh/parallel-string steps and overshoot; the 200 Ah cell lands cleanly on ~300 + 30.)

## 3. The fit-check — it fits, but tight
| | Value |
|---|---|
| Body | 25 ft × 98 in (7,620 × 2,489 mm) |
| Pack **zone** length (minus crush 2 + 1 ft) | ~22 ft (6,705 mm) |
| Pack width (minus ~100 mm spine each side) | 2,289 mm |
| Gross zone area | **15.35 m²** |
| − 4 wheel-well notches | −0.84 m² |
| − rear e-axle / mech notch (~1.2 m of length) | −2.75 m² |
| **Net usable cell footprint** | **~11.8 m²** |
| Footprint **needed** (560 cells + ~35% module/cold-plate/busbar/spacing) | **~11.0 m²** |
| **Margin** | **~+0.8 m² (≈ +5 kWh)** |

**Cross-check** at pack density: 11.8 m² × 0.22 m = 2.59 m³ × ~136 kWh/m³ = **~352 kWh could fit** vs ~347 needed. Same answer — **it fits with a thin margin.**

**Two consequences worth stating plainly:**
1. **The cells must run forward under the cab and lounge.** A mid-bus-only pack (~6–7 m²) would top out around ~200 kWh — it would *not* hold 330. The floor being a full-length structural pack is what makes the range possible.
2. **Packaging and range are directly coupled through pack area.** Carving 1 m² of pack (at 0.22 m) ≈ **30 kWh ≈ ~30 mi**. So the rear e-axle/mech notch and every wheel-well cut is "spent range." The current ~11.8 m² net already banks the rear-mech decision; growing that notch further eats directly into the 300 kWh. This is the number to defend in the Structure track.

## 4. What's in the pack (the see-through)
- **Cells** in ~13–16 modules, single upright layer (~200 mm), laid across the zone; **traction** array fills the main floor, **house** (16S3P) as a small block up front.
- **Cold-plate + insulation tray** below the cells (~40 mm) = the thermal path; **structural lid + HV busbars** above (~30 mm) → ~220 mm total pack.
- **BDU / HV junction** (contactors + pre-charge, **pyro fuse**, class-T fuse, current sensor, busbars) placed **rear-central**, short HV run to the e-axle.
- **Traction BMS master + module slaves**, **House BMS**, **bidirectional DC-DC (HV↔48 V)** in the same rear cluster.
- **HV connectors** exit rearward at the pack/notch boundary: **→ e-axle**, **→ charge inlet (NACS/MCS)**, **→ DC-DC/house**.
- **Peripheral spine** channels (outboard, ~0 kWh) carry plumbing + LV wiring the length of the bus.
- Both BMS and all protection live **inside the pack** — zero cabin/core volume.

## 5. Open / to firm (Structure track)
1. **Real cell pick** — lock the sodium prismatic (V/Ah/dimensions) from the battery tracker; re-run the S×P and the footprint at the actual cell (the ±0.8 m² margin is sensitive to cell size).
2. **Wheel-well + rear-notch geometry** — exact tire size (19.5 vs 22.5), track width, and rear e-axle envelope set the real carve-out area (= real range cost).
3. **Under-cab cells** — confirm the cab floor can sit on pack (crash rules keep HV out of the *crush* zone, but the cab proper behind it is fair game).
4. **Module architecture** — module count/size, pressure end-plates (sodium likes a little pack pressure), cold-plate routing across the floor.
5. **Thinner cells over the rear** — could a shallow cell layer sit *above* the raised rear floor to claw back some of the notch's lost kWh? (trades bed height.)

---
*Structural pack layout + fit, 2026-07-03. Structure spans the full length (it IS the chassis); cells fill the ~22 ft zone minus crush zones, 4 wheel wells, and the rear e-axle notch → **net ~11.8 m²**. ~560 sodium cells (200 Ah/3.1 V): traction 128S4P ~317 kWh nom (~300 usable) + house 16S3P ~30 kWh, needing ~11.0 m² → **fits with ~+5 kWh margin**. The cells MUST extend forward under the cab/lounge; a mid-bus-only pack won't hold 330 kWh. Pack is multi-function (structure + energy + crash path + cold-plate). Every m² of notch/well ≈ 30 kWh ≈ 30 mi. See `structural_pack_seethrough.png`.*
