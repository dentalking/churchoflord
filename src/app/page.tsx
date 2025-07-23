// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, Heart, Video, Wifi, BookOpen, Music } from "lucide-react";
import { SocialShare, QuickShare } from "@/components/ui/social-share";
import { OnlineWorshipButton, KakaoTalkButton } from "@/components/ui/interactive-buttons";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 pb-16">
      {/* 히어로 섹션 - 풀스크린 배경 이미지와 오버레이 */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-20" />
        
        {/* 실제 이미지로 교체 */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
            alt="경주역에서 이어지는 아름다운 산길" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
        
        <div className="container relative z-30 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              하나님의 말씀으로<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                세워지는 교회
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              "수고하고 무거운 짐 진 자들아 내게로 오라 내가 너희를 쉬게 하리라" (마 11:28)<br className="hidden sm:block" />
              🏔️ <strong>경주역에서 10분</strong>, 평온한 산속에서 말씀과 함께<br className="hidden sm:block" />
              🌱 <strong>작지만 따뜻한 믿음 공동체</strong>가 여러분을 기다립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-6" asChild>
                <Link href="/worship">예배 안내</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6 backdrop-blur-sm bg-white/10" asChild>
                <Link href="/directions">오시는 길</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* 하단 예배 시간 정보 배너 */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-30 py-4 shadow-lg">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-slate-700" />
                <div>
                  <p className="font-medium">주일예배</p>
                  <p className="text-sm text-slate-600">매주 일요일 오전 11시</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-slate-700" />
                <div>
                  <p className="font-medium">수요/금요기도회</p>
                  <p className="text-sm text-slate-600">매주 수/금 오후 2시</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-slate-700" />
                <div>
                  <p className="font-medium">경주시 내남면 내외로 2175</p>
                  <p className="text-sm text-slate-600">경주역에서 차로 10분</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 목회자 인사말 및 말씀 중심 섹션 */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">📖 이달의 말씀</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                하나님의 말씀으로 <span className="text-indigo-600">함께 자라가는 공동체</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">2025년 1월 표어</h3>
                <blockquote className="text-lg text-indigo-800 mb-6 italic leading-relaxed">
                  "그러므로 이제 그리스도 예수 안에 있는 자에게는 결코 정죄함이 없나니 
                  이는 그리스도 예수 안에 있는 생명의 성령의 법이 죄와 사망의 법에서 
                  너를 해방하였음이라"
                </blockquote>
                <p className="text-right text-indigo-700 font-semibold">- 로마서 8:1-2 -</p>
                <div className="mt-6 p-4 bg-white/70 rounded-lg">
                  <p className="text-indigo-900 font-medium">
                    새해를 맞아 우리 모두 그리스도 안에서 참된 자유와 평안을 누리며, 
                    서로 사랑하고 격려하는 한 해가 되기를 소망합니다.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">목회자 인사</h3>
                  <div className="bg-slate-50 p-6 rounded-xl">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      "경주역 신도시에 새롭게 정착하신 모든 분들을 진심으로 환영합니다.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      우리는 작지만 하나님의 말씀을 사랑하고, 서로를 격려하며, 
                      이 지역을 섬기려는 평범한 믿음의 공동체입니다.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      바쁜 일상 속에서도 잠시 쉼을 얻고, 하나님의 사랑을 경험하며, 
                      따뜻한 교제를 나누는 시간이 되기를 소망합니다."
                    </p>
                    <p className="text-right text-slate-600 font-medium">- 방재홍 목사 -</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/sermons">설교 말씀 듣기</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 경주역 신도시 주민 환영 섹션 */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">🌱 새가족 돌봄 사역</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              경주역에서 10분, <span className="text-green-600">서로 섬기는 믿음 공동체</span>
            </h2>
            <p className="text-lg mb-8 text-slate-700 leading-relaxed">
              <strong>"피곤하고 짐 진 모든 사람들아"</strong><br />
              주님의 초대를 받은 우리가 이제 <span className="text-green-600 font-semibold">새롭게 정착하신 가족들을 따뜻하게 맞아드립니다</span><br />
              🙏 <strong>서로 돌보는 따뜻한 공동체</strong> 🌱 <strong>함께 자라가는 신앙 생활</strong> ❤️ <strong>나누고 섬기는 사랑</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-lg">따뜻한 공동체</h3>
                  <p className="text-slate-600">신도시에서 온 새가족을 위한 특별 환영과 케어</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-lg">건강한 신앙생활</h3>
                  <p className="text-slate-600">산속 평온함 속에서 영적 재충전의 시간</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="rounded-full px-6" asChild>
              <Link href="/contact?type=newtown">방문 예약하기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 콩과나무로 프로젝트 섹션 */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">🌱 콩과나무로 나눔 사역</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                말씀으로 시작된 건강한 나눔<br />
                <span className="text-amber-600">'콩과나무로' 섬김 사역</span>
              </h2>
              <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                <strong>"나누어 주는 것이 받는 것보다 복이 있다" (행 20:35)</strong><br />
                하나님께서 주신 청정 자연에서 정성을 담아 🫘 <strong>무농약 콩</strong>과 🌰 <strong>자연 견과</strong>로 만든 건강 제품으로<br />
                <span className="text-amber-600 font-semibold">지역 공동체를 섬기고 선교 사역에 쓰임</span>이 될 수 있도록 합니다.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-medium mb-2">💚 무농약 재배</h3>
                  <p className="text-sm text-slate-600">목사님이 직접 키운 건강한 원료</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-medium mb-2">👨‍🍳 할머니 비법</h3>
                  <p className="text-sm text-slate-600">3대째 내려온 전통 제조법</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-medium mb-2">🌍 지구도 살리고</h3>
                  <p className="text-sm text-slate-600">100% 친환경 포장재 사용</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-medium mb-2">❤️ 나눔도 실천</h3>
                  <p className="text-sm text-slate-600">수익금 전액 선교 사업에 투입</p>
                </div>
              </div>
              <Button asChild>
                <Link href="/activities">더 알아보기</Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              {/* 실제 이미지로 교체 */}
              <Image 
                src="/images/bean-tree/KakaoTalk_20250418_233455866.jpg" 
                alt="콩과나무로 제품" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 제자훈련과 소그룹 섹션 */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">📚 제자훈련 & 소그룹</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              평신도를 <span className="text-indigo-600">깨우는 교회</span>
            </h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              "가서 모든 민족을 제자로 삼아" (마 28:19)<br />
              체계적인 제자훈련과 친밀한 소그룹으로 온전한 그리스도의 제자를 세웁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* 제자훈련 카드 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">제자훈련 과정</CardTitle>
                    <CardDescription>새가족부터 사역자까지 4단계 양육</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  옥한흠 목사님의 제자훈련 철학을 바탕으로 모든 성도가 
                  말씀으로 훈련받아 재생산하는 제자가 되도록 체계적으로 양육합니다.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-green-600">1</span>
                    </div>
                    <span className="text-sm"><strong>새가족반</strong> - 4주 과정</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">2</span>
                    </div>
                    <span className="text-sm"><strong>기초 성경공부</strong> - 12주 과정</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600">3</span>
                    </div>
                    <span className="text-sm"><strong>제자훈련</strong> - 32주 과정</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-orange-600">4</span>
                    </div>
                    <span className="text-sm"><strong>사역훈련</strong> - 32주 과정</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/discipleship">제자훈련 자세히 보기</Link>
                </Button>
              </CardContent>
            </Card>

            {/* 소그룹 카드 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">소그룹 공동체</CardTitle>
                    <CardDescription>함께 자라가는 친밀한 교제</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  대그룹 예배에서 경험할 수 없는 친밀한 관계와 깊은 나눔이 있는 
                  소그룹에서 진정한 코이노니아를 경험하세요.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-600" />
                      구역 모임
                    </h4>
                    <p className="text-sm text-slate-600">지역별 이웃 공동체</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-slate-600" />
                      연령별 목장
                    </h4>
                    <p className="text-sm text-slate-600">세대별 맞춤 모임</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-slate-600" />
                      말씀 묵상
                    </h4>
                    <p className="text-sm text-slate-600">함께하는 QT 모임</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1 flex items-center gap-2">
                      <Music className="h-4 w-4 text-slate-600" />
                      관심사별
                    </h4>
                    <p className="text-sm text-slate-600">찬양, 독서, 기도 등</p>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/small-groups">소그룹 참여하기</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 신도시 주민을 위한 특별 안내 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">💡 경주역 신도시 주민 특별</Badge>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                바쁜 신도시 생활에 맞춘 <span className="text-indigo-600">유연한 프로그램</span>
              </h3>
              <p className="text-slate-700 mb-6">
                직장인을 위한 저녁반, 주부를 위한 오전반, 온라인 병행 수업 등<br />
                <span className="text-indigo-600 font-medium">여러분의 일정에 맞춰 함께 성장할 수 있습니다!</span>
              </p>
              <Button size="lg" className="rounded-full px-8 bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/contact?type=discipleship">제자훈련 상담 신청</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 섬김과 나눔 사역 섹션 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">🤲 섬김과 나눔</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              받은 사랑을 <span className="text-emerald-600">나누는 교회</span>
            </h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              "서로 짐을 지라 그리하여 그리스도의 법을 성취하라" (갈 6:2)<br />
              하나님께 받은 은혜를 이웃과 함께 나누며 지역 사회를 섬깁니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 지역 사회 섬김 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">지역 사회 섬김</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  홀로 계신 어르신들과 어려운 이웃분들을 정기적으로 방문하여 
                  말씀과 사랑을 나누고 있습니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 매월 독거 어르신 방문</li>
                  <li>• 생필품 및 반찬 나눔</li>
                  <li>• 말씀과 기도 시간</li>
                </ul>
              </CardContent>
            </Card>

            {/* 새가족 양육 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">새가족 양육</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  새로 오신 분들이 신앙 생활에 잘 정착하실 수 있도록 
                  일대일 멘토링과 양육을 제공합니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 개인별 맞춤 양육</li>
                  <li>• 기초 신앙 교육</li>
                  <li>• 교제와 나눔의 시간</li>
                </ul>
              </CardContent>
            </Card>

            {/* 선교와 나눔 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">선교와 나눔</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  콩과나무로 사역을 통한 수익금 전액을 국내외 선교와 
                  이웃 돕기에 사용하고 있습니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 아프리카 선교 후원</li>
                  <li>• 지역 복지 시설 지원</li>
                  <li>• 어려운 가정 돕기</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">함께 섬기고 싶으신가요?</h3>
              <p className="text-slate-700 mb-6">
                "각각 은사를 받은 대로 하나님의 각양 은혜의 선한 청지기같이 서로 봉사하라" (벧전 4:10)<br />
                <span className="text-emerald-600 font-medium">여러분의 달란트로 하나님 나라를 섬겨보세요!</span>
              </p>
              <Button size="lg" className="rounded-full px-8 bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/contact?type=volunteer">섬김 사역 문의하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 예배 시간 섹션 */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">⛪ 온오프라인 하이브리드 예배</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              바쁜 신도시 생활, <span className="text-blue-600">유연한 예배 참여</span>
            </h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              <strong>매주 꼭 와야 한다는 부담감은 NO!</strong><br />
              직접 오시면 👥 <strong>따뜻한 산속 공동체 경험</strong>, 바쁘시면 💻 <strong>온라인으로 편리하게 참여</strong><br />
              신도시 맞벌이 가정을 위한 <span className="text-blue-600 font-semibold">진짜 현실적인 교회</span>입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <div className="p-2 mr-2 bg-blue-100 rounded-full">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  주일예배
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">매주 일요일 오전 11시</p>
                <p className="text-sm text-slate-500 mt-2">
                  온 가족이 함께 드리는 주일 예배입니다. 예배 후에는 친교 시간이 있습니다.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/worship" className="text-sm text-blue-600 font-medium hover:underline">자세히 보기</Link>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <div className="p-2 mr-2 bg-blue-100 rounded-full">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  주일찬양예배
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">매주 일요일 오후 2시</p>
                <p className="text-sm text-slate-500 mt-2">
                  찬양과 기도로 함께 드리는 주일 오후 예배입니다.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/worship" className="text-sm text-blue-600 font-medium hover:underline">자세히 보기</Link>
              </CardFooter>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <div className="p-2 mr-2 bg-blue-100 rounded-full">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  새벽기도회
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">매일 오전 5시</p>
                <p className="text-sm text-slate-500 mt-2">
                  매일 아침 말씀과 기도로 하루를 시작하는 새벽 기도회입니다.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/worship" className="text-sm text-blue-600 font-medium hover:underline">자세히 보기</Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-10 text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                <Link href="/worship">예배 시간 전체 보기</Link>
              </Button>
              <OnlineWorshipButton className="rounded-full px-6" />
            </div>
            
            {/* 온라인 예배 안내 */}
            <div className="bg-blue-50 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Wifi className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-blue-900">온라인 예배 안내</h3>
              </div>
              <p className="text-blue-800 mb-4">
                경주역 신도시에서 직접 오기 어려운 분들을 위해 온라인 예배를 제공합니다.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/60 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-1">📱 스마트폰/태블릿</h4>
                  <p className="text-blue-700">카카오톡 채널을 통해 링크 전송</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-1">💻 PC/노트북</h4>
                  <p className="text-blue-700">유튜브 라이브 스트리밍</p>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-4">
                * 온라인 예배 링크는 예배 30분 전에 전송됩니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 최신 설교 섹션 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-800 text-sm font-medium mb-4">최신 설교</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">말씀으로 함께하는 시간</h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              주님의교회의 설교 말씀을 통해 영적 성장과 위로를 얻으세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              {/* 실제 설교 영상 임베드로 교체 */}
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
                <iframe 
                  src="https://www.youtube.com/embed/lQIvLERjcuU" 
                  title="평안을 너희에게 주노라" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">평안을 너희에게 주노라</h3>
                <SocialShare 
                  title="평안을 너희에게 주노라 - 주님의교회 설교"
                  description="방재홍 목사님의 설교 말씀입니다. 경주역 신도시 주민 여러분께 은혜가 되길 바랍니다."
                  className="ml-2"
                />
              </div>
              <p className="text-slate-600 mb-4">방재홍 목사 | 2025.04.14</p>
              <Link href="/sermons" className="text-violet-600 font-medium hover:underline">모든 설교 보기</Link>
            </div>
            
            <div className="lg:col-span-5">
              <h3 className="text-lg font-bold mb-4">최근 설교 시리즈</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="aspect-square w-20 bg-slate-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                    <Image 
                      src="/images/sermons/twi001t3480510.jpg" 
                      alt="산골에서 만나는 하나님" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium">산골에서 만나는 하나님</h4>
                      <QuickShare 
                        title="산골에서 만나는 하나님 - 주님의교회"
                        description="방재홍 목사님의 설교 말씀"
                      />
                    </div>
                    <p className="text-sm text-slate-600 mb-1">방재홍 목사 | 2025.04.07</p>
                    <Link href="/sermons/2" className="text-sm text-violet-600 hover:underline">시청하기</Link>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="aspect-square w-20 bg-slate-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                    <Image 
                      src="/images/sermons/twi001t3480510.jpg" 
                      alt="경주역에서 출발하는 신앙" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">경주역에서 출발하는 신앙</h4>
                    <p className="text-sm text-slate-600 mb-1">정성아 목사 | 2025.03.31</p>
                    <Link href="/sermons/3" className="text-sm text-violet-600 hover:underline">시청하기</Link>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="aspect-square w-20 bg-slate-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                    <Image 
                      src="/images/sermons/twi001t3480510.jpg" 
                      alt="콩과나무로 전하는 복음" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">콩과나무로 전하는 복음</h4>
                    <p className="text-sm text-slate-600 mb-1">방재홍 목사 | 2025.03.24</p>
                    <Link href="/sermons/4" className="text-sm text-violet-600 hover:underline">시청하기</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 신도시 주민 초청 이벤트 배너 */}
      <section className="py-12 bg-green-50">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold">신도시 입주민 초청 봄 예배</h2>
                  <SocialShare 
                    title="신도시 입주민 초청 봄 예배 - 주님의교회"
                    description="경주역 신도시에 새롭게 입주하신 분들을 위한 특별 초청 예배입니다. 아름다운 봄 산길을 함께 걸으며 예배드리는 시간을 갖고자 합니다."
                    className="ml-4 flex-shrink-0"
                  />
                </div>
                <p className="mb-6">
                  경주역 신도시에 새롭게 입주하신 분들을 위한 특별 초청 예배를 준비했습니다.
                  아름다운 봄 산길을 함께 걸으며 예배드리는 시간을 갖고자 합니다.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-200" />
                    <span>2025년 5월 10일 토요일 오전 10시</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-200" />
                    <span>주님의교회 야외 예배 공간</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" asChild>
                  <Link href="/contact?event=봄예배">참가 신청하기</Link>
                </Button>
              </div>
              <div className="relative">
                {/* 실제 이미지로 교체 */}
                <Image 
                  src="/images/events/KakaoTalk_20250418_233455866_03.jpg" 
                  alt="봄 예배 이미지" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 미리보기 섹션 */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                {/* 여기에 지도 API가 들어갈 예정입니다 */}
                {/* 임시로 교회 이미지 배치 */}
                <Image 
                  src="/images/activities/20250419_001222.png" 
                  alt="주님의교회 위치" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-800 text-sm font-medium mb-4">오시는 길</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">경주역에서 10분, 평온한 산길</h2>
              <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                경주역에서 차로 약 10분 거리에 위치한 주님의교회는 아름다운 산길을 따라 오시면 만나실 수 있습니다. 
                바쁜 일상에서 벗어나 평온한 자연 속에서 신앙의 쉼을 경험하세요.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-2">주소</h3>
                <p className="text-slate-700 mb-4">경상북도 경주시 내남면 내외로 2175</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-slate-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">소요 시간</h4>
                      <p className="text-sm text-slate-600">경주역에서 차로 10분</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-slate-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">내비게이션</h4>
                      <p className="text-sm text-slate-600">경주시 내남면 주님의교회</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/directions">자세한 오시는 길</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 첫 방문자 가이드 섹션 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">🤗 첫 방문자를 위한 안내</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              "교회가 처음이에요..." <span className="text-blue-600">걱정 마세요!</span>
            </h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              <strong>무엇을 입고 와야 할지, 어디에 앉아야 할지, 언제 일어서야 할지...</strong><br />
              모든 궁금증을 미리 해결해드립니다! 첫 방문부터 <span className="text-blue-600 font-semibold">편안하고 자연스럽게</span> 예배하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 복장 안내 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">복장 안내</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  평상복으로 편안하게 오세요. 특별한 복장 규정은 없습니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 편안한 일상복 착용</li>
                  <li>• 겨울철 실내 난방 완비</li>
                  <li>• 여름철 에어컨 가동</li>
                </ul>
              </CardContent>
            </Card>

            {/* 주차 안내 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">주차 안내</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  교회 주변에 넉넉한 주차 공간이 마련되어 있습니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 교회 앞 주차장 50대</li>
                  <li>• 인근 노상주차 가능</li>
                  <li>• 주차 안내 도우미 배치</li>
                </ul>
              </CardContent>
            </Card>

            {/* 예배 순서 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">예배 순서</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  약 1시간 30분 정도 소요되며, 찬양-설교-기도 순서로 진행됩니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 오전 10:50 예배 시작 준비</li>
                  <li>• 오전 11:00 예배 시작</li>
                  <li>• 오후 12:30 예배 종료</li>
                </ul>
              </CardContent>
            </Card>

            {/* 아이 돌봄 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl">아이 돌봄</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  영유아부터 초등학생까지 연령별 맞춤 프로그램을 운영합니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 영유아부 별도 운영</li>
                  <li>• 전문 교사 상주</li>
                  <li>• 안전한 돌봄 시설</li>
                </ul>
              </CardContent>
            </Card>

            {/* 교통편 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">교통편</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  경주역에서 픽업 서비스도 이용하실 수 있습니다.
                </p>
                <ul className="text-sm text-slate-500 text-left space-y-1">
                  <li>• 경주역에서 차로 10분</li>
                  <li>• 주일 오전 픽업 서비스</li>
                  <li>• 사전 연락 시 도움</li>
                </ul>
              </CardContent>
            </Card>

            {/* 문의 및 환영 */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">환영 및 문의</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  궁금한 것이 있으시면 언제든 연락해 주세요.
                </p>
                <div className="space-y-2">
                  <KakaoTalkButton>
                    카카오톡 문의
                  </KakaoTalkButton>
                  <Button size="sm" variant="outline" className="w-full text-emerald-600 border-emerald-600" asChild>
                    <Link href="tel:010-4162-2701">전화 문의</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">🎉 첫 방문 시 특별 선물</h3>
              <p className="text-slate-700 mb-6">
                처음 오시는 분들께는 콩과나무로 건강 제품과 교회 안내서를 선물로 드립니다.<br />
                <span className="text-emerald-600 font-medium">따뜻한 환영과 함께 편안한 예배를 경험해보세요!</span>
              </p>
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/contact?type=first-visit">첫 방문 예약하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 담임목사와 교역자 소개 섹션 */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">교역자 소개</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">섬기는 분들</h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              주님의교회를 섬기는 교역자들을 소개합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-square">
                <Image 
                  src="/images/pastors/KakaoTalk_20250418_233455866_02.jpg" 
                  alt="방재홍 담임목사" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">방재홍 담임목사</h3>
                <p className="text-slate-600 mb-3">
                  하나님의 은혜로 이 작은 교회를 섬기게 되었습니다. 
                  말씀 중심의 목회와 지역 사회 섬김에 마음을 두고 있습니다.
                </p>
                <p className="text-slate-600 italic">
                  "함께 말씀을 나누고 서로를 격려하며, 하나님 나라를 이루어가는 소중한 동역자가 되어주세요."
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-square">
                <Image 
                  src="/images/pastors/KakaoTalk_20250418_233624229.jpg" 
                  alt="정성아 협동목사" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">정성아 협동목사</h3>
                <p className="text-slate-600 mb-3">
                  찬양과 기도를 통해 하나님께 나아가는 길을 함께 걷고 있습니다. 
                  새로 오신 분들의 신앙 성장을 돕는 일에 기쁨을 느낍니다.
                </p>
                <p className="text-slate-600 italic">
                  "하나님의 사랑 안에서 서로 돌보며 함께 자라가는 교회가 되기를 소망합니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-yellow-400">함께 예배드려요</span>
            </h2>
            <p className="text-lg mb-8 text-slate-300">
              <strong>"두세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있느니라" (마 18:20)</strong><br />
              🙏 <strong>따뜻한 예배 공동체</strong> + 🌱 <strong>서로 돌보는 가족 같은 교회</strong> + ❤️ <strong>함께 자라가는 신앙</strong><br />
              경주역에서 10분, <span className="text-yellow-400 font-semibold">하나님의 은혜가 넘치는 곳</span>에 여러분을 초대합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                <Link href="/contact">문의하기</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/worship">예배 참석하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}