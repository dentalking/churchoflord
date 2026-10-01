// src/app/page.tsx
// 문구의 인용은 방재홍·정성아 목사님의 2026년 7~9월 설교 녹취에서 가져왔습니다.
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiscipleshipJourney } from "@/components/ui/discipleship-journey";
import { ChurchVideoSection } from "@/components/youtube/church-video-section";

const facts = [
  { href: "/worship", label: "주일예배", value: "오전 11시", note: "예배 후 함께 점심을 나눠요" },
  { href: "/directions", label: "오시는 길", value: "경주역에서 10분", note: "역까지 모시러 갑니다" },
  { href: "/about", label: "공동체", value: "20명 이하", note: "모두가 서로의 이름을 알아요" },
  { href: "/sermons", label: "온라인", value: "유튜브 예배", note: "설교와 실시간 방송" },
];

const visions = [
  { name: "거룩한 교회", body: "말씀과 기도로 날마다 거룩해집니다." },
  { name: "건강한 교회", body: "전도와 헌신으로 건강하게 자랍니다." },
  { name: "행복한 교회", body: "섬기고 나누고 베풀며 행복해집니다." },
];

const welcomes = [
  {
    title: "누구든 사랑으로 맞이합니다",
    body: "예수님을 알고 싶어 오시는 분이라면 누구든 환영합니다. 지난날로 사람을 판단하지 않습니다.",
  },
  {
    title: "밥 한 끼부터 함께해요",
    body: "예배가 끝나면 함께 점심을 먹습니다. 힘들고 지친 날일수록 먼저 건네는 말은 “밥 먹자”입니다.",
  },
  {
    title: "늦은 때란 없습니다",
    body: "하나님은 우리를 아침마다 새롭게 하십니다. 하나님의 달력에는 정년퇴직이 없으니까요.",
  },
];

const pastors = [
  {
    name: "방재홍 담임목사",
    style:
      "성경 원어를 생활의 말로 풀고, 장독대 항아리와 교회 뒤 고구마밭 같은 우리 곁의 그림으로 말씀을 전합니다.",
    quote: "믿습니다 소리를 백 번 하는 것보다 한 발 발을 떼는 것이 믿음입니다.",
    source: "「떠나라 보여줄 땅으로」 중에서",
  },
  {
    name: "정성아 협동목사",
    style:
      "사도행전을 차례로 읽으며, 초대교회의 이야기를 오늘 박달에 있는 우리 교회의 이야기로 이어 갑니다.",
    quote: "소수의 무리라 할지라도 성령 하나님은 역사하실 줄 믿습니다.",
    source: "「성령이 임하시고」 중에서",
  },
];

const ministries = [
  { name: "예배팀", description: "찬양, 음향, 영상" },
  { name: "교육팀", description: "주일학교, 청년부" },
  { name: "봉사팀", description: "친교, 환경, 안내" },
  { name: "전도팀", description: "꽃밭 전도, 심방" },
  { name: "선교팀", description: "국내외 선교 지원" },
  { name: "행정팀", description: "재정, 서기, 홍보" },
  { name: "콩과나무로", description: "나눔 프로젝트" },
  { name: "기도팀", description: "중보기도, 기도회" },
];

