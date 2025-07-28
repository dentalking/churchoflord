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
    <div className="container py-8 sm:py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">주님의교회와 함께하기</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          경주 내남면 산속의 작은 교회, 주님의교회입니다.<br />
          소규모이기에 가능한 따뜻한 관심과 세심한 돌봄으로 여러분을 섬기겠습니다.<br />
          <span className="text-slate-700 font-medium">언제든지 편안하게 연락주시기 바랍니다.</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                처음 방문을 준비하시나요?
              </CardTitle>
              <CardDescription>
                편안한 첫 방문을 위해 안내드립니다
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                <strong>20명 이하가 모이는 작은 교회</strong>라서 처음 오신 분도 부담 없이 예배드릴 수 있습니다.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>주일예배</strong> - 매주 일요일 오전 11시</li>
                <li><strong>복장</strong> - 편안한 차림으로 오세요</li>
                <li><strong>주차</strong> - 교회 앞 넓은 주차공간</li>
                <li><strong>교제시간</strong> - 예배 후 차와 다과를 나눕니다</li>
                <li><strong>헌금</strong> - 처음 오신 분은 하지 않으셔도 됩니다</li>
              </ul>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 font-medium mb-2">
                  💡 처음 오시는 분들께 드리는 팁
                </p>
                <p className="text-sm text-blue-700">
                  • 10분 정도 일찍 오시면 좋아요<br />
                  • 성경은 교회에서 빌려드립니다<br />
                  • 궁금한 점은 언제든 물어보세요
                </p>
              </div>
              
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={connectToKakao}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center py-4 min-h-[48px]"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  카카오톡으로 문의하기
                </Button>
                
                <Button 
                  onClick={() => window.location.href='tel:010-4162-2701'}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center py-4 min-h-[48px]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  전화로 문의하기
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  미리 연락주시면 경주역에서 픽업도 가능합니다
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