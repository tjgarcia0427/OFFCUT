import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "./env";
import type { Database } from "./database.types";

let _client: SupabaseClient<Database> | null = null;

export function supabase(): SupabaseClient<Database> {
  if (_client) return _client;
  _client = createClient<Database>(
    env.supabaseUrl(),
    env.supabaseServiceRoleKey(),
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
  return _client;
}
