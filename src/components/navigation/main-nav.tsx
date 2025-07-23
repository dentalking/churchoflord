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
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">홈</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>교회 소개</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <Link href="/about" className="block p-3 hover:bg-slate-100 rounded-md">
                      교회 역사 및 비전
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#pastors" className="block p-3 hover:bg-slate-100 rounded-md">
                      담임목사 및 교역자 소개
                    </Link>
                  </li>
                  <li>
                    <Link href="/about#ministry" className="block p-3 hover:bg-slate-100 rounded-md">
                      주요 사역
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/worship" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">예배 안내</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/sermons" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">설교 영상</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>양육</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px]">
                  <li>
                    <Link href="/discipleship" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">제자훈련</div>
                      <p className="text-sm text-slate-600">새가족반부터 사역훈련까지 체계적인 양육</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/small-groups" className="block p-3 hover:bg-slate-100 rounded-md">
                      <div className="font-medium mb-1">소그룹</div>
                      <p className="text-sm text-slate-600">구역 모임, 목장, 관심사별 소그룹</p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/notices" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">공지사항</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/activities" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">교회 활동</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/missions" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">선교</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/directions" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">오시는 길</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/newtown" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">신도시 주민</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">문의</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-2">
        {/* Quick Actions for Mobile */}
        <Button
          variant="outline"
          size="sm"
          asChild
          className="bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400"
        >
          <Link href="/contact" className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            문의
          </Link>
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-green-600 border-green-600 hover:bg-green-50"
        >
          <Link href="tel:010-4162-2701" className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            전화
          </Link>
        </Button>

        {/* Hamburger Menu Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMobileMenu}
          className="border-slate-300"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-50 border-t">
          <div className="container py-6">
            <nav className="space-y-4">
              <Link 
                href="/" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                홈
              </Link>
              
              <div className="space-y-2">
                <h3 className="font-medium text-slate-600 text-sm uppercase tracking-wide">교회 소개</h3>
                <Link 
                  href="/about" 
                  className="block py-2 pl-4 text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  교회 역사 및 비전
                </Link>
                <Link 
                  href="/about#pastors" 
                  className="block py-2 pl-4 text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  담임목사 및 교역자 소개
                </Link>
                <Link 
                  href="/about#ministry" 
                  className="block py-2 pl-4 text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  주요 사역
                </Link>
              </div>

              <Link 
                href="/worship" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                예배 안내
              </Link>

              <Link 
                href="/sermons" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                설교 영상
              </Link>

              <div className="space-y-2">
                <h3 className="font-medium text-slate-600 text-sm uppercase tracking-wide">양육</h3>
                <Link 
                  href="/discipleship" 
                  className="block py-2 pl-4 text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  제자훈련
                </Link>
                <Link 
                  href="/small-groups" 
                  className="block py-2 pl-4 text-slate-700"
                  onClick={() => setIsOpen(false)}
                >
                  소그룹
                </Link>
              </div>

              <Link 
                href="/notices" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                공지사항
              </Link>

              <Link 
                href="/activities" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                교회 활동
              </Link>

              <Link 
                href="/missions" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                선교
              </Link>

              <Link 
                href="/directions" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                오시는 길
              </Link>

              <Link 
                href="/newtown" 
                className="block py-2 text-lg font-medium text-green-600 bg-green-50 rounded-lg px-3"
                onClick={() => setIsOpen(false)}
              >
                🏠 신도시 주민 전용
              </Link>

              <Link 
                href="/contact" 
                className="block py-2 text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                문의하기
              </Link>

              {/* Mobile CTA Section */}
              <div className="pt-6 space-y-3 border-t border-slate-200">
                <h3 className="font-medium text-slate-600 text-sm uppercase tracking-wide">빠른 연락</h3>
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" 
                    asChild
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      카카오톡 채널 문의
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-green-600 border-green-600 hover:bg-green-50" 
                    asChild
                  >
                    <Link href="tel:010-4162-2701" onClick={() => setIsOpen(false)}>
                      <Phone className="mr-2 h-4 w-4" />
                      010-4162-2701
                    </Link>
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-slate-600">
                    경주역에서 10분 거리<br />
                    평온한 신앙의 쉼터
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}