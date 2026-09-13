import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getUserPurchasedSlugs } from "@/lib/purchases";
import { courses } from "@/lib/courses";
import PhotoCover from "@/components/illustrations/PhotoCover";
import CourseCatalogGrid from "@/components/CourseCatalogGrid";

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
          </div>
          <Link href="/parcours" className="parcours-banner">
            <div className="parcours-banner-text">
              <h3>Pas sûr·e par où commencer ?</h3>
              <p>Suis les parcours conseillés, regroupés en packs à -10% par rapport à l&apos;unité.</p>
            </div>
            <span className="parcours-banner-arrow">Voir les parcours →</span>
          </Link>
          <CourseCatalogGrid courses={courses.slice(0, 3)} />
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link href="/catalogue" className="btn btn-primary">
              Voir tout le catalogue →
            </Link>
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
              « Klar » signifie « clair, net » en scandinave — la promesse de la marque : de la
              clarté dans l&apos;administratif et le commercial.
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
              <Link href="/catalogue" className="btn btn-primary">Voir le catalogue</Link>
            </div>
          ) : (
            <div className="member-panel">
              <div>
                <h3>Tes formations</h3>
                <p>
                  Tu as accès à {purchasedSlugs.length} formation{purchasedSlugs.length > 1 ? "s" : ""}.
                </p>
              </div>
              <Link href="/mes-formations" className="btn btn-primary">
                Accéder à mes formations →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
