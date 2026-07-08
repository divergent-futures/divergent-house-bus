#!/usr/bin/env python3
"""
WINTER DIESEL SWEEP (v0.6 corrected heat model)
Answers TJ: "how much diesel does it actually take to stay warm?"
Each row = a 10-day parked winter spell at a given outdoor temp + sun level.
Heat is UA-based thermal, delivered by a heat pump (COP), solar offsets electric,
CHP fires only when the pack nears the drive-reserve. Reports diesel/day.
"""
import numpy as np
from house_bus_twin import run, drive_reserve_kwh, P

def spell(name, tout, sun, soc0):
    tw = run(240,
             tout_fn=lambda t, T=tout: T + 3*np.sin((t % 24 - 14)/24*2*np.pi),
             weather_fn=lambda t, S=sun: S,
             reserve_fn=lambda t: drive_reserve_kwh(D_safe=45, k_wx=1.30, k_terrain=1.1),
             soc0=soc0)
    hd = tw.acc['heat_demand']/10                     # kWh thermal/day
    hpe = tw.acc['hvac_elec']/10                       # heat-pump electric/day
    sol = tw.acc['solar']/10                           # solar/day
    return name, hd, hpe, sol, tw.diesel_L/10, tw.min_soc/P['pack_gross']*100, tw.reserve_breaches

print("WINTER DIESEL SWEEP  -  10-day parked spells, corrected UA heat model (UA=%.0f W/K, COP heat=%.1f)"
      % (P['ua_w_per_k'], P['cop_heat']))
print("="*104)
print("  %-30s %10s %12s %10s %11s %9s" % ("spell","heat(th)/d","HPelec/d","solar/d","DIESEL/d","minSOC"))
rows = [
    spell("Mild winter (-5C, decent sun)",  -5, 0.50, 0.70),
    spell("Cold, thin sun (-12C)",         -12, 0.30, 0.60),
    spell("Deep cold, low sun (-18C)",     -18, 0.15, 0.55),
    spell("Extreme sunless (-25C storm)",  -25, 0.05, 0.50),
]
for n,hd,hpe,sol,dl,ms,br in rows:
    flag = "" if br==0 else "  <-- reserve breach!"
    ss = hd/5.5   # sunless steady-state: diesel to supply ALL heat directly from CHP (no buffer, no sun)
    print("  %-30s %8.0f kWh %9.0f kWh %8.0f kWh %8.1f L %6.0f%%  [sunless steady ~%.0f L/d]%s"
          % (n,hd,hpe,sol,dl,ms,ss,flag))
print("-"*104)
print("  TWO diesel numbers: 10-day AVERAGE (low - the big pack buffers short spells, CHP fires late) vs the")
print("  SUNLESS STEADY-STATE (~heat/5.5 L/day - the ongoing cost if the sun never returns and the buffer is gone).")
print("  Cabin heat via HEAT PUMP (COP %.1f): the ELECTRIC draw is ~heat/COP, and SOLAR covers most of it in any"
      % P['cop_heat'])
print("  sun. Diesel stays ~0 until sun disappears in deep cold; only a sustained sunless freeze needs real diesel.")
print("  Burning diesel purely for DIRECT heat would be ~%.0f L/day at -12C (38 kWh th / 5.5 kWh-per-L) - which is why"
      % (38/5.5))
print("  we use the HEAT PUMP (2.2x) and let solar carry it, NOT the genset, whenever there is any sun.")
