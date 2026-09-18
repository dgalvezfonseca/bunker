export type ProcessStep = { step: string; title: string; description: string };

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Evaluación",
    description: "Revisamos el sitio, los accesos y los puntos que deben cubrirse.",
  },
  {
    step: "02",
    title: "Diseño",
    description: "Definimos cobertura, equipos, conectividad y almacenamiento.",
  },
  {
    step: "03",
    title: "Instalación",
    description: "Montamos equipos y tendemos la infraestructura acordada.",
  },
  {
    step: "04",
    title: "Pruebas",
    description: "Configuramos funciones y comprobamos cada punto del sistema.",
  },
  {
    step: "05",
    title: "Monitoreo",
    description: "Cuando aplica, conectamos alertas y acordamos responsables.",
  },
  {
    step: "06",
    title: "Soporte",
    description: "Definimos mantenimiento y atención técnica según el proyecto.",
  },
];
