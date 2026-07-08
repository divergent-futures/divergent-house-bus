// DF Materials Matrix — universal 1-5 scoring across categories. Weights (vehicle dwelling): {"performance": 1.5, "lightness": 1.5, "cost": 1.0, "workability": 1.0, "durability": 1.2, "health": 1.2, "sustainability": 0.8}
window.MATRIX_AXES=["performance", "lightness", "cost", "workability", "durability", "health", "sustainability"];
window.MATRIX_WEIGHTS={"performance": 1.5, "lightness": 1.5, "cost": 1.0, "workability": 1.0, "durability": 1.2, "health": 1.2, "sustainability": 0.8};
window.MATERIALS=[
  {
    "id": "glass-laminated",
    "name": "Laminated safety glass",
    "category": "glazing",
    "scores": {
      "performance": 5,
      "lightness": 1,
      "cost": 3,
      "workability": 1,
      "durability": 4,
      "health": 5,
      "sustainability": 3
    },
    "weighted": 3.2,
    "perf_metric": "clarity 90%, holds together cracked (windshield-mandated)",
    "weight_note": "2.5 g/cm3 (heaviest)",
    "cost_note": "mid",
    "pros": "optical clarity for DRIVING, scratch-proof, FMVSS windshield",
    "cons": "heaviest, OEM-only, can't modify",
    "status": "REQUIRED for windshield"
  },
  {
    "id": "glass-tempered",
    "name": "Tempered glass",
    "category": "glazing",
    "scores": {
      "performance": 4,
      "lightness": 1,
      "cost": 4,
      "workability": 2,
      "durability": 3,
      "health": 5,
      "sustainability": 4
    },
    "weighted": 3.21,
    "perf_metric": "clarity 90%, scratch-proof; shatters (safe crumble)",
    "weight_note": "2.5 g/cm3",
    "cost_note": "cheap",
    "pros": "cheapest, scratch-proof, inert",
    "cons": "heavy, shatters, poor insulation single-pane",
    "status": "reference"
  },
  {
    "id": "acrylic-dualpane",
    "name": "Acrylic (PMMA) dual-pane",
    "category": "glazing",
    "scores": {
      "performance": 5,
      "lightness": 4,
      "cost": 3,
      "workability": 4,
      "durability": 3,
      "health": 4,
      "sustainability": 3
    },
    "weighted": 3.82,
    "perf_metric": "clearest 92%, dual-pane ~3x single-glass insulation, UV-stable",
    "weight_note": "~1.18 g/cm3; dual-pane ~40% of glass weight",
    "cost_note": "mid (RV windows)",
    "pros": "RECO living windows: lightest+clearest+no-shatter+UV-stable+insulating; RV-proven",
    "cons": "scratches if cleaned wrong; brittler than PC",
    "status": "RECO living-area"
  },
  {
    "id": "polycarbonate",
    "name": "Polycarbonate (PC / Lexan)",
    "category": "glazing",
    "scores": {
      "performance": 3,
      "lightness": 4,
      "cost": 2,
      "workability": 4,
      "durability": 5,
      "health": 4,
      "sustainability": 3
    },
    "weighted": 3.62,
    "perf_metric": "88-90% light; yellows w/o UV coat; ~similar insul",
    "weight_note": "~1.2 g/cm3 (half glass)",
    "cost_note": "higher",
    "pros": "IMPACT CHAMPION ~250x glass (near-unbreakable), cold-forms",
    "cons": "scratches easily (can't buff), yellows w/o UV coat, pricier",
    "status": "impact zones / skylight"
  },
  {
    "id": "vacuum-glazing",
    "name": "Vacuum glazing (thin high-R glass)",
    "category": "glazing",
    "scores": {
      "performance": 5,
      "lightness": 2,
      "cost": 1,
      "workability": 1,
      "durability": 2,
      "health": 5,
      "sustainability": 3
    },
    "weighted": 2.84,
    "perf_metric": "very high insulation in a slim clear pane",
    "weight_note": "still glass (heavy)",
    "cost_note": "very expensive",
    "pros": "thin + high-R + clear (envelope weak-point fix)",
    "cons": "fragile edge-seal, custom, costly",
    "status": "premium/niche"
  },
  {
    "id": "etfe-film",
    "name": "ETFE film cushion",
    "category": "glazing",
    "scores": {
      "performance": 2,
      "lightness": 5,
      "cost": 3,
      "workability": 3,
      "durability": 3,
      "health": 4,
      "sustainability": 4
    },
    "weighted": 3.43,
    "perf_metric": "translucent (not clear), insulating cushion, self-clean",
    "weight_note": "near-zero (film)",
    "cost_note": "mid",
    "pros": "ultralight, tough film, long life, self-cleaning skylights",
    "cons": "not a clear VIEW window; needs frame/inflation",
    "status": "niche skylight"
  },
  {
    "id": "al-extrusion",
    "name": "Aluminium extrusion (6xxx)",
    "category": "structural",
    "scores": {
      "performance": 4,
      "lightness": 4,
      "cost": 3,
      "workability": 5,
      "durability": 4,
      "health": 4,
      "sustainability": 4
    },
    "weighted": 4.0,
    "perf_metric": "good strength-to-weight, stiff, corrosion-safe",
    "weight_note": "2.7 g/cm3",
    "cost_note": "mid",
    "pros": "easy to join/modify (T-slot), recyclable, corrosion-proof",
    "cons": "conducts heat (thermal bridge), softer than steel",
    "status": "provisional"
  },
  {
    "id": "uhss-steel",
    "name": "UHSS steel (rocker/impact)",
    "category": "structural",
    "scores": {
      "performance": 5,
      "lightness": 1,
      "cost": 3,
      "workability": 2,
      "durability": 5,
      "health": 5,
      "sustainability": 4
    },
    "weighted": 3.56,
    "perf_metric": "highest strength (crash/impact structure)",
    "weight_note": "7.85 g/cm3 (heavy)",
    "cost_note": "mid",
    "pros": "strongest, crash structure, cheap-ish",
    "cons": "heavy, rusts (needs coat), harder to work",
    "status": "provisional"
  },
  {
    "id": "frp-grp",
    "name": "FRP / GRP composite panel",
    "category": "structural",
    "scores": {
      "performance": 4,
      "lightness": 4,
      "cost": 3,
      "workability": 3,
      "durability": 4,
      "health": 3,
      "sustainability": 2
    },
    "weighted": 3.41,
    "perf_metric": "good strength-to-weight, moldable skins",
    "weight_note": "~1.8 g/cm3",
    "cost_note": "mid",
    "pros": "light, moldable, corrosion-proof, insulating-ish",
    "cons": "resin health/recycle concerns, harder to repair",
    "status": "provisional"
  },
  {
    "id": "carbon-fibre",
    "name": "Carbon fibre composite",
    "category": "structural",
    "scores": {
      "performance": 5,
      "lightness": 5,
      "cost": 1,
      "workability": 2,
      "durability": 4,
      "health": 3,
      "sustainability": 2
    },
    "weighted": 3.41,
    "perf_metric": "best strength-to-weight of all",
    "weight_note": "~1.6 g/cm3",
    "cost_note": "very expensive",
    "pros": "lightest+stiffest, premium",
    "cons": "very costly, brittle failure, hard to repair",
    "status": "provisional"
  },
  {
    "id": "al-honeycomb",
    "name": "Aluminium honeycomb panel",
    "category": "structural",
    "scores": {
      "performance": 5,
      "lightness": 5,
      "cost": 3,
      "workability": 3,
      "durability": 4,
      "health": 4,
      "sustainability": 3
    },
    "weighted": 4.02,
    "perf_metric": "excellent stiffness-to-weight (floors/walls)",
    "weight_note": "very light core",
    "cost_note": "mid-high",
    "pros": "stiff+ultralight sandwich panel, flat",
    "cons": "edge sealing, point loads, cost",
    "status": "provisional"
  },
  {
    "id": "marine-ply",
    "name": "Marine plywood",
    "category": "structural",
    "scores": {
      "performance": 3,
      "lightness": 2,
      "cost": 4,
      "workability": 5,
      "durability": 3,
      "health": 4,
      "sustainability": 4
    },
    "weighted": 3.43,
    "perf_metric": "cheap, workable structural sheet",
    "weight_note": "~0.6 g/cm3 but thick",
    "cost_note": "cheap",
    "pros": "cheap, easy DIY, non-toxic-ish",
    "cons": "heavy for its strength, moisture/rot risk",
    "status": "provisional"
  }
];
