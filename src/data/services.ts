import { images } from "./images";

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  image?: string;
  featured?: boolean;
  problem: string;
  howItWorks: string;
  benefits: string[];
  applications: string[];
  related: { label: string; href: string }[];
  cta: string;
};

export const featuredServices: Service[] = [
  {
    id: "vigilancia",
    slug: "vigilancia",
    title: "Vigilancia",
    eyebrow: "Presencia y control",
    heroTitle: "Vigilancia física para la prevención y supervisión",
    metaTitle: "Servicio de Vigilancia para Instalaciones | BÚNKER",
    metaDescription:
      "Elementos de vigilancia presencial para control de accesos, prevención y supervisión de procedimientos en instalaciones corporativas o industriales.",
    description: "Personal para la prevención, control y supervisión en instalaciones.",
    icon: "shield",
    image: images.monitoring,
    featured: true,
    problem:
      "La necesidad de control en accesos, supervisión de visitantes y revisión de procesos internos en las instalaciones.",
    howItWorks:
      "Asignamos personal para ejecutar consignas específicas, que pueden incluir rondines, verificación de identidades o supervisión de ingreso y salida.",
    benefits: [
      "Apoyo presencial en instalaciones.",
      "Seguimiento de reglamentos internos del cliente.",
      "Complemento con tecnologías de monitoreo y CCTV.",
    ],
    applications: [
      "Espacios industriales y bodegas.",
      "Corporativos y oficinas.",
      "Centros de distribución.",
    ],
    related: [
      { label: "Videovigilancia", href: "/servicios/videovigilancia" },
      { label: "Monitoreo", href: "/servicios/monitoreo" },
    ],
    cta: "Solicitar información sobre vigilancia física.",
  },
  {
    id: "custodia",
    slug: "custodia",
    title: "Custodia en tránsito",
    eyebrow: "Acompañamiento logístico",
    heroTitle: "Custodia en tránsito: seguimiento y prevención para tu carga",
    metaTitle: "Custodia de Mercancía en Tránsito a Nivel Nacional | BÚNKER",
    metaDescription:
      "Acompañamiento logístico en carretera con custodia en caja blanca o rotulada para el seguimiento de mercancía en México.",
    description: "Acompañamiento en caja blanca o rotulada para mercancía.",
    icon: "local_shipping",
    image: images.project2,
    featured: true,
    problem:
      "La necesidad de visibilidad física y comunicación constante durante el traslado de mercancías.",
    howItWorks:
      "Se coordina una unidad escolta que sigue protocolos de posicionamiento y reporta avances, paradas y eventualidades a los enlaces designados.",
    benefits: [
      "Presencia constante junto a la unidad de carga.",
      "Seguimiento de protocolos operativos definidos con el cliente.",
      "Modalidad discreta de caja blanca o presencia visual rotulada.",
    ],
    applications: [
      "Mercancía en tránsito a nivel nacional.",
      "Traslados que requieren confirmación visual constante.",
    ],
    related: [
      { label: "GPS y Rastreo", href: "/servicios/gps-rastreo" },
      { label: "Monitoreo", href: "/servicios/monitoreo" },
    ],
    cta: "Consultar servicio de custodia para mis rutas.",
  },
];

