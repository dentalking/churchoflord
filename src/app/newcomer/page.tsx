"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { 
  Heart, 
  MapPin, 
  Clock, 
  Users, 
  BookOpen, 
  Calendar,
  ChevronRight,
  CheckCircle,
  MessageSquare,
  Phone
} from "lucide-react";

export default function NewcomerPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  const stepProgress = (currentStep / totalSteps) * 100;

  return (
    <div className="container py-12">
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Heart className="mr-2 h-4 w-4" />
          새가족 전용 안내
        </div>
        <h1 className="text-4xl font-bold mb-4">
          주님의교회에 오신 것을 <br/>
          <span className="text-yellow-600">진심으로 환영합니다</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          "나그네 되었을 때에 영접하였고" (마 25:35)<br />
          소규모 신앙공동체에서만 가능한 개인별 맞춤 돌봄으로 여러분을 기다립니다.<br />
          하나님께서 인도하신 귀한 발걸음, 공동체의 사랑으로 함께 신앙의 여정을 시작해보세요
        </p>
      </div>

      {/* 진행 상황 */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex justify-between text-sm text-slate-600 mb-2">
          <span>새가족 안내 과정</span>
          <span>{currentStep} / {totalSteps} 단계</span>
        </div>
        <Progress value={stepProgress} className="mb-6" />
        
        <div className="flex justify-between">
          {[
            { step: 1, label: "첫 방문", icon: Heart },
            { step: 2, label: "예배 참여", icon: Calendar },
            { step: 3, label: "교제 시작", icon: Users },
            { step: 4, label: "양육 과정", icon: BookOpen }
          ].map(({ step, label, icon: Icon }) => (
            <div 
              key={step}
              className={`flex flex-col items-center cursor-pointer ${
                step <= currentStep ? 'text-yellow-600' : 'text-slate-400'
              }`}
              onClick={() => setCurrentStep(step)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                step <= currentStep ? 'bg-yellow-100' : 'bg-slate-100'
              }`}>
                {step < currentStep ? 
                  <CheckCircle className="h-4 w-4" /> : 
                  <Icon className="h-4 w-4" />
                }
              </div>
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 단계별 콘텐츠 */}
      <div className="max-w-4xl mx-auto">
        {currentStep === 1 && (
          <div className="space-y-8">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center text-yellow-800">
                  <Heart className="mr-2 h-5 w-5" />
                  첫 방문을 위한 안내
                </CardTitle>
                <CardDescription className="text-yellow-700">
                  "손님을 대접하기를 잊지 말라 이로써 부지중에 천사들을 대접한 이들이 있었느니라" (히 13:2)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-800">준비하실 것</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        편안한 마음으로 오세요
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        특별한 준비물은 없습니다
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        성경을 가져오셔도 좋습니다
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-800">우리가 준비한 것</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <Heart className="mr-2 h-4 w-4 text-yellow-500" />
                        새가족 환영 선물
                      </li>
                      <li className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-green-500" />
                        경주역 픽업 서비스
                      </li>
                      <li className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-blue-500" />
                        새가족 담당 집사님 배정
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-yellow-200">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    예배 시간 안내
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">주일예배</p>
                      <p className="text-sm text-slate-600">매주 일요일 오전 11:00</p>
                    </div>
                    <div>
                      <p className="font-medium">위치</p>
                      <p className="text-sm text-slate-600">경주시 내남면 (경주역 10분)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  예배 참여 안내
                </CardTitle>
                <CardDescription>
                  "하나님은 영이시니 예배하는 자가 영과 진리로 예배할지니라" (요 4:24)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">말씀 중심 예배</h3>
                    <p className="text-sm text-slate-600">
                      성경 말씀을 중심으로 한 진실한 예배를 드립니다
                    </p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">따뜻한 교제</h3>
                    <p className="text-sm text-slate-600">
                      예배 후 함께하는 식사와 진실한 교제 시간
                    </p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">개인 관심</h3>
                    <p className="text-sm text-slate-600">
                      새가족 담당자가 세심하게 돌보아 드립니다
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-green-600" />
                  신앙 공동체와의 교제
                </CardTitle>
                <CardDescription>
                  "서로 사랑하라 이것이 너희가 내게 들은 바 처음부터 있는 계명이니라" (요일 3:11)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">함께 만들어갈 소그룹</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 새로운 성도님들과 함께 소그룹 구성</li>
                      <li>• 주중 가정 모임 계획 중</li>
                      <li>• 세대별 맞춤 모임 준비</li>
                      <li>• 함께 기도하고 말씀 나누는 시간</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">교회 활동</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 콩과나무로 나눔 프로젝트 참여</li>
                      <li>• 계절별 교회 행사</li>
                      <li>• 지역 봉사 활동</li>
                      <li>• 선교 활동 참여</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-purple-600" />
                  체계적 신앙 양육 과정
                </CardTitle>
                <CardDescription>
                  "또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라" (딤후 2:2)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "1단계: 새가족반",
                      description: "구원의 확신과 기초 진리",
                      duration: "4주 과정",
                      color: "bg-green-100 text-green-800"
                    },
                    {
                      title: "2단계: 기초 성경공부",
                      description: "성경 전반의 체계적 이해",
                      duration: "12주 과정",
                      color: "bg-blue-100 text-blue-800"
                    },
                    {
                      title: "3단계: 제자훈련",
                      description: "예수님의 제자로 성장",
                      duration: "24주 과정",
                      color: "bg-purple-100 text-purple-800"
                    },
                    {
                      title: "4단계: 사역훈련",
                      description: "제자를 세우는 사역자로 헌신",
                      duration: "평생 과정",
                      color: "bg-yellow-100 text-yellow-800"
                    }
                  ].map((step, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{step.title}</h3>
                        <Badge className={step.color}>{step.duration}</Badge>
                      </div>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">건전한 신학과 체계적 양육</h3>
                  <p className="text-sm text-slate-700 mb-3">
                    개혁주의의 성경적 정통성과 성령의 역사가 조화된 건전한 신학을 바탕으로 
                    "제자가 제자를 만드는" 재생산의 원리에 따라 체계적이고 지속적인 양육을 진행합니다.
                  </p>
                  <p className="text-sm text-slate-600">
                    각 단계마다 개인의 속도에 맞춰 진행되며, 말씀 암송, 큐티, 
                    소그룹 나눔을 통해 실제적인 신앙 성장을 돕습니다.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* 액션 버튼들 */}
      <div className="max-w-2xl mx-auto mt-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            카카오톡으로 상담하기
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              전화 상담 예약
            </Link>
          </Button>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-slate-600 mb-2">
            더 자세한 정보가 필요하시거나 궁금한 점이 있으시면 언제든 연락해주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/worship">예배 시간 확인하기</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/directions">오시는 길 보기</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/about">교회 소개 보기</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 네비게이션 */}
      <div className="flex justify-between mt-8 max-w-2xl mx-auto">
        <Button 
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          이전 단계
        </Button>
        <Button 
          onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
          disabled={currentStep === totalSteps}
        >
          다음 단계
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}