import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { RecoveryCases } from "@/components/sections/RecoveryCases";
import { SitePage } from "@/components/layout/SitePage";
import { caseStudies } from "@/data/caseStudies";
export const Route = createFileRoute("/casos-de-exito")({
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="Casos de éxito"
        title="Resultados en campo"
        description="Incidentes registrados y gestionados por BÚNKER."
      />
      <RecoveryCases />
      <section className="section-y">
        <div className="mx-auto grid max-w-container gap-5 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          {caseStudies.map((item) => (
            <Link
              key={item.id}
              to="/casos-de-exito/$slug"
              params={{ slug: item.id }}
              className="border border-line p-6"
            >
              <p className="text-eyebrow text-primary">{item.title}</p>
              <h2 className="mt-3 text-title">{item.duration}</h2>
              <p className="mt-3 text-sm text-ink-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </SitePage>
  ),
});
