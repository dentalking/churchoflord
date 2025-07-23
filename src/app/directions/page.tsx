import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Car, Bus, Clock, MapPin, Phone, MessageSquare, Navigation, Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "경주역에서 주님의교회까지 오시는 길을 안내합니다. 차로 10분 거리, 아름다운 산길을 따라 오시면 됩니다. 차량 운행 서비스도 제공합니다.",
  keywords: "교회 위치, 경주역에서 오는 길, 차량 운행, 주차장, 경주시 내남면",
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
              경주역에서 10분 거리
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">오시는 길</h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              경주역 신도시에서 아름다운 산길을 따라 주님의교회까지,<br />
              다양한 교통편으로 편리하게 오실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 신도시 주민 특별 안내 */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="h-8 w-8" />
                  <h2 className="text-3xl font-bold">신도시 주민 특별 서비스</h2>
                </div>
                <p className="text-xl mb-8 text-green-100">
                  경주역 신도시에 새롭게 정착하신 분들을 위한 특별한 교통편 서비스를 제공합니다.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Bus className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">무료 픽업 서비스</h3>
                      <p className="text-green-100">처음 3개월간 경주역에서 교회까지 무료 픽업</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">개인 맞춤 안내</h3>
                      <p className="text-green-100">첫 방문 시 개인적으로 길 안내 및 동행 서비스</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    픽업 서비스 신청
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
                  alt="경주역에서 교회까지의 아름다운 길"
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

                <Button className="w-full" onClick={() => window.open('https://map.naver.com/v5/search/경주시%20내남면%20내외로%202175', '_blank')}>
                  <Navigation className="mr-2 h-4 w-4" />
                  네이버 지도로 길찾기
                </Button>
              </CardContent>
            </Card>

            {/* 픽업 서비스 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-t-blue-500">
              <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bus className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">픽업 서비스</CardTitle>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  신도시 주민 특혜
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

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-2">🎁 신도시 주민 특별 혜택</h3>
                  <p className="text-yellow-700 text-sm">첫 3개월간 무료 이용 가능</p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  픽업 서비스 예약
                </Button>
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
                <Button 
                  size="lg" 
                  className="flex-1"
                  onClick={() => window.open('https://map.naver.com/v5/search/경주시%20내남면%20내외로%202175', '_blank')}
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  네이버 지도
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open('https://map.kakao.com/link/search/경주시%20내남면%20내외로%202175', '_blank')}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  카카오맵
                </Button>
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
            <p className="text-xl mb-8 text-green-100">
              언제든 연락주시면 친절하게 안내해드리겠습니다.<br />
              특히 신도시에서 처음 오시는 분들은 개인적으로 도움을 드립니다.
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