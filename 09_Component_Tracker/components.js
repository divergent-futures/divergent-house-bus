// House BUS component data — single source of truth for the tracker, sourcing view, AND configurator.
window.COMPONENTS = [
  {
    "id": "sodium-cells",
    "name": "Sodium-ion cells (pack)",
    "subsystem": "Battery/Electrical",
    "fn": "390 kWh nameplate structural pack; 0V-safe, cold-tolerant, non-flammable",
    "specs": {
      "chemistry": "Na-ion layered-oxide + hard-carbon",
      "nameplate": "390 kWh",
      "usable": "~351 kWh",
      "baseline cell": "HiNa 200Ah 3.0V 600Wh, 73x174x207mm, ~133 Wh/kg",
      "pack": "~650 cells, ~133S5P ~399V"
    },
    "dims_mm": "73 x 174 x 207 (HiNa 200Ah baseline)",
    "mass_kg": "~2930 (pack, HiNa) / ~2230 (Naxtra-class)",
    "qty": "~ per kWh",
    "status": "candidate-selected",
    "candidates": [
      {
        "supplier": "HiNa",
        "product": "NaCP73174207-ME200 (200Ah) / ME185",
        "note": "BUYABLE NOW ~$88/cell retail; 73x174x207mm; ~4000 cyc; -40/60C; fits our 220mm floor; also 270Ah/80Ah-blade"
      },
      {
        "supplier": "Hithium",
        "product": "\u221eCell N162Ah",
        "note": "95 Wh/kg, 20,000 cycles (cheapest cycles) but heaviest pack ~4100kg; ESS channel"
      },
      {
        "supplier": "CATL",
        "product": "Naxtra passenger (175 Wh/kg) + 300+Ah large-format (160)",
        "note": "ASPIRATIONAL: best density ~700kg lighter, mass-prod 2025-26, in Changan sodium EV \u2014 but OEM channel, NO retail, dims unpublished"
      },
      {
        "supplier": "Faradion (Reliance)",
        "product": "Na-ion",
        "note": "0V-safe pioneer; India ramp"
      }
    ],
    "selected": "HiNa (baseline build) \u2014 design Naxtra-ready",
    "source": "03_.../Pack_Capacity_Usable_and_BMS_Window.md, Two_Structural_Packs_Blade_vs_Sodium.md",
    "photo": "components/sodium-cells/photos/",
    "model3d": "components/sodium-cells/models/",
    "spec_doc": "components/sodium-cells/spec.md",
    "sourcing": {
      "est_unit_usd": 60,
      "qty": 650,
      "est_total_usd": 39000,
      "region": "China",
      "channel": "tier-1 maker / Alibaba (HiNa/BYD/Veken/Zoolnasm)",
      "confidence": "researched (~$80-105/kWh)",
      "rfq_status": "ready to RFQ"
    }
  },
  {
    "id": "bms",
    "name": "BMS (traction + house)",
    "subsystem": "Battery/Electrical",
    "fn": "cell V/T, SOC/SOH, balancing, charge/temp gating; 2 SOC estimators (twin redundancy map)",
    "specs": {
      "cells": "~100S+ TBD",
      "comms": "CAN->Ethernet gateway"
    },
    "dims_mm": "TBD",
    "mass_kg": "~5",
    "qty": "1-2",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Orion",
        "product": "BMS 2/Jr",
        "note": "proven EV-conversion BMS"
      },
      {
        "supplier": "REC",
        "product": "BMS",
        "note": "marine/off-grid"
      },
      {
        "supplier": "JK/Batrium",
        "product": "",
        "note": "DIY-grade"
      }
    ],
    "selected": "",
    "source": "03_.../Battery_and_Pack_Vetting.md",
    "photo": "components/bms/photos/",
    "model3d": "components/bms/models/",
    "spec_doc": "components/bms/spec.md",
    "sourcing": {
      "est_unit_usd": 1400,
      "qty": 2,
      "est_total_usd": 2800,
      "region": "China/West",
      "channel": "Orion(US) or JK/Batrium(CN)",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "dcdc-bidir",
    "name": "Bidirectional DC-DC (400<->48V)",
    "subsystem": "Battery/Electrical",
    "fn": "the single 400V<->48V gateway; genset+solar->pack, pack->house, V2X",
    "specs": {
      "power": "~7-10 kW",
      "in": "400V",
      "out": "48V"
    },
    "dims_mm": "TBD",
    "mass_kg": "~8",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Vicor",
        "product": "NBM/DCM",
        "note": "high power density modules"
      },
      {
        "supplier": "BorgWarner/Sevcon",
        "product": "",
        "note": "EV-grade"
      }
    ],
    "selected": "",
    "source": "03_.../Power_Electronics_Vetting.md, Bidirectional_V2X_Power_Station.md",
    "photo": "components/dcdc-bidir/photos/",
    "model3d": "components/dcdc-bidir/models/",
    "spec_doc": "components/dcdc-bidir/spec.md",
    "sourcing": {
      "est_unit_usd": 2500,
      "qty": 1,
      "est_total_usd": 2500,
      "region": "West",
      "channel": "Vicor(US)/BorgWarner",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "inverter-charger",
    "name": "Bidirectional inverter-charger",
    "subsystem": "Battery/Electrical",
    "fn": "shore charge + AC export (V2H/V2G) + AC tools; the ONE add for AC export",
    "specs": {
      "power": "~7.6 kW",
      "phase": "split-phase 120/240V",
      "features": "anti-islanding, GFCI"
    },
    "dims_mm": "TBD",
    "mass_kg": "~30",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Victron",
        "product": "MultiPlus-II / Quattro",
        "note": "proven, VRM integration"
      },
      {
        "supplier": "Sol-Ark",
        "product": "",
        "note": "US split-phase hybrid"
      }
    ],
    "selected": "",
    "source": "Bidirectional_V2X_Power_Station.md",
    "photo": "components/inverter-charger/photos/",
    "model3d": "components/inverter-charger/models/",
    "spec_doc": "components/inverter-charger/spec.md",
    "sourcing": {
      "est_unit_usd": 2500,
      "qty": 1,
      "est_total_usd": 2500,
      "region": "West",
      "channel": "Victron(NL)/Sol-Ark(US)",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "mppt",
    "name": "Solar MPPT controllers",
    "subsystem": "Battery/Electrical",
    "fn": "multi-array (roof+foldouts+sides) -> 48V; ~12 kW deployed",
    "specs": {
      "total": "~12 kW"
    },
    "dims_mm": "TBD",
    "mass_kg": "~10 total",
    "qty": "several",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Victron",
        "product": "SmartSolar MPPT RS",
        "note": "pairs w/ Cerbo/VRM"
      }
    ],
    "selected": "",
    "source": "Solar_Everywhere_and_Waste_Heat_Verdict.md",
    "photo": "components/mppt/photos/",
    "model3d": "components/mppt/models/",
    "spec_doc": "components/mppt/spec.md",
    "sourcing": {
      "est_unit_usd": 1200,
      "qty": 1,
      "est_total_usd": 1200,
      "region": "West",
      "channel": "Victron(NL)",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "e-axle",
    "name": "Rear e-axle",
    "subsystem": "Drivetrain",
    "fn": "single rear e-axle; core identity (no hub motors); ~10-11in belly clearance",
    "specs": {
      "class": "medium-duty commercial",
      "voltage": "400V"
    },
    "dims_mm": "TBD",
    "mass_kg": "~250",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "JJE",
        "product": "e-axle",
        "note": "referenced class"
      },
      {
        "supplier": "ZF",
        "product": "AxTrax",
        "note": "bus/commercial e-axle"
      },
      {
        "supplier": "Dana",
        "product": "Spicer Electrified",
        "note": ""
      },
      {
        "supplier": "Allison",
        "product": "eGen",
        "note": ""
      }
    ],
    "selected": "",
    "source": "Eaxle_RideHeight_and_Rear_Packaging.md",
    "photo": "components/e-axle/photos/",
    "model3d": "components/e-axle/models/",
    "spec_doc": "components/e-axle/spec.md",
    "sourcing": {
      "est_unit_usd": 8000,
      "qty": 1,
      "est_total_usd": 8000,
      "region": "OEM",
      "channel": "ZF/Dana/JJE (reman/OEM)",
      "confidence": "rough - big uncertainty",
      "rfq_status": "not started"
    }
  },
  {
    "id": "co2-compressor-ht",
    "name": "CO2 heat-pump compressor (high-temp)",
    "subsystem": "Thermal/CHP",
    "fn": "the CO2 core high-temp circuit; cabin heat + DHW + battery + fridge via 18-port manifold",
    "specs": {
      "refrigerant": "R744 (CO2)",
      "voltage": "400V"
    },
    "dims_mm": "TBD",
    "mass_kg": "~20",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Dorin",
        "product": "CD/CDS transcritical",
        "note": "CO2 compressors"
      },
      {
        "supplier": "BITZER",
        "product": "CO2",
        "note": ""
      },
      {
        "supplier": "Secop",
        "product": "",
        "note": "smaller CO2"
      }
    ],
    "selected": "",
    "source": "04_Thermal_HeatPump_Coolant_CHP/*",
    "photo": "components/co2-compressor-ht/photos/",
    "model3d": "components/co2-compressor-ht/models/",
    "spec_doc": "components/co2-compressor-ht/spec.md",
    "sourcing": {
      "est_unit_usd": 3000,
      "qty": 1,
      "est_total_usd": 3000,
      "region": "West",
      "channel": "Dorin(IT)/BITZER(DE)",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "lt-compressor",
    "name": "Low-temp compressor (freezer, 48V)",
    "subsystem": "Thermal/CHP",
    "fn": "low-temp circuit for the freezer; 48V DC",
    "specs": {
      "voltage": "48V DC"
    },
    "dims_mm": "TBD",
    "mass_kg": "~5",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Secop",
        "product": "BD/NLV 48V",
        "note": "DC fridge/freezer compressors"
      }
    ],
    "selected": "",
    "source": "Thermal track",
    "photo": "components/lt-compressor/photos/",
    "model3d": "components/lt-compressor/models/",
    "spec_doc": "components/lt-compressor/spec.md",
    "sourcing": {
      "est_unit_usd": 400,
      "qty": 1,
      "est_total_usd": 400,
      "region": "West/China",
      "channel": "Secop",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "manifold",
    "name": "18-port thermal manifold + valves",
    "subsystem": "Thermal/CHP",
    "fn": "routes heat/cold between core, buffers, cabin, battery, DHW, fridge, hydro per mode",
    "specs": {
      "ports": "18"
    },
    "dims_mm": "TBD",
    "mass_kg": "~10",
    "qty": "1",
    "status": "idea",
    "candidates": [
      {
        "supplier": "custom",
        "product": "manifold + motorized valves",
        "note": "Belimo/Danfoss valves"
      }
    ],
    "selected": "",
    "source": "Thermal manifold",
    "photo": "components/manifold/photos/",
    "model3d": "components/manifold/models/",
    "spec_doc": "components/manifold/spec.md",
    "sourcing": {
      "est_unit_usd": 1500,
      "qty": 1,
      "est_total_usd": 1500,
      "region": "Custom",
      "channel": "fab + Belimo/Danfoss valves",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "am-hx",
    "name": "AM gyroid heat exchangers (exhaust/PVT)",
    "subsystem": "Thermal/CHP",
    "fn": "2-stage condensing CHP exhaust recovery (~85% of heat); PV/T cooling; heat rejection",
    "specs": {
      "type": "TPMS/gyroid, additively manufactured"
    },
    "dims_mm": "TBD",
    "mass_kg": "~5 ea",
    "qty": "several",
    "status": "idea",
    "candidates": [
      {
        "supplier": "LEAP 71 / Noyron",
        "product": "computational HX",
        "note": "PicoGK open-source"
      },
      {
        "supplier": "Conflux",
        "product": "AM HX",
        "note": "commercial AM HX"
      }
    ],
    "selected": "",
    "source": "CHP_Exhaust_Heat_Recovery_AM_Gyroid.md",
    "photo": "components/am-hx/photos/",
    "model3d": "components/am-hx/models/",
    "spec_doc": "components/am-hx/spec.md",
    "sourcing": {
      "est_unit_usd": 3000,
      "qty": 4,
      "est_total_usd": 12000,
      "region": "West",
      "channel": "LEAP71/Conflux AM print",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "chp-genset",
    "name": "Diesel CHP genset (series range-extender)",
    "subsystem": "Thermal/CHP",
    "fn": "~3.5 kW elec + ~7 kW heat; feeds 48V bus (NOT the wheels); winter/sunless backstop",
    "specs": {
      "elec": "3.5 kW",
      "heat": "~7 kW",
      "fuel": "diesel"
    },
    "dims_mm": "TBD (sealed)",
    "mass_kg": "~60",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Fischer Panda",
        "product": "marine CHP-ready genset",
        "note": "compact, sealed, quiet"
      },
      {
        "supplier": "Whisper Power",
        "product": "",
        "note": "marine DC genset"
      },
      {
        "supplier": "DMTG/Kohler",
        "product": "",
        "note": ""
      }
    ],
    "selected": "",
    "source": "Genset_Series_RangeExtender_and_Cold_Preconditioning.md",
    "photo": "components/chp-genset/photos/",
    "model3d": "components/chp-genset/models/",
    "spec_doc": "components/chp-genset/spec.md",
    "sourcing": {
      "est_unit_usd": 6000,
      "qty": 1,
      "est_total_usd": 6000,
      "region": "West",
      "channel": "Fischer Panda(DE)/Whisper Power",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "composting-toilet",
    "name": "Extended composting toilet",
    "subsystem": "Water",
    "fn": "urine-diverting; larger chamber ~6-10 wks between empties for 2-3; urine->hydroponics",
    "specs": {
      "seat_h": "~460-500mm",
      "body": "~660-710 x 510 x 560-610 mm"
    },
    "dims_mm": "~510 W x 610 D x 710 H",
    "mass_kg": "~15",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Nature's Head",
        "product": "",
        "note": "proven but small chamber"
      },
      {
        "supplier": "Trelino",
        "product": "Evo L",
        "note": "modern, compact"
      },
      {
        "supplier": "OGO",
        "product": "",
        "note": "electric mixing"
      },
      {
        "supplier": "custom",
        "product": "extended chamber",
        "note": "TJ wants ~2x capacity"
      }
    ],
    "selected": "",
    "source": "E-House_Bus_Composting_System_Brainstorm.md",
    "photo": "components/composting-toilet/photos/",
    "model3d": "components/composting-toilet/models/",
    "spec_doc": "components/composting-toilet/spec.md",
    "sourcing": {
      "est_unit_usd": 1200,
      "qty": 1,
      "est_total_usd": 1200,
      "region": "West/Custom",
      "channel": "Trelino/OGO or custom",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "water-pump",
    "name": "Water pump(s)",
    "subsystem": "Water",
    "fn": "pressurized fresh + closed-loop shower recirc",
    "specs": {
      "voltage": "48/12V"
    },
    "dims_mm": "small",
    "mass_kg": "~2",
    "qty": "2-3",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Shurflo",
        "product": "",
        "note": ""
      },
      {
        "supplier": "Flojet",
        "product": "",
        "note": ""
      }
    ],
    "selected": "",
    "source": "Water_Systems.design.md",
    "photo": "components/water-pump/photos/",
    "model3d": "components/water-pump/models/",
    "spec_doc": "components/water-pump/spec.md",
    "sourcing": {
      "est_unit_usd": 250,
      "qty": 3,
      "est_total_usd": 750,
      "region": "China/West",
      "channel": "Shurflo/Flojet or Alibaba",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "uv-steriliser",
    "name": "UV water steriliser",
    "subsystem": "Water",
    "fn": "potable safety on the recirc/condensate loop",
    "specs": {
      "voltage": "12/24V"
    },
    "dims_mm": "inline",
    "mass_kg": "~1",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Acuva",
        "product": "ArrowMax",
        "note": "UV-LED, low draw"
      }
    ],
    "selected": "",
    "source": "Water_Systems.design.md",
    "photo": "components/uv-steriliser/photos/",
    "model3d": "components/uv-steriliser/models/",
    "spec_doc": "components/uv-steriliser/spec.md",
    "sourcing": {
      "est_unit_usd": 400,
      "qty": 1,
      "est_total_usd": 400,
      "region": "West",
      "channel": "Acuva(CA)",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "ss-tanks",
    "name": "Stainless water tanks (fresh + grey)",
    "subsystem": "Water",
    "fn": "316L SS; also rear-axle trim weight under galley",
    "specs": {
      "material": "316L SS"
    },
    "dims_mm": "TBD",
    "mass_kg": "~15 empty",
    "qty": "2",
    "status": "idea",
    "candidates": [
      {
        "supplier": "custom fab",
        "product": "",
        "note": ""
      }
    ],
    "selected": "",
    "source": "Water_Systems.design.md",
    "photo": "components/ss-tanks/photos/",
    "model3d": "components/ss-tanks/models/",
    "spec_doc": "components/ss-tanks/spec.md",
    "sourcing": {
      "est_unit_usd": 1200,
      "qty": 2,
      "est_total_usd": 2400,
      "region": "Custom",
      "channel": "316L fab (local or China)",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "fridge-freezer",
    "name": "Fridge/freezer (loop-fed)",
    "subsystem": "Interior/Appliance",
    "fn": "~20 cu ft, 30x60x30in; NO compressor in cabinet (cooled off the thermal loop) -> reclaims depth",
    "specs": {
      "volume": "~20 cu ft",
      "cooling": "loop-fed evaporator plate"
    },
    "dims_mm": "762 x 1524 x 762",
    "mass_kg": "~50",
    "qty": "1",
    "status": "idea",
    "candidates": [
      {
        "supplier": "custom",
        "product": "insulated box + evaporator",
        "note": "loop-fed = bespoke"
      },
      {
        "supplier": "Vitrifrigo/Isotherm",
        "product": "",
        "note": "reference for evaporator plates"
      }
    ],
    "selected": "",
    "source": "Bus_Layout_and_Floorplan.design.md v0.6",
    "photo": "components/fridge-freezer/photos/",
    "model3d": "components/fridge-freezer/models/",
    "spec_doc": "components/fridge-freezer/spec.md",
    "sourcing": {
      "est_unit_usd": 2500,
      "qty": 1,
      "est_total_usd": 2500,
      "region": "Custom",
      "channel": "bespoke loop-fed box",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "induction-cooktop",
    "name": "Induction cooktop (48V DC)",
    "subsystem": "Interior/Appliance",
    "fn": "all-DC galley; no AC bus",
    "specs": {
      "voltage": "48V DC"
    },
    "dims_mm": "TBD",
    "mass_kg": "~5",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Kenyon",
        "product": "",
        "note": "marine induction"
      },
      {
        "supplier": "custom 48V",
        "product": "",
        "note": "DC-native audit doc"
      }
    ],
    "selected": "",
    "source": "AC_vs_DC_Appliance_Audit.md",
    "photo": "components/induction-cooktop/photos/",
    "model3d": "components/induction-cooktop/models/",
    "spec_doc": "components/induction-cooktop/spec.md",
    "sourcing": {
      "est_unit_usd": 700,
      "qty": 1,
      "est_total_usd": 700,
      "region": "West/China",
      "channel": "Kenyon or 48V custom",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "climate-bed",
    "name": "Climate bed (Eight Sleep-style)",
    "subsystem": "Interior/Appliance",
    "fn": "'Sleep 8'-class active-climate mattress off the thermal loop (NOT 8 people)",
    "specs": {
      "cooling": "loop-fed"
    },
    "dims_mm": "~1520 x 2030",
    "mass_kg": "~40",
    "qty": "1",
    "status": "idea",
    "candidates": [
      {
        "supplier": "Eight Sleep",
        "product": "Pod",
        "note": "reference; may integrate to loop"
      },
      {
        "supplier": "custom",
        "product": "loop-fed topper",
        "note": ""
      }
    ],
    "selected": "",
    "source": "Systems architecture",
    "photo": "components/climate-bed/photos/",
    "model3d": "components/climate-bed/models/",
    "spec_doc": "components/climate-bed/spec.md",
    "sourcing": {
      "est_unit_usd": 2000,
      "qty": 1,
      "est_total_usd": 2000,
      "region": "West/Custom",
      "channel": "Eight Sleep or loop-fed topper",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "insulation",
    "name": "Insulation (walls/roof/floor)",
    "subsystem": "Structure/Insulation",
    "fn": "four-season envelope; target UA ~48 W/K (v0.6). Walls ~R-20, roof ~R-25, floor ~R-20",
    "specs": {
      "wall": "~R-20",
      "roof": "~R-25",
      "approach": "VIP + PIR/polyiso hybrid; aerogel at bridges"
    },
    "dims_mm": "~90 m2 opaque envelope",
    "mass_kg": "~120",
    "qty": "bulk",
    "status": "researching",
    "candidates": [
      {
        "supplier": "VIP - va-Q-tec / Panasonic",
        "product": "vacuum insulated panels",
        "note": "R-40+/in; thin; use where depth-limited"
      },
      {
        "supplier": "PIR/polyiso - Kingspan/Recticel",
        "product": "board",
        "note": "R-6/in; main fill"
      },
      {
        "supplier": "Aerogel - Aspen",
        "product": "Spaceloft/Cryogel",
        "note": "thermal-bridge + curved areas"
      },
      {
        "supplier": "Havelock/Thinsulate",
        "product": "wool/synthetic",
        "note": "non-VIP cavities, non-toxic"
      }
    ],
    "selected": "",
    "source": "Heat_Load_and_Winter_Diesel_v0_6.md (UA model)",
    "photo": "components/insulation/photos/",
    "model3d": "components/insulation/models/",
    "spec_doc": "components/insulation/spec.md",
    "sourcing": {
      "est_unit_usd": 3000,
      "qty": 1,
      "est_total_usd": 3000,
      "region": "West mostly",
      "channel": "VIP(va-Q-tec)+PIR(Kingspan)+aerogel(Aspen)",
      "confidence": "rough - materials",
      "rfq_status": "not started"
    }
  },
  {
    "id": "slide-actuator",
    "name": "Slide-out actuators (self-locking)",
    "subsystem": "Structure/Insulation",
    "fn": "~34in travel; self-locking screw (holds w/o power); drop-down jack; travel latch (DRIVE guard)",
    "specs": {
      "travel": "~34 in",
      "type": "self-locking screw",
      "load": "~200 kg live"
    },
    "dims_mm": "TBD",
    "mass_kg": "~15/slide",
    "qty": "2",
    "status": "idea",
    "candidates": [
      {
        "supplier": "LINAK",
        "product": "linear actuators",
        "note": "self-locking options"
      },
      {
        "supplier": "Lippert/Schwintek",
        "product": "RV slide mechanism",
        "note": "RV-proven but check load"
      }
    ],
    "selected": "",
    "source": "Bus_Layout_and_Floorplan.design.md v0.8",
    "photo": "components/slide-actuator/photos/",
    "model3d": "components/slide-actuator/models/",
    "spec_doc": "components/slide-actuator/spec.md",
    "sourcing": {
      "est_unit_usd": 1500,
      "qty": 2,
      "est_total_usd": 3000,
      "region": "West/China",
      "channel": "LINAK/Lippert",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "al-extrusion",
    "name": "Aluminium extrusion frame (dry structure)",
    "subsystem": "Structure/Insulation",
    "fn": "interior dry frame + slide-box frames (wet zones = 316L SS only)",
    "specs": {
      "type": "Al extrusion"
    },
    "dims_mm": "bulk",
    "mass_kg": "~150",
    "qty": "bulk",
    "status": "idea",
    "candidates": [
      {
        "supplier": "80/20",
        "product": "T-slot",
        "note": ""
      },
      {
        "supplier": "item",
        "product": "",
        "note": ""
      }
    ],
    "selected": "",
    "source": "Two_Build_Variants / structure",
    "photo": "components/al-extrusion/photos/",
    "model3d": "components/al-extrusion/models/",
    "spec_doc": "components/al-extrusion/spec.md",
    "sourcing": {
      "est_unit_usd": 2500,
      "qty": 1,
      "est_total_usd": 2500,
      "region": "West/China",
      "channel": "80/20(US) or Alibaba extrusion",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "aq-sensors",
    "name": "Air-quality sensors (4 zones)",
    "subsystem": "Controls/Safety",
    "fn": "CO/CO2/O2/humidity/PM per zone; CO+CO2 dual (safety-redundant, twin map)",
    "specs": {
      "per_zone": "CO,CO2,O2,humidity,PM",
      "zones": 4
    },
    "dims_mm": "small",
    "mass_kg": "~0.2 ea",
    "qty": "4+",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Sensirion",
        "product": "SCD4x (CO2), SEN5x (PM)",
        "note": "I2C, proven"
      },
      {
        "supplier": "Figaro/SPEC",
        "product": "CO, O2",
        "note": "electrochemical"
      }
    ],
    "selected": "",
    "source": "Controls_Brain_Spec_v0_4.md (sensor map)",
    "photo": "components/aq-sensors/photos/",
    "model3d": "components/aq-sensors/models/",
    "spec_doc": "components/aq-sensors/spec.md",
    "sourcing": {
      "est_unit_usd": 120,
      "qty": 5,
      "est_total_usd": 600,
      "region": "China/West",
      "channel": "Sensirion(CH) + Alibaba",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  },
  {
    "id": "compute-host",
    "name": "Controls compute host + network",
    "subsystem": "Controls/Safety",
    "fn": "Linux host (smart layers) + separate deterministic firmware (safety) + auto-Ethernet + CAN gateways",
    "specs": {
      "backbone": "100/1000BASE-T1",
      "host": "rugged fanless x86"
    },
    "dims_mm": "TBD",
    "mass_kg": "~5",
    "qty": "1",
    "status": "researching",
    "candidates": [
      {
        "supplier": "Neousys/OnLogic/Premio",
        "product": "rugged in-vehicle PC",
        "note": "auto-Ethernet + wide DC in"
      },
      {
        "supplier": "Victron",
        "product": "Cerbo GX + VRM",
        "note": "power-system brain"
      },
      {
        "supplier": "STM32/ESP32",
        "product": "safety firmware nodes",
        "note": "deterministic layer"
      }
    ],
    "selected": "",
    "source": "Controls_and_Software.design.md + Brain v0.3",
    "photo": "components/compute-host/photos/",
    "model3d": "components/compute-host/models/",
    "spec_doc": "components/compute-host/spec.md",
    "sourcing": {
      "est_unit_usd": 2200,
      "qty": 1,
      "est_total_usd": 2200,
      "region": "West",
      "channel": "OnLogic/Neousys + Victron Cerbo",
      "confidence": "rough",
      "rfq_status": "not started"
    }
  }
];
