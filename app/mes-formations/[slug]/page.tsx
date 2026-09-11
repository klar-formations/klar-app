import { notFound, redirect } from "next/navigation";
import { getCourse } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";
import { hasPurchased } from "@/lib/purchases";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course ? `${course.shortTitle} — Klar` : "Klar" };
}

export default async function CourseContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect(`/connexion?next=/mes-formations/${slug}`);

  const owns = await hasPurchased(supabase, user.id, slug);
  if (!owns) redirect(`/formations/${slug}`);

  return (
    <div className="wrap section">
      <h1>{course.shortTitle}</h1>
      <div className="member-panel">
        <div>
          <h3>Ton accès est bien actif ✓</h3>
          <p>
            Le contenu détaillé (leçons, quiz, ressources) de cette formation est en cours
            d&apos;intégration dans le nouvel espace membre. En attendant, il reste disponible
            dans la version précédente du site.
          </p>
        </div>
      </div>
    </div>
  );
}
