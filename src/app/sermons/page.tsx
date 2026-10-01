import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { YoutubePlayer } from "@/components/youtube/youtube-player";
import { ShortsRow } from "@/components/youtube/shorts-row";
import {
  getChurchVideos,
  formatVideoDate,
  type ChurchVideo,
  YOUTUBE_CHANNEL_URL,
  YOUTUBE_LIVE_URL,
  YOUTUBE_SHORTS_URL,
  YOUTUBE_SUBSCRIBE_URL,
} from "@/lib/youtube";
import { SermonArchive } from "./sermon-archive";

export const metadata: Metadata = {
  title: "설교 영상",
  description: "경주 주님의교회 유튜브에서 매주 전해지는 설교와 1분 말씀을 만나보세요.",
};

function sermonMeta(video: ChurchVideo) {
  return [video.scripture, video.preacher, formatVideoDate(video.publishedAt)].filter(Boolean).join(", ");
}

const textLink =
  "font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900";

export default async function SermonsPage() {
  const videos = await getChurchVideos();
  const sermons = videos.filter((v) => v.kind === "sermon");
  const shorts = videos.filter((v) => v.kind === "short");
  const [latest, ...olderSermons] = sermons;

  return (
    <>
      <div className="container pt-10 pb-16 md:pt-16 md:pb-24">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 mb-12 md:mb-16">
          <h1 className="lg:col-span-6 text-5xl md:text-7xl leading-tight text-stone-900">말씀의 은혜</h1>
          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg mb-6">
              주님의교회에서 함께 나눈 말씀입니다. 집에서 먼저 들어보시고, 마음이 움직이면 주일에 직접 들으러 오세요.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href={YOUTUBE_SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
                유튜브 구독하기
              </a>
              <a href={YOUTUBE_LIVE_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
                실시간 예배 방송
              </a>
            </div>
          </div>
        </header>

        {videos.length === 0 && (
          <div className="rounded-2xl bg-stone-100 p-8 md:p-12">
            <p className="text-stone-700 mb-4">
              지금은 영상 목록을 불러올 수 없습니다. 유튜브 채널에서 모든 설교를 보실 수 있어요.
            </p>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className={textLink}>
              경주 주님의교회 유튜브 열기
            </a>
          </div>
        )}

        {latest && (
          <section aria-labelledby="latest-sermon" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="lg:col-span-8 rounded-2xl overflow-hidden">
              <YoutubePlayer id={latest.id} title={latest.title} />
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-pine-700 mb-3">최근 설교</p>
              <h2 id="latest-sermon" className="text-3xl md:text-4xl leading-snug text-stone-900 mb-3">
                {latest.title}
              </h2>
              <p className="text-stone-600">{sermonMeta(latest)}</p>
            </div>
          </section>
        )}
      </div>

      {shorts.length > 0 && (
        <section aria-labelledby="shorts-title" className="bg-stone-100 py-16 md:py-24">
          <div className="container">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h2 id="shorts-title" className="text-3xl md:text-4xl text-stone-900 mb-1">1분 말씀</h2>
                <p className="text-stone-600">설교 속 한 마디를 짧게 담았어요</p>
              </div>
              <a href={YOUTUBE_SHORTS_URL} target="_blank" rel="noopener noreferrer" className={`text-sm shrink-0 ${textLink}`}>
                전체 보기
              </a>
            </div>
            <ShortsRow shorts={shorts} />
          </div>
        </section>
      )}

      {olderSermons.length > 0 && (
        <section aria-labelledby="more-sermons" className="container py-16 md:py-24">
          <h2 id="more-sermons" className="text-3xl md:text-4xl text-stone-900 mb-8">지난 설교</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {olderSermons.map((sermon) => (
              <article key={sermon.id}>
                <div className="rounded-xl overflow-hidden mb-4">
                  <YoutubePlayer id={sermon.id} title={sermon.title} />
                </div>
                <h3 className="text-xl text-stone-900 mb-1">{sermon.title}</h3>
                <p className="text-sm text-stone-600">{sermonMeta(sermon)}</p>
              </article>
            ))}
          </div>
          <a
            href={`${YOUTUBE_CHANNEL_URL}/videos`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-10 ${textLink}`}
          >
            유튜브에서 모든 설교 보기
          </a>
        </section>
      )}

      <section className="bg-pine-800 text-stone-50">
        <div className="container py-16 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl leading-tight mb-4">말씀이 마음에 닿으셨나요?</h2>
            <p className="text-lg text-stone-50/80 max-w-lg leading-relaxed">
              같은 말씀도 함께 모여 들으면 다르게 다가옵니다. 주일 오전 11시, 경주역에서 차로 10분 거리에서
              기다릴게요.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button size="lg" className="h-12 md:h-12 px-6 rounded-lg bg-stone-50 text-stone-900 hover:bg-white" asChild>
              <Link href="/contact?type=first-visit">처음 방문 문의하기</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 md:h-12 px-6 rounded-lg bg-transparent text-stone-50 border-stone-50/40 hover:bg-stone-50/10 hover:text-stone-50" asChild>
              <Link href="/directions">오시는 길</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container">
        <SermonArchive />
      </div>
    </>
  );
}
