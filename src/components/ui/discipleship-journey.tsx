"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { 
  Heart, 
  BookOpen, 
  Users, 
  Crown,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Lightbulb,
  ChevronRight,
  LucideIcon
} from "lucide-react";

interface DiscipleshipStage {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  scripture: string;
  reference: string;
  goals: string[];
  activities: string[];
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
}

const discipleshipStages: DiscipleshipStage[] = [
  {
    id: 1,
    title: "새가족반",
    subtitle: "구원의 확신과 기초 진리",
    description: "예수 그리스도를 영접한 새가족이 구원의 확신을 갖고 기본적인 신앙의 토대를 세우는 단계입니다.",
    duration: "4주 과정",
    scripture: "그러므로 이제 그리스도 예수 안에 있는 자에게는 결코 정죄함이 없나니",
    reference: "로마서 8:1",
    goals: [
      "구원의 확신 갖기",
      "기초 진리 이해",
      "교회 생활 적응",
      "기도와 말씀 읽기 시작"
    ],
    activities: [
      "구원의 확신 교육",
      "기초 교리 학습",
      "교회 생활 안내",
      "개인 기도 훈련"
    ],
    icon: Heart,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: 2,
    title: "기초 성경공부",
    subtitle: "성경 전반의 체계적 이해",
    description: "구약과 신약 성경의 전체적인 흐름을 이해하고 성경적 세계관을 형성하는 단계입니다.",
    duration: "12주 과정",
    scripture: "모든 성경은 하나님의 감동으로 된 것으로 교훈과 책망과 바르게 함과 의로 교육하기에 유익하니",
    reference: "디모데후서 3:16",
    goals: [
      "성경 전체 흐름 파악",
      "성경적 세계관 형성",
      "말씀 묵상 습관 형성",
      "신앙 지식 체계화"
    ],
    activities: [
      "구약/신약 개관 학습",
      "성경적 세계관 교육",
      "큐티(QT) 훈련",
      "성경 통독 계획"
    ],
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 3,
    title: "제자훈련",
    subtitle: "예수님의 제자로 성장",
    description: "예수님의 성품을 닮아가며 삶의 모든 영역에서 주님의 제자로 살아가는 단계입니다.",
    duration: "24주 과정",
    scripture: "또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라",
    reference: "디모데후서 2:2",
    goals: [
      "예수님의 성품 닮기",
      "제자도의 실천",
      "영적 은사 발견",
      "사역 기초 다지기"
    ],
    activities: [
      "제자도 집중 훈련",
      "성품 훈련 프로그램",
      "은사 발견 세미나",
      "사역 실습 기회"
    ],
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: 4,
    title: "사역훈련",
    subtitle: "제자를 세우는 사역자로 헌신",
    description: "다른 사람을 제자로 세우는 재생산의 사역자가 되어 하나님 나라 확장에 헌신하는 단계입니다.",
    duration: "평생 과정",
    scripture: "저희가 또 다른 사람들을 가르칠 수 있는 자가 되게 하라",
    reference: "디모데후서 2:2",
    goals: [
      "제자 재생산 능력",
      "사역 리더십 개발",
      "교회 사역 헌신",
      "선교적 삶 실천"
    ],
    activities: [
      "제자양육 실습",
      "리더십 개발 과정",
      "사역팀 참여",
      "선교 사역 참여"
    ],
    icon: Crown,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  }
];

