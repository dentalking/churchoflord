import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "주님의교회 - 경주역 신도시에서 10분 거리의 평온한 신앙 공동체",
  description: "경주역에서 10분, 아름다운 산길을 따라 평온한 신앙의 쉼터로 여러분을 초대합니다.",
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