export const secondaryServices: Service[] = [
  {
    id: "gps-rastreo",
    slug: "gps-rastreo",
    title: "GPS y Rastreo",
    eyebrow: "Visibilidad logística",
    heroTitle: "Rastreo GPS para seguimiento de flotillas y unidades",
    metaTitle: "Rastreo GPS para Unidades y Flotillas | BÚNKER",
    metaDescription:
      "Soluciones de rastreo GPS para flotillas: ubicación, recorridos e información operativa para mejorar la visibilidad logística.",
    description: "Visibilidad del posicionamiento de tus unidades comerciales.",
    icon: "location_searching",
    problem:
      "La falta de información sobre la ubicación de las unidades, recorridos reales y tiempos logísticos.",
    howItWorks:
      "Se instalan dispositivos en los vehículos que transmiten datos de posicionamiento. La información se visualiza a través de plataformas que, según su configuración, pueden emitir notificaciones sobre eventos de la ruta.",
    benefits: ["Seguimiento de la unidad.", "Datos de los recorridos realizados."],
    applications: ["Flotillas comerciales.", "Vehículos de reparto y transporte de carga."],
    related: [
      { label: "Dashcam con IA", href: "/servicios/dashcam-ia" },
      { label: "Monitoreo", href: "/servicios/monitoreo" },
    ],
    cta: "Solicitar información sobre rastreo GPS.",
  },
  {
    id: "videovigilancia",
    slug: "videovigilancia",
    title: "Videovigilancia",
    eyebrow: "Registro visual",
    heroTitle: "Videovigilancia: supervisión y evidencia para tus instalaciones",
    metaTitle: "Instalación de Videovigilancia y CCTV | BÚNKER",
    metaDescription:
      "Cámaras de seguridad e instalación de sistemas de videovigilancia con marcas como Hikvision, Dahua, Uniview, Tiandy e Imou.",
    description: "Registro documental y supervisión para instalaciones.",
    icon: "visibility",
    problem:
      "La necesidad de supervisión visual y documentación de eventos en bodegas, oficinas y perímetros corporativos.",
    howItWorks:
      "Se evalúan las instalaciones para determinar el tipo de cámara adecuada. Las imágenes se canalizan a equipos de grabación para visualización local o remota, según la infraestructura de red.",
    benefits: [
      "Registro de actividades operativas.",
      "Herramienta para la revisión de procesos.",
      "Implementación de equipos compatibles con diversas plataformas.",
    ],
    applications: [
      "Accesos e interiores corporativos.",
      "Zonas de almacenamiento y patios logísticos.",
    ],
    related: [
      { label: "Tecnología perimetral", href: "/servicios/tecnologia-perimetral" },
      { label: "Instalación y soporte", href: "/servicios/instalacion-soporte" },
    ],
    cta: "Agendar evaluación para videovigilancia.",
  },
  {
    id: "dashcam-ia",
    slug: "dashcam-ia",
    title: "Dashcam con IA",
    eyebrow: "Video en ruta",
    heroTitle: "Dashcam con IA: visibilidad en cabina y el camino",
    metaTitle: "Dashcam con IA para Transporte | BÚNKER",
    metaDescription:
      "Evidencia en video para flotillas: cámaras vehiculares que apoyan la supervisión en cabina y rutas logísticas.",
    description: "Evidencia en video y análisis en cabina para apoyar al operador.",
    icon: "videocam",
    problem:
      "La falta de contexto visual frente a incidentes de tránsito y la necesidad de observar el entorno de conducción.",
    howItWorks:
      "Se instalan cámaras en la unidad para registrar video. Las capacidades de análisis dependen del hardware y la plataforma seleccionada.",
    benefits: [
      "Registro de eventos en la vía.",
      "Apoyo para la revisión de actividades en cabina.",
      "Datos para entender la dinámica de un incidente.",
    ],
    applications: ["Transporte logístico y flotillas.", "Unidades de distribución."],
    related: [
      { label: "GPS y Rastreo", href: "/servicios/gps-rastreo" },
      { label: "Monitoreo", href: "/servicios/monitoreo" },
    ],
    cta: "Consultar soluciones de dashcam.",
  },
  {
    id: "tecnologia-perimetral",
    slug: "tecnologia-perimetral",
    title: "Tecnología perimetral",
    eyebrow: "Detección exterior",
    heroTitle: "Tecnología perimetral: monitoreo de los límites de tu instalación",
    metaTitle: "Tecnología Perimetral para Instalaciones | BÚNKER",
    metaDescription:
      "Soluciones de detección y prevención en exteriores para el cuidado de perímetros corporativos.",
    description: "Detección en exteriores para anticipar eventos.",
    icon: "sensors",
    problem:
      "La necesidad de supervisar extensiones grandes en exteriores y detectar actividad cerca de los límites de la propiedad.",
    howItWorks:
      "Según la evaluación del sitio, se pueden integrar cámaras y sensores que registran actividad perimetral y generan avisos de acuerdo con los equipos y plataformas utilizados.",
    benefits: [
      "Supervisión de linderos.",
      "Documentación visual o técnica de actividad exterior.",
      "Complemento con vigilancia física y monitoreo.",
    ],
    applications: ["Patios de encierro de unidades.", "Complejos industriales y bodegas."],
    related: [
      { label: "Videovigilancia", href: "/servicios/videovigilancia" },
      { label: "Vigilancia", href: "/servicios/vigilancia" },
    ],
    cta: "Solicitar asesoría perimetral.",
  },
];

