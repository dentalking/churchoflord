import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
  description: "경주역에서 주님의교회까지 오시는 길을 안내합니다. 차로 10분 거리, 아름다운 산길을 따라 오시면 됩니다. 차량 운행 서비스도 제공합니다.",
  keywords: "교회 위치, 경주역에서 오는 길, 차량 운행, 주차장, 경주시 내남면",
};

export default function DirectionsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">오시는 길</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* 지도 영역 (이미지 파일 사용) */}
          <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
            <Image
              src="/images/direction/navermap.png"
              alt="교회 위치 네이버 지도"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>교회 주소</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">경상북도 경주시 내남면 내외로 2175</p>
                <p className="text-sm text-gray-500">우편번호: 38192</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>연락처</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">전화: 010-4162-2701</p>
                <p className="mb-2">이메일: bjh9119@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>경주역에서 오시는 길</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/direction/pathway.png"
                  alt="경주역에서 교회까지의 경로"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mb-4">
                경주역에서 차로 약 10분 거리에 위치해 있습니다. 
                아름다운 산길을 따라 오시면 교회에 도착하실 수 있습니다.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>경주역에서 화천리 방향 도로 이용</li>
                <li>화천보건진료소 방향 직진</li>
                <li>범바위골에서 우회전</li>
                <li>학동 입구에서 좌회전 3분 이동 후 교회 도착</li>
              </ol>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>차량운행 이용 안내</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                주일예배: 용강 홈플러스 오전 10시, 경주역 오전 10시30분
              </p>
              <p>
                수요/금요기도회: 용강 홈플러스 오후 1시, 경주역 오후 1시 30분
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>자차 이용 안내</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                교회 내 주차장이 마련되어 있습니다. (약 20대 주차 가능)
              </p>
              <p>
                내비게이션에 &quot;경주시 내남면 주님의교회&quot; 또는 주소 &quot;경주시 내남면 내외로 2175&quot;를 입력해주세요.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}