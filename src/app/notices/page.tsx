import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공지사항",
  description: "주님의교회 최신 소식과 이벤트를 확인하세요. 경주역 신도시 주민 초청 이벤트, 콩과나무로 프로젝트 소식 등을 전해드립니다.",
  keywords: "교회 공지사항, 신도시 이벤트, 콩과나무로, 주보, 교회 소식",
};

export default function NoticesPage() {
  // 예시 공지사항 데이터
  const notices = [
    { id: 1, title: "신도시 입주민 초청 봄 예배 안내", date: "2025.04.18", category: "이벤트", isImportant: true },
    { id: 2, title: "4월 셋째 주 주보", date: "2025.04.14", category: "주보", isImportant: false },
    { id: 3, title: "콩과나무로 봄 제품 출시 안내", date: "2025.04.10", category: "소식", isImportant: false },
    { id: 4, title: "경주역 주변 전도 활동 참가자 모집", date: "2025.04.05", category: "모집", isImportant: true },
    { id: 5, title: "4월 둘째 주 주보", date: "2025.04.07", category: "주보", isImportant: false },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">공지사항</h1>
      
      {/* 하이라이트 공지 */}
      <div className="mb-12">
        <Card className="bg-slate-50">
          <CardHeader>
            <CardTitle className="text-2xl">신도시 입주민 초청 봄 예배 안내</CardTitle>
            <CardDescription>2025.04.18 | 이벤트</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              경주역 신도시에 새롭게 입주하신 분들을 위한 특별 초청 예배를 준비했습니다.
              아름다운 봄 산길을 함께 걸으며 예배드리는 시간을 갖고자 합니다.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>일시: 2025년 5월 10일 토요일 오전 10시</li>
              <li>장소: 주님의교회 야외 예배 공간</li>
              <li>대상: 경주역 신도시 입주민 누구나</li>
              <li>내용: 봄 산책, 야외 예배, 점심 식사, 콩과나무로 제품 나눔</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/contact?event=봄예배">참가 신청하기</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* 공지사항 목록 */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">모든 공지사항</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="검색..."
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <Button variant="outline">검색</Button>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">번호</TableHead>
              <TableHead>제목</TableHead>
              <TableHead className="w-[150px]">카테고리</TableHead>
              <TableHead className="w-[150px]">등록일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notices.map((notice) => (
              <TableRow key={notice.id}>
                <TableCell>{notice.id}</TableCell>
                <TableCell>
                  <Link href={`/notices/${notice.id}`} className="hover:underline">
                    {notice.isImportant && (
                      <span className="text-red-500 font-bold mr-2">[중요]</span>
                    )}
                    {notice.title}
                  </Link>
                </TableCell>
                <TableCell>{notice.category}</TableCell>
                <TableCell>{notice.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              &lt;
            </Button>
            <Button variant="outline" size="icon">
              1
            </Button>
            <Button variant="outline" size="icon">
              2
            </Button>
            <Button variant="outline" size="icon">
              3
            </Button>
            <Button variant="outline" size="icon">
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}