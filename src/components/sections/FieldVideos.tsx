import { Container } from "@/components/common/Container";
import { VideoCard } from "@/components/common/VideoCard";
import { videos } from "@/data/videos";
export function FieldVideos() {
  return (
    <section className="section-y section-rule bg-surface">
      <Container>
        <p className="text-eyebrow text-primary">Operación en campo</p>
        <h2 className="mt-4 text-headline">Tecnología aplicada a la operación</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </Container>
    </section>
  );
}
