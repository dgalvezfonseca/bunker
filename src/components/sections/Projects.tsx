import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="proyectos" className="section-y bg-surface-elevated">
      <Container>
        <SectionHeading
          eyebrow="Proyectos"
          title="Instalaciones representativas"
          description="Ejemplos del tipo de proyectos que desarrollamos. (Contenido de muestra: pendiente sustituir por casos reales.)"
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <article className="flex h-full flex-col overflow-hidden rounded-card border border-line/70 bg-surface-elevated shadow-soft">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-eyebrow text-primary">{project.category}</span>
                  <h3 className="text-title">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
