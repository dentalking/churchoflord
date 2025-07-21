import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "주님의교회 - 경주역 신도시에서 10분 거리의 평온한 신앙 공동체",
    template: "%s | 주님의교회"
  },
  description: "경주역 신도시에서 10분, 아름다운 산길을 따라 평온한 신앙의 쉼터로 여러분을 초대합니다. 콩과나무로 프로젝트와 함께하는 건강한 교회 공동체입니다.",
  keywords: "경주역, 신도시, 교회, 주님의교회, 콩과나무로, 경주시 내남면, 평온한 신앙, 산골교회, 예배",
  authors: [{ name: "주님의교회" }],
  creator: "주님의교회",
  publisher: "주님의교회",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.churchoflord.kr",
    siteName: "주님의교회",
    title: "주님의교회 - 경주역 신도시에서 10분 거리의 평온한 신앙 공동체",
    description: "경주역 신도시에서 10분, 아름다운 산길을 따라 평온한 신앙의 쉼터로 여러분을 초대합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "주님의교회 - 경주역 신도시 평온한 신앙 공동체",
    description: "경주역에서 10분, 콩과나무로 프로젝트와 함께하는 건강한 교회 공동체",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 py-8 md:py-12">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}