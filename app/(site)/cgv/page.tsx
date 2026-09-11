export const metadata = { title: "Conditions générales de vente — Klar" };

export default function CGVPage() {
  return (
    <div className="wrap legal-page">
      <h1>Conditions générales de vente</h1>
      <p className="legal-updated">Dernière mise à jour : à compléter à la mise en ligne.</p>

      <div className="legal-notice">
        Base de travail à faire relire avant l&apos;ouverture au public (notamment la clause de
        renonciation au droit de rétractation, spécifique aux contenus numériques). Complète
        chaque <span className="legal-placeholder">texte surligné</span>.
      </div>

      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes conditions générales de vente (CGV) régissent les ventes de formations en
        ligne réalisées sur le site Klar par{" "}
        <span className="legal-placeholder">Prénom NOM, micro-entrepreneur, SIRET à compléter</span>
        , auprès de tout client (« l&apos;Acheteur »). Toute commande implique l&apos;acceptation
        sans réserve des présentes CGV.
      </p>

      <h2>Article 2 — Produits</h2>
      <p>
        Klar propose des formations numériques (contenus écrits, modules, quiz) consultables en
        ligne après création d&apos;un accès personnel, associé à l&apos;adresse e-mail utilisée
        lors de l&apos;achat. Chaque formation est présentée sur sa page produit avec son
        contenu, son prix et ses modalités d&apos;accès.
      </p>

      <h2>Article 3 — Prix et paiement</h2>
      <p>
        Les prix sont indiqués en euros. <span className="legal-placeholder">
          TVA non applicable, article 293 B du Code général des impôts (à confirmer selon ton
          statut de franchise en base de TVA)
        </span>
        . Le paiement s&apos;effectue en une seule fois, par carte bancaire, via le prestataire de
        paiement sécurisé Stripe. Klar ne stocke aucune donnée bancaire.
      </p>

      <h2>Article 4 — Livraison / accès</h2>
      <p>
        L&apos;accès à la formation est délivré automatiquement après confirmation du paiement :
        un e-mail est envoyé à l&apos;adresse renseignée lors de l&apos;achat, contenant un lien
        de connexion à l&apos;espace personnel. L&apos;accès est nominatif et valable à vie, sauf
        mention contraire sur la page produit.
      </p>

      <h2>Article 5 — Droit de rétractation</h2>
      <p>
        Conformément à l&apos;article L221-28 12° du Code de la consommation, le droit de
        rétractation ne peut être exercé pour les contenus numériques fournis sur un support
        immatériel dont l&apos;exécution a commencé après accord préalable exprès du consommateur
        et renoncement exprès à son droit de rétractation.
      </p>
      <p>
        En validant sa commande, l&apos;Acheteur reconnaît demander l&apos;accès immédiat à la
        formation et renonce expressément à son droit de rétractation de 14 jours dès lors que
        l&apos;accès lui a été délivré.
      </p>

      <h2>Article 6 — Mises à jour du contenu</h2>
      <p>
        Les formations à contenu réglementaire (administratif, fiscal, social) sont mises à jour
        par Klar en cas d&apos;évolution significative de la réglementation, sans frais
        supplémentaire pour les personnes ayant déjà acheté la formation concernée.
      </p>

      <h2>Article 7 — Responsabilité</h2>
      <p>
        Les formations ont une vocation pédagogique et informative. Elles ne remplacent pas
        l&apos;avis d&apos;un professionnel du droit, de la comptabilité ou de la fiscalité pour
        des situations particulières. Klar ne saurait être tenu responsable des décisions prises
        par l&apos;Acheteur sur la seule base des contenus proposés.
      </p>

      <h2>Article 8 — Réclamations et médiation</h2>
      <p>
        Pour toute réclamation, l&apos;Acheteur peut contacter{" "}
        <span className="legal-placeholder">adresse e-mail de contact</span>. Conformément aux
        articles L616-1 et suivants du Code de la consommation, en cas de litige non résolu à
        l&apos;amiable, l&apos;Acheteur peut recourir gratuitement au service de médiation de la
        consommation :{" "}
        <span className="legal-placeholder">
          nom et coordonnées du médiateur de la consommation à désigner
        </span>
        .
      </p>

      <h2>Article 9 — Droit applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. À défaut de résolution amiable, tout
        litige relève de la compétence des tribunaux français.
      </p>
    </div>
  );
}
