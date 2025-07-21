"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Notice } from "@/types/database";

export default function NoticeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [notice, setNotice] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchNotice(params.id as string);
    }
  }, [params.id]);

  const fetchNotice = async (id: string) => {
    try {
      const response = await fetch(`/api/notices?id=${id}`);
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setNotice(data.data[0]);
      }
    } catch (error) {
      console.error('Error fetching notice:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-12">
        <p className="text-center text-gray-500">불러오는 중...</p>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="container py-12">
        <p className="text-center text-gray-500">공지사항을 찾을 수 없습니다.</p>
        <div className="text-center mt-4">
          <Button asChild>
            <Link href="/notices">목록으로 돌아가기</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-6 -ml-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        뒤로 가기
      </Button>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              {notice.is_important && (
                <span className="text-red-500 font-bold mb-2 block">[중요]</span>
              )}
              <CardTitle className="text-3xl">{notice.title}</CardTitle>
              <CardDescription className="mt-2">
                <span className="mr-4">작성자: {notice.author}</span>
                <span className="mr-4">카테고리: {notice.category}</span>
                <span>작성일: {new Date(notice.created_at).toLocaleDateString('ko-KR')}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="whitespace-pre-wrap text-gray-700">{notice.content}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/notices">목록으로</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">문의하기</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}