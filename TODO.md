# To-do — Klar

## 🔴 À faire côté toi
- [ ] (Optionnel) Générer un mot de passe d'application Gmail pour recevoir une notification e-mail à chaque nouvel avis déposé — sinon les avis sont bien enregistrés mais sans notification

## 🟠 Avant l'ouverture au public
- [ ] Passer Stripe en mode réel (clés live) une fois le SIRET obtenu
- [ ] Démarche d'immatriculation micro-entreprise (SIRET) — nécessaire pour Stripe en mode réel et pour être payée
- [ ] Compléter les 3 pages légales (mentions légales, CGV, confidentialité) avec les vraies informations une fois le SIRET obtenu — idéalement faire relire par un professionnel
- [ ] Relecture finale du contenu des 11 formations par Marie-Claire
- [ ] Configurer l'envoi des e-mails de connexion depuis le domaine perso (délivrabilité, actuellement via l'adresse générique Supabase)

## 🟢 Plus tard / marketing
- [ ] Activer les codes promo (Stripe Promotion Codes)
- [ ] Newsletter automatique (capture e-mail + outil type Brevo)
- [ ] Réseaux sociaux / storytelling CM (version longue de l'histoire Klar déjà rédigée, prête à poster)
- [ ] Remplacer les screenshots restants si besoin d'illustrer davantage certaines pages
- [ ] SEO de base (sitemap, meta Open Graph) + outil d'analytics simple

## ✅ Fait
- [x] Site Next.js construit (catalogue, pages produit, auth Supabase, paiement Stripe testé de bout en bout)
- [x] Design + photos des 11 formations + hero (variées entre catalogue et fiche produit)
- [x] Curseur rond personnalisé
- [x] Contenu complet des 11 formations intégré (lecteur de formation : leçons, quiz, progression)
- [x] Barre de progression par formation sur "Mes formations"
- [x] Section "Pourquoi Klar existe" sur la homepage + version longue pour réseaux sociaux
- [x] Encadrés "Outils recommandés" dans les leçons concernées
- [x] 3 pages légales rédigées (brouillon) et reliées depuis le footer
- [x] Logo exporté (PNG/JPEG) + charte graphique (typos, hex)
- [x] Compte Supabase débloqué, achat réel testé (compte auto-créé + accès débloqué + e-mail magic link reçu)
- [x] Page "Par où commencer ?" (`/parcours`) avec 3 packs de formations à -10% (prix barré + prix final)
- [x] Bandeau d'accueil vers "/parcours" rendu visible
- [x] Placeholder vide "Le programme" remplacé par un design (pastilles + timeline des modules)
- [x] Dépôt GitHub privé créé, site déployé sur Vercel (https://klar-app-five.vercel.app), webhook Stripe de prod configuré
- [x] Page dédiée `/catalogue` (homepage limitée à 3 formations + bouton vers le catalogue complet)
- [x] Menu mobile (burger) — les liens de navigation étaient invisibles sur téléphone
- [x] Espace utilisateur `/compte` : informations personnelles, paiements/factures, confidentialité (RGPD)
- [x] Réduction de -5% sur les formations restantes d'un pack si certaines sont déjà achetées
- [x] Système d'avis : formulaire caché `/avis`, modération `/admin/avis`, carrousel de témoignages sur la homepage (3 avis fictifs en attendant les vrais retours)
- [x] Tables Supabase `profiles` et `reviews` créées et actives
- [x] Nom de domaine personnalisé acheté et connecté : https://www.klar-formations.com (webhook Stripe + variables mises à jour)
