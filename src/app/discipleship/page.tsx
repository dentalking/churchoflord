import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Users, BookOpen, Heart, Target, Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제자훈련 - 주님의교회",
  description: "말씀으로 온전한 그리스도의 제자를 세우는 주님의교회 제자훈련 과정입니다. 새가족반부터 사역훈련까지 체계적인 양육 프로그램을 제공합니다.",
  keywords: "제자훈련, 새가족반, 성경공부, 사역훈련, 양육 프로그램, 경주 교회",
};

export default function DiscipleshipPage() {
  return (
    <div className="container py-12">
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          말씀으로 세우는 제자훈련
        </h1>
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 italic mb-4">
            "가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 세례를 베풀고 
            내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라"
          </p>
          <p className="text-slate-600">- 마태복음 28:19-20 -</p>
        </div>
        <p className="text-slate-700 mt-6 max-w-3xl mx-auto">
          주님의 지상명령에 순종하여, 순수한 믿음과 성경 중심의 체계적인 양육을 통해<br />
          그리스도의 참된 제자를 세우는 것이 우리의 사명입니다.
        </p>
      </div>

      {/* 제자훈련 비전 */}
      <section className="mb-16">
        <div className="bg-slate-50 rounded-lg p-8 md:p-12 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                제자훈련의 성경적 기초
              </h2>
              <div className="bg-white rounded-lg p-6 border border-slate-200 mb-6">
                <p className="text-slate-700 italic mb-2">
                  "그가 어떤 사람은 사도로, 어떤 사람은 선지자로, 어떤 사람은 복음 전하는 자로, 
                  어떤 사람은 목사와 교사로 삼으셨으니 이는 성도를 온전하게 하여 봉사의 일을 하게 하며 
                  그리스도의 몸을 세우려 하심이라"
                </p>
                <p className="text-slate-600 text-sm">- 에베소서 4:11-12 -</p>
              </div>
              <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                교회의 본질은 <strong>그리스도의 제자를 만드는 것</strong>입니다. 
                주님의교회는 모든 성도가 말씀으로 훈련받아 예수님의 성숙한 제자가 되고, 
                또 다른 제자를 세우는 <strong>재생산하는 제자</strong>가 되도록 돕습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-slate-100 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">체계적인 말씀 훈련</h3>
                    <p className="text-slate-600">성경 66권을 기초로 한 단계별 성경공부</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-slate-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">소그룹 중심 양육</h3>
                    <p className="text-slate-600">사랑 안에서 함께 성장하는 믿음의 공동체</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-slate-100 p-2 rounded-full">
                    <Target className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">사역자로의 성장</h3>
                    <p className="text-slate-600">받은 은사로 교회와 지역을 겸손히 섬기는 일꾼</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image 
                src="/images/activities/20250419_001222.png" 
                alt="제자훈련 모습" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 제자훈련 과정 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          제자훈련 4단계 과정
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          "마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라" (잠 22:6)<br />
          체계적이고 단계적인 훈련을 통해 성숙한 그리스도인으로 자라갑니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1단계: 새가족반 */}
          <Card className="border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-slate-600">1</span>
              </div>
              <CardTitle>새가족반</CardTitle>
              <CardDescription>4주 과정</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                교회 생활의 첫걸음을 함께하는 과정입니다. 
                구원의 확신과 교회 공동체 이해를 돕습니다.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>구원의 확신</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>교회의 본질 이해</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>기도와 예배 생활</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>신앙생활 안내</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 2단계: 기초 성경공부 */}
          <Card className="border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-slate-600">2</span>
              </div>
              <CardTitle>기초 성경공부</CardTitle>
              <CardDescription>12주 과정</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                신앙의 기초를 다지는 체계적인 성경공부 과정입니다. 
                성경의 핵심 진리를 배웁니다.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>성경 개관</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>기독교 핵심 교리</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>그리스도인의 삶</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>경건 생활 훈련</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 3단계: 제자훈련 */}
          <Card className="border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-slate-600">3</span>
              </div>
              <CardTitle>제자훈련</CardTitle>
              <CardDescription>32주 과정</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                예수님의 제자로서 삶을 살아가는 방법을 배우고 
                훈련하는 심화 과정입니다.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>제자의 삶과 사명</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>말씀 묵상과 적용</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>전도와 양육 훈련</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>소그룹 인도법</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 4단계: 사역훈련 */}
          <Card className="border border-slate-200 hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-slate-600">4</span>
              </div>
              <CardTitle>사역훈련</CardTitle>
              <CardDescription>32주 과정</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                은사를 발견하고 개발하여 교회와 지역사회를 
                섬기는 사역자로 세워지는 과정입니다.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>은사 발견과 개발</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>리더십 훈련</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>사역 기획과 실습</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-500 mt-0.5" />
                  <span>재생산하는 제자</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 맞춤형 프로그램 안내 */}
      <section className="mb-16">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              모든 성도를 위한 맞춤형 프로그램
            </h2>
            <p className="text-slate-600">
              "각 사람의 형편을 따라 능력대로 하되 힘에 지나도록 자원하여" (고후 8:3)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-slate-600" />
                <h3 className="font-semibold">유연한 시간</h3>
              </div>
              <p className="text-sm text-slate-600">
                주중 저녁반, 주말반 운영으로 직장인도 참여 가능
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-slate-600" />
                <h3 className="font-semibold">온라인 병행</h3>
              </div>
              <p className="text-sm text-slate-600">
                현장 참석이 어려운 날은 온라인으로 참여
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-5 w-5 text-slate-600" />
                <h3 className="font-semibold">가족 프로그램</h3>
              </div>
              <p className="text-sm text-slate-600">
                자녀 돌봄 제공으로 부부가 함께 참여 가능
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 현재 모집 중인 과정 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          2025년 상반기 모집 중인 과정
        </h2>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <Card className="border-l-4 border-l-slate-400">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">새가족반 25기</CardTitle>
                  <CardDescription>매주 일요일 오후 1:30 / 4주 과정</CardDescription>
                </div>
                <Badge className="bg-slate-100 text-slate-700">모집중</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  2025년 2월 2일 시작
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  정원 12명
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-slate-400">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">기초 성경공부 - 평일반</CardTitle>
                  <CardDescription>매주 수요일 저녁 7:30 / 12주 과정</CardDescription>
                </div>
                <Badge className="bg-slate-100 text-slate-700">모집중</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  2025년 3월 5일 시작
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  정원 15명
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-slate-400">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">제자훈련 15기</CardTitle>
                  <CardDescription>매주 토요일 오전 7:00 / 32주 과정</CardDescription>
                </div>
                <Badge variant="secondary">대기 접수</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  2025년 3월 8일 시작
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  정원 10명 (대기 3명)
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 목회자의 말씀 */}
      <section className="mb-12">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
          <h2 className="text-xl font-bold mb-6 text-center">담임목사의 권면</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-700 leading-relaxed mb-4">
              "예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 
              아버지께로 올 자가 없느니라" (요 14:6)
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              제자훈련은 단순히 지식을 쌓는 과정이 아닙니다. 예수님과의 인격적인 만남을 통해 
              삶이 변화되고, 그 변화된 삶을 통해 다른 이들에게 그리스도의 사랑을 전하는 
              거룩한 여정입니다.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              우리 교회는 화려한 프로그램보다는 말씀 중심의 순수한 훈련을 추구합니다. 
              성령님의 인도하심을 따라 겸손하게 한 걸음씩 나아가며, 
              그리스도의 장성한 분량에까지 자라가기를 소망합니다.
            </p>
            <p className="text-slate-600 text-right mt-6">
              - 주님의교회 담임목사 -
            </p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
        <h2 className="text-2xl font-bold mb-4">
          제자훈련과 함께 영적 성장을 시작하세요
        </h2>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          "너희는 가서 모든 민족을 제자로 삼으라"는 주님의 명령에 순종하여, 
          함께 배우고 성장하는 제자 공동체가 되기를 소망합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact?type=discipleship">제자훈련 신청하기</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">문의하기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}