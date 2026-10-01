import Link from "next/link";
import { YOUTUBE_CHANNEL_URL } from "@/lib/youtube";

const worshipTimes = [
  { name: "주일예배", time: "오전 11시" },
  { name: "주일찬양예배", time: "오후 2시" },
  { name: "새벽기도회", time: "매일 오전 5시" },
  { name: "수요기도회", time: "오후 2시" },
  { name: "금요기도회", time: "오후 2시" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl md:text-4xl text-stone-50 tracking-tight mb-4">주님의교회</p>
            <p className="text-sm leading-relaxed max-w-xs">
              경주역에서 차로 10분, 산속의 작은 교회.
              <br />
              처음 오시는 분도 이름으로 맞이합니다.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-sans text-sm font-medium text-stone-50 tracking-normal mb-4">예배 시간</h2>
            <dl className="text-sm space-y-1.5">
              {worshipTimes.map((w) => (
                <div key={w.name} className="flex justify-between gap-4 max-w-56">
                  <dt>{w.name}</dt>
                  <dd className="text-stone-400">{w.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-sans text-sm font-medium text-stone-50 tracking-normal mb-4">연락처</h2>
            <address className="not-italic text-sm leading-relaxed space-y-1.5">
              <p>경상북도 경주시 내남면 내외로 2175</p>
              <p>
                <a href="tel:010-4162-2701" className="hover:text-stone-50 underline-offset-4 hover:underline">
                  010-4162-2701
                </a>{" "}
                <span className="text-stone-400">방재홍 담임목사</span>
              </p>
              <p>
                <a href="mailto:bjh9119@gmail.com" className="hover:text-stone-50 underline-offset-4 hover:underline">
                  bjh9119@gmail.com
                </a>
              </p>
            </address>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm mt-6">
              <li>
                <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="text-stone-50 underline underline-offset-4 decoration-stone-600 hover:decoration-stone-50">
                  유튜브
                </a>
              </li>
              <li>
                <a href="https://pf.kakao.com/_xjxoEdn" target="_blank" rel="noopener noreferrer" className="text-stone-50 underline underline-offset-4 decoration-stone-600 hover:decoration-stone-50">
                  카카오톡 채널
                </a>
              </li>
              <li>
                <Link href="/directions" className="text-stone-50 underline underline-offset-4 decoration-stone-600 hover:decoration-stone-50">
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 text-xs text-stone-500">© {new Date().getFullYear()} 주님의교회</p>
      </div>
    </footer>
  );
}
