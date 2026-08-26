export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Centro de Monitoreo", href: "#monitoreo" },
  { label: "Sectores", href: "#sectores" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Servicios",
    items: [
      { label: "Videovigilancia", href: "#servicios" },
      { label: "Centro de Monitoreo", href: "#monitoreo" },
      { label: "Control de Acceso", href: "#servicios" },
      { label: "Sistemas de Alarma", href: "#servicios" },
      { label: "Infraestructura y Redes", href: "#servicios" },
    ],
  },
  {
    title: "Compañía",
    items: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Sectores", href: "#sectores" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Aviso de Privacidad", href: "#contacto" },
      { label: "Términos y Condiciones", href: "#contacto" },
    ],
  },
];
