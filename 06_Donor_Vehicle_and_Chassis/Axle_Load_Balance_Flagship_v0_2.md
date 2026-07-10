# Axle-Load Balance — re-run at the flagship (Mid-HiNa 280 kWh)

**Date:** 2026-07-07 · Re-runs the front/rear axle split with the **real reconciled masses** (v0.2) and the **Mid-HiNa 280 kWh flagship pack**, since the lighter pack shifts the CG vs the old 390 kWh assumption. See `axle_balance_flagship.png`. Wheelbase: front axle 45 in, rear e-axle 255 in (210 in wheelbase).

---

## Result — well balanced, one flag
| Config | Loaded | CG (in) | Front | Rear | Split |
|---|---|---|---|---|---|
| **Mid-HiNa 280 kWh (flagship)** | 16,957 lb | **151.2** | **8,382 lb** | 8,575 lb | **49.4 / 50.6** |
| High-Naxtra 390 kWh | 17,250 lb | 151.2 | 8,529 | 8,721 | 49.4 / 50.6 |
| High-HiNa 390 kWh | 18,925 lb | 151.1 | 9,366 | 9,559 | 49.5 / 50.5 |

- **CG ~151 in = dead-centre of the 45–255 in wheelbase.** That's near-ideal weight distribution for handling — the structural-pack floor centres the mass, exactly as intended.
- **The split stays ~49/51 across every tier** because the pack dominates and sits at CG ~150; changing pack size barely moves the balance (it just scales both axles together).

## The one watch item: front axle GAWR
- **Front axle carries ~8,382 lb loaded** at the flagship. That's fine against a typical Class-5 front rating of ~8,500–9,000 lb, but **would slightly exceed an 8,000 lb front axle.**
- **Rear (e-axle) ~8,575 lb** — very comfortable under a ~13,500 lb rear rating.
- **Action:** confirm the chosen chassis's **front GAWR ≥ ~8,500 lb**. If it's only 8,000, bias **~400 lb rearward** — easy levers: move the **water tanks** further aft (they're currently CG ~130), or shift the **pack CG** a touch rearward, or relocate the **CHP genset** (CG 110) back. None of these are hard; it's a placement tweak, not a redesign.

## Why it changed from the old numbers
The v0.1 doc read ~47/53 F/R at CG 156. The re-run lands ~49/51 at CG 151 because the **real masses** moved: the lighter e-axle (551 vs 950 lb, at the rear) and lighter power electronics reduced rear bias, while the mid-mounted pack + aluminium body hold the CG near centre. Net: **slightly more balanced (closer to 50/50), CG ~5 in forward.**

## Cross-checks
- **GVWR:** loaded 16,957 lb < 19,500 (Class-5) ✓ (margin +2,543, per the flagship decision).
- **Rear axle:** comfortable ✓.
- **Front axle:** confirm GAWR ✓/⚠ (the only open item).
- **CG height:** the pack-as-floor keeps the vertical CG low (rollover-resistant) — unchanged by this update.

## Open / next
- **Confirm front + rear GAWR** on the target chassis/axles; if front < 8,500, apply the ~400 lb rearward bias.
- Re-check the **loaded CG at the High-Naxtra tier** when that build is specced (nearly identical here).
- Fold the flagship axle numbers into the mass xlsx (when not open) and the master index.

---
*Axle-load balance re-run at flagship, 2026-07-07. Mid-HiNa 280 kWh loaded 16,957 lb, CG 151.2 in (dead-centre of 45-255 in wheelbase = balanced), front 8,382 lb (49.4%) / rear 8,575 lb (50.6%). Split stays ~49/51 across all tiers (pack dominates at CG ~150). vs old v0.1 (47/53, CG 156): real masses (lighter rear e-axle 551 vs 950, lighter power-elec) shifted it to ~49/51, CG ~5in forward = more balanced. ⚠ ONE FLAG: front axle ~8,382 lb loaded — confirm chassis front GAWR ≥ ~8,500 lb; if only 8,000, bias ~400 lb rearward (water tanks aft / pack CG / CHP back) — placement tweak not redesign. Rear e-axle ~8,575 lb comfortable under ~13,500. GVWR 16,957<19,500 ✓. Pack-as-floor keeps vertical CG low (rollover-resistant). See axle_balance_flagship.png. Next: confirm front+rear GAWR on target axles; re-check High-Naxtra CG; fold into mass xlsx + index.*
