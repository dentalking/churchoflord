"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { youtubeThumbnail } from "@/lib/youtube";

// 썸네일을 먼저 보여주고, 누르면 그 자리에서 영상을 재생합니다.
// (페이지 로딩 시 유튜브 플레이어를 미리 불러오지 않아 화면이 가볍습니다)
export function YoutubePlayer({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video relative bg-black">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group aspect-video relative w-full bg-stone-900 overflow-hidden"
      aria-label={`${title} 영상 재생`}
    >
      <Image
        src={youtubeThumbnail(id)}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 640px"
      />
      <span className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 shadow-lg group-hover:scale-110 transition-transform">
          <Play className="h-7 w-7 md:h-8 md:w-8 text-stone-900 ml-1" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}
