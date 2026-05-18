import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Links — OFFCUT",
  description:
    "OFFCUT: brief a piece, apply as a designer, see how it works.",
};

const LINKS = [
  {
    title: "Brief a piece",
    sub: "Tell a designer what you want made. 5 minutes.",
    href: "/brief",
    tag: "FOR BUYERS",
  },
  {
    title: "Apply as a designer",
    sub: "Join the first cohort. 85% revenue share. No fees on first 3.",
    href: "/apply",
    tag: "FOR DESIGNERS",
  },
  {
    title: "How it works",
    sub: "From brief to delivered piece — the long version.",
    href: "/how-it-works",
    tag: "EXPLAINER",
  },
  {
    title: "Email us",
    sub: "Press, partnerships, anything else.",
    href: "mailto:hello@joinoffcut.com",
    tag: "CONTACT",
  },
];

export default function LinksPage() {
  return (
    <main className="paper-grain relative flex min-h-screen flex-col items-center bg-paper px-5 py-12 md:px-8 md:py-16">
      <div className="w-full max-w-[520px]">
        <header className="mb-10 text-center">
          <Link
            href="/"
            className="inline-block font-display text-[40px] font-bold leading-none tracking-[-0.03em] md:text-[52px]"
          >
            OFFCUT<span className="text-signal">.</span>
          </Link>
          <p className="mt-4 font-sans text-[15px] leading-relaxed text-ink-2">
            Commission platform for independent streetwear designers.
            <br />
            One brief. One designer. One-of-one.
          </p>
        </header>

        <ul className="flex flex-col gap-3">
          {LINKS.map((l) => {
            const external = l.href.startsWith("mailto:");
            const Comp = external ? "a" : Link;
            return (
              <li key={l.href}>
                <Comp
                  href={l.href}
                  className="group flex items-center justify-between gap-4 border border-line bg-paper px-5 py-5 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted group-hover:text-signal">
                      {l.tag}
                    </span>
                    <span className="font-display text-[20px] font-semibold leading-tight tracking-[-0.01em]">
                      {l.title}
                    </span>
                    <span className="font-sans text-[13.5px] leading-snug text-ink-2 group-hover:text-paper/70">
                      {l.sub}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2}
                    className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Comp>
              </li>
            );
          })}
        </ul>

        <footer className="mt-12 flex flex-col items-center gap-2 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          <span>© {new Date().getFullYear()} OFFCUT</span>
          <span>Made one at a time.</span>
        </footer>
      </div>
    </main>
  );
}
