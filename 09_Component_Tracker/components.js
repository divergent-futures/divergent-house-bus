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
    "fn": "TWO roles: traction (~133S/400V, EV-grade) + house (~16S/48V, simpler). Sodium needs a CONFIGURABLE voltage window (~1.5-4.0V), not an LFP-hardcoded BMS. Feeds Controls L1 + 2-SOC cross-check.",
    "specs": {
      "traction": "~133S 400V 360kWh",
      "house": "~16S 48V 30kWh",
      "sodium": "configurable 1.5-4.0V + balance; NO cold-charge lockout",
      "comms": "CAN->Ethernet gateway + contactor control"
    },
    "dims_mm": "Orion 02 ~ compact ECU + cell taps",
    "mass_kg": "~5 (both)",
    "qty": "1-2",
    "status": "candidate-selected",
    "candidates": [
      {
        "supplier": "Orion (Ewert Energy)",
        "product": "BMS 2 (02) Expandable",
        "note": "RECO TRACTION: 24-180 cells to 800V, cell 0.5-5.0V (covers sodium), configurable, dual-CAN+contactor, EV-proven, ~$2-2.5k"
      },
      {
        "supplier": "foxBMS (Fraunhofer)",
        "product": "open-source BMS",
        "note": "OPEN-SOURCE alt (on-thesis): 1-hundreds cells, configurable; R&D platform = more engineering, less turnkey"
      },
      {
        "supplier": "Nuvation",
        "product": "G4 HV",
        "note": "to 1500V, multi-chemistry, functional-safety, ESS/utility grade; pricier"
      },
      {
        "supplier": "Batrium",
        "product": "Core + K9 + Blockmons",
        "note": "modular per-cell monitoring, configurable; ~$0.7-1.8k; DIY/ESS"
      },
      {
        "supplier": "REC",
        "product": "BMS",
        "note": "HOUSE 48V option: marine/off-grid, ~16S+, ~$0.6-1k"
      },
      {
        "supplier": "JK/Daly/Seplos",
        "product": "cheap DIY",
        "note": "HOUSE only + ONLY if voltage-configurable for sodium (many are LFP-preset - verify!)"
      }
    ],
    "selected": "Traction: Orion BMS 2 Expandable (TURNKEY \u2014 decided, safety-first) \u00b7 House: REC/Batrium",
    "source": "03_.../Battery_and_Pack_Vetting.md",
    "photo": "components/bms/photos/",
    "model3d": "components/bms/models/",
    "spec_doc": "components/bms/spec.md",
    "sourcing": {
      "est_unit_usd": 1800,
      "qty": 2,
      "est_total_usd": 3600,
      "region": "China/West",
      "channel": "Orion(US/Ewert) traction + REC(SI)/Batrium(AU) house; foxBMS open-src",
      "confidence": "researched (traction ~$2-2.5k, house ~$0.6-1k)",
      "rfq_status": "ready to RFQ"
    }
  },
  {
    "id": "dcdc-bidir",
    "name": "Bidirectional DC-DC (400<->48V)",
    "subsystem": "Battery/Electrical",
    "fn": "the single 400V<->48V gateway; genset+solar->pack, pack->house, V2X",
    "specs": {
      "power": "~8-10 kW bidirectional",
      "in": "400V traction",
      "out": "48V house",
      "isolation": "galvanic"
    },
    "dims_mm": "~56x196x272 (BRUSA BSC)",
    "mass_kg": "~4-8",
    "qty": "1",
    "status": "candidate-selected",
    "candidates": [
      {
        "supplier": "BRUSA HyPower",
        "product": "BSC7xx",
        "note": "RECO (turnkey/safety): bidir, 400&800V, galvanic isolation, ~<4kg, automotive-grade"
      },
      {
        "supplier": "Vicor",
        "product": "BCM6135 \u00d7~4 parallel",
        "note": "2.5kW ea, 98% eff, AEC-Q100; density but needs paralleling+eng"
      },
      {
        "supplier": "PROGREEN (CN)",
        "product": "48<->400 ESS DC-DC",
        "note": "packaged, buyable, cheaper, less pedigree"
      },
      {
        "supplier": "BorgWarner",
        "product": "HV DC/DC",
        "note": "OEM/integrator, rugged"
      }
    ],
    "selected": "BRUSA BSC (turnkey) \u2014 Vicor modular as density alt",
    "source": "03_.../Power_Electronics_Vetting.md, Bidirectional_V2X_Power_Station.md",
    "photo": "components/dcdc-bidir/photos/",
    "model3d": "components/dcdc-bidir/models/",
    "spec_doc": "components/dcdc-bidir/spec.md",
    "sourcing": {
      "est_unit_usd": 2500,
      "qty": 1,
      "est_total_usd": 2500,
      "region": "West",
      "channel": "BRUSA HyPower(CH) / Vicor(US)",
      "confidence": "researched",
      "rfq_status": "ready to RFQ"
    }
  },
  {
    "id": "inverter-charger",
    "name": "Bidirectional inverter-charger",
    "subsystem": "Battery/Electrical",
    "fn": "shore charge + AC export (V2H/V2G) + AC tools; the ONE add for AC export",
    "specs": {
      "power": "~7.6 kW",
      "phase": "120/240V split-phase",
      "features": "anti-islanding, GFCI, VRM"
    },
    "dims_mm": "TBD",
    "mass_kg": "~30",
    "qty": "1",
    "status": "candidate-selected",
    "candidates": [
      {
        "supplier": "Victron",
        "product": "MultiPlus-II \u00d72 (split-phase)",
        "note": "RECO (turnkey/ecosystem): built-in anti-islanding, Cerbo/VRM native \u2192 ties to controls brain"
      },
      {
        "supplier": "Victron",
        "product": "Quattro-II",
        "note": "split-phase autotransformer + 2 AC inputs (shore+gen); ~30% more"
      },
      {
        "supplier": "Sol-Ark",
        "product": "12K/15K",
        "note": "US split-phase all-in-one hybrid, EV-charge, future V2G"
      },
      {
        "supplier": "Schneider/EG4/Outback",
        "product": "",
        "note": "other off-grid split-phase"
      }
    ],
    "selected": "Victron MultiPlus-II split-phase pair (or Quattro-II)",
    "source": "Bidirectional_V2X_Power_Station.md",
    "photo": "components/inverter-charger/photos/",
    "model3d": "components/inverter-charger/models/",
    "spec_doc": "components/inverter-charger/spec.md",
    "sourcing": {
      "est_unit_usd": 1600,
      "qty": 2,
      "est_total_usd": 3200,
      "region": "West",
      "channel": "Victron(NL) dealers",
      "confidence": "researched",
      "rfq_status": "ready to RFQ"
    }
  },
  {
    "id": "mppt",
    "name": "Solar MPPT controllers",
    "subsystem": "Battery/Electrical",
    "fn": "Multi-array (~12 kW) into 48V with INDEPENDENT trackers per roof zone (roof/fold-outs/vertical sides/slide-tops).",
    "specs": {
      "total": "~12 kW deployed",
      "controller": "Victron SmartSolar MPPT RS 450 (65-450V in, 48V out)",
      "trackers": "independent dual per unit",
      "comms": "VE.Can -> Cerbo/VRM"
    },
    "dims_mm": "RS 450 ~440x350x180 ea",
    "mass_kg": "~15 (2 units)",
    "qty": "several",
    "status": "candidate-selected",
    "candidates": [
      {
        "supplier": "Victron",
        "product": "SmartSolar MPPT RS 450/100 (5.76kW) \u00d72",
        "note": "RECO: 4 independent trackers for mixed orientations; VE.Can -> Cerbo; ~$2.5-3k"
      },
      {
        "supplier": "Victron",
        "product": "SmartSolar MPPT RS 450/200 (11.52kW)",
        "note": "single unit but only 2 trackers"
      },
      {
        "supplier": "Victron",
        "product": "SmartSolar MPPT 250/100 (small)",
        "note": "for the always-on side-panel strings on their own tracker"
      },
      {
        "supplier": "EPEVER/other",
        "product": "",
        "note": "cheaper but breaks the Victron/VRM ecosystem"
      }
    ],
    "selected": "2\u00d7 Victron SmartSolar MPPT RS 450/100 (4 trackers)",
    "source": "Solar_Everywhere_and_Waste_Heat_Verdict.md",
    "photo": "components/mppt/photos/",
    "model3d": "components/mppt/models/",
    "spec_doc": "components/mppt/spec.md",
    "sourcing": {
      "est_unit_usd": 1300,
      "qty": 2,
      "est_total_usd": 2600,
      "region": "West",
      "channel": "Victron(NL) dealers",
      "confidence": "researched",
      "rfq_status": "ready to RFQ"
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
  },
  {
    "id": "heatpump-48v-rooftop",
    "name": "48V DC rooftop heat pump (Explorer tier)",
    "subsystem": "Thermal/CHP",
    "fn": "Native 48V DC rooftop heat pump (cool+heat) running STRAIGHT off the house bus \u2014 ZERO inverter load. The simple 'Explorer-tier' HVAC alternative to the flagship integrated CO2 core (no waste-heat/DHW/battery-loop integration).",
    "specs": {
      "type": "48V DC rooftop heat pump",
      "capacity": "9,500 BTU (~2.8 kW) cool+heat",
      "source": "air-source",
      "integration": "none (standalone, all-DC)"
    },
    "dims_mm": "rooftop unit TBD",
    "mass_kg": "~30",
    "qty": "1",
    "status": "candidate-selected",
    "candidates": [
      {
        "supplier": "RecPro",
        "product": "48V DC rooftop AC/heat pump 9,500 BTU",
        "note": "TJ's find: $1,850, cool+heat, native 48V DC, zero inverter load \u2014 Explorer-tier"
      }
    ],
    "selected": "RecPro 48V DC rooftop (Explorer tier)",
    "source": "TJ 2026-07-07; contrast w/ co2-compressor-ht flagship core",
    "photo": "components/heatpump-48v-rooftop/photos/",
    "model3d": "components/heatpump-48v-rooftop/models/",
    "spec_doc": "components/heatpump-48v-rooftop/spec.md",
    "sourcing": {
      "est_unit_usd": 1850,
      "qty": 1,
      "est_total_usd": 1850,
      "region": "West",
      "channel": "RecPro(US) retail",
      "confidence": "TJ-provided (verify model/COP/heat)",
      "rfq_status": "found \u2014 verify"
    }
  },
  {
    "id": "solar-panels",
    "name": "Solar panels (glass-free, impact-resistant)",
    "subsystem": "Battery/Electrical",
    "fn": "~12 kW deployed across roof-main + 2-3 fold-outs + vertical sides + slide-tops. LIGHTWEIGHT + THIN + IMPACT-RESISTANT (branch/hail must not smash it) \u2192 go GLASS-FREE.",
    "specs": {
      "deployed": "~12 kW",
      "type": "glass-free composite / metal-grid semi-flexible",
      "impact": "no glass to shatter; hail/walkable rated",
      "sizes": "multiple (100-520W) per roof zone"
    },
    "dims_mm": "various per zone",
    "mass_kg": "~ (eArc 430W ~11kg; ~70% lighter than glass)",
    "qty": "many (multi-array)",
    "status": "candidate-selected",
    "candidates": [
      {
        "supplier": "Sunman (CN)",
        "product": "eArc glass-free composite",
        "note": "RECO: airplane-window composite, NO shatter, ~70% lighter, ~19.3%, sizes 100-520W \u2014 class flagship"
      },
      {
        "supplier": "Merlin Solar (US)",
        "product": "metal-grid flexible/rigid",
        "note": "RECO-alt: WALKABLE, ~50x cell crack-resistance, marine/military"
      },
      {
        "supplier": "SunWare (DE)",
        "product": "glass-free (Nowoflon film) marine",
        "note": "EU glass-free, salt-proof, since 1987 \u2014 durable marine"
      },
      {
        "supplier": "Solbian (IT)",
        "product": "premium ETFE flexible",
        "note": "Maxeon cells ~25.9%, marine-extreme durability; premium"
      },
      {
        "supplier": "Solarge+EconCore (NL)",
        "product": "glass-free honeycomb",
        "note": "~65% lighter, recyclable; EU rooftop-lightweight"
      },
      {
        "supplier": "Levante (IT)",
        "product": "carbon-fibre glass-free",
        "note": "waterproof, recycled CF (w/ Solbian), new 2025"
      },
      {
        "supplier": "Maxeon/SunPower (US)",
        "product": "flexible/rigid",
        "note": "highest eff ~22.7%, hail, 40yr \u2014 premium cells"
      },
      {
        "supplier": "Ascent Solar / PowerFilm (US)",
        "product": "CIGS / a-Si thin-film",
        "note": "most impact-tolerant + ultralight BUT low eff \u2192 ~2-3x area"
      },
      {
        "supplier": "Sunport Power (CN)",
        "product": "MWT ETFE flexible 370-380W",
        "note": "buyable mid-tier"
      },
      {
        "supplier": "LONGi/Jinko/Trina/JA (CN)",
        "product": "rigid glass ~22%",
        "note": "cheapest USD/W but HEAVY+shatters \u2014 cost anchor only"
      },
      {
        "supplier": "AVOID",
        "product": "Renogy/Sungold/Lensun/OEM cheap PET",
        "note": "poor lifespan/punctures \u2014 verify ETFE+datasheet"
      }
    ],
    "selected": "Sunman eArc primary (glass-free) + Merlin/SunWare/Solbian where walkable/toughest/EU-marine; avoid glass+cheap-PET",
    "source": "Solar_Everywhere_and_Waste_Heat_Verdict.md + TJ impact-resistance ask 2026-07-07",
    "photo": "components/solar-panels/photos/",
    "model3d": "components/solar-panels/models/",
    "spec_doc": "components/solar-panels/spec.md",
    "sourcing": {
      "est_unit_usd": 1.1,
      "qty": 12000,
      "est_total_usd": 13000,
      "region": "West/China",
      "channel": "Sunman/Merlin dealers or direct",
      "confidence": "~$1-1.2/W glass-free \u2192 ~$12-14k for ~12kW",
      "rfq_status": "RFQ ready (per-zone)"
    }
  }
];
