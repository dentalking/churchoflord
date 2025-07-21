import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "설교 영상",
  description: "주님의교회 방재홍 목사, 정성아 목사의 설교 영상을 시청하세요. 경주역 신도시 주민들을 위한 위로와 은혜의 말씀을 전합니다.",
  keywords: "설교 영상, 방재홍 목사, 정성아 목사, 주일설교, 말씀, 경주역 신도시",
};

export default function SermonsPage() {
  // 예시 설교 데이터
  const recentSermons = [
    { id: 1, title: "평안을 너희에게 주노라", pastor: "방재홍 목사", date: "2025.04.14", videoId: "example1" },
    { id: 2, title: "산골에서 만나는 하나님", pastor: "방재홍 목사", date: "2025.04.07", videoId: "example2" },
    { id: 3, title: "경주역에서 출발하는 신앙", pastor: "정성아 목사", date: "2025.03.31", videoId: "example3" },
    { id: 4, title: "콩과나무로 전하는 복음", pastor: "방재홍 목사", date: "2025.03.24", videoId: "example4" },
  ];
  
  const shortClips = [
    { id: 1, title: "위로가 필요할 때", pastor: "방재홍 목사", duration: "1분 30초", videoId: "clip1" },
    { id: 2, title: "신도시에서의 신앙생활", pastor: "정성아 목사", duration: "2분 15초", videoId: "clip2" },
    { id: 3, title: "평온함을 찾는 방법", pastor: "방재홍 목사", duration: "1분 45초", videoId: "clip3" },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">설교 영상</h1>
      
      <Tabs defaultValue="recent">
        <TabsList className="mb-8">
          <TabsTrigger value="recent">최신 설교</TabsTrigger>
          <TabsTrigger value="clips">설교 하이라이트</TabsTrigger>
          <TabsTrigger value="archive">설교 아카이브</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent">
          <div className="space-y-8">
            {/* 최신 설교 영상 */}
            <div className="aspect-video relative bg-slate-200">
              <div className="absolute inset-0 bg-gray-600 flex items-center justify-center text-white">
                가장 최신 설교 영상 (YouTube 임베드 예정)
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentSermons.map((sermon) => (
                <Card key={sermon.id} className="overflow-hidden">
                  <div className="aspect-video bg-slate-200 relative">
                    <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-white">
                      설교 썸네일
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold mb-1">{sermon.title}</h3>
                    <p className="text-sm text-gray-500">{sermon.pastor} | {sermon.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="clips">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortClips.map((clip) => (
              <Card key={clip.id} className="overflow-hidden">
                <div className="aspect-video bg-slate-200 relative">
                  <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-white">
                    클립 썸네일
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold mb-1">{clip.title}</h3>
                  <p className="text-sm text-gray-500">{clip.pastor} | {clip.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="archive">
          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <p>
              주님의교회의 과거 설교 영상 아카이브입니다. 연도와 월별로 정리되어 있습니다.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* 여기에 아카이브 목록 추가 예정 */}
            <div className="p-12 text-center text-gray-500">
              설교 아카이브 준비 중입니다.
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}