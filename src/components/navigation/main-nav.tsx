"use client";

import { useState } from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageSquare } from "lucide-react";

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navigation - 간소화된 메뉴 */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium px-4 py-2 hover:text-blue-600 transition-colors">
                  홈
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>교회소개</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <Link href="/about" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">교회 비전</div>
                      <p className="text-sm text-slate-600">우리가 추구하는 가치와 비전</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#pastors" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">목회자 소개</div>
                      <p className="text-sm text-slate-600">담임목사와 교역자를 소개합니다</p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>예배</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <Link href="/worship" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">예배 시간</div>
                      <p className="text-sm text-slate-600">주일예배, 새벽기도회 등 예배 안내</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sermons" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">설교 말씀</div>
                      <p className="text-sm text-slate-600">온라인으로 함께하는 예배</p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>성장</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <Link href="/discipleship" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">제자훈련</div>
                      <p className="text-sm text-slate-600">체계적인 성경공부와 양육 과정</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/meditation" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">말씀 묵상</div>
                      <p className="text-sm text-slate-600">매일 말씀과 함께하는 경건생활</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/small-groups" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">소그룹</div>
                      <p className="text-sm text-slate-600">함께 나누고 성장하는 모임</p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>참여</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <Link href="/notices" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">공지사항</div>
                      <p className="text-sm text-slate-600">교회 소식과 일정 안내</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/activities" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">교회 활동</div>
                      <p className="text-sm text-slate-600">콩과나무로 등 교회 활동</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/prayer" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">기도 요청</div>
                      <p className="text-sm text-slate-600">함께 기도해주세요</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/missions" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">선교</div>
                      <p className="text-sm text-slate-600">국내외 선교 사역</p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/directions" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium px-4 py-2 hover:text-blue-600 transition-colors">
                  오시는길
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            {/* CTA 버튼 */}
            <NavigationMenuItem className="ml-8">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium" 
                size="sm"
                asChild
              >
                <Link href="/contact?type=first-visit">
                  처음 방문
                </Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-2">
        {/* Mobile CTA */}
        <Button
          size="sm"
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-900"
          asChild
        >
          <Link href="/contact?type=first-visit">
            처음 방문
          </Link>
        </Button>

        {/* Menu Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMobileMenu}
          className="border-slate-300"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay - 간소화된 구조 */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-50 border-t overflow-y-auto">
          <div className="container py-6">
            <nav className="space-y-1">
              <Link 
                href="/" 
                className="block py-3 px-4 text-lg font-medium hover:bg-slate-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                홈
              </Link>
              
              {/* 교회소개 */}
              <div className="border-t pt-4 mt-4">
                <h3 className="px-4 text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  교회소개
                </h3>
                <Link 
                  href="/about" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  교회 비전
                </Link>
                <Link 
                  href="/about#pastors" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  목회자 소개
                </Link>
              </div>

              {/* 예배 */}
              <div className="border-t pt-4 mt-4">
                <h3 className="px-4 text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  예배
                </h3>
                <Link 
                  href="/worship" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  예배 시간
                </Link>
                <Link 
                  href="/sermons" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  설교 말씀
                </Link>
              </div>

              {/* 성장 */}
              <div className="border-t pt-4 mt-4">
                <h3 className="px-4 text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  성장
                </h3>
                <Link 
                  href="/discipleship" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  제자훈련
                </Link>
                <Link 
                  href="/meditation" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  말씀 묵상
                </Link>
                <Link 
                  href="/small-groups" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  소그룹
                </Link>
              </div>

              {/* 참여 */}
              <div className="border-t pt-4 mt-4">
                <h3 className="px-4 text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
                  참여
                </h3>
                <Link 
                  href="/notices" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  공지사항
                </Link>
                <Link 
                  href="/activities" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  교회 활동
                </Link>
                <Link 
                  href="/prayer" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  기도 요청
                </Link>
                <Link 
                  href="/missions" 
                  className="block py-2 px-4 ml-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  선교
                </Link>
              </div>

              <Link 
                href="/directions" 
                className="block py-3 px-4 text-lg font-medium hover:bg-slate-50 rounded-lg border-t mt-4 pt-4"
                onClick={() => setIsOpen(false)}
              >
                오시는길
              </Link>

              {/* Contact Info */}
              <div className="border-t pt-6 mt-6">
                <div className="px-4 space-y-4">
                  <Button 
                    className="w-full" 
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      문의하기
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    asChild
                  >
                    <Link href="tel:010-4162-2701" onClick={() => setIsOpen(false)}>
                      <Phone className="mr-2 h-4 w-4" />
                      010-4162-2701
                    </Link>
                  </Button>
                  
                  <div className="text-center text-sm text-slate-600 pt-2">
                    경주역에서 10분<br />
                    평온한 산속 교회
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}