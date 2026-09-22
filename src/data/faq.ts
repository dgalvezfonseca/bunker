export type FaqItem = { question: string; answer: string; published: boolean };

export const faqs: FaqItem[] = [
  {
    question: "¿Cuál es el alcance geográfico de sus servicios?",
    answer:
      "En BÚNKER operamos y coordinamos servicios logísticos, técnicos y de custodia con cobertura a nivel nacional.",
    published: true,
  },
  {
    question: "¿Qué diferencia hay entre vigilancia intramuros y custodia en tránsito?",
    answer:
      "La vigilancia está diseñada para la observación y control de accesos en espacios físicos fijos. La custodia en tránsito es el acompañamiento vehicular para el seguimiento de mercancías durante recorridos logísticos.",
    published: true,
  },
  {
    question: "¿Qué opciones de vehículos ofrecen para la custodia?",
    answer:
      "Ofrecemos acompañamiento en modalidad de caja blanca, para bajo perfil, o unidades rotuladas, según la visibilidad que requiera la operación.",
    published: true,
  },
  {
    question: "¿Qué procedimientos sigue el personal de custodia ante una retención en ruta?",
    answer: "Pendiente de información del cliente.",
    published: false,
  },
  {
    question: "¿Sus elementos de custodia cuentan con armamento?",
    answer: "Pendiente de validación legal y comercial.",
    published: false,
  },
  {
    question: "¿Qué ocurre si un vehículo con GPS entra en una zona sin cobertura celular?",
    answer: "Pendiente de validación técnica por modelo y plataforma.",
    published: false,
  },
  {
    question: "¿Instalan equipos que puedan detener el motor del vehículo a distancia?",
    answer: "Pendiente de validación técnica.",
    published: false,
  },
  {
    question: "¿Qué marcas tecnológicas implementan en sus proyectos?",
    answer:
      "Trabajamos como integradores de Hikvision, Dahua Technology, Uniview, Tiandy Technologies, TVT Digital, Imou, TP-Link y ZKTeco.",
    published: true,
  },
  {
    question: "¿Cuál es la función principal de su centro de monitoreo?",
    answer:
      "Centralizar la recepción de alertas tecnológicas, aplicar procesos de verificación y ejecutar matrices de comunicación con los enlaces del cliente.",
    published: true,
  },
  {
    question:
      "¿El centro de monitoreo contacta directamente a las autoridades en caso de emergencia?",
    answer: "Pendiente de información del cliente.",
    published: false,
  },
  {
    question: "¿Brindan soporte técnico a sistemas de cámaras ya instalados?",
    answer:
      "Es posible realizar una visita técnica para revisar equipos e infraestructura y, si son compatibles y se encuentran en condiciones operativas, ofrecer una propuesta de mantenimiento técnico.",
    published: true,
  },
];
