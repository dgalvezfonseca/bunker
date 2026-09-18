import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { blogPosts } from "@/data/blog";
import { pageContent } from "@/data/page-content";

export function Blog() {
  const content = pageContent.blog;
  return (
    <section id="recursos" className="section-y section-rule bg-surface-elevated">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} className="max-w-2xl" />
        {blogPosts.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-t-2 border-primary pt-5">
                {post.cover ? (
                  <img
                    src={post.cover.src}
                    alt={post.cover.alt}
                    className="mb-5 h-48 w-full object-cover"
                  />
                ) : null}
                {post.category ? (
                  <p className="text-eyebrow text-primary">{post.category}</p>
                ) : null}
                <h3 className="mt-2 text-title">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-8 border-l-2 border-primary pl-4 text-sm text-ink-muted">
            {content.emptyMessage}
          </p>
        )}
      </Container>
    </section>
  );
}
