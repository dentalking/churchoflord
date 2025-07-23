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
  keywords: "제자훈련, 새가족반, 성경공부, 사역훈련, 경주역 신도시 교회, 양육 프로그램",
};

export default function DiscipleshipPage() {
  return (
    <div className="container py-12">
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <Badge className="mb-4">📖 제자훈련 과정</Badge>
        <h1 className="text-4xl font-bold mb-6">
          평신도를 깨우는 <span className="text-blue-600">제자훈련</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          "가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 세례를 베풀고 
          내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라" (마 28:19-20)
        </p>
      </div>

      {/* 제자훈련 비전 */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                왜 제자훈련인가?
              </h2>
              <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                교회의 본질은 <strong>그리스도의 제자를 만드는 것</strong>입니다. 
                주님의교회는 모든 성도가 말씀으로 훈련받아 예수님의 성숙한 제자가 되고, 
                또 다른 제자를 세우는 <span className="text-blue-600 font-semibold">재생산하는 제자</span>가 되도록 돕습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">체계적인 말씀 훈련</h3>
                    <p className="text-slate-600">단계별 성경공부로 신앙의 기초부터 심화까지</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">소그룹 중심 양육</h3>
                    <p className="text-slate-600">친밀한 교제 속에서 함께 성장하는 공동체</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">사역자로의 성장</h3>
                    <p className="text-slate-600">받은 은사로 교회와 지역을 섬기는 일꾼</p>
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
        <h2 className="text-3xl font-bold text-center mb-12">
          제자훈련 <span className="text-blue-600">4단계 과정</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1단계: 새가족반 */}
          <Card className="border-t-4 border-t-green-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
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
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>구원의 확신</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>교회의 본질 이해</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>기도와 예배 생활</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>신앙생활 안내</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 2단계: 기초 성경공부 */}
          <Card className="border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
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
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5" />
                  <span>성경 개관</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5" />
                  <span>기독교 핵심 교리</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5" />
                  <span>그리스도인의 삶</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5" />
                  <span>경건 생활 훈련</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 3단계: 제자훈련 */}
          <Card className="border-t-4 border-t-purple-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
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
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5" />
                  <span>제자의 삶과 사명</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5" />
                  <span>말씀 묵상과 적용</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5" />
                  <span>전도와 양육 훈련</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5" />
                  <span>소그룹 인도법</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 4단계: 사역훈련 */}
          <Card className="border-t-4 border-t-orange-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
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
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5" />
                  <span>은사 발견과 개발</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5" />
                  <span>리더십 훈련</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5" />
                  <span>사역 기획과 실습</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5" />
                  <span>재생산하는 제자</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 경주역 신도시 주민을 위한 특별 안내 */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">🌱 신도시 주민 특별 과정</Badge>
            <h2 className="text-2xl font-bold mb-4">
              바쁜 신도시 생활 속에서도 <span className="text-green-600">함께 성장해요</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/70 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold">유연한 시간</h3>
              </div>
              <p className="text-sm text-slate-600">
                주중 저녁반, 주말반 운영으로 직장인도 참여 가능
              </p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold">온라인 병행</h3>
              </div>
              <p className="text-sm text-slate-600">
                현장 참석이 어려운 날은 온라인으로 참여
              </p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-5 w-5 text-green-600" />
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
          2025년 상반기 <span className="text-blue-600">모집 중인 과정</span>
        </h2>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">새가족반 25기</CardTitle>
                  <CardDescription>매주 일요일 오후 1:30 / 4주 과정</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-700">모집중</Badge>
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
          
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">기초 성경공부 - 평일반</CardTitle>
                  <CardDescription>매주 수요일 저녁 7:30 / 12주 과정</CardDescription>
                </div>
                <Badge className="bg-blue-100 text-blue-700">모집중</Badge>
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
          
          <Card className="border-l-4 border-l-purple-500">
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

      {/* CTA 섹션 */}
      <section className="text-center py-12 bg-slate-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">
          제자훈련과 함께 <span className="text-blue-600">영적 성장</span>을 시작하세요
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