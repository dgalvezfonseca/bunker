import { Container } from "@/components/common/Container";
import { ButtonLink } from "@/components/common/Button";
import { WhatsAppLink } from "@/components/common/WhatsAppButton";
import { heroHighlights } from "@/data/differentiators";
import { images } from "@/data/images";
import { pageContent } from "@/data/page-content";

export function Hero() {
  const content = pageContent.hero;
  return (
    <section id="inicio" className="technical-grid overflow-hidden bg-surface-elevated">
      <Container className="pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-5">
            <div className="hero-enter flex items-center gap-3" style={{ animationDelay: "40ms" }}>
              <span className="font-display text-xs font-extrabold tracking-[0.14em] text-primary">
                01
              </span>
              <span className="text-eyebrow text-primary">{content.eyebrow}</span>
              <span aria-hidden="true" className="h-px flex-1 bg-primary/30" />
            </div>
            <h1
              className="hero-enter mt-6 text-display max-w-4xl text-primary-dark lg:text-[clamp(3.75rem,4.2vw,5rem)]"
              style={{ animationDelay: "110ms" }}
            >
              {content.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="hero-enter text-lead mt-7 max-w-xl text-ink-muted"
              style={{ animationDelay: "190ms" }}
            >
              {content.description}
            </p>

            <div
              className="hero-enter mt-8 flex flex-col gap-3 min-[431px]:flex-row min-[431px]:flex-wrap"
              style={{ animationDelay: "270ms" }}
            >
              <ButtonLink href="#contacto" size="lg" className="max-[430px]:w-full">
                Solicitar cotización
              </ButtonLink>
              <WhatsAppLink variant="outline" />
            </div>

            <ul
              className="hero-enter mt-12 grid grid-cols-2 border border-line bg-surface-elevated/90"
              style={{ animationDelay: "350ms" }}
            >
              {heroHighlights.map((item, index) => (
                <li
                  key={item.label}
                  className="grid min-h-16 grid-cols-[1.5rem_1fr] items-center border-b border-line px-3 py-3 text-sm font-semibold text-ink odd:border-r sm:px-4 [&:nth-last-child(-n+2)]:border-b-0"
                >
                  <span className="text-xs font-bold text-primary">0{index + 1}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-media-enter relative aspect-[4/5] min-h-96 sm:aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[44rem]">
            <div
              aria-hidden="true"
              className="hero-line-enter absolute -top-4 right-0 h-px w-40 bg-primary lg:-right-4"
            />
            <img
              src={images.hero}
              alt="Técnico configurando una cámara de seguridad en una instalación corporativa"
              className="absolute inset-0 h-full w-full rounded-card object-cover object-[58%_center]"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute right-0 bottom-0 bg-primary-dark px-5 py-4 text-surface-elevated sm:px-6">
              <p className="text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
                {content.mediaCaption}
              </p>
            </div>
            <span className="absolute top-8 -left-5 hidden font-display text-xs font-bold tracking-[0.18em] text-primary uppercase [writing-mode:vertical-rl] xl:block">
              {content.mediaLabel}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
