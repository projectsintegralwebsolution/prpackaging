export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  suitableProducts: {
    name: string;
    slug: string;
  }[];
  keyRequirements: string[];
  clientValue: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "textile",
    name: "Textile Industry",
    tagline: "High-Speed Winding Tubes & Color-Coded Yarn Cones for Spinning & Weaving",
    description:
      "Modern textile spinning, synthetic filament extrusion, and weaving mills operate at continuous high winding speeds. P.R. Packaging manufactures heavy-duty textile paper tubes and DTY/POY yarn cones engineered to resist dynamic centrifugal forces without deformation or fiber snagging.",
    image: "/images/products/textile-tubes.jpg",
    suitableProducts: [
      { name: "Textile Tubes", slug: "textile-tubes" },
      { name: "DTY/POY Textile Yarn Cones", slug: "dty-poy-textile-yarn-cones" },
      { name: "Industrial Paper Cores", slug: "paper-cores" }
    ],
    keyRequirements: [
      "Dynamic balance under high-speed winding (>1000 m/min)",
      "Snag-free bull-nosed end finish to protect synthetic filaments",
      "Vibrant color-coding for effortless yarn denier segregation",
      "High beam rigidity to avoid bowing under heavy fabric roll weights"
    ],
    clientValue:
      "Backed by over three decades of manufacturing experience since 1992, we supply consistent, quality-tested paper tubes to textile manufacturing hubs across Maharashtra and Gujarat."
  },
  {
    id: "bopp-tape",
    name: "BOPP Tape Industry",
    tagline: "Precision White & Kraft Paper Cores with Custom Interior Brand Printing",
    description:
      "Adhesive tape converters require paper cores with exact dimensional tolerances and smooth outer surfaces for bubble-free adhesive coating and slitting. We supply specialized 1-inch and 3-inch BOPP tape cores featuring vivid custom interior company branding.",
    image: "/images/products/bopp-cello-tape-cores.jpg",
    suitableProducts: [
      { name: "BOPP / Cello Tape Tube Cores", slug: "bopp-cello-tape-cores" },
      { name: "Paper Tubes", slug: "paper-tubes" },
      { name: "Corrugated Boxes", slug: "corrugated-boxes" }
    ],
    keyRequirements: [
      "Rigid wall thickness resisting inward crushing from tape tension",
      "Sharp, clean multi-color internal brand logo printing",
      "Dust-free precision cut edges for automatic slitting machines",
      "Consistently smooth white or kraft paper outer liner"
    ],
    clientValue:
      "Custom in-house printing and rapid production scheduling allow tape converters to keep low stock while benefiting from fast 48-hour order dispatch."
  },
  {
    id: "stretch-film",
    name: "Stretch Film Industry",
    tagline: "Zero-Crush Heavy Duty Cores for Manual & High-Speed Machine Stretch Rolls",
    description:
      "Stretch film creates tremendous radial compression as the film wraps tightly around the paper core. P.R. Packaging's stretch film cores are specifically formulated with dense kraft plies and high-solids dextrine powder bonding to resist radial crush completely.",
    image: "/images/products/stretch-film-paper-tubes.jpg",
    suitableProducts: [
      { name: "Stretch Film Paper Tubes", slug: "stretch-film-paper-tubes" },
      { name: "Industrial Paper Cores", slug: "paper-cores" },
      { name: "Corrugated Boxes", slug: "corrugated-boxes" }
    ],
    keyRequirements: [
      "High radial compression strength to resist inward film pressure",
      "Calibrated 2\" and 3\" inner diameters for automated pallet wrapper chucks",
      "Burr-free square cut ends preventing film edge tears during rewinding",
      "Consistent weight and balance for high-speed cast extrusion lines"
    ],
    clientValue:
      "Tested batch-by-batch in our Boisar MIDC quality laboratory, our stretch film cores prevent costly line shutdowns and roll telescoping during transit."
  },
  {
    id: "bubble-wrap",
    name: "Bubble Wrap Industry",
    tagline: "Sturdy, Lightweight Cores for Air Bubble Packaging Film Converters",
    description:
      "Air bubble cushioning materials require wide-format paper cores that provide maximum beam support without adding unnecessary freight weight. We manufacture rigid, lightweight cores up to 130 inches in length for bubble film manufacturers.",
    image: "/images/products/bubble-wrap-cores.jpg",
    suitableProducts: [
      { name: "Bubble Wrap Cores", slug: "bubble-wrap-cores" },
      { name: "Corrugated Sheets", slug: "corrugated-sheets" },
      { name: "Paper Tubes", slug: "paper-tubes" }
    ],
    keyRequirements: [
      "Zero mid-span sagging across wide web widths up to 130 inches",
      "Smooth exterior surface preventing puncture of delicate air bubbles",
      "Lightweight eco-friendly construction reducing shipping costs",
      "Recycled paper composition supporting circular packaging goals"
    ],
    clientValue:
      "Custom-cut to exact slitting widths and supported by our Bhiwandi transit warehouse for just-in-time delivery."
  },
  {
    id: "plastic-roll",
    name: "Plastic Roll Industry",
    tagline: "Industrial Winding Cores for LDPE, HDPE, BOPP & Specialty Polymer Films",
    description:
      "From agricultural films to food-grade barrier films, polymer extruders rely on our industrial paper cores for smooth roll start-up and tight, ripple-free winding across high-speed blown film lines.",
    image: "/images/products/paper-cores.jpg",
    suitableProducts: [
      { name: "Industrial Paper Cores", slug: "paper-cores" },
      { name: "Paper Tubes", slug: "paper-tubes" },
      { name: "Stretch Film Paper Tubes", slug: "stretch-film-paper-tubes" }
    ],
    keyRequirements: [
      "Consistent inner diameter for smooth pneumatic shaft locking",
      "Controlled moisture level preventing core expansion on heated rolls",
      "High concentricity preventing reel vibration at high RPMs",
      "Wide diameter availability from 14 mm to 100 mm"
    ],
    clientValue:
      "Our automated paper tube machinery ensures tight dimensional tolerance across long production runs."
  },
  {
    id: "aluminium-foil",
    name: "Aluminium & Foil Industry",
    tagline: "Ultra-Smooth High Precision Cores for Metal & Pharmaceutical Barrier Foils",
    description:
      "Because thin metal foils easily mirror core surface irregularities, our foil paper cores are manufactured with super-calendered smooth kraft paper and seamless spiral seams to ensure flawless, impression-free foil winding.",
    image: "/images/products/foil-cores.jpg",
    suitableProducts: [
      { name: "Aluminium & Silver Foil Cores", slug: "foil-cores" },
      { name: "Paper Cores", slug: "paper-cores" },
      { name: "Corrugated Boxes", slug: "corrugated-boxes" }
    ],
    keyRequirements: [
      "Super-smooth ridge-free surface to prevent foil impressions",
      "Strict roundness tolerance for high-speed foil slitting and rewinding",
      "Dust-free clean manufacturing suitable for pharma and food foil converters",
      "Accurate slit lengths for standard kitchen foil and pharma blister formats"
    ],
    clientValue:
      "Strict dust-free cutting and in-house inspection ensure every core meets high-barrier foil converting standards."
  },
  {
    id: "pvc-roll",
    name: "PVC Roll Industry",
    tagline: "Extra Heavy-Duty Thick Wall Cores for Flexible PVC, Vinyl & Tarpaulins",
    description:
      "Heavy rolls of PVC flooring, flexible sheets, and industrial vinyl demand heavy-gauge paper cores with wall thicknesses up to 20 mm capable of carrying hundreds of kilograms of roll weight.",
    image: "/images/products/pvc-roll-cores.jpg",
    suitableProducts: [
      { name: "PVC Roll Cores", slug: "pvc-roll-cores" },
      { name: "Paper Tubes", slug: "paper-tubes" },
      { name: "Corrugated Sheets", slug: "corrugated-sheets" }
    ],
    keyRequirements: [
      "Reinforced wall thickness from 5 mm up to 20 mm for heavy static loads",
      "Heavy compressive strength preventing ovality under reel storage",
      "High dimensional straightness over long lengths up to 130 inches",
      "Resistant to humid storage and warehouse temperature swings"
    ],
    clientValue:
      "Manufactured with premium virgin kraft liners and heavy spiral plies on automated industrial tube winding lines."
  },
  {
    id: "incense-stick",
    name: "Incense Stick Industry",
    tagline: "Aesthetic Printed Paper Tubes & Rigid Canisters for Agarbatti Packaging",
    description:
      "India's vibrant agarbatti and fragrance industry requires packaging that preserves delicate perfumes while creating captivating retail shelf appeal. We manufacture beautifully printed incense stick tubes and rigid cardboard containers.",
    image: "/images/products/incense-stick-tubes.jpg",
    suitableProducts: [
      { name: "Incense Stick Tubes", slug: "incense-stick-tubes" },
      { name: "Cardboard Containers", slug: "cardboard-containers" },
      { name: "Corrugated Boxes", slug: "corrugated-boxes" }
    ],
    keyRequirements: [
      "Aroma-barrier properties preventing fragrance loss over time",
      "High-definition multi-color exterior printing and glossy/matte finishes",
      "Tight-fitting paper lids and plugs that keep contents secure",
      "Durable cylindrical structure preventing breakage of fragile incense sticks"
    ],
    clientValue:
      "Custom branding, flexible sizing (8\" to 12\" standard and custom lengths), and competitive pricing direct from our Boisar factory."
  },
  {
    id: "packaging",
    name: "Packaging Industry",
    tagline: "End-to-End Paper Packaging: Tubes, Cores, Corrugated Sheets & Master Cartons",
    description:
      "As a primary packaging manufacturer established in 1992, P.R. Packaging provides converters, logistics companies, and manufacturing enterprises with a comprehensive range of paper tubes, corrugated sheets, and cartons up to 52 inches.",
    image: "/images/products/corrugated-boxes.jpg",
    suitableProducts: [
      { name: "Corrugated Boxes", slug: "corrugated-boxes" },
      { name: "Corrugated Sheets & Liners", slug: "corrugated-sheets" },
      { name: "Paper Tubes", slug: "paper-tubes" },
      { name: "Cardboard Containers", slug: "cardboard-containers" }
    ],
    keyRequirements: [
      "In-house corrugated box manufacturing for sizes up to 52\"",
      "Single-face corrugated liner rolls for surface protection and wrapping",
      "100% recyclable, sustainable, and bio-degradable paper packaging",
      "Rapid turnaround with 48-hour order planning and execution"
    ],
    clientValue:
      "One-stop source for both cylindrical paper tubes and corrugated boxes, eliminating multi-vendor coordination hassles."
  }
];
