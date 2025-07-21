import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 페이지",
  description: "주님의교회 웹사이트 관리자 페이지입니다.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}