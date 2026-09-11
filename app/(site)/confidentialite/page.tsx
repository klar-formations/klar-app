export const metadata = { title: "Politique de confidentialité — Klar" };

export default function ConfidentialitePage() {
  return (
    <div className="wrap legal-page">
      <h1>Politique de confidentialité</h1>
      <p className="legal-updated">Dernière mise à jour : à compléter à la mise en ligne.</p>

      <div className="legal-notice">
        Base de travail conforme au RGPD, à faire relire avant l&apos;ouverture au public.
        Complète chaque <span className="legal-placeholder">texte surligné</span>.
      </div>

      <h2>Responsable du traitement</h2>
      <p>
        <span className="legal-placeholder">Prénom NOM</span>, micro-entrepreneur, éditrice du
        site Klar, est responsable du traitement des données personnelles collectées sur ce site.
        Contact : <span className="legal-placeholder">adresse e-mail de contact</span>.
      </p>

      <h2>Données collectées</h2>
      <p>Klar collecte uniquement les données nécessaires au fonctionnement du service :</p>
      <ul>
        <li>Adresse e-mail (création de compte, envoi du lien de connexion, accès aux formations)</li>
        <li>Historique d&apos;achat (quelles formations ont été achetées, à quelle date)</li>
        <li>Ta progression dans les formations (leçons et quiz terminés), enregistrée localement
          dans ton navigateur — cette donnée n&apos;est pas transmise à Klar
        </li>
      </ul>
      <p>
        Les informations de paiement (numéro de carte bancaire, etc.) ne sont jamais reçues ni
        stockées par Klar : elles sont traitées directement par Stripe, notre prestataire de
        paiement.
      </p>

      <h2>Finalités et base légale</h2>
      <p>
        Ces données sont traitées pour exécuter le contrat de vente (créer ton accès, te
        permettre de te connecter, te fournir la formation achetée) et pour répondre à nos
        obligations légales (facturation). Aucune donnée n&apos;est utilisée à des fins
        publicitaires, et Klar ne revend aucune donnée à des tiers.
      </p>

      <h2>Sous-traitants</h2>
      <p>Klar fait appel aux prestataires suivants pour fonctionner :</p>
      <ul>
        <li><strong>Stripe</strong> (paiement en ligne) — voir la politique de confidentialité de Stripe</li>
        <li><strong>Supabase</strong> (gestion des comptes et de la base de données) — hébergement des données en <span className="legal-placeholder">région à préciser</span></li>
        <li><strong>Vercel</strong> (hébergement du site)</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Klar utilise uniquement des cookies strictement nécessaires au fonctionnement du site
        (maintien de ta connexion à ton espace personnel). Aucun cookie publicitaire ou de mesure
        d&apos;audience tierce n&apos;est déposé à ce jour.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les données de compte sont conservées tant que ton compte est actif. Les données de
        facturation sont conservées pendant la durée légale de conservation des documents
        comptables (10 ans).
      </p>

      <h2>Tes droits</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD), tu disposes d&apos;un
        droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition concernant tes
        données personnelles. Pour exercer ces droits, contacte{" "}
        <span className="legal-placeholder">adresse e-mail de contact</span>. Tu peux également
        introduire une réclamation auprès de la CNIL (cnil.fr).
      </p>
    </div>
  );
}
