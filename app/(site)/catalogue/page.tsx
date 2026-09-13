import Link from "next/link";
import { courses } from "@/lib/courses";
import CourseCatalogGrid from "@/components/CourseCatalogGrid";

export const metadata = { title: "Catalogue — Klar" };

export default function CataloguePage() {
  return (
    <div className="wrap section">
      <div className="section-head">
        <h2>Le catalogue</h2>
        <p>
          Chaque formation est pensée pour être suivie en autonomie, avec des modules denses, des
          quiz et des ressources prêtes à l&apos;emploi.
        </p>
      </div>
      <CourseCatalogGrid courses={courses} />
      <Link href="/parcours" className="parcours-banner" style={{ marginTop: 40, marginBottom: 0 }}>
        <div className="parcours-banner-text">
          <h3>Pas sûr·e par où commencer ?</h3>
          <p>Suis les parcours conseillés, regroupés en packs à -10% par rapport à l&apos;unité.</p>
        </div>
        <span className="parcours-banner-arrow">Voir les parcours →</span>
      </Link>
    </div>
  );
}
