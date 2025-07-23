import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "예배 안내",
  description: "주님의교회 예배 시간 안내입니다. 주일예배, 새벽기도회, 수요/금요기도회 일정을 확인하세요. 이 지역 주민 여러분을 환영합니다.",
  keywords: "예배 시간, 주일예배, 새벽기도회, 수요기도회, 금요기도회, 경주 교회",
};

export default function WorshipPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">예배 안내</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">예배 시간</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>주일예배</CardTitle>
                <CardDescription>매주 일요일 오전 11시</CardDescription>
              </CardHeader>
              <CardContent>
                <p>온 가족이 함께 드리는 주일 예배입니다. 예배 후에는 친교 시간이 있습니다.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>주일찬양예배</CardTitle>
                <CardDescription>매주 일요일 오후 2시</CardDescription>
              </CardHeader>
              <CardContent>
                <p>찬양과 기도로 함께 드리는 주일 오후 예배입니다.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>수요기도회</CardTitle>
                <CardDescription>매주 수요일 오후 2시</CardDescription>
              </CardHeader>
              <CardContent>
                <p>말씀과 중보기도로 함께하는 수요 기도회입니다.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>금요기도회</CardTitle>
                <CardDescription>매주 금요일 오후 2시</CardDescription>
              </CardHeader>
              <CardContent>
                <p>찬양과 말씀, 기도로 한 주를 마무리하는 금요 기도회입니다.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>새벽기도회</CardTitle>
                <CardDescription>매일 오전 5시</CardDescription>
              </CardHeader>
              <CardContent>
                <p>매일 아침 말씀과 기도로 하루를 시작하는 새벽 기도회입니다.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="aspect-video relative bg-slate-200">
            {/* 예배 이미지 */}
            <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-white">
              예배 이미지
            </div>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">처음 방문하시는 분들을 위한 안내</h2>
            <p className="mb-4">
              주님의교회에 처음 방문하시는 분들을 진심으로 환영합니다. 
              예배 후에는 새신자 환영실에서 담임목사님과의 만남 및 교회 안내가 있습니다.
            </p>
            <p className="mb-4">
              도심에서 약 10분 거리에 위치해 있으며, 
              아름다운 산길을 따라 오시면 됩니다.
            </p>
            <Button asChild>
              <Link href="/contact">방문 예약하기</Link>
            </Button>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">예배 후 소그룹 모임</h2>
            <p className="mb-4">
              주일예배 후에는 다양한 소그룹 모임이 있습니다. 
              친밀한 교제와 말씀 나눔을 통해 더욱 깊은 신앙생활을 경험하세요.
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-sm">• <strong>구역 모임</strong>: 지역별로 모이는 이웃 공동체</p>
              <p className="text-sm">• <strong>연령별 목장</strong>: 비슷한 세대가 함께하는 모임</p>
              <p className="text-sm">• <strong>새가족 모임</strong>: 처음 오신 분들을 위한 환영 모임</p>
            </div>
            <Button asChild>
              <Link href="/small-groups">소그룹 자세히 보기</Link>
            </Button>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">새가족 초청 이벤트</h2>
            <p className="mb-4">
              이 지역에 새롭게 오신 분들을 위한 특별 초청 예배를 준비하고 있습니다. 
              아래 버튼을 통해 참여 신청을 해주세요.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact?event=새가족초청">초청 이벤트 참여하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}