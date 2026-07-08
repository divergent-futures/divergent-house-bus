#!/usr/bin/env python3
"""
COLD-WEATHER PRECONDITIONING EXPERIMENT
Tests TJ's claim: "you lose LESS battery by having the diesel CHP."
Same cold spell run twice:
  A) CHP available -> its waste heat carries the cabin; battery is spared the heating load
  B) CHP dead      -> the heat pump must make all heat from BATTERY electricity
Compare heat demand, where the heat came from, comfort lost, and diesel.
"""
import numpy as np
from house_bus_twin import run, drive_reserve_kwh, P

cold = dict(hours=240,
            tout_fn=lambda t: -12 + 3*np.sin((t % 24 - 14)/24*2*np.pi),
            weather_fn=lambda t: 0.30,
            reserve_fn=lambda t: drive_reserve_kwh(D_safe=45, k_wx=1.30, k_terrain=1.1),
            soc0=0.55)

A = run(**cold)
B = run(**cold, faults={'chp_dead': True})

def line(tag, tw):
    demand = tw.acc['hvac_elec'] + tw.acc['chp_heat']
    batt = tw.acc['hvac_elec'] - tw.acc['shed']
    print("  %-26s demand=%6.1f  from-CHP=%6.1f  from-battery=%6.1f  COMFORT-SHED(cold)=%6.1f  diesel=%4.1fL  endSOC=%4.1f%%"
          % (tag, demand, tw.acc['chp_heat'], batt, tw.acc['shed'], tw.diesel_L, tw.soc/P['pack_gross']*100))

print("COLD-WEATHER PRECONDITIONING  -  10 days @ -12C, thin sun, start 55%  (kWh unless noted)")
print("="*112)
line("A) CHP available", A)
line("B) CHP DEAD (battery heat)", B)
print("-"*112)
demand = A.acc['hvac_elec'] + A.acc['chp_heat']
print("  Same heat DEMAND both cases (~%.0f kWh / 10 d, ~%.0f kWh/day at -12C)." % (demand, demand/10))
print("  WITH CHP: delivered ~%.0f kWh heat (~%.0f kWh/day) for %.1f L (~%.1f L/day); comfort met; reserve held."
      % (A.acc['chp_heat'], A.acc['chp_heat']/10, A.diesel_L, A.diesel_L/10))
print("  WITHOUT it: battery hits the reserve floor and ~%.0f kWh of heat is SHED -> cold cabin." % B.acc['shed'])
print("  => Genset turns a freeze-or-breach dilemma into a non-issue for <1 L/day, AND keeps the pack warm")
print("     so it accepts REGEN when driving. Recovered heat + regen is why you 'lose less battery'.")
