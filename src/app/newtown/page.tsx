import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Users, Heart, Home, Baby, GraduationCap, Gift, Car, MessageSquare, Phone } from "lucide-react";

export const metadata = {
  title: "새로운 이웃 환영 | 주님의교회",
  description: "경주 지역에 새롭게 정착하신 모든 분들을 위한 특별한 신앙 생활 안내"
};

export default function NewtownPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-16">
      {/* 히어로 섹션 - 모든 새로운 이웃 환영 */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10" />
        
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Home className="h-4 w-4" />
              새로운 이웃을 환영합니다
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
              새로운 시작을 하신 여러분과<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                함께 자라가는 믿음
              </span>을 꿈꿉니다
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-slate-700 leading-relaxed">
              <strong>"평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라" (요 14:27)</strong><br />
              새로운 곳에서 새로운 시작을 하신 여러분을 <span className="text-green-600 font-bold">따뜻한 믿음의 형제자매</span>로 초대합니다<br />
              🌿 자연 속에서 • 🏔️ 평온함 속에서 • 🤗 서로 격려하며 신앙 생활을 함께해요!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                카카오톡으로 상담받기
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-green-600 text-green-600 hover:bg-green-50" asChild>
                <Link href="#programs">특별 프로그램 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 새로운 이웃을 위한 특별 서비스 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">🌱 새가족 돌봄 사역</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              새로운 곳에서의 신앙 생활, <span className="text-blue-600">함께 시작해요!</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              <strong>"그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라" (롬 12:5)</strong><br />
              새로운 환경에서 신앙 생활을 시작하는 것이 <span className="text-blue-600 font-bold">쉽지 않으시죠?</span><br />
              🙏 <strong>서로 기도하고</strong> 💕 <strong>서로 돌보며</strong> ✨ <strong>함께 자라가는</strong> 따뜻한 공동체입니다!
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
                <CardTitle className="text-xl">새가족 모임</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  새롭게 오신 분들과의 특별한 친교 모임이 매월 진행됩니다.
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
                <CardTitle className="text-xl">환영 패키지</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-4">
                  새가족을 위한 특별한 선물과 교회 생활 안내서를 준비했습니다.
                </p>
                <p className="text-sm text-purple-600 font-medium">
                  첫 방문시 전달
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 생애주기별 프로그램 */}
      <section className="py-20 bg-slate-50" id="programs">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">👨‍👩‍👧‍👦 생애주기별 맞춤 신앙교육</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              모든 세대가 <span className="text-green-600">함께 성장하는</span> 교회
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              아이부터 어르신까지, 모든 연령대를 위한 맞춤형 프로그램이 준비되어 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="flex items-center gap-3">
                  <Baby className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-xl">영유아부 & 유치부</CardTitle>
                    <CardDescription className="text-blue-100">0-7세 어린이</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>놀이를 통한 신앙 교육</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>부모와 함께하는 예배</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>안전한 놀이 공간 제공</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-xl">초중고등부</CardTitle>
                    <CardDescription className="text-green-100">8-19세 학생</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>또래와 함께하는 신앙 성장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>진로 상담 및 멘토링</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">•</span>
                    <span>방학 특별 프로그램</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-xl">청년부 & 장년부</CardTitle>
                    <CardDescription className="text-purple-100">20세 이상 성인</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>삶과 신앙의 균형 찾기</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>소그룹 성경공부</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>가정 신앙 세미나</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-xl">실버부</CardTitle>
                    <CardDescription className="text-orange-100">65세 이상 어르신</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>건강 체조 및 친교 모임</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>성경 필사 프로그램</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>병원 동행 서비스</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 이사 정착 도우미 서비스 */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-4">🏠 정착 도우미 서비스</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  새로운 지역 정착, <span className="text-orange-600">혼자가 아닙니다</span>
                </h2>
                <p className="text-lg text-slate-700 mb-8">
                  낯선 환경에서 필요한 모든 도움을 드립니다. 지역 정보부터 생활 팁까지, 
                  이미 정착한 교우들이 따뜻한 마음으로 도와드립니다.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">지역 생활 정보 제공</h3>
                      <p className="text-slate-600">병원, 마트, 학교 등 필수 생활 정보 안내</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">이웃 연결 프로그램</h3>
                      <p className="text-slate-600">비슷한 상황의 가정들과 교류 기회 제공</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">긴급 도움 네트워크</h3>
                      <p className="text-slate-600">갑작스런 상황에 도움받을 수 있는 연락망</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="aspect-square relative bg-orange-50 rounded-2xl overflow-hidden">
                <Image 
                  src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
                  alt="정착 도우미 서비스" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              새로운 시작, 함께 하실 준비가 되셨나요?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              "두세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있느니라" (마 18:20)<br />
              작은 교회이기에 가능한 세심한 돌봄과 진정한 교제가 여러분을 기다립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
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