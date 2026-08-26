import { images } from "./images";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  featured?: boolean;
};

/** Servicios destacados (con fotografía) y secundarios (con icono). */
export const featuredServices: Service[] = [
  {
    id: "videovigilancia",
    title: "Videovigilancia CCTV e IP",
    description:
      "Cámaras IP y analógicas, grabación local o en nube, y acceso remoto desde móvil. Diseñamos la cobertura según el plano del sitio.",
    icon: "videocam",
    image: images.videoSurveillance,
    featured: true,
  },
  {
    id: "control-acceso",
    title: "Control de Acceso",
    description:
      "Accesos biométricos, tarjetas y control vehicular para restringir áreas críticas.",
    icon: "badge",
    image: images.accessControl,
    featured: true,
  },
];

export const secondaryServices: Service[] = [
  {
    id: "alarmas",
    title: "Sistemas de Alarma",
    description:
      "Detección de intrusión, humo y botón de pánico, con aviso inmediato al centro de control.",
    icon: "notifications_active",
  },
  {
    id: "analitica",
    title: "Analítica Inteligente",
    description:
      "Detección de líneas cruzadas, conteo de personas y alertas por comportamiento en video.",
    icon: "insights",
  },
  {
    id: "instalacion",
    title: "Instalación y Configuración",
    description:
      "Cableado estructurado, montaje de equipos y puesta en marcha con capacitación de usuarios.",
    icon: "engineering",
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento y Soporte",
    description:
      "Mantenimiento preventivo y correctivo, diagnóstico remoto y atención técnica en sitio.",
    icon: "build",
  },
];
