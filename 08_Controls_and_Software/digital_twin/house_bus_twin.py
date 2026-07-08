#!/usr/bin/env python3
"""
House BUS - Digital Twin v0.5
A time-stepped energy/thermal simulation of the bus. Purpose: verify the whole
system reconciles (energy balance closes, SOC stays in bounds, the drive-reserve
floor is NEVER breached) under normal AND fault scenarios ("build it, break it").

Reactive control only (the v0.3 load-shed ladder + reserve floor + CHP dispatch);
the MPC is a future layer that sits ON TOP of this same plant model.

Open-source (MIT). Parameters trace to the project docs (see notes on each).
Run:  python3 house_bus_twin.py
"""
import numpy as np

# ----------------------------------------------------------------------------
# PARAMETERS  (traceable to project docs)
# ----------------------------------------------------------------------------
P = dict(
    # --- capacity stack (sodium-ion, High tier) ---
    pack_gross      = 390.0,   # NAMEPLATE gross energy (102in sodium potted)
    soc_max_frac    = 0.95,    # daily charge ceiling (longevity + BMS balancing headroom; sodium tolerant)
    soc_usermin_frac= 0.05,    # app "0%" -> usable window = (0.95-0.05)*390 ~= 351 kWh
    soc_survival_frac=0.02,    # hidden survival reserve floor: below user-0, CRITICAL loads only
    #   sodium is 0V-safe (100% DOD, no mechanical degradation) so the bottom buffer is a
    #   DESIGN CHOICE (keep-the-lights-on sliver), not a chemistry limit.
    crit_load_kw    = 0.25,    # what the survival sliver must sustain (BMS, controls, comms, egress)
    e_drive_act     = 1.2,     # kWh/mi ACTUAL driving consumption (330 kWh -> ~275 mi)
    e_drive_res     = 1.3,     # kWh/mi RESERVE planning base rate (multipliers on top)
    m_veh_kg        = 7400.0,  # loaded mass (axle-load doc ~16,327 lb)
    solar_kw_peak   = 12.0,    # ~12 kW deployed (Solar_Everywhere doc)
    solar_kw_drive  = 3.4,     # roof-only while driving
    chp_kw          = 3.5,     # diesel CHP ELECTRICAL output
    chp_heat_kw     = 7.0,     # CHP THERMAL output while running (offsets heating)
    chp_min_block_h = 2.0,     # run in >=2 h efficient blocks, no trickle
    diesel_kwh_per_L= 3.6,     # usable elec per L at CHP elec eff (~36%)
    house_base_kw   = 0.30,    # standby+network+controls, continuous
    fridge_kwh_day  = 1.5,
    grow_kwh_day    = 2.67,    # energy-aware grow light (Food_Hydro doc)
    hvac_kw_per_dC  = 0.06,    # heat-pump ELECTRIC kW per degC |Tout-Tset| (COP-blended)
    t_set           = 21.0,    # cabin setpoint degC
    reserve_margin  = 0.20,    # m in the reserve formula
)
G = 9.81

# ----------------------------------------------------------------------------
# ENVIRONMENT / PLANNING MODELS
# ----------------------------------------------------------------------------
def solar_frac(hour_of_day):
    """Clear-sky generation fraction of peak: half-sine over a 12 h day."""
    h = hour_of_day % 24
    if h < 6 or h > 18:
        return 0.0
    return max(0.0, np.sin((h - 6) / 12 * np.pi))

def drive_reserve_kwh(D_safe=50.0, k_wx=1.0, k_terrain=1.0, dH_m=0.0):
    """v0.4 dynamic reserve: E=(D_safe*e_drive_res*k_wx*k_terrain + E_climb)*(1+m)."""
    e_climb = P['m_veh_kg'] * G * max(dH_m, 0) / (3.6e6 * 0.85)
    base = D_safe * P['e_drive_res'] * k_wx * k_terrain
    return (base + e_climb) * (1 + P['reserve_margin'])

