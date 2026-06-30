# How We Build Any System — The House Bus Process

**A reusable method for taking any subsystem from idea to a sourced, buildable design.** Part of **Divergent Futures · Terrestrial Technology** — open-source. This is the *process*; each subsystem's own docs are the *output*. Apply it the same way every time so the project stays honest and the work is reproducible by anyone in the community.

---

## The governing philosophy

Two ideas drive every decision (full version in `House_BUS_Thesis_v1.0.md` §7b):

1. **Extrapolate every permutation — because most of what we'd ideally build with is 5–10 years out and doesn't exist yet.** So the *default working assumption* is that we engineer it ourselves. This is not a reflex to reject good products.
2. **Adopt what already fits.** Where a company has genuinely done the engineering, the product fits our envelope, and we can't add value by vertically integrating it, we adopt it without hesitation. That frees our finite engineering for the problems that actually need it. Self-build is reserved for what doesn't exist, or where we can do meaningfully better.

And the discipline most people skip: **roadmap the permutations forward and leave headroom for V2.** Build V1 with today's mature parts, but record where the technology is heading and design the interfaces so the better version drops in later (the Tesla Model 3 → Model Y lesson: the Y added structural castings and a heat-pump HVAC, but the 3's line was already fixed and couldn't take the castings — don't get caught like that).

---

## The pipeline (do the steps in order — never skip the middle)

```
1 IDENTIFY  ->  2 VET FIT-FOR-PURPOSE  ->  3 TIERED TRACKER  ->  4 DESIGN  ->  5 VERIFY  ->  6 ROADMAP V2
   the field      against our specs/physics    A/B/C candidates    integrate     check work    leave headroom
```

### Step 1 — Identify the field
Write down **what this subsystem must actually do** for *our* bus: the real duty (kW, temps, voltages, flows, loads, safety drivers), pulled from the relevant design track. Then survey **who makes things in this space** — incumbents, low-cost (often Chinese) makers, retrofit/component suppliers, and the raw components a self-build would use. Breadth here is the point; cast wide.

### Step 2 — Vet fit-for-purpose (the step everyone skips — don't)
Put each candidate against our actual requirement and **the physics**, not its marketing. Ask:
- Does it cover our **whole scope**, or only part? (Name the gap.)
- Is it **sized for us**, or is it built for something 3× bigger/smaller? *(A great product for the wrong envelope is the wrong product.)*
- Voltage / interface / refrigerant / safety compatibility?
- **Can we actually buy it** (small builder, MOQ, region, shipping), or is it OEM-only?
- **Can we add value** by integrating it ourselves, or has the maker already nailed it?

This step decides **adopt vs self-build**, and it does so on *fit*, not on reflex. The output is an honest verdict per candidate. (Worked example: the thermal core — see `04_.../Thermal_Core_Supplier_Vetting.md` — where vetting showed the proven OEM units were 2.5–3× oversized and sealed, so we self-build from components instead.)

### Step 3 — Tiered sourcing tracker
Only *after* steps 1–2, build the tracker (`.xlsx`). Three tiers per component:
- **Tier A — build/assemble ourselves (the default path):** from catalogue components. Not invent-from-scratch — the *integration* is ours.
- **Tier B — low-end sourced (usually Chinese):** cheaper, serviceable, often the prototype pick.
- **Tier C — high-end incumbent:** the prove-it-exists reference and the documented fallback; never *assumed* available.

Columns: maker, model, key spec, voltage/interface, price (low/high, mark quote-based ones), small-buyer access, region, **fit verdict**, **V1 pick**, source. Roll up the V1-pick cost and cross-check it against the BOM.

### Step 4 — Design / integrate
Take the picks into the subsystem's design track: how it wires/plumbs/mounts, its interfaces back to the shared loop and bus, its open questions. Keep every number tied to the energy/mass/BOM models.

### Step 5 — Verify
Cross-check the work: internal consistency (kW, voltages, refrigerant lanes, loads) across the subsystem's docs; the tracker matches the resolved decision; zero spreadsheet errors; numbers reconcile with the master models. For high-stakes calls, a second adversarial pass.

### Step 6 — Roadmap V2 (leave headroom)
Before closing the subsystem, write down the **V2 path** and **design the interfaces so it can drop in**: the better part we know is coming (e.g. 800 V pack, a future single-vendor integrated core), and the space/ports/standards we reserve now so the upgrade is engineered-in, not bolted-on.

---

## Outputs every subsystem produces
- A **fit-for-purpose vetting** note (steps 1–2).
- A **tiered sourcing tracker** `.xlsx` (step 3).
- An updated **design track** `.design.md` (step 4).
- A line in the **master index** and **memory**, plus any model updates.
- A **V2 / headroom** note (step 6).

## Status of subsystems against this process
| Subsystem | 1 Identify | 2 Vet | 3 Tracker | 4 Design | 5 Verify | 6 V2 |
|---|---|---|---|---|---|---|
| Drive axle / drivetrain | done | done | done | partial | — | noted |
| Thermal core | done | done | **done** | v0.2+granular | done | noted |
| Battery / pack | **done** | **done** | **done** | v0.1 | — | 800 V noted |
| Power electronics | **done** | **done** | **done** | in Electrical v0.2 | — | 800 V / MCS noted |
| Body / structure | **done** | **done** | **done** | v0.1 | — | ground-up noted |
| Water | **done** | **done** | **done** | v0.1 | — | noted |
| Controls / software | **done** | **done** | **done** | v0.2 | — | noted |
| Safety / egress | **done** | **done** | **done** | v0.1 | — | noted |
| Lighting / 48 V | **done** | **done** | **done** | v0.