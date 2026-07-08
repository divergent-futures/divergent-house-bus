# Divergent Futures — Configurator Platform Spec (v1)

**Status:** Draft v1 | **Date:** 2026-07-07 | **Owner:** TJ
**Purpose:** One data format that both House BUS and Slipstream (and any future DF product) conform to, so the standalone configurator app can render any product from a config file. The two product projects own *what* the forks and parts are; this spec owns *how* they're expressed. This is the cohesion contract.

---

## 1. Architecture

```
House BUS project ──► house-bus.config.json ──┐
                                              ├──► Configurator App (separate repo)
Slipstream project ─► slipstream.config.json ─┘      generic engine: render forks,
                                                     apply effects, enforce rules,
                                                     compute summary, emit BOM
```

- Each product ships **one JSON config file** conforming to `df-configurator/v1`.
- The app repo contains **zero product knowledge** — it renders whatever the config describes. Adding a product = adding a config file.
- The per-product HTML prototypes in this repo (`01_Roadmap_and_Strategy/House_BUS_Configurator.html`, `15_Slipstream_Trailer/Slipstream_Configurator.html`) are reference implementations of the engine; the app supersedes them.

## 2. Schema — `df-configurator/v1`

```jsonc
{
  "schema": "df-configurator/v1",
  "product": {
    "id": "slipstream",              // slug, unique across DF
    "name": "Slipstream Trailer",
    "tagline": "...",
    "base": {                        // the all-defaults reference configuration
      "dryWeightLb": 1900,           // bus uses curbWeightLb
      "costBasisUsd": 30000,         // component cost basis, not retail
      "notes": "Retail ≈ multiplier × cost basis; see product doc"
    }
  },
  "categories": [ { "id": "power", "label": "Power system", "order": 3 } ],
  "forks": [
    {
      "key": "battery",              // stable ID — the app's URL/BOM key
      "label": "Battery capacity",
      "hint": "one-line guidance shown under the label",
      "category": "power",
      "options": [
        {
          "id": "kwh12",
          "name": "12 kWh",
          "sub": "the reference default",
          "default": true,           // exactly one per fork; defaults = reference build
          "effects": { },            // numeric deltas vs. the default option (see §3)
          "sets": { },               // absolute constraints this option establishes (see §3)
          "note": "surfaced as a ⚑ flag in the summary",
          "todo": "flag for estimates still needing real numbers"
        }
      ]
    }
  ],
  "rules": [ ],                      // compatibility rules (see §4)
  "profiles": [ ],                   // named identities matched from selections (see §5)
  "tiers": [ ]                       // price-bracket display (see §5)
}
```

**Conventions.** All `effects` are **deltas relative to the fork's default option** (default option effects are all zero). Therefore the all-defaults configuration reproduces `product.base` exactly. Weights in lb, costs in USD, capacities in kWh/W/gal.

## 3. Effects & sets vocabulary

Engines must ignore keys they don't know — products may extend.

| Key | Unit | Meaning |
|---|---|---|
| `addLb` | lb | dry/curb weight delta |
| `addCostUsd` | USD | component cost basis delta |
| `kwh` | kWh | battery capacity delta |
| `kwhMult` | × | battery capacity multiplier (bus chemistry fork) |
| `rangeMi` / `rangeMult` | mi / × | bus: onboard range |
| `dragPct` | %-pts | trailer: added tow-range loss vs. locked geometry |
| `solarW` | W | solar capacity delta |

`sets` establishes absolute constraints (not deltas), e.g. the tow-vehicle fork: `{"maxTowLb": 3500, "maxTongueLb": 350, "matchWidthIn": 78}`. The engine's **derived checks** (§4) read these.

**Parts / BOM.** `product.baseParts` lists the invariant-core parts; any option may carry `parts: [{id, name, qty, estUsd}]` (absolute, not deltas — defaults may carry parts). The BOM for a configuration = baseParts + parts of every selected option. Part `id`s are the shared slugs from §7 — same component in bus and trailer ⇒ same slug. `estUsd` values trace to the product's sourcing doc (trailer: `Slipstream_Component_Sourcing_v0_1.md`); items without vendor data yet simply omit `estUsd` and render as TBD. The reference engines show the BOM as a collapsible panel; the app formalizes it into exportable per-config BOMs.

## 4. Compatibility rules

```jsonc
{ "id": "no-heater-summer",
  "type": "forbid",                 // forbid | warn
  "when": { "season": "summer", "heating": ["ptc", "heatpump", "webasto"] },
  "message": "A heater implies at least 3-season. Change season rating or heating." }
```

