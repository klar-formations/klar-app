import Link from "next/link";
import { getCourse } from "@/lib/courses";
import { packs, getPackPricing } from "@/lib/packs";
import PackBuyButton from "./PackBuyButton";

export const metadata = { title: "Par où commencer — Klar" };

export default function ParcoursPage() {
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
        const { total, discounted, savings } = getPackPricing(pack);
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
                return (
                  <li className="step" key={slug}>
                    <Link className="step-card" href={`/formations/${slug}`}>
                      <span className="step-tag">{course.category}</span>
                      <h3>{course.shortTitle}</h3>
                      <p>{course.heroSubtitle}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pack-pricing">
              <div className="pack-pricing-info">
                <span className="pack-badge">-{pack.discountPercent}%</span>
                <div className="pack-pricing-numbers">
                  <span className="pack-price-old">{total} €</span>
                  <span className="pack-price-new">{discounted} €</span>
                </div>
                <span className="pack-savings">soit {savings} € d&apos;économie</span>
              </div>
              <div className="pack-pricing-action">
                <PackBuyButton packSlug={pack.slug} />
              </div>
            </div>
          </div>
        );
      })}

      <div className="parcours-cta">
        <h3>Pas envie de suivre un parcours complet ?</h3>
        <p>
          Le catalogue complet reste consultable librement — choisis directement la formation qui
          répond à ton besoin du moment.
        </p>
        <Link href="/#catalogue" className="btn btn-primary">
          Voir le catalogue complet
        </Link>
      </div>
    </div>
  );
}
