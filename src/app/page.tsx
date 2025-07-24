// src/app/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, Heart, Video, Wifi, BookOpen, Music, Phone } from "lucide-react";
import { SocialShare, QuickShare } from "@/components/ui/social-share";
import { OnlineWorshipButton, KakaoTalkButton } from "@/components/ui/interactive-buttons";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 pb-16">
      {/* 말씀 기반 안내 배너 */}
      <div className="bg-slate-800 text-white py-4 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✝</span>
              <div className="text-left">
                <p className="text-lg font-semibold">"내게로 오라 내가 너희를 쉬게 하리라" (마 11:28)</p>
                <p className="text-sm text-slate-300">말씀 중심의 작은 교회 공동체</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                예배 참석 안내
              </Button>
              <Button size="sm" className="bg-white text-slate-800 hover:bg-slate-100">
                온라인 예배
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* 1. 히어로 섹션 - 말씀 중심의 메시지 */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
            alt="하나님의 말씀이 거하는 곳" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
        
        <div className="container relative z-30 text-white text-center">
          <div className="max-w-4xl mx-auto">
            {/* 말씀 중심 메시지 */}
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-black/40 rounded-lg text-lg font-medium mb-6 border border-white/20">
                "사람이 떡으로만 살 것이 아니요"
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              하나님의 말씀으로<br />
              <span className="text-yellow-200 font-normal">
                제자를 세우는
              </span><br />
              교회
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              "그러므로 너희는 가서 모든 민족을 제자로 삼아" (마 28:19)<br />
              작지만 진실한 <strong>말씀 중심의 교회</strong>에서<br />
              <strong>그리스도의 제자</strong>로 자라가는 삶을 함께 살아가세요
            </p>
            
            {/* 교회 본질 메시지 */}
            <div className="mb-8 p-6 bg-black/30 rounded-lg border border-white/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✝</span>
                <h3 className="text-xl font-semibold text-white">주님의교회는</h3>
              </div>
              <p className="text-lg text-slate-200 leading-relaxed">
                화려하지 않지만 진실하게, 크지 않지만 깊이 있게<br />
                <strong>하나님의 말씀</strong>을 사랑하고 <strong>제자의 삶</strong>을 추구하는<br />
                겸손한 믿음의 공동체입니다
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 text-lg font-medium" asChild>
                <Link href="/contact?type=first-visit">
                  예배에 함께하세요
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-10 py-4 text-lg font-medium" asChild>
                <Link href="#church-ministry">
                  제자훈련 알아보기
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* 스크롤 유도 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-center">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
          <span className="text-white/70 text-xs">아래로 스크롤</span>
        </div>
      </section>

      {/* 2. 교회 철학 - 공동체의 따뜻함 */}
      <section id="church-philosophy" className="py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-white text-slate-700 text-lg font-medium border border-slate-200 rounded-lg mb-8">
              우리가 꿈꾸는 교회
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              말씀 중심, <span className="text-slate-700">사랑 실천</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              작지만 진실한 공동체에서 하나님의 사랑을 경험하고<br />
              이웃과 함께 나누며 자라가는 교회입니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* 말씀 중심 */}
            <Card className="border border-slate-200 shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">말씀 중심의 신앙</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  "사람이 떡으로만 살 것이 아니요 하나님의 입으로부터 나오는 모든 말씀으로 살 것이라" (마 4:4)
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  성경 말씀을 삶의 중심에 두고, 체계적인 제자훈련을 통해 
                  온전한 그리스도인으로 자라갑니다.
                </p>
              </CardContent>
            </Card>
            
            {/* 사랑의 공동체 */}
            <Card className="border border-slate-200 shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">사랑의 공동체</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  "새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 사랑한 것 같이" (요 13:34)
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  주님의 사랑을 배운 자들이 서로를 진실하게 사랑하고, 
                  말씀 안에서 일치를 이루어가는 공동체입니다.
                </p>
              </CardContent>
            </Card>
            
            {/* 섬김의 삶 */}
            <Card className="border border-slate-200 shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">섬김의 삶</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  "각각 은사를 받은 대로 하나님의 여러 가지 은혜의 선한 청지기 같이 서로 봉사하라" (벧전 4:10)
                </p>
                <p className="text-slate-700 text-sm leading-relaxed">
                  주님의 사랑에 감사한 자들이 받은 은혜를 나누며, 
                  겸손하고 착한 마음으로 지역사회를 섬깁니다.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* 말씀으로 섬기는 목회자들 */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">말씀으로 섬기는 목회자들</h3>
              <p className="text-slate-600">"내 양을 먹이라" 하신 주님의 말씀에 순종하여 성도들을 섬기는 교역자들입니다</p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-700">
                  학벌보다는 거룩함으로, 웅변보다는 삶의 모범으로 말씀을 전하는 목회자들입니다
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* 담임목사 */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/pastors/KakaoTalk_20250418_233455866_02.jpg" 
                      alt="방재홍 담임목사" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">방재홍 담임목사</h4>
                    <p className="text-slate-600 text-sm">말씀 중심 목회와 지역 섬김</p>
                  </div>
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed">
                  "주님의 말씀을 사랑하고 배워서 순종하는 제자들을 세우고 싶습니다. 작지만 성경적이고, 겸손하지만 진실하게 주님을 따르는 공동체가 되기를 원합니다."
                </blockquote>
              </div>
              
              {/* 협동목사 */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image 
                      src="/images/pastors/KakaoTalk_20250418_233624229.jpg" 
                      alt="정성아 협동목사" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">정성아 협동목사</h4>
                    <p className="text-slate-600 text-sm">찬양과 새가족 양육</p>
                  </div>
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed">
                  "말씀을 사랑하는 성도들과 함께 찬양과 기도로 주님께 나아가고 있습니다. 한 영혼 한 영혼을 소중히 여기며, 말씀 안에서 성장하는 공동체가 되기를 소망합니다."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 신조 및 신앙고백 */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-slate-100 text-slate-700 text-lg font-medium border border-slate-200 rounded-lg mb-8">
              우리의 신앙
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-700">성경이 말하는 신앙</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              성경 말씀에 근거한 우리의 신앙고백과<br />
              순수한 복음의 진리를 고백합니다
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 우리의 신조 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">우리의 신조</h3>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">성경</h4>
                    <p className="text-slate-700 leading-relaxed">
                      신구약 66권의 성경은 하나님의 영감으로 기록된 무오한 하나님의 말씀이며, 
                      신앙과 생활의 유일한 규범입니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"모든 성경은 하나님의 감동으로 된 것으로" (딤후 3:16)</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">삼위일체 하나님</h4>
                    <p className="text-slate-700 leading-relaxed">
                      성부, 성자, 성령 하나님은 본질상 하나이시며, 
                      인격상 구별되시는 삼위일체 하나님이십니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"아버지와 아들과 성령의 이름으로" (마 28:19)</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">예수 그리스도</h4>
                    <p className="text-slate-700 leading-relaxed">
                      예수 그리스도는 참 하나님이시며 참 인간이시고, 
                      우리의 죄를 위해 십자가에서 죽으시고 부활하신 유일한 구주이십니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"다른 이로써는 구원을 받을 수 없나니" (행 4:12)</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">구원</h4>
                    <p className="text-slate-700 leading-relaxed">
                      구원은 오직 은혜로, 오직 믿음으로, 오직 그리스도로 받는 
                      하나님의 선물이며, 행위가 아닙니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니" (엡 2:8)</p>
                  </div>
                </div>
              </div>
              
              {/* 우리의 약속 */}
              <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">우리의 약속</h3>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">말씀 중심</h4>
                    <p className="text-slate-700 leading-relaxed">
                      성경 말씀을 삶의 중심에 두고, 말씀에 순종하는 제자의 삶을 
                      살아가기를 다짐합니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"사람이 떡으로만 살 것이 아니요" (마 4:4)</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">제자 양성</h4>
                    <p className="text-slate-700 leading-relaxed">
                      예수 그리스도의 제자를 삼는 사명을 감당하며, 
                      체계적인 양육을 통해 성숙한 그리스도인을 세웁니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"모든 민족을 제자로 삼아" (마 28:19)</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">겸손한 섬김</h4>
                    <p className="text-slate-700 leading-relaxed">
                      화려함보다는 진실함을, 큰 것보다는 깊은 것을 추구하며 
                      겸손하게 하나님과 이웃을 섬깁니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"섬김을 받으려 함이 아니라 섬기려 하고" (막 10:45)</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-400 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">순수한 신앙</h4>
                    <p className="text-slate-700 leading-relaxed">
                      세상의 가치가 아닌 하나님의 가치를 추구하며, 
                      물질주의와 성공주의를 경계하는 순수한 신앙을 지킵니다.
                    </p>
                    <p className="text-slate-600 text-xs mt-1 italic">"하나님과 재물을 겸하여 섬길 수 없느니라" (마 6:24)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 개혁주의 전통 */}
            <div className="mt-12 bg-slate-800 text-white rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">개혁주의 신앙 전통</h3>
                <p className="text-slate-300">
                  우리는 종교개혁의 정신을 계승하며, 성경으로 돌아가는(Sola Scriptura) 신앙을 추구합니다
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-yellow-400">오직 성경</h4>
                  <p className="text-xs text-slate-300">Sola Scriptura</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-yellow-400">오직 은혜</h4>
                  <p className="text-xs text-slate-300">Sola Gratia</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-yellow-400">오직 믿음</h4>
                  <p className="text-xs text-slate-300">Sola Fide</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-yellow-400">오직 그리스도</h4>
                  <p className="text-xs text-slate-300">Solus Christus</p>
                </div>
                <div className="bg-slate-700 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-yellow-400">오직 하나님께 영광</h4>
                  <p className="text-xs text-slate-300">Soli Deo Gloria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 함께 자라기 - 예배 & 양육 프로그램 */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-blue-100 text-blue-800 text-lg font-semibold rounded-full mb-8">
              🌱 함께 자라가는 여정
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              말씀으로 <span className="text-blue-600">자라가는 신앙</span>
            </h2>
            <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              바쁜 일상에서도 유연하게 참여할 수 있는 예배와<br />
              체계적인 양육 프로그램으로 함께 성장합니다
            </p>
            
            {/* 사용자 유형별 맞춤 안내 */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">👶</div>
                <h4 className="font-bold text-blue-900 mb-2">어린 자녀가 있는 가정</h4>
                <p className="text-sm text-blue-700">영유아부터 청소년까지 연령별 맞춤 프로그램</p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-bold text-green-900 mb-2">바쁜 직장인</h4>
                <p className="text-sm text-green-700">온라인 예배 + 저녁반 제자훈련 가능</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">🏠</div>
                <h4 className="font-bold text-purple-900 mb-2">주부/시니어</h4>
                <p className="text-sm text-purple-700">오전반 제자훈련 + 소그룹 모임</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* 예배 안내 */}
            <div>
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
                  <Calendar className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-6">하이브리드 예배</h3>
                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  직접 오시면 따뜻한 산속 공동체를, 바쁜 날에는 온라인으로 편리하게
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="group border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300">주일예배</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-200 transition-colors duration-300">메인 예배</span>
                    </div>
                    <p className="text-slate-600 mb-2 group-hover:text-slate-700 transition-colors duration-300">매주 일요일 오전 11시</p>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">온 가족이 함께 드리는 주일 예배 + 예배 후 친교 시간</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <div className="text-xs text-blue-600 space-y-1">
                        <p>• 10:50 예배 준비 및 찬양 연습</p>
                        <p>• 11:00-12:30 말씀과 찬양의 예배</p>
                        <p>• 12:30-13:30 친교 식사 시간</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-green-700 transition-colors duration-300">주일찬양예배</h4>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-green-200 transition-colors duration-300">찬양 중심</span>
                    </div>
                    <p className="text-slate-600 mb-2 group-hover:text-slate-700 transition-colors duration-300">매주 일요일 오후 2시</p>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">찬양과 기도로 함께 드리는 주일 오후 예배</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <div className="text-xs text-green-600 space-y-1">
                        <p>• 자유롭고 친밀한 찬양 예배</p>
                        <p>• 기타와 피아노 반주</p>
                        <p>• 예배 후 소그룹 나눔 시간</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-amber-700 transition-colors duration-300">새벽기도회</h4>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-amber-200 transition-colors duration-300">매일</span>
                    </div>
                    <p className="text-slate-600 mb-2 group-hover:text-slate-700 transition-colors duration-300">매일 오전 5시</p>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">매일 아침 말씀과 기도로 하루를 시작하는 새벽 기도회</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <div className="text-xs text-amber-600 space-y-1">
                        <p>• 새벽 5:00-5:30 (약 30분)</p>
                        <p>• 말씀 묵상과 기도 중심</p>
                        <p>• 온라인 참여 가능</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="h-6 w-6 text-blue-600" />
                  <h4 className="text-lg font-bold text-blue-900">온라인 예배 안내</h4>
                </div>
                <p className="text-blue-800 mb-4">
                  직접 오기 어려운 상황에 계신 분들을 위해 온라인 예배를 제공합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Video className="mr-2 h-4 w-4" />
                    유튜브 라이브
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    카카오톡 링크
                  </Button>
                </div>
              </div>
            </div>
            
            {/* 양육 프로그램 */}
            <div>
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold mb-6">체계적 양육 프로그램</h3>
                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  새가족부터 사역자까지, 옥한흠 목사님의 제자훈련 철학으로 단계적 성장
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="group flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-lg font-bold text-green-600 group-hover:text-green-700">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-green-700 transition-colors duration-300">새가족반</h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">4주 과정 - 교회 생활 기초</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <p className="text-xs text-green-600">• 기독교 기초 지식 • 교회 생활 안내 • 믿음의 기초</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-green-600 text-sm font-medium">자세히 →</span>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-lg font-bold text-blue-600 group-hover:text-blue-700">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-blue-700 transition-colors duration-300">기초 성경공부</h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">12주 과정 - 성경 전반 이해</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <p className="text-xs text-blue-600">• 구약성경 개관 • 신약성경 개관 • 성경적 세계관</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-blue-600 text-sm font-medium">자세히 →</span>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-lg font-bold text-purple-600 group-hover:text-purple-700">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-purple-700 transition-colors duration-300">제자훈련</h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">32주 과정 - 영적 성숙과 섬김</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <p className="text-xs text-purple-600">• 영성훈련 • 말씀 묵상 • 섬김의 삶 • 전도와 양육</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-purple-600 text-sm font-medium">자세히 →</span>
                  </div>
                </div>
                
                <div className="group flex items-center gap-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <span className="text-lg font-bold text-orange-600 group-hover:text-orange-700">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg group-hover:text-orange-700 transition-colors duration-300">사역훈련</h4>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">32주 과정 - 사역자 양성</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <p className="text-xs text-orange-600">• 사역 은사 발견 • 리더십 개발 • 전도와 양육 • 교회 섬김</p>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-orange-600 text-sm font-medium">자세히 →</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 text-indigo-900">💡 유연한 시간표</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="group bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-300">
                    <h5 className="font-medium text-indigo-900 mb-1 group-hover:text-indigo-700">직장인반</h5>
                    <p className="text-indigo-700 group-hover:text-indigo-600">평일 저녁 7:30</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-indigo-600">월-금 중 선택 가능</p>
                    </div>
                  </div>
                  <div className="group bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-300">
                    <h5 className="font-medium text-indigo-900 mb-1 group-hover:text-indigo-700">주부반</h5>
                    <p className="text-indigo-700 group-hover:text-indigo-600">평일 오전 10:00</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-indigo-600">아이 돌봄 서비스 제공</p>
                    </div>
                  </div>
                  <div className="group bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-300">
                    <h5 className="font-medium text-indigo-900 mb-1 group-hover:text-indigo-700">온라인반</h5>
                    <p className="text-indigo-700 group-hover:text-indigo-600">주말 오후 2:00</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-indigo-600">전국 어디서나 참여</p>
                    </div>
                  </div>
                  <div className="group bg-white/60 p-3 rounded-lg hover:bg-white/80 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-300">
                    <h5 className="font-medium text-indigo-900 mb-1 group-hover:text-indigo-700">소그룹</h5>
                    <p className="text-indigo-700 group-hover:text-indigo-600">선택 시간</p>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs text-indigo-600">개인 일정 맞춤 조율</p>
                    </div>
                  </div>
                </div>
                
                {/* 맞춤 추천 */}
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🎯</span>
                    <h6 className="font-bold text-yellow-900">맞춤 추천</h6>
                  </div>
                  <p className="text-sm text-yellow-800">
                    <strong>새로 이사 오신 분:</strong> 주부반(오전) 또는 온라인반 추천<br />
                    <strong>바쁜 직장인:</strong> 온라인반 또는 직장인반(저녁) 추천
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 설교 말씀 미리보기 */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">📖 말씀으로 함께하는 시간</h3>
              <p className="text-xl text-slate-700">주님의교회의 설교 말씀을 통해 영적 성장과 위로를 얻으세요</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://www.youtube.com/embed/lQIvLERjcuU" 
                  title="평안을 너희에게 주노라" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4">평안을 너희에게 주노라</h4>
                <p className="text-slate-600 mb-6">방재홍 목사 | 2025.04.14</p>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  바쁜 일상 속에서 참된 평안을 찾고 계신가요? 
                  주님께서 주시는 진정한 평안에 대해 함께 나누어보세요.
                </p>
                <Button asChild>
                  <Link href="/sermons">모든 설교 보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 4. 첫 방문 가이드 - 편안한 시작 */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 bg-blue-100 text-blue-800 text-lg font-semibold rounded-full mb-8">
              🤗 편안한 첫 걸음
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              "교회가 처음이에요..." <span className="text-blue-600">걱정 마세요!</span>
            </h2>
            <p className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              무엇을 입고 와야 할지, 어디에 앉아야 할지, 언제 일어서야 할지...<br />
              모든 궁금증을 미리 해결해드립니다! 첫 방문부터 <strong>편안하고 자연스럽게</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* 실용적 안내 */}
            <div>
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-6">실용적 안내</h3>
                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  처음 오시는 분들이 가장 궁금해하시는 실용적인 정보들을 정리했습니다
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="group border-l-4 border-l-blue-500 shadow-lg hover:shadow-2xl hover:border-l-8 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300">복장 & 분위기</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">자유로움</span>
                    </div>
                    <p className="text-slate-600 mb-2 group-hover:text-slate-700 transition-colors duration-300">평상복으로 편안하게 오세요</p>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">정장 필요 없음 • 계절별 실내 환경 완비 • 자유롭고 따뜻한 분위기</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <div className="flex items-center gap-2 text-blue-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium">매주 다양한 복장의 성도들과 함께 예배</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group shadow-lg hover:shadow-2xl hover:border-l-4 hover:border-l-green-500 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-green-700 transition-colors duration-300">주차 & 교통</h4>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">편리함</span>
                    </div>
                    <p className="text-slate-600 mb-2 group-hover:text-slate-700 transition-colors duration-300">교회 앞 주차장 50대 + 픽업 서비스</p>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">주차 도우미 배치 • 경주역 픽업 가능 • 대중교통 안내</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <div className="flex items-center gap-2 text-green-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">경주역에서 10분, 너무 가깐지 않은 그 곳</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="group shadow-lg hover:shadow-2xl hover:border-l-4 hover:border-l-purple-500 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-purple-700 transition-colors duration-300">예배 진행</h4>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">1시간 30분</span>
                    </div>
                    <p className="text-slate-600 mb-2 group-hover:text-slate-700 transition-colors duration-300">오전 11시 시작 • 찬양-설교-기도 순서</p>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">10:50 시작 준비 • 12:30 종료 • 예배 후 친교 시간</p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <div className="flex items-center gap-2 text-purple-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">언제 일어서고 앉아도 되는지 미리 알려드려요</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* 특별 배려 */}
            <div>
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold mb-6">특별 배려</h3>
                <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                  새가족을 위한 세심한 배려와 따뜻한 환영이 준비되어 있습니다
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">아이 돌봄</h4>
                    <p className="text-sm text-slate-600">영유아부터 초등학생까지 전문 교사 상주</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">새가족 도우미</h4>
                    <p className="text-sm text-slate-600">첫 방문부터 정착까지 개인별 맞춤 안내</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">🎁</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">첫 방문 선물</h4>
                    <p className="text-sm text-slate-600">콩과나무로 건강 제품 + 교회 안내서</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold mb-4 text-indigo-900">💡 미리 연락하시면</h4>
                <div className="grid grid-cols-1 gap-4 text-sm">
                  <div className="bg-white/60 p-3 rounded-lg">
                    <h5 className="font-medium text-indigo-900 mb-1">픽업 서비스</h5>
                    <p className="text-indigo-700">경주역에서 교회까지 픽업 가능</p>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg">
                    <h5 className="font-medium text-indigo-900 mb-1">개인 안내</h5>
                    <p className="text-indigo-700">새가족 도우미가 처음부터 끝까지 안내</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 맞춤형 연락 및 예약 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-6">🎉 편안한 첫 방문을 위해</h3>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                처음 오시는 분들을 위한 모든 준비가 되어 있습니다.<br />
                <span className="text-blue-600 font-bold">언제든 편안하게 연락주세요!</span>
              </p>
            </div>
            
            {/* 사용자 유형별 선택 옵션 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
                  <h4 className="font-bold text-green-900 mb-3">첫 방문이에요?</h4>
                  <p className="text-sm text-green-700 mb-4">경주역 픽업부터 예배 안내까지 모든 것을 도와드립니다</p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href="/contact?type=first-visit">첫 방문 예약</Link>
                  </Button>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-green-600">✨ 첫 방문 선물 준비됨</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                  <h4 className="font-bold text-blue-900 mb-3">너무 바빠시나요?</h4>
                  <p className="text-sm text-blue-700 mb-4">온라인으로 편리하게 예배에 참여해보세요</p>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    온라인 예배 링크
                  </Button>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-blue-600">📱 매주 예배 30분 전 전송</p>
                  </div>
                </div>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤔</div>
                  <h4 className="font-bold text-purple-900 mb-3">가볍게 알아보고 싶어요</h4>
                  <p className="text-sm text-purple-700 mb-4">제자훈련, 콩과나무로 등 궁금한 것들을 문의하세요</p>
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white" asChild>
                    <Link href="/contact">일반 문의</Link>
                  </Button>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-purple-600">💬 24시간 카카오톡 상담</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 대표 연락처 */}
            <div className="text-center border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-600 mb-3">직접 전화로 상담하고 싶으시냐고:</p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span className="font-bold text-lg">010-4162-2701</span>
                </div>
                <span className="text-slate-400">|</span>
                <span className="text-sm text-slate-600">방재홍 담임목사</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. 연락 & 참여 - 함께해요 */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* 메인 메시지 */}
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-3 bg-yellow-400/20 text-yellow-300 text-lg font-semibold rounded-full mb-8">
                🤝 함께하는 여정
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                평온한 산속에서 <span className="text-yellow-400">함께해요</span>
              </h2>
              <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                "두세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있느니라" (마 18:20)<br />
                바쁜 도시에서 10분 거리, <strong>하나님의 은혜가 넘치는 곳</strong>에 여러분을 초대합니다
              </p>
            </div>
            
            {/* 3가지 참여 방법 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* 첫 방문 */}
              <Card className="group border-0 shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 text-white transform hover:-translate-y-2 hover:rotate-1 cursor-pointer">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Heart className="h-10 w-10 text-green-900 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-green-200 transition-colors duration-300">처음 오시는 분</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    "교회가 처음이라 걱정된다"면 미리 연락주세요. 픽업부터 안내까지 모든 준비가 되어 있습니다.
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 mb-4">
                    <div className="flex items-center justify-center gap-2 text-green-300 text-sm">
                      <span>✨</span>
                      <span>첫 방문 선물 준비됨</span>
                      <span>✨</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" asChild>
                    <Link href="/contact?type=first-visit">첫 방문 예약</Link>
                  </Button>
                </CardContent>
              </Card>
              
              {/* 온라인 참여 */}
              <Card className="group border-0 shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 text-white transform hover:-translate-y-2 cursor-pointer">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Wifi className="h-10 w-10 text-blue-900 group-hover:animate-bounce" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-200 transition-colors duration-300">온라인 참여</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    "바빠서 직접 오기 어렵다"면 온라인으로 편리하게 예배에 참여하세요.
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 mb-4">
                    <div className="flex items-center justify-center gap-2 text-blue-300 text-sm">
                      <span>📱</span>
                      <span>매주 예배 30분 전 링크 전송</span>
                      <span>💻</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    온라인 예배 링크 받기
                  </Button>
                </CardContent>
              </Card>
              
              {/* 일반 문의 */}
              <Card className="group border-0 shadow-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 text-white transform hover:-translate-y-2 hover:-rotate-1 cursor-pointer">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                    <MessageSquare className="h-10 w-10 text-yellow-900 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-yellow-200 transition-colors duration-300">궁금한 것들</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    "제자훈련은 어떻게 하나요?", "콩과나무로는 뭔가요?" 등 모든 궁금증을 해결해드립니다.
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100 mb-4">
                    <div className="flex items-center justify-center gap-2 text-yellow-300 text-sm">
                      <span>🔍</span>
                      <span>24시간 카카오톡 상담 가능</span>
                      <span>💬</span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-yellow-900 rounded-full font-bold group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl" asChild>
                    <Link href="/contact">문의하기</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* 지역 맞춤 오시는 길 안내 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-yellow-400">🏔️ 도심 가까운 평온한 산속</h3>
                
                {/* 지역별 맞춤 안내 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                  <h4 className="text-xl font-bold text-white mb-4">경주역 신도시 주민들에게</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">🚗</span>
                      <span className="text-white">차로 10분 거리</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">🚌</span>
                      <span className="text-white">경주역 픽업 서비스</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400">🏠</span>
                      <span className="text-white">아이들 교육 환경 좋음</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-400">🌿</span>
                      <span className="text-white">자연 친화적 환경</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-green-400" />
                    <div>
                      <h4 className="font-bold text-lg">경상북도 경주시 내남면 내외로 2175</h4>
                      <p className="text-slate-400">경주역에서 차로 약 10분</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-blue-400" />
                    <div>
                      <h4 className="font-bold text-lg">주일예배 오전 11시</h4>
                      <p className="text-slate-400">온라인/오프라인 하이브리드</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-yellow-400" />
                    <div>
                      <h4 className="font-bold text-lg">010-4162-2701</h4>
                      <p className="text-slate-400">언제든 연락 주세요</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8" asChild>
                    <Link href="/directions">자세한 오시는 길</Link>
                  </Button>
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full px-8">
                    픽업 서비스 신청
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/activities/20250419_001222.png" 
                  alt="주님의교회 위치 - 평온한 산속" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">평온한 산속 교회</h4>
                  <p className="text-slate-200">도시의 번잡함을 벗어난 자연 속 은혜의 공간</p>
                </div>
              </div>
            </div>
            
            {/* 맞춤형 특별 이벤트 & 추천 */}
            <div className="mt-20 space-y-8">
              {/* 메인 이벤트 */}
              <div className="bg-gradient-to-r from-green-600/80 to-emerald-600/80 backdrop-blur-sm rounded-3xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-6">🌸 봄맞이 특별 초청 예배</h3>
                <p className="text-xl mb-8 text-green-100">
                  아름다운 봄 산길을 함께 걸으며 예배드리는 특별한 시간<br />
                  <strong>2025년 5월 10일 토요일 오전 10시</strong>
                </p>
                
                {/* 사용자 맞춤 추가 정보 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-green-200">
                      <span>👶</span>
                      <span>아이들 프로그램 준비</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-200">
                      <span>🍳</span>
                      <span>주식 및 간식 제공</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-200">
                      <span>🚗</span>
                      <span>경주역 셔틀 운행</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 rounded-full px-10 text-lg font-bold" asChild>
                    <Link href="/contact?event=봄예배">참가 신청하기</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 text-lg">
                    상세 정보 보기
                  </Button>
                </div>
              </div>
              
              {/* 맞춤 추천 콘텐츠 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">📺</span>
                    <h4 className="text-xl font-bold text-white">온라인 예배 체험</h4>
                  </div>
                  <p className="text-blue-200 mb-4">
                    바빠신 분들을 위해 우선 온라인으로 체험해보세요
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    예배 라이브 시청하기
                  </Button>
                </div>
                
                <div className="bg-purple-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">📚</span>
                    <h4 className="text-xl font-bold text-white">제자훈련 알아보기</h4>
                  </div>
                  <p className="text-purple-200 mb-4">
                    체계적인 신앙 성장 프로그램에 대해 알아보세요
                  </p>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white w-full" asChild>
                    <Link href="/discipleship">프로그램 보기</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}