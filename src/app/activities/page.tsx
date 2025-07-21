import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회 활동",
  description: "콩과나무로 프로젝트, 전도 활동, 공동체 활동 등 주님의교회의 다양한 사역을 소개합니다. 건강한 나눔과 섬김을 실천하는 교회입니다.",
  keywords: "콩과나무로, 경주역 전도, 교회 활동, 사역, 나눔 프로젝트, 건강한 먹거리",
};

export default function ActivitiesPage() {
  // 예시 갤러리 데이터
  const beanTreeImages = [
    { id: 1, title: "콩과나무로 제품", description: "건강한 원료로 만든 수제 식품" },
    { id: 2, title: "콩과나무로 워크숍", description: "함께 만드는 커뮤니티 활동" },
    { id: 3, title: "제품 포장", description: "환경을 생각한 포장재 사용" },
    { id: 4, title: "나눔 행사", description: "지역 사회와 함께하는 나눔 활동" },
    { id: 5, title: "원료 수확", description: "직접 기른 건강한 재료 수확" },
    { id: 6, title: "제품 개발", description: "새로운 제품 연구 개발" },
  ];
  
  const missionImages = [
    { id: 1, title: "경주역 전도", description: "경주역 신도시 주민 초청" },
    { id: 2, title: "가을 산책 예배", description: "산길에서 드리는 감사 예배" },
    { id: 3, title: "신도시 주민 방문", description: "신도시 주민 가정 방문" },
    { id: 4, title: "지역 행사 참여", description: "지역 사회 행사 참여" },
  ];
  
  const communityImages = [
    { id: 1, title: "교회 소풍", description: "봄 소풍 및 친교 활동" },
    { id: 2, title: "성경 공부", description: "말씀을 함께 나누는 시간" },
    { id: 3, title: "찬양 연습", description: "성가대 및 찬양팀 연습" },
    { id: 4, title: "식사 교제", description: "예배 후 함께하는 식사 시간" },
    { id: 5, title: "청년부 활동", description: "청년들의 친교 및 나눔 활동" },
    { id: 6, title: "노인 프로그램", description: "어르신들을 위한 활동" },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">교회 활동</h1>
      
      <Tabs defaultValue="beantree">
        <TabsList className="mb-8">
          <TabsTrigger value="beantree">콩과나무로</TabsTrigger>
          <TabsTrigger value="mission">전도 활동</TabsTrigger>
          <TabsTrigger value="community">공동체 활동</TabsTrigger>
        </TabsList>
        
        <TabsContent value="beantree">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">콩과나무로 프로젝트</h2>
            <p className="mb-6">
              '콩과나무로'는 주님의교회에서 진행하는 건강하고 자연 친화적인 제품을 통한 나눔 사역입니다. 
              지역 사회와 함께 건강한 먹거리를 나누고 섬김의 정신을 실천합니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>자연 재료</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    내남면의 청정 자연에서 직접 재배한 콩과 나무 열매를 사용합니다. 
                    화학 첨가물 없이 건강한 재료만을 선별합니다.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>건강한 제품</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    전통 방식으로 정성껏 만드는 된장, 간장, 고추장과 계절별 잼, 
                    차 등 건강한 먹거리를 생산합니다.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>나눔 활동</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    생산된 제품의 수익금은 지역 사회 봉사와 선교 활동에 사용되며, 
                    일부는 어려운 이웃에게 직접 나눔으로 전달됩니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">콩과나무로 갤러리</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {beanTreeImages.map((image, index) => (
                <div key={image.id} className="overflow-hidden rounded-lg">
                  <div className="aspect-square bg-slate-200 relative">
                    <Image 
                      src="/images/bean-tree/KakaoTalk_20250418_233455866.jpg" 
                      alt={image.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                      <span className="font-bold text-center">{image.title}</span>
                      <span className="text-sm text-center">{image.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="mission">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">경주역 전도 활동</h2>
            <p className="mb-6">
              경주역 신도시에 새롭게 이주하신 분들에게 평온한 신앙 생활을 소개하고 
              주님의교회의 따뜻한 공동체를 알리는 활동을 진행하고 있습니다.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">신도시 주민을 위한 메시지</h3>
              <p>
                경주역 신도시에 새롭게 정착하신 여러분, 주님의교회는 아름다운 산길 10분 거리에 자리 잡은 평온한 신앙의 터전입니다. 
                '콩과나무로'의 건강한 나눔과 따뜻한 공동체가 여러분을 기다립니다.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">전도 활동 갤러리</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {missionImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-slate-200 relative">
                    <Image 
                      src="/images/activities/20250419_001222.png" 
                      alt={image.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                      <span className="font-bold text-center">{image.title}</span>
                      <span className="text-sm text-center">{image.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="community">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">산골 교회 공동체 활동</h2>
            <p className="mb-6">
              주님의교회는 아름다운 산골에 위치한 장점을 살려 자연과 함께하는 다양한 공동체 활동을 진행합니다. 
              성도들간의 친교와 신앙 성장을 위한 프로그램을 제공합니다.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">공동체 활동 갤러리</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {communityImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg">
                  <div className="aspect-square bg-slate-200 relative">
                    <Image 
                      src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
                      alt={image.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                      <span className="font-bold text-center">{image.title}</span>
                      <span className="text-sm text-center">{image.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}