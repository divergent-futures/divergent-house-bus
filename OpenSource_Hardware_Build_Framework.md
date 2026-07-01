# The Open-Source Hardware Build Framework
### A repeatable operating system for building an open, affordable, repairable machine - from napkin to shipped, forkable product.

*Distilled from the Divergent Futures **House Bus** program and written to be generic: it works for a kei truck in a shop, a house bus, a tractor, a robot - any open hardware build. Share it, fork it, improve it.*

**License intent:** this framework is CC-BY; apply it to hardware under **CERN-OHL-S**, code under **MIT**, docs under **CC-BY**.

---

## 0. Why a framework at all
Open-source hardware dies in two predictable ways: (1) a great shop builds a great machine but never documents it, so no one can reproduce or fork it; or (2) a great design gets documented forever but never meets a shop. This framework is the bridge - a **process that turns building into documentation and documentation into a buildable, forkable product**, so neither half is wasted.

## 1. Principles (decide these once)
1. **Open by default.** Every design, decision, and tracker is public and forkable. Off-the-shelf parts are named so anyone can rebuild.
2. **Extrapolate every permutation - but adopt what genuinely fits.** Most of what you'd *ideally* build with is years out, so the default is to engineer it yourself. **But** where a supplier has already done the engineering, the part fits your envelope, and you can't add value by integrating it yourself - **adopt it, without ego.** Self-build only what doesn't exist or where you'll do meaningfully better. (Spending finite engineering where it moves the needle is the whole discipline.)
3. **Roadmap the next version; leave headroom.** V1 forces concessions. Record where the tech is going and design the interfaces so the better version drops in later (the Tesla Model 3 -> Model Y lesson: the Y added structural castings + a heat-pump, but the 3's line was fixed and couldn't take them - don't get caught).
4. **Physics first (feasibility-gated).** A thing is gated by supply, integration, or regulation - almost never by physics. Prove the physics is fine early, then the rest is engineering + sourcing.
5. **Document as you go.** If it isn't written down, it didn't happen and can't be forked.

## 2. Stage the build (don't try to ship V2 first)
- **Stage 0 - Learning article.** The cheapest possible thing that teaches you the components and the workflow. (For the bus: a small trailer.)
- **Stage 1 - Proof-of-concept (V1).** Build the real machine using **off-the-shelf parts wherever possible**, on a reduced feature set. Goal: prove it works, build skills, build an audience, maybe crowdfund. Accept that it's less efficient - that's honest, watchable, and it earns the right to build V2.
- **Stage 2 - Integrated build (V2).** The bespoke, fully-integrated version - the north star. Most of your deep design work is really *this*.

## 3. The subsystem loop (the core of the method)
Run **every** subsystem through the same six steps, in order. **Never skip step 2.**

```
1 IDENTIFY  ->  2 VET FIT-FOR-PURPOSE  ->  3 TIERED TRACKER  ->  4 DESIGN  ->  5 VERIFY  ->  6 ROADMAP V2
   the field      vs your specs/physics       A/B/C candidates    integrate     check work    leave headroom
```

1. **Identify the field.** What must this subsystem actually do for *your* machine (real specs, loads, safety drivers)? Who makes things in this space - incumbents, low-cost makers, retrofit/component suppliers, and the raw parts a self-build would use? Cast wide.
2. **Vet fit-for-purpose (the step everyone skips).** Put each candidate against your real requirement *and the physics*, not its marketing: Does it cover the whole scope? Is it **sized for you** (a great product for the wrong envelope is the wrong product)? Voltage/interface/safety fit? Can you actually buy it (MOQ, region, small-buyer)? Can you add value by integrating it yourself? This step - not reflex - decides **adopt vs build**.
3. **Tiered sourcing tracker (only after 1-2).** Three tiers per component: **A** = build/assemble yourself (the default path; the integration is yours even if parts are catalogue); **B** = low-cost sourced (often the prototype pick); **C** = high-end incumbent (the "prove it exists" reference + fallback, never assumed available). Columns: maker, model, spec, interface, price (mark quote-based ones), small-buyer access, **fit verdict**, **V1 pick**, source. Roll up the V1-pick cost.
4. **Design / integrate.** Take the picks into a design doc: how it mounts/wires/plumbs, its interfaces back to the shared system, open questions. Tie every number to your energy/mass/cost models.
5. **Verify.** Cross-check internal consistency, zero model errors, reconcile with the master models; for high-stakes calls, a second adversarial pass.
6. **Roadmap V2.** Write the next-version path and design the interface so it drops in.

**Each subsystem produces:** a fit-for-purpose **vetting note** (1-2), a **tiered tracker** (3), a **design doc** (4), a line in the **master index**, and a **V2/headroom note** (6).

## 4. The adopt-vs-build decision rule
Adopt (Tier B/C) when: the part fits your envelope, it's buyable, and you can't add value by integrating it yourself. Build (Tier A) when: it doesn't exist at your scale, or you'll do meaningfully better. **"Build the frame that doesn't exist; adopt the panels/parts that do."** Most subsystems are a mix.

## 5. Light feasibility instrument (triage before you invest)
For any bold claim or part, ask in ~60 seconds: does it **violate physics** (kill it), or is it just unvalidated/plausible? What's the **single binding constraint** (name the one that gates it, don't list ten)? What's the **idiot index** (cost vs raw-material cost - room to fall)? Log a **dated, gradable prediction** for the big calls so you can calibrate later. (Run the full version only on the things that earn it.)

