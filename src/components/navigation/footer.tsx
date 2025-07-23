import { MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
      <footer className="border-t py-8 mt-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">주님의교회</h3>
              <p className="text-sm">
                경상북도 경주시 내남면 내외로 2175<br />
                전화: 010-4162-2701<br />
                이메일: bjh9119@gmail.com
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">예배 시간</h3>
              <p className="text-sm">
                새벽기도회: 매일 오전 5시<br />
                수요기도회: 오후 2시<br />
                금요기도회: 오후 2시<br />
                주일예배: 오전 11시<br />
                주일찬양예배: 오후 2시
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">콩과나무로</h3>
              <p className="text-sm">
                건강하고 자연 친화적인 제품으로<br />
                나눔과 섬김을 실천합니다.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">소셜미디어</h3>
              <div className="space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-3 h-auto p-2 hover:bg-yellow-50"
                  onClick={() => window.open('https://pf.kakao.com/_xjxoEdn', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">카카오톡 채널</span>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-3 h-auto p-2 hover:bg-red-50"
                  onClick={() => window.open('https://youtube.com/@churchoflord', '_blank')}
                >
                  <Youtube className="h-4 w-4 text-red-600" />
                  <span className="text-sm">유튜브 채널</span>
                </Button>
                
                <p className="text-xs text-slate-500 mt-3">
                  설교 영상과 교회 소식을<br />
                  SNS로 받아보세요
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} 주님의교회. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }