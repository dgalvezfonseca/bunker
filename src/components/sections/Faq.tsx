import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Icon } from "@/components/common/Icon";
import { faqs } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="section-y bg-surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Respuestas rápidas"
            description="Si tu duda no aparece aquí, escríbenos y con gusto te orientamos."
          />

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 60}>
                <details className="group rounded-card border border-line/70 bg-surface-elevated p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
                    {faq.question}
                    <Icon
                      name="expand_more"
                      className="text-2xl text-primary transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
