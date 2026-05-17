import Link from "next/link";
import { ArrowUpRight, Scissors, MessageSquareQuote, Package, Hammer } from "lucide-react";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { Ticker } from "@/components/site/ticker";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Ticker
          items={[
            "Commission, not catalog",
            "One-of-one only",
            "85% to the designer",
            "Escrow-protected",
            "Independent labels only",
            "No drops, no waitlists",
          ]}
        />
        <Manifesto />
        <HowItWorks />
        <LiveBriefs />
        <Roster />
        <ForDesigners />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="paper-grain relative overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 pb-20 pt-12 md:grid-cols-12 md:px-8 md:pb-28 md:pt-16">
        <div className="col-span-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          <span className="flex items-center gap-2">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" />
            Vol. 001 / Open for commissions
          </span>
          <span className="hidden md:inline">
            EST. 2026 / BROOKLYN / INTERNET
          </span>
        </div>

        <div className="col-span-12 md:col-span-9">
          <h1 className="font-display text-[14vw] font-bold leading-[0.86] tracking-[-0.04em] md:text-[140px]">
            Stop
            <br />
            <span className="italic font-normal">scrolling.</span>
            <br />
            Start
            <br />
            <span className="text-signal">briefing.</span>
          </h1>
        </div>

        <aside className="col-span-12 flex flex-col gap-8 md:col-span-3 md:pt-2">
          <div>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              File 001
            </div>
            <p className="font-sans text-[16px] leading-relaxed text-ink-2">
              OFFCUT is a commission platform for independent streetwear
              designers. You write the brief. A designer makes it. Once. Yours.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-2 md:items-start">
            <Button href="/brief" arrow className="w-full md:w-auto">
              Brief a piece
            </Button>
            <Button href="/apply" variant="outline" className="w-full md:w-auto">
              I&apos;m a designer →
            </Button>
          </div>

          <dl className="grid grid-cols-3 gap-3 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted md:grid-cols-1 md:gap-4">
            <div>
              <dt>Designers</dt>
              <dd className="mt-1 font-display text-[24px] font-bold tracking-[-0.02em] text-ink">
                42
              </dd>
            </div>
            <div>
              <dt>Briefs filled</dt>
              <dd className="mt-1 font-display text-[24px] font-bold tracking-[-0.02em] text-ink">
                118
              </dd>
            </div>
            <div>
              <dt>Avg. lead time</dt>
              <dd className="mt-1 font-display text-[24px] font-bold tracking-[-0.02em] text-ink">
                23d
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-20 md:px-8 md:py-28">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            § Why this exists
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <p className="font-display text-[28px] font-medium leading-[1.15] tracking-[-0.015em] text-ink md:text-[40px]">
            Malls are out. Online stores sell you the same five hoodies. The
            mass market designs for a person who doesn&apos;t exist. Meanwhile a
            generation of incredible independent designers is stuck on
            Instagram, waiting for someone to slide into the DMs.
          </p>
          <p className="mt-8 max-w-3xl font-sans text-[17px] leading-[1.65] text-ink-2">
            OFFCUT is the missing middle. You describe what you actually want.
            A designer who can make it picks up the brief. You agree on price,
            timeline, fit. They make it. You wear it. Nobody else has one.
            That&apos;s the whole product.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: MessageSquareQuote,
      title: "Write a brief",
      body:
        "Describe what you want — references, fabric, fit, when you need it, what you'll pay. Plain language. Two paragraphs is enough.",
    },
    {
      n: "02",
      icon: Hammer,
      title: "Designers pitch",
      body:
        "Within 48 hours, matched designers send pitches: a moodboard, a price, a timeline, a sample of their past work.",
    },
    {
      n: "03",
      icon: Scissors,
      title: "Pick one. They make it.",
      body:
        "You pick the designer you want. We hold the deposit in escrow. They make your piece. You approve. Funds release.",
    },
    {
      n: "04",
      icon: Package,
      title: "Wear it. Only you.",
      body:
        "One-of-one. Photographed for the journal if you're into it. Nobody else gets the same piece. Ever.",
    },
  ];

  return (
    <section className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              § Mechanics
            </div>
            <h2 className="mt-3 font-display text-[44px] font-bold leading-[0.95] tracking-[-0.025em] md:text-[72px]">
              How a piece gets made.
            </h2>
          </div>
          <Link
            href="/how-it-works"
            className="hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] hover:text-signal md:inline-flex"
          >
            Read the long version
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col gap-5 bg-paper p-7 transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted group-hover:text-signal">
                  Step {s.n}
                </span>
                <s.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-ink group-hover:text-paper"
                />
              </div>
              <h3 className="font-display text-[26px] font-semibold leading-tight tracking-[-0.015em]">
                {s.title}
              </h3>
              <p className="font-sans text-[14.5px] leading-relaxed text-ink-2 group-hover:text-paper/80">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sampleBriefs = [
  {
    id: "BRF-118",
    title: "Carhartt-weight chore coat, oversized, raw selvedge denim",
    location: "Brooklyn, NY",
    budget: "$420–$650",
    timeline: "5 weeks",
    pitches: 7,
    posted: "2h ago",
    tags: ["Workwear", "Outerwear", "M"],
  },
  {
    id: "BRF-117",
    title: "Reworked vintage Champion crewneck — split panel, custom embroidery",
    location: "Tokyo, JP",
    budget: "$180–$240",
    timeline: "3 weeks",
    pitches: 11,
    posted: "5h ago",
    tags: ["Rework", "Embroidery"],
  },
  {
    id: "BRF-116",
    title: "Wide-leg cargo trouser, deadstock ripstop, drawstring waist",
    location: "London, UK",
    budget: "$260–$340",
    timeline: "4 weeks",
    pitches: 4,
    posted: "1d ago",
    tags: ["Bottoms", "Deadstock"],
  },
  {
    id: "BRF-115",
    title: "One-off graphic tee — original artwork, heavyweight cotton",
    location: "Los Angeles, CA",
    budget: "$90–$140",
    timeline: "2 weeks",
    pitches: 14,
    posted: "1d ago",
    tags: ["Top", "Graphic"],
  },
];

function LiveBriefs() {
  return (
    <section id="open-briefs" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" />
              Live briefs
            </div>
            <h2 className="mt-3 font-display text-[44px] font-bold leading-[0.95] tracking-[-0.025em] md:text-[72px]">
              Open commissions
              <span className="text-signal">.</span>
            </h2>
          </div>
          <Link
            href="/brief"
            className="hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] hover:text-signal md:inline-flex"
          >
            Brief one yourself
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <ul className="border-y border-line">
          {sampleBriefs.map((b) => (
            <li
              key={b.id}
              className="group grid grid-cols-12 items-center gap-4 border-b border-line px-2 py-5 transition-colors hover:bg-paper-2 md:px-4"
            >
              <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:col-span-1">
                {b.id}
              </span>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-[18px] font-semibold leading-snug tracking-[-0.01em] md:text-[20px]">
                  {b.title}
                </h3>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 md:col-span-2">
                {b.location}
              </span>
              <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 md:col-span-2">
                {b.budget} · {b.timeline}
              </span>
              <div className="col-span-12 flex items-center justify-between md:col-span-2 md:justify-end md:gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  {b.pitches} pitches · {b.posted}
                </span>
                <ArrowUpRight
                  size={16}
                  className="hidden text-ink-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal md:block"
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-3 md:hidden">
          <Button href="/brief" arrow variant="outline">
            Brief one yourself
          </Button>
        </div>
      </div>
    </section>
  );
}

const designers = [
  {
    handle: "@hiraeth.studio",
    name: "Mara Okafor",
    city: "Brooklyn",
    discipline: "Reworked workwear · denim",
    rate: "from $220",
    accent: "bg-[#1a1a1a]",
    swatches: ["#d4ff4f", "#1a1a1a", "#7a4a2b"],
  },
  {
    handle: "@kuro.ito",
    name: "Ren Itō",
    city: "Tokyo",
    discipline: "Hand-dyed tops · sashiko",
    rate: "from $140",
    accent: "bg-[#2a3a55]",
    swatches: ["#2a3a55", "#f4f0e8", "#0a0a0a"],
  },
  {
    handle: "@sebastian.sews",
    name: "Sebastian Mora",
    city: "Mexico City",
    discipline: "Pattern-cut outerwear",
    rate: "from $380",
    accent: "bg-[#7a2a1a]",
    swatches: ["#ff3d00", "#7a2a1a", "#0a0a0a"],
  },
  {
    handle: "@offgrid.co",
    name: "Iris Vance",
    city: "Berlin",
    discipline: "Technical bottoms · deadstock",
    rate: "from $260",
    accent: "bg-[#4a6a3a]",
    swatches: ["#4a6a3a", "#a8a59a", "#0a0a0a"],
  },
];

function Roster() {
  return (
    <section id="roster" className="scroll-mt-16 border-b border-line bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60">
              § The roster
            </div>
            <h2 className="mt-3 font-display text-[44px] font-bold leading-[0.95] tracking-[-0.025em] md:text-[72px]">
              42 makers.
              <br />
              <span className="text-signal">No middlemen.</span>
            </h2>
          </div>
          <Link
            href="/apply"
            className="hidden items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] hover:text-signal md:inline-flex"
          >
            Apply to the roster
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-paper/20 sm:grid-cols-2 lg:grid-cols-4">
          {designers.map((d) => (
            <article
              key={d.handle}
              className="group flex flex-col bg-ink-2 transition-colors hover:bg-paper hover:text-ink"
            >
              <div className={`relative h-48 ${d.accent} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[64px] font-bold leading-none tracking-[-0.04em] text-paper/10 group-hover:text-ink/10">
                    {d.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {d.swatches.map((c) => (
                    <span
                      key={c}
                      className="h-3 w-3 border border-paper/30"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-paper/50 group-hover:text-ink/50">
                  <span>{d.handle}</span>
                  <span>{d.city}</span>
                </div>
                <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.015em]">
                  {d.name}
                </h3>
                <p className="font-sans text-[13.5px] text-paper/70 group-hover:text-ink/70">
                  {d.discipline}
                </p>
                <div className="mt-auto flex items-center justify-between pt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-paper/60 group-hover:text-ink/60">
                  <span>{d.rate}</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForDesigners() {
  const props = [
    {
      n: "01",
      title: "Keep 85%",
      body:
        "Standard 15% platform fee. No listing fees. No subscription. Withdraw whenever.",
    },
    {
      n: "02",
      title: "Get briefs, not requests",
      body:
        "Buyers write a real brief with references, budget, and timeline before you see it. Tire-kickers don't make it through.",
    },
    {
      n: "03",
      title: "Escrow on day one",
      body:
        "Deposit is in our hands before you cut fabric. You make the piece. You get paid. Nobody ghosts.",
    },
    {
      n: "04",
      title: "Own your story",
      body:
        "Your profile, your past work, your voice. We send people to your page, not ours. You build a following on the platform.",
    },
  ];

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-5 py-20 md:px-8 md:py-32">
        <div className="col-span-12 md:col-span-5">
          <div className="md:sticky md:top-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              § For designers
            </div>
            <h2 className="mt-3 font-display text-[44px] font-bold leading-[0.92] tracking-[-0.025em] md:text-[88px]">
              Get paid to make
              <br />
              <span className="italic font-normal">what you actually</span>
              <br />
              want to make.
            </h2>
            <p className="mt-6 max-w-md font-sans text-[16px] leading-relaxed text-ink-2">
              We&apos;re inviting the first 50 designers onto the platform. No
              fees on your first three commissions. You set your scope, your
              rates, your style.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/apply" arrow>
                Apply to join
              </Button>
              <Button href="/how-it-works" variant="outline">
                How it works
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <ul className="divide-y divide-line border-y border-line">
            {props.map((p) => (
              <li key={p.n} className="grid grid-cols-12 gap-4 py-7">
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
                  {p.n}
                </span>
                <div className="col-span-10">
                  <h3 className="font-display text-[26px] font-semibold leading-tight tracking-[-0.015em] md:text-[32px]">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-sans text-[15.5px] leading-relaxed text-ink-2">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Why not just DM a designer on Instagram?",
    a: "You can. It usually ends in unread messages, ghosting, and no recourse if a piece never arrives. OFFCUT holds the deposit in escrow, vets the designer, and gives you contractual delivery dates. The designer gets a real brief instead of a one-line DM.",
  },
  {
    q: "How much does a piece cost?",
    a: "Buyer sets a budget range when they brief. Designers pitch with a firm price. Most pieces land between $90 (custom tee) and $700 (heavy outerwear or denim). You agree before any money moves.",
  },
  {
    q: "What if the piece is wrong?",
    a: "Every commission has a built-in revision round and a 14-day satisfaction window. If a designer ships something materially different from the agreed pitch, our resolution team intervenes and you don't pay.",
  },
  {
    q: "Can I commission anything?",
    a: "Streetwear-adjacent only for now — tops, bottoms, outerwear, reworked vintage, custom graphics, denim, accessories. No formalwear, no bridal, no commercial production runs.",
  },
  {
    q: "I'm a designer. What does it take to get in?",
    a: "Right now: portfolio review and one sample commission. We're curating, not aggregating. If your work is distinctive and your process is solid, you're in.",
  },
];

function FAQ() {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              § Common questions
            </div>
          </div>
          <h2 className="col-span-12 font-display text-[44px] font-bold leading-[0.95] tracking-[-0.025em] md:col-span-9 md:text-[72px]">
            Things people ask.
          </h2>
        </div>

        <div className="border-t border-line">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group border-b border-line py-6"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <h3 className="font-display text-[20px] font-medium tracking-[-0.01em] md:text-[26px]">
                  {f.q}
                </h3>
                <span className="mt-1 font-mono text-[20px] leading-none text-signal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl font-sans text-[16px] leading-relaxed text-ink-2">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 border border-line bg-ink p-8 text-paper md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60">
              Ready
            </div>
            <p className="mt-2 font-display text-[36px] font-bold leading-tight tracking-[-0.02em] md:text-[48px]">
              Brief a piece, or build with us.
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
            <Button
              href="/apply"
              variant="ghost"
              className="border-paper text-paper hover:bg-paper hover:text-ink"
            >
              Apply as designer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