export const additionalServices: Service[] = [
  {
    id: "monitoreo",
    slug: "monitoreo",
    title: "Monitoreo",
    eyebrow: "Coordinación",
    heroTitle: "Monitoreo: seguimiento y gestión de información operativa",
    metaTitle: "Monitoreo Logístico y Tecnológico | BÚNKER",
    metaDescription:
      "Servicio de monitoreo para seguimiento de operaciones y coordinación de información de GPS y CCTV para empresas.",
    description: "Seguimiento y gestión de información operativa para apoyar la coordinación.",
    icon: "monitoring",
    problem:
      "La necesidad de centralizar el seguimiento de alertas, revisar información disponible y coordinar contactos operativos.",
    howItWorks:
      "Se enlaza la tecnología de la empresa a plataformas de seguimiento. Los analistas observan los datos, verifican eventos tecnológicos y aplican protocolos de comunicación previamente acordados.",
    benefits: [
      "Atención de distintos sistemas en un solo punto.",
      "Revisión de información antes de generar reportes operativos.",
      "Coordinación de comunicación según procedimientos autorizados.",
    ],
    applications: ["Seguimiento de rutas logísticas.", "Revisión de sistemas CCTV."],
    related: [
      { label: "GPS y Rastreo", href: "/servicios/gps-rastreo" },
      { label: "Videovigilancia", href: "/servicios/videovigilancia" },
      { label: "Custodia en tránsito", href: "/servicios/custodia" },
    ],
    cta: "Conocer opciones de monitoreo.",
  },
  {
    id: "instalacion-soporte",
    slug: "instalacion-soporte",
    title: "Instalación y soporte técnico",
    eyebrow: "Infraestructura",
    heroTitle: "Instalación y soporte técnico para tecnología empresarial",
    metaTitle: "Instalación y Soporte Técnico | BÚNKER",
    metaDescription:
      "Servicios de instalación y soporte técnico de CCTV, redes y GPS para infraestructura tecnológica empresarial.",
    description: "Instalación y soporte técnico para CCTV, rastreo, redes y tecnología aplicada.",
    icon: "engineering",
    problem:
      "Fallas de infraestructura, instalaciones deficientes y falta de mantenimiento a los equipos tecnológicos.",
    howItWorks:
      "Realizamos instalaciones físicas buscando orden, conectividad y respeto por los requerimientos del fabricante. También brindamos soporte para revisar la operatividad de los sistemas.",
    benefits: [
      "Enfoque en conectividad y estabilidad física.",
      "Soporte para revisar y mantener la operatividad de los sistemas.",
    ],
    applications: [
      "Implementación de CCTV.",
      "Instalación de dispositivos en vehículos.",
      "Redes locales y tecnología aplicada.",
    ],
    related: [
      { label: "Videovigilancia", href: "/servicios/videovigilancia" },
      { label: "GPS y Rastreo", href: "/servicios/gps-rastreo" },
      { label: "Tecnología perimetral", href: "/servicios/tecnologia-perimetral" },
    ],
    cta: "Solicitar servicio técnico.",
  },
];

export const services = [...featuredServices, ...secondaryServices, ...additionalServices];
export const serviceOptions = services.map(({ id, title }) => ({ value: id, label: title }));
