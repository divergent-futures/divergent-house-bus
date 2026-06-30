# DC-Native Appliance Audit & the All-DC Reframe

**Date:** 2026-06-29  ·  **Track:** Electrical (revises the 120 V AC island)

## The argument (it's correct)

The bus is a **DC island**: the battery and solar are DC, and we only meet the AC grid at the shore inlet (and the genset), both of which we rectify to DC to charge the pack anyway. Making 120 V AC *inside* the bus is inherited grid habit, not a requirement. Today's path is wasteful on two counts:

1. **Double conversion.** Pack DC -> inverter -> 120 V AC -> the appliance's own power supply rectifies it **back to DC**. The inverter is ~88-93% efficient and the appliance SMPS another ~85-90%, so ~**10-20% is burned** on every electronic load, for nothing.
2. **Inverter idle draw.** A 5 kW always-on inverter idles ~**20-50 W continuously** = ~**0.5-1.2 kWh/day** gone before a single load turns on - a big number off-grid (that's ~1-2 "free" appliance-hours/day, or a chunk of solar).

Plus the inverter is **weight, cost, heat, and a failure point** we can delete. The catch is real but small: a few appliances are sold expecting AC, and most DC-native appliances run at 12/24 V, so we convert *once*, efficiently, at each device (DC-DC buck ~95-98%, no standby) instead of globally through an inverter. That's the trade TJ named - "a little bit of buck conversion on the items themselves" - and it's a good one.

**Physics check:** nothing in a house *fundamentally* needs AC. AC-only cases are induction (asynchronous) motors and mains-transformer devices - both avoidable by choosing BLDC/inverter-driven or DC-native equivalents (which is what modern efficient appliances already use internally).

## The audit - every household load

| Load | Typ. power | Native inside? | DC-native path | Recommended rail |
|---|---|---|---|---|
| LED lighting | 100-300 W | **DC** | direct | 12/24 V |
| TV / monitor | 50-150 W | **DC** (SMPS) | 12/24 V RV TV or buck | 12/24 V |
| Laptop / computer | 30-120 W | **DC** | USB-C PD | USB-C PD (20-48 V) |
| Phone / tablet | <60 W | **DC** | USB-C PD | 5-20 V USB-C |
| Router / Starlink | 50-120 W | **DC** (~48-56 V) | direct | 48 V / buck |
| Fridge / freezer | 50-150 W | **DC** (BLDC) | already on thermal loop (Secop 48 V) | thermal loop / 48 V |
| Air conditioning | 1-6 kW | **DC** | our HV thermal-core compressor | 400 V (thermal core) |
| Water pumps | 50-200 W | **DC** | RV 12/24 V DC pumps | 12/24 V |
| Fans / ERV / ventilation | 20-200 W | **DC** (BLDC) | direct | 12/24/48 V |
| Hydroponics pumps + grow lights | 100-400 W | **DC** | DC pumps + DC LED | 48/12 V |
| Climate bed (Eight Sleep-style) | 50-200 W | **DC** / thermal | DC or thermal loop | 48 V / thermal |
| Controls / sensors / network | <100 W | **DC** | buck | 12/5 V |
| Water UV | 20-60 W | **DC** ballast avail. | DC ballast | 12/24 V |
| Induction cooktop | 1.5-3.5 kW | rectifies AC->DC->HF | **48 V DC induction hob exists** (marine/off-grid) | **48 V** |
| Heat-pump dryer | 0.5-1 kW | **DC bus** (BLDC) | DC-native, or our thermal-loop drying | 48 V / thermal |
| Washing machine | 0.3-0.5 kW | **DC bus** (inverter motor) | marine 12/24 V DC washers exist | 24/48 V |
| Oven (resistive) | 2-4 kW | resistive (AC or DC) | element runs on DC; DC-rated controls | 400 V HV |
| Kettle / toaster (resistive) | 1-1.8 kW | resistive (AC or DC) | DC marine kettle, or thermal-loop hot water | 48 V / thermal |
| Vacuum / power tools | varies | **DC** (cordless battery) | charge off DC | onboard / 12 V |
| **Microwave** | 0.8-1.2 kW | magnetron + transformer | DC-input niche/small only | **holdout** |
| **Hair dryer** | 1-1.8 kW | universal motor + element | DC travel dryer, or holdout | **holdout** |
| **Guest / legacy AC devices** | varies | varies | n/a | **holdout** |

## Verdict & recommendation

**Go all-DC; delete the big always-on inverter.** The backbone is the one we already have - **48 V primary** (high-power DC: induction, A/C via the thermal core, big pumps, dryer), **12/24 V** (RV-standard pumps, fans, lighting, TV), **5 V / USB-C PD** (electronics) - fed by small **point-of-use DC-DC bucks** (efficient, light, zero standby). The 120 V AC island and the 5 kW inverter come out.

**The honest holdouts** are few - microwave, hair dryer, the odd guest/legacy AC device, full-size AC-only power tools. Two ways to cover them:
- **Source DC-native** versions (48 V induction, DC/cordless tools, skip or DC-substitute the microwave) - the purist path, and increasingly stocked.
- **Keep one small, switchable inverter** (~1.5 kW, hair-dryer-driven; eco/search, **off by default** -> ~0-10 W standby) feeding **1-2 "AC convenience outlets"** for the rare AC-only item. This kills ~95% of the waste and weight of the 5 kW unit while keeping a guest from being stranded.

**Recommended:** all fixed appliances DC-native (cooking = **48 V DC induction**), plus a small ~1.5 kW switchable inverter as a convenience backstop - not a 5 kW always-on box. This is the efficiency thesis applied honestly: don't carry (and idle) a 5 kW converter for the 1 % case.

## Impact
- **Energy:** recover the ~0.5-1.2 kWh/day inverter idle + ~10-20 % conversion loss on all electronics - directly extends off-grid autonomy and shrinks the solar/house-pack need.
- **Mass/BOM:** **delete** the ~5 kW inverter (~$1,300-1,900, ~15-25 lb); **add** cheap/light point-of-use bucks + a small optional inverter (~$150-400, ~5 lb). Net lighter, cheaper, simpler, fewer failure points.
- **Sourcing note:** DC-native appliance *selection* is still limited (improving fast) - the V1 build risk is availability/price of a few items, not feasibility. Worth its own appliance-sourcing tracker later.

## Open questions
1. **Cooking:** confirm a 48 V DC induction hob that meets power/quality (the key holdout decision).
2. **Microwave:** DC-input unit, small inverter, or omit?
3. **Rail map:** which loads sit on 48 V vs 24 V vs 12 V vs USB-C PD (sets the buck count/placement).
4. **Convenience inverter:** ~1.5 kW (2 kW only for a full salon dryer) - see `AC_Load_List_and_Convenience_Inverter.md`.

## Sources
- [48 V DC induction cooktops (off-grid/marine)](http://stellacookerandhood.com/48v-dc-induction-cooktop/) · [48 V DC appliances / no-inverter A/C & fridge](https://www.offhighwayvan.com/post/12v-48v-camper-van-electrical-systems-compared) · [DC-living all-DC off-grid discussion](https://diysolarforum.com/threads/dc-living-all-dc-appliances-for-new-tinyhouse-offgrid-project.70273/)
- [Inverter idle/standby ~20-50 W; eco mode 5-10 W](https://www.edecoa.com/blogs/technical-resources/inverter-standby-consumption) · [Why idle power matters off-grid](https://www.junchipower.com/why-efficiency-and-idle-power-consumption-matter-in-off-grid-inverters/)

---
*All-DC reframe (2026-06-29). Deletes the 120 V AC island + 5 kW inverter; 48 V/24 V/12 V/USB-C backbone with point-of-use bucks; small switchable inverter only as a convenience backstop. Revises Electrical track Section 2/4.*
