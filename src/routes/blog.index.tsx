import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { blogCategories, posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | BÚNKER Servicios Integrales de Tecnología" },
      {
        name: "description",
        content: "Guías sobre rastreo GPS, videovigilancia, custodia y monitoreo para operaciones.",
      },
    ],
  }),
  component: BlogIndex,
});
function BlogIndex() {
  return (
    <SitePage>
      <PageHero
        eyebrow="Blog"
        title="Información para operar con mayor claridad"
        description="GPS, videovigilancia, custodia y monitoreo."
      />
      <section className="section-y">
        <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
          <p className="max-w-3xl text-lead text-ink-muted">
            Guías y temas editoriales preparados para publicación por BÚNKER.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-primary">
            {blogCategories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts
              .filter((post) => post.published)
              .map((post) => (
                <Link
                  key={post.id}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="border border-line bg-surface-elevated"
                >
                  <img
                    src={post.cover?.src}
                    alt={post.cover?.alt}
                    className="aspect-video w-full object-cover"
                    style={{ objectPosition: post.cover?.objectPosition }}
                  />
                  <div className="p-5">
                    <p className="text-eyebrow text-primary">{post.category}</p>
                    <h2 className="mt-3 text-title">{post.title}</h2>
                    <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
