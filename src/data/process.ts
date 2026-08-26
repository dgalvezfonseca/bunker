export type ProcessStep = { step: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Evaluación",
    description: "Inspección física del sitio y detección de puntos vulnerables.",
  },
  {
    step: "02",
    title: "Diseño",
    description: "Solución técnica, selección de equipos y trazado de la instalación.",
  },
  {
    step: "03",
    title: "Instalación",
    description: "Ejecución con cableado ordenado y normas de seguridad en obra.",
  },
  {
    step: "04",
    title: "Pruebas",
    description: "Configuración, pruebas de operación y capacitación de usuarios.",
  },
  {
    step: "05",
    title: "Monitoreo",
    description: "Integración al centro de monitoreo y protocolos de alerta.",
  },
  {
    step: "06",
    title: "Soporte",
    description: "Mantenimiento preventivo, correctivo y atención de incidencias.",
  },
];
