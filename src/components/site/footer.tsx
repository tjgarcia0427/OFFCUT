import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <Link
              href="/"
              className="font-display text-[44px] font-bold leading-none tracking-[-0.03em] md:text-[64px]"
            >
              OFFCUT<span className="text-signal">.</span>
            </Link>
            <p className="mt-5 max-w-sm font-sans text-[15px] leading-relaxed text-ink-2">
              The commission platform for independent streetwear designers.
              One brief. One designer. One-of-one.
            </p>
          </div>

          <FooterCol
            title="Platform"
            links={[
              { href: "/brief", label: "Brief a piece" },
              { href: "/apply", label: "Apply as designer" },
              { href: "/how-it-works", label: "How it works" },
              { href: "/pricing", label: "Pricing & fees" },
            ]}
          />
          <FooterCol
            title="Designers"
            links={[
              { href: "/designers", label: "Roster" },
              { href: "/manifesto", label: "Manifesto" },
              { href: "/standards", label: "Quality standards" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About" },
              { href: "/journal", label: "Journal" },
              { href: "/contact", label: "Contact" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} OFFCUT // Made one at a time.</span>
          <span>Brooklyn / Internet</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {title}
      </div>
      <ul className="space-y-2.5 font-sans text-[14px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-signal">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
