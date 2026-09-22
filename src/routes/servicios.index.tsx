import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { services } from "@/data/services";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios de Vigilancia, Custodia y Tecnología | BÚNKER" },
      {
        name: "description",
        content:
          "Vigilancia, custodia, rastreo, videovigilancia, monitoreo e instalación para operaciones.",
      },
    ],
  }),
  component: ServicesIndex,
});
function ServicesIndex() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones diseñadas para tus requerimientos operativos."
        description="Combinamos presencia en sitio, visibilidad tecnológica y coordinación según el nivel de protección requerido."
      />
      <section className="section-y">
        <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
          <div className="border-y border-line">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to="/servicios/$slug"
                params={{ slug: service.slug }}
                className="group grid gap-4 border-b border-line py-7 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:items-center sm:gap-7 sm:py-9"
              >
                <p className="font-display text-xl font-extrabold tracking-[-0.04em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="grid gap-2">
                  <h2 className="text-title transition-colors duration-200 group-hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </div>
                <span className="flex items-center gap-2 text-sm font-semibold text-primary sm:justify-self-end">
                  Ver servicio <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