# ----------------------------------------------------------------------------
# THE PLANT + REACTIVE CONTROLLER
# ----------------------------------------------------------------------------
class Twin:
    COP = 2.5  # heat-pump COP (season-blended)

    def __init__(self, soc0_frac=0.85, faults=None):
        self.soc = soc0_frac * P['pack_gross']
        self.faults = faults or {}
        self.chp_on = False
        self.chp_run_left = 0.0
        self.diesel_L = 0.0
        self.log = []
        self.acc = dict(solar=0, chp=0, load=0, export=0, shed=0, dumped=0, chp_heat=0, hvac_elec=0)
        self.reserve_breaches = 0   # parked SOC below the floor -> must be 0
        self.stranded = 0           # hit SOC-min mid-drive -> must be 0
        self.min_soc = self.soc

    def loads(self, tout, occupied, hour, chp_running):
        """(nonhvac_kwh, hvac_elec_kwh) for a 1 h step."""
        nonhvac = P['house_base_kw'] + P['fridge_kwh_day']/24
        nonhvac += P['grow_kwh_day']/24 * (1.0 if 6 <= hour <= 20 else 0.2)
        dT = abs(tout - P['t_set'])
        occ_factor = 1.0 if occupied else 0.25
        hvac = P['hvac_kw_per_dC'] * dT * occ_factor
        # CHP waste heat offsets heating: chp_heat_kw of heat == chp_heat_kw/COP electric
        if chp_running and tout < P['t_set']:
            offset = P['chp_heat_kw'] / self.COP
            used = min(hvac, offset)
            hvac -= used
            self.acc['chp_heat'] += used
        self.acc['hvac_elec'] += hvac   # battery electricity actually spent on heating
        return nonhvac, hvac

    def solar_gen(self, hour, weather, driving):
        peak = P['solar_kw_drive'] if driving else P['solar_kw_peak']
        if self.faults.get('solar_derate'):
            peak *= self.faults['solar_derate']
        return peak * solar_frac(hour) * weather

    def step(self, hour, tout, weather, occupied, driving, miles, dH_m,
             reserve_kwh, allow_export=0.0):
        smin = P['soc_survival_frac'] * P['pack_gross']   # hard floor (sodium)
        usermin = P['soc_usermin_frac'] * P['pack_gross']  # app 0%
        solar = self.solar_gen(hour, weather, driving)
        nonhvac, hvac = self.loads(tout, occupied, hour, self.chp_on)
        load = nonhvac + hvac
        if driving:
            load += miles * P['e_drive_act']
            if dH_m > 0:   # climbing consumes real energy too (not just reserve planning)
                load += P['m_veh_kg'] * G * dH_m / (3.6e6 * 0.85)
        self.acc['solar'] += solar
        self.acc['load'] += load
        net = solar - load
        shed = export = dumped = 0.0

        if net >= 0:
            room = P['soc_max_frac']*P['pack_gross'] - self.soc
            charge = min(net, room); self.soc += charge
            leftover = net - charge
            if allow_export > 0 and (self.soc - reserve_kwh) > 0:
                export = min(leftover, allow_export, self.soc - reserve_kwh)
            dumped = max(0.0, leftover - export)
            self.acc['export'] += export; self.acc['dumped'] += dumped
        else:
            deficit = -net
            # DRIVING: traction may draw to smin (must keep moving).
            # PARKED: discretionary load must NOT cross the reserve floor.
            floor = smin if driving else reserve_kwh
            avail = max(0.0, self.soc - floor)
            draw = min(deficit, avail); self.soc -= draw
            unmet = deficit - draw
            near_reserve = self.soc <= reserve_kwh * 1.05
            if (unmet > 0 or near_reserve) and not self.faults.get('chp_dead') and not driving:
                if not self.chp_on:
                    self.chp_on = True; self.chp_run_left = P['chp_min_block_h']
                chp_e = P['chp_kw']
                cover = min(unmet, chp_e); unmet -= cover
                to_pack = min(chp_e - cover, P['soc_max_frac']*P['pack_gross'] - self.soc)
                self.soc += to_pack
                self.diesel_L += chp_e / P['diesel_kwh_per_L']
                self.acc['chp'] += chp_e
            if unmet > 1e-6:
                if driving:
                    self.stranded += 1     # pack dry mid-drive (guard should prevent)
                else:
                    shed = unmet; self.acc['shed'] += shed

        if self.chp_on:
            self.chp_run_left -= 1.0
            if self.chp_run_left <= 0 and self.soc > reserve_kwh * 1.2:
                self.chp_on = False

        if (not driving) and self.soc < reserve_kwh - 1e-6:
            self.reserve_breaches += 1
        self.soc = min(max(self.soc, smin), P['soc_max_frac']*P['pack_gross'])
        self.min_soc = min(self.min_soc, self.soc)
        self.log.append(dict(hour=hour, soc=self.soc, solar=solar, load=load,
                             chp=self.chp_on, shed=shed, export=export,
                             reserve=reserve_kwh, tout=tout, driving=driving))
        return dict(soc=self.soc, shed=shed, export=export, solar=solar, load=load)

