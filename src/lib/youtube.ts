// 경주 주님의교회 유튜브 채널 연동
// API 키 없이 공개 RSS 피드(최신 영상 15개)를 서버에서 읽어 옵니다.

export const YOUTUBE_CHANNEL_ID = "UCWE-6E48xyvZBAQUzUGj7jw";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@BjhBang";
export const YOUTUBE_SUBSCRIBE_URL = `${YOUTUBE_CHANNEL_URL}?sub_confirmation=1`;
export const YOUTUBE_LIVE_URL = `${YOUTUBE_CHANNEL_URL}/streams`;
export const YOUTUBE_SHORTS_URL = `${YOUTUBE_CHANNEL_URL}/shorts`;

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

export type VideoKind = "sermon" | "short" | "live";

export interface ChurchVideo {
  id: string;
  kind: VideoKind;
  url: string;
  rawTitle: string;
  /** 화면에 보여줄 정리된 제목 */
  title: string;
  /** 성경 본문 (예: 왕상19:18) */
  scripture?: string;
  /** 설교자 (예: 정성아 목사) */
  preacher?: string;
  publishedAt: string;
  views: number;
}

function decodeEntities(text: string) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function pick(entry: string, pattern: RegExp) {
  return entry.match(pattern)?.[1];
}

// "칠천명을 남기리니(왕상19:18) 2026년9월16일/ 정성아목사/주님의교회"
//   → 제목 "칠천명을 남기리니", 본문 "왕상19:18", 설교자 "정성아 목사"
function parseSermonTitle(raw: string) {
  const parts = raw.split("/").map((p) => p.trim()).filter(Boolean);
  const preacherPart = parts.find((p) => /목사$/.test(p));
  const preacher = preacherPart?.replace(/\s*목사$/, " 목사");

  let head = (parts[0] ?? raw).replace(/\d{4}년\s*\d{1,2}월\s*\d{1,2}일/g, "");
  const scripture = head.match(/\(([^)]+\d+:\d+[^)]*)\)/)?.[1];
  if (scripture) head = head.replace(`(${scripture})`, "");

  return { title: head.trim() || raw, scripture, preacher };
}

// "#경주주님의교회 #겸손" → "겸손"
// "은혜에서 은혜로2026년8월30일살전 00905 신뢰의 KTX #경주주님의교회" → "신뢰의 KTX"
function cleanShortTitle(raw: string) {
  const withoutTags = raw.replace(/#\S+/g, "").trim();
  const afterTimestamp = withoutTags.match(/\d{5}\s+(.+)$/)?.[1];
  if (afterTimestamp) return afterTimestamp.trim();
  if (withoutTags) return withoutTags;

  const tags = raw
    .split("#")
    .map((t) => t.trim())
    .filter((t) => t && t !== "경주주님의교회");
  return tags.join(" · ") || "1분 말씀";
}

function parseEntry(entry: string): ChurchVideo | null {
  const id = pick(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
  const url = pick(entry, /<link rel="alternate" href="([^"]+)"/);
  const rawTitle = decodeEntities(pick(entry, /<title>([^<]*)<\/title>/) ?? "");
  const publishedAt = pick(entry, /<published>([^<]+)<\/published>/);
  if (!id || !url || !publishedAt) return null;

  const views = Number(pick(entry, /<media:statistics views="(\d+)"/) ?? 0);
  const base = { id, url, rawTitle, publishedAt, views };

  if (url.includes("/shorts/")) {
    return { ...base, kind: "short", title: cleanShortTitle(rawTitle) };
  }
  if (rawTitle.includes("실시간 스트림")) {
    return { ...base, kind: "live", title: "실시간 예배 방송" };
  }
  return { ...base, kind: "sermon", ...parseSermonTitle(rawTitle) };
}

/** 최신 영상 목록. 실패하면 빈 배열을 돌려주고, 화면은 채널 링크로 대체됩니다. */
export async function getChurchVideos(): Promise<ChurchVideo[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 1800 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return (xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [])
      .map(parseEntry)
      .filter((v): v is ChurchVideo => v !== null);
  } catch (error) {
    console.error("Error fetching YouTube feed:", error);
    return [];
  }
}

export function youtubeThumbnail(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function formatVideoDate(iso: string) {
  return new Date(iso).toLocaleDateString("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "long",
    day: "numeric",
  });
}
