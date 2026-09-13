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
    </div>
  );
}
