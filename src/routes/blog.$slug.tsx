import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/common/PageHero";
import { SitePage } from "@/components/layout/SitePage";
import { posts } from "@/data/posts";
export const Route = createFileRoute("/blog/$slug")({ component: PostDetail });
function PostDetail() {
  const { slug } = Route.useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) throw notFound();
  return (
    <SitePage>
      <PageHero eyebrow={post.category ?? "Blog"} title={post.title} description={post.excerpt} />
      <article className="section-y">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-lead text-ink-muted">
            Contenido editorial inicial pendiente de la versión final aprobada por BÚNKER.
          </p>
        </div>
      </article>
    </SitePage>
  );
}
