"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Calendar, Upload, MessageSquare, Video, Settings, Users } from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  // 간단한 비밀번호 인증 (실제 프로덕션에서는 더 안전한 방법 사용)
  const handleLogin = () => {
    if (password === "churchoflord2025") {
      setIsAuthenticated(true);
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>관리자 로그인</CardTitle>
            <CardDescription>
              주님의교회 웹사이트 관리자 페이지입니다.<br />
              목사님, 관리자 비밀번호를 입력해주세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                placeholder="관리자 비밀번호"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              로그인
            </Button>
            <p className="text-sm text-gray-600 text-center">
              비밀번호: churchoflord2025
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">관리자 페이지</h1>
          <p className="text-gray-600">주님의교회 웹사이트를 관리하세요</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          로그아웃
        </Button>
      </div>

      <Tabs defaultValue="notices" className="space-y-6">
        <TabsList className="grid grid-cols-5 lg:w-[600px]">
          <TabsTrigger value="notices" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            공지사항
          </TabsTrigger>
          <TabsTrigger value="sermons" className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            설교 영상
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            이벤트
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            콘텐츠
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            설정
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notices">
          <NoticeManager />
        </TabsContent>

        <TabsContent value="sermons">
          <SermonManager />
        </TabsContent>

        <TabsContent value="events">
          <EventManager />
        </TabsContent>

        <TabsContent value="content">
          <ContentManager />
        </TabsContent>

        <TabsContent value="settings">
          <SettingsManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function NoticeManager() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("일반");

  const handleSubmit = async () => {
    const notice = {
      title,
      content,
      category,
      date: new Date().toLocaleDateString("ko-KR"),
      isImportant: category === "중요"
    };

    // 여기서 실제로는 API를 통해 서버에 저장
    console.log("새 공지사항:", notice);
    alert("공지사항이 저장되었습니다!");
    
    // 폼 초기화
    setTitle("");
    setContent("");
    setCategory("일반");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>새 공지사항 작성</CardTitle>
        <CardDescription>
          교회 홈페이지에 게시될 공지사항을 작성하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="notice-title">제목</Label>
          <Input
            id="notice-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="공지사항 제목을 입력하세요"
          />
        </div>
        
        <div>
          <Label htmlFor="notice-category">카테고리</Label>
          <select
            id="notice-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="일반">일반</option>
            <option value="중요">중요</option>
            <option value="이벤트">이벤트</option>
            <option value="주보">주보</option>
          </select>
        </div>

        <div>
          <Label htmlFor="notice-content">내용</Label>
          <Textarea
            id="notice-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="공지사항 내용을 입력하세요"
            rows={8}
          />
        </div>

        <Button onClick={handleSubmit} className="w-full">
          공지사항 게시
        </Button>
      </CardContent>
    </Card>
  );
}

function SermonManager() {
  const [sermonTitle, setSermonTitle] = useState("");
  const [pastor, setPastor] = useState("방재홍 목사");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    const sermon = {
      title: sermonTitle,
      pastor,
      youtubeUrl,
      description,
      date: new Date().toLocaleDateString("ko-KR")
    };

    console.log("새 설교 영상:", sermon);
    alert("설교 영상이 추가되었습니다!");
    
    setSermonTitle("");
    setPastor("방재홍 목사");
    setYoutubeUrl("");
    setDescription("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>설교 영상 추가</CardTitle>
        <CardDescription>
          YouTube 영상을 홈페이지에 추가하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="sermon-title">설교 제목</Label>
          <Input
            id="sermon-title"
            value={sermonTitle}
            onChange={(e) => setSermonTitle(e.target.value)}
            placeholder="설교 제목을 입력하세요"
          />
        </div>

        <div>
          <Label htmlFor="sermon-pastor">설교자</Label>
          <select
            id="sermon-pastor"
            value={pastor}
            onChange={(e) => setPastor(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="방재홍 목사">방재홍 목사</option>
            <option value="정성아 목사">정성아 목사</option>
          </select>
        </div>

        <div>
          <Label htmlFor="youtube-url">YouTube URL</Label>
          <Input
            id="youtube-url"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
          />
        </div>

        <div>
          <Label htmlFor="sermon-description">설교 요약</Label>
          <Textarea
            id="sermon-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="설교 내용을 간단히 요약해주세요"
            rows={4}
          />
        </div>

        <Button onClick={handleSubmit} className="w-full">
          설교 영상 추가
        </Button>
      </CardContent>
    </Card>
  );
}

function EventManager() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = async () => {
    const event = {
      title: eventTitle,
      date: eventDate,
      description: eventDescription,
      createdAt: new Date().toLocaleDateString("ko-KR")
    };

    console.log("새 이벤트:", event);
    alert("이벤트가 추가되었습니다!");
    
    setEventTitle("");
    setEventDate("");
    setEventDescription("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>이벤트 추가</CardTitle>
        <CardDescription>
          신도시 주민 초청 이벤트나 특별 행사를 추가하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="event-title">이벤트 제목</Label>
          <Input
            id="event-title"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="이벤트 제목을 입력하세요"
          />
        </div>

        <div>
          <Label htmlFor="event-date">이벤트 날짜</Label>
          <Input
            id="event-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="event-description">이벤트 설명</Label>
          <Textarea
            id="event-description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="이벤트 내용을 자세히 설명해주세요"
            rows={6}
          />
        </div>

        <Button onClick={handleSubmit} className="w-full">
          이벤트 추가
        </Button>
      </CardContent>
    </Card>
  );
}

function ContentManager() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>이미지 업로드</CardTitle>
          <CardDescription>
            교회 사진, 콩과나무로 제품 사진 등을 업로드하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-4">
              이미지를 드래그하거나 클릭하여 업로드하세요
            </p>
            <Button variant="outline">파일 선택</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>콩과나무로 제품 관리</CardTitle>
          <CardDescription>
            콩과나무로 프로젝트 제품 정보를 관리하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="제품명" />
          <Textarea placeholder="제품 설명" rows={3} />
          <Button className="w-full">제품 추가</Button>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsManager() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>웹사이트 기본 정보</CardTitle>
          <CardDescription>
            교회 기본 정보를 수정하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="church-phone">교회 전화번호</Label>
            <Input
              id="church-phone"
              defaultValue="010-4162-2701"
              placeholder="교회 전화번호"
            />
          </div>
          
          <div>
            <Label htmlFor="church-email">교회 이메일</Label>
            <Input
              id="church-email"
              defaultValue="bjh9119@gmail.com"
              placeholder="교회 이메일"
            />
          </div>

          <div>
            <Label htmlFor="church-address">교회 주소</Label>
            <Input
              id="church-address"
              defaultValue="경상북도 경주시 내남면 내외로 2175"
              placeholder="교회 주소"
            />
          </div>

          <Button>설정 저장</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>카카오톡 채널 설정</CardTitle>
          <CardDescription>
            카카오톡 채널 정보를 관리하세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="kakao-channel">카카오톡 채널 ID</Label>
            <Input
              id="kakao-channel"
              defaultValue="gj-churchoflord"
              placeholder="카카오톡 채널 ID"
            />
          </div>
          
          <Button>카카오톡 설정 저장</Button>
        </CardContent>
      </Card>
    </div>
  );
}