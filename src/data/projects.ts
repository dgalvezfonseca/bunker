import { images } from "./images";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
};

/** PLACEHOLDER: proyectos de ejemplo. Reemplazar por casos reales e imágenes propias. */
export const projects: Project[] = [
  {
    id: "torre-corporativa",
    title: "Torre corporativa",
    category: "Corporativo",
    description:
      "Videovigilancia IP en áreas comunes y estacionamientos, con administración centralizada.",
    image: images.project1,
    technologies: ["CCTV IP", "Control de acceso", "Red dedicada"],
  },
  {
    id: "nave-industrial",
    title: "Nave industrial",
    category: "Industrial",
    description: "Cobertura perimetral y de andenes con grabación continua y respaldo energético.",
    image: images.project2,
    technologies: ["Cámaras perimetrales", "Analítica", "UPS"],
  },
  {
    id: "accesos-residenciales",
    title: "Accesos residenciales",
    category: "Residencial",
    description: "Control vehicular y peatonal con video verificación en caseta.",
    image: images.project3,
    technologies: ["Control vehicular", "Intercomunicación", "CCTV"],
  },
];
