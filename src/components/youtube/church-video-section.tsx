import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YoutubePlayer } from "./youtube-player";
import { ShortsRow } from "./shorts-row";
import {
  getChurchVideos,
  formatVideoDate,
  YOUTUBE_CHANNEL_URL,
  YOUTUBE_LIVE_URL,
  YOUTUBE_SHORTS_URL,
  YOUTUBE_SUBSCRIBE_URL,
} from "@/lib/youtube";

// 홈페이지용: 영상으로 교회를 먼저 만나고 → 직접 방문하도록 이어주는 섹션
export async function ChurchVideoSection() {
  const videos = await getChurchVideos();
  const latestSermon = videos.find((v) => v.kind === "sermon");
  const shorts = videos.filter((v) => v.kind === "short").slice(0, 8);
  const hasLive = videos.some((v) => v.kind === "live");

  return (
    <section className="py-16 md:py-24 bg-stone-100" aria-labelledby="video-section-title">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 mb-10 md:mb-14">
          <h2 id="video-section-title" className="lg:col-span-6 text-3xl md:text-5xl leading-tight text-stone-900">
            오시기 전에,
            <br />
            영상으로 먼저 만나보세요
          </h2>
          <div className="lg:col-span-6 lg:pt-2">
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg mb-5">
              처음 가는 교회는 누구에게나 낯설어요. 어떤 말씀을 나누는지, 어떤 분위기인지 미리 보고 편한 마음으로
              오세요.
            </p>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-stone-900 underline underline-offset-[6px] decoration-stone-300 hover:decoration-stone-900"
            >
              경주 주님의교회 유튜브 채널
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {latestSermon && (
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-2xl overflow-hidden mb-14 md:mb-20">
            <div className="lg:col-span-8">
              <YoutubePlayer id={latestSermon.id} title={latestSermon.title} />
            </div>
            <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between gap-8">
              <div>
                <p className="text-sm text-pine-700 mb-3">최근 설교</p>
                <h3 className="text-2xl md:text-3xl leading-snug text-stone-900 mb-4">{latestSermon.title}</h3>
                <dl className="text-sm text-stone-600 space-y-1">
                  {latestSermon.scripture && (
                    <div className="flex gap-3">
                      <dt className="text-stone-500 w-12 shrink-0">본문</dt>
                      <dd>{latestSermon.scripture}</dd>
                    </div>
                  )}
                  {latestSermon.preacher && (
                    <div className="flex gap-3">
                      <dt className="text-stone-500 w-12 shrink-0">설교</dt>
                      <dd>{latestSermon.preacher}</dd>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <dt className="text-stone-500 w-12 shrink-0">올린 날</dt>
                    <dd>{formatVideoDate(latestSermon.publishedAt)}</dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
                <Link href="/sermons" className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900">
                  설교 더 보기
                </Link>
                {hasLive && (
                  <a
                    href={YOUTUBE_LIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900"
                  >
                    실시간 예배 방송
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {shorts.length > 0 && (
          <div className="mb-14 md:mb-20">
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <h3 className="text-2xl md:text-3xl text-stone-900 mb-1">1분 말씀</h3>
                <p className="text-stone-600">설교 속 한 마디를 짧게 담았어요</p>
              </div>
              <a
                href={YOUTUBE_SHORTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900 shrink-0"
              >
                전체 보기
              </a>
            </div>
            <ShortsRow shorts={shorts} />
          </div>
        )}

        {/* 영상 → 방문으로 이어지는 다리 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-stone-900 max-w-xl">
            화면 너머가 아니라, 같은 자리에서 함께 예배해요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button size="lg" className="h-12 md:h-12 px-6 rounded-lg" asChild>
              <Link href="/contact?type=first-visit">이번 주일 방문하기</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 md:h-12 px-6 rounded-lg bg-transparent border-stone-300" asChild>
              <a href={YOUTUBE_SUBSCRIBE_URL} target="_blank" rel="noopener noreferrer">
                유튜브 구독하기
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