- `when` is a conjunction; values may be a single option id or an array (OR within a fork).
- `forbid` → configuration invalid, shown red; `warn` → allowed, shown as ⚠.
- **Derived checks** are computed, not enumerated: (a) dry weight vs. `maxTowLb`; (b) estimated tongue weight (12% of dry) vs. `maxTongueLb`; (c) width option vs. `matchWidthIn`. The app must implement these three for any product whose tow-vehicle fork uses `sets`.
- The rule list in each config is the product team's floor, not ceiling — the app may add physics-derived rules but may never remove authored ones.

## 5. Profiles & tiers

`profiles` map selections to a product identity shown in the summary (bus: "🏔️ Overlander"; trailer: "🏕️ Weekend"). First match wins; `match` uses the same syntax as rule `when`. A profile with `"matchDefaults": true` fires when every fork is at default (used for "Reference Build #1").

`tiers` are display brackets (`name`, `priceRange`, `match`). **The tier axis differs per product, deliberately:** the bus's ladder is *range* (100/200/300-mile — a massive vehicle, one manufacturing reality); the trailer's ladder is *build complexity/skill* — from a beginner foamie/A-frame (~$5-12K, foam + glue + weekend tools) through the reference composite pop-up box, up to Range-Neutral (~$90-120K target): a salvaged Tesla Model 3/Y pack (~80 kWh, millions entering the salvage stream) + Lightship-style tongue-force-sensing propulsion so the trailer pushes itself and the tow car loses ≈0% range. The propulsion inverter/drive stack is intended as its own open-source community repo — swap any portion. The engine surfaces this axis as a "Build skill" line in the summary (Beginner → Expert).

## 6. Shared design language (UI cohesion)

Both configurators and the app use the same tokens (from `House_BUS_Configurator.html`):

```css
--navy:#1f3a56; --green:#2f6b2f; --accent:#6aa84f; --rust:#8a3d17;
--paper:#f7f9fb; --line:#dce3ea;
```

Layout: option-card grid left, sticky summary card right, green summary header, rust-colored ⚑ flag notes, dashed footnote box for cost caveats. System font stack. One product = one accent identity later if desired, but v1 keeps a single family look.

## 7. Cross-product cohesion rules

1. **Shared parts get shared IDs.** Components used by both products carry the same part slug in BOM output: `victron-multiplus2-48-3000`, `victron-cerbo-gx`, `victron-mppt`, `nema-14-50-inlet`, `curt-echo`, `48v-linear-actuator`. The 48V Victron spine is the platform: both products speak the same electrical language.
2. **Same fork vocabulary where concepts overlap.** `battery`, `chem`, `solar`, `season`, `rear` (hardpoints/geometry) keep consistent key names so the app can cross-reference ("your bus tows your trailer" checks live here — bus `rear: toy` hardpoints ↔ trailer existence).
3. **Products stay independent.** The bus does not tow the trailer; there is no cross-product pairing. Each product's config is self-contained, and the future app treats them as separate catalog entries that happen to share a schema, parts vocabulary, and design language. Amalgamation into one app happens only after each product's design settles — the configurator app is its own project, later.
4. **Rationale travels with the fork.** Every non-obvious option carries a `note` — the configurator teaches, it doesn't just tally. This is the "smart fork" principle from the Slipstream handoff.

## 8. File inventory

| File | Role |
|---|---|
| `Configurator_Platform_Spec.md` | this contract |
| `01_Roadmap_and_Strategy/house-bus.config.json` | bus data, schema v1 (extracted from prototype HTML) |
| `01_Roadmap_and_Strategy/House_BUS_Configurator.html` | bus reference UI (pre-schema; to be re-based on the JSON) |
| `15_Slipstream_Trailer/slipstream.config.json` | trailer data, schema v1, full fork inventory |
| `15_Slipstream_Trailer/Slipstream_Configurator.html` | trailer reference UI (schema-driven engine) |
| `15_Slipstream_Trailer/PROJECT-SLIPSTREAM-*.md` | trailer source-of-truth docs |

## 9. Open items for the app project

- BOM output format (per-config parts list with shared part slugs) — inherit bus BOM infrastructure or define fresh (Slipstream handoff §9).
- Pricing model: cost basis → retail multiplier per product (bus ~1.75×; trailer TBD).
- Drawings/build-doc generation per configuration.
- Jurisdiction/regulatory layer (trail