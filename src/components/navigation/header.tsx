import Link from "next/link";
import { MainNav } from "./main-nav";

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          주님의교회
        </Link>
        <MainNav />
      </div>
    </header>
  );
}