const textLink =
  "inline-flex items-center gap-2 font-medium text-stone-900 underline underline-offset-[6px] decoration-stone-300 hover:decoration-stone-900";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. 히어로 — 골로새서 2:6-7, 「깊게 곧게 넘치게」 */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-[2.5rem] leading-[1.2] sm:text-6xl lg:text-7xl lg:leading-[1.12] text-stone-900 mb-6 md:mb-8">
              뿌리는 깊게,
              <br />
              줄기는 곧게,
              <br />
              열매는 넘치게
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl mb-8 md:mb-10">
              경주 내남면 박달, 산자락의 작은 교회입니다. 은혜에 뿌리를 내리고 날마다 조금씩 새로워지는 공동체로
              당신을 초대합니다.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <Button size="lg" className="h-12 md:h-12 px-7 text-base rounded-lg" asChild>
                <Link href="/worship">예배 안내 보기</Link>
              </Button>
              <Link href="/directions" className={`h-12 text-base ${textLink}`}>
                오시는 길
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200">
              <Image
                src="/images/hero/KakaoTalk_20250416_201705309.jpg"
                alt="소나무와 꽃밭이 있는 주님의교회 마당"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 한눈에 보는 안내 */}
      <section aria-label="교회 안내 요약" className="pb-16 md:pb-24">
        <div className="container">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 rounded-2xl overflow-hidden">
            {facts.map((fact) => (
              <li key={fact.href} className="bg-stone-100">
                <Link
                  href={fact.href}
                  className="block h-full p-5 md:p-7 hover:bg-stone-200/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-pine-500"
                >
                  <p className="text-sm text-stone-500 mb-2">{fact.label}</p>
                  <p className="font-serif text-xl md:text-2xl text-stone-900 mb-1">{fact.value}</p>
                  <p className="text-sm text-stone-600">{fact.note}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. 이름과 비전 — 「오직 겸손함으로」 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-5xl leading-tight text-stone-900 mb-6">
              주님의 교회는
              <br />
              사람의 교회가 아닙니다
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg mb-5">
              예수님이 이 교회의 머리이시고, 주님이 가장 섬김받고 영광 받으시기를 바라며 지은 이름입니다.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed max-w-lg mb-8">
              이곳은 본래 농협 창고였습니다. 예수 믿는 사람들이 모여 예배하니 예배당이 되었습니다. 세상의 기준으로
              크게 자라려고 세운 교회가 아니라, 한 영혼이 천하보다 귀하기에 이 마을에 세운 교회입니다.
            </p>
            <Link href="/about" className={textLink}>
              교회 소개 읽기
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <dl className="lg:col-span-6 grid gap-8 md:gap-10 content-start lg:pt-3">
            {visions.map((v) => (
              <div key={v.name}>
                <dt className="font-serif text-3xl md:text-4xl text-pine-700 mb-2">{v.name}</dt>
                <dd className="text-stone-600 leading-relaxed">{v.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4. 작은 교회의 뿌리 — 「깊게 곧게 넘치게」 */}
      <section className="py-16 md:py-24 bg-pine-50">
        <div className="container">
          <figure className="max-w-4xl">
            <blockquote className="font-serif text-2xl md:text-4xl leading-snug md:leading-snug text-stone-900">
              “나무가 백 그루가 있어도 뿌리가 깊게 안 되면 다 뽑히고요. 두세 그루가 있어도 뿌리를 깊이 내리면 그
              나무가 그 자리를 지킵니다.”
            </blockquote>
            <figcaption className="mt-6 text-stone-600">
              방재홍 담임목사, 「깊게 곧게 넘치게」(골로새서 2:6-7) 중에서
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. 처음 오시는 분께 */}
      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl leading-tight text-stone-900 mb-5">
              처음 오시는
              <br />
              당신께
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed max-w-md mb-8">
              스무 명이 채 되지 않는 작은 공동체라, 목사님이 모든 성도의 이름과 이야기를 기억합니다.
            </p>
            <Link href="/newcomer" className={textLink}>
              새가족 안내 보기
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid gap-10 md:gap-12">
            {welcomes.map((w) => (
              <div key={w.title}>
                <h3 className="text-2xl text-stone-900 mb-3">{w.title}</h3>
                <p className="text-stone-600 leading-relaxed max-w-xl">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 말씀을 전하는 사람들 */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="pastors-title">
        <div className="container">
          <h2 id="pastors-title" className="text-3xl md:text-5xl leading-tight text-stone-900 mb-10 md:mb-14">
            말씀을 전하는 사람들
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
            {pastors.map((p) => (
              <article key={p.name}>
                <h3 className="text-2xl text-stone-900 mb-3">{p.name}</h3>
                <p className="text-stone-600 leading-relaxed max-w-lg mb-6">{p.style}</p>
                <figure>
                  <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-pine-800 max-w-lg">
                    “{p.quote}”
                  </blockquote>
                  <figcaption className="mt-2 text-sm text-stone-500">{p.source}</figcaption>
                </figure>
              </article>
            ))}
          </div>
          <Link href="/about#pastors" className={`mt-10 md:mt-14 ${textLink}`}>
            목회자 소개 더 보기
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 7. 유튜브 - 영상으로 먼저 만나기 */}
      <ChurchVideoSection />

      {/* 8. 제자훈련 과정 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <DiscipleshipJourney />
        </div>
      </section>

      {/* 9. 함께 섬기기 — 「오직 겸손함으로」 */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-12 md:mb-16">
            <h2 className="lg:col-span-6 text-3xl md:text-5xl leading-tight text-stone-900">
              함께 복음을 연주하는
              <br />
              공동체
            </h2>
            <div className="lg:col-span-6 lg:pt-2">
              <p className="text-lg text-stone-600 leading-relaxed max-w-lg mb-4">
                피아노 반주가 드러나지 않아도 찬양 전체를 받쳐 주듯, 섬기는 한 사람이 교회를 세웁니다. 찬양을
                좋아하시나요? 요리를 잘하시나요? 꽃을 가꾸시나요? 그 마음이 주님의 교회를 풍성하게 합니다.
              </p>
              <figure>
                <blockquote className="font-serif text-lg text-pine-800">“성숙한 사람이 바보가 아닙니다. 섬기는 사람이 바보가 아니에요.”</blockquote>
                <figcaption className="mt-1 text-sm text-stone-500">방재홍 담임목사, 「오직 겸손함으로」 중에서</figcaption>
              </figure>
            </div>
          </div>

          <div className="rounded-2xl bg-stone-100 p-6 md:p-10">
            <h3 className="text-xl md:text-2xl text-stone-900 mb-6">지금 함께할 사역</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 mb-8">
              {ministries.map((m) => (
                <li key={m.name}>
                  <p className="font-medium text-stone-900">{m.name}</p>
                  <p className="text-sm text-stone-500">{m.description}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="h-12 md:h-12 px-6 rounded-lg" asChild>
                <Link href="/contact?type=ministry">사역 참여 신청하기</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 md:h-12 px-6 rounded-lg bg-transparent" asChild>
                <Link href="/activities#ministry">사역팀 자세히 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. 방문 안내 — 요한복음 7:37 */}
      <section className="bg-pine-800 text-stone-50">
        <div className="container py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="font-serif text-lg text-pine-200 mb-4">누구든지 목마르거든 내게로 와서 마시라 (요 7:37)</p>
            <h2 className="text-4xl md:text-6xl leading-tight mb-6">
              이번 주일,
              <br />
              자리를 비워둘게요
            </h2>
            <p className="text-lg leading-relaxed max-w-lg text-stone-50/80">
              경상북도 경주시 내남면 내외로 2175. 경주역에서 차로 10분이고, 미리 연락 주시면 역으로 모시러 갑니다.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
            <Button
              size="lg"
              className="h-12 md:h-12 px-7 text-base rounded-lg w-full sm:w-auto bg-stone-50 text-stone-900 hover:bg-white"
              asChild
            >
              <Link href="/contact?type=first-visit">처음 방문 문의하기</Link>
            </Button>
            <a
              href="tel:010-4162-2701"
              className="inline-flex items-center justify-center h-12 px-2 text-base font-medium underline underline-offset-[6px] decoration-stone-50/40 hover:decoration-stone-50"
            >
              010-4162-2701로 전화하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
