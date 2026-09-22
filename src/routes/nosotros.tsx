import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Institutional } from "@/components/sections/Institutional";
import { SitePage } from "@/components/layout/SitePage";
export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros | BÚNKER Servicios Integrales de Tecnología" },
      {
        name: "description",
        content:
          "Conoce el propósito, filosofía y enfoque operativo de BÚNKER, empresa mexicana enfocada en la protección de instalaciones y transporte.",
      },
    ],
  }),
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="BÚNKER"
        title="Entendemos tu operación. Buscamos tu continuidad."
        description="Conoce el propósito, filosofía y enfoque operativo de BÚNKER."
      />
      <Institutional />
    </SitePage>
  ),
});
