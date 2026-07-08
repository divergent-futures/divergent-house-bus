#!/usr/bin/env python3
"""
House BUS - Digital Twin: BREAK TESTS
"Build it, then try to break it." Each test injects a fault or an abusive
scenario and checks the safety invariants still hold:
  INV-1  parked SOC never below the drive-reserve floor  (reserve_breaches == 0)
  INV-2  never stranded mid-drive                         (stranded == 0)
  INV-3  SOC never below the pack minimum                 (min_soc >= 5%)
A test "PASSES" if the system either rode it out safely OR degraded safely
(shed load, fired the CHP) WITHOUT violating an invariant. A test that violates
an invariant is a real finding we must design against.
"""
import numpy as np
from house_bus_twin import run, drive_reserve_kwh, P

SMIN = P['soc_survival_frac'] * P['pack_gross']

def check(name, tw, expect="safe", note=""):
    inv1 = tw.reserve_breaches == 0
    inv2 = tw.stranded == 0
    inv3 = tw.min_soc >= SMIN - 1e-6
    safe = inv1 and inv2 and inv3
    verdict = "SAFE" if safe else "VIOLATION"
    tag = "OK" if (safe == (expect == "safe")) else "!! UNEXPECTED !!"
    print(f"\n[{name}]  -> {verdict}  ({tag})")
    print(f"   min SOC={tw.min_soc:6.1f} kWh ({tw.min_soc/P['pack_gross']*100:4.1f}%)  "
          f"diesel={tw.diesel_L:4.1f} L  shed={tw.acc['shed']:6.1f} kWh")
    print(f"   INV1 reserve-held={inv1}  INV2 not-stranded={inv2}  INV3 soc-floor={inv3}")
    if note:
        print(f"   note: {note}")
    return safe

print("HOUSE BUS DIGITAL TWIN  -  BREAK TESTS")
print("="*74)
results = {}

# 1) COMPRESSOR/CHP DEAD in a winter week (genset won't start)
t1 = run(168, tout_fn=lambda t: -8 + 4*np.sin((t%24-14)/24*2*np.pi),
         weather_fn=lambda t: 0.35,
         reserve_fn=lambda t: drive_reserve_kwh(D_safe=45, k_wx=1.30, k_terrain=1.1),
         soc0=0.85, faults={'chp_dead': True})
results['1 CHP-dead winter'] = check("1) CHP dead, winter ski week", t1, "safe",
    "genset won't start; system must ride on pack+solar and shed comfort at the floor, not breach it")

# 2) TWO-WEEK SOLAR BLACKOUT (heavy overcast) parked in shoulder season
t2 = run(336, tout_fn=lambda t: 5.0, weather_fn=lambda t: 0.08,
         reserve_fn=lambda t: drive_reserve_kwh(D_safe=45, k_wx=1.15),
         soc0=0.9)
results['2 solar-blackout 14d'] = check("2) 14-day solar blackout, parked", t2, "safe",
    "near-zero solar for 2 weeks; CHP must carry it and hold the reserve")

# 3) FORCED OVER-EXPORT: user tries to dump 8 kW continuously (abuse)
t3 = run(168, tout_fn=lambda t: 22.0, weather_fn=lambda t: 0.5,
         reserve_fn=lambda t: drive_reserve_kwh(D_safe=50, k_wx=1.1),
         export_fn=lambda t: 8.0, soc0=0.6)
results['3 forced over-export'] = check("3) Forced 8 kW export from 60% SOC", t3, "safe",
    "export must self-limit at the reserve floor; it can never sell you below get-home energy")

# 4) COLD SNAP: -25C for 4 days, occupied, thin sun
t4 = run(96, tout_fn=lambda t: -25 + 3*np.sin((t%24-14)/24*2*np.pi),
         weather_fn=lambda t: 0.25,
         reserve_fn=lambda t: drive_reserve_kwh(D_safe=45, k_wx=1.35, k_terrain=1.1),
         soc0=0.8)
results['4 -25C cold snap'] = check("4) -25C cold snap, 4 days, occupied", t4, "safe",
    "extreme heating load; CHP heat should carry cabin, pack holds reserve")

# 5) DEEP REMOTE MOUNTAIN ARRIVAL, NO CHARGER (the true edge on the 390 kWh pack)
#    On the bigger High-tier pack a 180 mi backcountry day now clears; the edge moves out to
#    ~240 mi arriving 60 mi from any charger. The twin quantifies exactly where the limit is.
t5 = run(24, tout_fn=lambda t: 2.0, weather_fn=lambda t: 0.5,
         driving_fn=lambda t: 8 <= t < 16, miles_fn=lambda t: 30.0,   # 240 mi
         dH_fn=lambda t: 900.0 if t == 10 else 0.0,
         reserve_fn=lambda t: drive_reserve_kwh(D_safe=60, k_wx=1.2, k_terrain=1.1),
         soc0=0.97)
results['5 deep remote mtn arrival'] = check("5) 240mi + pass, arrive 60mi from any charger", t5,
    "violation",
    "EXPECTED edge (390 kWh pack): the deepest backcountry days land below ideal reserve until "
    "CHP/solar recover -> mitigation is a charge stop or arriving where you can plug in. The bigger "
    "pack pushes this limit out from ~180 mi (330 kWh) to ~240 mi (390 kWh).")

# 6) SENSOR FAULT proxy: solar array reads 40% low all week (derate) -> control under-collects
t6 = run(168, tout_fn=lambda t: 18.0, weather_fn=lambda t: 0.7,
         reserve_fn=lambda t: drive_reserve_kwh(D_safe=50, k_wx=1.1),
         soc0=0.7, faults={'solar_derate': 0.6})
results['6 solar sensor derate'] = check("6) Solar underperforms 40% all week", t6, "safe",
    "a bad array/sensor just means more CHP; reserve still held")

print("\n" + "="*74)
n_safe = sum(1 for v in results.values() if v)
print(f"SUMMARY: {n_safe}/{len(results)} tests held all safety invariants.")
print("Test 5 is an EXPECTED violation (documents a real operational limit, not a code bug).")
for k, v in results.items():
    print(f"  {'SAFE ' if v else 'BREAK'}  {k}")
