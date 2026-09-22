/**
 * Imágenes del sitio. PLACEHOLDER: reemplazar por fotografías reales de BÚNKER.
 * Centralizadas aquí para poder sustituirlas sin tocar los componentes.
 */
import type { Media } from "./cms";
import heroBunker from "../../assets/hero-bunker.png";
import casetaBunker from "../../assets/caseta-bunker.jpeg";
import nosotrosBunker from "../../assets/nosotros-bunker.png";
import monitoreo from "../../assets/monitoreo.webp";
import proteccion from "../../assets/proteccion.webp";
import proteccionFlotilla from "../../assets/proteccion-flotilla.webp";
import tecnologiaAplicada from "../../assets/tecnologia-aplicada.webp";
import custodio from "../../assets/custodio.webp";
import bunkerMonitores from "../../assets/bunker-monitores.jpeg";
import vigilancia from "../../assets/vigilancia.webp";

const sources = {
  hero: heroBunker,
  aboutCorporate: casetaBunker,
  aboutResidential:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAaNei7PI6q12m4b2ztwqW0LkqI3JxAeCgPS86i7Z6uFfFwgV7hzo2TRoUEV9m-i8s-DNfy4Umg1KGlHwnBgnZ7bWjlXJYpm_VgbTJlXyNsoMf5_Ibzu0DnlRzELIvAfnsB9aVbybHOhTqBn3DCKZZMk8UHlBgNx44XO0QbOUT2v9JmVq9X9uwtZTUOy7XLnLPSpob254M0cqN8-zVq2n5IFeA8f-xjSQMK5mlrslmukYEQQp2_7PyCbg",
  videoSurveillance:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCbp-ZYCeiZtGaMaWHuxeOQJMQmh363xiggOclXaTJVRKHG6VJPaF_2vm57XkpVUQeUwc_b9tkdB0QQ5HZ3p3GPfcAsXxXVvWaUiZ8GZbchtNyDzlGL8OwGT5ge_s_wLDjZC8MSDYJoyRK4lEiqn-vz3tGZB11ddPnjmL8b-BrcnSOpFeh2c_uL3HVsI0Xj7-gYnNCIsaw1IxqSaWJmOkw-CDpwWypWs0gCUfmk6zRWJAX5SLqCvQHveg",
  accessControl: nosotrosBunker,
  monitoring: monitoreo,
  sectorResidential:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA5AGdgbevmnlBdd_HFvpCcvQEI0m66rJyMk_pi0Uv3XPAMebX_0zuI0YJ66mTZzCTBBMukB81hCf7gpvzoGHWWyoTz9_2hcGB82Jm-SMY1pzmkLQ8HpBOV-FjgmUiuichya-GxiWBmFBU_cQzPMRblLA3pccMc4-cdPRPYXHJ6FFX6IjsAQN0_uPUzpvC1u9Z-sN19ZhxMFKecaVLhrJuG1tOEn3bG1FyqiDkH6l81tuwZfq-ES15bKw",
  sectorCorporate: proteccion,
  sectorCommercial: proteccionFlotilla,
  sectorIndustrial: tecnologiaAplicada,
  project1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuACqGSmVHPVKfnFqnpzXHfqgeTbnkRZjO1xBgQ6mzEh60J5JWMZmD7GuNhvN7SBVhsriZi-WWN1OE5OVYNMlmaSSOZH-B_20IoTOm2Agp9kIemt0LyqOc2WLKLG_4cPbgcTQM9iyQPz5gMMAbmd0eMaORiIf0h3nVYwbwCbjKjSjFvw0YOBesRYjHL2BWyUFzRDPec0cO5N92cEsIDCBKBHzjcJvoqJQYqtcHuONS9tZRKdWXrbUFMOKQ",
  project2: custodio,
  project3:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZMfqjuzeJK0MgnUXi9xZTVQna7ybJMSvwRKGEdP1dqeNwb8FVSoHJQUiPCWTAnFY3jiEKMlY0MxJEYkoXRLTuJPuSkMLLNnLGHeUIxCWJIwIr_r9v-qX5x1iM9aul0YfyEapmUyapDwgeNRLGHD4fWzPDSZnoq3avdrC_POZfSIC5CHB3-LYHaKqz7WOlL_qfwTkjaTvMhAOQhXN4md-9XWsEFwEUvGJ5kl9BvdGmicb83ase34Gw0w",
} as const;

export const media = Object.fromEntries(
  Object.entries(sources).map(([id, src]) => [id, { id, src, alt: "Imagen de referencia" }]),
) as Record<keyof typeof sources, Media>;

/** Compatibilidad temporal para componentes que solo necesitan la URL. */
export const images = Object.fromEntries(
  Object.entries(media).map(([id, asset]) => [id, asset.src]),
) as Record<keyof typeof sources, string>;

export const blogImages = {
  rastreoGps: {
    id: "blog-rastreo-gps",
    src: casetaBunker,
    alt: "Personal de BÚNKER revisando una tableta junto a una unidad logística",
    objectPosition: "68% center",
  },
  visibilidadFlotilla: {
    id: "blog-visibilidad-flotilla",
    src: monitoreo,
    alt: "Supervisión operativa de una flotilla en patio logístico",
    objectPosition: "72% center",
  },
  videovigilancia: {
    id: "blog-videovigilancia",
    src: proteccion,
    alt: "Cámara de seguridad en acceso corporativo",
    objectPosition: "80% center",
  },
  dashcam: {
    id: "blog-dashcam",
    src: proteccionFlotilla,
    alt: "Dashcam instalada en una unidad logística",
    objectPosition: "right center",
  },
  custodia: {
    id: "blog-custodia",
    src: custodio,
    alt: "Camión de carga acompañado por vehículos en carretera",
    objectPosition: "center",
  },
  monitoreo: {
    id: "blog-monitoreo",
    src: bunkerMonitores,
    alt: "Pantallas de monitoreo y seguimiento operativo",
    objectPosition: "center",
  },
  decisionesGps: {
    id: "blog-decisiones-gps",
    src: vigilancia,
    alt: "Coordinador revisando información operativa en una tableta",
    objectPosition: "72% center",
  },
  integracion: {
    id: "blog-integracion",
    src: tecnologiaAplicada,
    alt: "Tecnología de videovigilancia y monitoreo en una operación logística",
    objectPosition: "right center",
  },
} as const;
