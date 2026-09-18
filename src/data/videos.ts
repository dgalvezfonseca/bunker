import type { Media } from "./cms";
import { media } from "./images";

export type Video = { id: string; title: string; description: string; poster: Media; src?: string };
/** Poster y estructura listos para videos IA; no se carga video sin archivo aprobado. */
export const videos: Video[] = [
  {
    id: "custodia",
    title: "Custodia en movimiento",
    description: "Placeholder de video para unidades custodiadas.",
    poster: media.project2,
  },
  {
    id: "gps",
    title: "Rastreo en operación",
    description: "Placeholder de video para operación GPS.",
    poster: media.monitoring,
  },
  {
    id: "vigilancia",
    title: "Tecnología aplicada",
    description: "Placeholder de video para sistemas instalados.",
    poster: media.videoSurveillance,
  },
];
