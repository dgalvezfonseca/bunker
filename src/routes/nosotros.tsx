import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Institutional } from "@/components/sections/Institutional";
import { SitePage } from "@/components/layout/SitePage";
export const Route = createFileRoute("/nosotros")({
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="BÚNKER"
        title="Una operación que protege con tecnología"
        description="Conoce la misión, visión, valores y políticas que orientan nuestro servicio."
      />
      <Institutional />
    </SitePage>
  ),
});
