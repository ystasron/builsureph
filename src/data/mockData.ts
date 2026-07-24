export interface Supplier {
  id: string;
  name: string;
  location: string;
  region: string;
  rating: number;
  reviews: number;
  verified: boolean;
  dtiNumber: string;
  deliveryScore: number;
  warrantyMonths: number;
  certifications: string[];
  specialties: string[];
  established: number;
  phone: string;
  email: string;
  avatar: string;
  website: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  unit: string;
  image: string;
  description: string;
  specifications: string[];
}

export interface ProductPrice {
  productId: string;
  supplierId: string;
  price: number;
  deliveryFee: number;
  deliveryDays: number;
  inStock: boolean;
  bulkDiscount: string;
  lastUpdated: string;
}

export interface Certification {
  id: string;
  code: string;
  productName: string;
  brand: string;
  standard: string;
  issuedDate: string;
  expiryDate: string;
  status: "valid" | "expired" | "revoked";
  batchNumber: string;
  testResults: { property: string; value: string; standard: string; pass: boolean }[];
}

export const suppliers: Supplier[] = [
  {
    id: "s1",
    name: "Wilcon Depot",
    location: "Quezon City, Metro Manila",
    region: "NCR",
    rating: 4.7,
    reviews: 2340,
    verified: true,
    dtiNumber: "SEC-200312948 (PSE: WLCON)",
    deliveryScore: 95,
    warrantyMonths: 24,
    certifications: ["ISO 9001:2015", "PSE Listed", "BCI Asia Top 10"],
    specialties: ["Tiles", "Building Materials", "Electrical", "Plumbing", "Paint", "Furniture"],
    established: 1977,
    phone: "(02) 8894-5266",
    email: "customercare@wilcon.com.ph",
    avatar: "WD",
    website: "https://wilcon.com.ph",
  },
  {
    id: "s2",
    name: "CitiHardware",
    location: "Mandaluyong, Metro Manila",
    region: "NCR",
    rating: 4.5,
    reviews: 1580,
    verified: true,
    dtiNumber: "CS200919379",
    deliveryScore: 92,
    warrantyMonths: 18,
    certifications: ["ISO 9001:2015", "100% Original Products"],
    specialties: ["Building Materials", "Hardware", "Appliances", "Electrical", "Plumbing", "Paint"],
    established: 2009,
    phone: "(02) 8867-8888",
    email: "customercare@citihardware.com",
    avatar: "CH",
    website: "https://citihardware.com",
  },
  {
    id: "s3",
    name: "AllHome",
    location: "Vista City, Las Piñas",
    region: "NCR",
    rating: 4.6,
    reviews: 1890,
    verified: true,
    dtiNumber: "CS201204471 (PSE: ALLHC)",
    deliveryScore: 93,
    warrantyMonths: 24,
    certifications: ["PSE Listed", "Villar Group", "BCI Asia Top 10"],
    specialties: ["Construction Materials", "Home Improvement", "Furniture", "Appliances"],
    established: 2012,
    phone: "(02) 8825-8888",
    email: "customercare@allhome.com.ph",
    avatar: "AH",
    website: "https://allhome.com.ph",
  },
  {
    id: "s4",
    name: "Handyman Do It Best",
    location: "Pasig, Metro Manila",
    region: "NCR",
    rating: 4.4,
    reviews: 1120,
    verified: true,
    dtiNumber: "Robinsons Retail Holdings (PSE: RRI)",
    deliveryScore: 90,
    warrantyMonths: 12,
    certifications: ["Do It Best Member", "Robinsons Retail Group"],
    specialties: ["Hardware", "Tools", "Paint", "Electrical", "Plumbing"],
    established: 2000,
    phone: "(02) 8638-8888",
    email: "feedback@handyman.com.ph",
    avatar: "HM",
    website: "https://handyman.com.ph",
  },
  {
    id: "s5",
    name: "SteelAsia Manufacturing Corp.",
    location: "Valenzuela, Metro Manila",
    region: "NCR",
    rating: 4.9,
    reviews: 876,
    verified: true,
    dtiNumber: "CS199709876",
    deliveryScore: 98,
    warrantyMonths: 36,
    certifications: ["ISO 9001:2015", "PSA Certified", "DPWH Approved", "PNS 49:2020"],
    specialties: ["Steel Bars", "Steel Mesh", "Structural Steel", "Rebar"],
    established: 1966,
    phone: "(02) 8294-1000",
    email: "sales@steelasia.com",
    avatar: "SA",
    website: "https://steelasia.com",
  },
  {
    id: "s6",
    name: "Republic Cement & Building Materials",
    location: "Taguig, Metro Manila",
    region: "NCR",
    rating: 4.8,
    reviews: 1543,
    verified: true,
    dtiNumber: "CS195500123 (Aboitiz Group)",
    deliveryScore: 97,
    warrantyMonths: 24,
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "PNS 07:2020", "DPWH Approved"],
    specialties: ["Cement", "Ready-Mix Concrete", "Aggregates", "Dry Mortar"],
    established: 1955,
    phone: "(02) 8886-7800",
    email: "inquiries@republiccement.com",
    avatar: "RC",
    website: "https://republiccement.com",
  },
  {
    id: "s7",
    name: "Eagle Cement Corp.",
    location: "San Ildefonso, Bulacan",
    region: "Luzon",
    rating: 4.7,
    reviews: 980,
    verified: true,
    dtiNumber: "CS200505678 (PSE: EAGLE)",
    deliveryScore: 94,
    warrantyMonths: 24,
    certifications: ["ISO 9001:2015", "PSE Listed", "PNS 07:2020"],
    specialties: ["Portland Cement", "Pozzolan Cement", "Type 1P Cement"],
    established: 2005,
    phone: "(02) 8638-8888",
    email: "sales@eaglecement.com.ph",
    avatar: "EC",
    website: "https://eaglecement.com.ph",
  },
  {
    id: "s8",
    name: "Cemex Philippines",
    location: "Makati, Metro Manila",
    region: "NCR",
    rating: 4.6,
    reviews: 1230,
    verified: true,
    dtiNumber: "CS199802345 (CEMEX Global)",
    deliveryScore: 96,
    warrantyMonths: 24,
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "PNS 07:2020", "Green Building"],
    specialties: ["Cement", "Ready-Mix Concrete", "Aggregates", "Sustainable Solutions"],
    established: 1998,
    phone: "(02) 8849-3600",
    email: "ph.customerservice@cemex.com",
    avatar: "CX",
    website: "https://cemex.com.ph",
  },
  {
    id: "s9",
    name: "Pacific Paint (Boysen) Philippines",
    location: "Valenzuela, Metro Manila",
    region: "NCR",
    rating: 4.8,
    reviews: 2100,
    verified: true,
    dtiNumber: "CS195300456",
    deliveryScore: 91,
    warrantyMonths: 12,
    certifications: ["ISO 9001:2015", "Green Label Certified", "PNS 198:2015"],
    specialties: ["Paint", "Coatings", "Waterproofing", "Specialty Finishes"],
    established: 1953,
    phone: "(02) 8294-8000",
    email: "info@boysen.com.ph",
    avatar: "BP",
    website: "https://boysen.com.ph",
  },
  {
    id: "s10",
    name: "Ororama Superstore",
    location: "Cagayan de Oro, Misamis Oriental",
    region: "Mindanao",
    rating: 4.4,
    reviews: 456,
    verified: true,
    dtiNumber: "DTI-X-1987-0012345",
    deliveryScore: 86,
    warrantyMonths: 12,
    certifications: ["DTI Registered"],
    specialties: ["Hardware", "Building Materials", "Electrical", "Plumbing"],
    established: 1987,
    phone: "(088) 857-1441",
    email: "info@ororama.com",
    avatar: "OR",
    website: "https://ororama.com",
  },
  {
    id: "s11",
    name: "MC Home Depot",
    location: "Ortigas Center, Pasig",
    region: "NCR",
    rating: 4.5,
    reviews: 980,
    verified: true,
    dtiNumber: "CS199503456",
    deliveryScore: 91,
    warrantyMonths: 18,
    certifications: ["ISO 9001:2015"],
    specialties: ["Tiles", "Sanitary Ware", "Kitchen", "Lighting", "Hardware"],
    established: 1995,
    phone: "(02) 8631-0088",
    email: "customercare@mchomedepot.com.ph",
    avatar: "MC",
    website: "https://mchomedepot.com.ph",
  },
  {
    id: "s12",
    name: "Holcim Philippines",
    location: "Taguig, Metro Manila",
    region: "NCR",
    rating: 4.7,
    reviews: 1340,
    verified: true,
    dtiNumber: "CS196800789 (Holcim Group)",
    deliveryScore: 97,
    warrantyMonths: 24,
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "PNS 07:2020", "Green Building"],
    specialties: ["Cement", "Ready-Mix Concrete", "Aggregates", "Construction Solutions"],
    established: 1968,
    phone: "(02) 8816-6000",
    email: "info@holcim.com.ph",
    avatar: "HC",
    website: "https://holcim.com.ph",
  },
];

