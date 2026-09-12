import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getUserPurchasedSlugs } from "@/lib/purchases";
import { courses } from "@/lib/courses";
import PhotoCover from "@/components/illustrations/PhotoCover";
import CourseProgressBar from "@/components/course-player/CourseProgressBar";

export const metadata = { title: "Mes formations — Klar" };

export default async function MesFormationsPage() {
  // En local (npm run dev), on affiche toutes les formations pour prévisualiser
  // librement, sans compte ni achat. Cette exception n'existe pas en production.
  const isLocalPreview = process.env.NODE_ENV === "development";

  let owned = courses;

  if (!isLocalPreview) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect("/connexion?next=/mes-formations");

    const purchasedSlugs = await getUserPurchasedSlugs(supabase, user.id);
    owned = courses.filter((c) => purchasedSlugs.includes(c.slug));
  }

  return (
    <div className="wrap section">
      <div className="section-head" style={{ textAlign: "left" }}>
        <h1>Mes formations</h1>
      </div>
      {owned.length === 0 ? (
        <div className="member-panel">
          <div>
            <h3>Aucune formation pour le moment</h3>
            <p>Découvre le catalogue pour commencer.</p>
          </div>
          <Link href="/#catalogue" className="btn btn-primary">Voir le catalogue</Link>
        </div>
      ) : (
        <div className="catalog-grid">
          {owned.map((course) => (
            <div className={`course-card accent-${course.accent}`} key={course.slug}>
              <div className="illustration-frame" style={{ aspectRatio: "16/9", borderRadius: 0 }}>
                <PhotoCover src={`/images/${course.slug}.jpg`} alt={course.shortTitle} />
              </div>
              <div className={`course-band ${course.accent}`}></div>
              <div className="course-body">
                <h3>{course.shortTitle}</h3>
                <p className="desc">{course.heroSubtitle}</p>
                <CourseProgressBar slug={course.slug} />
                <Link
                  href={`/mes-formations/${course.slug}`}
                  className="btn btn-primary"
                  style={{ justifyContent: "center" }}
                >
                  Reprendre la formation →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
