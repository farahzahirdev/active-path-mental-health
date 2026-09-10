"use client";

import Image from "next/image";
import { useState } from "react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Reveal, StaggerGrid } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type VideoKey = keyof typeof site.videos;

function VideoCard({
  videoKey,
  label,
  description,
}: {
  videoKey: VideoKey;
  label: string;
  description: string;
}) {
  const [playing, setPlaying] = useState(false);
  const video = site.videos[videoKey];
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <article className="bt-card flex h-full flex-col !p-0 overflow-hidden">
      <div className="video-facade">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="video-facade-iframe"
          />
        ) : (
          <button
            type="button"
            className="video-facade-btn relative group"
            aria-label={`Play video: ${video.title}`}
            onClick={() => setPlaying(true)}
          >
            <Image
              src={thumb}
              alt=""
              fill
              className="object-cover transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            />
            <span className="video-play" aria-hidden />
          </button>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-bt-accent">
          {label} · {video.service}
        </p>
        <h3 className="mt-2 text-lg leading-snug">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-bt-body">{description}</p>
      </div>
    </article>
  );
}

export function SupportiveVideos() {
  return (
    <section id="videos" className="bt-section bt-section-alt" aria-labelledby="videos-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={copy.supportiveVideos.eyebrow}
            headline={copy.supportiveVideos.headline}
            body={copy.supportiveVideos.body}
          />
        </Reveal>

        <StaggerGrid className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" staggerMs={90}>
          {copy.supportiveVideos.items.map((item) => (
            <VideoCard
              key={item.videoKey}
              videoKey={item.videoKey}
              label={item.label}
              description={item.description}
            />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
