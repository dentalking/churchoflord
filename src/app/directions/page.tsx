import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Car, Bus, Clock, MapPin, Phone, MessageSquare, Navigation, Home, Heart, Users } from "lucide-react";
import { NaverMapButton, KakaoMapButton, NaverMapButtonSmall, PickupServiceButton } from "@/components/ui/interactive-buttons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "도심에서 가까운 평온한 산속 주님의교회로 오시는 길을 안내합니다. 따뜻한 믿음 공동체가 모든 분들을 환영합니다.",
  keywords: "교회 위치, 오시는 길, 공동체 교통편, 주차장, 경주시 내남면",
};

export default function DirectionsPage() {
  return (
    <div className="flex flex-col gap-y-16 pb-16">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Navigation className="h-4 w-4" />
              도심에서 가까운 평온한 산속
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">오시는 길</h1>
            <div className="bg-white/80 rounded-lg p-6 border border-slate-200 max-w-4xl mx-auto">
              <p className="text-lg text-slate-700 italic mb-4">
                "수고하고 무거운 짐 진 자들아 다 내게로 오라 
                내가 너희를 쉼게 하리라"
              </p>
              <p className="text-slate-600">- 마태복음 11:28 -</p>
            </div>
            <p className="text-lg text-slate-700 mt-6 max-w-3xl mx-auto">
              도심에서 가까운 평온한 산속, 주님의교회로 오시는 모든 분들을 환영합니다.<br />
              하나님의 안식과 평안이 있는 곳으로 초대합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 교회 공동체 안내 */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-8 w-8" />
                  <h2 className="text-3xl font-bold">따뜻한 믿음 공동체</h2>
                </div>
                <div className="bg-white/10 rounded-lg p-4 mb-8">
                  <p className="text-lg text-green-100 italic mb-2">
                    "형제를 사랑하여 서로 우애하고 존경하기를 서로 먼저 하라"
                  </p>
                  <p className="text-green-200 text-sm">- 로마서 12:10 -</p>
                </div>
                <p className="text-xl text-green-100">
                  처음 오시는 모든 분들을 가족처럼 따뜻하게 맞아드립니다.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">함께하는 교통편</h3>
                      <p className="text-green-100">교우들과 함께 카풀이나 대중교통으로 편안하게</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Heart className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">새가족 돌봄</h3>
                      <p className="text-green-100">첫 방문부터 신앙 생활까지 함께 동행하며 섬김</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    교통편 문의하기
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="tel:010-4162-2701">
                      <Phone className="mr-2 h-5 w-5" />
                      전화로 문의
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative min-h-[400px]">
                <Image
                  src="/images/direction/pathway.png"
                  alt="주님의교회로 오시는 평온한 산길"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 교통편별 상세 안내 */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">교통편 안내</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">다양한 방법으로 오세요</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 자가용 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">자가용 이용</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">📍 주소</h3>
                  <p className="text-green-700">경상북도 경주시 내남면 내외로 2175</p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold">🚗 경주역에서 오시는 길</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                    <li>경주역에서 화천리 방향 도로 이용</li>
                    <li>화천보건진료소 방향 직진</li>
                    <li>범바위골에서 우회전</li>
                    <li>학동 입구에서 좌회전 3분 이동 후 교회 도착</li>
                  </ol>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">🅿️ 주차 안내</h3>
                  <p className="text-slate-700">교회 내 주차장 50대 주차 가능</p>
                  <p className="text-sm text-slate-500 mt-1">주차 안내 도우미 배치</p>
                </div>

                <NaverMapButtonSmall />
              </CardContent>
            </Card>

            {/* 공동체 교통편 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-t-blue-500">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bus className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">공동체 교통편</CardTitle>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  함께 오는 기쁨
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🚌 주일예배</h3>
                  <p className="text-blue-700">경주역 오전 10:30 출발</p>
                  <p className="text-blue-700">용강 홈플러스 오전 10:00 출발</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🚌 수요/금요기도회</h3>
                  <p className="text-blue-700">경주역 오후 1:30 출발</p>
                  <p className="text-blue-700">용강 홈플러스 오후 1:00 출발</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-800 mb-2">❤️ 새가족 돌봄</h3>
                  <p className="text-green-700 text-sm">처음 오시는 분들을 위한 특별 배려</p>
                </div>

                <PickupServiceButton />
              </CardContent>
            </Card>

            {/* 대중교통 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">대중교통</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">🚌 시내버스</h3>
                  <p className="text-purple-700">경주역 → 내남면 방향 버스 이용</p>
                  <p className="text-sm text-purple-600">화천리 정류장 하차 후 도보 15분</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">🚕 택시</h3>
                  <p className="text-orange-700">경주역에서 약 15분 소요</p>
                  <p className="text-sm text-orange-600">요금: 약 15,000원</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">💡 추천</h3>
                  <p className="text-slate-700 text-sm">
                    대중교통 이용 시 픽업 서비스나 교우 분들의 도움을 받으시는 것을 추천드립니다.
                  </p>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="tel:010-4162-2701">
                    <Phone className="mr-2 h-4 w-4" />
                    대중교통 문의
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 지도 섹션 */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">교회 위치</h2>
            <p className="text-lg text-slate-700">정확한 위치를 확인하고 길찾기를 이용해보세요</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/direction/navermap.png"
                  alt="주님의교회 네이버 지도 위치"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <NaverMapButton className="flex-1" />
                <KakaoMapButton className="flex-1" />
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    교회 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">주소</h3>
                    <p className="text-slate-700">경상북도 경주시 내남면 내외로 2175</p>
                    <p className="text-sm text-slate-500">우편번호: 38192</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-1">연락처</h3>
                    <p className="text-slate-700">010-4162-2701</p>
                    <p className="text-slate-700">bjh9119@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    예배 시간
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>새벽기도회</span>
                    <span className="text-slate-600">매일 오전 5시</span>
                  </div>
                  <div className="flex justify-between">
                    <span>주일예배</span>
                    <span className="text-slate-600">일요일 오전 11시</span>
                  </div>
                  <div className="flex justify-between">
                    <span>주일찬양예배</span>
                    <span className="text-slate-600">일요일 오후 2시</span>
                  </div>
                  <div className="flex justify-between">
                    <span>수요기도회</span>
                    <span className="text-slate-600">수요일 오후 2시</span>
                  </div>
                  <div className="flex justify-between">
                    <span>금요기도회</span>
                    <span className="text-slate-600">금요일 오후 2시</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 및 도움 */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">길을 찾는데 도움이 필요하신가요?</h2>
            <div className="bg-white/10 rounded-lg p-4 max-w-3xl mx-auto mb-8">
              <p className="text-lg text-green-100 italic mb-2">
                "너희가 짐을 서로 지라 그리하여 그리스도의 법을 성취하라"
              </p>
              <p className="text-green-200 text-sm">- 갈라디아서 6:2 -</p>
            </div>
            <p className="text-xl text-green-100">
              처음 오시는 모든 분들을 형제자매로 따뜻하게 맞아드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium flex-1">
                <MessageSquare className="mr-2 h-5 w-5" />
                카카오톡 문의
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 flex-1" asChild>
                <Link href="tel:010-4162-2701">
                  <Phone className="mr-2 h-5 w-5" />
                  전화 문의
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}