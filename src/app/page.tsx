// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, Heart, Video, Wifi } from "lucide-react";
import { SocialShare, QuickShare } from "@/components/ui/social-share";

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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">평온한 신앙의 쉼터<br />주님의교회</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              경주역에서 10분, 아름다운 산길을 따라<br className="hidden sm:block" /> 
              평온한 신앙의 쉼터로 여러분을 초대합니다
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

      {/* 경주역 신도시 주민 환영 섹션 */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">경주역 신도시 주민 환영</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">평온한 신앙 생활의 시작</h2>
            <p className="text-lg mb-8 text-slate-700 leading-relaxed">
              경주역 신도시에 새롭게 정착하신 여러분, 주님의교회는 아름다운 산길 10분 거리에 자리 잡은 
              평온한 신앙의 터전입니다. '콩과나무로'의 건강한 나눔과 따뜻한 공동체가 여러분을 기다립니다.
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
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">주요 사역</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">콩과나무로 프로젝트</h2>
              <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                '콩과나무로'는 주님의교회에서 진행하는 건강하고 자연 친화적인 제품을 통한 나눔 사역입니다. 
                내남면의 청정 자연에서 직접 재배한 콩과 나무 열매를 사용하여 
                화학 첨가물 없이 건강한 재료만으로 만든 제품을 통해 지역 사회와 함께 나눔의 정신을 실천합니다.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">건강한 재료</h3>
                  <p className="text-sm text-slate-600">자연에서 직접 재배한 원료만 사용</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">전통 방식</h3>
                  <p className="text-sm text-slate-600">정성을 담아 전통 방식으로 제작</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">환경 보호</h3>
                  <p className="text-sm text-slate-600">친환경 포장재와 제작 과정</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">나눔 실천</h3>
                  <p className="text-sm text-slate-600">수익금은 지역사회와 선교에 사용</p>
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

      {/* 예배 시간 섹션 */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">예배 안내</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">함께 드리는 예배</h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              주님의교회는 산속의 평온함 속에서 하나님을 예배하며 서로를 돌보는 공동체입니다. 
              다양한 예배와 모임을 통해 함께 성장하는 시간을 가집니다.
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
              <Button size="lg" className="rounded-full px-6 bg-red-600 hover:bg-red-700">
                <Video className="mr-2 h-5 w-5" />
                온라인 예배 참여
              </Button>
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
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">첫 방문자 가이드</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">처음 오시는 분들을 위한 안내</h2>
            <p className="text-lg mb-0 text-slate-700 max-w-2xl mx-auto">
              주님의교회에 처음 오시는 분들이 편안하게 예배에 참여할 수 있도록 자세한 안내를 드립니다.
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
                  <Button size="sm" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" asChild>
                    <Link href="#" onClick={() => window.open('https://pf.kakao.com/_xjxoEdn', '_blank')}>
                      카카오톡 문의
                    </Link>
                  </Button>
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
                  주님의교회 설립자이자 지역 사회를 섬기는 목회자. 경주 지역 선교와 아프리카 선교를 위해 헌신.
                </p>
                <p className="text-slate-600 italic">
                  "신도시 주민 여러분, 평온한 산골 교회에서 함께 신앙의 쉼을 누리세요."
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
                  찬양 사역과 새신자 양육에 열정을 가진 목회자. '콩과나무로' 프로젝트를 통해 공동체의 나눔을 실천.
                </p>
                <p className="text-slate-600 italic">
                  "경주역에서 10분, 건강한 신앙 공동체로 초대합니다."
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">함께 신앙의 여정을 걸어요</h2>
            <p className="text-lg mb-8 text-slate-300">
              주님의교회는 언제나 여러분을 환영합니다. 
              특히 경주역 신도시 주민 여러분, 아름다운 산길을 따라 평온한 신앙 생활의 시작을 함께 하세요.
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