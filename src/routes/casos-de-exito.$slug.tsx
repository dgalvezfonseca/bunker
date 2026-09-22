import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { caseStudies, recoveryDisclaimer } from "@/data/caseStudies";

export const Route = createFileRoute("/casos-de-exito/$slug")({
  head: ({ params }) => {
    const item = caseStudies.find((entry) => entry.id === params.slug);
    return item
      ? {
          meta: [{ title: item.metaTitle }, { name: "description", content: item.metaDescription }],
        }
      : {};
  },
  component: CaseDetail,
});

function CaseDetail() {
  const { slug } = Route.useParams();
  const item = caseStudies.find((entry) => entry.id === slug);
  if (!item) throw notFound();
  return (
    <SitePage>
      <PageHero
        eyebrow={`Reporte ${item.title.replace("Caso ", "")}`}
        title={item.heroTitle}
        description="Reporte de incidente previamente gestionado por BÚNKER."
      />
      <section className="section-y">
        <div className="mx-auto grid max-w-container gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:px-12">
          <div>
            <p className="text-eyebrow text-primary">Participación de BÚNKER</p>
            <p className="mt-3 text-lead text-ink-muted">
              BÚNKER tuvo participación en el seguimiento y gestión de este incidente operativo
              relacionado con una unidad de transporte.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6">
            <p className="text-eyebrow text-primary">Resultado</p>
            <p className="mt-3 text-headline">{item.result}</p>
            <p className="mt-5 text-ink-muted">Tiempo aproximado: {item.duration}.</p>
          </div>
          <p className="sm:col-span-2 text-sm text-ink-muted">{recoveryDisclaimer}</p>
        </div>
      </section>
    </SitePage>
  );
}
