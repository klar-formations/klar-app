import Link from "next/link";
import { getCourse } from "@/lib/courses";
import { packs, getPackPricingFor } from "@/lib/packs";
import { createClient } from "@/lib/supabase/server";
import { getUserPurchasedSlugs } from "@/lib/purchases";
import PackBuyButton from "./PackBuyButton";

export const metadata = { title: "Par où commencer — Klar" };

export default async function ParcoursPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const ownedSlugs = user ? await getUserPurchasedSlugs(supabase, user.id) : [];

  return (
    <div className="wrap parcours-page">
      <div className="parcours-hero">
        <span className="hero-tag">Guide de parcours</span>
        <h1>Par où commencer ?</h1>
        <p className="lead">
          11 formations, c&apos;est beaucoup si tu ne sais pas par où commencer. Voici un ordre
          suggéré, pensé pour que chaque formation s&apos;appuie sur la précédente — regroupé en 3
          packs, chacun à -10% par rapport à l&apos;achat des formations à l&apos;unité.
        </p>
        <div className="parcours-note">
          Cet ordre est une suggestion, pas une obligation : tu peux tout aussi bien piocher une
          formation précise selon un besoin immédiat, sans suivre le parcours dans son intégralité.
        </div>
      </div>

      {packs.map((pack, pi) => {
        const pricing = getPackPricingFor(pack, ownedSlugs);
        return (
          <div className="phase" key={pack.slug}>
            <div className="phase-head">
              <div className="phase-num">{pi + 1}</div>
              <h2>{pack.title}</h2>
            </div>
            <p className="phase-desc">{pack.description}</p>

            <ul className="step-list">
              {pack.courseSlugs.map((slug) => {
                const course = getCourse(slug);
                if (!course) return null;
                const owned = ownedSlugs.includes(slug);
                return (
                  <li className="step" key={slug}>
                    <Link className="step-card" href={`/formations/${slug}`}>
                      <span className="step-tag">
                        {course.category}
                        {owned && <span className="step-owned"> · déjà acquise ✓</span>}
                      </span>
                      <h3>{course.shortTitle}</h3>
                      <p>{course.heroSubtitle}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {pricing.fullyOwned ? (
              <div className="pack-pricing">
                <div className="pack-pricing-info">
                  <span className="pack-savings" style={{ fontWeight: 700, color: "var(--indigo)" }}>
                    Tu as déjà toutes les formations de ce pack ✓
                  </span>
                </div>
              </div>
            ) : (
              <div className="pack-pricing">
                <div className="pack-pricing-info">
                  <span className="pack-badge">-{pricing.discountPercent}%</span>
                  <div className="pack-pricing-numbers">
                    <span className="pack-price-old">{pricing.total} €</span>
                    <span className="pack-price-new">{pricing.discounted} €</span>
                  </div>
                  <span className="pack-savings">
                    soit {pricing.savings} € d&apos;économie
                    {pricing.remainingSlugs.length < pack.courseSlugs.length &&
                      " sur les formations restantes"}
                  </span>
                </div>
                <div className="pack-pricing-action">
                  <PackBuyButton packSlug={pack.slug} />
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="parcours-cta">
        <h3>Pas envie de suivre un parcours complet ?</h3>
        <p>
          Le catalogue complet reste consultable librement — choisis directement la formation qui
          répond à ton besoin du moment.
        </p>
        <Link href="/catalogue" className="btn btn-primary">
          Voir le catalogue complet
        </Link>
      </div>
    </div>
  );
}
