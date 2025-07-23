"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import type { Product } from "@/types/database";

export default function ActivitiesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // 제품 목록 불러오기
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      if (data.data) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

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
    { id: 1, title: "지역 전도", description: "이 지역에 사는 모든 분들에게 복음 전파" },
    { id: 2, title: "가을 산책 예배", description: "산길에서 드리는 감사 예배" },
    { id: 3, title: "가정 방문", description: "지역 주민 가정 방문 및 돌봄" },
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
          <TabsTrigger value="ministry">평신도 사역</TabsTrigger>
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

          {/* 제품 목록 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">콩과나무로 제품</h3>
            {loading ? (
              <p className="text-center py-8 text-gray-500">불러오는 중...</p>
            ) : products.length === 0 ? (
              <p className="text-center py-8 text-gray-500">등록된 제품이 없습니다.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-square relative bg-gray-100">
                      {product.image_url ? (
                        <Image 
                          src={product.image_url} 
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-400">이미지 준비중</span>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{product.name}</h4>
                      {product.description && (
                        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                      )}
                      <p className="text-lg font-bold text-green-600">
                        {product.price.toLocaleString()}원
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
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
            <h2 className="text-2xl font-bold mb-4">지역 사랑 전도 활동</h2>
            <p className="mb-6">
              "가서 모든 민족을 제자로 삼으라" (마 28:19)의 명령에 순종하여 
              이 지역에 사는 모든 분들에게 하나님의 사랑을 전하는 활동을 진행하고 있습니다.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">전도의 심장</h3>
              <p>
                "너희는 세상에서 빛이라 산위에 세운 동네가 숨겨지지 못할 것이요" (마 5:14)
                주님의교회는 이 지역에 하나님의 사랑을 비추는 빛이 되기를 원합니다. 
                '콩과나무로'의 건강한 나눔과 따뜻한 섬김을 통해 지역을 섬기고 있습니다.
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
        
        <TabsContent value="ministry">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">평신도 사역</h2>
            <p className="mb-6">
              "각각 은사를 받은 대로 하나님의 여러 가지 은혜의 선한 청지기 같이 서로 봉사하라" (벧전 4:10)<br />
              모든 성도가 받은 은사와 달란트로 교회와 지역사회를 섬기는 평신도 사역자로 세워집니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">예배 사역팀</CardTitle>
                <CardDescription>팀장: 박다윗 집사</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  찬양팀, 성가대, 방송팀, 안내팀이 함께 예배를 섬깁니다.
                </p>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• 찬양팀: 매주 목요일 연습</li>
                  <li>• 성가대: 매주 주일 오후 연습</li>
                  <li>• 방송팀: 예배 음향/영상 담당</li>
                  <li>• 안내팀: 예배 안내 및 환영</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">교육 사역팀</CardTitle>
                <CardDescription>팀장: 이한나 집사</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  주일학교와 청소년부, 청년부를 섬기는 교사들의 사역입니다.
                </p>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• 영유아부: 0-5세 양육</li>
                  <li>• 유초등부: 6-13세 교육</li>
                  <li>• 중고등부: 청소년 제자훈련</li>
                  <li>• 청년부: 청년 양육과 훈련</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">봉사 사역팀</CardTitle>
                <CardDescription>팀장: 최미선 권사</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  교회 내외의 다양한 봉사로 사랑을 실천합니다.
                </p>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• 친교팀: 예배 후 식사 준비</li>
                  <li>• 새가족팀: 새가족 환영과 정착</li>
                  <li>• 경조팀: 경조사 지원</li>
                  <li>• 환경미화팀: 교회 청소 및 관리</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">전도 사역팀</CardTitle>
                <CardDescription>팀장: 김요한 집사</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  지역 전도와 복음 전파를 위해 활동합니다.
                </p>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• 거리 전도: 매월 셋째 주 토요일</li>
                  <li>• 병원 심방: 매주 화요일</li>
                  <li>• 신도시 전도: 정기 방문 전도</li>
                  <li>• 온라인 전도: SNS 복음 전파</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">선교 사역팀</CardTitle>
                <CardDescription>팀장: 정바울 장로</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  국내외 선교 활동을 기획하고 지원합니다.
                </p>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• 선교사 후원: 정기 후원 관리</li>
                  <li>• 단기선교: 연 2회 해외 선교</li>
                  <li>• 농어촌 선교: 국내 미자립 교회 지원</li>
                  <li>• 선교 기도회: 매월 첫째 주 금요일</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">행정 사역팀</CardTitle>
                <CardDescription>팀장: 서마태 집사</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">
                  교회 행정과 재정을 투명하게 관리합니다.
                </p>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• 재정팀: 헌금 관리 및 회계</li>
                  <li>• 서기팀: 교회 문서 관리</li>
                  <li>• 홍보팀: 웹사이트 및 SNS 관리</li>
                  <li>• 시설관리팀: 건물 및 장비 관리</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">평신도 사역자로 함께하세요!</h3>
            <p className="mb-6">
              하나님께서 주신 은사를 발견하고 개발하여 교회와 이웃을 섬기는 
              평신도 사역자가 되어보세요. 제자훈련과 사역훈련을 통해 
              준비된 사역자로 세워드립니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium mb-2">1단계: 은사 발견</h4>
                <p className="text-sm text-slate-600">
                  은사 발견 세미나를 통해 나의 은사를 찾아보세요
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium mb-2">2단계: 훈련 과정</h4>
                <p className="text-sm text-slate-600">
                  사역별 전문 훈련을 통해 사역 역량을 키워가세요
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium mb-2">3단계: 사역 참여</h4>
                <p className="text-sm text-slate-600">
                  훈련받은 사역자로 교회와 지역을 섬기세요
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href="/contact?type=ministry">사역 참여 문의하기</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}