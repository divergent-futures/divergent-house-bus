# Contributing to Divergent House Bus

Thanks for your interest - this is an open project and outside engineering eyes make it better.

## Ways to help

- **Open an issue** to point out an error, a safety concern, a better component, or a sizing mistake.
- **Start a discussion** for design questions and trade-offs.
- **Open a pull request** to improve a design doc, add a calculation, or contribute a build log.

## The one rule that keeps this project coherent

Integration is the thesis. **Every subsystem design names its interfaces back to the shared loop and bus** (the I1-I12 interface map in `02_Systems_Architecture/`). If you change a subsystem, keep its interface section in sync, and check the energy model and mass budget still close.

## Conventions

- Subsystem design docs follow `Subsystem_Design_TEMPLATE.md` and live in their numbered folder as `*.design.md`.
- Keep numbers traceable to the energy model or mass budget where possible.
- Prefer plain-language reasoning over jargon; flag open questions explicitly.

## Sign-off

By contributing, you agree your contribution is licensed under the same terms as the content type it touches (see `LICENSE.md`): inbound = outbound.

## Safety

This is an unvalidated design involving high voltage, large batteries, and combustion. Do not present untested advice as verified. If you flag a safety issue, say so clearly in the issue title.
