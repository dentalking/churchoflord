import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "예배 안내 - 주님의교회",
  description: "신령과 진정으로 드리는 주님의교회 예배 안내입니다. 말씀 중심의 예배로 하나님을 만나세요.",
  keywords: "말씀 중심 예배, 주일예배, 새벽기도회, 제자훈련, 경주 교회",
};

export default function WorshipPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">예배 안내</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          하나님과 만나는 시간, 함께 예배드려요<br/>
          처음이신 분도 편안하게 참여하실 수 있습니다
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">말씀 중심의 예배</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>주일예배</CardTitle>
                <CardDescription>매주 일요일 오전 11시</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">"하나님의 말씀으로 살 것이라"는 말씀을 중심으로 한 예배입니다.</p>
                <p className="text-sm text-slate-600">예배 후에는 말씀 나눔과 친교의 시간이 있습니다.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>주일찬양예배</CardTitle>
                <CardDescription>매주 일요일 오후 2시</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">시편과 찬송으로 하나님께 영광 돌리는 예배입니다.</p>
                <p className="text-sm text-slate-600">"시와 찬과 신령한 노래로 서로 가르치며" (엡 5:19)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>수요기도회</CardTitle>
                <CardDescription>매주 수요일 오후 2시</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">말씀과 기도로 하나님과 깊이 교제하는 시간입니다.</p>
                <div className="bg-slate-50 rounded p-3 text-sm text-slate-700">
                  <p className="italic">"아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라" (빌 4:6)</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>금요기도회</CardTitle>
                <CardDescription>매주 금요일 오후 2시</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">한 주간의 은혜를 감사하며 드리는 기도회입니다.</p>
                <p className="text-sm text-slate-600">"범사에 감사하라" (살전 5:18)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>새벽기도회</CardTitle>
                <CardDescription>매일 오전 5시</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3">매일 새벽 말씀을 묵상하며 하루를 시작합니다.</p>
                <p className="text-sm text-slate-600">"아침마다 새로운 진다" (애 3:23)</p>
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
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">말씀 중심의 예배</h2>
            <p className="mb-4 text-blue-800">
              "말씀을 전하는 자는 하나님의 말씀을 하는 것 같이 하고" (벧전 4:11)<br />
              주님의교회는 말씀을 중심으로 한 예배를 드리며, 
              설교를 통해 하나님의 뜻을 깨닫고 순종하는 삶을 추구합니다.
            </p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">예배 참석 문의</Link>
            </Button>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mb-6 border border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-900">말씀 나눔과 제자훈련</h2>
            <p className="mb-4 text-green-800">
              "나는 너희를 어률던지에서 데려다가 밑은 곳에 운전함이라" (시 23:2)<br />
              예배 후에는 말씀을 더 깊이 묵상하고 삶에 적용하는 시간을 갖습니다.
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-green-700">• <strong>말씀 나눔</strong>: 설교 말씀을 중심으로 한 대화와 나눔</p>
              <p className="text-sm text-green-700">• <strong>제자훈련</strong>: 체계적인 성경 공부와 신앙 성장</p>
              <p className="text-sm text-green-700">• <strong>기도 모임</strong>: 서로를 위해 기도하는 시간</p>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/discipleship">제자훈련 자세히 보기</Link>
            </Button>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">처음 방문하시는 분들께</h2>
            <p className="mb-4 text-slate-700">
              "바라건대 너희를 과학하는 자처럼 과학하지 말라는 것이니 사랑에는 거짓이 없늤" (롬 12:9)<br />
              주님의교회는 처음 방문하시는 모든 분들을 진실한 마음으로 환영합니다.
            </p>
            <Button variant="outline" asChild className="border-slate-600 text-slate-700 hover:bg-slate-100">
              <Link href="/contact?type=first-visit">예배 참석 문의</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}