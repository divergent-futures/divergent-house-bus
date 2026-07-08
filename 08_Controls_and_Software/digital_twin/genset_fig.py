import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrow, FancyArrowPatch
TXT="#1f3a56"
fig=plt.figure(figsize=(16,11.5))
fig.suptitle("The diesel genset is a SERIES range-extender + CHP - not a hybrid (it never touches the wheels)",
             fontsize=14,fontweight="bold",color=TXT,y=0.975)

# ---------- TOP PANEL: architecture ----------
ax=fig.add_axes([0.04,0.55,0.92,0.36]); ax.set_xlim(0,100); ax.set_ylim(0,50); ax.axis("off")
def box(x,y,w,h,c,t,ec="#333",fs=8,tc="white"):
    ax.add_patch(FancyBboxPatch((x,y),w,h,boxstyle="round,pad=0.2,rounding_size=1",facecolor=c,edgecolor=ec,lw=1.6))
    ax.text(x+w/2,y+h/2,t,ha="center",va="center",fontsize=fs,color=tc,fontweight="bold")
def arr(x1,y1,x2,y2,c="#444",lw=2.2,txt=None,ty=0):
    ax.add_patch(FancyArrowPatch((x1,y1),(x2,y2),arrowstyle="-|>",mutation_scale=16,lw=lw,color=c,
        shrinkA=2,shrinkB=2))
    if txt: ax.text((x1+x2)/2,(y1+y2)/2+ty,txt,fontsize=6.6,ha="center",color=c,fontweight="bold",
        bbox=dict(boxstyle="round,pad=0.15",fc="white",ec=c,lw=0.7))

box(2,28,13,9,"#7a5230","DIESEL\ntank (small)",fs=7.5)
box(19,28,15,9,"#c0392b","CHP GENSET\nengine + generator",fs=7.5)
box(2,10,13,9,"#e0a800","SOLAR\n~12 kW","#333",7.5,"#3a2f00")
box(38,28,15,9,"#2a6f8a","48 V HOUSE BUS\n(all DC loads)",fs=7.5)
box(58,28,16,9,"#3a7a2a","bidirectional\nDC-DC (48<->400V)",fs=7.5)
box(79,28,18,9,"#2a3f8a","400 V HV PACK\n390 kWh (sodium)",fs=7.5)
box(79,10,18,9,"#5b6b7a","e-axle -> WHEELS\n(pure electric)",fs=7.5)

arr(15,32.5,19,32.5,"#7a5230",txt="makes electricity")
arr(34,32.5,38,32.5,"#c0392b",lw=2.6)
arr(15,14.5,30,14.5,"#e0a800"); arr(30,14.5,44,28,"#e0a800")   # solar into 48V
arr(53,32.5,58,32.5,"#2a6f8a")
arr(74,32.5,79,32.5,"#3a7a2a")
arr(88,28,88,19,"#2a3f8a")   # pack to e-axle
ax.text(88,23.3,"traction",fontsize=6.4,ha="center",color="#2a3f8a",rotation=90)
# heat path (dashed) from CHP down to a thermal-loop note
ax.add_patch(FancyArrowPatch((26.5,28),(26.5,20),arrowstyle="-|>",mutation_scale=14,lw=2,color="#d35400",ls=(0,(4,2))))
box(19,10,15,8,"#d35400","CHP WASTE HEAT\n-> thermal loop",fs=7)
# key annotation
ax.text(50,45,"The engine makes ELECTRICITY + HEAT only. Electricity joins the 48 V bus (like solar); the bidirectional DC-DC moves it up to the 400 V pack; the pack alone drives the wheels.",
        fontsize=8.2,ha="center",color=TXT,fontweight="bold")
ax.text(50,2,"'Delete the diesel drivetrain': the genset is a battery charger + furnace, NOT a second way to turn the wheels. Drivetrain is always pure EV.  (series range-extender, cf. BMW i3 REx / diesel-electric locomotive)",
        fontsize=7.6,ha="center",color="#c0392b",fontweight="bold")

