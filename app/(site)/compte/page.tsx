import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCourse } from "@/lib/courses";
import AccountTabs from "@/components/account/AccountTabs";

export const metadata = { title: "Mon compte — Klar" };

export default async function ComptePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/connexion?next=/compte");

  const { data: profileRow } = await supabase
    .from("profiles")
    .select("first_name, last_name, phone, address")
    .eq("user_id", user.id)
    .maybeSingle();

  const { data: purchaseRows } = await supabase
    .from("purchases")
    .select("course_slug, amount_total, currency, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const purchases = (purchaseRows ?? []).map((p) => {
    const course = getCourse(p.course_slug as string);
    return {
      slug: p.course_slug as string,
      title: course?.shortTitle ?? p.course_slug,
      amountEuros: p.amount_total ? (p.amount_total as number) / 100 : 0,
      currency: (p.currency as string) ?? "eur",
      date: p.created_at as string,
    };
  });

  return (
    <div className="wrap section">
      <div className="section-head" style={{ textAlign: "left" }}>
        <h1>Mon compte</h1>
      </div>
      <AccountTabs
        email={user.email ?? ""}
        profile={{
          firstName: profileRow?.first_name ?? "",
          lastName: profileRow?.last_name ?? "",
          phone: profileRow?.phone ?? "",
          address: profileRow?.address ?? "",
        }}
        purchases={purchases}
      />
    </div>
  );
}
