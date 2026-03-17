export const WHATSAPP_NUMBER = "5076905939";
export const WHATSAPP_DISPLAY = "+507 6905-9397";
export const INSTAGRAM_HANDLE = "@autofanatics_panama";
export const INSTAGRAM_URL = "https://www.instagram.com/autofanatics_panama/";
export const BUSINESS_NAME = "Auto Fanatics Panama";
export const BUSINESS_ADDRESS = "Costa del Este, Ciudad de Panamá";
export const BUSINESS_HOURS = "Lun - Sáb: 8:00 AM - 6:00 PM";

export const SECTION_IDS = {
  hero: "inicio",
  services: "servicios",
  gallery: "galeria",
  process: "proceso",
  whyUs: "nosotros",
  contact: "contacto",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: `#${SECTION_IDS.hero}` },
  { label: "Servicios", href: `#${SECTION_IDS.services}` },
  { label: "Galería", href: `#${SECTION_IDS.gallery}` },
  { label: "Proceso", href: `#${SECTION_IDS.process}` },
  { label: "Contacto", href: `#${SECTION_IDS.contact}` },
];

export const SERVICES = [
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description:
      "Protección cerámica profesional IGL Coatings con hasta 5 años de durabilidad. Brillo profundo y protección contra rayones, UV y contaminantes.",
    icon: "Shield" as const,
    featured: true,
    whatsappMessage: "Hola! Me interesa el servicio de Ceramic Coating.",
  },
  {
    id: "detailing",
    title: "Detailing Interior & Exterior",
    description:
      "Limpieza profunda y restauración completa del interior y exterior de tu vehículo. Dejamos tu auto como nuevo.",
    icon: "Sparkles" as const,
    featured: false,
    whatsappMessage: "Hola! Me interesa el servicio de Detailing.",
  },
  {
    id: "paint-correction",
    title: "Corrección de Pintura",
    description:
      "Eliminamos swirls, rayones y oxidación para restaurar el acabado original de tu pintura con técnicas profesionales.",
    icon: "Paintbrush" as const,
    featured: false,
    whatsappMessage: "Hola! Me interesa el servicio de Corrección de Pintura.",
  },
  {
    id: "window-tint",
    title: "Papel Ahumado",
    description:
      "Instalación profesional de láminas de control solar de alta calidad. Protección UV y privacidad para tu vehículo.",
    icon: "Sun" as const,
    featured: false,
    whatsappMessage: "Hola! Me interesa el servicio de Papel Ahumado.",
  },
  {
    id: "body-paint",
    title: "Chapistería & Pintura",
    description:
      "Reparación y pintura profesional de carrocería. Acabados perfectos con materiales de primera calidad.",
    icon: "Car" as const,
    featured: false,
    whatsappMessage: "Hola! Me interesa el servicio de Chapistería y Pintura.",
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Inspección",
    description: "Evaluamos el estado actual de tu vehículo y definimos el plan de trabajo.",
    icon: "Search" as const,
  },
  {
    number: 2,
    title: "Preparación",
    description: "Lavado profesional y descontaminación completa de todas las superficies.",
    icon: "Droplets" as const,
  },
  {
    number: 3,
    title: "Corrección",
    description: "Pulido y corrección de imperfecciones para un acabado perfecto.",
    icon: "Wrench" as const,
  },
  {
    number: 4,
    title: "Protección",
    description: "Aplicación de ceramic coating o sellador de alta durabilidad.",
    icon: "ShieldCheck" as const,
  },
  {
    number: 5,
    title: "Entrega",
    description: "Inspección final y entrega con garantía de satisfacción.",
    icon: "CheckCircle" as const,
  },
];

export const WHY_US_FEATURES = [
  {
    title: "Certificados en Detailing Profesional",
    description: "Formación y certificación internacional en técnicas avanzadas de detailing automotriz.",
    icon: "Award" as const,
  },
  {
    title: "Distribuidores Autorizados IGL Coatings",
    description: "Somos distribuidores oficiales de IGL Coatings, líder mundial en protección cerámica.",
    icon: "BadgeCheck" as const,
  },
  {
    title: "Productos y Técnicas Premium",
    description: "Utilizamos solo productos y herramientas de la más alta calidad del mercado.",
    icon: "Gem" as const,
  },
  {
    title: "Ubicación en Costa del Este",
    description: "Estudio profesional en una de las mejores zonas de la Ciudad de Panamá.",
    icon: "MapPin" as const,
  },
];
