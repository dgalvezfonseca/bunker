import type { CaseStudy } from "./cms";
import { media } from "./images";

export type RecoveryCase = CaseStudy & {
  duration: string;
  event: string;
  response: string;
  result: string;
  story: { label: string; detail: string }[];
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
};

/** Resultados registrados; no representan una garantía de recuperación. */
export const caseStudies: RecoveryCase[] = [
  {
    id: "recuperacion-01",
    title: "Caso 01",
    category: "Recuperación de unidad",
    description: "Detalles operativos pendientes de publicación.",
    cover: media.project1,
    technologies: [],
    duration: "aproximadamente 6 horas",
    event: "Incidente de robo de unidad",
    response: "Gestión operativa registrada",
    result: "Unidad recuperada",
    metaTitle: "Caso de Éxito 01: Recuperación aproximada en 6 horas | BÚNKER",
    metaDescription:
      "Reporte de gestión de incidente logístico: recuperación de unidad en aproximadamente 6 horas con participación de BÚNKER.",
    heroTitle: "Incidente gestionado: recuperación aproximada en 6 horas",
    story: [
      { label: "Contexto", detail: "Información pendiente de publicación." },
      { label: "Evento", detail: "Incidente de robo de unidad." },
      { label: "Seguimiento", detail: "Detalle operativo pendiente de publicación." },
      { label: "Respuesta", detail: "Gestión operativa registrada." },
      { label: "Resultado", detail: "Unidad recuperada." },
      { label: "Tiempo de recuperación", detail: "Aproximadamente 6 horas." },
    ],
  },
  {
    id: "recuperacion-02",
    title: "Caso 02",
    category: "Recuperación de unidad",
    description: "Detalles operativos pendientes de publicación.",
    cover: media.project2,
    technologies: [],
    duration: "aproximadamente 1 hora 30 minutos",
    event: "Incidente de robo de unidad",
    response: "Gestión operativa registrada",
    result: "Unidad recuperada",
    metaTitle: "Caso de Éxito 02: Recuperación aproximada en 90 minutos | BÚNKER",
    metaDescription:
      "Reporte de gestión de incidente: unidad logística recuperada en aproximadamente 1 hora y 30 minutos con participación de BÚNKER.",
    heroTitle: "Incidente gestionado: recuperación aproximada en 1 hora y 30 minutos",
    story: [
      { label: "Contexto", detail: "Información pendiente de publicación." },
      { label: "Evento", detail: "Incidente de robo de unidad." },
      { label: "Seguimiento", detail: "Detalle operativo pendiente de publicación." },
      { label: "Respuesta", detail: "Gestión operativa registrada." },
      { label: "Resultado", detail: "Unidad recuperada." },
      { label: "Tiempo de recuperación", detail: "Aproximadamente 1 hora 30 minutos." },
    ],
  },
  {
    id: "recuperacion-03",
    title: "Caso 03",
    category: "Recuperación de unidad",
    description: "Detalles operativos pendientes de publicación.",
    cover: media.project3,
    technologies: [],
    duration: "aproximadamente 1 hora",
    event: "Incidente de robo de unidad",
    response: "Gestión operativa registrada",
    result: "Unidad recuperada",
    metaTitle: "Caso de Éxito 03: Recuperación aproximada en 1 hora | BÚNKER",
    metaDescription:
      "Reporte operativo: recuperación de transporte de carga en aproximadamente 1 hora gestionado por BÚNKER.",
    heroTitle: "Incidente gestionado: recuperación aproximada en 1 hora",
    story: [
      { label: "Contexto", detail: "Información pendiente de publicación." },
      { label: "Evento", detail: "Incidente de robo de unidad." },
      { label: "Seguimiento", detail: "Detalle operativo pendiente de publicación." },
      { label: "Respuesta", detail: "Gestión operativa registrada." },
      { label: "Resultado", detail: "Unidad recuperada." },
      { label: "Tiempo de recuperación", detail: "Aproximadamente 1 hora." },
    ],
  },
];

export const recoveryDisclaimer =
  "Los resultados corresponden a incidentes históricos particulares y no representan una garantía de recuperación, tiempo de respuesta o resultado futuro. Cada evento depende de sus circunstancias y factores externos.";

export const recoverySection = {
  eyebrow: "Casos de éxito",
  title: "Conoce cómo respondemos en situaciones reales",
  description:
    "Cada incidente exige reacción, coordinación y tecnología. Conoce algunos de los casos en los que BÚNKER participó en la localización y recuperación de unidades.",
  stat: "3 unidades",
  statLabel: "Recuperadas en 3 incidentes históricos mostrados.",
  cta: "Ver casos de éxito",
} as const;
