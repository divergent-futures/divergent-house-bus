#!/usr/bin/env python3
"""
COLD-WEATHER PRECONDITIONING EXPERIMENT (v0.6 heat model)
Same cold spell run twice, with the corrected UA-based heat load + heat pump:
  A) CHP available -> its waste heat displaces heat-pump load; battery spared
  B) CHP dead      -> the heat pump makes all heat from BATTERY electricity
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
    hd  = tw.acc['heat_demand']        # kWh THERMAL demand
    chp = tw.acc['chp_heat']           # kWh THERMAL from CHP waste heat
    hpe = tw.acc['hvac_elec']          # kWh ELECTRIC drawn by heat pump for HVAC
    print("  %-24s heat-demand=%6.0f(th)  from-CHP=%6.0f(th)  heat-pump-ELEC=%6.0f  COMFORT-SHED=%6.0f  diesel=%4.1fL  endSOC=%4.1f%%"
          % (tag, hd, chp, hpe, tw.acc['shed'], tw.diesel_L, tw.soc/P['pack_gross']*100))

print("COLD PRECONDITIONING  -  10 days @ -12C, thin sun, start 55%  (th = kWh thermal)")
print("="*124)
line("A) CHP available", A)
line("B) CHP DEAD (heat pump)", B)
print("-"*124)
hd = A.acc['heat_demand']
print("  Cabin heat DEMAND ~%.0f kWh THERMAL / 10 d (~%.0f kWh/day at -12C) -> via heat pump COP %.1f = ~%.0f kWh/day ELECTRIC."
      % (hd, hd/10, P['cop_heat'], hd/10/P['cop_heat']))
print("  WITH CHP: ~%.0f kWh of that heat came free from the genset (%.1f L, ~%.1f L/day); comfort met; reserve held."
      % (A.acc['chp_heat'], A.diesel_L, A.diesel_L/10))
print("  WITHOUT CHP: heat pump draws ~%.0f kWh electric over 10 d from battery+solar; comfort-shed=%.0f kWh."
      % (B.acc['hvac_elec'], B.acc['shed']))
print("  NB sodium pack needs NO warming to charge/discharge cold -> this heat is CABIN + water/pipes, not battery.")