export const products: Product[] = [
  // CEMENT
  { id: "p1", name: "Republic Portland Cement (40kg)", brand: "Republic Cement", category: "Cement", unit: "bag", image: "🏗️", description: "Type 1P Portland cement. Aboitiz Group. Conforms to PNS 07:2020.", specifications: ["Weight: 40kg", "Type: Portland Type 1P", "Standard: PNS 07:2020", "Compressive Strength: 42.5 MPa"] },
  { id: "p2", name: "Eagle Cement Type 1P (40kg)", brand: "Eagle Cement", category: "Cement", unit: "bag", image: "🏗️", description: "Premium pozzolan cement. PSE-listed manufacturer.", specifications: ["Weight: 40kg", "Type: Portland Type 1P", "Standard: PNS 07:2020", "Compressive Strength: 42.5 MPa"] },
  { id: "p3", name: "Holcim Excel (40kg)", brand: "Holcim", category: "Cement", unit: "bag", image: "🏗️", description: "Premium cement for general construction. Holcim Group.", specifications: ["Weight: 40kg", "Type: Portland Type 1P", "Standard: PNS 07:2020", "Compressive Strength: 42.5 MPa"] },
  { id: "p4", name: "CEMEX Apo Cement (40kg)", brand: "CEMEX", category: "Cement", unit: "bag", image: "🏗️", description: "Global brand cement for Philippine construction.", specifications: ["Weight: 40kg", "Type: Portland Type 1", "Standard: PNS 07:2020", "Compressive Strength: 42.5 MPa"] },

  // STEEL
  { id: "p5", name: "SteelAsia Deformed Bar (10mm)", brand: "SteelAsia", category: "Steel", unit: "piece", image: "🔩", description: "Grade 40 deformed steel bar. 6m length. Largest PH steel producer.", specifications: ["Diameter: 10mm", "Length: 6m", "Grade: 40", "Standard: PNS 49:2020"] },
  { id: "p6", name: "SteelAsia Deformed Bar (12mm)", brand: "SteelAsia", category: "Steel", unit: "piece", image: "🔩", description: "Grade 40 deformed steel bar. 6m length.", specifications: ["Diameter: 12mm", "Length: 6m", "Grade: 40", "Standard: PNS 49:2020"] },
  { id: "p7", name: "SteelAsia Deformed Bar (16mm)", brand: "SteelAsia", category: "Steel", unit: "piece", image: "🔩", description: "Grade 40 deformed steel bar. 6m length.", specifications: ["Diameter: 16mm", "Length: 6m", "Grade: 40", "Standard: PNS 49:2020"] },
  { id: "p8", name: "Capitol Steel Deformed Bar (10mm)", brand: "Capitol Steel", category: "Steel", unit: "piece", image: "🔩", description: "Grade 40 deformed steel bar from Capitol Steel.", specifications: ["Diameter: 10mm", "Length: 6m", "Grade: 40", "Standard: PNS 49:2020"] },

  // ELECTRICAL - Wires
  { id: "p9", name: "Phelps Dodge THHN Wire (2.0mm²)", brand: "Phelps Dodge", category: "Electrical", unit: "roll", image: "⚡", description: "THHN building wire. 150m roll. Copper conductor.", specifications: ["Size: 2.0mm²", "Length: 150m", "Type: THHN/THWN", "Standard: PNS 35-1"] },
  { id: "p10", name: "Philflex THHN Wire (2.0mm²)", brand: "Philflex", category: "Electrical", unit: "roll", image: "⚡", description: "THHN building wire. 150m roll. Made in Philippines.", specifications: ["Size: 2.0mm²", "Length: 150m", "Type: THHN/THWN", "Standard: PNS 35-1"] },
  { id: "p11", name: "American Wire THHN Wire (3.5mm²)", brand: "American Wire", category: "Electrical", unit: "roll", image: "⚡", description: "Heavy duty THHN wire for main feeders.", specifications: ["Size: 3.5mm²", "Length: 150m", "Type: THHN/THWN", "Standard: PNS 35-1"] },

  // ELECTRICAL - Switches & Outlets
  { id: "p12", name: "Panasonic Best Series Switch Module", brand: "Panasonic", category: "Electrical", unit: "piece", image: "🔌", description: "Best Series modular switch. Japanese quality.", specifications: ["Type: Toggle Switch", "Rating: 16A 250V", "Standard: PNS IEC 60669"] },
  { id: "p13", name: "Schneider Electric AvatarOn Switch", brand: "Schneider Electric", category: "Electrical", unit: "piece", image: "🔌", description: "AvatarOn series. Premium design.", specifications: ["Type: Toggle Switch", "Rating: 16A 250V", "Standard: PNS IEC 60669"] },

  // PAINT
  { id: "p14", name: "Boysen Flat Latex (1 gallon)", brand: "Boysen", category: "Paint", unit: "gallon", image: "🎨", description: "#1 paint brand in Philippines. Interior flat latex.", specifications: ["Volume: 1 gallon (3.78L)", "Type: Flat Latex", "Coverage: 30-35 sqm/coat", "Drying: 1-2 hours"] },
  { id: "p15", name: "Boysen Permacoat Semi-Gloss (1 gallon)", brand: "Boysen", category: "Paint", unit: "gallon", image: "🎨", description: "Semi-gloss latex for walls and ceilings.", specifications: ["Volume: 1 gallon (3.78L)", "Type: Semi-Gloss Latex", "Coverage: 25-30 sqm/coat", "Drying: 1-2 hours"] },
  { id: "p16", name: "Davies Paints Flat Latex (1 gallon)", brand: "Davies Paints", category: "Paint", unit: "gallon", image: "🎨", description: "Quality flat latex paint. Odorless formula.", specifications: ["Volume: 1 gallon (3.78L)", "Type: Flat Latex", "Coverage: 28-32 sqm/coat", "Drying: 1-2 hours"] },
  { id: "p17", name: "Nippon Paint Odorless Premium (1 gallon)", brand: "Nippon Paint", category: "Paint", unit: "gallon", image: "🎨", description: "Japanese technology. Low VOC premium paint.", specifications: ["Volume: 1 gallon (3.78L)", "Type: Flat Latex", "Coverage: 30-35 sqm/coat", "Drying: 1-2 hours"] },
  { id: "p18", name: "Boysen Roof Guard (1 gallon)", brand: "Boysen", category: "Paint", unit: "gallon", image: "🎨", description: "Elastomeric roof paint. Waterproofing.", specifications: ["Volume: 1 gallon (3.78L)", "Type: Elastomeric", "Coverage: 10-12 sqm/coat", "Drying: 2-4 hours"] },

  // PLUMBING - Pipes
  { id: "p19", name: "Neltex PVC Pipe Schedule 40 (1\" x 6m)", brand: "Neltex", category: "Plumbing", unit: "piece", image: "🔧", description: "Schedule 40 PVC pipe. #1 pipe brand in Philippines.", specifications: ["Diameter: 1 inch", "Length: 6m", "Schedule: 40", "Standard: PNS 65:2020"] },
  { id: "p20", name: "Atlanta PVC Pipe Schedule 40 (2\" x 6m)", brand: "Atlanta", category: "Plumbing", unit: "piece", image: "🔧", description: "Schedule 40 PVC pipe for drainage.", specifications: ["Diameter: 2 inch", "Length: 6m", "Schedule: 40", "Standard: PNS 65:2020"] },
  { id: "p21", name: "Diplast PVC Pipe Schedule 40 (1\" x 6m)", brand: "Diplast", category: "Plumbing", unit: "piece", image: "🔧", description: "Schedule 40 PVC pipe. Made in Philippines.", specifications: ["Diameter: 1 inch", "Length: 6m", "Schedule: 40", "Standard: PNS 65:2020"] },

  // PLUMBING - Fixtures
  { id: "p22", name: "TOTO Entrada One-Piece Toilet", brand: "TOTO", category: "Plumbing", unit: "piece", image: "🚽", description: "Japanese brand. Water-saving toilet.", specifications: ["Type: One-Piece", "Flush: 4.8L", "Rough-in: 305mm", "Standard: PNS 2065"] },
  { id: "p23", name: "Kohler Highline Toilet", brand: "Kohler", category: "Plumbing", unit: "piece", image: "🚽", description: "American brand. Comfort height toilet.", specifications: ["Type: Two-Piece", "Flush: 6L", "Rough-in: 305mm", "Standard: PNS 2065"] },
  { id: "p24", name: "American Standard Acacia SupaLite Toilet", brand: "American Standard", category: "Plumbing", unit: "piece", image: "🚽", description: "Water-saving dual flush.", specifications: ["Type: One-Piece", "Flush: 3/6L Dual", "Rough-in: 305mm", "Standard: PNS 2065"] },
  { id: "p25", name: "HCG Wall Hung Toilet", brand: "HCG", category: "Plumbing", unit: "piece", image: "🚽", description: "Taiwan brand. Space-saving wall mount.", specifications: ["Type: Wall Hung", "Flush: 3/6L Dual", "Rough-in: Concealed", "Standard: PNS 2065"] },

  // FLOORING - Tiles
  { id: "p26", name: "Mariwasa Floor Tile (60x60cm)", brand: "Mariwasa", category: "Flooring", unit: "piece", image: "🪟", description: "Ceramic floor tile. #1 tile brand in Philippines.", specifications: ["Size: 60x60cm", "Type: Ceramic", "Finish: Matte", "Standard: PNS ISO 13006"] },
  { id: "p27", name: "FC Tile Depot Porcelain Tile (60x60cm)", brand: "FC Tile Depot", category: "Flooring", unit: "piece", image: "🪟", description: "Porcelain floor tile. Wide selection.", specifications: ["Size: 60x60cm", "Type: Porcelain", "Finish: Polished", "Standard: PNS ISO 13006"] },
  { id: "p28", name: "Johnson Tiles Ceramic Floor (30x30cm)", brand: "Johnson Tiles", category: "Flooring", unit: "piece", image: "🪟", description: "Ceramic floor tile. Malaysian brand.", specifications: ["Size: 30x30cm", "Type: Ceramic", "Finish: Glossy", "Standard: PNS ISO 13006"] },

  // ROOFING
  { id: "p29", name: "Puyat Steel GI Corrugated Sheet (0.4mm)", brand: "Puyat Steel", category: "Roofing", unit: "sheet", image: "🏠", description: "Galvanized iron roofing. Longest running PH steel company.", specifications: ["Thickness: 0.4mm", "Length: 8 ft", "Width: 2.5 ft", "Type: Corrugated"] },
  { id: "p30", name: "Colorsteel Prepainted Roofing (0.4mm)", brand: "Colorsteel", category: "Roofing", unit: "sheet", image: "🏠", description: "Prepainted galvanized roofing sheet.", specifications: ["Thickness: 0.4mm", "Length: 8 ft", "Width: 2.5 ft", "Type: Corrugated"] },
  { id: "p31", name: "Alsons GI Roofing Sheet (0.5mm)", brand: "Alsons", category: "Roofing", unit: "sheet", image: "🏠", description: "Heavy gauge GI roofing. Mindanao-based.", specifications: ["Thickness: 0.5mm", "Length: 10 ft", "Width: 2.5 ft", "Type: Corrugated"] },

  // GLASS
  { id: "p32", name: "Asahi Glass Tempered (5mm, 4x8 ft)", brand: "Asahi Glass", category: "Glass", unit: "sheet", image: "🪟", description: "Tempered glass. Japanese quality.", specifications: ["Thickness: 5mm", "Size: 4x8 ft", "Type: Tempered", "Standard: PNS 122"] },
  { id: "p33", name: "Pilkington Float Glass (6mm, 4x8 ft)", brand: "Pilkington", category: "Glass", unit: "sheet", image: "🪟", description: "Clear float glass. NSG Group.", specifications: ["Thickness: 6mm", "Size: 4x8 ft", "Type: Float", "Standard: PNS 122"] },

  // LUMBER/PLYWOOD
  { id: "p34", name: "Marine Plywood (12mm, 4x8 ft)", brand: "Various", category: "Lumber", unit: "sheet", image: "🪵", description: "Marine-grade hardwood plywood for formwork.", specifications: ["Thickness: 12mm", "Size: 4x8 ft", "Grade: Marine", "Core: Hardwood"] },
  { id: "p35", name: "Ordinary Plywood (12mm, 4x8 ft)", brand: "Various", category: "Lumber", unit: "sheet", image: "🪵", description: "Ordinary plywood for general use.", specifications: ["Thickness: 12mm", "Size: 4x8 ft", "Grade: Ordinary", "Core: Mixed"] },

  // AGGREGATES
  { id: "p36", name: "River Sand (1 cu.m)", brand: "Local", category: "Aggregates", unit: "cubic meter", image: "⏳", description: "Clean river sand for mortar and plastering.", specifications: ["Type: River Sand", "Fineness Modulus: 2.4-2.8", "Standard: PNS ASTM C33"] },
  { id: "p37", name: "Gravel 3/4\" (1 cu.m)", brand: "Local", category: "Aggregates", unit: "cubic meter", image: "🪨", description: "Crushed gravel for concrete mixing.", specifications: ["Size: 3/4 inch (19mm)", "Type: Crushed", "Standard: PNS ASTM C33"] },

  // MASONRY
  { id: "p38", name: "Concrete Hollow Block 4\" (piece)", brand: "Local", category: "Masonry", unit: "piece", image: "🧱", description: "Non-load bearing CHB for partitions.", specifications: ["Size: 4x8x16 inch", "Type: Non-load bearing", "Compressive Strength: 5 MPa"] },
  { id: "p39", name: "Concrete Hollow Block 6\" (piece)", brand: "Local", category: "Masonry", unit: "piece", image: "🧱", description: "Load bearing CHB for walls.", specifications: ["Size: 6x8x16 inch", "Type: Load bearing", "Compressive Strength: 7.5 MPa"] },

  // INSULATION
  { id: "p40", name: "Isowool Fiberglass Insulation (1\" thick)", brand: "Isowool", category: "Insulation", unit: "roll", image: "🧊", description: "Fiberglass insulation for roofs and walls.", specifications: ["Thickness: 1 inch", "Width: 2 ft", "Length: 25 ft", "R-Value: R-4"] },
];

