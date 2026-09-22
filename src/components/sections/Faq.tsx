import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Icon } from "@/components/common/Icon";
import { faqs } from "@/data/faq";
import { pageContent } from "@/data/page-content";

export function Faq() {
  const content = pageContent.faq;
  return (
    <section id="faq" className="section-y section-rule bg-surface">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <SectionHeading
            index="08"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="border-t border-black-950">
            {faqs
              .filter((faq) => faq.published)
              .map((faq, i) => (
                <Reveal key={faq.question} delay={i * 55} from={i % 2 === 0 ? "up" : "left"}>
                  <details className="group border-b border-line py-1">
                    <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-ink transition-colors duration-[180ms] hover:text-primary">
                      {faq.question}
                      <Icon
                        name="expand_more"
                        className="text-2xl text-primary transition-transform duration-[220ms] ease-out group-open:rotate-180"
                      />
                    </summary>
                    <div className="faq-answer">
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </details>
                </Reveal>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
