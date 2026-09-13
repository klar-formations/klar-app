import { courses } from "@/lib/courses";
import AvisForm from "./AvisForm";

export const metadata = { title: "Donner mon avis — Klar" };

export default function AvisPage() {
  return (
    <div className="wrap section" style={{ maxWidth: 560, margin: "0 auto" }}>
      <div className="section-head" style={{ textAlign: "left" }}>
        <h1>Donne ton avis</h1>
        <p>
          Ton retour aide les autres futures élèves à savoir à quoi s&apos;attendre — merci de
          prendre deux minutes pour le partager.
        </p>
      </div>
      <AvisForm courses={courses.map((c) => ({ slug: c.slug, title: c.shortTitle }))} />
    </div>
  );
}
