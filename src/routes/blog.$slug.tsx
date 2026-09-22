import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((item) => item.slug === params.slug);
    return post
      ? {
          meta: [{ title: post.metaTitle }, { name: "description", content: post.metaDescription }],
        }
      : {};
  },
  component: PostDetail,
});

function PostDetail() {
  const { slug } = Route.useParams();
  const post = posts.find((item) => item.slug === slug && item.published);
  if (!post) throw notFound();
  return (
    <SitePage>
      <PageHero eyebrow={post.category ?? "Blog"} title={post.title} description={post.excerpt} />
      <article className="section-y">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <img
            src={post.cover?.src}
            alt={post.cover?.alt}
            className="mb-10 aspect-[16/9] w-full object-cover"
            style={{ objectPosition: post.cover?.objectPosition }}
          />
          {post.sections?.map((section, index) => (
            <section key={section.heading ?? index} className="mb-10 last:mb-0">
              <>{section.heading ? <h2 className="text-title mb-4">{section.heading}</h2> : null}</>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mb-4 text-base leading-8 text-ink-muted">
                  {paragraph}
                </p>
              ))}
              {section.items?.length ? (
                <ul className="mb-4 list-disc space-y-2 pl-5 text-ink-muted">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <Link
            to={post.cta.href}
            className="inline-flex border-b border-primary pb-1 text-sm font-semibold text-primary"
          >
            {post.cta.label} ↗
          </Link>
          <p className="mt-10 border-t border-line pt-5 text-sm leading-relaxed text-ink-muted">
            Contenido de carácter informativo. Las características, capacidades y resultados de las
            tecnologías descritas pueden variar según fabricante, modelo, configuración y
            condiciones de operación.
          </p>
        </div>
      </article>
    </SitePage>
  );
}
