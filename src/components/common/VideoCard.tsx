import type { Video } from "@/data/videos";

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group overflow-hidden border border-line bg-surface-elevated">
      {video.src ? (
        <video
          controls
          preload="none"
          poster={video.poster.src}
          playsInline
          className="aspect-video w-full object-cover"
        />
      ) : (
        <img
          src={video.poster.src}
          alt={video.poster.alt}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
        />
      )}
      <div className="p-5">
        <h3 className="text-title">{video.title}</h3>
        <p className="mt-2 text-sm text-ink-muted">{video.description}</p>
      </div>
    </article>
  );
}
