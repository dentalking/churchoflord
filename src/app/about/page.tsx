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
                <h2 className="text-2xl font-bold mb-4">콩과나무로 프로젝트</h2>
                <p className="mb-4">
                  '콩과나무로'는 주님의교회에서 진행하는 건강하고 자연 친화적인 제품을 통한 나눔 사역입니다. 
                  지역 사회와 함께 건강한 먹거리를 나누고 섬김의 정신을 실천합니다.
                </p>
                <p>
                  콩과나무로 제품들은 모두 자연 친화적인 재료로 만들어지며, 
                  수익금은 지역 사회 봉사와 선교 활동에 사용됩니다.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">경주역 전도 활동</h2>
                <p className="mb-4">
                  경주역 신도시에 새롭게 이주하신 분들에게 평온한 신앙 생활을 소개하고 
                  주님의교회의 따뜻한 공동체를 알리는 활동을 진행하고 있습니다.
                </p>
                <p>
                  아름다운 산길을 따라 10분 거리에 위치한 주님의교회는 
                  바쁜 도시 생활 속에서 평온함과 쉼을 찾으실 수 있는 장소입니다.
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