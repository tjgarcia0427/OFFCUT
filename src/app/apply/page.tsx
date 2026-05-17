import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import { ApplyForm } from "./apply-form";

export const metadata = {
  title: "Apply — OFFCUT for designers",
  description:
    "Get paid to make what you actually want to make. Apply to join the first cohort of OFFCUT designers.",
};

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Header />
        <Pitch />
        <FormSection />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <section className="border-b border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-5 py-16 md:px-8 md:py-24">
        <div className="col-span-12 md:col-span-9">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
            FILE 003 / DESIGNER INTAKE
          </div>
          <h1 className="mt-3 font-display text-[15vw] font-bold leading-[0.88] tracking-[-0.04em] md:text-[140px]">
            Make.
            <br />
            <span className="text-signal">Get paid.</span>
            <br />
            Repeat.
          </h1>
        </div>
        <aside className="col-span-12 md:col-span-3 md:pt-4">
          <p className="font-sans text-[16px] leading-relaxed text-paper/80">
            We&apos;re onboarding the first 50 independent streetwear designers
            to OFFCUT. If your work is distinctive and your process is solid,
            you belong on the roster.
          </p>
          <ul className="mt-6 space-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/70">
            <li>— No platform fees on your first 3 commissions</li>
            <li>— 85% revenue share after</li>
            <li>— You own your profile, your audience, your style</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function Pitch() {
  const reasons = [
    {
      h: "Commission-only, no inventory",
      b: "Every piece is paid for before you start cutting. No deadstock. No fronted production costs. No risk.",
    },
    {
      h: "The brief does the filtering",
      b: "Buyers write a real brief with references, fit, budget, and timeline. You only see commissions that actually match what you make.",
    },
    {
      h: "Escrow handles the awkward part",
      b: "Deposit is in our hands the moment a brief is accepted. We release on delivery + approval. You never have to chase money.",
    },
    {
      h: "Your name on the door",
      b: "Your profile is your shop. Buyers come for OFFCUT but they leave following you. We send people to your page, not ours.",
    },
  ];
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          § The deal
        </div>
        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-line md:grid-cols-2">
          {reasons.map((r) => (
            <li key={r.h} className="bg-paper p-7 md:p-9">
              <h3 className="font-display text-[26px] font-semibold leading-tight tracking-[-0.015em] md:text-[32px]">
                {r.h}
              </h3>
              <p className="mt-3 max-w-md font-sans text-[15.5px] leading-relaxed text-ink-2">
                {r.b}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section className="border-b border-line bg-paper-2">
      <div className="mx-auto max-w-[1100px] px-5 py-20 md:px-8 md:py-28">
        <div className="border-b border-line pb-8">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            § Application
          </div>
          <h2 className="mt-3 font-display text-[44px] font-bold leading-[0.95] tracking-[-0.025em] md:text-[72px]">
            Show us your work.
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-[17px] leading-relaxed text-ink-2">
            Five minutes. We review every application personally and respond
            within a week.
          </p>
        </div>
        <div className="mt-12">
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}
