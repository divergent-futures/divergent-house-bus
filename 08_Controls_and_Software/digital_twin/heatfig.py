import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
TXT="#1f3a56"
UA=48.5; COP=2.2; Tset=21
fig,(ax1,ax2)=plt.subplots(1,2,figsize=(15,6.2))
fig.suptitle("Corrected winter heat load (v0.6): ~38 kWh/day THERMAL at -12C, ~17 kWh/day ELECTRIC via heat pump",
             fontsize=13,fontweight="bold",color=TXT)

# left: heat demand vs temp (thermal vs electric)
T=np.array([5,0,-8,-12,-20,-25])
dT=Tset-T
heat=UA*dT/1000*24
elec=heat/COP
x=np.arange(len(T))
ax1.bar(x-0.2,heat,0.4,label="heat DEMAND (thermal)",color="#d35400")
ax1.bar(x+0.2,elec,0.4,label="ELECTRIC via heat pump (COP 2.2)",color="#2a6f8a")
ax1.axhline(48,ls="--",color="#c0392b",lw=1.4)
ax1.text(0.1,49.5,"old model's 48 kWh/day (was ELECTRIC = ~3x too lossy)",fontsize=7.5,color="#c0392b",fontweight="bold")
ax1.set_xticks(x); ax1.set_xticklabels([f"{t}C" for t in T])
ax1.set_ylabel("kWh / day"); ax1.set_title("Cabin heat vs outdoor temp (UA=48 W/K, well-insulated)",fontsize=10,color=TXT,fontweight="bold")
ax1.legend(fontsize=8); ax1.grid(alpha=0.25,axis="y")
for xi,h,e in zip(x,heat,elec):
    ax1.text(xi-0.2,h+0.6,f"{h:.0f}",ha="center",fontsize=7,color="#d35400")
    ax1.text(xi+0.2,e+0.6,f"{e:.0f}",ha="center",fontsize=7,color="#2a6f8a")

# right: winter diesel - with sun (twin) vs sunless steady (smart dispatch ~heat/13, pure-CHP-heat ~heat/5.5)
names=["-5C\ndecent sun","-12C\nthin sun","-18C\nlow sun","-25C\nstorm"]
withsun=[0.0,0.0,0.3,1.0]                    # twin 10-day avg
heat_d=[30,38,45,54]
smart=[h/13.4 for h in heat_d]               # CHP elec->heat pump + capture waste heat
direct=[h/5.5 for h in heat_d]               # pure CHP direct heat (pessimistic)
x=np.arange(len(names))
ax2.bar(x-0.25,withsun,0.25,label="with sun (twin 10-d avg)",color="#3a7a2a")
ax2.bar(x,smart,0.25,label="sunless steady, smart dispatch",color="#e0a800")
ax2.bar(x+0.25,direct,0.25,label="sunless steady, CHP direct heat",color="#c0392b")
ax2.set_xticks(x); ax2.set_xticklabels(names,fontsize=8)
ax2.set_ylabel("diesel  L / day"); ax2.set_title("Winter diesel: solar carries it with any sun; genset only for sunless deep cold",fontsize=9.5,color=TXT,fontweight="bold")
ax2.legend(fontsize=7.5); ax2.grid(alpha=0.25,axis="y")
ax2.axhline(1.0,ls=":",color="#555",lw=1); ax2.text(3.4,1.05,"~1 L/day (TJ 'fine')",fontsize=7,color="#555",ha="right")
for xi,a,b,c in zip(x,withsun,smart,direct):
    ax2.text(xi-0.25,a+0.05,f"{a:.1f}",ha="center",fontsize=6.5,color="#3a7a2a")
    ax2.text(xi,b+0.05,f"{b:.1f}",ha="center",fontsize=6.5,color="#a67c00")
    ax2.text(xi+0.25,c+0.05,f"{c:.0f}",ha="center",fontsize=6.5,color="#c0392b")
fig.text(0.5,0.01,"Sodium needs NO warming to charge/discharge cold -> the heat is cabin+water/pipes only. With any sun the heat pump on solar = ~0 diesel; sustained sunless deep cold ~3 L/day (smart dispatch).",
         fontsize=8.2,ha="center",color="#666")
plt.tight_layout(rect=[0,0.03,1,0.96])
plt.savefig("../winter_heat_and_diesel_v0_6.png",dpi=150,bbox_inches="tight",facecolor="white")
print("saved")
