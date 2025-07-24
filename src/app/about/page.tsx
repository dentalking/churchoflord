import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회 소개",
  description: "주님의교회의 역사, 비전, 교역자 소개를 확인하세요. 경주역 신도시에서 10분 거리의 평온한 산골 교회입니다.",
  keywords: "주님의교회 소개, 방재홍 목사, 정성아 목사, 경주역 신도시 교회, 교회 역사",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">교회 소개</h1>
      
      <Tabs defaultValue="vision">
        <TabsList className="mb-8">
          <TabsTrigger value="vision">교회 역사 및 비전</TabsTrigger>
          <TabsTrigger value="pastors">담임목사 및 교역자</TabsTrigger>
          <TabsTrigger value="ministry">주요 사역</TabsTrigger>
        </TabsList>
        
        <TabsContent value="vision" className="space-y-6">
          <div className="aspect-video relative bg-slate-200 mb-6 overflow-hidden rounded-lg">
            {/* 교회 전경 이미지 */}
            <Image 
              src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
              alt="주님의교회 전경" 
              fill 
              className="object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">주님의교회 역사</h2>
          <p className="mb-4">
            주님의교회는 2011년에 경상북도 경주시 내남면에 설립되었습니다. 
            경주역에서 약 10분 거리의 아름다운 산골에 위치한 우리 교회는 지역 사회를 섬기고 
            건강한 신앙 공동체를 형성하기 위해 노력해왔습니다.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">교회 비전</h2>
          <p className="mb-4">
            주님의교회는 하나님의 말씀을 중심으로 믿음의 공동체를 세우고, 
            지역 사회와 함께 성장하는 건강한 교회를 지향합니다. 
            특히 바쁜 도시 생활에 지친 분들에게 평온한 신앙의 쉼터가 되어드리고자 합니다.
          </p>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">경주역 신도시 주민을 위한 메시지</h3>
            <p>
              경주역 신도시에 새롭게 정착하신 여러분, 주님의교회는 아름다운 산길 10분 거리에 자리 잡은 평온한 신앙의 터전입니다. 
              '콩과나무로'의 건강한 나눔과 따뜻한 공동체가 여러분을 기다립니다.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="pastors" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-[3/4] relative bg-slate-200 overflow-hidden rounded-lg">
                {/* 담임목사 이미지 */}
                <Image 
                  src="/images/pastors/KakaoTalk_20250418_233455866_02.jpg" 
                  alt="방재홍 담임목사" 
                  fill 
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold">방재홍 담임목사</h2>
              <p>
                주님의교회 설립자이자 지역 사회를 섬기는 목회자. 경주 지역 선교와 아프리카 선교를 위해 헌신. 
                신도시 주민 여러분, 평온한 산골 교회에서 함께 신앙의 쉼을 누리세요.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-[3/4] relative bg-slate-200 overflow-hidden rounded-lg">
                {/* 협동목사 이미지 */}
                <Image 
                  src="/images/pastors/KakaoTalk_20250418_233624229.jpg" 
                  alt="정성아 협동목사" 
                  fill 
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold">정성아 협동목사</h2>
              <p>
                찬양 사역과 새신자 양육에 열정을 가진 목회자. '콩과나무로' 프로젝트를 통해 공동체의 나눔을 실천. 
                경주역에서 10분, 건강한 신앙 공동체로 초대합니다.
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="ministry" className="space-y-8">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-video relative bg-slate-200 overflow-hidden rounded-lg">
                {/* 콩과나무로 프로젝트 이미지 */}
                <Image 
                  src="/images/bean-tree/KakaoTalk_20250418_233455866.jpg" 
                  alt="콩과나무로 프로젝트" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">제자 양성 사역</h2>
                <p className="mb-4 text-slate-700">
                  "또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라 
                  저희가 또 다른 사람들을 가르칠 만하리라" (딤후 2:2)<br />
                  말씀으로 무장된 제자들을 세우고, 그들이 또 다른 제자를 세우는 
                  재생산하는 제자도의 사역에 헌신합니다.
                </p>
                <p className="text-slate-700">
                  1. <strong>새가족반</strong>: 구원의 확신과 기초 진리<br />
                  2. <strong>기초 성경공부</strong>: 성경 전반의 체계적 이해<br />
                  3. <strong>제자훈련</strong>: 예수님의 제자로 성장<br />
                  4. <strong>사역훈련</strong>: 제자를 세우는 사역자로 헌신
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">복음 전파 사역</h2>
                <p className="mb-4 text-slate-700">
                  "내가 복음을 부끄러워하지 아니하노니 이 복음은 모든 믿는 자에게 
                  구원을 주시는 하나님의 능력이 됨이라" (롬 1:16)<br />
                  복음의 능력을 믿고 겸손하게 말씀을 전하는 사역입니다.
                </p>
                <p className="text-slate-700">
                  화려한 방법보다는 진실한 삶의 모범으로, 
                  큰 행사보다는 개인적인 관계 속에서 
                  복음을 전하고 제자를 세우는 일에 헌신합니다.
                </p>
              </div>
              <div className="aspect-video relative bg-slate-200 order-1 md:order-2 overflow-hidden rounded-lg">
                {/* 경주역 전도 활동 이미지 */}
                <Image 
                  src="/images/activities/20250419_001222.png" 
                  alt="경주역 전도 활동" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}