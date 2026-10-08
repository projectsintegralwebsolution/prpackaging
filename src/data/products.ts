export interface Product {
  slug: string;
  name: string;
  shortName: string;
  category: "Paper Tubes & Cores" | "Corrugated Packaging" | "Specialty Tubes & Containers";
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
  {
    slug: "paper-tubes",
    name: "Paper Tubes",
    shortName: "Paper Tubes",
    category: "Paper Tubes & Cores",
    image: "/images/products/paper-tubes.jpg",
    tagline: "Precision-Engineered Paper Tubes for Industrial, Construction & Retail Packaging",
    overview:
      "P.R. Packaging manufactures high-quality paper tubes engineered for versatile applications ranging from heavy-duty industrial shipping to aesthetic retail packaging. Built using high-grade recycled paper, virgin kraft liners, and premium dextrine gumming, our paper tubes deliver superior radial strength, dimensional precision, and 100% recyclable sustainability.",
    applications: [
      "Industrial shipping and mailing containers",
      "Construction forming and void filing",
      "Retail cylindrical product packaging",
      "Protective roll storage and transport",
      "Textile and yarn carrier cores",
      "Custom industrial packaging sleeves"
    ],
    features: [
      "Custom sizes tailored to exact inner diameter, length, and wall thickness",
      "High crush and radial resistance to protect inner contents",
      "100% recyclable, crafted from eco-friendly raw materials",
      "Precision cut ends for seamless integration into automated machinery",
      "Smooth finish with custom outer printing options in any color",
      "Dextrine powder bonding ensuring high bond strength and structural rigidity"
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
      { label: "Paper Options", value: "Kraft paper, Virgin kraft liners, White paper, Custom colors" },
      { label: "Gumming / Adhesive", value: "High-quality dextrine powder" },
      { label: "Printing", value: "Custom branding & multi-color printing as per requirement" },
      { label: "Dispatch / Shipping", value: "Order planned and executed in 48 hours across India" }
    ],
    specNotes:
      "Specifications can be customized to your application requirements. Note: Client specifications note standard tube options up to 15 mm wall thickness, with production capabilities spanning 1 mm to 20 mm.",
    whyChooseUs: [
      "Established manufacturing expertise since 1992",
      "Over 40+ skilled workers managing our Boisar MIDC production unit",
      "In-house quality testing machines verifying ring crush and wall tolerance",
      "Direct shipment across India with our dedicated in-house vehicle fleet"
    ],
    relatedSlugs: ["paper-cores", "textile-tubes", "bopp-cello-tape-cores", "corrugated-boxes"]
  },
  {
    slug: "paper-cores",
    name: "Industrial Paper Cores",
    shortName: "Paper Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/paper-cores.jpg",
    tagline: "Heavy-Duty Paper Cores Engineered for High-Speed Winding & Reeling",
    overview:
      "Our industrial paper cores are specially designed for high-speed winding machines across paper, film, foil, and textile industries. Manufactured with tightly controlled dimensional tolerances and high dynamic balance, they resist radial crush under extreme winding tensions without deforming.",
    applications: [
      "Plastic film and flexible packaging winding",
      "Paper mill converting and slitter rewinder cores",
      "Metals, aluminium and silver foil reeling",
      "Textile fabric and yarn winding",
      "Self-adhesive label roll cores"
    ],
    features: [
      "Engineered high radial crush strength to withstand high-tension winding",
      "Smooth outer surface ensuring uniform roll start-up without creases",
      "Exact inner diameter calibration for secure chuck engagement",
      "Consistent moisture content preventing warping during storage",
      "Produced on automated high-speed spiral winding machinery"
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
      { label: "Inner Diameter (ID)", value: "0.5 inch – 4 inches" },
      { label: "Length Range", value: "1 inch to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 20 mm" },
      { label: "Raw Material", value: "High-grade recycled kraft paper & virgin liners" },
      { label: "Adhesive Type", value: "High-strength dextrine formulation" },
      { label: "End Cut", value: "Precision burr-free square cut" }
    ],
    whyChooseUs: [
      "Over 30 years of specialized winding core manufacturing experience",
      "Strict in-house concentricity and crush testing",
      "Strategic Boisar MIDC plant offering swift dispatch via Mumbai transit corridor"
    ],
    relatedSlugs: ["paper-tubes", "pvc-roll-cores", "foil-cores", "stretch-film-paper-tubes"]
  },
  {
    slug: "bopp-cello-tape-cores",
    name: "BOPP / Cello Tape Tube Cores",
    shortName: "BOPP Tape Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/bopp-cello-tape-cores.jpg",
    tagline: "Precision White & Kraft Paper Cores for Self-Adhesive Tape Converters",
    overview:
      "P.R. Packaging manufactures specialized BOPP and cello tape tube cores crafted with pristine white or kraft outer liners. Designed to satisfy the exacting requirements of adhesive tape manufacturers, our tape cores feature sharp interior brand printing and precise cut widths to ensure smooth slitting and winding.",
    applications: [
      "BOPP self-adhesive tape rolls",
      "Cello tape and stationery tapes",
      "Masking tape and foam tape winding",
      "Industrial double-sided tape rolls"
    ],
    features: [
      "Custom internal core printing with customer brand logo and pattern",
      "Pristine white paper finish or standard brown kraft finish",
      "Exact wall thickness preventing deformation under tape winding tension",
      "Dust-free precision cut edges suitable for automatic tape slitting machines"
    ],
    industries: [
      "BOPP Tape Industry",
      "Packaging Converting",
      "Stationery & Office Supplies",
      "Logistics Packaging"
    ],
    specifications: [
      { label: "Standard ID", value: "1 inch (25 mm), 3 inch (76 mm) & custom sizes" },
      { label: "Diameter Range", value: "14 mm to 100 mm" },
      { label: "Cut Lengths", value: "12 mm to 130 inches (slit rings or master logs)" },
      { label: "Wall Thickness", value: "1.5 mm to 10 mm" },
      { label: "Inside Printing", value: "Multi-color custom brand logos available" },
      { label: "Inner Liner", value: "Smooth white or kraft paper" }
    ],
    whyChooseUs: [
      "Specialist in tape core manufacturing with high-speed automated winding",
      "In-house printing capabilities tailored to client branding guidelines",
      "Prompt delivery in 48 hours for regular volume runs"
    ],
    relatedSlugs: ["stretch-film-paper-tubes", "bubble-wrap-cores", "paper-tubes"]
  },
  {
    slug: "textile-tubes",
    name: "Textile Tubes",
    shortName: "Textile Tubes",
    category: "Paper Tubes & Cores",
    image: "/images/products/textile-tubes.jpg",
    tagline: "High-Strength Paper Tubes for Fabric Winding, Spinning & Weaving Mills",
    overview:
      "Our textile paper tubes are engineered to meet the demanding requirements of fabric rolling, textile processing, and continuous winding lines. Built for superior axial and radial strength, these tubes prevent bending under the weight of heavy fabric rolls and ensure snag-free fabric winding.",
    applications: [
      "Woven and non-woven fabric roll winding",
      "Denim, suiting and shirting fabric winding",
      "Geotextile and technical textile rolls",
      "Knitted fabric storage and dispatch"
    ],
    features: [
      "High beam rigidity preventing mid-span deflection during transit",
      "Smooth, snag-free surface finish protecting delicate fibers",
      "Resistant to humid storage conditions typical in dyeing and processing mills",
      "Available in continuous lengths up to 130 inches"
    ],
    industries: [
      "Textile Industry",
      "Spinning & Weaving Mills",
      "Technical Textiles",
      "Fabric Processing Units"
    ],
    specifications: [
      { label: "Diameter Sizes", value: "Inner diameter 0.5\" to 4\" (15 mm – 100 mm)" },
      { label: "Length", value: "Up to 130 inches" },
      { label: "Wall Thickness", value: "2 mm to 15 mm" },
      { label: "Paper Type", value: "Heavy-duty kraft paper & virgin liners" },
      { label: "End Finish", value: "Smooth square cut, notched or rounded" }
    ],
    whyChooseUs: [
      "Decades of partnership with leading textile hubs across Maharashtra and Gujarat",
      "Rigid quality control for concentricity and straightness",
      "In-house logistics ensuring uninterrupted production runs for clients"
    ],
    relatedSlugs: ["dty-poy-textile-yarn-cones", "paper-tubes", "paper-cores"]
  },
  {
    slug: "stretch-film-paper-tubes",
    name: "Stretch Film Paper Tubes",
    shortName: "Stretch Film Tubes",
    category: "Paper Tubes & Cores",
    image: "/images/products/stretch-film-paper-tubes.jpg",
    tagline: "Heavy-Duty Cores for Manual & Automatic Pallet Stretch Film Rolls",
    overview:
      "P.R. Packaging produces high-precision stretch film cores designed to withstand the intense continuous radial compression created during cast and blown stretch wrap film production. Whether for hand-roll stretch film or heavy machine rolls, our cores deliver zero collapse performance.",
    applications: [
      "Hand stretch film / manual pallet wrap rolls",
      "Machine-grade high-yield stretch film rolls",
      "Pre-stretch film and cling wrap converters",
      "Agricultural stretch film packaging"
    ],
    features: [
      "Engineered for zero-crush performance under continuous film tension",
      "Standardized 2-inch and 3-inch inner diameters for manual dispensers and automated wrappers",
      "Clean, dust-free edges preventing film edge tears during winding and unwinding",
      "Manufactured with eco-friendly recycled kraft paper"
    ],
    industries: [
      "Stretch Film Industry",
      "Plastic Packaging Converters",
      "Warehousing & Logistics",
      "Industrial Packaging"
    ],
    specifications: [
      { label: "Inner Diameter", value: "Standard 2\" (50 mm), 3\" (76 mm) & custom" },
      { label: "Overall Diameter", value: "14 mm to 100 mm" },
      { label: "Lengths", value: "100 mm to 130 inches" },
      { label: "Wall Thickness", value: "2 mm to 12 mm" },
      { label: "Compression Rating", value: "Tested for high radial winding pressure" }
    ],
    whyChooseUs: [
      "High dimensional uniformity tested batch by batch",
      "Rapid turnaround time within 48 hours for bulk converter orders",
      "Competitive manufacturer-direct pricing"
    ],
    relatedSlugs: ["bopp-cello-tape-cores", "bubble-wrap-cores", "pvc-roll-cores"]
  },
  {
    slug: "bubble-wrap-cores",
    name: "Bubble Wrap Cores",
    shortName: "Bubble Wrap Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/bubble-wrap-cores.jpg",
    tagline: "Rigid, Lightweight Paper Cores for Air Bubble Film Converters",
    overview:
      "Air bubble protective packaging requires sturdy, lightweight cores that keep large-diameter rolls stable during winding, storage, and transport. P.R. Packaging manufactures bubble wrap cores offering optimal beam strength without adding unnecessary shipping weight.",
    applications: [
      "Air bubble film roll winding",
      "Cushioning and void-fill film rolls",
      "Foam roll packaging",
      "Protective insulation film converting"
    ],
    features: [
      "Optimal balance of lightweight construction and high beam rigidity",
      "Zero deflection across wide roll widths up to 130 inches",
      "Smooth core surface preventing puncture of delicate air bubbles",
      "100% recyclable, enhancing the sustainability profile of packaging suppliers"
    ],
    industries: [
      "Bubble Wrap Industry",
      "Protective Packaging",
      "E-commerce Packaging",
      "Industrial Insulation"
    ],
    specifications: [
      { label: "Inner Diameter", value: "1.5\" to 4\" (approx. 38 mm to 100 mm)" },
      { label: "Length", value: "Up to 130 inches (wide web compatibility)" },
      { label: "Wall Thickness", value: "1.5 mm to 8 mm" },
      { label: "Material", value: "Recycled kraft paper and dextrine adhesive" }
    ],
    whyChooseUs: [
      "Custom lengths cut to match your exact slitting widths",
      "Reliable supply chain backed by our Bhiwandi transit warehouse",
      "High-speed production capacity ensuring timely order fulfillment"
    ],
    relatedSlugs: ["stretch-film-paper-tubes", "corrugated-sheets", "corrugated-boxes"]
  },
  {
    slug: "tissue-paper-cores",
    name: "Tissue Paper Cores",
    shortName: "Tissue Paper Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/tissue-paper-cores.jpg",
    tagline: "Eco-Friendly, Precise Paper Cores for Toilet Rolls & Kitchen Towels",
    overview:
      "Our tissue paper cores are manufactured specifically for high-speed tissue converting lines. With tightly calibrated inner and outer diameters, smooth seams, and lightweight construction, they enable consistent unwinding and perforation on consumer tissue rolls.",
    applications: [
      "Bathroom tissue / toilet paper rolls",
      "Kitchen paper towel rolls",
      "Commercial hand towels and center-pull rolls",
      "Industrial wiper roll converting"
    ],
    features: [
      "Engineered for high-speed automatic log saw cutting without fraying",
      "100% biodegradable and recyclable composition",
      "Uniform wall thickness ensuring roundness across the roll",
      "Cost-effective solution supporting high-volume consumer goods"
    ],
    industries: [
      "Tissue Converting Industry",
      "Hygiene Products",
      "Hospitality Packaging",
      "Consumer FMCG"
    ],
    specifications: [
      { label: "Standard ID", value: "38 mm, 40 mm, 45 mm and custom sizes" },
      { label: "Length", value: "Cut lengths or master logs up to 130 inches" },
      { label: "Wall Thickness", value: "1 mm to 3 mm" },
      { label: "Paper Grade", value: "Recycled kraft paper / board" }
    ],
    whyChooseUs: [
      "High-speed automated winder ensuring burr-free cut finishes",
      "Strict moisture balance preventing shrinkage or ovality",
      "Dependable scheduled deliveries for continuous converting plants"
    ],
    relatedSlugs: ["paper-tubes", "cardboard-containers", "incense-stick-tubes"]
  },
  {
    slug: "dty-poy-textile-yarn-cones",
    name: "DTY/POY Textile Yarn Cones",
    shortName: "DTY/POY Yarn Cones",
    category: "Paper Tubes & Cores",
    image: "/images/products/dty-poy-textile-yarn-cones.jpg",
    tagline: "Color-Coded Cylindrical Yarn Carriers for High-Speed Synthetic Yarn Spinning",
    overview:
      "Engineered for Drawn Textured Yarn (DTY) and Partially Oriented Yarn (POY) winding, these high-precision cylindrical paper tubes feature vibrant color-coded outer surfaces for immediate yarn denier identification. Built with polished bull-nosed ends and balanced geometry, they operate reliably at ultra-high spinning speeds.",
    applications: [
      "DTY (Drawn Textured Yarn) winding",
      "POY (Partially Oriented Yarn) continuous spinning",
      "Polyester, nylon and synthetic filament winding",
      "Textile yarn sorting and identification"
    ],
    features: [
      "Color-coded outer paper (blue, yellow, pink, green, and custom shades)",
      "Smooth rounded bull-nosed end finish to avoid yarn filament snagging",
      "Dynamic balance under speeds exceeding 1,000 meters per minute",
      "Custom surface embossing/grooving for yarn tail capture"
    ],
    industries: [
      "Textile Industry",
      "Synthetic Yarn Spinners",
      "Polyester Manufacturing Units",
      "Dyeing & Weaving Mills"
    ],
    specifications: [
      { label: "Inner Diameter", value: "Calibrated to spinning spindle chucks" },
      { label: "Wall Thickness", value: "3 mm to 8 mm" },
      { label: "Outer Finish", value: "Custom dyed kraft paper in vibrant identification colors" },
      { label: "End Treatments", value: "Bull-nose rolled edges, yarn notches, scoring" }
    ],
    whyChooseUs: [
      "Direct supplier to major synthetic yarn manufacturers in Western India",
      "Stringent dimensional tolerance ensuring flawless high-speed spinning",
      "Extensive selection of identification colors available"
    ],
    relatedSlugs: ["textile-tubes", "paper-cores", "paper-tubes"]
  },
  {
    slug: "corrugated-sheets",
    name: "Corrugated Sheets & Liners",
    shortName: "Corrugated Sheets",
    category: "Corrugated Packaging",
    image: "/images/products/corrugated-sheets.jpg",
    tagline: "Protective Single-Face Rolls & Multi-Ply Corrugated Sheets for Layering & Wrapping",
    overview:
      "P.R. Packaging manufactures premium corrugated sheets and single-face corrugated paper rolls (corrugated liners) designed for surface protection, product separation, and pallet stabilization. Produced from high-burst kraft paper, our corrugated products provide superior shock absorption and impact resistance.",
    applications: [
      "Floor protection during construction and painting",
      "Wrapping metal parts, pipes, and irregular machinery",
      "Pallet layer separation pads and top covers",
      "Furniture and glass cushioning during transit"
    ],
    features: [
      "Flexible fluted construction in roll format or flat cut sheets",
      "High shock cushioning protecting delicate surfaces from scratches",
      "Manufactured from 100% eco-friendly, biodegradable kraft paper",
      "Available in various roll widths and custom cut-to-size sheet formats"
    ],
    industries: [
      "Packaging Industry",
      "Furniture & Interior Industry",
      "Engineering & Metal Works",
      "Warehousing & Logistics"
    ],
    specifications: [
      { label: "Roll Formats", value: "Single-face corrugated liner rolls" },
      { label: "Sheet Formats", value: "Custom rectangular cut sheets & layer pads" },
      { label: "Paper Grade", value: "Virgin kraft liners, semi-kraft & recycled kraft" },
      { label: "In-House Box / Sheet Size", value: "Capabilities for sizes up to 52 inches" },
      { label: "Fluting Types", value: "A, B, C & E fluting options" }
    ],
    whyChooseUs: [
      "In-house production process ensuring strict quality and prompt lead times",
      "Clean corrugated rolls without tears or moisture defects",
      "Cost-effective bulk supply with flexible order quantities"
    ],
    relatedSlugs: ["corrugated-boxes", "bubble-wrap-cores", "paper-tubes"]
  },
  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    shortName: "Corrugated Boxes",
    category: "Corrugated Packaging",
    image: "/images/products/corrugated-boxes.jpg",
    tagline: "Industrial Master Cartons & Heavy-Duty Shipping Boxes up to 52\"",
    overview:
      "Our in-house corrugated box manufacturing facility produces sturdy master cartons, RSC boxes, and custom industrial packaging for sizes up to 52 inches. Engineered to withstand stacking pressures and rough transit handling, our corrugated boxes ensure complete cargo safety for domestic and export shipments.",
    applications: [
      "Master shipping cartons for manufacturing and FMCG",
      "Heavy industrial machinery parts packaging",
      "Export goods packaging and transport containers",
      "Textile roll, garment and apparel shipping",
      "Pharmaceutical and chemical outer packaging"
    ],
    features: [
      "In-house manufacturing process capable of producing sizes up to 52 inches",
      "High Edge Crush Test (ECT) and Bursting Strength ratings",
      "3-ply, 5-ply, and 7-ply constructions for varying weight loads",
      "Custom flexographic printing for company branding and handling marks",
      "100% recyclable, made with eco-friendly kraft paper and corn starch adhesive"
    ],
    industries: [
      "Packaging Industry",
      "Industrial Manufacturing",
      "Pharmaceuticals",
      "Textiles & Garments",
      "E-Commerce & Logistics"
    ],
    specifications: [
      { label: "Size Capability", value: "In-house process for box dimensions up to 52\"" },
      { label: "Ply Construction", value: "3-Ply, 5-Ply, Heavy-Duty 7-Ply" },
      { label: "Paper Quality", value: "Kraft liner board, Virgin kraft, Test liner" },
      { label: "Styles", value: "Regular Slotted Container (RSC), Die-Cut, Telescopic" },
      { label: "Printing", value: "Single to multi-color custom printing" }
    ],
    whyChooseUs: [
      "Comprehensive in-house manufacturing under one roof in Boisar MIDC",
      "Transparent business dealings and competitive volume prices",
      "48-hour order planning and swift dispatch across Maharashtra"
    ],
    relatedSlugs: ["corrugated-sheets", "cardboard-containers", "paper-tubes"]
  },
  {
    slug: "incense-stick-tubes",
    name: "Incense Stick Tubes",
    shortName: "Incense Stick Tubes",
    category: "Specialty Tubes & Containers",
    image: "/images/products/incense-stick-tubes.jpg",
    tagline: "Aesthetic Printed Paper Tubes for Agarbatti & Premium Fragrance Products",
    overview:
      "P.R. Packaging manufactures visually captivating round paper tubes for agarbatti (incense stick) packaging. Featuring vivid multi-color printing, custom surface coatings, and aroma-preserving tight seals, our incense tubes elevate shelf appeal while protecting fragile incense sticks from breakage.",
    applications: [
      "Agarbatti and dhoop stick packaging",
      "Herbal fragrance stick cylindrical packaging",
      "Aromatherapy and meditation stick canisters",
      "Gift sets and export incense presentation"
    ],
    features: [
      "High-definition multi-color exterior graphic printing",
      "Aroma-barrier inner liners keeping fragrance potent over extended shelf life",
      "Rigid tube walls preventing crushing of incense sticks during transit",
      "Available with fitted paper plugs or decorative tin end caps"
    ],
    industries: [
      "Incense Stick (Agarbatti) Industry",
      "Fragrance & Aromatherapy",
      "Consumer Goods",
      "Export Gifting"
    ],
    specifications: [
      { label: "Diameter Range", value: "18 mm to 60 mm (custom sizes available)" },
      { label: "Standard Lengths", value: "8 inch, 9 inch, 10 inch, 12 inch (up to 130 inches)" },
      { label: "Wall Thickness", value: "1 mm to 3 mm" },
      { label: "Outer Finish", value: "Full-color printed art paper / craft finish" },
      { label: "Closures", value: "Fitted paper caps, metal tin lids, or plastic plugs" }
    ],
    whyChooseUs: [
      "Trusted supplier to leading agarbatti manufacturers in India",
      "In-house custom printing supporting vibrant brand artwork",
      "Eco-friendly paper construction appealing to modern conscious consumers"
    ],
    relatedSlugs: ["cardboard-containers", "paper-tubes", "corrugated-boxes"]
  },
  {
    slug: "cardboard-containers",
    name: "Cardboard Containers",
    shortName: "Cardboard Containers",
    category: "Specialty Tubes & Containers",
    image: "/images/products/cardboard-containers.jpg",
    tagline: "Eco-Friendly Rigid Cylindrical Containers with Friction-Fit Lids",
    overview:
      "Our cardboard containers are composite paper canisters designed for premium retail presentation. Fabricated from rigid spiral paper cores wrapped in custom-printed artistic outer labels with friction-fit paper lids, they deliver a tactile, eco-luxurious unboxing experience.",
    applications: [
      "Luxury incense and botanical fragrance sticks",
      "Artisan teas, spices, and dry confectionery",
      "Cosmetics, bath salts, and wellness packaging",
      "Promotional merchandise and premium corporate gifts"
    ],
    features: [
      "Rigid 2-piece and 3-piece telescoping canister construction",
      "Friction-fit snug closure keeping contents fresh and secure",
      "100% biodegradable and plastic-free packaging alternative",
      "Custom debossing, foil stamping, or full-color label wrapping"
    ],
    industries: [
      "Consumer Retail",
      "Incense & Fragrance",
      "Cosmetics & Wellness",
      "Specialty Packaging"
    ],
    specifications: [
      { label: "Diameters", value: "Custom inner diameters from 25 mm to 100 mm" },
      { label: "Height", value: "Custom cut heights from 2 inches up to 130 inches" },
      { label: "Structure", value: "Spiral wound kraft body with rolled paper lid" },
      { label: "Surface Finish", value: "Matte, gloss, kraft natural, textured art paper" }
    ],
    whyChooseUs: [
      "High attention to seam alignment and lid fit precision",
      "Skilled workforce with over 40+ craftsmen in our Boisar unit",
      "Flexible order batches tailored to boutique and volume brands alike"
    ],
    relatedSlugs: ["incense-stick-tubes", "paper-tubes", "tissue-paper-cores"]
  },
  {
    slug: "pvc-roll-cores",
    name: "PVC Roll Cores",
    shortName: "PVC Roll Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/pvc-roll-cores.jpg",
    tagline: "Extra-Thick Wall Industrial Paper Cores for Heavy PVC & Vinyl Rolls",
    overview:
      "Winding heavy PVC sheets, vinyl flooring, and flexible polymer membranes requires extraordinary core strength. P.R. Packaging manufactures heavy-duty PVC roll cores featuring reinforced multi-ply kraft construction and wall thicknesses up to 20 mm that prevent core crushing under heavy reel weights.",
    applications: [
      "PVC flexible film and sheet winding",
      "Vinyl flooring and artificial leather rolling",
      "Tarpaulins and heavy billboard banner rolls",
      "Conveyor belt and rubber sheet reeling"
    ],
    features: [
      "Ultra-thick wall construction up to 20 mm engineered for extreme compressive loads",
      "High dynamic straightness ensuring smooth unwinding without vibration",
      "Resistant to high humidity and temperature variations during transit",
      "Calibrated inner diameter ensuring positive engagement with heavy steel winding mandrels"
    ],
    industries: [
      "PVC Roll Industry",
      "Plastic Roll Industry",
      "Floor Covering & Vinyl",
      "Industrial Heavy Goods"
    ],
    specifications: [
      { label: "Inner Diameter", value: "3\" (76 mm), 4\" (100 mm) & custom sizes" },
      { label: "Overall Diameter", value: "Up to 140 mm with heavy wall" },
      { label: "Wall Thickness", value: "5 mm to 20 mm" },
      { label: "Length", value: "Up to 130 inches" },
      { label: "Adhesive", value: "Industrial-grade dextrine powder formulation" }
    ],
    whyChooseUs: [
      "Manufactured on robust heavy-duty spiral winding lines",
      "In-house crush resistance testing before dispatch",
      "Direct transit from Boisar MIDC via Western freight routes"
    ],
    relatedSlugs: ["stretch-film-paper-tubes", "paper-cores", "foil-cores"]
  },
  {
    slug: "foil-cores",
    name: "Aluminium & Silver Foil Cores",
    shortName: "Foil Cores",
    category: "Paper Tubes & Cores",
    image: "/images/products/foil-cores.jpg",
    tagline: "Precision Paper Cores for Aluminium, Silver & Pharmaceutical Foil Converting",
    overview:
      "Thin metallic foils require cores with flawless surface smoothness, because even minute surface imperfections can telegraph through micro-thin aluminium foil layers. Our foil cores are precision-wound with extra-smooth kraft liners and zero surface ridges, guaranteeing smooth, defect-free foil winding.",
    applications: [
      "Household aluminium foil roll converting",
      "Pharmaceutical blister foil and cold-form foil winding",
      "Flexible packaging barrier laminates",
      "Industrial silver foil and cable shielding foil"
    ],
    features: [
      "Ultra-smooth exterior surface preventing embossing impressions on foil layers",
      "High roundness tolerance ensuring uniform foil tension across high-speed rewinders",
      "Dust-free precision cut ends suitable for clean converting environments",
      "Balanced moisture control preventing core shrinkage or expansion"
    ],
    industries: [
      "Aluminium & Foil Industry",
      "Pharmaceutical Packaging",
      "Flexible Packaging",
      "Food & Beverage Packaging"
    ],
    specifications: [
      { label: "Standard ID", value: "25 mm, 38 mm, 50 mm, 76 mm & custom" },
      { label: "Outer Diameter", value: "14 mm to 100 mm" },
      { label: "Length", value: "100 mm to 130 inches" },
      { label: "Wall Thickness", value: "1.5 mm to 10 mm" },
      { label: "Surface Finish", value: "Super-calendered smooth kraft liner" }
    ],
    whyChooseUs: [
      "Tightly monitored manufacturing ensuring dust-free clean cores",
      "Trusted by converters across Mumbai, Palghar, and Western India",
      "Rapid dispatch in 48 hours for standard specifications"
    ],
    relatedSlugs: ["bopp-cello-tape-cores", "pvc-roll-cores", "paper-cores"]
  }
];

export const PRODUCT_CATEGORIES = [
  "All Products",
  "Paper Tubes & Cores",
  "Corrugated Packaging",
  "Specialty Tubes & Containers"
] as const;
