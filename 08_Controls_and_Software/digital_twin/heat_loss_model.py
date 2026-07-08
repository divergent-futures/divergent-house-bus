#!/usr/bin/env python3
"""
HEAT-LOSS MODEL  -  where does the winter heat demand actually come from?
Builds the bus's overall heat-loss coefficient (UA, W/K) from envelope + windows
+ ventilation, instead of a lumped fudge factor. Answers TJ: "48 kWh/day seemed hefty."
Physics: steady heat loss = UA * dT.  Electric to supply it = heat / COP (heat pump).
"""
# ---- geometry (25-27 ft bus, exterior) ----
L, W, H = 7.9, 2.6, 2.9          # m
walls = 2*(L*H) + 2*(W*H)        # 4 sides
roof  = L*W
floor = L*W
win   = 6.0                      # m^2 glazing
opaque = walls + roof + floor - win

# ---- U-values (W/m2K); RSI = 1/U ----
U_wall, U_roof, U_floor = 0.29, 0.23, 0.29   # ~R20 walls/floor, ~R25 roof (good 4-season foam/VIP)
U_win = 1.3                                   # good triple glazing
UA_opaque = (walls-win)*U_wall*0 + 0          # placeholder to keep it explicit below
# compute per-surface (approx: attribute the window to wall area)
UA_walls = (walls - win)*U_wall
UA_roof  = roof*U_roof
UA_floor = floor*U_floor
UA_win   = win*U_win
UA_env   = UA_walls + UA_roof + UA_floor + UA_win
UA_bridge = 0.25*UA_env          # thermal bridges + slide-out seals (~25% uplift)

# ---- ventilation + infiltration ----
n_people = 2
vent_Ls  = 7.5*n_people          # L/s fresh air (ASHRAE-ish)
erv_eff  = 0.80                  # heat-recovery ventilator effectiveness
UA_vent  = vent_Ls/1000 * 1200 * (1-erv_eff)   # 1200 J/m3K air; after ERV recovery
vol      = L*W*2.3               # interior volume ~ m3
infil_ach= 0.12                  # air changes/hour (tight)
UA_infil = infil_ach*vol/3600 * 1200

UA = UA_env + UA_bridge + UA_vent + UA_infil

print("HEAT-LOSS MODEL  (well-insulated 4-season bus)")
print("="*60)
print(f"  envelope areas: walls {walls:.0f}  roof {roof:.0f}  floor {floor:.0f}  glazing {win:.0f}  (m^2)")
print(f"  UA walls={UA_walls:5.1f}  roof={UA_roof:4.1f}  floor={UA_floor:4.1f}  windows={UA_win:4.1f}  (W/K)")
print(f"  UA thermal bridges/slide seals (+25%) = {UA_bridge:4.1f}")
print(f"  UA ventilation (ERV {erv_eff*100:.0f}%) = {UA_vent:4.1f}   infiltration = {UA_infil:4.1f}")
print(f"  ---------------------------------------------")
print(f"  TOTAL UA = {UA:5.1f} W/K")
print()
COP = 2.2   # cold-climate heat pump (CO2 / boosted) COP at low temp
Tset = 21
print(f"  {'Outdoor':>8} {'dT':>5} {'heat-loss':>10} {'heat/day':>9} {'elec/day @COP'+str(COP):>16}")
for Tout in [5, 0, -8, -12, -20]:
    dT = Tset - Tout
    q_kw = UA*dT/1000
    q_day = q_kw*24
    e_day = q_day/COP
    print(f"  {Tout:6d}C {dT:5d} {q_kw:8.2f}kW {q_day:7.1f}kWh {e_day:12.1f}kWh")
print()
print("  => At -12C the CABIN heat DEMAND is ~%.0f kWh/day THERMAL, ~%.0f kWh/day ELECTRIC via heat pump."
      % (UA*(Tset-(-12))/1000*24, UA*(Tset-(-12))/1000*24/COP))
print("     (The old model's 48 kWh/day was ELECTRIC, implying ~120 kWh/day heat = ~3x too lossy.)")
print("  NB (sodium): the pack does NOT need warming to charge/discharge in cold, so this heat is")
print("     essentially all CABIN + water/pipes, not battery survival.")
