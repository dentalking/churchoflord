"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import type { Sermon } from "@/types/database";
import Image from "next/image";

export default function SermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    try {
      const response = await fetch('/api/sermons');
      const data = await response.json();
      if (data.data) {
        setSermons(data.data);
      }
    } catch (error) {
      console.error('Error fetching sermons:', error);
    } finally {
      setLoading(false);
    }
  };

  // YouTube ID 추출 함수
  const getYoutubeId = (url: string | null) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  // 최신 설교 (최근 4개)
  const recentSermons = sermons.slice(0, 4);
  
  // 설교 하이라이트 (짧은 영상들)
  const shortClips = sermons.filter(sermon => sermon.description?.includes('하이라이트') || sermon.description?.includes('클립'));

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
            {loading ? (
              <div className="py-12 text-center text-gray-500">
                불러오는 중...
              </div>
            ) : sermons.length === 0 ? (
              <div className="py-12 text-center text-gray-500">
                등록된 설교가 없습니다.
              </div>
            ) : (
              <>
                {/* 최신 설교 영상 */}
                {sermons[0] && sermons[0].youtube_id && (
                  <div className="aspect-video relative bg-slate-200">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${sermons[0].youtube_id}`}
                      title={sermons[0].title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recentSermons.map((sermon) => {
                    const youtubeId = sermon.youtube_id || getYoutubeId(sermon.youtube_url);
                    return (
                      <Card key={sermon.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-slate-200 relative">
                          {youtubeId ? (
                            <Image
                              src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
                              alt={sermon.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-white">
                              설교 썸네일
                            </div>
                          )}
                        </div>
                        <CardContent className="pt-4">
                          <h3 className="font-bold mb-1">{sermon.title}</h3>
                          <p className="text-sm text-gray-500">
                            {sermon.pastor} | {new Date(sermon.sermon_date).toLocaleDateString('ko-KR')}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="clips">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shortClips.length === 0 ? (
              <div className="col-span-3 py-12 text-center text-gray-500">
                설교 하이라이트가 준비 중입니다.
              </div>
            ) : (
              shortClips.map((clip) => {
                const youtubeId = clip.youtube_id || getYoutubeId(clip.youtube_url);
                return (
                  <Card key={clip.id} className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-slate-200 relative">
                      {youtubeId ? (
                        <Image
                          src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
                          alt={clip.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-white">
                          클립 썸네일
                        </div>
                      )}
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-bold mb-1">{clip.title}</h3>
                      <p className="text-sm text-gray-500">{clip.pastor}</p>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="archive">
          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <p>
              주님의교회의 과거 설교 영상 아카이브입니다. 연도와 월별로 정리되어 있습니다.
            </p>
          </div>
          
          <div className="space-y-6">
            {loading ? (
              <div className="p-12 text-center text-gray-500">
                불러오는 중...
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sermons.map((sermon) => {
                  const youtubeId = sermon.youtube_id || getYoutubeId(sermon.youtube_url) || null;
                  return (
                    <Card key={sermon.id} className="p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-2">{sermon.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{sermon.pastor}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(sermon.sermon_date).toLocaleDateString('ko-KR')}
                      </p>
                      {sermon.description && (
                        <p className="text-sm text-gray-600 mt-2">{sermon.description}</p>
                      )}
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}