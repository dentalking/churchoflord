"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MessageSquare, MapPin, Phone, Mail, Calendar } from "lucide-react";
import ContactForm from "./contact-form";

export default function ContactPage() {
  // 카카오톡 채널 연결 함수
  const connectToKakao = () => {
    // 주님의교회 카카오톡 채널 URL 
    window.open('https://pf.kakao.com/_KqKaGxj', '_blank');
  };

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">교회와 함께하기</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          "어떤 기도와 간구든지 무엇이든지 아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로 
          너희 구할 것을 감사함으로 하나님께 아뢰라" (빌 4:6)<br />
          주님의교회는 여러분의 기도와 문의를 기다립니다
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                친근한 소통의 창구
              </CardTitle>
              <CardDescription>
                "각 사람이 마음문을 열고 서로 가지의 문을 여라" (약 5:16)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                주님의교회는 여러분과의 소통을 소중히 여깁니다:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>예배와 말씀에 대한 문의</li>
                <li>제자훈련 참여 상담</li>
                <li>신앙생활에 대한 경험 나눔</li>
                <li>기도 요청과 중보기도</li>
                <li>기타 모든 교제와 소통</li>
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
                  "사람의 마음에는 많은 계획이 있어도 오직 여호와의 뜻만이 굳게 서리라" (잠 19:21)<br />
                  성령님의 인도하심 가운데 진실한 마음으로 답변드리겠습니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 온라인 문의 양식 */}
          <ContactForm />
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
                함께 예배드리기
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700">
                "모이기를 폐하는 어떤 사람들의 습관과 같이 하지 말고 오직 사랑과 
                선한 일을 격려하고 서로 권하여" (히 10:24-25)<br />
                함께 예배드리며 말씀을 나눈 시간을 기다립니다.
              </p>
              <p className="mb-4 text-slate-600">
                처음 방문하시는 분들을 위해 성도들이 사랑으로 준비하고 있습니다.
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
                말씀과 기도로 함께
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-slate-700">
                "서로 짐을 지라 그리하여 그리스도의 법을 성취하라" (갈 6:2)<br />
                신앙의 여정에서 함께 기도하고 말씀을 나누는 
                동반자가 되기를 원합니다.
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