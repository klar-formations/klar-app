import ConnexionForm from "./ConnexionForm";

export const metadata = { title: "Se connecter — Klar" };

export default function ConnexionPage() {
  return (
    <div className="wrap">
      <div className="auth-card">
        <span className="hero-tag">Mon espace</span>
        <h1>Accède à tes formations</h1>
        <p className="sub">
          Pas de mot de passe à retenir : indique ton e-mail, on t&apos;envoie un lien de
          connexion valable une fois.
        </p>
        <ConnexionForm />
        <p className="auth-note">
          Cet e-mail doit être celui utilisé lors de ton achat — c&apos;est lui qui identifie ton
          accès aux formations.
        </p>
      </div>
    </div>
  );
}
