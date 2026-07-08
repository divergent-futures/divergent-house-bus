# BMS (traction + house)

**Subsystem:** Battery/Electrical · **Status:** candidate-selected · **Qty:** 2 (one per domain)
**Function:** cell V/T, SOC/SOH, balancing, charge/temp gating, contactor + interlock control. Feeds the Controls L1 safety layer (twin redundancy map wants 2 cross-checked SOC estimators).
**Source spec:** `03_.../Battery_and_Pack_Vetting.md`, `Controls_Brain_Spec_v0_4.md` · **Figure:** `photos/bms_options.png` · **Researched:** 2026-07-07.

---

## Two roles, because the pack is dual-domain
The structural pack is **two electrically-distinct sub-packs sharing one enclosure + thermal loop**, bridged by the bidirectional DC-DC — so there are **two BMS jobs**:

1. **Traction BMS** — ~**133S, 