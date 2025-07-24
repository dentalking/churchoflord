// src/app/page.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Video, Phone, ChevronRight, Play, BookOpen, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* 1. 심플한 히어로 섹션 */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
            alt="주님의교회" 
            fill 
            className="object-cover"
            priority 
          />
        </div>
        
        <div className="container relative z-30 text-white text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            말씀으로 세워지는<br/>
            <span className="text-yellow-300">주님의교회</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-slate-100 font-light">
            경주 도심에서 10분, 평온한 산속에서 드리는 예배<br/>
            순수한 복음과 따뜻한 공동체가 여러분을 기다립니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-slate-100 font-medium px-8"
              asChild
            >
              <Link href="/worship">
                예배 안내
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 font-medium px-8"
              asChild
            >
              <Link href="/directions">
                오시는 길
                <MapPin className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. 빠른 접근 카드 */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* 예배 시간 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/worship" className="block">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">예배 시간</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1 md:space-y-2 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">주일예배</p>
                    <p className="text-xs md:text-sm">오전 11:00</p>
                    <p className="text-xs text-blue-600 mt-2 md:mt-3 hidden md:block">자세히 보기 →</p>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* 오시는 길 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/directions" className="block">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">오시는 길</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1 md:space-y-2 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">경주역 10분</p>
                    <p className="text-xs md:text-sm">픽업 가능</p>
                    <p className="text-xs text-green-600 mt-2 md:mt-3 hidden md:block">지도 보기 →</p>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* 온라인 예배 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/sermons" className="block">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                    <Video className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">온라인 예배</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1 md:space-y-2 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">실시간</p>
                    <p className="text-xs md:text-sm">유튜브</p>
                    <p className="text-xs text-purple-600 mt-2 md:mt-3 hidden md:block">시청하기 →</p>
                  </div>
                </CardContent>
              </Link>
            </Card>

            {/* 새가족 안내 */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/contact?type=first-visit" className="block">
                <CardHeader className="pb-2 md:pb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                    <Heart className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">새가족</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1 md:space-y-2 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">처음 오신분</p>
                    <p className="text-xs md:text-sm">맞춤 안내</p>
                    <p className="text-xs text-amber-600 mt-2 md:mt-3 hidden md:block">문의하기 →</p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. 교회 소개 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">순수한 복음, 따뜻한 공동체</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              주님의교회는 성경 말씀을 중심으로 하는 개혁주의 신앙 공동체입니다.<br/>
              화려하지 않지만 진실하게, 크지 않지만 깊이 있게 신앙생활을 함께합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="font-bold mb-2">말씀 중심</h3>
                <p className="text-sm text-slate-600">
                  성경 말씀을 삶의 기준으로 삼고 순종하는 공동체
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="font-bold mb-2">사랑 실천</h3>
                <p className="text-sm text-slate-600">
                  그리스도의 사랑으로 서로를 섬기는 공동체
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="font-bold mb-2">제자 양육</h3>
                <p className="text-sm text-slate-600">
                  체계적인 양육으로 영적 성장을 돕는 공동체
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button variant="outline" asChild>
                <Link href="/about">
                  교회 소개 자세히 보기
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 최근 설교 */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">이번 주 설교</h2>
              <p className="text-lg text-slate-600">
                매주 새로운 말씀으로 은혜를 나눕니다
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video relative bg-slate-200">
                  <Image
                    src="/images/hero/KakaoTalk_20250416_201705309.jpg"
                    alt="설교 썸네일"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white/90 text-slate-900 hover:bg-white rounded-full px-6"
                      asChild
                    >
                      <Link href="/sermons">
                        <Play className="mr-2 h-5 w-5" />
                        설교 보기
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">
                    평안을 너희에게 주노라
                  </h3>
                  <p className="text-slate-600 mb-4">
                    방재홍 목사 | 2025.07.21 주일예배
                  </p>
                  <p className="text-slate-700 mb-6">
                    "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 
                    내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라" (요 14:27)
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/sermons">모든 설교 보기</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/meditation">말씀 묵상</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. 연락처 & 위치 */}
      <section className="py-12 md:py-16 bg-slate-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">함께하실 준비가 되셨나요?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-700/50 rounded-lg p-6">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-green-400" />
                <h3 className="font-bold mb-2">위치</h3>
                <p className="text-sm text-slate-300">
                  경상북도 경주시 내남면 내외로 2175<br/>
                  경주역에서 차로 10분
                </p>
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-6">
                <Phone className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                <h3 className="font-bold mb-2">연락처</h3>
                <p className="text-sm text-slate-300">
                  010-4162-2701<br/>
                  방재홍 담임목사
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium"
                asChild
              >
                <Link href="/contact?type=first-visit">
                  처음 방문 문의
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">
                  일반 문의
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}