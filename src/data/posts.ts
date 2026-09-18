import type { BlogPost } from "./cms";
import { media } from "./images";

export const posts: BlogPost[] = [
  {
    id: "gps-operacion",
    slug: "gps-y-rastreo-para-operaciones",
    title: "GPS y rastreo para operaciones",
    excerpt: "Contenido editorial pendiente de aprobación.",
    category: "Rastreo GPS",
    cover: media.monitoring,
  },
  {
    id: "custodia-transito",
    slug: "custodia-en-transito",
    title: "Custodia en tránsito",
    excerpt: "Contenido editorial pendiente de aprobación.",
    category: "Custodia",
    cover: media.project2,
  },
  {
    id: "videovigilancia",
    slug: "videovigilancia-y-monitoreo",
    title: "Videovigilancia y monitoreo",
    excerpt: "Contenido editorial pendiente de aprobación.",
    category: "Tecnología",
    cover: media.videoSurveillance,
  },
];
