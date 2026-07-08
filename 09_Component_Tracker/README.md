# House BUS — Component Tracker

The **materials + component build list** for the bespoke bus. Open **`component_tracker.html`** in a browser to view/filter it. Shell, roof, glass and solar are deliberately **excluded** (simple / off-the-shelf); this tracks the parts that need real selection.

## How it works
- **`components.js`** — the single source of truth (`window.COMPONENTS`). Edit this to add parts, update status, or pick a supplier. The **configurator reads the same file**, so a choice here can flow through.
- **`components.json`** — the same data, machine-readable (for tooling / the configurator).
- **`component_tracker.html`** — renders the data: filter by subsystem + status, search, progress summary.
- **`components/<id>/`** — one folder per part:
  - `photos/` — reference photos you take (for measurements + 3D matching)
  - `models/` — the 3D object (manufacturer CAD, phone scan via KIRI/Polycam, or AI-gen via Meshy/Rodin) — **set true dimensions**
  - `spec.md` — the per-part spec sheet (auto-stubbed; fill it in)

## Statuses
`idea → researching → candidate-selected → sourced → ordered → installed`

## Add a component
1. Add an entry to `components.js` (copy an existing one; give it a unique `id`).
2. Make the folder: `components/<id>/photos/` and `.../models/` and a `spec.md`.
3. Drop photos + the GLB/OBJ in; advance the status.

## Workflow for the 3D build (per `3D_Modeling_Pipeline_Tool_Research.md`)
Photo/prompt/CAD → 3D object → into `models/` → assemble in the chosen 3D tool (Vanspace / SketchUp / bespoke browser tool). Keep two layers: dimensioned boxes (real clearances) + pretty meshes (looks).
