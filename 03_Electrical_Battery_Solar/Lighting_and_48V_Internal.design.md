# Lighting & 48V Internal Systems - Design Track

**Status:** Seeded (ready to detail)  ·  **Priority/Sequence:** 3 (research-led)  ·  **Depends on:** Electrical
**Part of:** House BUS subsystem design tracks. Integration is the thesis - every component below names its interface back to the shared loop / bus.

## 1. Purpose & requirements
Run lighting, networking, and devices natively at 48 V wherever possible to minimise conversion losses - the 48V-internal research track: what runs native at 48 V (lighting, PoE++), what needs a local buck, and what truly needs 110 V AC.

## 2. Interfaces (to the integrated loop / bus)
These are the couplings this subsystem owns or touches, from the architecture interface map (I1-I12):

- Draws from the 48 V house rail (downstream of I11)

## 3. Components
- 48 V native LED lighting, zoned and dimmable
- Local buck converters near loads (48 -> 12/5 V) for legacy electronics
- Network: router + managed switch with PoE++ (802.3bt) for cameras, APs, devices
- Comms: Starlink + cellular; USB/data distribution; INA219 per-zone power monitoring

## 4. Electrical load contribution
Lighting ~250 Wh/day + electronics/TV (see model).

## 5. Mass contribution
Folded into wiring / misc in the mass budget.

## 6. Open questions
- RESEARCH: native-48 V availability for lighting and PoE++ device set
- PoE++ budget (which devices, total watts)
- Per-device decision: native 48 V vs local buck vs 110 V AC
- Conductor sizing and the TE 48V connector map for low-voltage branches

## 7. Sourcing & decisions
- 48 V LED (SuperBrightLEDs, Larson); Daygreen/ATO 48 V buck modules; 48 V PoE++ switches

---
*Seeded 2026-06-26. Fill in detail as the subsystem is designed; keep Section 2 in sync with the architecture interface map.*
