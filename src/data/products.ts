export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  warranty: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "cisco-c9300-24t",
    name: "Cisco Catalyst 9300-24T",
    category: "سويتشات",
    brand: "Cisco",
    price: 12500,
    originalPrice: 15000,
    description: "سويتش ذكي احترافي من سيسكو مع 24 منفذ جيجابت إيثرنت، مصمم للشركات الصغيرة والمتوسطة مع إدارة متقدمة وأمان عالي.",
    features: [
      "24 منفذ جيجابت إيثرنت",
      "دعم PoE+ بقوة 370 واط",
      "إدارة VLAN متقدمة",
      "حماية أمنية متكاملة",
      "واجهة إدارة ويب سهلة",
      "دعم التحديثات التلقائية"
    ],
    specifications: {
      "المنافذ": "24 x 1GbE + 4 x 10GbE SFP+",
      "الطاقة": "370W PoE+",
      "الأبعاد": "44.5 x 44.5 x 4.4 سم",
      "الوزن": "5.5 كجم",
      "استهلاك الطاقة": "120 واط",
      "درجة الحرارة": "0°C إلى 45°C",
      "الرطوبة": "10% إلى 85%"
    },
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    ],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    warranty: "3 سنوات",
    tags: ["جديد", "الأكثر مبيعاً", "موصى به"]
  },
  {
    id: "ubiquiti-udm-pro",
    name: "Ubiquiti UniFi Dream Machine Pro",
    category: "راوترات",
    brand: "Ubiquiti",
    price: 8750,
    description: "راوتر احترافي متكامل مع فايرول وسيرفر كلاود مدمج، مثالي للشركات والمنازل الذكية الكبيرة.",
    features: [
      "راوتر وفايرول في جهاز واحد",
      "8 منافذ جيجابت إيثرنت",
      "دعم WiFi 6 (اختياري)",
      "مراقبة الشبكة في الوقت الفعلي",
      "VPN مدمج",
      "حماية من التهديدات المتقدمة"
    ],
    specifications: {
      "المعالج": "Quad-core ARM Cortex-A57 1.7GHz",
      "الذاكرة": "4GB DDR4",
      "التخزين": "128GB SSD",
      "المنافذ": "8 x GbE + 2 x 10G SFP+",
      "الأبعاد": "44.2 x 28.5 x 8.9 سم",
      "الوزن": "4.2 كجم",
      "استهلاك الطاقة": "65 واط"
    },
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
    ],
    inStock: true,
    rating: 4.9,
    reviews: 89,
    warranty: "سنتان",
    tags: ["جديد", "احترافي"]
  },
  {
    id: "fortinet-60f",
    name: "Fortinet FortiGate 60F",
    category: "فايرول",
    brand: "Fortinet",
    price: 18500,
    originalPrice: 22000,
    description: "فايرول احترافي للشركات الصغيرة والمتوسطة مع حماية شاملة ضد التهديدات السيبرانية وأداء عالي.",
    features: [
      "حماية شاملة من التهديدات",
      "VPN SSL و IPSec",
      "فحص حركة البيانات المشفرة",
      "حماية من البرمجيات الخبيثة",
      "مراقبة التطبيقات",
      "تقارير أمنية مفصلة"
    ],
    specifications: {
      "الأداء": "10 Gbps Firewall",
      "المنافذ": "7 x GbE + 2 x SFP",
      "المستخدمين": "200 مستخدم",
      "VPN": "100 نفق IPSec",
      "الأبعاد": "20.5 x 13.1 x 3.2 سم",
      "الوزن": "1.4 كجم",
      "استهلاك الطاقة": "18 واط"
    },
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    ],
    inStock: true,
    rating: 4.7,
    reviews: 203,
    warranty: "3 سنوات",
    tags: ["عرض خاص", "موصى به"]
  },
  {
    id: "hp-dl380-gen10",
    name: "HP ProLiant DL380 Gen10",
    category: "خوادم",
    brand: "HP",
    price: 35000,
    description: "خادم احترافي للمؤسسات الكبيرة مع أداء استثنائي وموثوقية عالية لتطبيقات الأعمال الحرجة.",
    features: [
      "معالج Intel Xeon مزدوج",
      "ذاكرة DDR4 قابلة للتوسع",
      "أقراص SSD فائقة السرعة",
      "إدارة عن بُعد مدمجة",
      "نسخ احتياطية تلقائية",
      "دعم فني على مدار الساعة"
    ],
    specifications: {
      "المعالج": "2x Intel Xeon Gold 5218",
      "الذاكرة": "32GB DDR4 (قابل للتوسع إلى 3TB)",
      "التخزين": "4x 1TB SSD",
      "الشبكة": "4 x 1GbE",
      "الأبعاد": "86.8 x 44.8 x 6.9 سم",
      "الوزن": "28 كجم",
      "الطاقة": "800W مزدوج"
    },
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop"
    ],
    inStock: true,
    rating: 4.6,
    reviews: 67,
    warranty: "5 سنوات",
    tags: ["احترافي", "مؤسسات"]
  },
  {
    id: "mikrotik-ccr1009",
    name: "MikroTik Cloud Core Router CCR1009",
    category: "راوترات",
    brand: "MikroTik",
    price: 6500,
    description: "راوتر احترافي عالي الأداء مع 8 منافذ جيجابت ومعالج قوي، مثالي لمقدمي خدمات الإنترنت والشركات.",
    features: [
      "معالج 9 أنوية",
      "8 منافذ جيجابت إيثرنت",
      "RouterOS المتقدم",
      "دعم MPLS",
      "QoS متقدم",
      "مراقبة الشبكة"
    ],
    specifications: {
      "المعالج": "Tilera TILE-Gx9 @ 1.2GHz",
      "الذاكرة": "2GB DDR3",
      "التخزين": "128MB NAND",
      "المنافذ": "8 x GbE + 1 x SFP+",
      "الأبعاد": "44.3 x 14.5 x 4.4 سم",
      "الوزن": "1.8 كجم",
      "استهلاك الطاقة": "35 واط"
    },
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
    ],
    inStock: true,
    rating: 4.5,
    reviews: 124,
    warranty: "سنتان",
    tags: ["عالي الأداء"]
  },
  {
    id: "aruba-6100-24g",
    name: "Aruba 6100 24G",
    category: "سويتشات",
    brand: "Aruba",
    price: 4200,
    originalPrice: 5000,
    description: "سويتش ذكي مُدار مع 24 منفذ جيجابت، مصمم للشبكات الحديثة مع إدارة سحابية وأمان متقدم.",
    features: [
      "24 منفذ جيجابت إيثرنت",
      "إدارة سحابية",
      "أمان متقدم مدمج",
      "دعم PoE",
      "واجهة ويب حديثة",
      "تحديثات تلقائية"
    ],
    specifications: {
      "المنافذ": "24 x 1GbE + 4 x SFP+",
      "PoE": "370W PoE+",
      "الجدول": "16K MAC addresses",
      "الأبعاد": "44.0 x 20.0 x 4.3 سم",
      "الوزن": "3.5 كجم",
      "استهلاك الطاقة": "45 واط",
      "درجة الحرارة": "0°C إلى 50°C"
    },
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    ],
    inStock: false,
    rating: 4.4,
    reviews: 78,
    warranty: "مدى الحياة المحدود",
    tags: ["عرض خاص", "نفذت الكمية"]
  }
];

export const categories = [
  "الكل",
  "راوترات", 
  "سويتشات",
  "فايرول",
  "خوادم"
];

export const brands = [
  "الكل",
  "Cisco",
  "Ubiquiti", 
  "Fortinet",
  "HP",
  "MikroTik",
  "Aruba"
];