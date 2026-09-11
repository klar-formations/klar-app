export const metadata = { title: "Merci — Klar" };

export default function MerciPage() {
  return (
    <div className="wrap">
      <div className="auth-card" style={{ textAlign: "center" }}>
        <span className="hero-tag">Paiement confirmé</span>
        <h1>Merci pour ton achat !</h1>
        <p className="sub">
          Un e-mail vient de t&apos;être envoyé avec un lien pour accéder immédiatement à ta
          formation. Vérifie ta boîte de réception (et tes spams) dans les prochaines minutes.
        </p>
        <p className="auth-note">
          Tu pourras toujours retrouver ta formation en te connectant avec la même adresse e-mail
          depuis la page &quot;Se connecter&quot;.
        </p>
      </div>
    </div>
  );
}
