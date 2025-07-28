"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Check, Lock, Play, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";

export function OnlineFaithJourney() {
  const journeySteps = [
    {
      id: 1,
      title: "구원의 확신",
      description: "나는 정말 구원받았을까?",
      duration: "3개 영상",
      completed: true,
      icon: Check,
    },
    {
      id: 2,
      title: "기도하는 법",
      description: "하나님과 대화하는 방법",
      duration: "5개 영상",
      completed: true,
      icon: Check,
    },
    {
      id: 3,
      title: "성경 읽기",
      description: "말씀을 이해하는 방법",
      duration: "7개 영상",
      inProgress: true,
      icon: Play,
    },
    {
      id: 4,
      title: "교회 생활",
      description: "함께 신앙생활하기",
      duration: "4개 영상",
      locked: true,
      icon: Lock,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">나만의 신앙 성장 여정</h2>
        <p className="text-lg text-slate-600">
          당신의 속도에 맞춰 차근차근 배워가세요
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>내 신앙 성장 진도</span>
            <span className="text-sm font-normal text-slate-500">25% 완료</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={25} className="mb-6" />
          
          <div className="space-y-4">
            {journeySteps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  step.completed
                    ? "bg-green-50 border-green-200"
                    : step.inProgress
                    ? "bg-blue-50 border-blue-200"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed
                      ? "bg-green-100"
                      : step.inProgress
                      ? "bg-blue-100"
                      : "bg-slate-100"
                  }`}>
                    <step.icon className={`h-5 w-5 ${
                      step.completed
                        ? "text-green-600"
                        : step.inProgress
                        ? "text-blue-600"
                        : "text-slate-400"
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">{step.duration}</span>
                  {!step.locked && (
                    <Button size="sm" variant={step.completed ? "outline" : "default"}>
                      {step.completed ? "다시보기" : "시작하기"}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <CardTitle className="text-lg">오늘의 말씀</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              매일 아침 목사님이 보내드리는 짧은 말씀 묵상
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
              <MessageSquare className="h-5 w-5 text-amber-600" />
            </div>
            <CardTitle className="text-lg">1:1 신앙 상담</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              목사님과 온라인으로 개인 상담 예약
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="pb-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
              <BookOpen className="h-5 w-5 text-green-600" />
            </div>
            <CardTitle className="text-lg">성경 읽기표</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              1년 성경 통독 진도 체크와 기록
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}