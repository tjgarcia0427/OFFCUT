import "server-only";

function required(name: string): string {
  const v = process.env[name];
  if (!v || v.trim() === "") {
    throw new Error(
      `Missing required env var: ${name}. Add it to .env.local (dev) or Vercel project settings (prod).`
    );
  }
  return v;
}

function optional(name: string, fallback: string): string {
  const v = process.env[name];
  return v && v.trim() !== "" ? v : fallback;
}

export const env = {
  siteUrl: optional("NEXT_PUBLIC_SITE_URL", "https://joinoffcut.com"),
  supabaseUrl: () => required("SUPABASE_URL"),
  supabaseServiceRoleKey: () => required("SUPABASE_SERVICE_ROLE_KEY"),
  resendApiKey: () => required("RESEND_API_KEY"),
  adminEmail: () => required("ADMIN_EMAIL"),
  resendFrom: () =>
    optional("RESEND_FROM", "OFFCUT <onboarding@resend.dev>"),
  adminPassword: () => required("ADMIN_PASSWORD"),
};
