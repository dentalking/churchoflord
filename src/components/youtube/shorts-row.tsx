import Image from "next/image";
import { Play } from "lucide-react";
import { type ChurchVideo, youtubeThumbnail } from "@/lib/youtube";

// 세로형 쇼츠 카드를 가로로 스크롤되는 줄로 보여줍니다. (모바일에서 손가락으로 넘기기 좋게)
export function ShortsRow({ shorts }: { shorts: ChurchVideo[] }) {
  if (shorts.length === 0) return null;

  return (
    <ul className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5 md:-mx-10 md:px-10 scroll-px-5 md:scroll-px-10 [scrollbar-width:thin]">
      {shorts.map((short) => (
        <li key={short.id} className="snap-start shrink-0 w-[42%] sm:w-[30%] md:w-[22%] lg:w-[18%]">
          <a
            href={short.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            aria-label={`${short.title} 쇼츠 보기 (유튜브 새 창)`}
          >
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-stone-900">
              {/* 쇼츠의 hqdefault 썸네일은 4:3 안에 세로 영상이 들어 있어 9:16으로 자르면 꽉 찹니다 */}
              <Image
                src={youtubeThumbnail(short.id)}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 42vw, (max-width: 1024px) 30vw, 200px"
              />
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm">
                <Play className="h-3.5 w-3.5 text-white ml-0.5" fill="currentColor" />
              </span>
              <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-medium text-white leading-snug line-clamp-2">
                {short.title}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
