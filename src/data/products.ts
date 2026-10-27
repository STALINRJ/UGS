export type Condition = 'Brand New' | 'Refurbished' | 'Pre-owned';
export interface Spec { label: string; value: string }
export interface Product {
  title: string; cat: string; img: string; tag: string; group?: string;
  condition?: Condition; description: string; specs: Spec[];
  features: string[]; applications: string[]; gallery: string[];
}

// Catalogue follows the supplied archive folders. Unidentified spares are grouped,
// rather than assigning unverified model names or technical specifications.
export const products: Product[] = [
  {
    "title": "Offset Blanket",
    "cat": "CONSUMABLES",
    "img": "/catalogue/Products/CONSUMABLES/Offset%20Blanket.jpg.webp",
    "tag": "CONSUMABLES",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CONSUMABLES/Offset%20Blanket.jpg.webp"
    ]
  },
  {
    "title": "CRON CTP — H Series",
    "cat": "CTP",
    "img": "/catalogue/Products/CTP/New%20CRON/CRON%20CTP-%20H%20Series.jpg.webp",
    "tag": "New CRON",
    "group": "New CRON",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CTP/New%20CRON/CRON%20CTP-%20H%20Series.jpg.webp"
    ],
    "condition": "Brand New"
  },
  {
    "title": "CRON CTP",
    "cat": "CTP",
    "img": "/catalogue/Products/CTP/New%20CRON/CRON.jpg.webp",
    "tag": "New CRON",
    "group": "New CRON",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CTP/New%20CRON/CRON.jpg.webp"
    ],
    "condition": "Brand New"
  },
  {
    "title": "Agfa Advantage N DL",
    "cat": "CTP",
    "img": "/catalogue/Products/CTP/Pre-owned%20equipments/Agfa%20Advantage%20N%20DL.jpg.webp",
    "tag": "Pre-owned equipment",
    "group": "Pre-owned equipment",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CTP/Pre-owned%20equipments/Agfa%20Advantage%20N%20DL.jpg.webp"
    ],
    "condition": "Pre-owned"
  },
  {
    "title": "Agfa Advantage N",
    "cat": "CTP",
    "img": "/catalogue/Products/CTP/Pre-owned%20equipments/Agfa%20Advantage%20N.jpg.webp",
    "tag": "Pre-owned equipment",
    "group": "Pre-owned equipment",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CTP/Pre-owned%20equipments/Agfa%20Advantage%20N.jpg.webp"
    ],
    "condition": "Pre-owned"
  },
  {
    "title": "ECRM CTP",
    "cat": "CTP",
    "img": "/catalogue/Products/CTP/Pre-owned%20equipments/ECRM.jpeg.webp",
    "tag": "Pre-owned equipment",
    "group": "Pre-owned equipment",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CTP/Pre-owned%20equipments/ECRM.jpeg.webp"
    ],
    "condition": "Pre-owned"
  },
  {
    "title": "FUJIFILM CTP",
    "cat": "CTP",
    "img": "/catalogue/Products/CTP/Pre-owned%20equipments/FUJIFILM-1.jpg.webp",
    "tag": "Pre-owned equipment",
    "group": "Pre-owned equipment",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CTP/Pre-owned%20equipments/FUJIFILM-1.jpg.webp"
    ],
    "condition": "Pre-owned"
  },
  {
    "title": "SCREEN CTP",
    "cat": "CTP",
    "img": "/catalogue/Products/CTP/Pre-owned%20equipments/SCREEN%20CTP.jpg.webp",
    "tag": "Pre-owned equipment",
    "group": "Pre-owned equipment",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/CTP/Pre-owned%20equipments/SCREEN%20CTP.jpg.webp"
    ],
    "condition": "Pre-owned"
  },
  {
    "title": "Glunz & Jensen Offset Processor",
    "cat": "PROCESSOR",
    "img": "/catalogue/Products/Processor/GLUNZ%20%26JENSEN%20OFFSET%20PROCESSOR.jpg.webp",
    "tag": "PROCESSOR",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/Processor/GLUNZ%20%26JENSEN%20OFFSET%20PROCESSOR.jpg.webp"
    ]
  },
  {
    "title": "Plate Processor",
    "cat": "PROCESSOR",
    "img": "/catalogue/Products/Processor/hd.jpg.webp",
    "tag": "PROCESSOR",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/Processor/hd.jpg.webp"
    ]
  },
  {
    "title": "RIP Station",
    "cat": "SOFTWARE",
    "img": "/catalogue/Products/Software/RIP%20STATION.jpeg.webp",
    "tag": "SOFTWARE",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/Products/Software/RIP%20STATION.jpeg.webp"
    ]
  },
  {
    "title": "150 Micron Filter",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/150%20micron%20filter.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/150%20micron%20filter.jpg.webp"
    ]
  },
  {
    "title": "Pump — 5520084085",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/5520084085.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/5520084085.jpg.webp"
    ]
  },
  {
    "title": "CAN LD Components",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/can%20LD.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/can%20LD.jpg.webp",
      "/catalogue/spares/can%20LD1.jpg.webp"
    ]
  },
  {
    "title": "Ceramic Heater Tile",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/ceramic%20heater%20tile.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/ceramic%20heater%20tile.jpg.webp"
    ]
  },
  {
    "title": "CTP Plate Processor Brush",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/CTP-Plate-Processor-Brush.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/CTP-Plate-Processor-Brush.jpg.webp"
    ]
  },
  {
    "title": "Heater",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/Heater.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/Heater.jpg.webp"
    ]
  },
  {
    "title": "IWAKI KBR-3XAU3M Bellows Pump",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/NEW-IWAKI-KBR-3XAU3M-BELLOWS-PUMP-KBR3XAU3M-M0560554-10030635-173559119009-2%20%281%29.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/NEW-IWAKI-KBR-3XAU3M-BELLOWS-PUMP-KBR3XAU3M-M0560554-10030635-173559119009-2%20%281%29.jpg.webp"
    ]
  },
  {
    "title": "Processor Drive Components",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/RaptorPlus_Chemfree_gears_4.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/RaptorPlus_Chemfree_gears_4.jpg.webp",
      "/catalogue/spares/rs%3Dw_400%2Ccg_true%2Cm.jpg.webp"
    ]
  },
  {
    "title": "Snap Clips",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/Snap_Black-removebg-preview.png.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/Snap_Black-removebg-preview.png.webp"
    ]
  },
  {
    "title": "Spinner",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/spinner.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/spinner.jpg.webp"
    ]
  },
  {
    "title": "Vacuum Pump",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/vacuum%20pump.jpg.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/vacuum%20pump.jpg.webp"
    ]
  },
  {
    "title": "Additional Processor Spares",
    "cat": "SPARE PARTS",
    "img": "/catalogue/spares/WhatsApp_Image_2026-06-30_at_3.39.20_PM-removebg-preview.png.webp",
    "tag": "SPARE PARTS",
    "group": "",
    "description": "Contact our team for availability, specifications and compatibility.",
    "specs": [],
    "features": [],
    "applications": [],
    "gallery": [
      "/catalogue/spares/WhatsApp_Image_2026-06-30_at_3.39.20_PM-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.48.54_PM-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.27_PM-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.28_PM-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.29_PM__1_-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.30_PM__3_-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.31_PM-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.31_PM__1_-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.32_PM-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.32_PM__1_-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.32_PM__2_-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.32_PM__3_-removebg-preview.png.webp",
      "/catalogue/spares/WhatsApp_Image_2026-07-26_at_1.49.33_PM-removebg-preview.png.webp"
    ]
  }
];

export const categories = ['ALL', 'CTP', 'PROCESSOR', 'CONSUMABLES', 'SOFTWARE', 'SPARE PARTS'];
