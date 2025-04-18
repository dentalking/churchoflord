import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export function MainNav() {
  return (
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
          <Link href="/directions" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">오시는 길</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="font-medium">문의</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}