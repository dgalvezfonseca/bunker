import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Clients } from "@/components/sections/Clients";
import { SitePage } from "@/components/layout/SitePage";
export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes de BÚNKER | Servicios Integrales de Tecnología" },
      {
        name: "description",
        content:
          "Conoce algunas de las empresas que confían en los servicios y operaciones de BÚNKER en México.",
      },
    ],
  }),
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="Clientes"
        title="Empresas que confían en BÚNKER"
        description="BÚNKER brinda servicios a empresas de diversos sectores, adaptando sus soluciones a cada necesidad."
      />
      <Clients />
    </SitePage>
  ),
});
