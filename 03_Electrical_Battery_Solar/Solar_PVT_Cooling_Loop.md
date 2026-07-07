# Solar PV/T Cooling Loop — Cool the Panels + Harvest the Heat

**Date:** 2026-07-03  ·  V2 bus. TJ's idea: in peak summer the roof panels get hot and lose output; a water/glycol loop that **cools the panels** (recovering ~10–15% output) and dumps the heat through a LEAP-71-class AM heat exchanger could be **net-positive** even after the pump. Confirmed — and it's better as a **PV/T (photovoltaic-thermal)** hybrid: cool the panels *and* harvest the heat for hot water. See `solar_pvt_cooling.png`.

---

## 0. First, the enabling fact
**AM (LEAP-71-class gyroid/TPMS) heat exchangers are fluid-capable** — liquid-liquid and liquid-air, not air-only. So a **water/glycol solar-cooling loop through one works fine** (it's exactly the kind of duty they're built for).

## 1. The physics
Crystalline-silicon panels lose ~**0.35%/°C** above 25 °C. In peak sun a panel runs ~**65 °C**; cooling it to ~**37 °C** (ΔT ~28 °C) recovers ~**+9.8% output.**

| Array | Real hot-summer output | +cooled | − pump | **Net** |
|---|---|---|---|---|
| **High (deployable ~10 kW)** | ~8 kW | +784 W | −100 W | **+684 W** (~+3.7 kWh/day) |
| Mid/Entry (~4 kW roof) | ~3.2 kW | +314 W | −100 W | **+214 W** (smaller but >0) |

**Clear net-positive at the high end in peak heat; marginal (still >0) at the low end.**

## 2. The bigger win — make it PV/T (not just "cool and dump")
A ~50 m² array absorbs ~50 kW of incident sun; if actively cooled, **~38 kW of low-grade heat** is available — **far more than DHW needs.** So route the panel heat: **DHW / hot buffer first (free hot water), overflow rejected** to ambient via the AM HX. One panel then makes **both electricity (cooler = more) and hot water** — a photovoltaic-thermal collector.
- **Bonus:** cooler panels **degrade slower** → longer life.
- **Ties into the existing loop:** the glycol loop + AM HX already exist (whole-vehicle thermal integration) → this is a **marginal addition**, not a new system.

## 3. Caveats / where it applies
- **Rigid roof panels only** — they can take a **cooling plate** behind them; the **flexible fold-out wings** can't easily (no rigid back channel), so they stay air-cooled.
- **Adds** a pump, a cooling plate, and plumbing (weight + a failure point) — worth it mainly at the **high end / hot climates**.
- **Configurator branch:** a **high-tier / hot-climate option**, not baseline everywhere.

## 4. So
**Yes — worth it.** A water/glycol PV/T loop through an AM gyroid HX is **net-positive electrical (~+684 W at the high end in peak heat) AND delivers free hot water**, using the loop we already have. Best on the rigid roof array, offered as a configurator option for high-output / hot-climate builds.

## 5. Open / next
- Cooling-plate design behind the rigid panels (contact, glycol channels, weight); pump sizing.
- Fold the +~3.7 kWh/day summer gain + the DHW offset into the summer energy model.
- Decide fixed-plumb-in vs a bolt-on kit (configurator); cost vs the ~3.7 kWh/day + DHW value.

---
*Solar PV/T cooling, 2026-07-03. AM (LEAP-71) HX are fluid-capable (liquid-liquid/air), so a water/glycol solar-cooling loop works. PV loses ~0.35%/°C; cooling 65→37 °C = +9.8% output. Net after ~100 W pump: HIGH (~10 kW) +684 W (~+3.7 kWh/day); MID/ENTRY (~4 kW) +214 W. Make it PV/T: harvest panel heat (~38 kW available, >> DHW need) → DHW first, overflow rejected → free hot water + cooler (longer-lived) panels. Rigid ROOF panels only (cooling plate); flexible wings stay air-cooled. Ties into the existing glycol loop + AM HX (marginal add). Configurator branch: high-tier/hot-climate option. See solar_pvt_cooling.png.*
