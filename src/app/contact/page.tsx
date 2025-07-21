"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageSquare, MapPin, Phone, Mail, Calendar } from "lucide-react";

export default function ContactPage() {
  // 카카오톡 채널 연결 함수
  const connectToKakao = () => {
    // 주님의교회 카카오톡 채널 URL 
    window.open('https://pf.kakao.com/_KqKaGxj', '_blank');
  };

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">문의하기</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                카카오톡 채널로 문의하기
              </CardTitle>
              <CardDescription>
                가장 빠르고 편리하게 문의하실 수 있는 방법입니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                '경주 주님의교회' 카카오톡 채널을 통해 다음과 같은 문의를 하실 수 있습니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>예배 방문 및 안내 문의</li>
                <li>신도시 주민 초청 이벤트 참여</li>
                <li>콩과나무로 제품 문의</li>
                <li>새신자 상담 예약</li>
                <li>기타 모든 문의사항</li>
              </ul>
              
              <div className="pt-4">
                <Button 
                  onClick={connectToKakao}
                  className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 208 191"
                    fill="currentColor"
                  >
                    <path d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38.21-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,104.8a4,4,0,0,1-4,4H39.41a4,4,0,0,1-4-4V62.92a4,4,0,0,1,4-4h9.12a4,4,0,0,1,4,4Zm86.21,0a4,4,0,0,1-4,4H125.62a4,4,0,0,1-4-4V62.92a4,4,0,0,1,4-4h9.12a4,4,0,0,1,4,4ZM120.06,70.09a4,4,0,0,1-4,4H87.94a4,4,0,0,1-4-4V63a4,4,0,0,1,4-4h28.12a4,4,0,0,1,4,4Zm0,33.7a4,4,0,0,1-4,4H87.94a4,4,0,0,1-4-4v-7.1a4,4,0,0,1,4-4h28.12a4,4,0,0,1,4,4Zm36.42,0a4,4,0,0,1-4,4h-9.12a4,4,0,0,1-4-4V62.92a4,4,0,0,1,4-4h9.12a4,4,0,0,1,4,4Z"/>
                  </svg>
                  카카오톡 채널 채팅하기
                </Button>
                <p className="mt-2 text-sm text-gray-500">
                  채널명: 경주 주님의교회
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  카카오톡 채널을 통해 문의하시면 빠른 시간 내에 답변드리겠습니다. 
                  교회 운영 시간에 따라 답변이 지연될 수 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>


        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                연락처 안내
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 flex items-center">
                <Phone className="mr-2 h-4 w-4" /> 
                전화: 010-4162-2701
              </p>
              <p className="mb-2 flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                이메일: bjh9119@gmail.com
              </p>
              <p className="mb-2 flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                주소: 경상북도 경주시 내남면 내외로 2175
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                방문 예약
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                주님의교회에 처음 방문하시는 분들을 위해 방문 예약 서비스를 제공하고 있습니다. 
                카카오톡 채널로 예약하시면 담당자가 맞이하여 교회를 안내해 드립니다.
              </p>
              <p className="mb-4">
                특히 경주역 신도시에서 오시는 분들을 위해 교회까지 안내도 가능합니다.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={connectToKakao}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                방문 예약하기
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                새신자 상담
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                신앙생활에 대한 궁금증이나 상담이 필요하신 분들은 담임목사님 또는 
                협동목사님과의 상담 예약이 가능합니다.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={connectToKakao}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                상담 예약하기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}