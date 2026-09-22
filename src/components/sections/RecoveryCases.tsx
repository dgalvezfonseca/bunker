import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ButtonLink } from "@/components/common/Button";
import { caseStudies, recoveryDisclaimer, recoverySection } from "@/data/caseStudies";

export function RecoveryCases() {
  return (
    <section className="section-y overflow-hidden border-y border-line bg-surface-elevated">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[minmax(0,.86fr)_minmax(0,1.14fr)] xl:gap-20">
          <Reveal from="left">
            <p className="text-eyebrow text-primary">{recoverySection.eyebrow}</p>
            <h2 className="mt-5 max-w-2xl text-headline">{recoverySection.title}</h2>
            <p className="text-lead mt-6 max-w-xl text-ink-muted">{recoverySection.description}</p>
            <div className="mt-10 border-l-2 border-primary pl-5 sm:pl-7">
              <p className="text-stat text-primary">{recoverySection.stat}</p>
              <p className="mt-5 max-w-sm text-lg font-semibold leading-snug text-ink">
                {recoverySection.statLabel}
              </p>
            </div>
            <ButtonLink href="/casos-de-exito" className="mt-10">
              {recoverySection.cta}
              <span aria-hidden="true">↗</span>
            </ButtonLink>
          </Reveal>
          <Reveal from="right" delay={110}>
            <ol className="recovery-timeline relative grid gap-0 border-t border-line">
              {caseStudies.map((item, index) => (
                <li
                  key={item.id}
                  className="group relative grid grid-cols-[3.75rem_1fr] gap-4 border-b border-line py-7 sm:grid-cols-[6rem_1fr] sm:py-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-px w-full origin-left scale-x-[0.09] bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <span className="font-display text-sm font-extrabold tracking-[0.14em] text-primary">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-eyebrow text-ink-muted">{item.title}</p>
                    <p className="text-metric mt-2 text-ink">{item.duration}</p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                      {item.category} · {item.result}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <p className="mt-10 max-w-3xl border-l border-line pl-4 text-xs leading-relaxed text-ink-muted">
          {recoveryDisclaimer}
        </p>
      </Container>
    </section>
  );
}
