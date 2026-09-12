import Link from "next/link";
import { getCourse } from "@/lib/courses";

export const metadata = { title: "Par où commencer — Klar" };

const PHASES = [
  {
    title: "Poser les bases, avant de vendre quoi que ce soit",
    desc: "Savoir à qui tu t'adresses, ce que tu vends, comment on te trouve, et le cadre administratif minimum pour démarrer sereinement.",
    slugs: ["niche", "communication", "microentreprise"],
  },
  {
    title: "Vendre, être payé, et faire revenir tes clients",
    desc: "De la première demande jusqu'au client qui revient et qui te recommande.",
    slugs: ["tarifs", "clients", "facturation", "fidelisation"],
  },
  {
    title: "Se protéger et tenir sur la durée",
    desc: "Ce qui sécurise ton activité et ta tête sur le long terme, une fois les bases posées.",
    slugs: ["protection-juridique", "protection-sociale", "tresorerie", "organisation"],
  },
];

export default function ParcoursPage() {
  return (
    <div className="wrap parcours-page">
      <div className="parcours-hero">
        <span className="hero-tag">Guide de parcours</span>
        <h1>Par où commencer ?</h1>
        <p className="lead">
          11 formations, c&apos;est beaucoup si tu ne sais pas par où commencer. Voici un ordre
          suggéré, pensé pour que chaque formation s&apos;appuie sur la précédente.
        </p>
        <div className="parcours-note">
          Cet ordre est une suggestion, pas une obligation : tu peux tout aussi bien piocher une
          formation précise selon un besoin immédiat, sans suivre le parcours dans son intégralité.
        </div>
      </div>

      {PHASES.map((phase, pi) => (
        <div className="phase" key={phase.title}>
          <div className="phase-head">
            <div className="phase-num">{pi + 1}</div>
            <h2>{phase.title}</h2>
          </div>
          <p className="phase-desc">{phase.desc}</p>
          <ul className="step-list">
            {phase.slugs.map((slug) => {
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
        </div>
      ))}

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
