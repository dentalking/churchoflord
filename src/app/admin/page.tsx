"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Calendar, Upload, MessageSquare, Video, Settings, Users, Trash2, Edit, Plus } from "lucide-react";
import type { Notice, Sermon, Event } from "@/types/database";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  
  // 간단한 비밀번호 인증
  const handleLogin = () => {
    if (password === "churchoflord2025") {
      setIsAuthenticated(true);
      setAdminPassword(password);
    } else {
      alert("비밀번호가 올바르지 않습니다.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setAdminPassword("");
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
          <NoticeManager adminPassword={adminPassword} />
        </TabsContent>

        <TabsContent value="sermons">
          <SermonManager adminPassword={adminPassword} />
        </TabsContent>

        <TabsContent value="events">
          <EventManager adminPassword={adminPassword} />
        </TabsContent>

        <TabsContent value="content">
          <ContentManager adminPassword={adminPassword} />
        </TabsContent>

        <TabsContent value="settings">
          <SettingsManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// 공지사항 관리 컴포넌트
function NoticeManager({ adminPassword }: { adminPassword: string }) {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("일반");
  const [isImportant, setIsImportant] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  // 공지사항 목록 불러오기
  const fetchNotices = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/notices');
      const data = await response.json();
      if (data.data) {
        setNotices(data.data);
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
      alert('공지사항을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // 공지사항 저장
  const handleSubmit = async () => {
    try {
      const method = editingId ? 'PUT' : 'POST';
      const body = {
        id: editingId,
        title,
        content,
        category,
        isImportant,
        author: '방재홍 목사'
      };

      const response = await fetch('/api/notices', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        alert(editingId ? '공지사항이 수정되었습니다!' : '공지사항이 저장되었습니다!');
        resetForm();
        fetchNotices();
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error saving notice:', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  // 공지사항 삭제
  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/notices?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        alert('공지사항이 삭제되었습니다.');
        fetchNotices();
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 수정 모드로 전환
  const handleEdit = (notice: Notice) => {
    setEditingId(notice.id);
    setTitle(notice.title);
    setContent(notice.content);
    setCategory(notice.category);
    setIsImportant(notice.is_important);
  };

  // 폼 초기화
  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("일반");
    setIsImportant(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      {/* 공지사항 작성 폼 */}
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? '공지사항 수정' : '새 공지사항 작성'}</CardTitle>
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
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="notice-category">카테고리</Label>
              <select
                id="notice-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="일반">일반</option>
                <option value="이벤트">이벤트</option>
                <option value="주보">주보</option>
                <option value="소식">소식</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isImportant}
                  onChange={(e) => setIsImportant(e.target.checked)}
                  className="w-4 h-4"
                />
                <span>중요 공지로 표시</span>
              </label>
            </div>
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

          <div className="flex gap-2">
            <Button onClick={handleSubmit} className="flex-1">
              {editingId ? '수정하기' : '공지사항 게시'}
            </Button>
            {editingId && (
              <Button onClick={resetForm} variant="outline">
                취소
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 공지사항 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>공지사항 목록</CardTitle>
          <CardDescription>
            등록된 공지사항을 관리하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-4">불러오는 중...</p>
          ) : notices.length === 0 ? (
            <p className="text-center py-4 text-gray-500">등록된 공지사항이 없습니다.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>제목</TableHead>
                  <TableHead>카테고리</TableHead>
                  <TableHead>작성자</TableHead>
                  <TableHead>작성일</TableHead>
                  <TableHead className="text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notices.map((notice) => (
                  <TableRow key={notice.id}>
                    <TableCell>
                      {notice.is_important && (
                        <span className="text-red-500 font-bold mr-2">[중요]</span>
                      )}
                      {notice.title}
                    </TableCell>
                    <TableCell>{notice.category}</TableCell>
                    <TableCell>{notice.author}</TableCell>
                    <TableCell>
                      {new Date(notice.created_at).toLocaleDateString('ko-KR')}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(notice)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(notice.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// 설교 영상 관리 컴포넌트
function SermonManager({ adminPassword }: { adminPassword: string }) {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(false);
  const [sermonTitle, setSermonTitle] = useState("");
  const [pastor, setPastor] = useState("방재홍 목사");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [description, setDescription] = useState("");
  const [sermonDate, setSermonDate] = useState(new Date().toISOString().split('T')[0]);
  const [editingId, setEditingId] = useState<number | null>(null);

  // 설교 목록 불러오기
  const fetchSermons = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/sermons');
      const data = await response.json();
      if (data.data) {
        setSermons(data.data);
      }
    } catch (error) {
      console.error('Error fetching sermons:', error);
      alert('설교 목록을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSermons();
  }, []);

  // 설교 저장
  const handleSubmit = async () => {
    try {
      const method = editingId ? 'PUT' : 'POST';
      const body = {
        id: editingId,
        title: sermonTitle,
        pastor,
        youtubeUrl,
        description,
        sermonDate
      };

      const response = await fetch('/api/sermons', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        alert(editingId ? '설교가 수정되었습니다!' : '설교가 추가되었습니다!');
        resetForm();
        fetchSermons();
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error saving sermon:', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  // 설교 삭제
  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/sermons?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        alert('설교가 삭제되었습니다.');
        fetchSermons();
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting sermon:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 수정 모드로 전환
  const handleEdit = (sermon: Sermon) => {
    setEditingId(sermon.id);
    setSermonTitle(sermon.title);
    setPastor(sermon.pastor);
    setYoutubeUrl(sermon.youtube_url || '');
    setDescription(sermon.description || '');
    setSermonDate(sermon.sermon_date);
  };

  // 폼 초기화
  const resetForm = () => {
    setSermonTitle("");
    setPastor("방재홍 목사");
    setYoutubeUrl("");
    setDescription("");
    setSermonDate(new Date().toISOString().split('T')[0]);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      {/* 설교 추가 폼 */}
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? '설교 영상 수정' : '설교 영상 추가'}</CardTitle>
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

          <div className="grid grid-cols-2 gap-4">
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
              <Label htmlFor="sermon-date">설교 날짜</Label>
              <Input
                id="sermon-date"
                type="date"
                value={sermonDate}
                onChange={(e) => setSermonDate(e.target.value)}
              />
            </div>
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

          <div className="flex gap-2">
            <Button onClick={handleSubmit} className="flex-1">
              {editingId ? '수정하기' : '설교 영상 추가'}
            </Button>
            {editingId && (
              <Button onClick={resetForm} variant="outline">
                취소
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 설교 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>설교 영상 목록</CardTitle>
          <CardDescription>
            등록된 설교 영상을 관리하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-4">불러오는 중...</p>
          ) : sermons.length === 0 ? (
            <p className="text-center py-4 text-gray-500">등록된 설교가 없습니다.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>제목</TableHead>
                  <TableHead>설교자</TableHead>
                  <TableHead>날짜</TableHead>
                  <TableHead>YouTube</TableHead>
                  <TableHead className="text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sermons.map((sermon) => (
                  <TableRow key={sermon.id}>
                    <TableCell>{sermon.title}</TableCell>
                    <TableCell>{sermon.pastor}</TableCell>
                    <TableCell>
                      {new Date(sermon.sermon_date).toLocaleDateString('ko-KR')}
                    </TableCell>
                    <TableCell>
                      {sermon.youtube_id ? '✓' : '-'}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(sermon)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(sermon.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// 이벤트 관리 컴포넌트
function EventManager({ adminPassword }: { adminPassword: string }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("주님의교회");
  const [editingId, setEditingId] = useState<number | null>(null);

  // 이벤트 목록 불러오기
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/events');
      const data = await response.json();
      if (data.data) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('이벤트 목록을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // 이벤트 저장
  const handleSubmit = async () => {
    try {
      const method = editingId ? 'PUT' : 'POST';
      const body = {
        id: editingId,
        title: eventTitle,
        description,
        eventDate,
        eventTime,
        location,
        isActive: true
      };

      const response = await fetch('/api/events', {
        method,
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        alert(editingId ? '이벤트가 수정되었습니다!' : '이벤트가 추가되었습니다!');
        resetForm();
        fetchEvents();
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error saving event:', error);
      alert('저장 중 오류가 발생했습니다.');
    }
  };

  // 이벤트 삭제
  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/events?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        alert('이벤트가 삭제되었습니다.');
        fetchEvents();
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  // 수정 모드로 전환
  const handleEdit = (event: Event) => {
    setEditingId(event.id);
    setEventTitle(event.title);
    setDescription(event.description || '');
    setEventDate(event.event_date);
    setEventTime(event.event_time || '');
    setLocation(event.location || '주님의교회');
  };

  // 폼 초기화
  const resetForm = () => {
    setEventTitle("");
    setEventDate("");
    setEventTime("");
    setDescription("");
    setLocation("주님의교회");
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      {/* 이벤트 추가 폼 */}
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? '이벤트 수정' : '이벤트 추가'}</CardTitle>
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

          <div className="grid grid-cols-2 gap-4">
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
              <Label htmlFor="event-time">시간 (선택)</Label>
              <Input
                id="event-time"
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="event-location">장소</Label>
            <Input
              id="event-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="이벤트 장소"
            />
          </div>

          <div>
            <Label htmlFor="event-description">이벤트 설명</Label>
            <Textarea
              id="event-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="이벤트 내용을 자세히 설명해주세요"
              rows={6}
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSubmit} className="flex-1">
              {editingId ? '수정하기' : '이벤트 추가'}
            </Button>
            {editingId && (
              <Button onClick={resetForm} variant="outline">
                취소
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 이벤트 목록 */}
      <Card>
        <CardHeader>
          <CardTitle>이벤트 목록</CardTitle>
          <CardDescription>
            예정된 이벤트를 관리하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-4">불러오는 중...</p>
          ) : events.length === 0 ? (
            <p className="text-center py-4 text-gray-500">등록된 이벤트가 없습니다.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>제목</TableHead>
                  <TableHead>날짜</TableHead>
                  <TableHead>시간</TableHead>
                  <TableHead>장소</TableHead>
                  <TableHead className="text-right">관리</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>
                      {new Date(event.event_date).toLocaleDateString('ko-KR')}
                    </TableCell>
                    <TableCell>{event.event_time || '-'}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleEdit(event)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDelete(event.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// 콘텐츠 관리 컴포넌트 (간단 버전)
function ContentManager({ adminPassword }: { adminPassword: string }) {
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
              이미지 업로드 기능은 준비 중입니다
            </p>
            <p className="text-sm text-gray-500">
              Supabase Storage 연동 예정
            </p>
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
          <p className="text-gray-600">
            제품 관리 기능은 준비 중입니다
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// 설정 관리 컴포넌트
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
              disabled
            />
          </div>
          
          <div>
            <Label htmlFor="church-email">교회 이메일</Label>
            <Input
              id="church-email"
              defaultValue="bjh9119@gmail.com"
              placeholder="교회 이메일"
              disabled
            />
          </div>

          <div>
            <Label htmlFor="church-address">교회 주소</Label>
            <Input
              id="church-address"
              defaultValue="경상북도 경주시 내남면 내외로 2175"
              placeholder="교회 주소"
              disabled
            />
          </div>

          <p className="text-sm text-gray-500">
            기본 정보 수정은 개발자에게 문의하세요.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supabase 연동 상태</CardTitle>
          <CardDescription>
            데이터베이스 연동 상태를 확인하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">상태:</span> 
              <span className="text-green-600 ml-2">정상 연동 (환경 변수 설정 필요)</span>
            </p>
            <p className="text-sm text-gray-600">
              .env.local 파일에 Supabase 연결 정보를 설정해주세요.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}