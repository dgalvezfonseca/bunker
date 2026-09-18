import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { FieldVideos } from "@/components/sections/FieldVideos";
import { Brands } from "@/components/sections/Brands";
import { SitePage } from "@/components/layout/SitePage";
export const Route = createFileRoute("/tecnologia")({
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="Tecnología"
        title="Herramientas para ver, seguir y responder"
        description="Videovigilancia, IA, GPS y tecnología aplicada a la operación."
      />
      <FieldVideos />
      <Brands />
    </SitePage>
  ),
});
