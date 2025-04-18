import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">문의하기</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>문의 양식</CardTitle>
              <CardDescription>아래 양식을 작성하여 교회에 문의해주세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름 *</Label>
                    <Input id="name" placeholder="이름을 입력해주세요" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input id="phone" placeholder="연락 가능한 번호를 입력해주세요" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="이메일 주소를 입력해주세요" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">문의 유형 *</Label>
                  <select
                    id="inquiry-type"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                    required
                  >
                    <option value="">문의 유형을 선택해주세요</option>
                    <option value="예배방문">예배 방문 문의</option>
                    <option value="신도시초청">신도시 주민 초청 이벤트 참여</option>
                    <option value="콩과나무로">콩과나무로 제품 문의</option>
                    <option value="기타">기타 문의</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">문의 내용 *</Label>
                  <Textarea
                    id="message"
                    placeholder="문의하실 내용을 자세히 입력해주세요"
                    rows={5}
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="newtown" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="newtown"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      저는 경주역 신도시 입주민입니다.
                    </label>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      개인정보 수집 및 이용에 동의합니다. *
                    </label>
                    <p className="text-sm text-gray-500">
                      입력하신 정보는 문의 답변 및 안내를 위해서만 사용됩니다.
                    </p>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">문의하기</Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>연락처 안내</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">전화: 000-000-0000</p>
              <p className="mb-2">이메일: church@example.com</p>
              <p className="mb-2">주소: 경상북도 경주시 내남면 내외로 2175</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>방문 예약</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                주님의교회에 처음 방문하시는 분들을 위해 방문 예약 서비스를 제공하고 있습니다. 
                예약하시면 담당자가 맞이하여 교회를 안내해 드립니다.
              </p>
              <p className="mb-4">
                특히 경주역 신도시에서 오시는 분들을 위해 교회까지 안내도 가능합니다.
              </p>
              <Button variant="outline" className="w-full">방문 예약하기</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>새신자 상담</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                신앙생활에 대한 궁금증이나 상담이 필요하신 분들은 담임목사님 또는 
                협동목사님과의 상담 예약이 가능합니다.
              </p>
              <Button variant="outline" className="w-full">상담 예약하기</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}