import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const metadata = {
  title: "Admin — OFFCUT",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type Brief = {
  id: string;
  created_at: string;
  status: string;
  piece_type: string;
  title: string;
  description: string;
  references: string | null;
  size: string;
  budget: string;
  timeline: string;
  city: string;
  email: string;
  handle: string | null;
};

type Application = {
  id: string;
  created_at: string;
  status: string;
  name: string;
  brand: string | null;
  email: string;
  city: string;
  instagram: string;
  website: string | null;
  disciplines: string;
  scale: string;
  turnaround: string;
  rate: string;
  pitch: string;
};

async function loadData() {
  const sb = supabase();
  const [briefs, applications] = await Promise.all([
    sb
      .from("briefs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
    sb
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);
  return {
    briefs: (briefs.data ?? []) as Brief[],
    applications: (applications.data ?? []) as Application[],
    error: briefs.error?.message ?? applications.error?.message ?? null,
  };
}

export default async function AdminPage() {
  const { briefs, applications, error } = await loadData();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-8">
          <div className="flex items-baseline gap-4">
            <Link
              href="/"
              className="font-display text-[20px] font-bold tracking-[-0.02em]"
            >
              OFFCUT<span className="text-signal">.</span>
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              / Admin
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {briefs.length} briefs · {applications.length} applications
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-5 py-10 md:px-8">
        {error && (
          <div className="mb-8 border border-signal/40 bg-signal/10 p-4 font-mono text-[12px] uppercase tracking-[0.1em] text-signal">
            ⚠ {error}
          </div>
        )}

        <Section
          title="Designer applications"
          count={applications.length}
          empty="No applications yet. Once you start sharing the link in design communities, they show up here."
        >
          <ul className="divide-y divide-line border-y border-line">
            {applications.map((a) => (
              <ApplicationRow key={a.id} a={a} />
            ))}
          </ul>
        </Section>

        <div className="h-16" />

        <Section
          title="Briefs"
          count={briefs.length}
          empty="No briefs yet. Buyers will show up once designers do — supply first."
        >
          <ul className="divide-y divide-line border-y border-line">
            {briefs.map((b) => (
              <BriefRow key={b.id} b={b} />
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}

function Section({
  title,
  count,
  empty,
  children,
}: {
  title: string;
  count: number;
  empty: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-[32px] font-bold tracking-[-0.02em]">
          {title}
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          {count} total
        </span>
      </div>
      {count === 0 ? (
        <p className="border border-dashed border-line p-6 font-sans text-[14px] text-muted">
          {empty}
        </p>
      ) : (
        children
      )}
    </section>
  );
}

function fmtDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ApplicationRow({ a }: { a: Application }) {
  return (
    <li className="py-5">
      <details className="group">
        <summary className="grid cursor-pointer list-none grid-cols-12 items-center gap-4">
          <span className="col-span-12 md:col-span-3">
            <span className="font-display text-[18px] font-semibold tracking-[-0.01em]">
              {a.name}
            </span>
            {a.brand && (
              <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                / {a.brand}
              </span>
            )}
          </span>
          <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 md:col-span-3">
            {a.disciplines}
          </span>
          <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 md:col-span-2">
            {a.city}
          </span>
          <span className="col-span-9 font-mono text-[11px] uppercase tracking-[0.1em] text-muted md:col-span-3">
            {fmtDate(a.created_at)} · {a.status}
          </span>
          <span className="col-span-3 text-right font-mono text-[11px] uppercase tracking-[0.1em] text-signal md:col-span-1">
            <span className="group-open:hidden">open</span>
            <span className="hidden group-open:inline">close</span>
          </span>
        </summary>
        <dl className="mt-4 grid grid-cols-1 gap-3 border-l-2 border-signal/40 pl-5 md:grid-cols-2">
          <KV k="Email" v={<a href={`mailto:${a.email}`} className="hover:text-signal">{a.email}</a>} />
          <KV k="Instagram" v={a.instagram} />
          <KV k="Website" v={a.website ?? "—"} />
          <KV k="Scale" v={a.scale} />
          <KV k="Turnaround" v={a.turnaround} />
          <KV k="Rate" v={a.rate} />
        </dl>
        <div className="mt-4 border-l-2 border-signal/40 pl-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Pitch
          </div>
          <p className="mt-1 whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-ink-2">
            {a.pitch}
          </p>
        </div>
      </details>
    </li>
  );
}

function BriefRow({ b }: { b: Brief }) {
  return (
    <li className="py-5">
      <details className="group">
        <summary className="grid cursor-pointer list-none grid-cols-12 items-center gap-4">
          <span className="col-span-12 md:col-span-5">
            <span className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em]">
              {b.title}
            </span>
          </span>
          <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 md:col-span-2">
            {b.piece_type} · {b.size}
          </span>
          <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-2 md:col-span-2">
            {b.budget} · {b.timeline}
          </span>
          <span className="col-span-9 font-mono text-[11px] uppercase tracking-[0.1em] text-muted md:col-span-2">
            {fmtDate(b.created_at)} · {b.status}
          </span>
          <span className="col-span-3 text-right font-mono text-[11px] uppercase tracking-[0.1em] text-signal md:col-span-1">
            <span className="group-open:hidden">open</span>
            <span className="hidden group-open:inline">close</span>
          </span>
        </summary>
        <dl className="mt-4 grid grid-cols-1 gap-3 border-l-2 border-signal/40 pl-5 md:grid-cols-2">
          <KV k="Buyer email" v={<a href={`mailto:${b.email}`} className="hover:text-signal">{b.email}</a>} />
          <KV k="Instagram" v={b.handle ?? "—"} />
          <KV k="Ship to" v={b.city} />
        </dl>
        <div className="mt-4 border-l-2 border-signal/40 pl-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Brief
          </div>
          <p className="mt-1 whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-ink-2">
            {b.description}
          </p>
        </div>
        {b.references && (
          <div className="mt-4 border-l-2 border-signal/40 pl-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              References
            </div>
            <p className="mt-1 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-ink-2">
              {b.references}
            </p>
          </div>
        )}
      </details>
    </li>
  );
}

function KV({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {k}
      </dt>
      <dd className="mt-0.5 font-sans text-[14px] text-ink-2">{v}</dd>
    </div>
  );
}
