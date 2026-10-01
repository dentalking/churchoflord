import Link from "next/link";
import { MainNav } from "./main-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md">
      <div className="container flex h-16 md:h-[4.5rem] items-center justify-between">
        <Link href="/" className="font-serif text-xl md:text-2xl font-medium tracking-tight text-stone-900">
          주님의교회
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
