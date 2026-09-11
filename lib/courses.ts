export type CourseModule = { title: string; description: string };
export type FaqItem = { question: string; answer: string };

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "ADMINISTRATIF" | "COMMERCIAL" | "FINANCE" | "PRODUCTIVITÉ";
  accent: "sage" | "terracotta" | "indigo";
  tag: string;
  heroSubtitle: string;
  priceEuros: number;
  stripePriceId: string | null;
  meta: { modules: number; lessons: number; quizzes: number };
  buyList: string[];
  learnItems: string[];
  modules: CourseModule[];
  forWho: { yes: string; no: string };
  faq: FaqItem[];
  totalLessonsForProgress: number;
};

export const courses: Course[] = [
  {
    slug: "microentreprise",
    title: "Micro-entreprise 2026 : le guide complet pour gérer l'administratif sans stress",
    shortTitle: "Micro-entreprise 2026",
    category: "ADMINISTRATIF",
    accent: "sage",
    tag: "ADMINISTRATIF · Mise à jour 2026",
    heroSubtitle:
      "Pour micro-entrepreneurs et auto-entrepreneurs français, débutants ou déjà en activité, qui veulent enfin comprendre — et maîtriser — leurs obligations fiscales et sociales.",
    priceEuros: 127,
    stripePriceId: null,
    meta: { modules: 7, lessons: 26, quizzes: 6 },
    buyList: [
      "26 leçons denses et actionnables",
      "6 quiz d'évaluation avec correction",
      "Un module 7 personnel pour poser ton projet à l'écrit",
      "Mises à jour incluses en cas d'évolution réglementaire",
    ],
    learnItems: [
      "Connaître précisément tes seuils de CA 2026 et anticiper tout dépassement.",
      "Émettre des factures conformes, et préparer sereinement le passage à la facturation électronique.",
      "Choisir la bonne périodicité de déclaration URSSAF et ne plus jamais rater une échéance.",
      "Comprendre ta CFE, ton ACRE 2026, et ta déclaration de revenus sans te faire surprendre.",
      "Mettre en place un système simple pour suivre toutes tes échéances, sans y penser en permanence.",
      "Savoir gérer un cumul d'activité, un passage au régime réel, ou une cessation d'activité.",
    ],
    modules: [
      { title: "Comprendre ton statut et tes obligations", description: "Statut, seuils 2026, franchise TVA, nouveautés réglementaires" },
      { title: "La facturation correctement", description: "Mentions obligatoires, facturation électronique, cas particuliers" },
      { title: "Les déclarations URSSAF", description: "Calendrier 2026, versement libératoire, erreurs fréquentes" },
      { title: "Impôts et CFE", description: "2042-C-PRO, cotisation foncière, ACRE 2026" },
      { title: "Organisation et outils", description: "Suivi des échéances, documents à conserver, régularisation" },
      { title: "Les situations particulières", description: "Cumul salariat/chômage, passage au réel, cessation d'activité" },
      { title: "Mon entreprise (ton espace perso)", description: "Pose ton projet à l'écrit, suis ta checklist de lancement" },
    ],
    forWho: {
      yes: "Tu es micro-entrepreneur·e (ou sur le point de le devenir) et tu veux un système clair, à jour, pour gérer ton administratif sans y perdre un temps fou ni stresser à chaque échéance.",
      no: "Tu diriges déjà une société (SASU, EURL...) avec un expert-comptable qui gère l'ensemble — cette formation est spécifiquement centrée sur le régime de la micro-entreprise.",
    },
    faq: [
      { question: "La formation est-elle à jour de la réglementation 2026 ?", answer: "Oui, l'ensemble du contenu — seuils, taux, calendrier, réforme de la facturation électronique — reflète la réglementation en vigueur en 2026." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour en cas d'évolution réglementaire importante." },
      { question: "Puis-je la suivre à mon rythme ?", answer: "Oui, ta progression est sauvegardée automatiquement : tu peux reprendre où tu t'es arrêté·e, à tout moment." },
      { question: "Cette formation remplace-t-elle un expert-comptable ?", answer: "Non — elle te donne les clés pour comprendre et gérer ton administratif courant en autonomie. Pour des situations complexes, l'avis d'un professionnel reste recommandé." },
    ],
    totalLessonsForProgress: 32,
  },
  {
    slug: "clients",
    title: "De la première prise de contact au client payant",
    shortTitle: "Premiers clients",
    category: "COMMERCIAL",
    accent: "terracotta",
    tag: "COMMERCIAL · Pour freelances débutants",
    heroSubtitle:
      "Pour freelances débutants qui reçoivent des demandes mais peinent à les transformer en clients payants — sans improvisation, sans stress, et sans jamais brader leur valeur.",
    priceEuros: 117,
    stripePriceId: null,
    meta: { modules: 7, lessons: 23, quizzes: 6 },
    buyList: [
      "23 leçons avec scripts et modèles prêts à l'emploi",
      "6 quiz d'évaluation avec correction",
      "Une boîte à outils : banque de scripts, modèle de devis, checklist",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Répondre à une première demande en moins de 24h, avec une structure qui rassure immédiatement.",
      "Rédiger un devis complet qui répond aux objections avant même qu'elles soient posées.",
      "Présenter tes prix avec assurance, sans te justifier ni te dévaloriser.",
      "Relancer un prospect silencieux au bon moment, avec le bon message.",
      "Répondre aux objections courantes et conclure une vente sans jamais forcer.",
      "Mettre en place un système simple de suivi pour ne plus jamais improviser.",
    ],
    modules: [
      { title: "Comprendre le processus de vente simple", description: "Pourquoi on perd des clients, les 5 étapes du parcours, la bonne posture" },
      { title: "Répondre parfaitement à une première demande", description: "Analyser la demande, structurer sa réponse, éviter les erreurs qui font fuir" },
      { title: "Le devis qui convertit", description: "Structure complète, présentation des prix, modèles commentés" },
      { title: "La relance intelligente", description: "Timing, messages efficaces, scripts prêts à l'emploi" },
      { title: "Gérer les objections et conclure", description: "Objections fréquentes, acompte, conclure sans forcer" },
      { title: "S'organiser pour ne plus jamais improviser", description: "Modèles, suivi des prospects, checklist complète" },
      { title: "Boîte à outils (ressources)", description: "Banque de scripts, modèle de devis commenté, checklist" },
    ],
    forWho: {
      yes: "Tu es freelance débutant·e (graphiste, développeur·se, coach, consultant·e, rédacteur·rice...) et tu reçois des demandes que tu peines à transformer en clients payants.",
      no: "Tu as déjà un processus commercial rodé avec un excellent taux de conversion — cette formation cible spécifiquement les débuts, là où l'essentiel des clients se perdent.",
    },
    faq: [
      { question: "Les scripts sont-ils vraiment prêts à copier-coller ?", answer: "Oui, chaque script est fourni intégralement dans les leçons et dans la boîte à outils — à personnaliser avec le contexte de chaque prospect." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
      { question: "Cette formation convient-elle à tout type d'activité freelance ?", answer: "Oui, les principes et scripts s'adaptent à toute activité de service B2B ou B2C : graphisme, développement, conseil, rédaction, coaching..." },
    ],
    totalLessonsForProgress: 29,
  },
  {
    slug: "tresorerie",
    title: "Gérer sa trésorerie et anticiper les coups durs",
    shortTitle: "Trésorerie",
    category: "FINANCE",
    accent: "indigo",
    tag: "FINANCE · Pour indépendants français",
    heroSubtitle:
      "Le guide pratique pour suivre son argent simplement, savoir ce qu'on peut vraiment se verser, anticiper les périodes creuses et éviter les mauvaises surprises financières.",
    priceEuros: 107,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons denses et actionnables",
      "5 quiz d'évaluation avec correction",
      "Un modèle de tableau de bord de trésorerie inclus",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Distinguer clairement chiffre d'affaires, bénéfice et argent réellement disponible.",
      "Mettre en place un tableau de bord simple pour suivre ta trésorerie chaque mois.",
      "Calculer ton reste à vivre réel et décider sereinement de ce que tu peux te verser.",
      "Constituer une réserve de sécurité, même avec de petits moyens au départ.",
      "Anticiper les périodes creuses et les grosses échéances sans stress de dernière minute.",
      "Adopter une routine mensuelle de suivi qui prend moins de 20 minutes.",
    ],
    modules: [
      { title: "Comprendre sa trésorerie", description: "CA, bénéfice, argent disponible : les indicateurs simples à suivre" },
      { title: "Mettre en place un suivi simple", description: "Tableau de bord modèle inclus, séparer argent pro et perso" },
      { title: "Anticiper et sécuriser", description: "Reste à vivre réel, réserve de sécurité, périodes creuses" },
      { title: "Se verser et piloter", description: "Décider ce qu'on peut se verser, gérer les imprévus" },
      { title: "Outils et organisation", description: "Outils simples 2026, routine mensuelle, checklist complète" },
    ],
    forWho: {
      yes: "Tu es micro-entrepreneur·e ou freelance et tu manques de visibilité sur ton argent réellement disponible — entre ce que tu factures, ce que tu encaisses, et ce qu'il te reste une fois les charges provisionnées.",
      no: "Tu as déjà un expert-comptable qui pilote ta trésorerie avec des outils dédiés et que tu es pleinement à l'aise avec ton suivi actuel.",
    },
    faq: [
      { question: "Faut-il des compétences en comptabilité pour suivre cette formation ?", answer: "Non, tout est expliqué simplement, sans jargon comptable inutile, avec des méthodes concrètes à appliquer immédiatement." },
      { question: "Le modèle de tableau de bord est-il fourni ?", answer: "Oui, la structure complète du tableau de bord est détaillée dans le module 2, prête à recréer dans un tableur simple." },
      { question: "Cette formation convient-elle aux activités très saisonnières ?", answer: "Oui, le module 3 est spécifiquement centré sur l'anticipation des périodes creuses et des grosses échéances." },
    ],
    totalLessonsForProgress: 20,
  },
  {
    slug: "tarifs",
    title: "Fixer et faire respecter ses tarifs",
    shortTitle: "Tarifs",
    category: "COMMERCIAL",
    accent: "terracotta",
    tag: "COMMERCIAL · Pour freelances et indépendants",
    heroSubtitle:
      "Le guide complet pour arrêter de se sous-vendre : définir ses prix sereinement, les assumer, les augmenter si besoin, et savoir dire non sans culpabiliser.",
    priceEuros: 97,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons avec méthodes et formulations prêtes à l'emploi",
      "5 quiz d'évaluation avec correction",
      "Une méthode simple pour calculer son tarif minimum",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Calculer ton tarif minimum réel, sans te fier uniquement à ton feeling.",
      "Créer plusieurs offres claires, de l'entrée de gamme au premium.",
      "Annoncer tes prix avec assurance, sans t'excuser ni te justifier.",
      "Répondre à un « c'est trop cher » sans céder par réflexe.",
      "Augmenter tes tarifs, y compris auprès de clients existants, sans mal à l'aise.",
      "Dire non aux demandes qui ne correspondent pas, sans culpabiliser.",
    ],
    modules: [
      { title: "Comprendre la logique des prix", description: "Pourquoi on se sous-vend, valeur perçue, façons de tarifer" },
      { title: "Calculer et définir ses tarifs", description: "Méthode de calcul, tarif juste et assumable, offres multiples" },
      { title: "Présenter et défendre ses prix", description: "Annoncer avec assurance, formulations qui fonctionnent" },
      { title: "Augmenter et faire évoluer ses tarifs", description: "Quand augmenter, l'annoncer aux clients existants, dire non" },
      { title: "Ancrer la bonne posture", description: "Confiance sur l'argent, erreurs à éviter, plan d'action" },
    ],
    forWho: {
      yes: "Tu as du mal à fixer tes tarifs, tu te sous-évalues face aux clients, ou tu n'oses pas augmenter tes prix malgré une activité qui se développe.",
      no: "Tu as déjà une grille tarifaire claire, assumée, et que tu l'annonces sans difficulté à chaque prospect.",
    },
    faq: [
      { question: "Cette formation convient-elle à tout type d'activité freelance ?", answer: "Oui, la méthode de calcul et les formulations s'adaptent à toute activité de service, quel que soit le mode de tarification (forfait, journalier, package)." },
      { question: "Vais-je apprendre à augmenter mes tarifs existants ?", answer: "Oui, le module 4 est entièrement dédié à l'augmentation des tarifs, y compris l'annonce à des clients déjà en cours de collaboration." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
    ],
    totalLessonsForProgress: 20,
  },
  {
    slug: "facturation",
    title: "Facturer et se faire payer à temps",
    shortTitle: "Facturation",
    category: "ADMINISTRATIF",
    accent: "sage",
    tag: "ADMINISTRATIF · Anti-impayés",
    heroSubtitle:
      "Le guide pratique pour facturer correctement, sécuriser tes paiements, relancer efficacement et gérer les impayés sans y laisser ton énergie.",
    priceEuros: 107,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons avec scripts de relance prêts à l'emploi",
      "5 quiz d'évaluation avec correction",
      "La procédure amiable de recouvrement étape par étape",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Poser des conditions de paiement claires dès le devis, pour limiter les retards.",
      "Facturer au bon moment, avec les bons réflexes pour être payé plus vite.",
      "Relancer efficacement, sans y laisser ton énergie ni ta relation client.",
      "Gérer un silence ou une promesse de paiement non tenue avec méthode.",
      "Mener une procédure amiable de recouvrement étape par étape.",
      "Savoir quand lâcher l'affaire, et quand aller plus loin.",
    ],
    modules: [
      { title: "Poser les bases", description: "Règles d'une facturation saine, acomptes, conditions générales" },
      { title: "Facturer correctement", description: "Mentions obligatoires, timing, bons réflexes pour être payé vite" },
      { title: "Relancer sans s'épuiser", description: "Calendrier de relance, messages qui fonctionnent, cas particuliers" },
      { title: "Gérer les impayés", description: "Procédure amiable, mise en demeure, recours possibles" },
      { title: "S'organiser pour éviter les problèmes", description: "Suivi des factures, outils utiles, checklist anti-impayés" },
    ],
    forWho: {
      yes: "Tu attends parfois longtemps d'être payé·e, tu redoutes les relances, ou tu as déjà été confronté·e à un impayé sans savoir comment réagir.",
      no: "Tu factures exclusivement des clients qui paient au moment de la commande (vente directe en ligne, par exemple), sans délai de paiement à gérer.",
    },
    faq: [
      { question: "Cette formation couvre-t-elle les recours juridiques en cas d'impayé ?", answer: "Oui, le module 4 détaille la procédure amiable, la mise en demeure et les recours possibles, avec les critères pour savoir quand persévérer et quand laisser tomber." },
      { question: "Les scripts de relance sont-ils vraiment utilisables tels quels ?", answer: "Oui, chaque script est fourni intégralement, à personnaliser avec le contexte de chaque situation." },
      { question: "Cette formation complète-t-elle \"Micro-entreprise 2026\" ?", answer: "Oui, les deux formations sont complémentaires : l'une couvre tes obligations administratives, l'autre ta relation de paiement avec tes clients." },
    ],
    totalLessonsForProgress: 20,
  },
  {
    slug: "organisation",
    title: "S'organiser efficacement en solo",
    shortTitle: "Organisation",
    category: "PRODUCTIVITÉ",
    accent: "indigo",
    tag: "PRODUCTIVITÉ · Pour indépendants qui se sentent débordés",
    heroSubtitle:
      "La méthode simple pour arrêter de se disperser : mieux organiser son temps, prioriser vraiment, réduire la charge mentale et tenir sur la durée sans s'épuiser.",
    priceEuros: 97,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons avec méthode concrète, pas de motivation creuse",
      "5 quiz d'évaluation avec correction",
      "Un plan d'action personnalisé en fin de formation",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Comprendre pourquoi tu te disperses, et repérer tes propres pièges d'organisation.",
      "Construire un système d'organisation à 3 niveaux : journée, semaine, mois.",
      "Prioriser vraiment, au lieu de traiter les tâches dans l'ordre où elles arrivent.",
      "Structurer une journée type qui protège ton temps de travail profond.",
      "Choisir des outils vraiment utiles, sans tomber dans la sur-optimisation.",
      "Tenir ton système dans la durée, sans effet yo-yo après quelques semaines.",
    ],
    modules: [
      { title: "Comprendre le problème", description: "Pourquoi on se disperse, charge mentale, erreurs courantes" },
      { title: "Construire son système", description: "3 niveaux d'organisation, prioriser vraiment, système durable" },
      { title: "Organiser ses journées", description: "Journée type, gérer les imprévus, protéger son temps profond" },
      { title: "Outils et routines", description: "Outils vraiment utiles, routines hebdo et mensuelles, ajustement" },
      { title: "Tenir dans le temps", description: "Éviter l'effet yo-yo, gérer motivation et énergie, plan d'action" },
    ],
    forWho: {
      yes: "Tu travailles seul·e, tu te sens souvent débordé·e ou dispersé·e, et les méthodes de productivité génériques que tu as essayées n'ont pas tenu dans la durée.",
      no: "Tu as déjà un système d'organisation qui te convient parfaitement et que tu tiens sans difficulté depuis longtemps.",
    },
    faq: [
      { question: "Cette formation impose-t-elle une méthode ou des outils précis ?", answer: "Non, elle donne des principes et une méthode adaptable à tes propres outils et à ton mode de fonctionnement." },
      { question: "Est-ce adapté si j'ai déjà essayé plusieurs méthodes sans succès ?", answer: "Oui, le module 5 traite spécifiquement de l'effet yo-yo de l'organisation et de comment tenir un système dans la durée." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
    ],
    totalLessonsForProgress: 20,
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
