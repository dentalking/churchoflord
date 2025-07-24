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
          <div className="bg-slate-50 rounded-lg p-6 mb-6 border border-slate-200">
            <p className="text-slate-700 italic mb-2">
              "한 사람이 씨를 뿌리러 나가서 뿌릴새 더러는 길가에 떨어지매 새들이 와서 먹어버렸고...
              좋은 땅에 떨어지매 어떤 것은 백 배, 어떤 것은 육십 배, 어떤 것은 삼십 배의 결실을 하였느니라"
            </p>
            <p className="text-slate-600 text-sm">- 마태복음 13:3-8 -</p>
          </div>
          <p className="mb-4">
            주님의교회는 2011년에 경상북도 경주시 내남면에 설립되었습니다. 
            경주역에서 약 10분 거리의 아름다운 산골에 위치한 우리 교회는 지역 사회를 섬기고 
            건강한 신앙 공동체를 형성하기 위해 노력해왔습니다.
          </p>
          <p className="mb-4">
            작은 씨앗으로 시작된 우리 교회는 하나님의 은혜로 자라나 지역 사회의 빛과 소금이 되고자 합니다.
            순수한 복음을 전하고, 말씀 중심의 예배를 드리며, 서로 사랑하는 공동체로 성장해 왔습니다.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">교회 비전</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold mb-3 text-slate-800">예배 중심</h3>
              <p className="text-sm text-slate-600 mb-3">
                "신령과 진정으로 예배하는 자들을 아버지께서 찾으시느니라" (요 4:23)
              </p>
              <p className="text-sm">
                살아있는 예배를 통해 하나님을 만나고 변화되는 공동체
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold mb-3 text-slate-800">말씀 중심</h3>
              <p className="text-sm text-slate-600 mb-3">
                "모든 성경은 하나님의 감동으로 된 것으로 교훈과 책망과 바르게 함과 의로 교육하기에 유익하니" (딤후 3:16)
              </p>
              <p className="text-sm">
                성경 말씀을 삶의 기준으로 삼고 순종하는 공동체
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="font-bold mb-3 text-slate-800">사랑 중심</h3>
              <p className="text-sm text-slate-600 mb-3">
                "새 계명을 너희에게 주노니 서로 사랑하라" (요 13:34)
              </p>
              <p className="text-sm">
                그리스도의 사랑으로 서로를 품고 섬기는 공동체
              </p>
            </div>
          </div>
          <p className="mb-4">
            주님의교회는 하나님의 말씀을 중심으로 믿음의 공동체를 세우고, 
            지역 사회와 함께 성장하는 건강한 교회를 지향합니다. 
            특히 바쁜 도시 생활에 지친 분들에게 평온한 신앙의 쉼터가 되어드리고자 합니다.
          </p>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
            <h3 className="text-xl font-bold mb-3 text-green-800">건전한 신학의 교회</h3>
            <p className="text-green-700">
              주님의교회는 <strong>개혁주의의 성경적 정통성</strong>과 <strong>성령의 역사</strong>가 조화된 
              건전하고 균형잡힌 신학을 추구합니다. 현시대의 많은 이단과 극단적 사상들 속에서 
              성경적 진리를 견고히 지키며, 순수한 복음으로 하나님 나라를 확장해 나가는 교회입니다.
            </p>
          </div>
          
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">경주역 신도시 주민을 위한 메시지</h3>
            <p>
              경주역 신도시에 새롭게 정착하신 여러분, 주님의교회는 아름다운 산길 10분 거리에 자리 잡은 평온한 신앙의 터전입니다. 
              정통성 있는 복음과 '콩과나무로'의 건강한 나눔, 따뜻한 공동체가 여러분을 기다립니다.
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
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <p className="text-sm text-slate-700 italic">
                    "내가 선한 싸움을 싸우고 나의 달려갈 길을 마치고 믿음을 지켰으니" (딤후 4:7)
                  </p>
                </div>
                <p className="mb-4">
                  주님의교회 설립자이자 고신대학교에서 학사부터 선교학 석사까지 체계적인 신학 교육을 받은 목회자입니다. 
                  고신교단의 개혁주의 정통성과 예하성의 성령 충만한 신앙을 아우르는 넓은 스펙트럼의 건전한 신학으로 
                  순수한 신앙 공동체를 세워가고 있습니다. 신도시 주민 여러분을 평온한 산골 교회로 초대합니다.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">신학적 배경과 정통성</h4>
                  <p className="text-sm text-blue-700">
                    고신대학교에서 신학 학사, 신학 석사(M.Div), 선교학 석사(Th.M)까지 완주하며 
                    개혁주의 신학의 견고한 기초를 다졌습니다. 현재는 예하성 소속으로 성령의 역사와 
                    은사를 인정하는 균형잡힌 신앙을 추구하며, 현시대 많은 이단과 극단적 사상들 속에서 
                    성경적 정통성을 지키며 건강한 교회를 세우고자 하는 열정을 가지고 있습니다.
                  </p>
                </div>
                <div className="text-sm space-y-1 text-slate-600">
                  <p>• 고신대학교 신학과 학사 졸업</p>
                  <p>• 고신대학교 신학대학원 신학과 석사 졸업 (M.Div)</p>
                  <p>• 고신대학교 신학대학원 선교학 석사 졸업 (Th.M)</p>
                  <p>• 대한예수교장로회(고신) 목사 안수</p>
                  <p>• 현 예수교하나님의성회 목사</p>
                </div>
              </div>
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
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <p className="text-sm text-slate-700 italic">
                    "너희가 서로 사랑하면 이로써 모든 사람이 너희가 내 제자인 줄 알리라" (요 13:35)
                  </p>
                </div>
                <p className="mb-4">
                  이학 박사과정을 통해 과학적 사고를 기르고, 신학 석사 과정에서 선교학을 전공하여 
                  복음 전파에 대한 깊은 이해를 갖춘 목회자입니다. 찬양 사역과 새신자 양육에 열정을 가지고 있으며, 
                  '콩과나무로' 프로젝트를 통해 공동체의 나눔을 실천하고 있습니다.
                </p>
                <div className="bg-purple-50 rounded-lg p-4 mb-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">학문적 배경의 조화</h4>
                  <p className="text-sm text-purple-700">
                    분자생물학 전공을 통해 하나님의 창조 세계에 대한 과학적 이해와 
                    선교학 전공을 통한 복음적 열정이 조화된 독특한 목회적 배경을 가지고 있습니다.
                  </p>
                </div>
                <div className="text-sm space-y-1 text-slate-600">
                  <p>• 부산대학교 분자생물학과 학사 졸업</p>
                  <p>• 고신대학교 신학대학원 선교학 석사 졸업 (Th.M)</p>
                  <p>• 새가족 양육 사역 담당</p>
                  <p>• 찬양 사역 및 교회음악 지도</p>
                  <p>• 콩과나무로 프로젝트 대표</p>
                </div>
              </div>
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