## 6. Repo structure (a template you can copy)
```
00_Admin_Budget_Schedule/       mass/cost budgets, schedule
00_MASTER_INDEX.md              the living index + decision log (read this first)
01_Roadmap_and_Strategy/        thesis, staging, this framework, build-process
02_Systems_Architecture/        how it all fits together
03..NN_<Subsystem>/             one folder per subsystem: vetting + design docs
11_Suppliers_BOM_Procurement/   tiered sourcing trackers + consolidated BOM/mass
09_Build_Logs/                  what actually happened on the floor
10_Testing_and_Validation/      tests, measurements, sign-offs
LICENSE / CONTRIBUTING / CODE_OF_CONDUCT
```
Keep a **master index** that lists locked decisions, per-subsystem status, and open questions - it's the single source of truth and the first thing a forker reads.

## 7. Continuity & knowledge management
- **Living index / reconciliation doc** - every decision, dated, with the reasoning (so "why did we do X" is never lost).
- **Decision log** - one line per locked call.
- **Notes/memory discipline** - capture the *non-obvious why* (not what the repo already shows), so context survives gaps and hand-offs.

## 8. Verification discipline
Zero-error models (no broken formulas). Cross-check with **two independent methods** (e.g. a bottom-up BOM vs a tracker roll-up landing in the same band = confidence). Re-run feasibility when a big number changes. Keep a conservative **planning floor** separate from idealised best-case numbers.

## 9. Where the framework meets a shop (for team builds)
If you have a physical shop, pros, and volunteers (the Mutiny model), bolt these on:
- **Roles:** a build lead, a documentation owner (critical - the person who keeps the repo honest), sourcing/procurement, and volunteer coordinators. The doc owner is what stops a shop-strong project from having an empty repo.
- **Build logs tied to trackers.** Every floor session logs against the subsystem + the tracker line it touched - that's how building *becomes* documentation.
- **Hardest-module-first.** Prototype the riskiest subsystem as a standalone unit before the whole machine (e.g. the drivetrain + battery integration). De-risks everything downstream.
- **Content cadence mapped to the process.** Each of the six steps is a content beat: "here's the field," "here's what we vetted," "here's the tracker," "here's the build," "here's the test." The process *is* the editorial calendar.
- **Task board** mirroring the subsystem loop, so volunteers can pick up bounded, well-specified work.

## 10. Licensing & openness
**Hardware/designs: CERN-OHL-S** (strongly reciprocal - improvements stay open). **Code: MIT.** **Docs: CC-BY.** Publish a **Source Location** so forkers can always find the latest. Name your off-the-shelf parts and their sources - a BOM someone can actually buy from is the difference between "open" in name and in practice.

## 11. The content flywheel (the org model)
The process is the editorial spine: **document the build -> audience -> credibility -> funding + volunteers + supplier interest -> more build.** A "random person emailing a supplier" gets ignored; "an open-source project with a visible community and a real market behind it" gets a reply. The content isn't separate from the build - running the loop in public *is* the growth engine.

## 12. Quick-start checklist
- [ ] Write your **principles + thesis** (one page).
- [ ] Pick your **staging** (learning article -> PoC -> integrated).
- [ ] Stand up the **repo skeleton** + master index + licenses.
- [ ] List your **subsystems**; run each through the **six-step loop** (don't skip step 2).
- [ ] Build **tiered trackers**; roll up a **BOM + mass** budget; cross-check two ways.
- [ ] Prototype the **hardest module first**.
- [ ] Map the **six steps to a content calendar**; assign a **documentation owner**.
- [ ] Keep the **index + decision log** current; capture the non-obvious *why*.

---
*Open-Source Hardware Build Framework v1.0 - a Divergent Futures / Terrestrial Technology method, distilled from the House Bus program. CC-BY: use it, fork it, improve it. The point is that "extrapolate everything" only stays honest if every subsystem actually gets walked through the field before you commit - and that building in public, documented as you go, is how an open machine actually gets built and reproduced.*
