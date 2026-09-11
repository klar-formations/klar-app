import { notFound, redirect } from "next/navigation";
import { getCourse } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";
import { hasPurchased } from "@/lib/purchases";
import { getCourseContent } from "@/lib/course-content";
import CoursePlayer from "@/components/course-player/CoursePlayer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course ? `${course.shortTitle} — Klar` : "Klar" };
}

export default async function CourseContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  // En local (npm run dev), on saute la vérification de compte/achat pour pouvoir
  // prévisualiser le contenu librement. En production (déployé), cette exception
  // n'existe pas : la vérification ci-dessous s'applique toujours.
  const isLocalPreview = process.env.NODE_ENV === "development";

  if (!isLocalPreview) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect(`/connexion?next=/mes-formations/${slug}`);

    const owns = await hasPurchased(supabase, user.id, slug);
    if (!owns) redirect(`/formations/${slug}`);
  }

  const modules = getCourseContent(slug);

  if (!modules) {
    return (
      <div className="wrap section">
        <h1>{course.shortTitle}</h1>
        <div className="member-panel">
          <div>
            <h3>Ton accès est bien actif ✓</h3>
            <p>
              Le contenu détaillé (leçons, quiz, ressources) de cette formation est en cours
              d&apos;intégration dans le nouvel espace membre.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <CoursePlayer slug={slug} title={course.shortTitle} modules={modules} />;
}
