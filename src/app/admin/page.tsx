"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Calendar, Upload, MessageSquare, Video, Settings, Users, Trash2, Edit, Plus, RotateCcw, Download, Eye, Heart } from "lucide-react";
import type { Notice, Sermon, Event, PrayerRequest } from "@/types/database";
import dynamic from "next/dynamic";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { PreviewModal } from "@/components/ui/preview-modal";
import { exportNoticesToExcel, exportSermonsToExcel, exportEventsToExcel } from "@/utils/excel";

const ContentManager = dynamic(() => import('./ContentManager'), { 
  ssr: false,
  loading: () => <div className="text-center py-8">Loading...</div>
});
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
        <TabsList className="grid grid-cols-7 lg:w-[840px]">
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
          <TabsTrigger value="prayers" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            기도 요청
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            콘텐츠
          </TabsTrigger>
          <TabsTrigger value="trash" className="flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            휴지통
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

        <TabsContent value="prayers">
          <PrayerManager adminPassword={adminPassword} />
        </TabsContent>

        <TabsContent value="content">
          <ContentManager adminPassword={adminPassword} />
        </TabsContent>

        <TabsContent value="trash">
          <TrashManager adminPassword={adminPassword} />
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
  
  // 검색 및 필터링 상태
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("전체");
  const [sortBy, setSortBy] = useState("latest");
  
  // 삭제 확인 다이얼로그 상태
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  
  // 미리보기 상태
  const [previewOpen, setPreviewOpen] = useState(false);

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

  // 삭제 확인
  const handleDeleteClick = (id: number) => {
    setDeletingId(id);
    setDeleteConfirmOpen(true);
  };

  // 공지사항 삭제
  const handleDelete = async () => {
    if (!deletingId) return;

    try {
      const response = await fetch(`/api/notices?id=${deletingId}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        alert('공지사항이 삭제되었습니다. 휴지통에서 30일간 보관됩니다.');
        fetchNotices();
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
      alert('삭제 중 오류가 발생했습니다.');
    } finally {
      setDeleteConfirmOpen(false);
      setDeletingId(null);
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

  // 필터링 및 정렬된 공지사항 목록
  const filteredAndSortedNotices = notices
    .filter(notice => {
      // 검색어 필터링
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const titleMatch = notice.title.toLowerCase().includes(searchLower);
        const contentMatch = notice.content.toLowerCase().includes(searchLower);
        if (!titleMatch && !contentMatch) return false;
      }
      
      // 카테고리 필터링
      if (filterCategory !== "전체" && notice.category !== filterCategory) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      // 정렬
      if (sortBy === "latest") {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      } else if (sortBy === "important") {
        // 중요 공지를 먼저, 그 다음 최신순
        if (a.is_important && !b.is_important) return -1;
        if (!a.is_important && b.is_important) return 1;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
      return 0;
    });

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
            {(title || content) && (
              <Button 
                onClick={() => setPreviewOpen(true)} 
                variant="outline"
                type="button"
              >
                <Eye className="h-4 w-4 mr-2" />
                미리보기
              </Button>
            )}
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
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>공지사항 목록</CardTitle>
                <CardDescription>
                  등록된 공지사항을 관리하세요.
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => exportNoticesToExcel(notices)}
                disabled={notices.length === 0}
              >
                <Download className="h-4 w-4 mr-2" />
                Excel 다운로드
              </Button>
            </div>
            
            {/* 검색 및 필터링 UI */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="제목 또는 내용 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="전체">전체 카테고리</option>
                  <option value="일반">일반</option>
                  <option value="이벤트">이벤트</option>
                  <option value="주보">주보</option>
                  <option value="소식">소식</option>
                </select>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="latest">최신순</option>
                  <option value="oldest">오래된순</option>
                  <option value="important">중요 공지 우선</option>
                </select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-4">불러오는 중...</p>
          ) : notices.length === 0 ? (
            <p className="text-center py-4 text-gray-500">등록된 공지사항이 없습니다.</p>
          ) : filteredAndSortedNotices.length === 0 ? (
            <p className="text-center py-4 text-gray-500">검색 결과가 없습니다.</p>
          ) : (
            <>
              <div className="mb-4 text-sm text-gray-600">
                총 {filteredAndSortedNotices.length}개의 공지사항
              </div>
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
                  {filteredAndSortedNotices.map((notice) => (
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
                        onClick={() => handleDeleteClick(notice.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </>
          )}
        </CardContent>
      </Card>
      
      {/* 삭제 확인 다이얼로그 */}
      <ConfirmDialog
        open={deleteConfirmOpen}
        onOpenChange={setDeleteConfirmOpen}
        onConfirm={handleDelete}
        title="공지사항을 삭제하시겠습니까?"
        description="삭제된 공지사항은 30일 동안 휴지통에 보관되며, 휴지통에서 복구할 수 있습니다."
      />
      
      {/* 미리보기 모달 */}
      <PreviewModal
        open={previewOpen}
        onOpenChange={setPreviewOpen}
        title="공지사항"
        content={
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">
                {isImportant && <span className="text-red-500">[중요] </span>}
                {title || '제목 없음'}
              </h2>
              <div className="flex gap-4 text-sm text-gray-600 mt-2">
                <span>카테고리: {category}</span>
                <span>작성자: 방재홍 목사</span>
                <span>{new Date().toLocaleDateString('ko-KR')}</span>
              </div>
            </div>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{content || '내용 없음'}</p>
            </div>
          </div>
        }
      />
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
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>설교 영상 목록</CardTitle>
              <CardDescription>
                등록된 설교 영상을 관리하세요.
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportSermonsToExcel(sermons)}
              disabled={sermons.length === 0}
            >
              <Download className="h-4 w-4 mr-2" />
              Excel 다운로드
            </Button>
          </div>
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
            교회 행사와 특별 이벤트를 추가하세요.
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
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>이벤트 목록</CardTitle>
              <CardDescription>
                예정된 이벤트를 관리하세요.
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportEventsToExcel(events)}
              disabled={events.length === 0}
            >
              <Download className="h-4 w-4 mr-2" />
              Excel 다운로드
            </Button>
          </div>
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

// 기도 요청 관리 컴포넌트  
function PrayerManager({ adminPassword }: { adminPassword: string }) {
  const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [status, setStatus] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  
  // 검색 및 필터링 상태
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("전체");
  const [filterStatus, setFilterStatus] = useState("전체");
  
  // 삭제 확인 다이얼로그 상태
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // 기도 요청 목록 불러오기
  const fetchPrayerRequests = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/prayer-requests', {
        headers: {
          'x-admin-password': adminPassword
        }
      });
      const data = await response.json();
      if (data.data) {
        setPrayerRequests(data.data);
      }
    } catch (error) {
      console.error('Error fetching prayer requests:', error);
      alert('기도 요청 목록을 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrayerRequests();
  }, [adminPassword]);

  // 기도 요청 상태 업데이트
  const handleSubmit = async () => {
    if (!editingId) return;
    
    try {
      const response = await fetch('/api/prayer-requests', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({
          id: editingId,
          status,
          adminNotes
        })
      });

      if (!response.ok) throw new Error('Failed to update prayer request');

      await fetchPrayerRequests();
      setEditingId(null);
      setStatus("");
      setAdminNotes("");
      alert('기도 요청이 업데이트되었습니다.');
    } catch (error) {
      console.error('Error updating prayer request:', error);
      alert('기도 요청 업데이트에 실패했습니다.');
    }
  };

  // 수정 시작
  const handleEdit = (request: PrayerRequest) => {
    setEditingId(request.id);
    setStatus(request.status);
    setAdminNotes(request.admin_notes || "");
  };

  // 수정 취소
  const handleCancel = () => {
    setEditingId(null);
    setStatus("");
    setAdminNotes("");
  };

  // 삭제 확인 다이얼로그 열기
  const handleDeleteClick = (id: number) => {
    setDeletingId(id);
    setDeleteConfirmOpen(true);
  };

  // 기도 요청 삭제
  const handleDelete = async () => {
    if (!deletingId) return;
    
    try {
      const response = await fetch(`/api/prayer-requests?id=${deletingId}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (!response.ok) throw new Error('Failed to delete prayer request');

      await fetchPrayerRequests();
      alert('기도 요청이 삭제되었습니다.');
    } catch (error) {
      console.error('Error deleting prayer request:', error);
      alert('기도 요청 삭제에 실패했습니다.');
    } finally {
      setDeleteConfirmOpen(false);
      setDeletingId(null);
    }
  };

  // 필터링된 기도 요청 목록
  const filteredPrayerRequests = prayerRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "전체" || request.category === filterCategory;
    const matchesStatus = filterStatus === "전체" || request.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'praying': return 'text-blue-600 bg-blue-50';
      case 'answered': return 'text-green-600 bg-green-50';
      case 'completed': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return '대기';
      case 'praying': return '기도 중';
      case 'answered': return '응답됨';
      case 'completed': return '완료';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* 기도 요청 상태 수정 폼 */}
      {editingId && (
        <Card>
          <CardHeader>
            <CardTitle>기도 요청 관리</CardTitle>
            <CardDescription>
              기도 요청의 상태를 업데이트하고 관리자 노트를 추가하세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="status">상태</Label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="pending">대기</option>
                  <option value="praying">기도 중</option>
                  <option value="answered">응답됨</option>
                  <option value="completed">완료</option>
                </select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="adminNotes">관리자 노트</Label>
              <Textarea
                id="adminNotes"
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
                placeholder="내부적으로 기록할 노트를 작성하세요..."
                rows={3}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSubmit}>
                업데이트
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                취소
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 기도 요청 목록 */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              기도 요청 관리
            </CardTitle>
            <CardDescription>
              교회에 접수된 기도 요청을 관리하고 상태를 업데이트하세요.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center py-4">로딩 중...</p>
          ) : (
            <>
              {/* 검색 및 필터링 UI */}
              <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="제목이나 내용으로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="전체">모든 분류</option>
                  <option value="건강">건강</option>
                  <option value="가족">가족</option>
                  <option value="직장">직장/학업</option>
                  <option value="신앙">신앙</option>
                  <option value="관계">인간관계</option>
                  <option value="경제">경제</option>
                  <option value="감사">감사</option>
                  <option value="기타">기타</option>
                </select>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="전체">모든 상태</option>
                  <option value="pending">대기</option>
                  <option value="praying">기도 중</option>
                  <option value="answered">응답됨</option>
                  <option value="completed">완료</option>
                </select>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>제목</TableHead>
                    <TableHead>분류</TableHead>
                    <TableHead>이름</TableHead>
                    <TableHead>연락처</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>긴급</TableHead>
                    <TableHead>비공개</TableHead>
                    <TableHead>요청일</TableHead>
                    <TableHead>관리</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPrayerRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">
                        <div>
                          <div className="font-medium">
                            {request.is_anonymous && <span className="text-gray-500">[익명] </span>}
                            {request.title}
                          </div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {request.content}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                          {request.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        {request.is_anonymous ? "익명" : (request.name || "-")}
                      </TableCell>
                      <TableCell>
                        {request.is_anonymous ? "-" : (request.phone_number || "-")}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                          {getStatusText(request.status)}
                        </span>
                      </TableCell>
                      <TableCell>
                        {request.is_urgent && <span className="text-red-500">🔴</span>}
                      </TableCell>
                      <TableCell>
                        {request.is_private && <span className="text-blue-500">🔒</span>}
                      </TableCell>
                      <TableCell>
                        {new Date(request.created_at).toLocaleDateString('ko-KR')}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(request)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteClick(request.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredPrayerRequests.length === 0 && (
                <p className="text-center py-8 text-gray-500">기도 요청이 없습니다.</p>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* 삭제 확인 다이얼로그 */}
      <ConfirmDialog
        open={deleteConfirmOpen}
        onOpenChange={setDeleteConfirmOpen}
        onConfirm={handleDelete}
        title="기도 요청 삭제"
        description="이 기도 요청을 정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
      />
    </div>
  );
}

// 휴지통 관리 컴포넌트
function TrashManager({ adminPassword }: { adminPassword: string }) {
  const [trashedItems, setTrashedItems] = useState<{
    notices: Notice[];
    sermons: Sermon[];
    events: Event[];
  }>({
    notices: [],
    sermons: [],
    events: []
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'notices' | 'sermons' | 'events'>('notices');

  // 휴지통 데이터 불러오기
  const fetchTrashedItems = async () => {
    try {
      setLoading(true);
      
      // 공지사항 휴지통
      const noticesRes = await fetch('/api/notices?deleted=true');
      const noticesData = await noticesRes.json();
      
      // 설교 휴지통
      const sermonsRes = await fetch('/api/sermons?deleted=true');
      const sermonsData = await sermonsRes.json();
      
      // 이벤트 휴지통
      const eventsRes = await fetch('/api/events?deleted=true');
      const eventsData = await eventsRes.json();
      
      setTrashedItems({
        notices: noticesData.data || [],
        sermons: sermonsData.data || [],
        events: eventsData.data || []
      });
    } catch (error) {
      console.error('Error fetching trashed items:', error);
      alert('휴지통 데이터를 불러오는데 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrashedItems();
  }, []);

  // 복구 처리
  const handleRestore = async (type: 'notices' | 'sermons' | 'events', id: number) => {
    if (!confirm('이 항목을 복구하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/${type}/restore?id=${id}`, {
        method: 'PUT',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        alert('항목이 복구되었습니다.');
        fetchTrashedItems();
      } else {
        alert('복구에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error restoring item:', error);
      alert('복구 중 오류가 발생했습니다.');
    }
  };

  // 영구 삭제
  const handlePermanentDelete = async (type: 'notices' | 'sermons' | 'events', id: number) => {
    if (!confirm('정말로 영구 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return;

    try {
      const response = await fetch(`/api/${type}?id=${id}&permanent=true`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (response.ok) {
        alert('항목이 영구 삭제되었습니다.');
        fetchTrashedItems();
      } else {
        alert('삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting permanently:', error);
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  const currentItems = trashedItems[activeTab];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>휴지통</CardTitle>
          <CardDescription>
            삭제된 항목들을 관리합니다. 30일 후 자동으로 영구 삭제됩니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'notices' | 'sermons' | 'events')}>
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="notices">
                공지사항 ({trashedItems.notices.length})
              </TabsTrigger>
              <TabsTrigger value="sermons">
                설교 ({trashedItems.sermons.length})
              </TabsTrigger>
              <TabsTrigger value="events">
                이벤트 ({trashedItems.events.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              {loading ? (
                <p className="text-center py-4">불러오는 중...</p>
              ) : currentItems.length === 0 ? (
                <p className="text-center py-8 text-gray-500">휴지통이 비어있습니다.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>제목</TableHead>
                      <TableHead>삭제일</TableHead>
                      <TableHead>자동 삭제까지</TableHead>
                      <TableHead className="text-right">관리</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentItems.map((item) => {
                      const deletedAt = new Date(item.deleted_at || '');
                      const autoDeleteDate = new Date(deletedAt);
                      autoDeleteDate.setDate(autoDeleteDate.getDate() + 30);
                      const daysLeft = Math.ceil((autoDeleteDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                      
                      return (
                        <TableRow key={item.id}>
                          <TableCell>{(item as Notice | Sermon | Event).title}</TableCell>
                          <TableCell>{deletedAt.toLocaleDateString('ko-KR')}</TableCell>
                          <TableCell>
                            <span className={daysLeft < 7 ? 'text-red-500' : ''}>
                              {daysLeft}일
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleRestore(activeTab, item.id)}
                            >
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handlePermanentDelete(activeTab, item.id)}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </TabsContent>
          </Tabs>
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