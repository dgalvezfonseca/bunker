export type ProcessStep = { step: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Detectamos",
    description:
      "Identificamos eventos, alertas y condiciones de riesgo mediante tecnología y monitoreo.",
  },
  {
    step: "02",
    title: "Verificamos",
    description: "Confirmamos la información disponible antes de escalar una incidencia.",
  },
  {
    step: "03",
    title: "Monitoreamos",
    description: "Damos seguimiento continuo a unidades, instalaciones y eventos.",
  },
  {
    step: "04",
    title: "Coordinamos",
    description: "Activamos los contactos y protocolos definidos para cada operación.",
  },
  {
    step: "05",
    title: "Respondemos",
    description: "Actuamos con base en la información disponible y el procedimiento establecido.",
  },
  {
    step: "06",
    title: "Documentamos",
    description: "Mantenemos trazabilidad de eventos y evidencia cuando corresponde.",
  },
];
