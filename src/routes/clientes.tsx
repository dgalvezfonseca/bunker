import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Clients } from "@/components/sections/Clients";
import { SitePage } from "@/components/layout/SitePage";
export const Route = createFileRoute("/clientes")({
  component: () => (
    <SitePage>
      <PageHero eyebrow="Clientes" title="Clientes" description="Empresas que confían en BÚNKER." />
      <Clients />
    </SitePage>
  ),
});
