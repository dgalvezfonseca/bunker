import { images } from "./images";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  featured?: boolean;
  slug?: string;
};

/** Servicios destacados (con fotografía) y secundarios (con icono). */
export const featuredServices: Service[] = [
  {
    id: "vigilancia",
    slug: "vigilancia",
    title: "Vigilancia",
    description:
      "Vigilancia operativa para acompañar instalaciones, unidades y operaciones que requieren atención continua.",
    icon: "shield",
    image: images.monitoring,
    featured: true,
  },
  {
    id: "custodia",
    slug: "custodia",
    title: "Custodia en tránsito",
    description:
      "Custodia para mercancía, caja blanca y caja rotulada con seguimiento según el alcance operativo.",
    icon: "local_shipping",
    image: images.project2,
    featured: true,
  },
];

export const secondaryServices: Service[] = [
  {
    id: "gps-rastreo",
    slug: "gps-rastreo",
    title: "GPS y Rastreo",
    description: "Ubicación, seguimiento y tecnología aplicada a unidades.",
    icon: "location_searching",
  },
  {
    id: "videovigilancia",
    slug: "videovigilancia",
    title: "Videovigilancia",
    description:
      "Detección de intrusión, humo y botón de pánico, con protocolos de aviso definidos para el sitio.",
    icon: "notifications_active",
  },
  {
    id: "dashcam-ia",
    slug: "dashcam-ia",
    title: "Dashcam con IA",
    description:
      "Reglas de video como cruce de línea, conteo y detección de eventos, cuando el equipo lo permite.",
    icon: "insights",
  },
  {
    id: "tecnologia-perimetral",
    slug: "tecnologia-perimetral",
    title: "Tecnología perimetral",
    description:
      "Cableado, montaje, puesta en marcha y mantenimiento preventivo o correctivo del sistema.",
    icon: "engineering",
  },
];

export const services = [...featuredServices, ...secondaryServices];

export const serviceOptions = services.map(({ id, title }) => ({
  value: id,
  label: title,
}));
