# Compliance & Road-Legal - Vetting (steps 1-2)

**Date:** 2026-06-29  ·  The deferred 8th track, now started. *Not legal advice - verify with NHTSA + your state DMV before building.*

## Requirement
The bus must be **road-legal in the US**: external safety equipment (lighting, mirrors, reflectors), the applicable **FMVSS** for its weight class, and a **registration/title path**. Two cases: **V1** = converted donor (keeps VIN -> "converted EV", easiest); **V2** = ground-up (the hard path).

## Key findings

### Mirrors (FMVSS 111) - mirrors still required; design camera-ready
- **US still legally requires physical rear-view mirrors** (2026). Camera Monitor Systems (CMS) are **not yet approved** as a sole replacement - NHTSA is mid-rulemaking (petitions pending; May 2025 comment request). Europe already allows camera mirrors on trucks; the US hasn't caught up.
- **Design decision:** fit compliant physical mirrors now, but make them **removable and CMS-ready** - mounting bosses, side cameras + cabin display pre-wired - so we drop to cameras the day NHTSA permits it (Tesla designs its mirrors to be removable while retaining camera-based lane awareness). Future-proof, legal today.

### Lighting & conspicuity (FMVSS 108) - the >80 in width adds equipment
Base set: headlamps, tail, **stop/brake**, **turn signals** + hazards, backup lamp, license-plate lamp, side **marker lamps** (amber front / red rear) + **reflex reflectors**. Because the bus is **>80 in (2,032 mm) wide**, add:
- **Clearance lamps** at the upper outer edges (amber front / red rear),
- **Identification lamps** - 3-lamp clusters (front amber / rear red),
- **Conspicuity** - retroreflective sheeting / reflex reflectors (the red-white tape), required at >80 in + >10,000 lb GVWR.

### Other applicable FMVSS (by GVWR class)
Our ~19,500 lb GVWR is **above 10,000 lb**, which **exempts** several light-vehicle standards (e.g. 201 interior impact, 126 ESC, 138 TPMS, 208 dynamic airbag) but pulls in heavy-class ones. Plan to meet: **205** glazing (AS-marked), **105/135** hydraulic brakes (under 26k lb -> hydraulic, not air), **106/116** brake hoses/fluid, **119/120/139** tires/rims, **207/209/210** seats + belts + anchorages, **101-104** controls/wipers/**defrost/defog**, **114** rollaway/theft, **102** shift sequence, **124** throttle return. Plus non-FMVSS road-legal: VIN/registration, plates, horn, speedometer, parking brake, washer.

### Registration / who certifies
- **V1 (converted donor):** keeps its **original VIN, line-make, model year** as a *converted EV* - just a state safety inspection. Easiest path (see `Bus_V1_YellowBus_Scope.md`).
- **V2 (ground-up):** legally a **"specially constructed vehicle" (SPCV)** - state-by-state registration + inspection + bills of sale for major components. If ever *productionized/sold*, the builder becomes a **manufacturer / final-stage manufacturer** and must **certify FMVSS compliance + register Part 566 with NHTSA** (motorhomes on a chassis = final-stage; motorhome FMVSS 201 test area is limited to ~300 mm behind the driver seat). For one-off personal use, the SPCV route avoids full production certification.

## Verdict
Road compliance is **achievable and mostly off-the-shelf** (DOT/SAE-marked lamps, mirrors, glazing, tires) - the value-add is **designing it in from the start**, not bolting it on: camera-ready removable mirrors, the >80 in lighting set + conspicuity, and choosing the registration path per version (V1 keeps-VIN easy; V2 SPCV, productionization = NHTSA manufacturer). It's a paperwork + fit-out track, not a physics problem - consistent with the Assay calling regulation the "widest-band" risk.

## Open questions
1. **State of registration** (SPCV rules + inspection vary a lot by state) - pick the home state early.
2. **Brakes:** hydraulic (FMVSS 105/135, <26k lb) vs the donor/e-axle's existing system - confirm with the drivetrain choice.
3. **Mirror/CMS:** mirror model + the camera/display pre-wire spec.
4. **Lighting layout** - place the clearance/ID lamps + conspicuity tape into the body/CFD design (front-end doc).
5. **Productionization trigger** - at what point (kits? sold units?) NHTSA manufacturer registration becomes required.

## Sources
- [FMVSS 111 - mirrors still required; NHTSA CMS rulemaking/comment 2025](https://www.transportation.gov/regulations/federal-register-documents/2025-08811) · [49 CFR 571.111](https://www.law.cornell.edu/cfr/text/49/571.111)
- [FMVSS 108 - >80 in lighting: clearance/ID lamps, conspicuity](https://www.ecfr.gov/current/title-49/subtitle-B/chapter-V/part-571/subpart-B/section-571.108) · [49 CFR 393.11 lamps/reflectors](https://www.law.cornell.edu/cfr/text/49/393.11)
- [Multistage / final-stage manufacturer certification (NTEA)](https://www.ntea.com/multistage-vehicle-certification) · [49 CFR 567.5 multi-stage](https://www.law.cornell.edu/cfr/text/49/567.5)

---
*Compliance, steps 1-2 done. Mirrors required (design camera-ready/removable); >80 in adds clearance/ID lamps + conspicuity; meet GVWR-class FMVSS; V1 keeps-VIN easy, V2 = SPCV (productionization -> NHTSA manufacturer). Feeds the front-end design + a compliance checklist/tracker.*