# ----------------------------------------------------------------------------
# SCENARIO RUNNER
# ----------------------------------------------------------------------------
def run(hours, tout_fn, weather_fn, occupied=True, driving_fn=None, miles_fn=None,
        dH_fn=None, reserve_fn=None, export_fn=None, soc0=0.85, faults=None):
    tw = Twin(soc0_frac=soc0, faults=faults)
    for t in range(hours):
        driving = driving_fn(t) if driving_fn else False
        miles = miles_fn(t) if (miles_fn and driving) else 0.0
        reserve = reserve_fn(t) if reserve_fn else drive_reserve_kwh()
        allow = export_fn(t) if export_fn else 0.0
        tw.step(t, tout_fn(t), weather_fn(t), occupied, driving, miles,
                dH_fn(t) if dH_fn else 0.0, reserve, allow)
    return tw

def report(name, tw):
    a = tw.acc
    print(f"\n=== {name} ===")
    print(f"  hours={len(tw.log):3d}  final SOC={tw.soc:6.1f} kWh ({tw.soc/P['pack_gross']*100:4.1f}%)  min SOC={tw.min_soc:6.1f} kWh")
    print(f"  solar={a['solar']:6.1f}  chp_e={a['chp']:5.1f}  chp_heat(elec-eq)={a['chp_heat']:5.1f}  load={a['load']:6.1f}  export={a['export']:6.1f}  shed={a['shed']:6.1f}  dumped={a['dumped']:6.1f}  diesel={tw.diesel_L:4.1f} L")
    flag_r = "OK" if tw.reserve_breaches == 0 else "*** FAIL ***"
    flag_s = "OK" if tw.stranded == 0 else "*** FAIL ***"
    print(f"  reserve-breaches={tw.reserve_breaches} [{flag_r}]   stranded-mid-drive={tw.stranded} [{flag_s}]")
    return tw

if __name__ == "__main__":
    print("HOUSE BUS DIGITAL TWIN v0.5  -  reconciliation + break tests")
    print("="*74)

    # A) Summer boondock: 7 d, hot, sunny, parked, exporting surplus
    A = run(168, tout_fn=lambda t: 30 + 6*np.sin((t%24-15)/24*2*np.pi),
            weather_fn=lambda t: 0.9,
            reserve_fn=lambda t: drive_reserve_kwh(D_safe=40, k_wx=1.05),
            export_fn=lambda t: 3.0, soc0=0.7)
    report("A: Summer boondock (7 d, hot, sunny, exporting)", A)

    # B) Winter ski week: 7 d, -8C, thin sun, parked
    B = run(168, tout_fn=lambda t: -8 + 4*np.sin((t%24-14)/24*2*np.pi),
            weather_fn=lambda t: 0.35,
            reserve_fn=lambda t: drive_reserve_kwh(D_safe=45, k_wx=1.30, k_terrain=1.1),
            soc0=0.85)
    report("B: Winter ski week (7 d, -8C, thin sun)", B)

    # C) Mountain drive day: 6 h drive incl a 900 m pass, then park.
    #    Guard requires enough to drive ~180 mi + climb + arrival reserve => start ~full.
    C = run(24, tout_fn=lambda t: 2.0, weather_fn=lambda t: 0.5,
            driving_fn=lambda t: 8 <= t < 14, miles_fn=lambda t: 30.0,
            dH_fn=lambda t: 900.0 if t == 10 else 0.0,
            # arrives at a resort WITH charging nearby -> small D_safe -> modest parked reserve
            reserve_fn=lambda t: drive_reserve_kwh(D_safe=15, k_wx=1.2, k_terrain=1.1),
            soc0=0.97)
    report("C: Mountain drive day (180 mi + 900 m pass)", C)

    # D) Bus in storage 10 d, unoccupied, mild
    D = run(240, tout_fn=lambda t: 15.0, weather_fn=lambda t: 0.6, occupied=False,
            reserve_fn=lambda t: drive_reserve_kwh(D_safe=50), soc0=0.9)
    rep