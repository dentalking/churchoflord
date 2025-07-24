import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Heart, Download } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "말씀 묵상",
  description: "주님의교회 주간 말씀 묵상과 성경 공부 자료를 제공합니다. 매일 말씀과 함께하는 경건의 시간을 가져보세요.",
  keywords: "말씀 묵상, 성경 공부, 큐티, 경건의 시간, 주님의교회",
};

// 현재 주간 말씀 데이터 (실제로는 API에서 가져올 수 있음)
const currentWeekMeditation = {
  week: "2025년 7월 4주차",
  theme: "주 안에서 누리는 참 평안",
  verse: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라",
  reference: "요한복음 14:27",
  description: "세상의 염려와 두려움 속에서도 주님이 주시는 참된 평안을 누리며 살아가는 방법을 묵상합니다."
};

const weeklyMeditations = [
  {
    date: "월요일",
    title: "하나님의 평안의 약속",
    verse: "여호와는 자기 백성에게 힘을 주심이여 여호와는 자기 백성에게 평강의 복을 주시리로다",
    reference: "시편 29:11",
    meditation: "하나님은 우리에게 힘과 함께 평강을 주십니다. 세상의 어려움 속에서도 하나님이 주시는 힘과 평안을 의지할 수 있습니다."
  },
  {
    date: "화요일", 
    title: "마음의 평안을 지키는 법",
    verse: "너는 마음을 다하여 여호와를 의지하고 네 명철을 의지하지 말라",
    reference: "잠언 3:5",
    meditation: "우리 자신의 지혜보다 하나님을 의지할 때 참된 평안을 얻을 수 있습니다. 하나님께 모든 것을 맡기는 신앙이 필요합니다."
  },
  {
    date: "수요일",
    title: "염려를 맡기는 삶",
    verse: "너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라",
    reference: "베드로전서 5:7",
    meditation: "모든 염려와 걱정을 주님께 맡길 때 우리는 자유로워집니다. 하나님이 우리를 돌보신다는 확신을 가지고 살아가세요."
  },
  {
    date: "목요일",
    title: "기도 속에서 찾는 평안",
    verse: "아무것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라",
    reference: "빌립보서 4:6",
    meditation: "기도는 우리의 마음을 평안케 하는 가장 확실한 방법입니다. 감사함으로 하나님께 나아가는 기도의 능력을 경험하세요."
  },
  {
    date: "금요일",
    title: "말씀 안에서 누리는 평안",
    verse: "이 모든 말씀을 마리아는 마음에 간직하고 생각하니라",
    reference: "누가복음 2:19",
    meditation: "마리아처럼 하나님의 말씀을 마음에 간직하고 묵상할 때 우리는 세상이 줄 수 없는 평안을 누릴 수 있습니다."
  },
  {
    date: "토요일",
    title: "안식 중에 누리는 평안",
    verse: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라",
    reference: "마태복음 11:28",
    meditation: "주님은 우리의 모든 수고와 무거운 짐을 아시고 참된 안식을 주십니다. 주님 안에서 진정한 쉼을 얻으세요."
  },
  {
    date: "일요일",
    title: "예배 중에 경험하는 평안",
    verse: "그들이 떡을 떼며 기도하기를 전혀 힘쓰니라",
    reference: "사도행전 2:42",
    meditation: "공동체와 함께 드리는 예배와 기도 속에서 하나님의 임재와 평안을 경험합니다. 함께 모여 예배하는 은혜를 누리세요."
  }
];

export default function MeditationPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* 페이지 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">말씀 묵상</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            매일 하나님의 말씀과 함께하는 경건의 시간<br />
            "사람이 떡으로만 살 것이 아니요 하나님의 입으로부터 나오는 모든 말씀으로 살 것이라"
          </p>
        </div>

        {/* 이번 주 말씀 */}
        <div className="mb-12">
          <Card className="border-2 border-slate-300 bg-slate-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">{currentWeekMeditation.theme}</CardTitle>
              <CardDescription className="text-lg">{currentWeekMeditation.week}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white rounded-lg p-6 mb-6">
                <blockquote className="text-lg italic text-slate-700 leading-relaxed mb-4">
                  "{currentWeekMeditation.verse}"
                </blockquote>
                <cite className="text-slate-600 font-medium">- {currentWeekMeditation.reference} -</cite>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {currentWeekMeditation.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 일별 묵상 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">주간 묵상 일정</h2>
          <div className="grid grid-cols-1 gap-6">
            {weeklyMeditations.map((meditation, index) => (
              <Card key={index} className="border border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-600 font-bold text-sm">{meditation.date}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{meditation.title}</h3>
                      <div className="bg-slate-50 rounded-lg p-4 mb-3">
                        <p className="text-slate-700 italic leading-relaxed">"{meditation.verse}"</p>
                        <p className="text-slate-600 text-sm mt-2">- {meditation.reference} -</p>
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed">{meditation.meditation}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 묵상 가이드 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">묵상 가이드</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">묵상하는 방법</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <p><strong>정해진 시간에</strong> 조용한 장소에서 마음을 준비합니다</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <p><strong>기도로 시작하여</strong> 하나님의 도우심을 구합니다</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <p><strong>본문을 여러 번</strong> 천천히 읽어봅니다</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                    <p><strong>하나님이 주시는 감동</strong>을 기록하고 적용점을 찾습니다</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-slate-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                    <p><strong>감사 기도로 마무리</strong>하며 하루를 시작합니다</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">묵상 질문들</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-slate-400 pl-3">
                    <p className="font-medium text-slate-900">하나님은 어떤 분이신가?</p>
                    <p className="text-slate-600">본문에서 하나님의 성품과 속성을 발견해보세요</p>
                  </div>
                  <div className="border-l-4 border-slate-400 pl-3">
                    <p className="font-medium text-slate-900">나는 어떤 존재인가?</p>
                    <p className="text-slate-600">본문이 나에 대해 말하는 것은 무엇인가요?</p>
                  </div>
                  <div className="border-l-4 border-slate-400 pl-3">
                    <p className="font-medium text-slate-900">무엇을 순종해야 하는가?</p>
                    <p className="text-slate-600">오늘 실천할 수 있는 구체적인 적용점을 찾아보세요</p>
                  </div>
                  <div className="border-l-4 border-slate-400 pl-3">
                    <p className="font-medium text-slate-900">무엇을 기도할까?</p>
                    <p className="text-slate-600">본문을 통해 받은 은혜로 기도제목을 정해보세요</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 추가 자료 */}
        <div className="text-center bg-slate-50 rounded-lg p-8 border border-slate-200">
          <h3 className="text-xl font-bold mb-4">더 깊은 말씀 생활을 위해</h3>
          <p className="text-slate-600 mb-6">
            체계적인 성경 공부와 제자훈련을 통해 더욱 풍성한 말씀 생활을 경험하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/discipleship">제자훈련 알아보기</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/small-groups">소그룹 성경공부</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">묵상 나눔 신청</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}