export const prices: ProductPrice[] = [
  // CEMENT PRICES
  { productId: "p1", supplierId: "s6", price: 255, deliveryFee: 200, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 100+ bags", lastUpdated: "2026-07-22" },
  { productId: "p1", supplierId: "s1", price: 265, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 50+ bags", lastUpdated: "2026-07-22" },
  { productId: "p1", supplierId: "s2", price: 268, deliveryFee: 160, deliveryDays: 1, inStock: true, bulkDiscount: "3% off 50+ bags", lastUpdated: "2026-07-21" },
  { productId: "p2", supplierId: "s7", price: 248, deliveryFee: 300, deliveryDays: 2, inStock: true, bulkDiscount: "8% off 200+ bags", lastUpdated: "2026-07-22" },
  { productId: "p2", supplierId: "s1", price: 260, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 100+ bags", lastUpdated: "2026-07-22" },
  { productId: "p3", supplierId: "s12", price: 252, deliveryFee: 220, deliveryDays: 1, inStock: true, bulkDiscount: "7% off 200+ bags", lastUpdated: "2026-07-22" },
  { productId: "p3", supplierId: "s1", price: 262, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 50+ bags", lastUpdated: "2026-07-22" },
  { productId: "p4", supplierId: "s8", price: 260, deliveryFee: 180, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 150+ bags", lastUpdated: "2026-07-21" },
  { productId: "p4", supplierId: "s2", price: 270, deliveryFee: 160, deliveryDays: 2, inStock: true, bulkDiscount: "3% off 50+ bags", lastUpdated: "2026-07-22" },

  // STEEL PRICES
  { productId: "p5", supplierId: "s5", price: 265, deliveryFee: 120, deliveryDays: 1, inStock: true, bulkDiscount: "7% off 500+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p5", supplierId: "s1", price: 285, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 200+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p5", supplierId: "s2", price: 290, deliveryFee: 160, deliveryDays: 2, inStock: true, bulkDiscount: "3% off 100+ pcs", lastUpdated: "2026-07-21" },
  { productId: "p6", supplierId: "s5", price: 375, deliveryFee: 120, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 300+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p6", supplierId: "s1", price: 395, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 200+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p7", supplierId: "s5", price: 680, deliveryFee: 120, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 200+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p8", supplierId: "s1", price: 275, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 200+ pcs", lastUpdated: "2026-07-22" },

  // ELECTRICAL PRICES
  { productId: "p9", supplierId: "s1", price: 2850, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 10+ rolls", lastUpdated: "2026-07-22" },
  { productId: "p9", supplierId: "s2", price: 2900, deliveryFee: 160, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 10+ rolls", lastUpdated: "2026-07-22" },
  { productId: "p10", supplierId: "s1", price: 2650, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 15+ rolls", lastUpdated: "2026-07-22" },
  { productId: "p11", supplierId: "s2", price: 3200, deliveryFee: 160, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 10+ rolls", lastUpdated: "2026-07-22" },
  { productId: "p12", supplierId: "s1", price: 85, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "10% off 50+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p13", supplierId: "s1", price: 145, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "8% off 30+ pcs", lastUpdated: "2026-07-22" },

  // PAINT PRICES
  { productId: "p14", supplierId: "s9", price: 650, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 20+ gal", lastUpdated: "2026-07-22" },
  { productId: "p14", supplierId: "s1", price: 680, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 15+ gal", lastUpdated: "2026-07-22" },
  { productId: "p14", supplierId: "s2", price: 695, deliveryFee: 160, deliveryDays: 1, inStock: true, bulkDiscount: "3% off 10+ gal", lastUpdated: "2026-07-21" },
  { productId: "p15", supplierId: "s9", price: 720, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 15+ gal", lastUpdated: "2026-07-22" },
  { productId: "p16", supplierId: "s1", price: 620, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 20+ gal", lastUpdated: "2026-07-22" },
  { productId: "p17", supplierId: "s1", price: 750, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "4% off 10+ gal", lastUpdated: "2026-07-22" },
  { productId: "p18", supplierId: "s9", price: 850, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 10+ gal", lastUpdated: "2026-07-22" },

  // PLUMBING PRICES
  { productId: "p19", supplierId: "s1", price: 185, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 50+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p19", supplierId: "s2", price: 180, deliveryFee: 160, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 80+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p20", supplierId: "s1", price: 320, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 30+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p21", supplierId: "s4", price: 175, deliveryFee: 180, deliveryDays: 2, inStock: true, bulkDiscount: "7% off 100+ pcs", lastUpdated: "2026-07-21" },
  { productId: "p22", supplierId: "s1", price: 12500, deliveryFee: 500, deliveryDays: 3, inStock: true, bulkDiscount: "3% off 5+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p23", supplierId: "s1", price: 15800, deliveryFee: 500, deliveryDays: 3, inStock: true, bulkDiscount: "3% off 5+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p24", supplierId: "s11", price: 18500, deliveryFee: 500, deliveryDays: 3, inStock: true, bulkDiscount: "4% off 3+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p25", supplierId: "s11", price: 22000, deliveryFee: 500, deliveryDays: 3, inStock: true, bulkDiscount: "3% off 3+ pcs", lastUpdated: "2026-07-22" },

  // FLOORING PRICES
  { productId: "p26", supplierId: "s1", price: 185, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "8% off 100+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p26", supplierId: "s2", price: 175, deliveryFee: 160, deliveryDays: 1, inStock: true, bulkDiscount: "10% off 150+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p27", supplierId: "s1", price: 280, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 80+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p28", supplierId: "s3", price: 165, deliveryFee: 200, deliveryDays: 2, inStock: true, bulkDiscount: "8% off 100+ pcs", lastUpdated: "2026-07-22" },

  // ROOFING PRICES
  { productId: "p29", supplierId: "s1", price: 510, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 50+ sheets", lastUpdated: "2026-07-22" },
  { productId: "p29", supplierId: "s2", price: 490, deliveryFee: 160, deliveryDays: 2, inStock: true, bulkDiscount: "6% off 40+ sheets", lastUpdated: "2026-07-21" },
  { productId: "p30", supplierId: "s1", price: 580, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 40+ sheets", lastUpdated: "2026-07-22" },
  { productId: "p31", supplierId: "s10", price: 470, deliveryFee: 300, deliveryDays: 3, inStock: true, bulkDiscount: "8% off 100+ sheets", lastUpdated: "2026-07-22" },

  // GLASS PRICES
  { productId: "p32", supplierId: "s1", price: 1200, deliveryFee: 200, deliveryDays: 2, inStock: true, bulkDiscount: "5% off 20+ sheets", lastUpdated: "2026-07-22" },
  { productId: "p33", supplierId: "s11", price: 1350, deliveryFee: 200, deliveryDays: 2, inStock: true, bulkDiscount: "4% off 15+ sheets", lastUpdated: "2026-07-22" },

  // LUMBER PRICES
  { productId: "p34", supplierId: "s1", price: 850, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 50+ sheets", lastUpdated: "2026-07-22" },
  { productId: "p34", supplierId: "s4", price: 820, deliveryFee: 180, deliveryDays: 2, inStock: true, bulkDiscount: "6% off 30+ sheets", lastUpdated: "2026-07-21" },
  { productId: "p35", supplierId: "s1", price: 580, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 50+ sheets", lastUpdated: "2026-07-22" },

  // AGGREGATE PRICES
  { productId: "p36", supplierId: "s1", price: 1450, deliveryFee: 400, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 30+ cu.m", lastUpdated: "2026-07-21" },
  { productId: "p36", supplierId: "s2", price: 1400, deliveryFee: 350, deliveryDays: 2, inStock: true, bulkDiscount: "6% off 25+ cu.m", lastUpdated: "2026-07-22" },
  { productId: "p37", supplierId: "s1", price: 1350, deliveryFee: 400, deliveryDays: 1, inStock: true, bulkDiscount: "5% off 30+ cu.m", lastUpdated: "2026-07-20" },
  { productId: "p37", supplierId: "s2", price: 1280, deliveryFee: 350, deliveryDays: 2, inStock: true, bulkDiscount: "7% off 40+ cu.m", lastUpdated: "2026-07-22" },

  // MASONRY PRICES
  { productId: "p38", supplierId: "s1", price: 14, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "10% off 1000+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p38", supplierId: "s2", price: 13.5, deliveryFee: 160, deliveryDays: 1, inStock: true, bulkDiscount: "8% off 500+ pcs", lastUpdated: "2026-07-21" },
  { productId: "p38", supplierId: "s3", price: 12.5, deliveryFee: 200, deliveryDays: 2, inStock: true, bulkDiscount: "12% off 2000+ pcs", lastUpdated: "2026-07-22" },
  { productId: "p39", supplierId: "s1", price: 18, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "10% off 800+ pcs", lastUpdated: "2026-07-22" },

  // INSULATION PRICES
  { productId: "p40", supplierId: "s1", price: 1250, deliveryFee: 150, deliveryDays: 1, inStock: true, bulkDiscount: "6% off 10+ rolls", lastUpdated: "2026-07-22" },
  { productId: "p40", supplierId: "s2", price: 1180, deliveryFee: 160, deliveryDays: 2, inStock: true, bulkDiscount: "8% off 15+ rolls", lastUpdated: "2026-07-22" },
];

export const certifications: Certification[] = [
  {
    id: "c1",
    code: "BS-CERT-2026-00142",
    productName: "Republic Portland Cement (40kg)",
    brand: "Republic Cement",
    standard: "PNS 07:2020",
    issuedDate: "2026-01-15",
    expiryDate: "2027-01-15",
    status: "valid",
    batchNumber: "RC-2026-0715-001",
    testResults: [
      { property: "Compressive Strength (28 days)", value: "44.2 MPa", standard: "≥42.5 MPa", pass: true },
      { property: "Setting Time (Initial)", value: "145 min", standard: "≥60 min", pass: true },
      { property: "Fineness", value: "335 m²/kg", standard: "≥300 m²/kg", pass: true },
      { property: "Soundness", value: "0.8 mm", standard: "≤10 mm", pass: true },
    ],
  },
  {
    id: "c2",
    code: "BS-CERT-2026-00287",
    productName: "SteelAsia Deformed Bar (10mm)",
    brand: "SteelAsia",
    standard: "PNS 49:2020",
    issuedDate: "2026-03-10",
    expiryDate: "2027-03-10",
    status: "valid",
    batchNumber: "SA-2026-0620-012",
    testResults: [
      { property: "Yield Strength", value: "485 MPa", standard: "≥400 MPa", pass: true },
      { property: "Tensile Strength", value: "620 MPa", standard: "≥480 MPa", pass: true },
      { property: "Elongation", value: "18%", standard: "≥14%", pass: true },
      { property: "Bend Test", value: "No cracks", standard: "No cracks", pass: true },
    ],
  },
  {
    id: "c3",
    code: "BS-CERT-2025-00098",
    productName: "Mariwasa Floor Tile (60x60cm)",
    brand: "Mariwasa",
    standard: "PNS ISO 13006",
    issuedDate: "2025-06-01",
    expiryDate: "2026-06-01",
    status: "expired",
    batchNumber: "MW-2025-1201-005",
    testResults: [
      { property: "Breaking Strength", value: "1350 N", standard: "≥1300 N", pass: true },
      { property: "Water Absorption", value: "0.08%", standard: "≤0.5%", pass: true },
      { property: "Slip Resistance", value: "R10", standard: "≥R9", pass: true },
    ],
  },
  {
    id: "c4",
    code: "BS-CERT-2026-00356",
    productName: "Boysen Flat Latex (1 gallon)",
    brand: "Boysen",
    standard: "PNS 198:2015",
    issuedDate: "2026-04-01",
    expiryDate: "2027-04-01",
    status: "valid",
    batchNumber: "BN-2026-0625-003",
    testResults: [
      { property: "VOC Content", value: "28 g/L", standard: "≤50 g/L", pass: true },
      { property: "Hiding Power", value: "98.5%", standard: "≥95%", pass: true },
      { property: "Dry Time", value: "1.5 hours", standard: "≤2 hours", pass: true },
      { property: "Adhesion", value: "5B", standard: "≥4B", pass: true },
    ],
  },
  {
    id: "c5",
    code: "BS-CERT-2026-00401",
    productName: "Eagle Cement Type 1P (40kg)",
    brand: "Eagle Cement",
    standard: "PNS 07:2020",
    issuedDate: "2026-05-20",
    expiryDate: "2027-05-20",
    status: "valid",
    batchNumber: "EC-2026-0710-008",
    testResults: [
      { property: "Compressive Strength (28 days)", value: "46.1 MPa", standard: "≥42.5 MPa", pass: true },
      { property: "Setting Time (Initial)", value: "130 min", standard: "≥60 min", pass: true },
      { property: "Fineness", value: "342 m²/kg", standard: "≥300 m²/kg", pass: true },
      { property: "Soundness", value: "0.6 mm", standard: "≤10 mm", pass: true },
    ],
  },
  {
    id: "c6",
    code: "BS-CERT-2026-00512",
    productName: "Neltex PVC Pipe Schedule 40 (1\")",
    brand: "Neltex",
    standard: "PNS 65:2020",
    issuedDate: "2026-02-15",
    expiryDate: "2027-02-15",
    status: "valid",
    batchNumber: "NX-2026-0520-007",
    testResults: [
      { property: "Tensile Strength", value: "52 MPa", standard: "≥48 MPa", pass: true },
      { property: "Impact Resistance", value: "Pass", standard: "No fracture", pass: true },
      { property: "Dimensional Stability", value: "±0.3%", standard: "≤±1%", pass: true },
    ],
  },
  {
    id: "c7",
    code: "BS-CERT-2026-00634",
    productName: "Phelps Dodge THHN Wire (2.0mm²)",
    brand: "Phelps Dodge",
    standard: "PNS 35-1",
    issuedDate: "2026-03-01",
    expiryDate: "2027-03-01",
    status: "valid",
    batchNumber: "PD-2026-0410-011",
    testResults: [
      { property: "Conductor Resistance", value: "8.21 Ω/km", standard: "≤9.01 Ω/km", pass: true },
      { property: "Insulation Thickness", value: "0.8mm", standard: "≥0.76mm", pass: true },
      { property: "Voltage Withstand", value: "Pass at 2kV", standard: "No breakdown", pass: true },
    ],
  },
];

export const regions = ["All Regions", "NCR", "Luzon", "Visayas", "Mindanao"];
export const categories = [
  "All Categories",
  "Cement",
  "Steel",
  "Electrical",
  "Paint",
  "Plumbing",
  "Flooring",
  "Roofing",
  "Glass",
  "Lumber",
  "Aggregates",
  "Masonry",
  "Insulation",
];
