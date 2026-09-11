import { SupabaseClient } from "@supabase/supabase-js";

export async function getUserPurchasedSlugs(
  supabase: SupabaseClient,
  userId: string
): Promise<string[]> {
  const { data } = await supabase
    .from("purchases")
    .select("course_slug")
    .eq("user_id", userId);
  return data?.map((row) => row.course_slug as string) ?? [];
}

export async function hasPurchased(
  supabase: SupabaseClient,
  userId: string,
  slug: string
): Promise<boolean> {
  const { data } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", userId)
    .eq("course_slug", slug)
    .maybeSingle();
  return !!data;
}
