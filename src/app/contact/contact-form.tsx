"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

// 유효성 검사 스키마
const formSchema = z.object({
  name: z.string()
    .min(2, { message: "이름은 최소 2자 이상이어야 합니다." })
    .max(50, { message: "이름은 50자를 초과할 수 없습니다." }),
  email: z.string()
    .email({ message: "올바른 이메일 형식이 아닙니다." })
    .min(1, { message: "이메일을 입력해주세요." }),
  phone: z.string()
    .regex(/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/, { 
      message: "올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)" 
    }),
  type: z.enum(["general", "visit", "smallgroup", "discipleship", "mission", "beantree"], {
    required_error: "문의 유형을 선택해주세요.",
  }),
  message: z.string()
    .min(10, { message: "문의 내용은 최소 10자 이상이어야 합니다." })
    .max(1000, { message: "문의 내용은 1000자를 초과할 수 없습니다." }),
});

// 타입 정의
type FormData = z.infer<typeof formSchema>;

const inquiryTypes = [
  { value: "general", label: "일반 문의" },
  { value: "visit", label: "방문 예약" },
  { value: "smallgroup", label: "소그룹 참여" },
  { value: "discipleship", label: "제자훈련" },
  { value: "mission", label: "선교 참여" },
  { value: "beantree", label: "콩과나무로" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "general",
      message: "",
    },
    mode: "onChange", // 실시간 유효성 검사
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    
    try {
      // 실제로는 여기서 API 호출이나 이메일 전송을 수행
      console.log(values);
      
      // 시뮬레이션을 위한 딜레이
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("문의 전송 실패:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="text-center space-y-4">
            <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold">문의가 전송되었습니다!</h3>
            <p className="text-gray-600">
              빠른 시간 내에 답변 드리겠습니다. 감사합니다.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              새 문의하기
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>온라인 문의 양식</CardTitle>
        <CardDescription>
          아래 양식을 작성하여 문의사항을 남겨주세요. 
          빠른 시간 내에 답변 드리겠습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 이름 필드 */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름 <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 이메일 필드 */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일 <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="example@email.com" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    답변을 받으실 이메일 주소를 입력해주세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 전화번호 필드 */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>전화번호 <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="010-1234-5678" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 문의 유형 필드 */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>문의 유형 <span className="text-red-500">*</span></FormLabel>
                  <select
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    {...field}
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 문의 내용 필드 */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>문의 내용 <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="문의하실 내용을 자세히 작성해주세요." 
                      className="resize-none min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value.length}/1000자
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => form.reset()}
                disabled={isSubmitting}
              >
                초기화
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting || !form.formState.isValid}
              >
                {isSubmitting ? "전송 중..." : "문의 전송"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}