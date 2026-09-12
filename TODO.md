# To-do — Klar

## 🟠 Avant l'ouverture au public
- [ ] Déployer le site (Vercel) pour avoir un lien public et permettre au webhook Stripe de fonctionner en continu (sans `stripe listen` en local)
- [ ] Passer Stripe en mode réel (clés live) une fois le SIRET obtenu
- [ ] Démarche d'immatriculation micro-entreprise (SIRET) — nécessaire pour Stripe en mode réel et pour être payée
- [ ] Compléter les 3 pages légales (mentions légales, CGV, confidentialité) avec les vraies informations une fois le SIRET obtenu — idéalement faire relire par un professionnel
- [ ] Relecture finale du contenu des 11 formations par Marie-Claire
- [ ] Créer le dépôt GitHub privé (backup / portabilité du projet)

## 🟢 Plus tard / marketing
- [ ] Activer les codes promo (Stripe Promotion Codes)
- [ ] Newsletter automatique (capture e-mail + outil type Brevo)
- [ ] Réseaux sociaux / storytelling CM (version longue de l'histoire Klar déjà rédigée, prête à poster)
- [ ] Remplacer les screenshots restants si besoin d'illustrer davantage certaines pages

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
