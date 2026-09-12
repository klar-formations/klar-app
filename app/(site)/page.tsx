import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserPurchasedSlugs } from "@/lib/purchases";
import { courses } from "@/lib/courses";
import PhotoCover from "@/components/illustrations/PhotoCover";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const purchasedSlugs = user ? await getUserPurchasedSlugs(supabase, user.id) : [];

  return (
    <>
      <section className="hero wrap">
        <div className="hero-text">
          <span className="hero-tag">Formations pour indépendants français</span>
          <h1>Ce qu&apos;il te reste à savoir pour avancer sereinement.</h1>
          <p className="lead">
            Des formations denses et actionnables pour les micro-entrepreneurs et freelances qui
            veulent reprendre le contrôle de leur administratif et de leur activité commerciale —
            sans blabla, toujours à jour.
          </p>
          <div className="hero-actions">
            <a href="#catalogue" className="btn btn-primary">
              Voir le catalogue →
            </a>
            <Link href={user ? "/mes-formations" : "/connexion"} className="btn btn-ghost">
              Mon espace membre
            </Link>
          </div>
        </div>
        <div
          className="hero-art illustration-frame"
          style={{ width: "100%", maxWidth: 340, aspectRatio: "1/1", background: "var(--white)" }}
        >
          <PhotoCover src="/images/hero.jpg" alt="" />
        </div>
      </section>

      <section className="section" id="catalogue">
        <div className="wrap">
          <div className="section-head">
            <h2>Le catalogue</h2>
            <p>
              Chaque formation est pensée pour être suivie en autonomie, avec des modules denses,
              des quiz et des ressources prêtes à l&apos;emploi.
            </p>
            <p style={{ marginTop: -6 }}>
              <Link href="/parcours">Pas sûr·e par où commencer ? Suis le parcours conseillé →</Link>
            </p>
          </div>
          <div className="catalog-grid">
            {courses.map((course) => (
              <div className={`course-card accent-${course.accent}`} key={course.slug}>
                <div className="illustration-frame" style={{ aspectRatio: "16/9", borderRadius: 0 }}>
                  <PhotoCover src={`/images/${course.slug}-catalog.jpg`} alt={course.shortTitle} />
                </div>
                <div className={`course-band ${course.accent}`}></div>
                <div className="course-body">
                  <div className="course-eyebrow" style={{ color: `var(--${course.accent === "indigo" ? "indigo" : course.accent})` }}>
                    {course.category}
                  </div>
                  <h3>{course.shortTitle}</h3>
                  <p className="desc">{course.heroSubtitle}</p>
                  <div className="course-meta">
                    <span>{course.meta.modules} modules</span>
                    <span>{course.meta.lessons} leçons</span>
                    <span>{course.meta.quizzes} quiz</span>
                  </div>
                  <div className="course-price">
                    {course.priceEuros} € <span>accès à vie</span>
                  </div>
                  <Link
                    href={`/formations/${course.slug}`}
                    className="btn btn-primary"
                    style={{ justifyContent: "center" }}
                  >
                    Voir la formation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pourquoi" style={{ background: "var(--white)" }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Pourquoi Klar</h2>
            <p>Une seule promesse, sur toutes les formations du catalogue.</p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon" style={{ background: "var(--sage-pale)", color: "var(--sage)" }}>✓</div>
              <h4>Du contenu dense, jamais superficiel</h4>
              <p>Chaque module va au fond des choses, avec des explications complètes plutôt que des listes à puces vides.</p>
            </div>
            <div className="why-card">
              <div className="why-icon" style={{ background: "var(--terracotta-pale)", color: "var(--terracotta)" }}>↻</div>
              <h4>Toujours à jour</h4>
              <p>Les formations administratives sont revues à chaque évolution réglementaire importante.</p>
            </div>
            <div className="why-card">
              <div className="why-icon" style={{ background: "var(--indigo-pale)", color: "var(--indigo)" }}>→</div>
              <h4>Concret et actionnable</h4>
              <p>Modèles, scripts et checklists prêts à l&apos;emploi, pas seulement de la théorie.</p>
            </div>
            <div className="why-card">
              <div className="why-icon" style={{ background: "var(--sage-pale)", color: "var(--sage)" }}>⏱</div>
              <h4>À ton rythme</h4>
              <p>Ta progression est sauvegardée automatiquement : reprends où tu t&apos;es arrêté·e, quand tu veux.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="histoire">
        <div className="wrap">
          <div className="story-block">
            <span className="hero-tag">L&apos;histoire de Klar</span>
            <h2>Pourquoi cette plateforme existe</h2>
            <p className="story-text">
              On trouve aujourd&apos;hui des dizaines de tutos, vidéos et articles sur la création
              et la gestion d&apos;une micro-entreprise — et on s&apos;y perd presque aussi vite
              qu&apos;on les trouve. Vouloir vendre un service ou avoir un vrai savoir-faire ne
              suffit pas toujours à comprendre tout ce charabia administratif. Klar est né de
              cette envie très simple : rassembler au même endroit des informations vérifiées et à
              jour, dans des modules simples, digestes et complets — avec de petits exercices pour
              vérifier que tout est bien assimilé, à ton rythme.
            </p>
            <div className="story-quote">
              Klar veut dire « clair, net » en scandinave. Avec Klar, on va à l&apos;essentiel.
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="membre">
        <div className="wrap">
          <div className="section-head">
            <h2>Mon espace</h2>
            <p>Retrouve les formations auxquelles tu as accès.</p>
          </div>
          {!user ? (
            <div className="member-panel">
              <div>
                <h3>Tu n&apos;es pas encore connecté·e</h3>
                <p>Connecte-toi pour retrouver les formations auxquelles tu as accès.</p>
              </div>
              <Link href="/connexion" className="btn btn-primary">Se connecter</Link>
            </div>
          ) : purchasedSlugs.length === 0 ? (
            <div className="member-panel">
              <div>
                <h3>Aucune formation pour le moment</h3>
                <p>Découvre le catalogue ci-dessus pour commencer.</p>
              </div>
              <a href="#catalogue" className="btn btn-primary">Voir le catalogue</a>
            </div>
          ) : (
            <div className="member-panel" style={{ alignItems: "flex-start" }}>
              <div>
                <h3>Tes formations</h3>
                <p>Accède directement à leur contenu.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, minWidth: 280 }}>
                {courses
                  .filter((c) => purchasedSlugs.includes(c.slug))
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/mes-formations/${c.slug}`}
                      className="btn btn-ghost"
                      style={{ justifyContent: "center" }}
                    >
                      {c.shortTitle}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
