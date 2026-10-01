"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Phone, Clock, MapPin, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 페이지 로드 후 3초 뒤에 표시
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* 오버레이 */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 플로팅 채팅 카드 */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-xl bg-white">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pine-500 rounded-full" aria-hidden="true"></div>
                  <CardTitle className="text-lg">주님의교회 상담</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription className="text-sm">
                모든 분들을 따뜻하게 환영합니다!
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-3">
              {/* 카카오톡 채널 버튼 */}
              <Button 
                className="w-full bg-kraft-200 hover:bg-kraft-300 text-stone-900 font-medium"
                onClick={() => {
                  // 카카오톡 채널로 이동 (실제 채널 URL로 교체 필요)
                  window.open('https://pf.kakao.com/_xjxoEdn', '_blank');
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                카카오톡으로 문의하기
              </Button>

              {/* 전화 문의 버튼 */}
              <Button 
                variant="outline" 
                className="w-full"
                asChild
              >
                <Link href="tel:010-4162-2701">
                  <Phone className="mr-2 h-4 w-4" />
                  010-4162-2701
                </Link>
              </Button>
              
              {/* 온라인 예배 참여 버튼 */}
              <Button 
                className="w-full" 
                onClick={() => {
                  // 유튜브 실시간 방송 목록으로 이동
                  window.open('https://www.youtube.com/@BjhBang/streams', '_blank');
                }}
              >
                <Video className="mr-2 h-4 w-4" />
                온라인 예배 참여
              </Button>

              {/* 빠른 정보 */}
              <div className="text-sm text-stone-600 space-y-1 pt-2 border-t">
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  <span>주일예배 오전 11시</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  <span>경주역에서 차로 10분</span>
                </div>
              </div>

              {/* 방문 예약 링크 */}
              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="text-sm text-pine-600 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  방문 예약하기
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 플로팅 버튼 */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 z-50 size-14 md:size-14 p-0 rounded-full shadow-xl bg-stone-900 hover:bg-stone-700"
        aria-label={isOpen ? "문의 창 닫기" : "문의하기"}
        size="sm"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </Button>
    </>
  );
}