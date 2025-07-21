"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Notice } from "@/types/database";

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [highlightedNotice, setHighlightedNotice] = useState<Notice | null>(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch('/api/notices');
      const data = await response.json();
      if (data.data) {
        setNotices(data.data);
        // 가장 최근의 중요 공지사항 찾기
        const importantNotice = data.data.find((notice: Notice) => notice.is_important);
        setHighlightedNotice(importantNotice || data.data[0]);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">공지사항</h1>
      
      {/* 하이라이트 공지 */}
      {loading ? (
        <div className="mb-12">
          <Card className="bg-slate-50">
            <CardContent className="py-8">
              <p className="text-center text-gray-500">불러오는 중...</p>
            </CardContent>
          </Card>
        </div>
      ) : highlightedNotice ? (
        <div className="mb-12">
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle className="text-2xl">{highlightedNotice.title}</CardTitle>
              <CardDescription>
                {new Date(highlightedNotice.created_at).toLocaleDateString('ko-KR')} | {highlightedNotice.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{highlightedNotice.content}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/notices/${highlightedNotice.id}`}>자세히 보기</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : null}
      
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
        
        {loading ? (
          <div className="py-8">
            <p className="text-center text-gray-500">불러오는 중...</p>
          </div>
        ) : notices.length === 0 ? (
          <div className="py-8">
            <p className="text-center text-gray-500">등록된 공지사항이 없습니다.</p>
          </div>
        ) : (
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
              {notices.map((notice, index) => (
                <TableRow key={notice.id}>
                  <TableCell>{notices.length - index}</TableCell>
                  <TableCell>
                    <Link href={`/notices/${notice.id}`} className="hover:underline">
                      {notice.is_important && (
                        <span className="text-red-500 font-bold mr-2">[중요]</span>
                      )}
                      {notice.title}
                    </Link>
                  </TableCell>
                  <TableCell>{notice.category}</TableCell>
                  <TableCell>{new Date(notice.created_at).toLocaleDateString('ko-KR')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        
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