# ---------- BOTTOM PANEL: one-genset-many-jobs fan-out ----------
ax2=fig.add_axes([0.04,0.06,0.92,0.42]); ax2.set_xlim(0,100); ax2.set_ylim(0,58); ax2.axis("off")
ax2.text(50,56,"One genset run = many jobs at once (per ~1 L diesel, ~10 kWh fuel energy)",
         fontsize=11,ha="center",color=TXT,fontweight="bold")
# fuel box
ax2.add_patch(FancyBboxPatch((2,26),15,10,boxstyle="round,pad=0.2,rounding_size=1",facecolor="#7a5230",edgecolor="#333",lw=1.6))
ax2.text(9.5,31,"1 L DIESEL\n~10 kWh",ha="center",va="center",fontsize=8,color="white",fontweight="bold")
# split: electricity 35%, heat 65%
ax2.add_patch(FancyBboxPatch((26,40),20,9,boxstyle="round,pad=0.2,rounding_size=1",facecolor="#c0392b",edgecolor="#333",lw=1.5))
ax2.text(36,44.5,"ELECTRICITY  ~35%\n~3.5 kWh",ha="center",va="center",fontsize=7.5,color="white",fontweight="bold")
ax2.add_patch(FancyBboxPatch((26,15),20,12,boxstyle="round,pad=0.2,rounding_size=1",facecolor="#d35400",edgecolor="#333",lw=1.5))
ax2.text(36,21,"HEAT  ~65% -> recover ~85%\n= ~5.5 kWh USABLE heat",ha="center",va="center",fontsize=7.5,color="white",fontweight="bold")
ax2.add_patch(FancyArrowPatch((17,31),(26,44),arrowstyle="-|>",mutation_scale=15,lw=2.4,color="#c0392b"))
ax2.add_patch(FancyArrowPatch((17,31),(26,21),arrowstyle="-|>",mutation_scale=15,lw=2.4,color="#d35400"))
# electricity job
ax2.add_patch(FancyBboxPatch((54,40),30,9,boxstyle="round,pad=0.2,rounding_size=1",facecolor="#2a3f8a",edgecolor="#333",lw=1.4))
ax2.text(69,44.5,"charge the pack / HOLD the drive-reserve",ha="center",va="center",fontsize=7.5,color="white",fontweight="bold")
ax2.add_patch(FancyArrowPatch((46,44.5),(54,44.5),arrowstyle="-|>",mutation_scale=14,lw=2.2,color="#2a3f8a"))
# heat jobs fan-out
jobs=[("heat the CABIN / living area","#2a7a4a",33),
      ("HOT WATER","#2a7a4a",28.5),
      ("keep PIPES warm (circulate)","#2a7a4a",24),
      ("PRECONDITION the battery -> accepts REGEN when driving","#8a1f16",19),
      ("melt SNOW off the solar panels","#2a7a4a",14.5)]
for txt,c,yy in jobs:
    ax2.add_patch(FancyBboxPatch((54,yy-1.6),40,3.4,boxstyle="round,pad=0.1,rounding_size=0.5",
        facecolor="white",edgecolor=c,lw=1.3))
    ax2.text(55,yy,txt,fontsize=7.0,va="center",color=c,fontweight="bold")
    ax2.add_patch(FancyArrowPatch((46,21),(54,yy),arrowstyle="-|>",mutation_scale=10,lw=1.2,color="#d35400",alpha=0.6))
# totals + twin numbers
ax2.add_patch(FancyBboxPatch((2,2),92,8,boxstyle="round,pad=0.3,rounding_size=1",facecolor="#fff6e0",edgecolor="#b59a1e",lw=1.5))
ax2.text(50,6,"Total useful ~90% of the fuel (35% electricity + ~55% usable heat).  Twin (10 d @ -12C): the CHP delivers ~16 kWh/day of heat for ~0.9 L/day, "
         "comfort fully met; WITHOUT it ~181 kWh of heat is shed (cold cabin).  => you 'lose less battery' by having it.",
         fontsize=7.6,ha="center",va="center",color="#7a6a1a",fontweight="bold")
plt.savefig("../genset_series_and_cold_chp.png",dpi=150,bbox_inches="tight",facecolor="white")
print("saved")
