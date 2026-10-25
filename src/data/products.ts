export type Condition = 'Brand New' | 'Refurbished';

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  title: string;
  cat: string;
  img: string;
  tag: string;
  condition?: Condition;
  description: string;
  specs: Spec[];
  features: string[];
  applications: string[];
  gallery: string[];
}

export const products: Product[] = [
  {
    title: 'Offset Printing Press',
    cat: 'MACHINES',
    img: 'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'HIGH-SPEED',
    condition: 'Brand New',
    description:
      'A robust, high-speed offset printing press engineered for commercial print shops that demand consistent quality at scale. Designed for long-run jobs with minimal make-ready time and exceptional colour stability across the entire run.',
    specs: [
      { label: 'Max Sheet Size', value: '720 × 1020 mm' },
      { label: 'Max Speed', value: '15,000 sph' },
      { label: 'Colours', value: '4-Colour' },
      { label: 'Substrate', value: '60–400 gsm' },
      { label: 'Plate Type', value: 'Positive Thermal' },
      { label: 'Power', value: '380V / 50Hz' },
    ],
    features: [
      'Automated plate changing system reduces downtime between jobs',
      'Alcohol-free dampening for environmentally responsible operation',
      'Ink-key presetting via CIP3/CIP4 for faster make-ready',
      'Remote diagnostics and real-time press monitoring',
    ],
    applications: [
      'Commercial brochures and catalogues',
      'Magazines and periodicals',
      'Packaging inserts and folding cartons',
      'High-volume promotional materials',
    ],
    gallery: [
      'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/10960792/pexels-photo-10960792.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/37394506/pexels-photo-37394506.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    title: 'CTP Machine',
    cat: 'MACHINES',
    img: 'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'PRECISION',
    condition: 'Refurbished',
    description:
      'A computer-to-plate system that eliminates film from the prepress workflow, delivering sharper dots and faster turnaround. Refurbished to OEM standards with a full performance certification.',
    specs: [
      { label: 'Plate Size', value: '770 × 1030 mm' },
      { label: 'Resolution', value: '2400–2540 dpi' },
      { label: 'Laser', value: '32-channel thermal' },
      { label: 'Throughput', value: '24 plates/hr' },
      { label: 'Interface', value: 'Hot Folder / TIFF' },
      { label: 'Power', value: '230V / 50Hz' },
    ],
    features: [
      'Precise screening for consistent dot reproduction',
      'Automated loading and unloading for unattended operation',
      'Compatible with all major RIP workflows',
      'Low energy consumption and reduced chemical usage',
    ],
    applications: [
      'Newspaper and commercial plate making',
      'On-demand short-run plate production',
      'Prepress service bureaus',
      'In-house prepress departments',
    ],
    gallery: [
      'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19316517/pexels-photo-19316517.png?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6620998/pexels-photo-6620998.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    title: 'Printing Rollers',
    cat: 'SPARE PARTS',
    img: 'https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'OEM SPEC',
    description:
      'Precision-ground printing rollers manufactured to OEM specifications for ink transfer and dampening systems. Built for durability and consistent performance across long production runs.',
    specs: [
      { label: 'Material', value: 'Nitrile / EPDM' },
      { label: 'Diameter Range', value: '50–180 mm' },
      { label: 'Durometer', value: 'Shore A 25–35' },
      { label: 'Surface', value: 'Precision ground' },
      { label: 'Core', value: 'Anodised aluminium' },
      { label: 'Warranty', value: '12 months' },
    ],
    features: [
      'Excellent ink receptivity and transfer for vivid results',
      'Resistant to swelling from inks and wash solvents',
      'Balanced for vibration-free high-speed operation',
      'Available for all major press brands',
    ],
    applications: [
      'Inking and dampening systems',
      'Coating units',
      'Perfecting presses',
      'Specialty UV printing setups',
    ],
    gallery: [
      'https://images.pexels.com/photos/19837529/pexels-photo-19837529.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19316517/pexels-photo-19316517.png?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    title: 'Ink & Coating',
    cat: 'CONSUMABLES',
    img: 'https://images.pexels.com/photos/17536002/pexels-photo-17536002.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'PREMIUM',
    description:
      'A premium range of offset inks and protective coatings formulated for vibrant colour reproduction, fast drying, and excellent rub resistance. Suitable for a wide variety of substrates.',
    specs: [
      { label: 'Ink Type', value: 'Sheetfed offset' },
      { label: 'Colours', value: 'CMYK + spot' },
      { label: 'Viscosity', value: '20–25 Pa·s' },
      { label: 'Drying', value: 'Quick-set oxidative' },
      { label: 'Pack Size', value: '1 kg / 2.5 kg cans' },
      { label: 'Shelf Life', value: '24 months' },
    ],
    features: [
      'High pigment load for outstanding colour strength',
      'Low-VOC formulation for a safer pressroom environment',
      'Excellent water tolerance for stable ink-water balance',
      'Compatible with aqueous and UV coatings',
    ],
    applications: [
      'Commercial print and publishing',
      'Packaging and labels',
      'Premium coated and uncoated stocks',
      'Spot colour and brand-critical jobs',
    ],
    gallery: [
      'https://images.pexels.com/photos/17536002/pexels-photo-17536002.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/23534042/pexels-photo-23534042.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/23534017/pexels-photo-23534017.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/7639358/pexels-photo-7639358.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6661920/pexels-photo-6661920.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    title: 'CTP Plates',
    cat: 'CONSUMABLES',
    img: 'https://images.pexels.com/photos/30617011/pexels-photo-30617011.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'DIGITAL',
    description:
      'High-performance thermal CTP plates engineered for sharp dot reproduction and long run lengths. Processed chemically for excellent resolution and tonal range on both coated and uncoated stocks.',
    specs: [
      { label: 'Type', value: 'Positive thermal' },
      { label: 'Run Length', value: '100,000+ impressions' },
      { label: 'Resolution', value: '1–99% @ 200 lpi' },
      { label: 'Laser Power', value: '120–150 mW' },
      { label: 'Pack Size', value: '100 plates/box' },
      { label: 'Shelf Life', value: '12 months' },
    ],
    features: [
      'Consistent dot reproduction for predictable colour',
      'Wide processing latitude for easy pressroom use',
      'Excellent ink uptake and water holdout',
      'Optimised for UV and conventional inks',
    ],
    applications: [
      'Commercial sheetfed printing',
      'Heatset web offset',
      'Newspaper production',
      'High-quality colour-critical work',
    ],
    gallery: [
      'https://images.pexels.com/photos/30617011/pexels-photo-30617011.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/11687360/pexels-photo-11687360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9704349/pexels-photo-9704349.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/36095234/pexels-photo-36095234.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/32683837/pexels-photo-32683837.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    title: 'Blankets & Sleeves',
    cat: 'SPARE PARTS',
    img: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'AIR-FLOW',
    description:
      'Premium offset printing blankets and sleeves designed for uniform ink transfer, minimal dot gain, and long service life. Available in a range of thicknesses and compressibility ratings.',
    specs: [
      { label: 'Type', value: 'Compressible' },
      { label: 'Thickness', value: '1.95 mm' },
      { label: 'Ply', value: '3-ply' },
      { label: 'Surface', value: 'Ground polymer' },
      { label: 'Size', value: 'Custom cut to spec' },
      { label: 'Warranty', value: '6 months' },
    ],
    features: [
      'Excellent smash recovery for consistent print quality',
      'Low dot gain for sharper halftone reproduction',
      'Resistant to ink solvents and cleaning chemicals',
      'Optimised air-flow design for smooth sheet travel',
    ],
    applications: [
      'Sheetfed offset presses',
      'Web offset presses',
      'UV and conventional ink systems',
      'Coating and varnishing units',
    ],
    gallery: [
      'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/5504775/pexels-photo-5504775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/37271028/pexels-photo-37271028.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/36656828/pexels-photo-36656828.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/34634858/pexels-photo-34634858.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    title: 'Gears & Bearings',
    cat: 'SPARE PARTS',
    img: 'https://images.pexels.com/photos/19911421/pexels-photo-19911421.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'DURABLE',
    description:
      'High-precision gears and bearings manufactured from hardened steel for smooth, reliable power transmission in offset presses. Engineered to exact OEM tolerances for drop-in replacement.',
    specs: [
      { label: 'Material', value: 'Hardened alloy steel' },
      { label: 'Gear Type', value: 'Helical / spur' },
      { label: 'Tolerance', value: 'ISO Grade 6' },
      { label: 'Bearing Type', value: 'Sealed ball / roller' },
      { label: 'Surface', value: 'Carburised & ground' },
      { label: 'Warranty', value: '12 months' },
    ],
    features: [
      'Hardened and ground for long service life',
      'Low-friction bearings reduce heat and wear',
      'Exact OEM dimensions for straightforward retrofit',
      'Available for all major press brands',
    ],
    applications: [
      'Cylinder drive systems',
      'Feeder and delivery mechanisms',
      'Dampening and inking drives',
      'Perfecting cylinder assemblies',
    ],
    gallery: [
      'https://images.pexels.com/photos/19911421/pexels-photo-19911421.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/19658259/pexels-photo-19658259.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/12093450/pexels-photo-12093450.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/16077292/pexels-photo-16077292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  {
    title: 'Fountain Solution',
    cat: 'CONSUMABLES',
    img: 'https://images.pexels.com/photos/8927674/pexels-photo-8927674.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'PRO-GRADE',
    description:
      'A pro-grade fountain solution concentrate that maintains a stable ink-water balance, keeps plates clean, and delivers sharp, scum-free printing across long runs. Suitable for both hard and soft water.',
    specs: [
      { label: 'Type', value: 'Alcohol-substitute' },
      { label: 'pH', value: '4.8–5.5' },
      { label: 'Conductivity', value: '1.2–1.8 mS/cm' },
      { label: 'Dilution', value: '2–4% with water' },
      { label: 'Pack Size', value: '5 / 20 litre' },
      { label: 'Shelf Life', value: '18 months' },
    ],
    features: [
      'Excellent wetting for fast start-up and clean plates',
      'Reduces or eliminates isopropyl alcohol usage',
      'Prevents scumming, tinting, and blinding',
      'Compatible with all positive and negative plates',
    ],
    applications: [
      'Sheetfed and web offset presses',
      'Newspaper printing',
      'Continuous-forms printing',
      'UV ink printing systems',
    ],
    gallery: [
      'https://images.pexels.com/photos/8927674/pexels-photo-8927674.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/38409888/pexels-photo-38409888.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9629683/pexels-photo-9629683.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9629710/pexels-photo-9629710.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8917956/pexels-photo-8917956.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
];

export const categories = ['ALL', 'MACHINES', 'SPARE PARTS', 'CONSUMABLES'];
