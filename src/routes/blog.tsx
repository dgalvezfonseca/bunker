import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { posts } from "@/data/posts";
export const Route = createFileRoute("/blog")({
  component: () => (
    <SitePage>
      <PageHero
        eyebrow="Blog"
        title="Información para operar con mayor claridad"
        description="GPS, videovigilancia, custodia y monitoreo."
      />
      <section className="section-y">
        <div className="mx-auto grid max-w-container gap-6 px-5 md:grid-cols-3 sm:px-8 lg:px-12">
          {posts.map((post) => (
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
              />
              <div className="p-5">
                <p className="text-eyebrow text-primary">{post.category}</p>
                <h2 className="mt-3 text-title">{post.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SitePage>
  ),
});
