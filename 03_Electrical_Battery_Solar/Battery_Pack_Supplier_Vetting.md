# Battery & Pack - Supplier Field & Fit-for-Purpose Vetting (steps 1-2)

**Date:** 2026-06-29  ·  **Process:** per `01_.../House_BUS_System_Build_Process.md` - identify the field (1), vet fit-for-purpose (2), *then* a tracker (3, NOT yet).

## Our requirement
From the locked decisions + Electrical track v0.2 + Assay:
- **~300 kWh**, **400 V** (V1; 800 V future), **sodium-ion**, **structural** (cell-to-chassis, full-floor square slab, lowest CG).
- ~3,780 lb cell mass target at ~175 Wh/kg; ~0.83C peak (250 kW traction); -40/+70 C tolerant; >10k cycles.
- Needs a **BMS** that manages ~130S/400 V (sodium voltage profile) with cell balancing, SOC/SOH, contactor + IMD integration.
- The Assay's **#1 binding constraint is the structural FORM FACTOR, not the chemistry.**

## Step 1-2: field, vetted against that requirement

| Element | Tier | Candidate | Fit vs our spec | Verdict |
|---|---|---|---|---|
| **Sodium cells** | C (premium) | **CATL Naxtra** (~175 Wh/kg, mass-prod since Apr 2025; 2026 commercial-vehicle deployment) | Best density (matches our 3,780 lb mass), proven, but **OEM-tier access** (like Konvekta - needs channel reach) | **Reference / target**; direct buy hard today |
| **Sodium cells** | B (China, accessible) | **HiNa / CATL prismatic via distributors** (3.0-3.1 V, 70-220 Ah, **MOQ 1-4 pcs** from Shenzhen LC, Keheng, Deligreen); CATL BESS cell >300 Ah, ~160 Wh/kg, 15k cycles, -40/+70 C | **We can actually buy these now**, low MOQ; BESS-grade is ~160 Wh/kg (heavier than 175 target -> mass penalty) vs automotive-grade ~175 | **V1 realistic source** (automotive-grade if obtainable, BESS-grade fallback) |
| **Sodium cells** | B | BYD / Hithium / Envision / Faradion / TIAMAT | Alternatives; BYD vertically integrated | Backups |
| **Sodium cells** | (reject) | Natron Energy (US) | Prussian-blue = **high power, LOW energy**; data-center backup, not an energy pack | **Wrong chemistry for us** |
| **Structural pack / CTC** | A (self-build, default) | Our enclosure + cell-to-chassis integration | **No off-the-shelf SODIUM structural pack exists.** CTC is proven (BYD Cell-to-Body, Tesla structural) but **lithium, and not sold to builders** | **THE self-build value-add + the gate** |
| **BMS** | A/B (builder) | **Orion BMS 2 (Ewert Energy)** - trusted by EV builders/integrators, up to ~180 cells series (covers our ~130S/400 V), configurable chemistry | Fits 400 V; **Li-ion-designed -> needs a sodium SOC/voltage profile** | **V1 pick** |
| **BMS** | C / V2 | **Nuvation HV-BMS** (to 1500 V DC, 16 stacks) | Overkill for 400 V but **covers the 800 V V2 pack**; Li-ion-designed | **V2-ready reference** |

## The honest verdict
**Chemistry is solved and buyable; the structural pack is ours to build.** Unlike most subsystems, the *cells* are genuinely accessible to a small builder now (Chinese sodium prismatic at MOQ 1-4), and a capable **BMS (Orion)** is an off-the-shelf adopt. What does **not** exist off-the-shelf is a **~300 kWh, 400 V, sodium, structural (cell-to-chassis) pack** - so that integration is **Tier A self-build**, and it is exactly the Assay's #1 binding constraint. This is a clean philosophy split: **adopt the cells and the BMS; self-build the structural pack** (the part where we add real value and nobody sells what we need).

Mass note: automotive-grade sodium (~175 Wh/kg) hits the 3,780 lb budget; cheaper BESS-grade (~160 Wh/kg) is buyable at MOQ 1 but adds mass - a real V1 sourcing-vs-mass tradeoff. (LFP-for-V1 / sodium-for-V2 remains the documented phasing fallback if a structural *sodium* pack proves too green at build time.)

## Architecture refinement (TJ, 2026-06-29): dual-domain structural pack

**Idea:** instead of one 400 V pack + a DC-DC that carries all house load, put **two sodium packs inside the one bespoke structural enclosure** - a **~270 kWh @ 400 V** traction domain and a **~20-30 kWh @ 48 V** house domain - with **both BMS sealed inside** (waterproof, insulated, protected).

**Why it's worth doing (honest accounting):**
- **Physical fault isolation (strongest reason):** the house runs independently of the 400 V drive system - an HV fault/shutdown no longer blacks out the home, and a house fault doesn't touch traction. Big resilience/safety win for a full-time liveaboard.
- **Native-48 V efficiency:** house loads draw straight from 48 V cells (no continuous conversion); **solar charges the 48 V pack directly** (MPPT already targets 48 V).
- **One sealed structural enclosure**, fewer separate boxes.

**Corrections to the framing:**
- It is **fewer enclosures, not fewer parts** - adds a 2nd BMS and a 2nd cell config (48 V ~15S vs 400 V ~130S).
- **The DC-DC does NOT go away** - still needed, now **bidirectional**, because shore/DC-fast/CHP all arrive at HV and must fill the 48 V pack, and solar on 48 V should be able to assist traction. Its *duty* changes from "carry all house load continuously" to "rebalance/recharge between domains intermittently."

**The real tradeoff = sizing + range:** hold total ~300 kWh and wall ~30 kWh to the house -> traction ~270 kWh, range trims ~10% (~220 mi); OR keep ~300 for traction and add a 48 V pack -> +mass (~30 kWh ~ +550 lb). Note the current single-pack design already gives the house up to ~190 kWh with an 80 kWh drive-reserve floor, so a dedicated house pack gives the home *less* energy than it can reach today - but **guaranteed and isolated**.

**Founding-principle note:** this softly revises locked decision "single shared structural traction pack (**no separate house battery**)." Co-locating a 48 V sodium section in the same structure is a defensible evolution, but it IS a change - logged here for a conscious decision, not applied silently.

**Recommendation (leaning):** dual-domain structural pack, both BMS inside, **linked by the bidirectional DC-DC** -> get both physical isolation AND rebalancing flexibility.

**DECIDED (TJ, 2026-06-29, tentative): 48 V house domain = 30