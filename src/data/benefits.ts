export type Benefit = {
  id: string;
  title: string;
  description: string;
};

export const benefitsSection = {
  eyebrow: "Beneficios",
  title: "Información para decidir y actuar",
  description:
    "Integramos tecnología y monitoreo para que la operación tenga más contexto cuando lo necesita.",
} as const;

export const benefits: Benefit[] = [
  {
    id: "supervision",
    title: "Supervisión continua",
    description: "Seguimiento de unidades, instalaciones y eventos.",
  },
  {
    id: "visibilidad",
    title: "Mayor visibilidad",
    description: "Información para entender mejor lo que ocurre en la operación.",
  },
  {
    id: "evidencia",
    title: "Evidencia visual",
    description: "Apoyo para revisar eventos cuando existe cobertura de video.",
  },
  {
    id: "seguimiento",
    title: "Seguimiento de unidades",
    description: "Localización y datos operativos para apoyar recorridos.",
  },
  {
    id: "respuesta",
    title: "Respuesta más informada",
    description: "Acciones basadas en la información disponible y el protocolo definido.",
  },
  {
    id: "centralizado",
    title: "Monitoreo centralizado",
    description: "Alertas y seguimiento concentrados según el alcance del proyecto.",
  },
  {
    id: "trazabilidad",
    title: "Trazabilidad de eventos",
    description: "Registro y evidencia cuando corresponde.",
  },
  {
    id: "integracion",
    title: "Tecnologías integradas",
    description: "Video, rastreo y monitoreo combinados según cada necesidad.",
  },
];
