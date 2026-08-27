import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { sectors } from "@/data/sectors";

export function Sectors() {
  return (
    <section id="sectores" className="section-y bg-surface-elevated">
      <Container>
        <SectionHeading
          eyebrow="Sectores"
          title="Soluciones para cada tipo de sitio"
          description="Adaptamos la tecnología y el diseño de la instalación al entorno donde opera."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => (
            <Reveal key={sector.id} delay={i * 80}>
              <article className="group relative h-72 overflow-hidden rounded-card shadow-soft">
                <img
                  src={sector.image}
                  alt={`Sector ${sector.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-surface-elevated">{sector.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-soft/80">
                    {sector.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
