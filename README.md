# Divergent House Bus

**An open-source, integrated, all-electric self-moving dwelling.**

*Part of **Divergent Futures** — the Terrestrial Technology line. Where HABITAT is the proof-of-frame for living in space, the House Bus is the proof-of-frame for living on the move: a real, buildable object that demonstrates a thesis through engineering rather than assertion.*

This is a public, build-it-yourself engineering project: a full-time, four-season house bus that treats energy and heat as things to *reuse*, not waste. There is nothing proprietary here, and that is the point. The goal is to design it in the open so anyone can take the engineering, learn from it, and build their own. This is not a money project - it is an extrapolation of technology for everyone.

> Working name: *Divergent House Bus*. Naming is still open.
> Intended home: `github.com/divergent-futures/divergent-house-bus`

---

## The thesis

Every subsystem in a conventional RV solves one problem and throws away the by-product another subsystem is paying to create. The air conditioner dumps heat to the sky while a separate heater burns fuel to make the same heat. This project refuses that.

The organizing principle is a **single integrated thermal-electrical platform**: one structural battery, one coolant (Octovalve-style) loop, and one DC bus, so that **cooling the cabin makes the hot water**, the fridge shares the heat pump's cold, and a winter CHP generator that charges the battery also heats the cabin. Integration over invention - the next leap lives in connecting existing technologies, not inventing new ones.

A second idea rides underneath: **decoupling the dwelling from the land.** When the mobile shell becomes the home and the fixed house becomes the accessory, a lot of what we assume about housing starts to shift.

## What's locked

- All-electric, no gas. Full battery-electric drivetrain (~300-mile range).
- A single **~300 kWh structural sodium-ion pack** that forms the floor, drives the bus, and runs the house (no separate house battery), at **800 V** stepped down to a **48 V** house rail.
- **25-27 ft** with slide-outs; 2 full-time occupants (4 max).
- Winter = occasional ski weekends, carried by a **3.5 kW diesel CHP generator** feeding heat to the pack and cabin via the Octovalve loop.
- Heat reuse is grade-matched: low-grade recovered heat does low-grade jobs; high-grade loads (sauna, cooking) stay electric.

## Repository map

| Folder | What's inside |
|---|---|
| `00_MASTER_INDEX_and_Reconciliation.md` | Start here - the living index tying everything together |
| `00_Admin_Budget_Schedule/` | Mass & payload budget |
| `01_Roadmap_and_Strategy/` | Master roadmap, concept/thesis, gap analysis, design decisions log |
| `02_Systems_Architecture/` | The integrated thermal-electrical architecture |
| `03_Electrical_Battery_Solar/` | Electrical & power distribution, lighting/48V design tracks |
| `04_Thermal_HeatPump_Coolant_CHP/` | HVAC / Octovalve loop / CHP design track |
| `05_Energy_and_Thermal_Models/` | The energy & thermal model (spreadsheet) |
| `06_Donor_Vehicle_and_Chassis/` | Structure / chassis / mass design track |
| `07_Interior_and_Habitability/` | Water, sanitation, safety & egress design tracks |
| `08_Controls_and_Software/` | Controls & software design track |
| `09`-`14` | Build logs, testing, BOM, research, V2, inbox |
| `House_BUS_Subsystem_Tracker.xlsx` | Status of every subsystem design track |
| `Subsystem_Design_TEMPLATE.md` | The template each design track follows |

## How the design is organized

Because integration is the whole point, the subsystems are **not** designed as silos. Each subsystem design doc declares its interfaces back to the shared loop and bus (the I1-I12 interface map in the architecture doc). Follow the work in the `*.design.md` files and the tracker.

## Status

Early, active design. Concept and architecture are captured; the energy model, mass budget, and subsystem framework are up; subsystem tracks are being detailed one at a time (Electrical & Power Distribution is the first detailed track). You're watching it get built in real time.

## Contributing

Issues, ideas, corrections, and pull requests are welcome - especially from people who've built EVs, skoolies, off-grid power, or integrated thermal systems. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Hybrid open-source, matched to content type - hardware designs under **CERN-OHL-S-2.0** (so the hardware stays open and reciprocal), code under **MIT**, documentation under **CC-BY-4.0**. See [LICENSE.md](LICENSE.md).

## Safety

This describes a high-voltage (800 V), high-capacity battery vehicle with a combustion generator and water in the same space people live. **It is a design in progress, not a validated build.** Nothing here is engineering sign-off. High-voltage and lithium/sodium battery work can kill or burn you. Anyone building from this does so at their own risk and is responsible for their own safety, testing, and legal compliance. No warranty of any kind.

## Credits

By TJ and the Divergent Futures project (Terrestrial Technology line), designed in the open with AI collaboration. Contributions welcome - see CONTRIBUTING.md.
