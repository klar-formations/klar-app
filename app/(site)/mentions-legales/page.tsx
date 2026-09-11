export const metadata = { title: "Mentions légales — Klar" };

export default function MentionsLegalesPage() {
  return (
    <div className="wrap legal-page">
      <h1>Mentions légales</h1>
      <p className="legal-updated">Dernière mise à jour : à compléter à la mise en ligne.</p>

      <div className="legal-notice">
        Page à finaliser avant l&apos;ouverture au public : remplace chaque{" "}
        <span className="legal-placeholder">texte surligné</span> par tes informations réelles
        une fois ton immatriculation de micro-entrepreneur obtenue (SIRET notamment).
      </div>

      <h2>Éditeur du site</h2>
      <p>
        Le site Klar (accessible à l&apos;adresse [nom de domaine à venir]) est édité par :
        <br />
        <span className="legal-placeholder">Prénom NOM</span>, entrepreneur individuel (micro-entreprise)
        <br />
        Adresse : <span className="legal-placeholder">adresse complète</span>
        <br />
        SIRET : <span className="legal-placeholder">numéro SIRET</span>
        <br />
        E-mail : <span className="legal-placeholder">adresse e-mail de contact</span>
      </p>

      <h2>Directeur de la publication</h2>
      <p>
        <span className="legal-placeholder">Prénom NOM</span>, en qualité d&apos;éditeur du site.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par :
        <br />
        Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
        <br />
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          vercel.com
        </a>
      </p>
      <p>
        Les données de comptes et de paiement sont traitées par des prestataires tiers : voir la{" "}
        <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, structure des formations,
        illustrations, charte graphique) est protégé par le droit d&apos;auteur. Toute
        reproduction ou diffusion, totale ou partielle, sans autorisation écrite préalable, est
        interdite.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative au site ou à son contenu, contact :{" "}
        <span className="legal-placeholder">adresse e-mail de contact</span>.
      </p>
    </div>
  );
}
