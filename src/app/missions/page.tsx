import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Globe, MapPin, Users, Heart, Plane, Church, HandHeart, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "선교 비전 - 주님의교회",
  description: "땅끝까지 복음을 전하는 주님의교회 선교 비전입니다. 경주에서 시작하여 온 세계로 나아가는 선교 사역을 소개합니다.",
  keywords: "선교, 해외선교, 국내선교, 단기선교, 선교사 파송, 경주 교회",
};

export default function MissionsPage() {
  const missionaries = [
    {
      name: "김요한·사라 선교사",
      country: "케냐",
      ministry: "어린이 사역 및 교회 개척",
      since: "2018년",
      prayer: [
        "현지 어린이 학교 운영을 위한 재정",
        "말라리아 예방과 건강",
        "현지 리더 양육"
      ]
    },
    {
      name: "박바울·한나 선교사",
      country: "캄보디아",
      ministry: "신학교 사역 및 제자훈련",
      since: "2020년",
      prayer: [
        "신학생들의 영적 성장",
        "교재 번역 작업",
        "사역자 가정의 건강"
      ]
    },
    {
      name: "이다윗·마리아 선교사",
      country: "태국",
      ministry: "대학생 선교 및 한인 사역",
      since: "2019년",
      prayer: [
        "캠퍼스 복음화",
        "한인 2세들의 신앙 교육",
        "현지 교회와의 협력"
      ]
    }
  ];

  const domesticMissions = [
    {
      region: "강원도 산간지역",
      church: "평화교회",
      support: "매월 정기 지원 및 여름 성경학교"
    },
    {
      region: "경북 농촌지역",
      church: "샘물교회",
      support: "분기별 방문 및 농번기 봉사"
    },
    {
      region: "도서지역",
      church: "섬마을교회",
      support: "의료 봉사 및 문화 사역"
    }
  ];

  return (
    <div className="container py-12">
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <Badge className="mb-4">🌍 선교 비전</Badge>
        <h1 className="text-4xl font-bold mb-6">
          경주에서 <span className="text-orange-600">땅끝까지</span>
        </h1>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
          "오직 성령이 너희에게 임하시면 너희가 권능을 받고 예루살렘과 온 유대와 사마리아와 
          땅 끝까지 이르러 내 증인이 되리라" (행 1:8)
        </p>
      </div>

      {/* 선교 비전 섹션 */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                모든 민족을 제자로
              </h2>
              <p className="text-lg mb-6 text-slate-700 leading-relaxed">
                주님의교회는 <strong>이 지역에서 시작하여</strong> 
                온 세계로 복음을 전하는 선교적 교회입니다. 
                지역 교회가 곧 <span className="text-orange-600 font-semibold">선교하는 교회</span>가 되어야 한다는 
                비전을 가지고 있습니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">예루살렘: 경주와 경북</h3>
                    <p className="text-slate-600">지역 복음화와 교회 개척</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">땅끝: 해외 선교</h3>
                    <p className="text-slate-600">선교사 파송과 현지 교회 지원</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">제자 삼기: 현지 리더 양육</h3>
                    <p className="text-slate-600">재생산하는 제자를 세우는 선교</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image 
                src="/images/activities/20250419_001222.png" 
                alt="선교 활동" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 선교 전략 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          주님의교회 <span className="text-orange-600">선교 전략</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-t-4 border-t-red-500">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-lg">전략적 선교</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                미전도 종족과 창의적 접근 지역을 우선으로 
                전략적 선교사를 파송합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg">제자훈련 선교</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                현지인 제자훈련을 통해 재생산하는 
                토착 교회를 세웁니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <HandHeart className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-lg">전인적 선교</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                복음 전도와 함께 교육, 의료, 복지를 통한 
                전인적 선교를 추구합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-purple-500">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Church className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg">협력 선교</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600">
                선교 단체 및 현지 교회와 협력하여 
                효과적인 선교를 수행합니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 해외 선교사 후원 */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">🌏 해외 선교</Badge>
          <h2 className="text-2xl font-bold">파송 및 협력 선교사</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionaries.map((missionary, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{missionary.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {missionary.country}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{missionary.since}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-3">{missionary.ministry}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-700">기도제목</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {missionary.prayer.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 국내 선교 */}
      <section className="mb-16">
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">🇰🇷 국내 선교</Badge>
            <h2 className="text-2xl font-bold mb-4">
              농어촌 및 미자립 교회 지원
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              국내의 작고 어려운 교회들과 함께하며, 
              특히 농어촌과 도서 지역의 미자립 교회를 지원합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domesticMissions.map((mission, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="font-bold mb-2">{mission.region}</h3>
                <p className="text-sm text-slate-600 mb-2">
                  <strong>{mission.church}</strong>
                </p>
                <p className="text-sm text-slate-500">{mission.support}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 단기선교 */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4">✈️ 단기선교</Badge>
            <h2 className="text-2xl font-bold mb-4">
              함께 떠나는 단기선교
            </h2>
            <p className="text-slate-700 mb-6">
              매년 여름과 겨울, 청년부와 장년부가 함께 
              단기선교를 떠납니다. 직접 선교 현장을 체험하고 
              선교사님들을 격려하는 귀한 시간입니다.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">2025년 여름 단기선교</h3>
                <p className="text-sm text-slate-600">
                  • 일정: 7월 15-25일 (10박 11일)<br />
                  • 지역: 캄보디아 프놈펜<br />
                  • 사역: 어린이 VBS, 의료봉사, 건축봉사
                </p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">2025년 겨울 단기선교</h3>
                <p className="text-sm text-slate-600">
                  • 일정: 12월 20-27일 (7박 8일)<br />
                  • 지역: 국내 농어촌 지역<br />
                  • 사역: 연탄봉사, 김장나눔, 성탄예배
                </p>
              </div>
            </div>
            
            <Button asChild>
              <Link href="/contact?type=mission">단기선교 신청하기</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-slate-200 rounded-lg relative overflow-hidden">
              <Image 
                src="/images/activities/20250419_001222.png" 
                alt="단기선교 활동 1" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-slate-200 rounded-lg relative overflow-hidden">
              <Image 
                src="/images/hero/KakaoTalk_20250416_201705309.jpg" 
                alt="단기선교 활동 2" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-slate-200 rounded-lg relative overflow-hidden">
              <Image 
                src="/images/bean-tree/KakaoTalk_20250418_233455866.jpg" 
                alt="단기선교 활동 3" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-slate-200 rounded-lg relative overflow-hidden">
              <Image 
                src="/images/events/KakaoTalk_20250418_233455866_03.jpg" 
                alt="단기선교 활동 4" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 지역 특별 선교 */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">🏘️ 지역 선교</Badge>
            <h2 className="text-2xl font-bold mb-4">
              이 지역, <span className="text-green-600">우리의 예루살렘</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/70 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">이웃 전도</h3>
              <p className="text-sm text-slate-600">
                아파트 단지별 전도팀을 구성하여 이웃에게 복음을 전합니다
              </p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">문화 사역</h3>
              <p className="text-sm text-slate-600">
                음악회, 강좌, 육아 프로그램 등으로 지역 주민과 소통합니다
              </p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">섬김 봉사</h3>
              <p className="text-sm text-slate-600">
                콩과나무로 나눔, 돌봄 서비스로 이웃 사랑을 실천합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 선교 후원 안내 */}
      <section className="mb-16">
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">선교 후원에 동참해주세요</CardTitle>
            <CardDescription>여러분의 기도와 후원이 선교의 큰 힘이 됩니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">🙏 기도 후원</h3>
                <p className="text-sm text-slate-600">
                  매월 첫째 주 금요일 선교기도회에 참여하여 
                  선교사님들을 위해 기도해주세요
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">💰 재정 후원</h3>
                <p className="text-sm text-slate-600">
                  정기 또는 일시 후원으로 선교 사역에 
                  동참하실 수 있습니다
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">🎁 물품 후원</h3>
                <p className="text-sm text-slate-600">
                  선교지에 필요한 의료용품, 학용품, 
                  생필품 등을 후원해주세요
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-sm text-slate-600 mb-2">선교 후원 계좌</p>
              <p className="font-medium">농협 123-456-789012 (주님의교회)</p>
              <p className="text-xs text-slate-500 mt-2">* 후원금은 100% 선교 사역에 사용됩니다</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA 섹션 */}
      <section className="text-center py-12 bg-slate-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">
          함께 가는 <span className="text-orange-600">선교의 동역자</span>
        </h2>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          "가서 모든 민족을 제자로 삼으라"는 주님의 지상명령에 
          순종하여 함께 선교의 사명을 감당합시다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact?type=mission">선교 참여 문의</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/small-groups">선교 기도모임 참여</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}