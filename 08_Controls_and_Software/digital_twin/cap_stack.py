import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch
TXT="#1f3a56"
fig, ax = plt.subplots(figsize=(14, 9.5)); ax.set_xlim(0,100); ax.set_ylim(0,100); ax.axis("off")
fig.suptitle("House BUS pack: capacity stack (390 kWh nameplate -> ~351 kWh usable)  +  the TWO reserves",
             fontsize=13.5, fontweight="bold", color=TXT, y=0.97)

def y(kwh): return 10 + kwh/390*78
bar_x, bar_w = 20, 16
segs = [
    (0,    7.8,  "#7a1f16"),
    (7.8,  19.5, "#c0392b"),
    (19.5, 370.5,"#2a7a4a"),
    (370.5,390,  "#e0a800"),
]
for lo,hi,c in segs:
    ax.add_patch(FancyBboxPatch((bar_x,y(lo)),bar_w,y(hi)-y(lo),
        boxstyle="square,pad=0",facecolor=c,edgecolor="white",lw=1.2))
# big usable label inside
ax.text(bar_x+bar_w/2,(y(19.5)+y(370.5))/2,"USABLE WINDOW\n~351 kWh\n(app 0% -> 100%)",
        fontsize=9,ha="center",va="center",color="white",fontweight="bold")
# scale ticks
for kwh in [0,100,200,300,390]:
    ax.plot([bar_x-1,bar_x],[y(kwh),y(kwh)],color="#888",lw=1)
    ax.text(bar_x-1.8,y(kwh),f"{kwh}",fontsize=7.5,ha="right",va="center",color="#555")
ax.text(bar_x-1.8,y(390)+3,"kWh",fontsize=7.5,ha="right",color="#555")

# callouts to the LEFT for thin segments
def callout(kwh_anchor, label_kwh, text, color):
    ax.annotate(text, xy=(bar_x, y(kwh_anchor)), xytext=(bar_x-9, y(label_kwh)),
                fontsize=6.8, ha="right", va="center", color=color, fontweight="bold",
                arrowprops=dict(arrowstyle="-", color=color, lw=1))
callout(385, 385, "TOP BUFFER (95->100%)\ncharge ceiling ~95%\nlongevity + BMS balancing", "#a67c00")
callout(13.6, 70, "SURVIVAL RESERVE (2->5%)\ncritical loads only:\nBMS/controls/comms/egress", "#c0392b")
callout(3.9, 30, "HARD FLOOR ~2%\nsodium 0V-safe cutoff", "#7a1f16")

# DRIVE-RESERVE band inside usable
dr_lo, dr_hi = 19.5, 19.5+120
ax.add_patch(FancyBboxPatch((bar_x+bar_w+2, y(dr_lo)), 2.5, y(dr_hi)-y(dr_lo),
    boxstyle="square,pad=0", facecolor="#f2c9c2", edgecolor="#c0392b", lw=1.2))
ax.annotate("", xy=(bar_x+bar_w+3.2, y(dr_hi)), xytext=(bar_x+bar_w+3.2, y(dr_lo)),
            arrowprops=dict(arrowstyle="<->", color="#c0392b", lw=1.3))
ax.text(bar_x+bar_w+6, (y(dr_lo)+y(dr_hi))/2,
        "DRIVE-RESERVE\n(operational, dynamic)\nsits INSIDE the usable window\n~55-170 kWh (get-home,\nv0.4 formula) - NOT a\nchemistry limit",
        fontsize=6.9, va="center", color="#c0392b", fontweight="bold")

rx = 64
ax.add_patch(FancyBboxPatch((rx,60),34,24,boxstyle="round,pad=0.4,rounding_size=1",
    facecolor="#eef4f8", edgecolor="#2a6f8a", lw=1.5))
ax.text(rx+1.5,81.5,"TWO 'reserves' - don't confuse them",fontsize=8.3,color=TXT,fontweight="bold")
ax.text(rx+1.5,78,
 "1) CHEMISTRY / BMS window (fixed):\n   top buffer + survival sliver. Protects\n   cells + guarantees a keep-the-lights-on\n   minimum.\n\n"
 "2) DRIVE-RESERVE (operational, dynamic):\n   get-home energy INSIDE the usable\n   window. Set by route+weather+climb;\n   moves every cycle; enforced by L1.",
 fontsize=6.9, va="top", color="#333")

ax.add_patch(FancyBboxPatch((rx,28),34,28,boxstyle="round,pad=0.4,rounding_size=1",
    facecolor="#fff6e0", edgecolor="#b59a1e", lw=1.5))
ax.text(rx+1.5,53,"Why sodium changes the bottom end",fontsize=8.3,color="#7a6a1a",fontweight="bold")
ax.text(rx+1.5,49.5,
 "- 0V-safe: 100% DOD, NO mechanical\n  degradation -> bottom buffer is a\n  DESIGN choice, not a chemistry cap.\n"
 "- Safe 0V storage (6 mo, ~0 loss).\n"
 "- 10,000-20,000 cycle cells -> deep\n  cycling fine; pack outlives the bus.\n"
 "- Crush-safe (no combustion) -> fits the\n  structural-pack safety case.\n"
 "=> use a WIDE window (~90%) AND still\n   keep a deliberate survival sliver.",
 fontsize=6.8, va="top", color="#5a4a1a")

fig.text(0.5,0.045,"Nameplate 390 kWh -> daily-usable ~351 kWh (charge to ~95%, app-0% at ~5%). Below app-0% a hidden ~8-12 kWh SURVIVAL RESERVE runs critical loads only.",
         fontsize=8.4, ha="center", color=TXT, fontweight="bold")
fig.text(0.5,0.022,"Range should be quoted on USABLE (~351), not nameplate: ~351 / 1.2 kWh/mi ~= 290 mi (a correction the twin surfaced).",
         fontsize=8.0, ha="center", color="#c0392b")
plt.savefig("../pack_capacity_stack.png", dpi=150, bbox_inches="tight", facecolor="white")
print("saved")
