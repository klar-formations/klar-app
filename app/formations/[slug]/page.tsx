import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourse, courses } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";
import { hasPurchased } from "@/lib/purchases";
import BuyButton from "./BuyButton";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course ? `${course.shortTitle} — Klar` : "Klar" };
}

export default async function ProduitPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const owns = user ? await hasPurchased(supabase, user.id, course.slug) : false;

  return (
    <div className={`accent-${course.accent}`}>
      <div className="wrap">
        <div className="hero" style={{ padding: "52px 0 20px" }}>
          <div>
            <span className="hero-tag bg-accent-pale">{course.tag}</span>
            <h1 style={{ fontSize: "2.3rem" }}>{course.title}</h1>
            <p className="sub" style={{ fontSize: "1.1rem", color: "#4a4d68" }}>{course.heroSubtitle}</p>
            <div
              className="img-placeholder"
              style={{ width: "100%", maxWidth: 320, aspectRatio: "16/9", marginTop: 18 }}
            >
              <span>Emplacement photo — couverture de la formation</span>
            </div>
          </div>
          <div className="buy-card">
            <div className="buy-price">
              {course.priceEuros} € <span>paiement unique</span>
            </div>
            <div className="buy-meta">
              Accès à vie · {course.meta.modules} modules · {course.meta.lessons} leçons
            </div>
            <ul className="buy-list use-accent">
              {course.buyList.map((item) => (
                <li key={item} style={{ color: "#3a3d55" }}>{item}</li>
              ))}
            </ul>
            {owns ? (
              <Link
                href={`/mes-formations/${course.slug}`}
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Accéder à la formation →
              </Link>
            ) : (
              <BuyButton slug={course.slug} />
            )}
          </div>
        </div>
      </div>

      <div className="wrap section">
        <h2>Ce que tu vas savoir faire à la fin</h2>
        <div className="learn-grid">
          {course.learnItems.map((item) => (
            <div className="learn-item" key={item}>
              <span className="dot bg-accent"></span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="wrap section">
        <h2>Le programme</h2>
        <div className="img-placeholder" style={{ aspectRatio: "21/9", marginBottom: 20 }}>
          <span>Emplacement image — capture d&apos;écran de l&apos;interface de la formation</span>
        </div>
        <div className="mod-list">
          {course.modules.map((mod, i) => (
            <div className="mod-row" key={mod.title}>
              <div className="num bg-accent">{i + 1}</div>
              <div>
                <h4>{mod.title}</h4>
                <p>{mod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap section">
        <h2>Pour qui, pas pour qui</h2>
        <div className="forwho">
          <div className="forwho-card">
            <h4>✓ Cette formation est pour toi si...</h4>
            <p>{course.forWho.yes}</p>
          </div>
          <div className="forwho-card">
            <h4>✗ Ce n&apos;est probablement pas pour toi si...</h4>
            <p>{course.forWho.no}</p>
          </div>
        </div>
      </div>

      <div className="wrap section">
        <h2>Questions fréquentes</h2>
        {course.faq.map((item) => (
          <div className="faq-item" key={item.question}>
            <h4>{item.question}</h4>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
