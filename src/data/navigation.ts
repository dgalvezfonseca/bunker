export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Vigilancia", href: "/servicios/vigilancia" },
      { label: "Custodia en tránsito", href: "/servicios/custodia" },
      { label: "GPS y Rastreo", href: "/servicios/gps-rastreo" },
      { label: "Videovigilancia", href: "/servicios/videovigilancia" },
      { label: "Dashcam con IA", href: "/servicios/dashcam-ia" },
      { label: "Tecnología perimetral", href: "/servicios/tecnologia-perimetral" },
      { label: "Monitoreo", href: "/servicios/monitoreo" },
      { label: "Instalación y soporte", href: "/servicios/instalacion-soporte" },
    ],
  },
  { label: "Casos de éxito", href: "/casos-de-exito" },
  { label: "Blog", href: "/blog" },
  { label: "Clientes", href: "/clientes" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Servicios",
    items: [
      { label: "Vigilancia", href: "/servicios/vigilancia" },
      { label: "Custodia en tránsito", href: "/servicios/custodia" },
      { label: "GPS y Rastreo", href: "/servicios/gps-rastreo" },
      { label: "Videovigilancia", href: "/servicios/videovigilancia" },
      { label: "Dashcam con IA", href: "/servicios/dashcam-ia" },
      { label: "Tecnología perimetral", href: "/servicios/tecnologia-perimetral" },
      { label: "Monitoreo", href: "/servicios/monitoreo" },
      { label: "Instalación y soporte", href: "/servicios/instalacion-soporte" },
    ],
  },
  {
    title: "Compañía",
    items: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Tecnología", href: "/tecnologia" },
      { label: "Casos de éxito", href: "/casos-de-exito" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

export const legalNav = [
  { label: "Aviso de privacidad", to: "/aviso-de-privacidad" },
  { label: "Política de cookies", to: "/politica-de-cookies" },
  { label: "Términos de servicio", to: "/terminos-de-servicio" },
] as const;
