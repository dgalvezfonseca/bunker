export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "¿Tienen cobertura a nivel nacional?",
    answer:
      "La cobertura geográfica se confirma para cada solicitud según la ubicación, el alcance técnico y la disponibilidad de instalación.",
  },
  {
    question: "¿Puedo ver mis cámaras desde mi celular?",
    answer:
      "Cuando los equipos y la conectividad lo permiten, el sistema puede configurarse para consulta remota desde una aplicación móvil.",
  },
  {
    question: "¿Ofrecen pólizas de mantenimiento?",
    answer:
      "El mantenimiento preventivo o correctivo se define dentro de la propuesta según los equipos y necesidades del sitio.",
  },
  {
    question: "¿Cuánto tiempo guardan las grabaciones?",
    answer:
      "La retención se calcula con base en número de cámaras, resolución, tipo de grabación y capacidad de almacenamiento requerida.",
  },
  {
    question: "¿Qué pasa si se va la luz?",
    answer:
      "La propuesta puede contemplar respaldo de energía (UPS) cuando la continuidad durante cortes eléctricos sea un requisito del proyecto.",
  },
];
