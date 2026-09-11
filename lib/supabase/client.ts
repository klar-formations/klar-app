import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Placeholder fallback lets the app run before Supabase credentials are set —
  // auth features simply won't work until real values are added to .env.local.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"
  );
}
