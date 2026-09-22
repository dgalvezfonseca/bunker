import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Contact } from "@/components/sections/Contact";
import { SitePage } from "@/components/layout/SitePage";
export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | BÚNKER Servicios Integrales de Tecnología" },
      {
        name: "description",
        content:
          "Contacta a BÚNKER para solicitar evaluación técnica sobre vigilancia, tecnología perimetral, custodia o sistemas GPS en México.",
      },
    ],
  }),
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos sobre los requerimientos operativos de tu empresa"
        description="Déjanos tus datos para revisar los requerimientos técnicos y operativos de tu empresa."
      />
      <Contact />
    </SitePage>
  ),
});
