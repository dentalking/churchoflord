import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Users, Heart, Home, Baby, GraduationCap, Gift, Car, MessageSquare, Phone } from "lucide-react";

export const metadata = {
  title: "신도시 주민 환영 | 주님의교회",
  description: "경주역 신도시에 새롭게 정착하신 여러분을 위한 특별한 신앙 생활 안내"
};

export default function NewtownPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-16">
      {/* 히어로 섹션 - 신도시 주민 전용 */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="h-4 w-4" />
              경주역 신도시 주민 전용 페이지
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              새로운 터전에서<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                평온한 신앙 생활
              </span>을 시작하세요
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-700 leading-relaxed">
              경주역 신도시에 새롭게 정착하신 여러분,<br />
              주님의교회가 여러분의 든든한 신앙 공동체가 되어드리겠습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                카카오톡으로 상담받기
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-green-600 text-green-600 hover:bg-green-50" asChild>
                <Link href="#programs">신도시 전용 프로그램 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 신도시 주민을 위한 특별 서비스 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">신도시 주민 특별 혜택</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">왜 주님의교회를 선택해야 할까요?</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              경주역 신도시에서 10분 거리, 새로운 환경에 적응하는 여러분을 위한 특별한 배려가 준비되어 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">무료 픽업 서비스</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  처음 3개월간 경주역에서 교회까지 무료 픽업 서비스를 제공합니다.
                </p>
                <p className="text-sm text-green-600 font-medium">
                  주일 오전 10:30 경주역 앞 픽업
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">신도시 가족 모임</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  같은 지역에서 온 교우들과의 특별한 친교 모임이 매월 진행됩니다.
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  매월 둘째 주 토요일 오후 2시
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">신도시 환영 패키지</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  첫 방문 시 콩과나무로 건강 제품과 지역 정보 안내서를 드립니다.
                </p>
                <p className="text-sm text-purple-600 font-medium">
                  신도시 생활 가이드북 포함
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 자녀 교육 프로그램 */}
      <section id="programs" className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-4">자녀 교육 프로그램</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">아이들을 위한 특별한 프로그램</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              새로운 환경에 적응하는 아이들을 위한 체계적이고 따뜻한 교육 프로그램을 운영합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Baby className="h-6 w-6 text-pink-500" />
                    영유아부 (0-5세)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <li>• 주일 오전 11시 (부모 예배 시간과 동일)</li>
                    <li>• 놀이를 통한 성경 이야기</li>
                    <li>• 전문 보육교사 2명 상주</li>
                    <li>• 신도시 맘들을 위한 육아 상담</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-blue-500" />
                    초등부 (6-12세)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <li>• 주일 오전 11시 전용 예배실</li>
                    <li>• 체험형 성경 교육 프로그램</li>
                    <li>• 방학 중 영어 성경학교</li>
                    <li>• 매월 야외 체험학습</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image 
                src="/images/activities/20250419_001222.png"
                alt="아이들 교육 프로그램"
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 교통편 및 생활 정보 */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">교통 및 생활 정보</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">경주역에서 교회까지</h2>
              <p className="text-lg mb-8 text-slate-700 leading-relaxed">
                대중교통과 자가용 모두 편리하게 오실 수 있도록 자세한 안내를 드립니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">자가용 이용</h3>
                    <p className="text-slate-600 mb-2">경주역 → 내남면 방향 약 10분</p>
                    <p className="text-sm text-slate-500">주차 공간 넉넉히 준비되어 있습니다</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">픽업 서비스</h3>
                    <p className="text-slate-600 mb-2">주일 오전 10:30 경주역 2번 출구</p>
                    <p className="text-sm text-slate-500">사전 예약 필수 (카카오톡 문의)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/directions">상세한 오시는 길 보기</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image 
                src="/images/direction/navermap.png"
                alt="교회 위치 지도"
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 신도시 주민 후기 */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-4">신도시 주민 후기</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">먼저 정착한 교우들의 이야기</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    김
                  </div>
                  <div>
                    <h3 className="font-bold">김○○님 가족</h3>
                    <p className="text-sm text-slate-500">신도시 입주 1년차</p>
                  </div>
                </div>
                <p className="text-slate-700 italic leading-relaxed">
                  "처음에는 멀다고 생각했는데, 산길을 따라 올라가면서 마음이 정말 평온해져요. 
                  아이들도 자연 속에서 뛰어놀 수 있어서 좋아하고, 무엇보다 교우분들이 따뜻하게 맞아주셔서 감사해요."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    이
                  </div>
                  <div>
                    <h3 className="font-bold">이○○님 가족</h3>
                    <p className="text-sm text-slate-500">신도시 입주 6개월차</p>
                  </div>
                </div>
                <p className="text-slate-700 italic leading-relaxed">
                  "픽업 서비스가 정말 좋았어요! 처음 몇 달은 길도 잘 모르고 걱정했는데, 
                  목사님께서 직접 마중 나와주셔서 든든했습니다. 이제는 우리 가족의 소중한 신앙 터전이 되었어요."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              지금 바로 시작하세요!
            </h2>
            <p className="text-xl mb-8 text-green-100">
              경주역 신도시에서 새로운 신앙 생활을 시작할 준비가 되셨나요?<br />
              주님의교회가 여러분을 기다리고 있습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                <MessageSquare className="mr-2 h-5 w-5" />
                카카오톡으로 상담받기
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="tel:010-4162-2701">
                  <Phone className="mr-2 h-5 w-5" />
                  전화로 문의하기
                </Link>
              </Button>
            </div>

            <div className="text-center text-green-100">
              <p className="text-sm">
                📍 경상북도 경주시 내남면 내외로 2175<br />
                ⏰ 상담 가능 시간: 평일 오전 9시 - 오후 6시
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}