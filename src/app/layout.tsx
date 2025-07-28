import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";
import { FloatingChat } from "@/components/ui/floating-chat";
import { StructuredData } from "./structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "주님의교회 - 경주 내남면 산속의 개신교 교회",
    template: "%s | 주님의교회"
  },
  description: "경주역에서 10분, 아름다운 산속에 위치한 소규모 개신교 교회입니다. 고신교단 출신 목사님의 개혁주의 신학과 예하성 소속으로 성령의 은사를 중시하는 따뜻한 신앙공동체입니다.",
  keywords: "경주교회, 주님의교회, 내남면교회, 산속교회, 소규모교회, 개신교, 고신교단, 예하성, 개혁주의, 성령, 제자훈련, 콩과나무로, 방재홍목사, 정성아목사, 경주역교회",
  authors: [{ name: "주님의교회" }],
  creator: "주님의교회",
  publisher: "주님의교회",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.churchoflord.kr",
    siteName: "주님의교회",
    title: "주님의교회 - 경주 내남면 산속의 개신교 교회",
    description: "경주역에서 10분, 소규모이기에 가능한 세심한 돌봄과 1:1 양육이 있는 산속의 따뜻한 신앙공동체",
  },
  twitter: {
    card: "summary_large_image",
    title: "주님의교회 - 경주 산속의 개신교 교회",
    description: "소규모 교회의 장점을 살린 개인별 맞춤 양육과 콩과나무로 사역이 있는 신앙공동체",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "naver-site-verification": "[네이버 사이트 소유확인 메타태그 추가 예정]"
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 py-8 md:py-12">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingChat />
      </body>
    </html>
  );
}