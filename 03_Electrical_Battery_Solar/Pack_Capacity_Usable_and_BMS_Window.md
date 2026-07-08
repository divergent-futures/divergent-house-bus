# Pack Capacity: Nameplate vs Usable, the BMS Window, and the Survival Reserve

**Date:** 2026-07-07 · V2 bus. TJ's point: "there's a 390 kWh pack, but the actual usable is what, ~350?" — we need to be precise about **gross vs usable**, what the **BMS** protects, and the deliberate **survival reserve** we keep so the bus is never truly bricked. Plus the sodium-specific twist: sodium *tolerates* going to zero, so the bottom buffer is a **design choice, not a chemistry limit.** See `08_Controls_and_Software/pack_capacity_stack.png`. Feeds Battery + Controls + the range numbers.

---

## 1. The capacity stack (top → bottom)

| Layer | ~SOC | ~kWh | What it is |
|---|---|---|---|
| **Top buffer** | 95–100 % | ~20 kWh | daily charge ceiling ~95 % for longevity + BMS cell-balancing headroom (sodium is tolerant, so this is small; occasional 100 % is fine) |
| **Usable window** | 5–95 % | **~351 kWh** | what the app shows as 0 → 100 %; the energy you actually live on |
| **Survival reserve** | 2–5 % | ~8–12 kWh | **hidden below app-0 %** — powers *critical loads only* (BMS, controls, comms, egress lighting, freeze-protect) |
| **Hard floor** | ~2 % | — | absolute cutoff; sodium is 0 V-safe so this is conservative, not forced |

So: **nameplate 390 kWh → daily-usable ~351 kWh.** The ~39 kWh "missing" isn't lost — it's the top longevity buffer plus the survival sliver plus a hard-floor margin. This matches TJ's ~350 instinct.

## 2. Two different "reserves" — don't confuse them

This is the distinction that keeps the controls logic clean:

1. **Chemistry / BMS window (fixed).** The top buffer + the survival sliver. Set by the BMS, roughly constant. Its job is to **protect the cells** and **guarantee a keep-the-lights-on minimum** no matter what.
2. **Drive-reserve (operational, dynamic).** The **get-home energy**, and it sits *inside* the usable window. Set by the v0.4 formula (route + weather + climb), so it **breathes ~55–170 kWh** and moves every cycle. Enforced by the L1 safety layer.

They're different things at different scales: the drive-reserve (tens-to-~170 kWh) is a *software* floor you keep so you can reach safety; the survival reserve (~8–12 kWh) is a *chemistry/BMS* floor below even the app's 0 %. If a real emergency ever blew through the drive-reserve, you'd *still* have the survival sliver keeping life-support and comms alive. Belt and suspenders.

## 3. Why sodium changes the bottom end (the key chemistry point)

Sodium-ion behaves very differently from lithium at the bottom of the pack — and it's all upside for us:

- **0 V-safe, 100 % depth-of-discharge with no mechanical degradation.** Unlike Li-ion (damaged below ~2.5 V/cell), sodium can be taken all the way down safely. **So the bottom buffer is a deliberate design choice, not a chemistry cap** — we *could* use essentially the whole pack.
- **Safe 0 V storage** — cells sit at 0 V for ~6 months with ~zero capacity loss. Storage mode can rest low without harm.
- **10,000–20,000 cycle cells** (CATL Naxtra ~10k, Hithium ~20k) — deep cycling is fine; the pack outlives the vehicle.
- **Crush-safe (no combustion)** — reinforces the structural-pack safety case (the pack is a chassis member).

**The upshot:** because sodium doesn't *need* a protective bottom buffer, we can run a **wide usable window (~90 %)** and *still* choose to keep a small survival reserve — not to protect the cells, but to guarantee the bus/home never fully bricks. That's exactly TJ's framing: "sodium prefers to go to zero, but we'd rather leave some in the tank so worst-case you've got a couple percent to keep systems running."

## 4. The correction this forces on our numbers

The twin (`Digital_Twin_v0_5.md`) already flagged this, and it lands here:

- **Range must be quoted on *usable*, not nameplate.** ~351 kWh usable ÷ ~1.2 kWh/mi ≈ **~290 mi** — *not* the ~307 mi we'd get by dividing the 390 gross. The honest High-tier range is a bit lower than the nameplate math implied.
- **Tier numbers** (Entry 155 / Mid 280 / High 390 kWh) are **nameplate**; each should carry a usable figure (~90 %) and a range computed on it. → a v0.6 propagation task for the tier doc + winter model.

## 5. Design decision (recorded)

- **High tier: 390 kWh nameplate → ~351 kWh daily-usable** (charge ceiling ~95 %, app-0 % at ~5 %).
- **Survival reserve ~8–12 kWh** (2–5 %) for critical loads only, below the app's 0 %.
- **Wide window justified by sodium** (0 V-safe); the buffers are for longevity + guaranteed survival, not cell protection.
- **BMS owns** the fixed window; **Controls (L1)** owns the dynamic drive-reserve on top.

## 6. Open / next

- **Confirm the real cell** (CATL Naxtra / Hithium / HiNa) and its actual recommended top-charge % and cycle-vs-DoD curve — the ~95 %/~5 % window is a sensible default to refine per datasheet.
- **Propagate usable-range** into the tier doc + winter energy model (v0.6).
- **Survival-load list + budget** — exactly which loads the ~8–12 kWh must sustain, and for how long (drives the sliver size).
- **BMS spec** — balancing strategy, SOC-estimation (2 estimators, cross-checked per the twin's redundancy map), charge-temp gating.

---

*Pack capacity, 2026-07-07. NAMEPLATE 390 kWh (High tier) -> DAILY-USABLE ~351 kWh. Stack: top buffer 95-100% (~20 kWh, longevity+balancing, small since sodium-tolerant) / USABLE 5-95% (~351, app 0-100%) / SURVIVAL reserve 2-5% (~8-12 kWh, hidden below app-0, CRITICAL loads only: BMS/controls/comms/egress/freeze) / hard floor ~2%. TWO DIFFERENT RESERVES: (1) chemistry/BMS window (fixed: top buffer + survival sliver, protects cells + guarantees keep-lights-on min); (2) DRIVE-RESERVE (operational/dynamic, get-home energy INSIDE usable window, ~55-170 kWh, v0.4 formula, enforced by L1). Don't confuse them — survival sliver (~10 kWh) is below even app-0; drive-reserve (tens-170 kWh) is a software floor. SODIUM changes the bottom: 0V-safe 100% DOD no mechanical degradation (bottom buffer = DESIGN CHOICE not chemistry cap), safe 0V storage 6mo ~0 loss, 10k-20k cycle cells (CATL Naxtra/Hithium), crush-safe no combustion -> use WIDE ~90% window AND still keep a deliberate survival sliver (TJ: 'sodium prefers zero but leave some in the tank'). CORRECTION: quote RANGE on USABLE not nameplate -> ~351/1.2 ~= 290 mi (not 307 from 390 gross); tier numbers are nameplate, need usable+range each (v0.6 propagation). Decision: High 390 nameplate/~351 usable, charge ~95%/app-0 at ~5%, survival ~8-12 kWh. See pack_capacity_stack.png. Next: confirm real cell + top-charge%/DoD curve, propagate usable-range to tier+winter docs, survival-load budget, BMS spec. Sources: sodium 0V-safe/DOD/cycle-life (sunlithenergy, volta.foundation, CATL Naxtra, Hithium).*
