export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "¿Tienen cobertura a nivel nacional?",
    answer:
      "Desarrollamos e implementamos proyectos en la República Mexicana. Confirmamos alcance y tiempos según la ubicación del sitio.",
  },
  {
    question: "¿Puedo ver mis cámaras desde mi celular?",
    answer:
      "Sí. Los sistemas de videovigilancia y alarma se integran a aplicaciones móviles para monitoreo remoto en tiempo real.",
  },
  {
    question: "¿Ofrecen pólizas de mantenimiento?",
    answer:
      "Contamos con planes de mantenimiento preventivo y correctivo para mantener la continuidad operativa del sistema.",
  },
  {
    question: "¿Cuánto tiempo guardan las grabaciones?",
    answer:
      "El almacenamiento se dimensiona según su requerimiento: desde 15 días hasta más de un año, en respaldo local o en nube.",
  },
  {
    question: "¿Qué pasa si se va la luz?",
    answer:
      "Diseñamos los sistemas con respaldo de energía (UPS) para mantener grabación y transmisión de alertas durante cortes eléctricos.",
  },
];
