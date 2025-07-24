"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, Send, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function PrayerPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    category: "",
    title: "",
    content: "",
    isAnonymous: false,
    isPrivate: false,
    isUrgent: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      setSubmitStatus({
        type: "error",
        message: "제목과 기도 요청 내용을 입력해주세요."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch('/api/prayer-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('기도 요청 전송에 실패했습니다.');
      }

      setSubmitStatus({
        type: "success",
        message: "기도 요청이 성공적으로 전송되었습니다. 함께 기도하겠습니다."
      });

      // 폼 초기화
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        category: "",
        title: "",
        content: "",
        isAnonymous: false,
        isPrivate: false,
        isUrgent: false,
      });

    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "기도 요청 전송 중 오류가 발생했습니다. 다시 시도해주세요."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">기도 요청</h1>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 italic mb-4">
              "너희 중에 두세 사람이 땅에서 합심하여 무엇이든지 구하면 
              하늘에 계신 내 아버지께서 그들을 위하여 이루어 주시리라"
            </p>
            <p className="text-slate-600">- 마태복음 18:19 -</p>
          </div>
          <p className="text-slate-700 mt-6 max-w-3xl mx-auto">
            어려운 일이 있으시거나 특별한 기도 제목이 있으시면 언제든지 말씀해 주세요.<br />
            주님의교회 모든 성도들이 함께 중보기도로 섬기겠습니다.
          </p>
        </div>

        {/* 기도의 약속 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border border-slate-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-slate-600" />
              </div>
              <CardTitle className="text-lg">함께하는 기도</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 text-center">
                혼자가 아닙니다. 교회 공동체가 함께 하나님 앞에 나아가 기도합니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-slate-600" />
              </div>
              <CardTitle className="text-lg">개인정보 보호</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 text-center">
                익명 요청 가능하며, 개인 정보는 기도 목적으로만 사용됩니다.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-slate-200">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-slate-600" />
              </div>
              <CardTitle className="text-lg">지속적인 관심</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 text-center">
                일회성이 아닌 지속적인 관심과 기도로 함께합니다.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 기도 요청 폼 */}
        <Card className="border border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl">기도 요청서</CardTitle>
            <CardDescription>
              어떤 일이든지 편안하게 나누어 주세요. 하나님이 들으시고 응답하실 것을 믿습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 개인정보 옵션 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isAnonymous"
                    checked={formData.isAnonymous}
                    onCheckedChange={(checked) => handleInputChange("isAnonymous", checked as boolean)}
                  />
                  <Label htmlFor="isAnonymous" className="text-sm">
                    익명으로 요청하기 (이름과 연락처를 남기지 않습니다)
                  </Label>
                </div>
              </div>

              {!formData.isAnonymous && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">연락처</Label>
                    <Input
                      id="phone"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      placeholder="연락 가능한 번호"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="이메일 주소"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">기도 분류</Label>
                  <Select onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="기도 분류를 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="건강">건강</SelectItem>
                      <SelectItem value="가족">가족</SelectItem>
                      <SelectItem value="직장">직장/학업</SelectItem>
                      <SelectItem value="신앙">신앙</SelectItem>
                      <SelectItem value="관계">인간관계</SelectItem>
                      <SelectItem value="경제">경제</SelectItem>
                      <SelectItem value="감사">감사</SelectItem>
                      <SelectItem value="기타">기타</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="title">기도 제목 *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="간단한 기도 제목을 입력해주세요"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="content">기도 요청 내용 *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  placeholder="구체적인 기도 요청 내용을 편안하게 나누어 주세요. 하나님이 들으시고 응답하실 것을 믿습니다."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isPrivate"
                    checked={formData.isPrivate}
                    onCheckedChange={(checked) => handleInputChange("isPrivate", checked as boolean)}
                  />
                  <Label htmlFor="isPrivate" className="text-sm">
                    비공개 요청 (목회자와 기도팀만 알 수 있습니다)
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isUrgent"
                    checked={formData.isUrgent}
                    onCheckedChange={(checked) => handleInputChange("isUrgent", checked as boolean)}
                  />
                  <Label htmlFor="isUrgent" className="text-sm">
                    긴급 기도 요청
                  </Label>
                </div>
              </div>

              {submitStatus.type && (
                <Alert className={submitStatus.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  <AlertDescription className={submitStatus.type === "success" ? "text-green-700" : "text-red-700"}>
                    {submitStatus.message}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "전송 중..." : "기도 요청하기"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 추가 안내 */}
        <div className="mt-12 text-center bg-slate-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-xl font-bold mb-4">기도 후 나눔</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            기도 응답의 간증이나 감사 제목이 있으시면 언제든지 나누어 주세요. 
            함께 하나님의 선하심을 찬양하며 격려받을 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">감사 간증 나누기</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/small-groups">기도 모임 참여하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}