# Front/Rear Axle-Load Balance — V2

**Date:** 2026-07-03  ·  V2 bus. Redoes the axle-load split with the **current** layout (floor plan v0.5 rear mech cluster + 102 in sodium potted-CTP pack), replacing the v0.1 mass-budget split that still had the mech gear mid-bus. See `axle_load_balance.png`. Feeds Structure + suspension + e-axle GAWR selection.

---

## 1. Setup
- Bus 300 in (25 ft); **front axle 45 in, rear e-axle 255 in → wheelbase 210 in** (mass-budget assumptions).
- Masses from the v0.1 mass budget, **positions reassigned** to the current design: pack cells **front+mid** (~140 in), the **mechanical/energy cluster at the rear e-axle** (HVAC core, buffers, CHP, power electronics, DC-DC, charger ~250 in), wet cluster mid (~186–195 in), galley appliances (~120 in), bed rear (~270 in), steering front (~60 in). Pack updated to ~360 kWh installed + structural potting/faces.

## 2. Result
| | Weight | CG (from front) | Front axle | Rear axle |
|---|---|---|---|---|
| **Curb** | 14,560 lb | 159.5 in | 6,619 lb (45%) | 7,941 lb (55%) |
| **Loaded** | 16,327 lb | 156.2 in | 7,680 lb (47%) | 8,647 lb (53%) |

- **GVWR 19,500 lb → loaded 16,327 lb, margin ~3,173 lb.** Within rating.
- **Front GAWR ~9,000 → 7,680 lb (margin ~1,320).** OK.
- **Rear GAWR ~13,500 → 8,647 lb (margin ~4,853).** Lots of headroom (the 8.5-t-class e-axle is rated well above this).
- **Balance 47/53 (loaded).** Front carries plenty for **steering** (well above the ~30% floor); the slight **rear bias suits the driven rear e-axle** (traction).

## 3. The key finding
**Clustering the mechanicals at the rear e-axle did NOT make the bus rear-heavy.** The dominant mass is the pack (~4,900 lb) sitting front+mid, and it counterbalances the rear cluster, so the **CG lands almost exactly at the wheelbase centre (~156 in vs the 150 in geometric centre)** — a near-ideal, slightly-rear split. So the rear-clustering decision is confirmed *good* for weight distribution, not just for cooling/protection/serviceability.

## 4. Levers & sensitivities
- **Water tank (~200 lb + 417 lb fill) is the trim lever** — currently under-galley (~130 in). Slide it fore/aft to fine-tune the split without moving hard parts.
- **Front axle is the tighter of the two** (margin ~1,320 lb) — watch it as masses firm; the rear has huge margin.
- **Air suspension** can bias ride height/load-levelling on top of this static split.
- Numbers are **estimates on the v0.1 masses**; refresh when the pack mass (cell pick), rocker, and potting are locked (Structure track). The **pack mass grew** with 102 in / more cells + potting — reflected here (~+800 lb vs the v0.1 loaded 15,437).

## 5. Feeds
- **e-axle GAWR:** rear needs ≥ ~9,000 lb GAWR loaded (with margin) → the 8.5-t-class e-axle is comfortably sufficient. Front steer axle ≥ ~8,000 lb rating.
- **Mass budget:** update the v0.1 positions to these; bump the loaded weight/CG.
- **Suspension:** air-spring sizing per axle from these loads.

---
*Axle-load balance, 2026-07-03. Current layout (rear mech cluster + 102 in sodium potted pack), wheelbase 210 in (axles 45/255). Loaded 16,327 lb, CG 156.2 in → front 7,680 lb (47%) / rear 8,647 lb (53%); within GVWR (margin 3,173) and both GAWRs (front ~9,000, rear ~13,500). KEY: rear-clustering did NOT unbalance it — the front+mid pack counterbalances, CG sits near wheelbase centre = near-ideal slight-rear split (good steering + rear traction). Water tank = fore/aft trim lever; front axle is the tighter margin. Refresh on cell/rocker/potting mass lock. See axle_load_balance.png.*
