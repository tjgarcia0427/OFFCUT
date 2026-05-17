import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-display text-[20px] font-bold tracking-[-0.02em]"
        >
          OFFCUT<span className="text-signal">.</span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.12em] md:flex">
          <Link href="/how-it-works" className="hover:text-signal">
            How it works
          </Link>
          <Link href="/#roster" className="hover:text-signal">
            Designers
          </Link>
          <Link href="/#open-briefs" className="hover:text-signal">
            Open briefs
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/apply" variant="ghost" className="hidden md:inline-flex">
            For designers
          </Button>
          <Button href="/brief" arrow>
            Brief a piece
          </Button>
        </div>
      </div>
    </header>
  );
}
