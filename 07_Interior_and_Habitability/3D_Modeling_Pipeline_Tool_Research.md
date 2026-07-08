# 3D Modeling Pipeline — Tool Research + Recommended Workflow

**Date:** 2026-07-07 · TJ wants to build out the bus interior in 3D **without** hand-modeling everything in CAD: take **prompts, photos, and existing CAD**, turn them into 3D objects, then **snap them together to scale** in a lightweight environment and iterate on the layout. This researches the current best tools for each step and recommends a workflow. *(Research only — no tool bought/installed; TJ picks the path.)*

---

## The pipeline has two problems

1. **Get each component as a 3D object** — from a text prompt, a photo, or existing CAD.
2. **Assemble + snap them to scale** — drop them in a bus shell, move them around, walk through it.

Different tools win each step; the trick is combining them, not finding one magic app.

## Step 1 — Getting the components (use whichever source fits the part)

| Source | Best tools (2025/26) | When to use | Reality check |
|---|---|---|---|
| **Existing CAD / maker models** | **SketchUp 3D Warehouse** (thousands of van + furniture + appliance models, free); GrabCAD; manufacturer sites | Any real product — a fridge, toilet, heat-pump, mini-split, tank. **Fastest + dimensionally correct, zero modeling.** | Grab the manufacturer's own model → it's the right size by definition |
| **Phone scan (photogrammetry)** | **KIRI Engine 4.0** (Sept 2025 — 5× faster, unlimited free exports, scans shiny/featureless objects, high precision); **Polycam** (LiDAR + photogrammetry, inch-accurate ruler, scale-accurate on Pro) | Something you physically own or can visit — scan it with your phone, get a mesh | Set/verify scale (Polycam Pro or KIRI); raw scans need light cleanup |
| **AI from a photo or prompt** | **Meshy** (best all-round, free tier); **Rodin/Hyper3D** (highest fidelity, ~$0.50–1.50/download); **Tripo** (fast iteration); **Hunyuan3D** (open-source, free, runs locally) | "Make me something *like* this" — a stove, a chair, a fixture you only have a picture or idea of | **⚠ AI/scan meshes are visually great but NOT dimensionally accurate** — good for *looks/blocking*, but you must set true dimensions yourself for a build |

## Step 2 — Assembling + snapping to scale

| Tool | Cost | Strengths | Weaknesses | Fit |
|---|---|---|---|---|
| **Vanspace 3D** | $37/yr or **$57 lifetime** | **Purpose-built for vans AND buses**; drag-and-drop; 400–500+ components; 170+ templates; **first-person walk-through**; exports with accurate measurements | Not free; desktop only; **weak custom-model import**; "how it looks," not CNC blueprints | **Lowest-effort for the layout job** — least to learn |
| **SketchUp (free web)** | Free (web) | Correct-scale; imports GLB + the huge 3D Warehouse; industry standard for van builds | Steeper learning curve; not van-specific | Best **free** hub that imports your AI/scan/CAD parts |
| **Womp** | Free (browser) | Beginner "digital clay"; drag-and-drop; imports OBJ/FBX; asset marketplace; exports GLB | Sculpt-oriented, not a precise floor-planner | Good for a quick browser kit-bash |
| **Blender** | Free | Imports everything; full control; snapping + add-ons; photoreal render | **Steepest curve**; overkill unless you want full control | Only if you want to go deep |
| **Spline** | Freemium | Slick browser drag-snap 3D | Aimed at web/product; some exports paywalled | Not really a build planner |

## The recommended workflow (least effort, honest about limits)

**Fast path — Vanspace 3D as the room, everything else imported/approximated:**
1. **Block the whole bus in Vanspace 3D** using its bus templates + library (bed, galley, seating, tanks, standard appliances) — this gets you a walkable layout in an afternoon, drag-and-drop, no CAD.
2. **For the bespoke parts that aren't in any library** (structural pack-as-floor, rear e-axle/mech module, CO₂ core, the hydro wall, the transforming bathroom), get them via Step 1 — manufacturer CAD where it exists, a **phone scan** of a real analog, or **AI (Meshy/Rodin/Tripo)** from a photo/prompt — and place them as blocks at their **true dimensions** (which we already have in the specs).
3. **Keep two layers:** accurate **dimensioned boxes** for space-planning (so clearances are real) + the pretty **AI/scan meshes** for "what it looks like." Never trust an AI mesh's dimensions.

