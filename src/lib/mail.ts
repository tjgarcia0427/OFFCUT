import "server-only";
import { Resend } from "resend";
import { env } from "./env";

let _resend: Resend | null = null;
function client(): Resend {
  if (_resend) return _resend;
  _resend = new Resend(env.resendApiKey());
  return _resend;
}

type NewBriefEmail = {
  id: string;
  title: string;
  pieceType: string;
  description: string;
  references?: string;
  size: string;
  budget: string;
  timeline: string;
  city: string;
  email: string;
  handle?: string;
};

type NewApplicationEmail = {
  id: string;
  name: string;
  brand?: string;
  email: string;
  city: string;
  instagram: string;
  website?: string;
  disciplines: string;
  scale: string;
  turnaround: string;
  rate: string;
  pitch: string;
};

const row = (label: string, value: string | undefined) =>
  value && value.trim() !== ""
    ? `<tr><td style="padding:6px 12px 6px 0;color:#6b6657;font:11px ui-monospace,Menlo,monospace;text-transform:uppercase;letter-spacing:.12em;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:6px 0;color:#0a0a0a;font:15px ui-sans-serif,system-ui;line-height:1.5;">${escape(value)}</td></tr>`
    : "";

const block = (label: string, value: string | undefined) =>
  value && value.trim() !== ""
    ? `<div style="margin-top:18px;"><div style="color:#6b6657;font:11px ui-monospace,Menlo,monospace;text-transform:uppercase;letter-spacing:.12em;margin-bottom:6px;">${label}</div><div style="color:#0a0a0a;font:15px ui-sans-serif,system-ui;line-height:1.6;white-space:pre-wrap;">${escape(value)}</div></div>`
    : "";

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(headline: string, inner: string) {
  return `<div style="background:#f4f0e8;padding:32px;font-family:ui-sans-serif,system-ui;color:#0a0a0a;">
  <div style="max-width:600px;margin:0 auto;">
    <div style="font:11px ui-monospace,Menlo,monospace;text-transform:uppercase;letter-spacing:.16em;color:#ff3d00;">OFFCUT // ADMIN</div>
    <h1 style="font:600 28px/1.1 ui-sans-serif,system-ui;letter-spacing:-0.02em;margin:8px 0 24px;">${headline}</h1>
    <div style="background:#ffffff;border:1px solid rgba(10,10,10,0.14);padding:24px;">
      ${inner}
    </div>
    <div style="margin-top:16px;font:11px ui-monospace,Menlo,monospace;text-transform:uppercase;letter-spacing:.12em;color:#6b6657;">
      <a href="${env.siteUrl}/admin" style="color:#0a0a0a;">Open admin</a>
    </div>
  </div>
</div>`;
}

export async function sendBriefNotification(b: NewBriefEmail) {
  const inner = `
    <table style="border-collapse:collapse;width:100%;">
      ${row("Brief ID", b.id)}
      ${row("Piece type", b.pieceType)}
      ${row("Size", b.size)}
      ${row("Budget", b.budget)}
      ${row("Timeline", b.timeline)}
      ${row("Ship to", b.city)}
      ${row("Email", b.email)}
      ${row("Instagram", b.handle)}
    </table>
    ${block("Title", b.title)}
    ${block("Brief", b.description)}
    ${block("References", b.references)}
  `;
  await client().emails.send({
    from: env.resendFrom(),
    to: env.adminEmail(),
    replyTo: b.email,
    subject: `New brief: ${b.title}`,
    html: shell(`New brief filed`, inner),
  });
}

export async function sendApplicationNotification(a: NewApplicationEmail) {
  const inner = `
    <table style="border-collapse:collapse;width:100%;">
      ${row("Application ID", a.id)}
      ${row("Name", a.name)}
      ${row("Brand", a.brand)}
      ${row("Email", a.email)}
      ${row("City", a.city)}
      ${row("Instagram", a.instagram)}
      ${row("Website", a.website)}
      ${row("Discipline", a.disciplines)}
      ${row("Scale", a.scale)}
      ${row("Turnaround", a.turnaround)}
      ${row("Rate", a.rate)}
    </table>
    ${block("Pitch", a.pitch)}
  `;
  await client().emails.send({
    from: env.resendFrom(),
    to: env.adminEmail(),
    replyTo: a.email,
    subject: `New designer application: ${a.name}${a.brand ? ` (${a.brand})` : ""}`,
    html: shell(`New designer application`, inner),
  });
}
