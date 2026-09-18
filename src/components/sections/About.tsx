import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { differentiators } from "@/data/differentiators";
import { images } from "@/data/images";
import { pageContent } from "@/data/page-content";

export function About() {
  const content = pageContent.about;
  return (
    <section id="nosotros" className="section-y section-rule bg-surface-elevated">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-16">
          <Reveal className="lg:col-span-5" from="left">
            <SectionHeading
              index="02"
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">{content.body}</p>
            <ol className="mt-10 border-t border-line">
              {differentiators.map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-5"
                >
                  <span className="font-display text-sm font-bold text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal
            className="relative grid grid-cols-12 items-start gap-4 lg:col-span-7"
            delay={120}
            from="right"
          >
            <div className="col-span-12 overflow-hidden rounded-card sm:col-span-9 sm:col-start-4">
              <img
                src={images.accessControl}
                alt="Personal ingresando por un sistema de control de acceso"
                loading="lazy"
                className="h-80 w-full object-cover object-center transition-transform duration-500 hover:scale-[1.025] sm:h-[34rem]"
              />
            </div>
            <img
              src={images.aboutCorporate}
              alt="Equipo reunido para revisar la planeación de un proyecto"
              loading="lazy"
              className="col-span-8 -mt-12 h-44 w-full rounded-card border-4 border-surface-elevated object-cover sm:col-span-6 sm:-mt-20 sm:h-64"
            />
            <div className="col-span-10 col-start-3 -mt-4 ml-auto w-full max-w-sm border-t border-primary bg-black-950 p-5 text-warm-gray-100 sm:-mt-16 sm:col-span-7">
              <p className="text-eyebrow text-silver-100">{content.variablesLabel}</p>
              <p className="mt-3 text-sm leading-relaxed">{content.variables}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
