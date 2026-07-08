# Bidirectional inverter-charger

**Subsystem:** Battery/Electrical · **Status:** candidate-selected · **Qty:** 1–2 (split-phase) · ~7.6 kW
**Function:** the **AC gateway** on the 48 V bus — shore charging in, and **AC export out (V2H/V2G + AC power tools)**. This is the "one add" that unlocks AC export on top of the all-DC system.
**Source spec:** `Bidirectional_V2X_Power_Station.md` · **Figure:** `photos/power_conversion.png` · **Researched:** 2026-07-07.

---

## Where it sits
On the **48 V house bus**: shore AC (120/240 V) → charges the bus (and via the DC-DC, the 400 V pack); and 48 V → **120/240 V split-phase AC out** for home backup (V2H), grid export (V2G, where allowed), or job-site AC tools. DC-fast chargi