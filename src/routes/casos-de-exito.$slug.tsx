import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { caseStudies, recoveryDisclaimer } from "@/data/caseStudies";
export const Route = createFileRoute("/casos-de-exito/$slug")({ component: CaseDetail });
function CaseDetail() {
  const { slug } = Route.useParams();
  const item = caseStudies.find((entry) => entry.id === slug);
  if (!item) throw notFound();
  return (
    <SitePage>
      <PageHero eyebrow={item.category} title={item.title} description={item.description} />
      <section className="section-y">
        <div className="mx-auto grid max-w-container gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:px-12">
          <dl className="grid gap-5">
            <div>
              <dt className="text-eyebrow text-primary">Evento</dt>
              <dd className="mt-2 text-ink">{item.event}</dd>
            </div>
            <div>
              <dt className="text-eyebrow text-primary">Respuesta</dt>
              <dd className="mt-2 text-ink">{item.response}</dd>
            </div>
          </dl>
          <div className="border-l-4 border-primary pl-6">
            <p className="text-eyebrow text-primary">Tiempo registrado</p>
            <p className="mt-3 text-headline">{item.duration}</p>
            <p className="mt-5 text-ink-muted">{item.result}</p>
          </div>
          <p className="sm:col-span-2 text-sm text-ink-muted">{recoveryDisclaimer}</p>
        </div>
      </section>
    </SitePage>
  );
}
