import Link from "next/link";
import { stripe } from "@/lib/stripe";
import { getCourse } from "@/lib/courses";
import SuccessBadge from "@/components/illustrations/SuccessBadge";

export const metadata = { title: "Merci — Klar" };

export default async function MerciPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let courseTitle: string | null = null;
  let amountEuros: number | null = null;
  let email: string | null = null;

  if (session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      const slug = session.metadata?.course_slug;
      const course = slug ? getCourse(slug) : undefined;
      courseTitle = course?.shortTitle ?? null;
      amountEuros = session.amount_total ? session.amount_total / 100 : null;
      email = session.customer_details?.email ?? null;
    } catch {
      // Invalid or expired session id — fall back to the generic message below.
    }
  }

  return (
    <div className="wrap">
      <div className="auth-card" style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
          <SuccessBadge />
        </div>
        <span className="hero-tag" style={{ background: "var(--sage-pale)", color: "var(--sage)" }}>
          Paiement confirmé
        </span>
        <h1>Merci pour ton achat !</h1>

        {courseTitle && (
          <div
            style={{
              background: "var(--cream)",
              borderRadius: "var(--radius-m)",
              padding: "16px 20px",
              margin: "18px 0",
              textAlign: "left",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{courseTitle}</div>
            {amountEuros !== null && (
              <div style={{ color: "#5c5f7a", fontSize: "0.9rem" }}>{amountEuros} € · accès à vie</div>
            )}
          </div>
        )}

        <p className="sub">
          Un e-mail{email ? <> vient d&apos;être envoyé à <strong>{email}</strong></> : " vient de t'être envoyé"} avec
          un lien pour accéder immédiatement à ta formation. Vérifie ta boîte de réception (et tes
          spams) dans les prochaines minutes.
        </p>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
          <Link href="/mes-formations" className="btn btn-primary">
            Aller à mon espace →
          </Link>
          <Link href="/#catalogue" className="btn btn-ghost">
            Retour au catalogue
          </Link>
        </div>

        <p className="auth-note">
          Tu pourras toujours retrouver ta formation en te connectant avec la même adresse e-mail
          depuis la page &quot;Se connecter&quot;.
        </p>
      </div>
    </div>
  );
}
