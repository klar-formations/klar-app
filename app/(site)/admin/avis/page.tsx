import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isAdminEmail } from "@/lib/admin";
import { getCourse } from "@/lib/courses";
import ReviewModerationRow from "./ReviewModerationRow";

export const metadata = { title: "Modération des avis — Klar" };

export default async function AdminAvisPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/connexion?next=/admin/avis");
  if (!isAdminEmail(user.email)) {
    return (
      <div className="wrap section">
        <h1>Accès refusé</h1>
        <p>Cette page est réservée.</p>
      </div>
    );
  }

  const admin = createAdminClient();
  const { data: reviews } = await admin
    .from("reviews")
    .select("id, name, course_slug, rating, comment, status, created_at")
    .order("created_at", { ascending: false });

  return (
    <div className="wrap section">
      <div className="section-head" style={{ textAlign: "left" }}>
        <h1>Modération des avis</h1>
        <p>Choisis quels avis afficher publiquement dans le carrousel de la homepage.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {(reviews ?? []).map((r) => (
          <ReviewModerationRow
            key={r.id}
            id={r.id}
            name={r.name}
            courseTitle={r.course_slug ? getCourse(r.course_slug)?.shortTitle ?? r.course_slug : null}
            rating={r.rating}
            comment={r.comment}
            status={r.status}
            date={r.created_at}
          />
        ))}
        {(reviews ?? []).length === 0 && <p>Aucun avis pour le moment.</p>}
      </div>
    </div>
  );
}
