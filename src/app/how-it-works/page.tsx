import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "How it works — OFFCUT",
  description:
    "The long version. How a brief becomes a piece, from filing to delivery.",
};

const phases = [
  {
    n: "01",
    title: "File a brief",
    sub: "5 minutes. Costs nothing.",
    lines: [
      "You describe what you want. Be specific about fabric, fit, references, and budget.",
      "A real brief is two paragraphs and a budget range. Anything shorter and designers will pass.",
      "You don't need to know what fabric weight is or what 'boxy' means — link references and we'll do the translation work.",
    ],
  },
  {
    n: "02",
    title: "Designers pitch (within 48h)",
    sub: "You get matched. They pitch.",
    lines: [
      "We surface your brief to designers whose past work fits your vibe. They opt in to pitch.",
      "Each pitch contains: a quick moodboard or sketch, firm price, firm timeline, and links to past pieces in a similar lane.",
      "You typically get 3–7 pitches. Sometimes more if your brief hits a nerve.",
    ],
  },
  {
    n: "03",
    title: "You pick one",
    sub: "One brief, one designer.",
    lines: [
      "You're not running a bidding war. You're choosing a maker. Look at their past work, their pitch, and their tone.",
      "Message any designer to ask questions before deciding. No obligation.",
      "Once you accept, that's the contract: agreed scope, agreed price, agreed delivery date.",
    ],
  },
  {
    n: "04",
    title: "Deposit goes into escrow",
    sub: "50% up front. Held by us.",
    lines: [
      "You pay a 50% deposit when you accept a pitch. It sits in escrow — neither party can touch it.",
      "This is the part Instagram DMs can't do. It's how we make commissioning a stranger online not feel insane.",
      "The remaining 50% is released when you approve the finished piece.",
    ],
  },
  {
    n: "05",
    title: "They make it",
    sub: "Updates along the way.",
    lines: [
      "Designer shares progress at agreed milestones: pattern, fabric sourced, first cut, finishing.",
      "One round of revisions is built into every commission, free.",
      "If something's drifting from the original pitch, you flag it early and it gets corrected before it's a finished piece.",
    ],
  },
  {
    n: "06",
    title: "Delivery & approval",
    sub: "14-day window. Zero gotchas.",
    lines: [
      "Piece ships tracked. You have 14 days from delivery to approve or flag.",
      "Approve → balance releases. Flag → our resolution team intervenes within 48 hours.",
      "If the piece is materially different from the agreed pitch, you don't pay the balance. That's it. No fine print.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              FILE 004 / MECHANICS
            </div>
            <h1 className="mt-3 font-display text-[14vw] font-bold leading-[0.88] tracking-[-0.04em] md:text-[140px]">
              The
              <br />
              <span className="italic font-normal">long</span> version
              <span className="text-signal">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-[18px] leading-relaxed text-ink-2">
              Custom is usually messy: DMs that go unread, no contracts, no
              recourse when a piece never arrives. OFFCUT is built to make
              commissioning feel as safe as ordering off a shelf. Here&apos;s
              exactly how.
            </p>
          </div>
        </section>

        <section className="border-b border-line bg-paper-2">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
            <ol className="grid grid-cols-1 gap-px overflow-hidden border border-line">
              {phases.map((p) => (
                <li
                  key={p.n}
                  className="grid grid-cols-12 gap-6 bg-paper p-7 md:p-10"
                >
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                      Phase {p.n}
                    </div>
                    <h2 className="mt-2 font-display text-[34px] font-bold leading-[0.95] tracking-[-0.02em] md:text-[44px]">
                      {p.title}
                    </h2>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                      {p.sub}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <ul className="space-y-4 font-sans text-[16px] leading-relaxed text-ink-2">
                      {p.lines.map((l, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 inline-block h-1 w-3 shrink-0 bg-ink" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-5 py-20 md:px-8 md:py-28">
            <div className="col-span-12 md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                § The money
              </div>
              <h2 className="mt-3 font-display text-[44px] font-bold leading-[0.95] tracking-[-0.025em] md:text-[64px]">
                What it costs.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <dl className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  {
                    t: "Submitting a brief",
                    v: "Free",
                    d: "No fee to brief. No fee to receive pitches.",
                  },
                  {
                    t: "Platform fee",
                    v: "15%",
                    d: "Taken from the designer's payout. Buyer pays the quoted price, no markup on top.",
                  },
                  {
                    t: "Deposit",
                    v: "50%",
                    d: "On accepting a pitch. Held in escrow. Released on approval.",
                  },
                  {
                    t: "Cancellation",
                    v: "0% before cut",
                    d: "Cancel before the designer cuts fabric: full refund. After: scoped per-pitch.",
                  },
                ].map((r) => (
                  <div key={r.t} className="border border-line bg-paper p-6">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {r.t}
                    </dt>
                    <dd className="mt-2 font-display text-[40px] font-bold leading-none tracking-[-0.025em] text-ink">
                      {r.v}
                    </dd>
                    <p className="mt-3 font-sans text-[14px] leading-relaxed text-ink-2">
                      {r.d}
                    </p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
            <div className="flex flex-col items-start gap-6 border border-line bg-ink p-8 text-paper md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60">
                  Next
                </div>
                <p className="mt-2 font-display text-[36px] font-bold leading-tight tracking-[-0.02em] md:text-[52px]">
                  File your first brief.
                </p>
                <p className="mt-2 max-w-md font-sans text-[15px] leading-relaxed text-paper/70">
                  Costs nothing. You only pay if you accept a pitch you like.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button
                  href="/brief"
                  arrow
                  className="border-paper bg-paper text-ink hover:bg-signal"
                >
                  Brief a piece
                </Button>
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center gap-1 border border-paper px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-paper hover:bg-paper hover:text-ink"
                >
                  I&apos;m a designer
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
