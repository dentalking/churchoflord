import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description: "주님의교회 문의 및 방문 예약을 카카오톡 채널로 편리하게 하실 수 있습니다. 경주역 신도시 주민 여러분을 환영합니다.",
  keywords: "교회 문의, 방문 예약, 카카오톡 채널, 새신자 상담, 경주역 신도시",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}