export function DiscipleshipJourney() {
  const [selectedStage, setSelectedStage] = useState<number>(1);
  const currentStage = discipleshipStages.find(stage => stage.id === selectedStage);

  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">제자양육의 여정</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          "또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라 저희가 또 다른 사람들을 가르칠 수 있는 자가 되게 하라" (딤후 2:2)<br />
          옥한흠 목사님의 제자훈련 철학에 따른 체계적 양육 과정
        </p>
      </div>

      {/* 단계별 네비게이션 */}
      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          {discipleshipStages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = stage.id === selectedStage;
            const isCompleted = stage.id < selectedStage;
            
            return (
              <div key={stage.id} className="flex flex-col items-center relative">
                {index < discipleshipStages.length - 1 && (
                  <div className="absolute top-6 left-12 w-24 h-0.5 bg-slate-200 z-0 hidden md:block">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        stage.id < selectedStage ? 'bg-green-500' : 'bg-slate-200'
                      }`}
                      style={{ width: stage.id < selectedStage ? '100%' : '0%' }}
                    />
                  </div>
                )}
                
                <button
                  onClick={() => setSelectedStage(stage.id)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 mb-3 ${
                    isActive 
                      ? `${stage.bgColor} ${stage.borderColor} ${stage.color}` 
                      : isCompleted
                      ? 'bg-green-100 border-green-300 text-green-600'
                      : 'bg-white border-slate-300 text-slate-400 hover:border-slate-400'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </button>
                
                <div className="text-center max-w-24">
                  <p className={`text-sm font-medium ${isActive ? stage.color : 'text-slate-600'}`}>
                    {stage.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {stage.duration}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 선택된 단계 상세 정보 */}
      {currentStage && (
        <Card className={`${currentStage.borderColor} border-2 transition-all duration-300`}>
          <CardHeader className={currentStage.bgColor}>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${currentStage.bgColor} border-2 ${currentStage.borderColor} flex items-center justify-center mr-4`}>
                  <currentStage.icon className={`h-6 w-6 ${currentStage.color}`} />
                </div>
                <div>
                  <CardTitle className="text-2xl">{currentStage.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">
                    {currentStage.subtitle}
                  </CardDescription>
                </div>
              </div>
              <Badge variant="secondary" className="text-sm">
                {currentStage.duration}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6 space-y-6">
            {/* 설명 */}
            <p className="text-slate-700 leading-relaxed">
              {currentStage.description}
            </p>

            {/* 성경 말씀 */}
            <div className={`${currentStage.bgColor} rounded-lg p-4 border ${currentStage.borderColor}`}>
              <p className="text-slate-700 italic mb-2">
                "{currentStage.scripture}"
              </p>
              <p className="text-slate-600 text-sm font-medium">
                - {currentStage.reference} -
              </p>
            </div>

            {/* 목표와 활동 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-blue-600" />
                  학습 목표
                </h3>
                <ul className="space-y-2">
                  {currentStage.goals.map((goal, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-purple-600" />
                  주요 활동
                </h3>
                <ul className="space-y-2">
                  {currentStage.activities.map((activity, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <ArrowRight className="mr-2 h-4 w-4 text-purple-500 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 철학 설명 */}
      <Card className="bg-slate-50 border-slate-200">
        <CardHeader>
          <CardTitle className="text-center">옥한흠 목사님의 제자훈련 철학</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">재생산의 원리</h3>
              <p className="text-sm text-slate-600">
                제자가 제자를 만드는 영적 재생산을 통해 교회와 하나님 나라가 확장됩니다
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">말씀 중심</h3>
              <p className="text-sm text-slate-600">
                모든 양육 과정이 성경 말씀을 기초로 하여 진행됩니다
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">평생 헌신</h3>
              <p className="text-sm text-slate-600">
                한 번의 과정이 아닌 평생에 걸친 제자도의 삶을 추구합니다
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 mt-6">
            <p className="text-slate-700 text-center">
              "제자훈련은 그리스도의 성품을 닮아가며, 그분의 사명을 감당할 수 있는 
              온전한 그리스도인을 양육하는 것입니다. 이는 교회의 본질적 사명이며, 
              모든 성도가 걸어가야 할 신앙의 여정입니다."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 액션 버튼 */}
      <div className="text-center">
        <div className="space-y-4">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/newcomer">
              제자양육 과정 시작하기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link href="/discipleship">제자훈련 상세 안내</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">상담 및 문의</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}