**Free path — SketchUp Web hub:** same idea but SketchUp Web is the assembly room (free, imports GLB + 3D Warehouse). More setup than Vanspace, $0, and imports custom models better.

**The catch either way:** this bus is *mostly bespoke* (the pack, the transforming bathroom, the mech module) — a stock component library only covers the generic 30%. The bespoke 70% comes from AI-gen + scans + our dimensions. So the real automation win is **Step 1 (AI/scan to skip modeling) feeding a simple room in Step 2.**

## A fourth option — I build you a bespoke browser tool

Because we already have **every component's real dimensions in the project docs**, I can build a **lightweight browser 3D layout tool** (runs right here) that's seeded with *our* parts at true scale and the fixed constraints locked (pack floor, e-axle, crush zones, wet-room drain). You'd drag *our* actual components into the shell, snap to a grid, and read live clearances — and it can **load AI-generated / scanned GLB meshes** on top of the dimensioned boxes for realism. It's the "rudimentary but ours, and it already knows the bus" option, with zero per-part modeling from you.

## Recommendation

- If you want the **least work today:** **Vanspace 3D** ($57 lifetime) to block it, + **Meshy/KIRI** for the bespoke parts. Proven, cheap, van/bus-native.
- If you want **it tied to this project and free:** let me build the **bespoke browser tool** seeded with our dimensions + constraints, and use **Meshy/Rodin + KIRI Engine** to generate the custom meshes we drop in.
- Either way, the automation that saves you the most time is **AI-image/prompt-to-3D (Meshy free tier or Rodin) + phone scanning (KIRI 4.0)** — that's what replaces the manual CAD.

## Open / next

- TJ picks: Vanspace-led, SketchUp-led, or the bespoke browser tool.
- If bespoke tool: I compile the component dimension list from the specs and build the shell + drag-snap + GLB-import.
- Trial a Step-1 tool on one real part (e.g. generate the composting toilet or the fridge) to test mesh quality + the dimension-setting workflow before committing.

---

*3D pipeline research, 2026-07-07. GOAL: build the bus interior in 3D without hand-CAD — prompts/photos/CAD → 3D objects → snap to scale. STEP 1 get components: (a) existing CAD = SketchUp 3D Warehouse (free, thousands, dimensionally correct) / GrabCAD / maker sites — best for real products; (b) phone scan = KIRI Engine 4.0 (Sept 2025, 5x faster, unlimited free export, scans shiny/featureless, high precision) or Polycam (LiDAR+photogrammetry, inch-accurate, scale-accurate on Pro) — for objects you own; (c) AI from photo/prompt = Meshy (best all-round, free tier), Rodin/Hyper3D (highest fidelity ~$0.5-1.5/download), Tripo (fast), Hunyuan3D (open-source free local) — CAVEAT AI/scan meshes are NOT dimensionally accurate (looks not build-dims). STEP 2 assemble/snap: Vanspace 3D ($37/yr or $57 lifetime, purpose-built vans+BUSES, drag-drop, 400-500 components, 170 templates, first-person walkthrough, weak custom import) = lowest effort; SketchUp free web + 3D Warehouse = best free hub that imports custom; Womp (browser, free, sculpt, GLB); Blender (free, powerful, steep); Spline (web, paywalled export). RECOMMENDED: Vanspace to block the layout + AI/scan for the bespoke parts (pack, e-axle, CO2 core, hydro wall, transforming bath) placed at TRUE dims from our specs; keep 2 layers (dimensioned boxes for clearances + pretty meshes for looks). This bus is ~70% bespoke so a stock library only covers the generic 30% — the automation win is AI/scan feeding a simple room. 4TH OPTION: I build a bespoke browser 3D tool seeded with OUR component dimensions + fixed constraints, loads AI/scan GLBs = 'rudimentary but ours'. NEXT: TJ picks path; trial one Step-1 tool on a real part. Sources: 3daistudio, meshy, kiriengine, polycam, vanspace3d, sketchup 3D Warehouse.*
