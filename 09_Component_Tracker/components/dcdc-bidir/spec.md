# Bidirectional DC-DC (400↔48V)

**Subsystem:** Battery/Electrical · **Status:** candidate-selected · **Qty:** 1 (~8–10 kW; may be modular)
**Function:** the single **400 V ↔ 48 V gateway** between the traction domain and the all-DC house. Solar/genset charge the pack through it; the pack powers the house through it; it enables V2X.
**Source spec:** `03_.../Power_Electronics_Vetting.md`, `Bidirectional_V2X_Power_Station.md` · **Figure:** `photos/power_conversion.png` · **Researched:** 2026-07-07.

---

## Where it sits (the hub)
Traction runs off the **400 V** pack directly (e-axle, DC-fast port). The DC-DC is the **hub** between that 400 V world and the **48 V** house bus:
- **solar (48 V MPPT