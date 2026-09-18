import { ButtonLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import { pageContent } from "@/data/page-content";

export function FinalCta() {
  const content = pageContent.finalCta;
  return (
    <section className="technical-grid relative overflow-hidden border-y border-primary/35 bg-black-950 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-xs font-extrabold tracking-[0.14em] text-silver-100">
                10
              </span>
              <span className="text-eyebrow text-primary">{content.eyebrow}</span>
              <span aria-hidden="true" className="h-px flex-1 bg-primary/45" />
            </div>
            <h2 className="mt-5 text-headline text-surface-elevated">
              {content.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="text-lead mt-6 max-w-2xl text-warm-gray-300">{content.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:justify-end">
            <ButtonLink href="#contacto" variant="onDark" size="lg">
              Solicitar cotización
            </ButtonLink>
            <WhatsAppLink
              variant="outline"
              className="border-primary text-surface-elevated hover:bg-black-850"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
