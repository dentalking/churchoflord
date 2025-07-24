"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { Users, MapPin, Calendar, Clock, Heart, BookOpen, Coffee, Music, Mountain } from "lucide-react";

export default function SmallGroupsPage() {
  const districtGroups = [
    {
      id: 1,
      name: "동부 1구역",
      leader: "김성훈 집사",
      area: "동부 지역 A지구",
      members: 12,
      meetingTime: "매주 금요일 저녁 7:30",
      description: "이 지역에 새로 이사오신 젊은 가정들이 함께 모이는 구역입니다."
    },
    {
      id: 2,
      name: "동부 2구역",
      leader: "박은영 권사",
      area: "동부 지역 B지구",
      members: 15,
      meetingTime: "매주 토요일 오전 10:00",
      description: "아이들과 함께 하는 가족 중심 구역 모임입니다."
    },
    {
      id: 3,
      name: "내남면 구역",
      leader: "이정호 집사",
      area: "내남면 일대",
      members: 8,
      meetingTime: "매주 목요일 저녁 7:00",
      description: "오랫동안 지역에 거주하신 성도님들의 따뜻한 교제 모임입니다."
    },
    {
      id: 4,
      name: "산골 구역",
      leader: "최미선 권사",
      area: "교회 인근 산골 지역",
      members: 10,
      meetingTime: "매주 수요일 오후 2:00",
      description: "자연과 함께하는 평온한 구역 모임입니다."
    }
  ];

  const lifeGroups = [
    {
      id: 1,
      name: "청년 목장",
      leader: "김다니엘 청년",
      age: "20-35세",
      members: 18,
      meetingTime: "매주 토요일 오후 5:00",
      icon: Coffee,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      id: 2,
      name: "신혼부부 목장",
      leader: "박요셉·사라 부부",
      age: "결혼 5년 이내",
      members: 14,
      meetingTime: "격주 토요일 저녁 6:00",
      icon: Heart,
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      id: 3,
      name: "자녀양육 목장",
      leader: "이한나 집사",
      age: "영유아~초등 자녀 부모",
      members: 20,
      meetingTime: "매주 주일 오후 2:00",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: 4,
      name: "장년 목장",
      leader: "정바울 장로",
      age: "50세 이상",
      members: 16,
      meetingTime: "매주 금요일 오전 10:00",
      icon: Mountain,
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  const interestGroups = [
    {
      id: 1,
      name: "말씀 묵상 모임",
      leader: "김마르다 권사",
      description: "매일 말씀 묵상을 함께 나누는 모임",
      meetingTime: "매주 화요일 오전 6:00",
      members: 12,
      icon: BookOpen,
      tags: ["말씀", "묵상", "QT"]
    },
    {
      id: 2,
      name: "찬양 소그룹",
      leader: "박다윗 집사",
      description: "찬양으로 하나님께 영광 돌리는 모임",
      meetingTime: "매주 목요일 저녁 7:30",
      members: 15,
      icon: Music,
      tags: ["찬양", "악기", "성가대"]
    },
    {
      id: 3,
      name: "산책 기도회",
      leader: "이마리아 집사",
      description: "아름다운 산길을 걸으며 함께 기도하는 모임",
      meetingTime: "매주 토요일 오전 7:00",
      members: 10,
      icon: Mountain,
      tags: ["기도", "산책", "자연"]
    },
    {
      id: 4,
      name: "독서 나눔 모임",
      leader: "최바나바 청년",
      description: "신앙 서적을 읽고 나누는 모임",
      meetingTime: "격주 수요일 저녁 7:00",
      members: 8,
      icon: BookOpen,
      tags: ["독서", "나눔", "성장"]
    }
  ];

  return (
    <div className="container py-12">
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <Badge className="mb-4">👥 소그룹 사역</Badge>
        <h1 className="text-4xl font-bold mb-6">
          함께 시작할 <span className="text-green-600">소그룹 공동체</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          "두세 사람이 내 이름으로 모인 곳에는 나도 그들 중에 있느니라" (마 18:20)<br />
          소규모 교회의 장점을 살려 새로 오시는 분들과 함께 소그룹을 만들어가려 합니다. 
          소수이기에 더욱 깊고 친밀한 교제가 가능합니다.
        </p>
      </div>

      {/* 소그룹 비전 */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image 
                src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
                alt="소그룹 모임" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                왜 소그룹인가?
              </h2>
              <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                교회의 본질은 <strong>코이노니아(친교)</strong>입니다. 
                소그룹은 서로의 삶을 나누고, 함께 기도하며, 
                말씀 안에서 성장하는 <span className="text-green-600 font-semibold">생명력 있는 공동체</span>입니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    친밀한 관계
                  </h3>
                  <p className="text-sm text-slate-600">
                    5-7명의 소규모 모임에서 깊은 나눔과 교제
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    상호 돌봄
                  </h3>
                  <p className="text-sm text-slate-600">
                    기쁨과 어려움을 함께 나누는 신앙공동체
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-500" />
                    말씀 나눔
                  </h3>
                  <p className="text-sm text-slate-600">
                    삶에 적용하는 실제적인 말씀 공부
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-purple-500" />
                    함께 성장
                  </h3>
                  <p className="text-sm text-slate-600">
                    서로를 세워주는 영적 성장 공동체
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 소그룹 종류 */}
      <section>
        <Tabs defaultValue="district" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="district">구역 모임</TabsTrigger>
            <TabsTrigger value="life">연령별 목장</TabsTrigger>
            <TabsTrigger value="interest">관심사별 소그룹</TabsTrigger>
          </TabsList>
          
          <TabsContent value="district" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">지역별 구역 모임</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                거주 지역을 중심으로 모이는 구역 모임을 준비하고 있습니다. 
                새로 오시는 분들과 함께 시작하려 합니다.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">함께 시작해요!</h3>
              <p className="text-slate-700 mb-4 max-w-2xl mx-auto">
                현재 새로운 구역 모임을 준비 중입니다.<br />
                경주역 신도시 지역을 중심으로 2-3가정이 모이는 따뜻한 모임을 계획하고 있습니다.<br />
                함께 시작하실 분들을 기다립니다.
              </p>
              <Button asChild>
                <Link href="/contact?type=smallgroup">구역 모임 문의하기</Link>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="life" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">연령별 목장 모임</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                비슷한 연령대와 인생 단계에 있는 분들이 함께 모여 
                공감대를 형성하고 함께 성장하는 목장을 준비 중입니다.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">여러분의 참여를 기다립니다</h3>
              <p className="text-slate-700 mb-4 max-w-2xl mx-auto">
                청년, 신혼부부, 자녀양육 가정 등 각 연령과 상황에 맞는 목장을 준비하고 있습니다.<br />
                3-4가정이 모여 서로의 삶을 나누고 함께 성장하는 친밀한 모임을 시작하려 합니다.<br />
                첫 멤버가 되어주세요!
              </p>
              <Button asChild>
                <Link href="/contact?type=smallgroup">목장 모임 문의하기</Link>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="interest" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">관심사별 소그룹</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                공통의 관심사와 은사를 가진 분들이 모여 
                함께 배우고 성장하며 섬기는 소그룹을 계획하고 있습니다.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">관심사를 알려주세요!</h3>
              <p className="text-slate-700 mb-4 max-w-2xl mx-auto">
                말씀 묵상, 찬양, 기도, 독서 등 다양한 관심사별 모임을 준비하고 있습니다.<br />
                어떤 모임에 참여하고 싶으신지 알려주시면, 비슷한 관심을 가진 분들과 연결해드립니다.<br />
                소규모이기에 더욱 집중된 모임이 가능합니다.
              </p>
              <Button asChild>
                <Link href="/contact?type=smallgroup">관심사 소그룹 문의하기</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* 새가족을 위한 특별 안내 */}
      <section className="mt-16 mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">🏘️ 새가족 환영</Badge>
            <h2 className="text-2xl font-bold mb-4">
              새로운 시작, <span className="text-blue-600">새로운 친구들</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/70 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">가까운 이웃</h3>
              <p className="text-sm text-slate-600">
                같은 아파트, 같은 동네에 사는 믿음의 가족들과 함께
              </p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">육아 품앗이</h3>
              <p className="text-sm text-slate-600">
                비슷한 또래 자녀를 둔 가정들이 서로 돕는 공동체
              </p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">정착 도우미</h3>
              <p className="text-sm text-slate-600">
                지역 생활 정보부터 신앙 상담까지 따뜻한 도움
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 소그룹 참여 안내 */}
      <section className="mb-16">
        <div className="bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            소그룹 참여 <span className="text-green-600">3단계</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">상담 신청</h3>
              <p className="text-sm text-slate-600">
                교회 사무실이나 온라인으로 소그룹 참여 상담을 신청하세요
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">그룹 배정</h3>
              <p className="text-sm text-slate-600">
                거주지, 연령, 관심사를 고려하여 적합한 소그룹으로 안내해드립니다
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">함께 성장</h3>
              <p className="text-sm text-slate-600">
                소그룹 구성원들과 함께 믿음의 여정을 걸어가세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="text-center py-12 bg-green-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">
          혼자가 아닌 <span className="text-green-600">함께</span> 걸어가는 신앙생활
        </h2>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          소그룹은 단순한 모임이 아닌, 서로의 삶을 나누고 함께 성장하는 
          영적 가족입니다. 당신을 기다리고 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact?type=smallgroup">소그룹 참여 신청</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">문의하기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}