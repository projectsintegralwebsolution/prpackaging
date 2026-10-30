export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category:
    | "Paper Tubes & Cores"
    | "Corrugated Packaging"
    | "Other Packaging Products";
  image: string;
  tagline: string;
  overview: string;
  applications: string[];
  features: string[];
  industries: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  specNotes?: string;
  whyChooseUs: string[];
  relatedSlugs: string[];
}

export const PRODUCTS: Product[] = [
  // ============================================================================
  // PAPER TUBES & PAPER CORES (13 PRODUCTS)
  // ============================================================================
  {
    slug: "paper-tubes",
    name: "Paper Tubes",
    shortName: "Paper Tubes",
    category: "Paper Tubes & Cores",
    image: "/images/products/paper-tubes.jpg",
    tagline:
      "Precision-Engineered Paper Tubes for Industrial, Construction & Retail Packaging",
    overview:
      "Paper tubes are cylindrical structures made from cardboard or paperboard, used in industries like packaging, shipping, textiles, and construction. P.R. Packaging manufactures customizable paper tubes engineered using high-grade recycled paper, virgin kraft liners, and high-quality dextrine powder gumming for superior strength, dimensional precision, and 100% recyclability.",
    applications: [
      "Industrial shipping and mailing containers",
      "Construction forming and structural void sleeves",
      "Retail cylindrical product packaging",
      "Protective roll storage and transport",
      "Textile and yarn carrier cores",
      "Custom industrial packaging sleeves"
    ],
    features: [
      "Customizable in size, diameter, length, and wall thickness",
      "High crush and radial resistance to protect inner contents",
      "100% recyclable and eco-friendly raw materials",
      "Precision cut ends for seamless integration into automated lines",
      "Smooth finish with custom printing options in any customer color",
      "High-quality dextrine powder bonding for structural rigidity"
    ],
    industries: [
      "Textiles",
      "Packaging",
      "Shipping & Logistics",
      "Construction",
      "Consumer Goods",
      "Industrial Manufacturing"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm" },
      { label: "Inner Diameter (ID)", value: "0.5 inch – 4 inches (approx. 15 mm – 100 mm)" },
      { label: "Tube Length", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (up to 15 mm standard options)" },
      { label: "Paper Options", value: "Recycled kraft paper, Virgin kraft liners, White paper" },
      { label: "Gumming / Adhesive", value: "High-quality dextrine powder" },
      { label: "Printing", value: "Custom branding & printing in any color as per customer requirement" },
      { label: "Order Execution", value: "Order planned and executed in 48 hours across India" }
    ],
    specNotes:
      "Verified from P.R. Packaging company documentation: We produce paper tubes from 14–100 mm diameter, lengths from 1 inch to 130 inches, and wall thicknesses from 1 mm to 20 mm.",
    whyChooseUs: [
      "Established manufacturing expertise since 1992",
      "Over 40+ skilled workers managing our Boisar MIDC production unit",
      "In-house quality testing with machines verifying ring crush and wall tolerance",
      "Direct shipment across India with our dedicated in-house vehicle fleet"
    ],
    relatedSlugs: ["paper-cores", "textile-tubes", "bopp-cello-tape-cores", "corrugated-boxes"]
  },
  {
    slug: "paper-cores",
    name: "Paper Cores",
    shortName: "Paper Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/paper-cores.jpg",
    tagline:
      "Heavy-Duty Industrial Paper Cores Engineered for High-Speed Winding & Reeling",
    overview:
      "Paper cores are sturdy cylindrical tubes used as the inner support for rolls of paper, plastic films, textiles, foils, and adhesive tapes. Manufactured at our Boisar MIDC facility with tightly controlled dimensional tolerances and high radial crush strength, our paper cores resist deformation under continuous high-speed winding tension.",
    applications: [
      "Plastic film and flexible packaging roll winding",
      "Paper mill converting and slitter rewinder cores",
      "Aluminium and silver foil reeling",
      "Textile fabric and yarn winding",
      "Self-adhesive tape and label roll cores"
    ],
    features: [
      "Engineered high radial crush strength to withstand high-tension winding",
      "Smooth outer surface ensuring uniform roll start-up without creases",
      "Exact inner diameter calibration for secure machine chuck engagement",
      "100% recyclable construction using eco-friendly kraft paper and dextrine adhesive",
      "Produced on automated spiral winding machinery for consistent quality"
    ],
    industries: [
      "Plastic Roll Industry",
      "Textile Industry",
      "Aluminium & Foil Industry",
      "Packaging Converting",
      "Paper Mills"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm" },
      { label: "Inner Diameter (ID)", value: "0.5 inch – 4 inches (approx. 15 mm – 100 mm)" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (up to 15 mm standard options)" },
      { label: "Raw Material", value: "High-grade recycled paper & virgin kraft liners" },
      { label: "Adhesive Type", value: "High-quality dextrine powder" },
      { label: "Printing", value: "Custom internal/external printing as per requirement" }
    ],
    whyChooseUs: [
      "Over 30 years of specialized winding core manufacturing experience since 1992",
      "In-house quality testing with specialized machinery",
      "Strategic Boisar MIDC plant and Bhiwandi warehouse for 48-hour order execution"
    ],
    relatedSlugs: ["paper-tubes", "pvc-roll-cores", "foil-cores", "stretch-film-paper-tubes"]
  },
  {
    slug: "textile-tubes",
    name: "Textile Tubes",
    shortName: "Textile Tubes",
    category: "Paper Tubes & Cores",
    image: "/images/products/textile-tubes.jpg",
    tagline:
      "High-Strength Paper Tubes for Fabric Winding, Spinning & Weaving Mills",
    overview:
      "Our textile tubes are engineered to meet the demanding requirements of fabric rolling, textile processing, spinning, and continuous weaving lines. Built for superior axial and radial strength, these paper tubes prevent bending under heavy fabric rolls and ensure smooth, snag-free winding.",
    applications: [
      "Woven and non-woven fabric roll winding",
      "Suiting, shirting, and denim fabric rolling",
      "Technical textile and geotextile roll carriers",
      "Knitted and dyed fabric storage and dispatch"
    ],
    features: [
      "High beam rigidity preventing mid-span deflection during roll handling",
      "Smooth, snag-free surface finish protecting delicate textile fibers",
      "Custom lengths up to 130 inches to suit wide-width textile looms",
      "Customizable printing and color identification options",
      "100% recyclable kraft board construction"
    ],
    industries: [
      "Textile Industry",
      "Spinning & Weaving Mills",
      "Technical Textiles",
      "Fabric Processing Units"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (Inner Diameter 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (up to 15 mm standard)" },
      { label: "Material", value: "Recycled kraft paper & virgin kraft liners" },
      { label: "Bonding", value: "High-strength dextrine powder gumming" }
    ],
    whyChooseUs: [
      "Decades of supply partnership with textile hubs across Maharashtra and Gujarat",
      "Strict in-house quality testing for straightness and crush strength",
      "In-house fleet of delivery vehicles ensuring timely mill deliveries"
    ],
    relatedSlugs: ["dty-poy-textile-yarn-cones", "paper-tubes", "paper-cores"]
  },
  {
    slug: "bopp-cello-tape-cores",
    name: "BOPP / Cello Tape Cores",
    shortName: "BOPP Tape Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/bopp-cello-tape-cores.jpg",
    tagline:
      "Precision White & Kraft Paper Cores for Self-Adhesive BOPP & Cello Tape Converters",
    overview:
      "P.R. Packaging manufactures specialized BOPP and cello tape tube cores crafted with pristine white paper or kraft liners. Designed to satisfy the exacting requirements of adhesive tape converters, our tape cores feature sharp custom interior brand printing and precise cut widths for smooth slitting and high-speed tape winding.",
    applications: [
      "BOPP self-adhesive packaging tape rolls",
      "Cello tape and stationery tape rolls",
      "Masking tape and specialty adhesive tape winding",
      "Custom branded industrial tape rolls"
    ],
    features: [
      "Custom internal core printing in any color as per customer brand requirement",
      "Available in smooth white paper finish or brown kraft finish",
      "Uniform wall thickness preventing deformation under tape winding tension",
      "Clean, dust-free precision cut edges for automatic tape slitting machines"
    ],
    industries: [
      "BOPP Tape Industry",
      "Adhesive Tape Converters",
      "Packaging Industry",
      "Stationery & Office Supplies"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Options", value: "1 inch to 130 inches (master logs or slit rings)" },
      { label: "Wall Thickness", value: "1 mm to 20 mm" },
      { label: "Paper Finish", value: "White paper, Virgin kraft liners, Recycled kraft" },
      { label: "Printing", value: "Custom interior/exterior brand printing in any color" }
    ],
    whyChooseUs: [
      "Specialist in tape core manufacturing with automated winding lines",
      "In-house printing tailored to customer brand guidelines",
      "48-hour order planning and execution"
    ],
    relatedSlugs: ["taco-tape", "stretch-film-paper-tubes", "paper-cores", "paper-tubes"]
  },
  {
    slug: "stretch-film-paper-tubes",
    name: "Stretch Film Cores",
    shortName: "Stretch Film Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/stretch-film-paper-tubes.jpg",
    tagline:
      "Heavy-Duty Paper Cores for Manual & Automatic Pallet Stretch Film Rolls",
    overview:
      "P.R. Packaging produces high-precision stretch film paper cores designed to withstand the continuous radial compression generated during cast and blown stretch wrap film production. Whether for manual hand-grade rolls or heavy machine-grade stretch film rolls, our cores deliver reliable crush resistance.",
    applications: [
      "Hand-grade pallet stretch film rolls",
      "Machine-grade high-tension stretch wrap rolls",
      "Cling film and flexible packaging film winding",
      "Industrial pallet wrapping film converters"
    ],
    features: [
      "High radial crush resistance engineered for tight film winding tension",
      "Accurate inner diameter calibration for dispensers and wrapping machines",
      "Clean, burr-free edges preventing film edge tears during unwinding",
      "100% recyclable kraft paper construction"
    ],
    industries: [
      "Stretch Film Industry",
      "Plastic Packaging Converters",
      "Warehousing & Logistics",
      "Industrial Packaging"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (up to 15 mm standard)" },
      { label: "Material", value: "Recycled kraft paper & virgin kraft liners" },
      { label: "Adhesive", value: "High-strength dextrine powder" }
    ],
    whyChooseUs: [
      "High dimensional uniformity tested with in-house quality machines",
      "Fast 48-hour order execution for bulk converter requirements",
      "Direct factory supply from Boisar MIDC"
    ],
    relatedSlugs: ["stretch-film", "bopp-cello-tape-cores", "bubble-wrap-cores", "pvc-roll-cores"]
  },
  {
    slug: "bubble-wrap-cores",
    name: "Bubble Wrap Cores",
    shortName: "Bubble Wrap Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/bubble-wrap-cores.jpg",
    tagline:
      "Rigid, Lightweight Paper Cores for Air Bubble Film & Protective Packaging Rolls",
    overview:
      "Air bubble protective packaging requires sturdy yet lightweight paper cores that keep wide, large-diameter bubble wrap rolls stable during winding, storage, and transport. P.R. Packaging manufactures bubble wrap cores offering optimal beam strength across lengths up to 130 inches.",
    applications: [
      "Air bubble film roll winding",
      "Protective cushioning and void-fill roll carriers",
      "EPE foam roll winding",
      "Wide-width protective packaging film converting"
    ],
    features: [
      "Optimal balance of lightweight construction and strong beam rigidity",
      "Available in long continuous lengths up to 130 inches",
      "Smooth outer surface preventing puncture of delicate air bubbles",
      "100% recyclable eco-friendly paperboard composition"
    ],
    industries: [
      "Bubble Wrap Industry",
      "Protective Packaging",
      "E-Commerce & Logistics",
      "Industrial Packaging"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm" },
      { label: "Material", value: "Recycled paper, virgin kraft liners & dextrine adhesive" }
    ],
    whyChooseUs: [
      "Custom lengths cut to match exact bubble film slitting widths",
      "Central warehouse at Bhiwandi for rapid regional distribution",
      "Consistent quality backed by 30+ years of manufacturing experience"
    ],
    relatedSlugs: ["air-bubble-roll", "stretch-film-paper-tubes", "corrugated-liners", "paper-tubes"]
  },
  {
    slug: "tissue-paper-cores",
    name: "Tissue Paper Cores",
    shortName: "Tissue Paper Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/tissue-paper-cores.jpg",
    tagline:
      "Eco-Friendly, Precision-Calibrated Paper Cores for Toilet Rolls & Kitchen Towels",
    overview:
      "Our tissue paper cores are manufactured specifically for high-speed tissue paper converting lines. With calibrated inner and outer diameters, smooth spiral seams, and clean-cut edges, they enable smooth winding and log-saw cutting for bathroom tissue, kitchen towels, and commercial wiper rolls.",
    applications: [
      "Toilet paper / bathroom tissue rolls",
      "Kitchen paper towel rolls",
      "Commercial hand towel and institutional wiper rolls",
      "Hygiene and consumer tissue converting"
    ],
    features: [
      "Clean, fray-free cutting performance on automatic log saws",
      "100% recyclable and biodegradable paper construction",
      "Uniform wall thickness and roundness for smooth dispensing",
      "Available in white paper or natural brown kraft finishes"
    ],
    industries: [
      "Tissue Converting Industry",
      "Hygiene & Consumer FMCG",
      "Hospitality Supplies",
      "Paper Converting"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 15 mm (thin-wall options for tissue)" },
      { label: "Paper Options", value: "Recycled kraft paper, Virgin kraft, White paper" }
    ],
    whyChooseUs: [
      "Automated winding ensuring consistent diameter tolerance",
      "Eco-friendly dextrine gumming safe for consumer paper products",
      "Reliable scheduled deliveries with our in-house transport fleet"
    ],
    relatedSlugs: ["paper-tubes", "cardboard-containers", "paper-cores"]
  },
  {
    slug: "foil-cores",
    name: "Aluminium Foil Cores",
    shortName: "Aluminium Foil Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/foil-cores.jpg",
    tagline:
      "Smooth-Finish Precision Paper Cores for Household & Industrial Aluminium Foil Rolls",
    overview:
      "Aluminium foil winding requires paper cores with exceptional surface smoothness and dimensional accuracy so that thin metallic foil layers wind evenly without surface impressions. P.R. Packaging manufactures aluminium foil cores using smooth kraft and white liners with tight concentricity tolerances.",
    applications: [
      "Household kitchen aluminium foil rolls",
      "Pharmaceutical blister aluminium foil winding",
      "Food service and catering foil rolls",
      "Industrial barrier laminate foil converting"
    ],
    features: [
      "Smooth exterior surface preventing telegraphing ridges on thin foil",
      "High radial strength supporting dense aluminium foil roll weights",
      "Clean, dust-free precision cut ends",
      "100% recyclable paperboard construction"
    ],
    industries: [
      "Aluminium Foil Industry",
      "Pharmaceutical Packaging",
      "Food & Beverage Packaging",
      "Flexible Packaging"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm" },
      { label: "Material", value: "Smooth virgin kraft liners, white paper & recycled paper" },
      { label: "Adhesive", value: "High-quality dextrine powder" }
    ],
    whyChooseUs: [
      "In-house quality inspection for surface smoothness and roundness",
      "Trusted by foil converters across Maharashtra and Western India",
      "48-hour order planning and execution"
    ],
    relatedSlugs: ["silver-foil-cores", "paper-cores", "bopp-cello-tape-cores", "pvc-roll-cores"]
  },
  {
    slug: "silver-foil-cores",
    name: "Silver Foil Cores",
    shortName: "Silver Foil Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/silver-foil-cores.jpg",
    tagline:
      "High-Precision Paper Cores for Silver Foil, Decorative Foil & Specialty Laminate Rolls",
    overview:
      "P.R. Packaging manufactures specialized silver foil cores designed for winding delicate silver foils, hot-stamping foils, confectionery wrapping foils, and decorative metallic laminates. Built with smooth outer plies and calibrated inner diameters, they ensure tension-stable winding and clean dispensing.",
    applications: [
      "Silver foil and confectionery wrapper roll winding",
      "Decorative metallic and hot-stamping foil rolls",
      "Food-grade silver pouch and wrapping foil rolls",
      "Specialty laminated barrier film rolls"
    ],
    features: [
      "Ridge-free smooth outer liner protecting delicate silver foil layers",
      "Precise cut lengths and calibrated inner diameters (0.5\" to 4\")",
      "High crush resistance for compact, high-density foil rolls",
      "Custom branding and color options available as per customer requirement"
    ],
    industries: [
      "Silver & Metallic Foil Industry",
      "Food & Confectionery Packaging",
      "Flexible & Decorative Converting",
      "Packaging Industry"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (Inner Diameter 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (up to 15 mm standard)" },
      { label: "Paper Options", value: "White paper, Virgin kraft liners, Recycled kraft" },
      { label: "Gumming", value: "High-quality dextrine powder" }
    ],
    whyChooseUs: [
      "Precision spiral winding for zero-defect metallic foil rolls",
      "Custom sizing and branding tailored to converter specifications",
      "Fast 48-hour turnaround from our Boisar MIDC facility"
    ],
    relatedSlugs: ["foil-cores", "paper-cores", "bopp-cello-tape-cores", "tissue-paper-cores"]
  },
  {
    slug: "pvc-roll-cores",
    name: "PVC Roll Cores",
    shortName: "PVC Roll Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/pvc-roll-cores.jpg",
    tagline:
      "Extra-Thick Wall Industrial Paper Cores for Heavy PVC, Vinyl & Plastic Rolls",
    overview:
      "Winding heavy PVC sheets, vinyl rolls, and thick polymer films requires exceptional core strength. P.R. Packaging manufactures heavy-duty PVC roll cores featuring multi-ply kraft construction and wall thicknesses up to 20 mm that prevent core crushing or sagging under heavy roll weights.",
    applications: [
      "Flexible PVC film and sheet roll winding",
      "Vinyl flooring and synthetic leather rolls",
      "Heavy plastic sheet and tarpaulin reeling",
      "Industrial polymer membrane rolls"
    ],
    features: [
      "Thick-wall construction up to 20 mm for heavy compressive loads",
      "High axial straightness across lengths up to 130 inches",
      "Calibrated inner diameter for secure mounting on heavy steel mandrels",
      "Bonded with high-strength dextrine powder for superior ply adhesion"
    ],
    industries: [
      "PVC Roll Industry",
      "Plastic Roll Industry",
      "Flooring & Vinyl Manufacturing",
      "Industrial Packaging"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (heavy-wall options up to 20 mm)" },
      { label: "Material", value: "Heavy-duty kraft paper & virgin kraft liners" },
      { label: "Adhesive", value: "High-quality dextrine powder" }
    ],
    whyChooseUs: [
      "Manufactured on heavy-duty spiral winding machinery in Boisar MIDC",
      "In-house quality testing machines verifying crush resistance",
      "Direct dispatch across India via our own fleet of vehicles"
    ],
    relatedSlugs: ["ldpe-hm-rolls", "paper-cores", "stretch-film-paper-tubes", "foil-cores"]
  },
  {
    slug: "incense-stick-tubes",
    name: "Incense Stick Tubes",
    shortName: "Incense Stick Tubes",
    category: "Paper Tubes & Cores",
    image: "/images/products/incense-stick-tubes.jpg",
    tagline:
      "Custom-Printed Cylindrical Paper Tubes for Agarbatti & Fragrance Stick Packaging",
    overview:
      "P.R. Packaging manufactures aesthetic cylindrical paper tubes for incense stick (agarbatti) packaging. Featuring custom multi-color exterior printing and sturdy spiral-wound paperboard walls, our incense stick tubes enhance retail shelf presence while protecting fragile fragrance sticks during transit.",
    applications: [
      "Agarbatti (incense stick) retail and export packaging",
      "Dhoop and herbal fragrance stick containers",
      "Aromatherapy and festive gift stick packaging",
      "Specialty cylindrical retail canisters"
    ],
    features: [
      "Custom printing in any color and brand artwork as per customer requirement",
      "Rigid paper tube walls preventing breakage of delicate incense sticks",
      "100% recyclable and eco-friendly paperboard construction",
      "Available in custom diameters and lengths to suit standard and jumbo sticks"
    ],
    industries: [
      "Incense Stick (Agarbatti) Industry",
      "Fragrance & Aromatherapy",
      "Consumer Retail Packaging",
      "Export Packaging"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches (custom cut lengths)" },
      { label: "Wall Thickness", value: "1 mm to 15 mm" },
      { label: "Outer Finish", value: "White paper, Kraft paper, Custom printed colors" }
    ],
    whyChooseUs: [
      "In-house custom color printing capabilities",
      "Eco-friendly sustainable packaging preferred by fragrance brands",
      "Fast 48-hour order planning and execution"
    ],
    relatedSlugs: ["cardboard-containers", "paper-tubes", "corrugated-boxes"]
  },
  {
    slug: "dty-poy-textile-yarn-cones",
    name: "DTY / POY Textile Yarn Cones",
    shortName: "DTY/POY Yarn Cones",
    category: "Paper Tubes & Cores",
    image: "/images/products/dty-poy-textile-yarn-cones.jpg",
    tagline:
      "Color-Coded Paper Tubes & Yarn Carriers for High-Speed DTY & POY Synthetic Spinning",
    overview:
      "Engineered for Drawn Textured Yarn (DTY) and Partially Oriented Yarn (POY) winding in the textile industry, these precision paper tubes and yarn cones feature color-coded outer surfaces for rapid yarn identification. Built with balanced geometry and smooth finishes, they perform reliably on high-speed spinning and texturizing machines.",
    applications: [
      "DTY (Drawn Textured Yarn) high-speed winding",
      "POY (Partially Oriented Yarn) spinning and winding",
      "Synthetic filament, polyester, and nylon yarn carriers",
      "Color-coded yarn lot segregation in textile mills"
    ],
    features: [
      "Custom printing and color-coding in any color as per customer requirement",
      "Smooth surface and edges to prevent filament snagging during unwinding",
      "High dimensional accuracy and concentricity for high-speed spindles",
      "Manufactured from high-strength kraft paper and dextrine adhesive"
    ],
    industries: [
      "Textile Industry",
      "Synthetic Yarn Spinners",
      "Polyester & Filament Mills",
      "Weaving & Knitting Units"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (ID 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (up to 15 mm standard)" },
      { label: "Color / Printing", value: "Any color & custom identification printing" }
    ],
    whyChooseUs: [
      "Trusted supplier to synthetic yarn and textile manufacturers since 1992",
      "In-house quality testing machines for dimensional precision",
      "Prompt delivery across textile industrial belts via our own fleet"
    ],
    relatedSlugs: ["textile-tubes", "paper-cores", "paper-tubes"]
  },
  {
    slug: "firecracker-tubes",
    name: "Firecracker Paper Tubes",
    shortName: "Firecracker Tubes",
    category: "Paper Tubes & Cores",
    image: "/images/products/firecracker-tubes.jpg",
    tagline:
      "High-Density Spiral-Wound Kraft Paper Tubes for Pyrotechnic & Firecracker Casings",
    overview:
      "Listed in P.R. Packaging's core product range, our firecracker paper tubes are dense, tightly wound cylindrical kraft paper tubes engineered for pyrotechnic shells and firecracker casings. Manufactured using multi-ply kraft paper and high-bond dextrine powder gumming, they provide uniform wall thickness, compact density, and 100% biodegradable safety.",
    applications: [
      "Aerial shell and pyrotechnic tube casings",
      "Cylindrical firecracker body tubes",
      "Sparkler and novelty firework packaging tubes",
      "Small-bore high-wall-thickness industrial sleeves"
    ],
    features: [
      "Tightly wound multi-ply construction with uniform wall thickness",
      "Bonded with natural dextrine powder adhesive",
      "100% biodegradable and eco-friendly paper composition",
      "Customizable inner diameter, length, and wall thickness from 1 mm to 20 mm"
    ],
    industries: [
      "Fireworks & Pyrotechnics",
      "Specialty Packaging",
      "Industrial Manufacturing"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (Inner Diameter 0.5\" to 4\")" },
      { label: "Length Range", value: "1 inch to 130 inches (custom cut lengths)" },
      { label: "Wall Thickness", value: "1 mm to 20 mm (up to 15 mm standard)" },
      { label: "Material", value: "Recycled kraft paper & virgin kraft liners" },
      { label: "Adhesive", value: "High-quality dextrine powder" }
    ],
    whyChooseUs: [
      "Consistent wall density and concentricity verified by in-house testing",
      "High-volume production capacity with 40+ skilled workers",
      "48-hour order planning and execution"
    ],
    relatedSlugs: ["paper-tubes", "incense-stick-tubes", "cardboard-containers"]
  },

  // ============================================================================
  // CORRUGATED PACKAGING & BOARD PRODUCTS (6 PRODUCTS)
  // ============================================================================
  {
    slug: "corrugated-sheets",
    name: "Corrugated Sheets",
    shortName: "Corrugated Sheets",
    category: "Corrugated Packaging",
    image: "/images/products/corrugated-sheets.jpg",
    tagline:
      "Sturdy Fluted Corrugated Cardboard Sheets & Layer Pads for Industrial Protection",
    overview:
      "P.R. Packaging manufactures durable corrugated sheets engineered for pallet layering, surface protection, divider pads, and heavy-duty industrial wrapping. Produced using high-grade kraft paper at our Boisar MIDC facility, our corrugated sheets absorb transit shocks and prevent product damage during stacking and shipping.",
    applications: [
      "Pallet layer separation pads and tier sheets",
      "Protective top and bottom box inserts",
      "Industrial surface and floor protection",
      "Heavy component wrapping and cushioning"
    ],
    features: [
      "High shock absorption and compression resistance",
      "In-house production capability for widths and sizes up to 52 inches",
      "Manufactured from 100% recyclable eco-friendly kraft paper",
      "Available in custom cut sheet dimensions as per client requirement"
    ],
    industries: [
      "Packaging Industry",
      "Warehousing & Logistics",
      "FMCG & Beverage",
      "Engineering & Manufacturing"
    ],
    specifications: [
      { label: "Size Capability", value: "In-house manufacturing for sizes up to 52 inches" },
      { label: "Format", value: "Flat cut corrugated sheets & pallet layer pads" },
      { label: "Material", value: "Recycled kraft paper & virgin kraft liners" },
      { label: "Recyclability", value: "100% recyclable & eco-friendly" }
    ],
    whyChooseUs: [
      "In-house manufacturing process ensuring consistent flute quality",
      "Custom sheet dimensions tailored to your pallet or carton footprint",
      "Rapid 48-hour order planning and dispatch"
    ],
    relatedSlugs: ["corrugated-liners", "corrugated-boxes", "mdf-board-putha", "sundry-board-putha"]
  },
  {
    slug: "corrugated-liners",
    name: "Corrugated Liners",
    shortName: "Corrugated Liners",
    category: "Corrugated Packaging",
    image: "/images/products/corrugated-liners.jpg",
    tagline:
      "Flexible Single-Face Corrugated Liner Rolls & Protective Wrapping Liners",
    overview:
      "Our corrugated liners (single-face corrugated rolls and kraft liner wraps) provide flexible, shock-absorbing cushioning that conforms easily around cylindrical, curved, or irregular industrial products. Manufactured in-house from sturdy kraft paper, they protect finished goods from scratches, dents, and transit impact.",
    applications: [
      "Wrapping metal pipes, rods, profiles, and engineering parts",
      "Cushioning furniture, glass, and fragile industrial items",
      "Inner carton lining and void-fill protection",
      "Surface protection during construction and interior projects"
    ],
    features: [
      "Flexible fluted structure that wraps smoothly around any shape",
      "Excellent cushioning against abrasion and impact during transport",
      "In-house production supporting widths up to 52 inches",
      "100% recyclable and biodegradable kraft paper construction"
    ],
    industries: [
      "Packaging Industry",
      "Engineering & Metal Works",
      "Furniture & Glassware",
      "Logistics & Moving"
    ],
    specifications: [
      { label: "Width / Size Capability", value: "Up to 52 inches in-house production" },
      { label: "Format", value: "Single-face corrugated liner rolls & custom wraps" },
      { label: "Paper Grade", value: "Kraft liner paper & recycled kraft" },
      { label: "Sustainability", value: "100% recyclable eco-friendly material" }
    ],
    whyChooseUs: [
      "Uniform fluting without tears or weak spots",
      "Direct factory supply from our Boisar MIDC facility",
      "Prompt delivery via our Bhiwandi warehouse and vehicle fleet"
    ],
    relatedSlugs: ["corrugated-sheets", "corrugated-boxes", "air-bubble-roll", "paper-tubes"]
  },
  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    shortName: "Corrugated Boxes",
    category: "Corrugated Packaging",
    image: "/images/products/corrugated-boxes.jpg",
    tagline:
      "Industrial Master Cartons & Heavy-Duty Shipping Boxes Manufactured In-House up to 52\"",
    overview:
      "P.R. Packaging operates a complete in-house manufacturing process for corrugated boxes for sizes up to 52 inches. Engineered to withstand warehouse stacking pressures and rigorous road transport, our corrugated cartons safeguard industrial, textile, and consumer products across domestic and export supply chains.",
    applications: [
      "Master shipping cartons for industrial and FMCG goods",
      "Packaging for paper tubes, yarn cones, and textile rolls",
      "Engineering, automotive, and machinery parts boxes",
      "E-commerce, logistics, and warehouse dispatch cartons"
    ],
    features: [
      "In-house manufacturing process for corrugated box sizes up to 52 inches",
      "Strong compression and bursting resistance for safe stacking",
      "Custom printing options for company logos and handling instructions",
      "100% recyclable, crafted from high-grade kraft paper and liners"
    ],
    industries: [
      "Packaging Industry",
      "Textiles & Apparel",
      "Industrial Manufacturing",
      "FMCG & Consumer Goods",
      "Logistics & Warehousing"
    ],
    specifications: [
      { label: "Size Capability", value: "In-house manufacturing process for sizes up to 52\"" },
      { label: "Material", value: "High-strength kraft paper & virgin kraft liners" },
      { label: "Customization", value: "Custom box dimensions & brand printing" },
      { label: "Order Turnaround", value: "Order planned and executed in 48 hours" }
    ],
    specNotes:
      "Verified from P.R. Packaging company profile: Complete in-house manufacturing process for corrugated boxes for sizes up to 52\".",
    whyChooseUs: [
      "One-stop manufacturer for both paper tubes/cores and outer corrugated boxes",
      "In-house quality testing ensuring dependable carton strength",
      "Own fleet of delivery vehicles for damage-free doorstep delivery"
    ],
    relatedSlugs: ["corrugated-sheets", "corrugated-liners", "cardboard-containers", "taco-tape"]
  },
  {
    slug: "cardboard-containers",
    name: "Cardboard Containers",
    shortName: "Cardboard Containers",
    category: "Corrugated Packaging",
    image: "/images/products/cardboard-containers.jpg",
    tagline:
      "Eco-Friendly Rigid Cylindrical Paperboard Containers with Telescopic Lids",
    overview:
      "Our cardboard containers are rigid composite paper canisters engineered for protective and retail-ready cylindrical packaging. Constructed from durable spiral-wound paperboard cores with snug-fitting paper lids and custom outer finishes, they provide a sustainable, plastic-free packaging solution.",
    applications: [
      "Incense sticks, fragrance, and wellness product canisters",
      "Dry foods, tea, coffee, and spice cylindrical containers",
      "Cosmetics, giftware, and promotional retail packaging",
      "Protective cylindrical containers for precision components"
    ],
    features: [
      "Rigid 2-piece and 3-piece telescoping cylinder construction",
      "Custom printing in any color as per customer requirement",
      "100% recyclable and eco-friendly cardboard construction",
      "Customizable diameter, height, and wall thickness"
    ],
    industries: [
      "Consumer Retail Packaging",
      "Incense & Fragrance",
      "Food & Confectionery",
      "Specialty Industrial Packaging"
    ],
    specifications: [
      { label: "Diameter Range", value: "14 mm – 100 mm (custom inner diameters)" },
      { label: "Length / Height", value: "Custom cut heights from 1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 15 mm" },
      { label: "Finish", value: "Kraft natural, White paper, or Custom printed wrap" }
    ],
    whyChooseUs: [
      "Precision lid fit and smooth seam alignment",
      "Over 40+ skilled workers in our Boisar MIDC manufacturing unit",
      "Fast 48-hour order planning and execution"
    ],
    relatedSlugs: ["incense-stick-tubes", "paper-tubes", "corrugated-boxes"]
  },
  {
    slug: "mdf-board-putha",
    name: "MDF Board (Putha)",
    shortName: "MDF Board (Putha)",
    category: "Corrugated Packaging",
    image: "/images/products/mdf-board-putha.jpg",
    tagline:
      "Rigid Medium-Density Fiberboard (Putha) Sheets for Textile Winding & Industrial Backing",
    overview:
      "MDF Board (Putha) is an engineered wood-fiber board formed by breaking down hardwood or softwood residuals into fine wood fibers, combining them with wax and a resin binder, and forming flat, dense panels under high temperature and pressure. Denser and stronger than particle board, MDF Putha provides a smooth, rigid, knot-free substrate widely used for fabric roll winding boards, packaging reinforcement, and industrial backing.",
    applications: [
      "Suiting, shirting, and saree fabric flat-folding winding boards (Putha)",
      "Heavy-duty pallet top/bottom reinforcement boards",
      "Rigid backing boards for stationery, pads, and industrial packaging",
      "Protective divider panels during transport and storage"
    ],
    features: [
      "Engineered from fine wood fibers bonded under high temperature and pressure",
      "Generally denser and more uniform than standard plywood or particle board",
      "Smooth, flat, splinter-free surface that protects delicate fabrics and goods",
      "High dimensional stability and rigid load-bearing support"
    ],
    industries: [
      "Textile & Garment Industry",
      "Packaging & Converting",
      "Furniture & Paneling",
      "Industrial Logistics"
    ],
    specifications: [
      { label: "Product Type", value: "Engineered Medium-Density Fiberboard (Putha)" },
      { label: "Composition", value: "Hardwood/softwood fibers with wax & resin binder" },
      { label: "Process", value: "High-temperature & high-pressure flat panel pressing" },
      { label: "Surface", value: "Smooth, uniform, high-density flat board" }
    ],
    specNotes:
      "Verified from client product documentation: Engineered wood product made by breaking down hardwood or softwood residuals into wood fibres, combined with wax and a resin binder under high temperature and pressure.",
    whyChooseUs: [
      "Consistent board density and smooth edge finishing",
      "Reliable bulk supply alongside paper tubes and corrugated boxes",
      "Fast dispatch from Boisar MIDC and Bhiwandi warehouse"
    ],
    relatedSlugs: ["sundry-board-putha", "corrugated-sheets", "textile-tubes", "corrugated-boxes"]
  },
  {
    slug: "sundry-board-putha",
    name: "Sundry Board (Putha)",
    shortName: "Sundry Board (Putha)",
    category: "Corrugated Packaging",
    image: "/images/products/sundry-board-putha.jpg",
    tagline:
      "Eco-Friendly Recycled Greyboard & Sundry Paperboard Sheets (Putha) for Packaging & Textiles",
    overview:
      "Sundry Board (Putha) is a rigid, multi-purpose grey paperboard manufactured from recycled paper pulp. Widely used across the Indian textile, bookbinding, and packaging industries, Sundry Board Putha serves as an economical, sturdy stiffener and winding board for fabric bolts, garments, rigid boxes, and industrial partitioning.",
    applications: [
      "Textile fabric bolt winding boards (Putha) and garment stiffeners",
      "Rigid box making, sweet boxes, and shoe box substrates",
      "Bookbinding covers, stationery pads, and file boards",
      "Protective interleaving and packaging support pads"
    ],
    features: [
      "Sturdy multi-layered paperboard construction with good bending stiffness",
      "100% recyclable and eco-friendly recycled paperboard material",
      "Clean, flat sheets suitable for die-cutting, creasing, and lamination",
      "Cost-effective structural support for textile and retail packaging"
    ],
    industries: [
      "Textile & Apparel Industry",
      "Rigid Box & Printing Industry",
      "Stationery & Bookbinding",
      "General Packaging"
    ],
    specifications: [
      { label: "Product Type", value: "Industrial Sundry Paperboard / Greyboard (Putha)" },
      { label: "Material", value: "100% recycled compressed paperboard pulp" },
      { label: "Format", value: "Flat cut sheets in customizable sizes" },
      { label: "Application", value: "Fabric winding (Putha), box stiffening & backing" }
    ],
    whyChooseUs: [
      "Complete packaging supply alongside textile tubes and corrugated cartons",
      "Consistent sheet flatness and moisture control",
      "Prompt delivery across Maharashtra and Western India"
    ],
    relatedSlugs: ["mdf-board-putha", "corrugated-sheets", "textile-tubes", "cardboard-containers"]
  },

  // ============================================================================
  // OTHER PACKAGING PRODUCTS (7 PRODUCTS FROM CLIENT PDF)
  // ============================================================================
  {
    slug: "air-bubble-roll",
    name: "Air Bubble Roll",
    shortName: "Air Bubble Roll",
    category: "Other Packaging Products",
    image: "/images/products/air-bubble-roll.jpg",
    tagline:
      "Pliable Transparent LDPE Air Bubble Cushioning Film Rolls for Fragile Goods Protection",
    overview:
      "Air Bubble Roll (bubble wrap) is a pliable transparent plastic material used for packing fragile items. Regularly spaced, protruding air-filled hemispheres (bubbles) provide reliable cushioning and shock absorption for delicate and valuable industrial or consumer goods during storage, handling, and transit.",
    applications: [
      "Wrapping fragile glass, ceramics, and electronic components",
      "Surface protection for painted, polished, or machined metal parts",
      "Void-fill cushioning inside corrugated shipping boxes",
      "E-commerce, furniture, and industrial transit protection"
    ],
    features: [
      "Regularly spaced air-filled hemispheres providing uniform impact cushioning",
      "Lightweight, pliable transparent film that conforms around any product shape",
      "Resistant to moisture, dust, and surface abrasion",
      "Wound on sturdy paper cores for easy roll dispensing and cutting"
    ],
    industries: [
      "Packaging & Logistics",
      "Electronics & Appliances",
      "Glassware & Furniture",
      "E-Commerce & Industrial Manufacturing"
    ],
    specifications: [
      { label: "Product Type", value: "Pliable Transparent Air Bubble Cushioning Roll" },
      { label: "Structure", value: "Regularly spaced protruding air-filled hemispheres (bubbles)" },
      { label: "Core Support", value: "Wound on P.R. Packaging rigid paper cores" },
      { label: "Primary Use", value: "Cushioning & surface protection for fragile items" }
    ],
    specNotes:
      "Verified from client product documentation: Pliable transparent plastic material with regularly spaced, protruding air-filled hemispheres (bubbles) providing cushioning for fragile items.",
    whyChooseUs: [
      "Supplied as part of P.R. Packaging's complete protective packaging range",
      "Consistent air retention and durable polyethylene film quality",
      "Ready stock and fast 48-hour dispatch from Boisar & Bhiwandi"
    ],
    relatedSlugs: ["bubble-wrap-cores", "stretch-film", "corrugated-liners", "corrugated-boxes"]
  },
  {
    slug: "ldpe-hm-rolls",
    name: "LDPE Rolls & HM Roll (Sheets of Plastic Roll)",
    shortName: "LDPE & HM Plastic Rolls",
    category: "Other Packaging Products",
    image: "/images/products/ldpe-hm-rolls.jpg",
    tagline:
      "Low-Density Polyethylene (LDPE) & HM Plastic Sheet Rolls for Moisture-Proof Industrial Packaging",
    overview:
      "LDPE Rolls (Sheets of Plastic Roll) and HM Rolls are thermoplastic polyethylene film rolls made from ethylene monomer. Flexible, tough, and moisture-resistant, these plastic sheet rolls are widely used for industrial wrapping, liner bags, dust and waterproof covering, and primary protective packaging across manufacturing sectors.",
    applications: [
      "Waterproof and dustproof wrapping for industrial rolls and pallets",
      "Inner liner sheets for corrugated boxes and bulk containers",
      "Textile fabric roll and yarn cone moisture barrier wrapping",
      "General industrial covering, pouches, and sheet packaging"
    ],
    features: [
      "Manufactured from flexible, high-clarity Low-Density Polyethylene (LDPE) & HM grades",
      "Excellent barrier against moisture, humidity, and warehouse dust",
      "High tear and puncture resistance for industrial handling",
      "Evenly wound on precision paper cores for smooth unwinding"
    ],
    industries: [
      "Plastic & Packaging Industry",
      "Textile & Yarn Mills",
      "Engineering & Chemicals",
      "Warehousing & Logistics"
    ],
    specifications: [
      { label: "Material Type", value: "Low-Density Polyethylene (LDPE) & HM Thermoplastic Film" },
      { label: "Format", value: "Continuous Sheets of Plastic Roll on Paper Cores" },
      { label: "Properties", value: "Flexible, moisture-resistant, tough barrier film" },
      { label: "Application", value: "Industrial wrapping, box lining & roll protection" }
    ],
    specNotes:
      "Verified from client product documentation: LDPE Rolls (Sheets of Plastic Roll) & HM Roll — thermoplastic made from the monomer ethylene.",
    whyChooseUs: [
      "Complete one-stop availability of plastic rolls, paper cores, and outer cartons",
      "Uniform film gauge wound on our own precision paper cores",
      "Prompt delivery via our in-house logistics fleet"
    ],
    relatedSlugs: ["plastic-bag", "stretch-film", "pvc-roll-cores", "paper-cores"]
  },
  {
    slug: "pp-woven-fabric-bardan",
    name: "PP Woven Fabric (Bardan)",
    shortName: "PP Woven Fabric (Bardan)",
    category: "Other Packaging Products",
    image: "/images/products/pp-woven-fabric-bardan.jpg",
    tagline:
      "High-Strength Polypropylene (PP) Woven Fabric Rolls & Bardan for Heavy-Duty Bale & Sack Wrapping",
    overview:
      "PP Woven Fabric (Bardan) is produced by weaving extruded polypropylene tapes in two perpendicular directions (warp and weft), creating a remarkably strong, lightweight, and tear-resistant industrial fabric. Ideal for heavy bale wrapping, textile roll outer protection, and bulk sack packaging, PP woven Bardan safeguards goods during long-distance transport.",
    applications: [
      "Outer protective wrapping (Bardan) for textile fabric rolls and yarn cartons",
      "Heavy-duty industrial bale wrapping and export bundling",
      "Bulk packaging sacks for agricultural, chemical, and industrial materials",
      "Reinforced outer covering for paper tubes and industrial goods"
    ],
    features: [
      "Two-directional woven polypropylene tapes offering superior tensile strength",
      "Lightweight yet highly resistant to tearing, puncturing, and rough handling",
      "Protects cargo from dirt, abrasion, and weather exposure during transit",
      "Supplied in convenient continuous rolls wound on heavy-duty paper cores"
    ],
    industries: [
      "Textile & Spinning Industry",
      "Logistics & Export Packaging",
      "Agriculture & Bulk Commodities",
      "Industrial Manufacturing"
    ],
    specifications: [
      { label: "Product Name", value: "PP Woven Fabric (Bardan)" },
      { label: "Material", value: "Extruded Polypropylene (PP) tapes woven in two directions" },
      { label: "Format", value: "Tubular or flat woven fabric rolls / wrapping sheets" },
      { label: "Key Attribute", value: "High tensile strength, lightweight & tear-resistant" }
    ],
    specNotes:
      "Verified from client product documentation: PP Woven Fabric (Bardan) contains extruded polypropylene tapes woven in two directions, creating a strong and light material.",
    whyChooseUs: [
      "Heavy-duty weave quality trusted by textile and industrial exporters",
      "Available alongside paper tubes, cores, and strapping accessories",
      "Fast dispatch from Boisar MIDC and Bhiwandi hub"
    ],
    relatedSlugs: ["plastic-bag", "metal-clip", "textile-tubes", "corrugated-boxes"]
  },
  {
    slug: "taco-tape",
    name: "Taco Tape (Self-Adhesive Packaging Tape)",
    shortName: "Taco Tape",
    category: "Other Packaging Products",
    image: "/images/products/taco-tape.jpg",
    tagline:
      "Pressure-Sensitive Self-Adhesive Packaging & Sealing Tape Rolls",
    overview:
      "Taco Tape is a pressure-sensitive adhesive tape engineered by bonding a durable backing film with a high-tack adhesive coating. Designed for reliable carton sealing, bundling, and industrial fastening, it adheres instantly under light hand or dispenser pressure without requiring heat, water, or solvent activation.",
    applications: [
      "Corrugated box and master carton sealing",
      "Bundling paper tubes, plastic rolls, and industrial packages",
      "Warehouse inventory color-coding and package reinforcement",
      "General industrial splicing, holding, and sealing tasks"
    ],
    features: [
      "Pressure-sensitive adhesive bonding instantly upon contact",
      "No solvent, water, or heat required for activation",
      "High tensile backing film resisting splitting or edge tearing",
      "Wound on precision P.R. Packaging paper tape cores"
    ],
    industries: [
      "Packaging & Warehousing",
      "E-Commerce & Logistics",
      "FMCG & Manufacturing",
      "General Industrial Use"
    ],
    specifications: [
      { label: "Product Name", value: "Taco Tape (Self-Adhesive Tape)" },
      { label: "Adhesive Type", value: "Pressure-sensitive adhesive (PSA) coated on backing film" },
      { label: "Core", value: "Precision spiral-wound paper tape core" },
      { label: "Application", value: "Carton sealing, bundling & industrial packaging" }
    ],
    specNotes:
      "Verified from client product documentation: Combination of a material and an adhesive film used to bond or join objects together with a pressure-sensitive adhesive that adheres with light pressure.",
    whyChooseUs: [
      "Strong, long-lasting adhesion on kraft and corrugated surfaces",
      "Convenient single-source supply with corrugated boxes and stretch film",
      "48-hour order execution and delivery"
    ],
    relatedSlugs: ["bopp-cello-tape-cores", "corrugated-boxes", "stretch-film", "air-bubble-roll"]
  },
  {
    slug: "stretch-film",
    name: "Stretch Film Rolls",
    shortName: "Stretch Film",
    category: "Other Packaging Products",
    image: "/images/products/stretch-film.jpg",
    tagline:
      "High-Stretchability LLDPE Plastic Film Rolls for Pallet Unitizing & Load Stability",
    overview:
      "Stretch Film (stretch wrap) is a highly stretchable plastic film made from Linear Low-Density Polyethylene (LLDPE) that is wrapped around items to keep them tightly bound. Its elastic recovery keeps pallet loads, cartons, and industrial rolls securely unitized while protecting them from dust, moisture, and transit shifting.",
    applications: [
      "Pallet unitizing and load stabilization for road and export transit",
      "Wrapping bundles of paper tubes, yarn cones, and corrugated boxes",
      "Protecting warehouse inventory against dust, moisture, and pilferage",
      "Manual hand wrapping and automated pallet stretch wrapping"
    ],
    features: [
      "Manufactured from Linear Low-Density Polyethylene (LLDPE) with high elastic recovery",
      "Superior cling performance keeping loads tightly bound without adhesive residue",
      "High puncture and tear resistance around sharp pallet corners",
      "Wound on heavy-duty zero-crush P.R. Packaging stretch film paper cores"
    ],
    industries: [
      "Warehousing & Logistics",
      "Packaging & Manufacturing",
      "Textiles & Pharmaceuticals",
      "FMCG & Export Units"
    ],
    specifications: [
      { label: "Product Name", value: "Stretch Film / Stretch Wrap Roll" },
      { label: "Material", value: "Linear Low-Density Polyethylene (LLDPE)" },
      { label: "Key Property", value: "High stretchability & elastic recovery for tight load binding" },
      { label: "Core Support", value: "Heavy-duty P.R. Packaging paper core" }
    ],
    specNotes:
      "Verified from client product documentation: Highly stretchable plastic film commonly made from Linear Low-Density Polyethylene (LLDPE) wrapped around items so elastic recovery keeps them tightly bound.",
    whyChooseUs: [
      "Wound on our own precision high-strength paper cores for smooth dispensing",
      "Complete pallet packaging solution alongside corrugated boxes and tapes",
      "Rapid delivery from Boisar MIDC and Bhiwandi warehouse"
    ],
    relatedSlugs: ["stretch-film-paper-tubes", "air-bubble-roll", "ldpe-hm-rolls", "taco-tape"]
  },
  {
    slug: "plastic-bag",
    name: "Industrial Plastic Bags",
    shortName: "Plastic Bags",
    category: "Other Packaging Products",
    image: "/images/products/plastic-bag.jpg",
    tagline:
      "Heavy-Duty Polyethylene Packaging Bags & Liners for Industrial Storage & Transit",
    overview:
      "Included in P.R. Packaging's packaging materials catalog, our Industrial Plastic Bags provide clean, moisture-proof containment for manufactured components, paper tubes, yarn cones, and bulk industrial products. Crafted from durable polyethylene film, they shield goods from humidity, dust, and handling contamination.",
    applications: [
      "Protective outer bagging for paper tubes, cores, and textile cones",
      "Inner moisture-barrier liners for corrugated boxes and PP woven sacks",
      "Industrial component, hardware, and spare parts packaging",
      "Dust-free storage and transit bagging in manufacturing units"
    ],
    features: [
      "Strong bottom and side heat seals preventing seam splitting under load",
      "Excellent protection against moisture, monsoon humidity, and warehouse dust",
      "Available in transparent and tinted polyethylene grades",
      "100% recyclable thermoplastic material"
    ],
    industries: [
      "Packaging & Manufacturing",
      "Textiles & Spinning",
      "Engineering & Hardware",
      "Logistics & Warehousing"
    ],
    specifications: [
      { label: "Product Name", value: "Industrial Plastic Bag / Poly Liner" },
      { label: "Material", value: "High-strength Polyethylene (LDPE / HM / HDPE)" },
      { label: "Protection", value: "Moisture-proof, dust-proof & tear-resistant" },
      { label: "Application", value: "Industrial product bagging & carton inner lining" }
    ],
    whyChooseUs: [
      "One-stop sourcing for tubes, boxes, and protective poly bags",
      "Reliable seal integrity for heavy industrial items",
      "Fast 48-hour dispatch across Maharashtra and India"
    ],
    relatedSlugs: ["ldpe-hm-rolls", "pp-woven-fabric-bardan", "stretch-film", "corrugated-boxes"]
  },
  {
    slug: "metal-clip",
    name: "Metal Clips (Packaging Strapping Clips)",
    shortName: "Metal Clips",
    category: "Other Packaging Products",
    image: "/images/products/metal-clip.jpg",
    tagline:
      "Galvanized Steel Strapping Seals & Metal Packaging Clips for Heavy-Duty Box & Bale Securing",
    overview:
      "Featured in P.R. Packaging's industrial packaging catalog, our Metal Clips (strapping seals) are heavy-duty metal fasteners used to lock plastic (PP/PET) or steel strapping bands securely around corrugated boxes, textile bales, and palletized loads. Engineered with gripped inner surfaces, they maintain high joint efficiency during rigorous transport.",
    applications: [
      "Securing PP and PET strapping bands around corrugated master cartons",
      "Heavy-duty bale strapping in textile andPP woven Bardan packaging",
      "Pallet unitizing and bundle fastening for paper tubes and industrial goods",
      "Export crate and heavy machinery package reinforcement"
    ],
    features: [
      "Formed from high-tensile corrosion-resistant metal sheet",
      "Textured/serrated grip design preventing strap slippage under tension",
      "Compatible with standard manual and pneumatic strapping sealers",
      "Ensures tamper-evident, high-strength closure for heavy shipments"
    ],
    industries: [
      "Packaging & Logistics",
      "Textiles & Bale Pressing",
      "Engineering & Heavy Dispatch",
      "Warehousing & Export"
    ],
    specifications: [
      { label: "Product Name", value: "Metal Clip (Packaging Strapping Seal)" },
      { label: "Material", value: "High-strength galvanized / cold-rolled steel" },
      { label: "Compatibility", value: "Standard PP / PET packaging strapping bands" },
      { label: "Application", value: "Heavy-duty carton, bale & pallet strapping closure" }
    ],
    whyChooseUs: [
      "Complete end-of-line packaging consumables from a single trusted vendor",
      "Consistent metal gauge for effortless crimping and maximum holding power",
      "Immediate availability from our Boisar and Bhiwandi facilities"
    ],
    relatedSlugs: ["pp-woven-fabric-bardan", "corrugated-boxes", "taco-tape", "stretch-film"]
  }
];

export const PRODUCT_CATEGORIES = [
  "All Products",
  "Paper Tubes & Cores",
  "Corrugated Packaging",
  "Other Packaging Products"
] as const;
