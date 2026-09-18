import type { CaseStudy } from "./cms";
import { media } from "./images";

export type RecoveryCase = CaseStudy & {
  duration: string;
  event: string;
  response: string;
  result: string;
};

/** Resultados registrados; no representan una garantía de recuperación. */
export const caseStudies: RecoveryCase[] = [
  {
    id: "recuperacion-01",
    title: "Caso 01",
    category: "Recuperación de unidad",
    description: "Detalles operativos pendientes de publicación.",
    cover: media.project1,
    technologies: ["Monitoreo", "Rastreo GPS"],
    duration: "6 horas",
    event: "Incidente de robo de unidad",
    response: "Gestión operativa registrada",
    result: "Unidad recuperada",
  },
  {
    id: "recuperacion-02",
    title: "Caso 02",
    category: "Recuperación de unidad",
    description: "Detalles operativos pendientes de publicación.",
    cover: media.project2,
    technologies: ["Monitoreo", "Rastreo GPS"],
    duration: "1 hora 30 minutos",
    event: "Incidente de robo de unidad",
    response: "Gestión operativa registrada",
    result: "Unidad recuperada",
  },
  {
    id: "recuperacion-03",
    title: "Caso 03",
    category: "Recuperación de unidad",
    description: "Detalles operativos pendientes de publicación.",
    cover: media.project3,
    technologies: ["Monitoreo", "Rastreo GPS"],
    duration: "1 hora",
    event: "Incidente de robo de unidad",
    response: "Gestión operativa registrada",
    result: "Unidad recuperada",
  },
];

export const recoveryDisclaimer =
  "Resultados correspondientes a incidentes atendidos previamente. Cada evento depende de sus condiciones particulares.";

export const recoverySection = {
  eyebrow: "Casos de éxito",
  title: "Conoce cómo respondemos en situaciones reales",
  description:
    "Cada incidente exige reacción, coordinación y tecnología. Conoce algunos de los casos en los que BÚNKER participó en la localización y recuperación de unidades.",
  stat: "3 DE 3",
  statLabel: "Unidades recuperadas en incidentes gestionados por BÚNKER.",
  cta: "Ver casos de éxito",
} as const;
