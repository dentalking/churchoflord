import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DirectionsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">오시는 길</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* 지도 영역 (Kakao Map 또는 Naver Map API 사용 예정) */}
          <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center text-gray-400 mb-6">
            지도가 표시될 영역 (Kakao Map/Naver Map API)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>교회 주소</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">경상북도 경주시 내남면 내외로 2175</p>
                <p className="text-sm text-gray-500">우편번호: 00000</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>연락처</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">전화: 000-000-0000</p>
                <p className="mb-2">이메일: church@example.com</p>
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
              <div className="aspect-video bg-slate-200 mb-4 flex items-center justify-center text-gray-400">
                경주역-교회 경로 이미지
              </div>
              <p className="mb-4">
                경주역에서 차로 약 10분 거리에 위치해 있습니다. 
                아름다운 산길을 따라 오시면 교회에 도착하실 수 있습니다.
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>경주역 정문에서 우측 방향 도로 이용</li>
                <li>내남 방면으로 5분 직진</li>
                <li>내남면 사거리에서 우회전</li>
                <li>산길을 따라 3분 이동 후 교회 도착</li>
              </ol>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>대중교통 이용 안내</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                버스: 경주역에서 00번 버스 탑승 후 내남면 정류장 하차, 도보 10분
              </p>
              <p>
                택시: 경주역에서 택시 이용 시 약 10분 소요
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