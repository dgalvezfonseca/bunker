import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { Brands } from "@/components/sections/Brands";
import { SitePage } from "@/components/layout/SitePage";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnología y marcas | BÚNKER" },
      {
        name: "description",
        content:
          "Marcas e integración tecnológica para apoyar la visibilidad operativa de instalaciones y logística.",
      },
    ],
  }),
  component: Technology,
});
function Technology() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Tecnología y marcas"
        title="Tecnología como herramienta de información operativa"
        description="Integramos hardware y software según las características de cada operación."
      />
      <section className="section-y">
        <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
          <p className="max-w-3xl text-lead text-ink-muted">
            La tecnología aporta visibilidad cuando se selecciona e integra de acuerdo con la
            infraestructura, los recorridos y las condiciones reales del proyecto.
          </p>
          <p className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-primary">
            <Link to="/servicios/$slug" params={{ slug: "gps-rastreo" }}>
              GPS y Rastreo ↗
            </Link>
            <Link to="/servicios/$slug" params={{ slug: "videovigilancia" }}>
              Videovigilancia ↗
            </Link>
            <Link to="/servicios/$slug" params={{ slug: "dashcam-ia" }}>
              Dashcam con IA ↗
            </Link>
          </p>
        </div>
      </section>
      <Brands />
    </SitePage>
  );
}
