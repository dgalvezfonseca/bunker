import type { CaseStudy } from "./cms";
import { media } from "./images";

export type Project = CaseStudy;

/** PLACEHOLDER: proyectos de ejemplo. Reemplazar por casos reales e imágenes propias. */
export const projects: Project[] = [
  {
    id: "torre-corporativa",
    title: "Torre corporativa",
    category: "Corporativo",
    description:
      "Videovigilancia IP en áreas comunes y estacionamientos, con administración centralizada.",
    cover: media.project1,
    technologies: ["CCTV IP", "Control de acceso", "Red dedicada"],
  },
  {
    id: "nave-industrial",
    title: "Nave industrial",
    category: "Industrial",
    description: "Cobertura perimetral y de andenes con grabación continua y respaldo energético.",
    cover: media.project2,
    technologies: ["Cámaras perimetrales", "Analítica", "UPS"],
  },
  {
    id: "accesos-residenciales",
    title: "Accesos residenciales",
    category: "Residencial",
    description: "Control vehicular y peatonal con video verificación en caseta.",
    cover: media.project3,
    technologies: ["Control vehicular", "Intercomunicación", "CCTV"],
  },
  {
    id: "acceso-comercial",
    title: "Acceso a edificio comercial",
    category: "Comercial",
    description:
      "Control de ingreso peatonal con registro y validación en el punto de acceso principal.",
    cover: media.accessControl,
    technologies: ["Control de acceso", "Credenciales", "Registro de ingreso"],
  },
];
