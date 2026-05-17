import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { BriefForm } from "./brief-form";

export const metadata = {
  title: "Brief a piece — OFFCUT",
  description:
    "Tell a designer what you want made. References, fabric, fit, budget, timeline. Two paragraphs is enough.",
};

export default function BriefPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 border-b border-line">
        <div className="mx-auto max-w-[1100px] px-5 py-14 md:px-8 md:py-20">
          <Header />
          <div className="mt-12 grid grid-cols-12 gap-10">
            <aside className="col-span-12 md:col-span-4">
              <SideNote />
            </aside>
            <div className="col-span-12 md:col-span-8">
              <BriefForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="border-b border-line pb-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        FILE 002 / NEW COMMISSION BRIEF
      </div>
      <h1 className="mt-3 font-display text-[64px] font-bold leading-[0.92] tracking-[-0.035em] md:text-[110px]">
        Brief a piece<span className="text-signal">.</span>
      </h1>
      <p className="mt-4 max-w-2xl font-sans text-[17px] leading-relaxed text-ink-2">
        Tell us what you want made. Be specific where it matters (fabric, fit,
        deadline) and loose where it doesn&apos;t (we don&apos;t need a brand
        story). Designers will pitch within 48 hours.
      </p>
    </div>
  );
}

function SideNote() {
  return (
    <div className="md:sticky md:top-24">
      <div className="border border-line bg-paper-2 p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          A good brief
        </div>
        <ul className="mt-4 space-y-3 font-sans text-[14.5px] leading-relaxed text-ink-2">
          <li className="flex gap-2">
            <span className="text-signal">✕</span>
            Says what the piece IS in one sentence
          </li>
          <li className="flex gap-2">
            <span className="text-signal">✕</span>
            Names 2–3 reference pieces or designers
          </li>
          <li className="flex gap-2">
            <span className="text-signal">✕</span>
            Calls out fabric or weight preferences
          </li>
          <li className="flex gap-2">
            <span className="text-signal">✕</span>
            Includes a real budget range
          </li>
          <li className="flex gap-2">
            <span className="text-signal">✕</span>
            Sets a realistic timeline (3+ weeks)
          </li>
        </ul>

        <div className="mt-6 border-t border-line pt-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Example
          </div>
          <p className="mt-2 font-sans text-[13.5px] leading-relaxed text-ink-2 italic">
            &ldquo;Oversized chore coat, Carhartt-weight raw denim, boxy fit
            (think Engineered Garments). Patch pockets, hidden placket, no
            branding. M but with extra room. Budget $400–600, need it by
            mid-March.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
