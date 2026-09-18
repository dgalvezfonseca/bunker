import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { pageContent } from "@/data/page-content";

export function Projects() {
  const content = pageContent.projects;
  return (
    <section id="proyectos" className="section-y section-rule bg-surface-elevated">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index="07"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
            className="lg:col-span-8"
          />
          <p className="border-l-2 border-primary pl-4 text-xs font-semibold tracking-[0.08em] text-ink-muted uppercase lg:col-span-4 lg:justify-self-end">
            {content.notice}
            <span className="mt-1 block normal-case tracking-normal">
              {content.noticeDescription}
            </span>
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-10 lg:grid-cols-12">
          {projects.map((project, index) => {
            const isPrimary = index === 0;
            const isWide = index === projects.length - 1;
            return (
              <Reveal
                key={project.id}
                delay={Math.min(index * 80, 180)}
                from={isPrimary ? "scale" : index % 2 === 0 ? "left" : "right"}
                className={cn(
                  isPrimary && "lg:col-span-7 lg:row-span-2",
                  !isPrimary && !isWide && "lg:col-span-5",
                  isWide && "lg:col-span-12",
                )}
              >
                <ProjectArticle project={project} primary={isPrimary} wide={isWide} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ProjectArticle({
  project,
  primary,
  wide,
}: {
  project: Project;
  primary: boolean;
  wide: boolean;
}) {
  const content = pageContent.projects;
  return (
    <article
      className={cn(
        "group h-full border-t border-black-950 pt-3",
        wide && "lg:grid lg:grid-cols-12 lg:gap-8",
      )}
    >
      <div className={cn("relative overflow-hidden rounded-card", wide && "lg:col-span-8")}>
        <img
          src={project.cover.src}
          alt={project.cover.alt}
          loading="lazy"
          className={cn(
            "w-full object-cover transition-transform duration-[260ms] ease-out motion-safe:group-hover:scale-[1.02]",
            primary
              ? "h-80 sm:h-[34rem] lg:h-[42rem]"
              : wide
                ? "h-72 sm:h-96 lg:h-[30rem]"
                : "h-64 sm:h-72",
          )}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-black-950/0 transition-colors duration-[220ms] group-hover:bg-black-950/10"
        />
        <span className="absolute top-0 left-0 bg-black-950 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-silver-100 uppercase">
          {project.category}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-col gap-3 border-b border-line py-6 transition-transform duration-[220ms] ease-out motion-safe:group-hover:-translate-y-0.5",
          wide && "lg:col-span-4 lg:justify-end lg:border-b-0 lg:py-10",
        )}
      >
        <span className="text-xs font-semibold tracking-[0.12em] text-primary uppercase">
          {content.scopeLabel}
        </span>
        <h3 className={cn("text-title", wide && "lg:text-3xl")}>{project.title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <p className="mt-auto pt-2 text-xs font-semibold tracking-[0.08em] text-primary uppercase">
          {project.technologies.join(" · ")}
        </p>
      </div>
    </article>
  );
}
