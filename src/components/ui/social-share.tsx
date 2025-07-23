"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, MessageCircle, Copy, Facebook, Instagram, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SocialShareProps {
  title: string;
  description: string;
  url?: string;
  className?: string;
}

export function SocialShare({ title, description, url, className = "" }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(currentUrl);

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    kakao: `https://story.kakao.com/share?url=${encodedUrl}&text=${encodedTitle} - ${encodedDescription}`,
    band: `https://band.us/plugin/share?body=${encodedTitle} - ${encodedDescription}&route=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('링크 복사 실패:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Share2 className="h-4 w-4" />
        공유하기
      </Button>

      {isOpen && (
        <>
          {/* 오버레이 */}
          <div 
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 공유 메뉴 */}
          <Card className="absolute top-full right-0 mt-2 z-50 w-72 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="text-sm font-medium mb-3 text-slate-900">
                "{title}" 공유하기
              </div>
              
              <div className="space-y-2">
                {/* 카카오톡 공유 */}
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-auto p-3 hover:bg-yellow-50"
                  onClick={() => handleShare('kakao')}
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-yellow-900" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">카카오스토리</div>
                    <div className="text-xs text-slate-500">카카오스토리로 공유</div>
                  </div>
                </Button>

                {/* 페이스북 공유 */}
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-auto p-3 hover:bg-blue-50"
                  onClick={() => handleShare('facebook')}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Facebook className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">페이스북</div>
                    <div className="text-xs text-slate-500">페이스북으로 공유</div>
                  </div>
                </Button>

                {/* 네이버 밴드 공유 */}
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-auto p-3 hover:bg-green-50"
                  onClick={() => handleShare('band')}
                >
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium">네이버 밴드</div>
                    <div className="text-xs text-slate-500">밴드로 공유</div>
                  </div>
                </Button>

                {/* 링크 복사 */}
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 h-auto p-3 hover:bg-slate-50"
                  onClick={handleCopyLink}
                >
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                    {copied ? (
                      <CheckCircle className="h-4 w-4 text-white" />
                    ) : (
                      <Copy className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className="text-left">
                    <div className="font-medium">
                      {copied ? '복사됨!' : '링크 복사'}
                    </div>
                    <div className="text-xs text-slate-500">
                      {copied ? '링크가 복사되었습니다' : '링크를 클립보드에 복사'}
                    </div>
                  </div>
                </Button>
              </div>

              <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                <div className="text-xs text-slate-600 mb-2">미리보기:</div>
                <div className="text-sm font-medium text-slate-900 mb-1">{title}</div>
                <div className="text-xs text-slate-600 line-clamp-2">{description}</div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

// 간단한 공유 버튼 (아이콘만)
export function QuickShare({ title, description, url }: SocialShareProps) {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(currentUrl);

  const handleKakaoShare = () => {
    const shareUrl = `https://story.kakao.com/share?url=${encodedUrl}&text=${encodedTitle} - ${encodedDescription}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleFacebookShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleKakaoShare}
        className="w-8 h-8 p-0 hover:bg-yellow-50"
        title="카카오스토리로 공유"
      >
        <MessageCircle className="h-4 w-4 text-yellow-600" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={handleFacebookShare}
        className="w-8 h-8 p-0 hover:bg-blue-50"
        title="페이스북으로 공유"
      >
        <Facebook className="h-4 w-4 text-blue-600" />
      </Button>
    </div>
  );
}