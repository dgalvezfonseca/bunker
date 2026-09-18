import { Container } from "@/components/common/Container";
import { company } from "@/data/company";
import { values } from "@/data/values";
import { qualityPolicies } from "@/data/qualityPolicies";
export function Institutional() {
  return (
    <>
      <section className="section-y bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-eyebrow text-primary">Misión</p>
              <p className="mt-4 text-lead text-ink">{company.mission}</p>
            </div>
            <div>
              <p className="text-eyebrow text-primary">Visión</p>
              <p className="mt-4 text-lead text-ink">{company.vision}</p>
            </div>
          </div>
          <blockquote className="mt-16 border-l-4 border-primary pl-6 text-headline">
            {company.purpose}
          </blockquote>
        </Container>
      </section>
      <section className="section-y bg-surface-elevated">
        <Container>
          <p className="text-eyebrow text-primary">Valores</p>
          <div className="mt-8 border-t border-line">
            {values.map((value, index) => (
              <article
                key={value.id}
                className="grid gap-3 border-b border-line py-6 md:grid-cols-[4rem_1fr_2fr]"
              >
                <span className="font-display text-2xl text-primary">0{index + 1}</span>
                <h2 className="text-title">{value.title}</h2>
                <p className="text-ink-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-y bg-black-950 text-surface-elevated">
        <Container>
          <p className="text-eyebrow text-silver-100">Políticas de calidad y servicio</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {qualityPolicies.map((policy) => (
              <article key={policy.id} className="border-t border-primary pt-5">
                <h2 className="text-title text-surface-elevated">{policy.title}</h2>
                <p className="mt-3 text-sm text-warm-gray-300">{policy.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-sm text-warm-gray-300">
            Uso exclusivo de herramientas operativas para fines de seguridad. Se prohíbe la
            extracción o difusión de imágenes y video sin autorización; se aplican protocolos de
            resguardo e inventario de evidencias.
          </p>
        </Container>
      </section>
    </>
  );
}
