"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Loader2, AlertCircle, RefreshCw } from "lucide-react";
import type { Product } from "@/types/database";

export default function ActivitiesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 제품 목록 불러오기
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setError(null);
      const response = await fetch('/api/products');
      
      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      if (data.data) {
        setProducts(data.data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error instanceof Error ? error.message : '제품 목록을 불러오는 중 오류가 발생했습니다.');
      setProducts([]);
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
                  <CardTitle>겸손한 섬김</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    "주에게 받은 것 외에 무엇이 있다고 자랑하느냐" (고전 4:7)<br />
                    받은 은혜가 많음을 인정하고, 우리의 작은 수고로 이웃을 섬깁니다.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>진실한 나눔</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    "나의 막된아들아 우리가 말과 혀로만 사랑하지 말고 행함과 진실함으로 하자" (요일 3:18)<br />
                    말보다는 실체로, 계산보다는 진실한 마음으로 나눔을 실천합니다.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>이웃 사랑</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    "너희는 나를 사랑하느냐 하시지 말고 내 양을 먹이라" (요 21:17)<br />
                    주님의 명령에 순종하여 어려운 이웃들을 돌보고 섬깁니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 제품 목록 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">콩과나무로 제품</h3>
            
            {loading ? (
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-green-600" />
                <p className="text-slate-600">제품 목록을 불러오고 있습니다...</p>
                <p className="text-sm text-slate-500 mt-2">잠시만 기다려 주세요</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
                <h4 className="text-lg font-semibold text-slate-800 mb-2">제품 목록을 불러올 수 없습니다</h4>
                <p className="text-slate-600 mb-4">{error}</p>
                <Button 
                  onClick={fetchProducts}
                  variant="outline"
                  className="inline-flex items-center"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  다시 시도
                </Button>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">아직 등록된 제품이 없습니다</h4>
                <p className="text-slate-600 mb-4">곧 건강하고 맛있는 제품들을 준비해서 선보일 예정입니다.</p>
                <Button 
                  onClick={fetchProducts}
                  variant="outline"
                  size="sm"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  새로고침
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-600">
                    총 {products.length}개의 제품이 있습니다
                  </p>
                  <Button 
                    onClick={fetchProducts}
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    새로고침
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-square relative bg-gray-100">
                        {product.image_url ? (
                          <Image 
                            src={product.image_url} 
                            alt={`${product.name} 제품 이미지`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                            <div className="text-center">
                              <span className="text-4xl mb-2 block">🌱</span>
                              <span className="text-sm text-gray-500">이미지 준비중</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1 text-slate-800">{product.name}</h4>
                        {product.description && (
                          <p className="text-sm text-slate-600 mb-2 line-clamp-2">{product.description}</p>
                        )}
                        <p className="text-lg font-bold text-green-600">
                          {product.price.toLocaleString()}원
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
            <h2 className="text-2xl font-bold mb-4">복음 전파</h2>
            <p className="mb-6 text-slate-700">
              "가서 모든 민족을 제자로 삼아 아버지와 아들과 성령의 이름으로 세례를 베풀고" (마 28:19)<br />
              주님의 지상 명령에 순종하여 이 지역에 복음을 전하는 것이 우리의 사명입니다.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-blue-900">복음의 능력</h3>
              <p className="text-blue-800">
                "내가 복음을 부끄러워하지 아니하노니 이 복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력이 됨이라" (롬 1:16)<br />
                복음의 능력을 믿고 의지하며, 말씀을 중심으로 한 겸손한 전도를 실천합니다. 
                화려한 방법보다는 성령의 역사하심을 의지합니다.
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
            <h2 className="text-2xl font-bold mb-4">신앙 공동체의 교제</h2>
            <p className="mb-6 text-slate-700">
              "그들이 사도의 가르침을 받아 서로 교제하고 떡을 떼며 오로지 기도하기를 힘쓰니라" (행 2:42)<br />
              초대교회의 모범을 따라 말씀을 중심으로 한 진실한 교제와 
              서로를 격려하며 신앙 안에서 자라가는 공동체 생활을 추구합니다.
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
            <p className="mb-6 text-slate-700">
              "그가 어떤 사람은 사도로, 어떤 사람은 선지자로, 어떤 사람은 복음 전하는 자로, 
              어떤 사람은 목사와 교사로 삼으셨으니 이는 성도를 온전하게 하여 봉사의 일을 하게 하며 
              그리스도의 몸을 세우려 하심이라" (엡 4:11-12)<br />
              소규모 교회이기에 모든 성도가 함께 사역에 참여하는 것이 더욱 중요합니다.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">함께 만들어갈 사역</h3>
              <p className="text-slate-700 mb-6">
                현재 소규모로 운영되고 있는 우리 교회는 새로 오시는 분들과 함께 
                다양한 사역을 시작하려 합니다. 당신의 은사와 재능이 필요합니다!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">예배 섬김</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      찬양 인도, 악기 연주, 음향 등으로 예배를 섬길 분들을 찾습니다.
                    </p>
                    <Badge variant="secondary">함께 시작해요</Badge>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">교육 사역</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      주일학교 교사, 성경공부 인도자 등 다음 세대를 위한 사역자를 찾습니다.
                    </p>
                    <Badge variant="secondary">준비 중</Badge>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">봉사 사역</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">
                      친교 준비, 교회 환경 관리 등 손길이 필요한 곳에서 섬길 분들을 찾습니다.
                    </p>
                    <Badge variant="secondary">참여 가능</Badge>
                  </CardContent>
                </Card>
              </div>
              
              <p className="text-slate-600 mb-6">
                소규모 교회의 장점은 모든 성도가 사역에 참여할 수 있다는 것입니다.<br />
                당신의 작은 섬김이 교회 전체에 큰 변화를 만듭니다.
              </p>
              
              <Button asChild size="lg">
                <Link href="/contact?type=ministry">사역 참여 문의하기</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">소규모 교회의 특별한 기회</h3>
            <p className="mb-6">
              작은 교회이기에 당신의 섬김이 더욱 의미 있습니다. <br />
              함께 교회를 세워가는 동역자가 되어주세요.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium mb-2">즉시 참여</h4>
                <p className="text-sm text-slate-600">
                  복잡한 절차 없이 바로 사역에 참여할 수 있습니다
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium mb-2">다양한 경험</h4>
                <p className="text-sm text-slate-600">
                  여러 분야의 사역을 경험하며 은사를 발견합니다
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <h4 className="font-medium mb-2">함께 성장</h4>
                <p className="text-sm text-slate-600">
                  교회와 함께 성장하는 기쁨을 누릴 수 있습니다
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}