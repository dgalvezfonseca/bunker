import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Contact } from "@/components/sections/Contact";
import { SitePage } from "@/components/layout/SitePage";
export const Route = createFileRoute("/contacto")({
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos sobre tu operación"
        description="Prepara tu solicitud; el envío se conectará cuando se autorice el proveedor de formularios."
      />
      <Contact />
    </SitePage>
  ),
});
