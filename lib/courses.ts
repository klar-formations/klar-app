export type CourseModule = { title: string; description: string };
export type FaqItem = { question: string; answer: string };

export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "ADMINISTRATIF" | "COMMERCIAL" | "FINANCE" | "PRODUCTIVITÉ" | "FONDATIONS" | "PROTECTION";
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
  /** Optional cross-reference note shown below "Pour qui, pas pour qui" on the produit page. */
  prerequisiteNote?: string;
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
    slug: "niche",
    title: "Niche, Offre & Système de vente",
    shortTitle: "Niche, Offre & Vente",
    category: "FONDATIONS",
    accent: "sage",
    tag: "FONDATIONS · Pour freelances et indépendants",
    heroSubtitle:
      "Le guide complet pour savoir précisément à qui tu t'adresses, ce que tu vends, et comment faire en sorte que les bonnes personnes le découvrent — la base sur laquelle tout le reste devient plus simple.",
    priceEuros: 97,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons avec méthode et exemples concrets",
      "5 quiz d'évaluation avec correction",
      "Un plan d'action personnalisé en fin de formation",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Distinguer un secteur d'activité d'une vraie niche, et identifier la tienne.",
      "Valider ta niche à moindre coût, avant de t'y engager pleinement.",
      "Transformer une liste de compétences en une offre claire et lisible.",
      "Structurer ton offre en plusieurs niveaux, sans brader ton offre principale.",
      "Choisir un canal de visibilité adapté à ta niche, et tenir une routine simple.",
      "Transformer l'attention générée en vraies prises de contact.",
    ],
    modules: [
      { title: "Pourquoi niche, offre et vente sont indissociables", description: "Le fil conducteur de toute la formation" },
      { title: "Trouver et valider sa niche", description: "Identifier un positionnement précis, puis le tester" },
      { title: "Construire une offre claire et vendable", description: "D'une liste de compétences à une offre lisible et structurée" },
      { title: "Mettre en place un système pour faire venir des prospects", description: "Choisir un canal, tenir une routine, générer du contact" },
      { title: "Aligner les trois et éviter les pièges", description: "Erreurs classiques, signaux à observer, plan d'action" },
    ],
    forWho: {
      yes: "Tu te sens dispersé·e dans tes missions ou ta communication, tu as du mal à répondre en une phrase à « tu fais quoi ? », ou tes prospects ne correspondent jamais tout à fait à ce que tu voudrais faire.",
      no: "Tu as déjà une niche et une offre claires, qui te ramènent régulièrement les bons prospects — direction plutôt les formations Tarifs ou Premiers clients pour aller plus loin.",
    },
    faq: [
      { question: "Faut-il déjà avoir une activité lancée pour suivre cette formation ?", answer: "Non, elle convient aussi bien à quelqu'un qui prépare son lancement qu'à un indépendant déjà en activité qui cherche à se repositionner plus clairement." },
      { question: "Cette formation va-t-elle m'obliger à changer complètement de niche ?", answer: "Pas nécessairement. L'objectif est de clarifier et de préciser ce qui existe déjà, pas forcément de tout reconstruire depuis zéro." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
    ],
    totalLessonsForProgress: 20,
    prerequisiteNote:
      "Cette formation se situe en amont du catalogue Klar. Une fois ta niche et ton offre posées, les formations « Fixer et faire respecter ses tarifs » et « De la première prise de contact au client payant » prennent le relais.",
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
    prerequisiteNote:
      "Cette formation part du principe que tu as déjà une offre claire et que des prospects te contactent. Si ce n'est pas encore le cas, la formation « Niche, Offre & Système de vente » t'aide à poser ces bases en amont.",
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
    prerequisiteNote:
      "Cette formation part du principe que ton activité et ton offre sont déjà définies. Si ce n'est pas encore le cas — si ta niche ou ton offre restent floues — la formation « Niche, Offre & Système de vente » est le point de départ le plus logique.",
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
  {
    slug: "communication",
    title: "Communication visuelle : de quoi as-tu vraiment besoin ?",
    shortTitle: "Communication visuelle",
    category: "FONDATIONS",
    accent: "terracotta",
    tag: "FONDATIONS · Pour freelances et indépendants",
    heroSubtitle:
      "Le guide pour savoir précisément ce dont ton activité a besoin — logo, charte graphique, réseaux, site, supports physiques — dans quel ordre, avec quel niveau minimum, et quand déléguer plutôt que bricoler.",
    priceEuros: 97,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons pour diagnostiquer et prioriser, pas des tutoriels logiciels",
      "5 quiz d'évaluation avec correction",
      "Une méthode pour choisir entre DIY et professionnel",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Identifier tes vrais besoins visuels selon ta niche, ton offre et ton canal.",
      "Éviter les deux pièges opposés : trop investir trop tôt, ou rester invisible trop longtemps.",
      "Construire un logo et une charte graphique minimum viables, cohérents et faciles à tenir.",
      "Savoir quand un site vitrine suffit, et quand un tunnel de vente devient utile.",
      "Reconnaître quand un flyer, un support physique ou une vidéo deviennent vraiment pertinents.",
      "Trancher entre faire soi-même et déléguer, et bien briefer un professionnel.",
    ],
    modules: [
      { title: "Pourquoi la plupart investissent dans le mauvais ordre", description: "Les deux pièges opposés, et le bon ordre à suivre" },
      { title: "Diagnostiquer ses besoins réels", description: "Selon sa niche, son offre et son canal principal" },
      { title: "Le socle minimum viable", description: "Logo, charte graphique et présence en ligne de base" },
      { title: "Les supports selon le canal choisi", description: "Réseaux, site ou tunnel de vente, supports physiques et vidéo" },
      { title: "Faire soi-même ou déléguer", description: "Critères de choix, brief efficace, budget réaliste" },
    ],
    forWho: {
      yes: "Tu ne sais pas si tu as besoin d'un logo, d'un site ou de plus de présence sur les réseaux, tu as déjà investi dans des supports jamais vraiment utilisés, ou tu hésites entre bricoler toi-même et faire appel à un professionnel.",
      no: "Tu cherches un tutoriel pour apprendre à utiliser un logiciel de design ou à monter une vidéo — cette formation aide à décider quoi faire, pas à l'exécuter techniquement.",
    },
    faq: [
      { question: "Vais-je apprendre à créer un logo ou un site moi-même ?", answer: "Non, cette formation ne remplace pas un logiciel de design ou un constructeur de site — elle t'aide à savoir précisément ce dont tu as besoin, avant de le faire toi-même simplement ou de le confier à un professionnel." },
      { question: "J'ai déjà un logo et des réseaux sociaux, cette formation m'apporte-t-elle quelque chose ?", answer: "Oui : une bonne partie du travail consiste justement à diagnostiquer si l'existant est cohérent et bien utilisé, plutôt que de tout recréer inutilement." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
    ],
    totalLessonsForProgress: 20,
    prerequisiteNote:
      "Cette formation part du principe que ta niche et ton offre sont déjà posées. Si ce n'est pas encore le cas, la formation « Niche, Offre & Système de vente » est le point de départ le plus logique.",
  },
  {
    slug: "protection-sociale",
    title: "Ta protection sociale d'indépendant·e",
    shortTitle: "Protection sociale",
    category: "PROTECTION",
    accent: "indigo",
    tag: "PROTECTION · Pour micro-entrepreneur·ses",
    heroSubtitle:
      "Le guide pour comprendre à quoi tu as vraiment droit — arrêt maladie, congé maternité et paternité, retraite — et comment protéger ce que le régime obligatoire ne couvre pas.",
    priceEuros: 97,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons avec chiffres et conditions à jour de 2026",
      "5 quiz d'évaluation avec correction",
      "Une checklist complète de protection sociale",
      "Mises à jour incluses en cas d'évolution réglementaire",
    ],
    learnItems: [
      "Comprendre à quoi tu as vraiment droit en tant que micro-entrepreneur·se, et ce qui ne l'est pas.",
      "Savoir si tu remplis les conditions pour être indemnisé·e en cas d'arrêt maladie.",
      "Connaître tes droits précis en cas de congé maternité ou paternité, et les démarches à suivre.",
      "Comprendre comment tes trimestres de retraite sont validés, et anticiper une pension souvent modeste.",
      "Identifier les trous de couverture (accidents du travail) et évaluer une prévoyance complémentaire.",
      "Repartir avec une checklist complète à vérifier chaque année.",
    ],
    modules: [
      { title: "Comprendre à quoi tu as droit", description: "Le mythe « indépendant = pas protégé », ce qui est vrai et faux" },
      { title: "L'arrêt maladie", description: "Conditions, calcul des indemnités, ce qui n'est pas couvert" },
      { title: "Congé maternité et paternité", description: "Durée, conditions, calcul des deux prestations" },
      { title: "La retraite du micro-entrepreneur", description: "Validation des trimestres, retraite complémentaire" },
      { title: "S'organiser pour protéger l'avenir", description: "Prévoyance complémentaire, vérification annuelle, checklist" },
    ],
    forWho: {
      yes: "Tu ne sais pas précisément à quoi tu as droit en cas d'arrêt maladie ou de maternité, tu t'inquiètes pour ta future retraite, ou tu veux simplement comprendre ta situation avant qu'un imprévu ne te force à tout découvrir dans l'urgence.",
      no: "Tu cherches un conseil personnalisé sur ta situation précise — cette formation donne les repères généraux, pas un avis individuel sur ton dossier (voir la CPAM ou un conseiller retraite pour cela).",
    },
    faq: [
      { question: "Les chiffres et seuils indiqués sont-ils à jour ?", answer: "Oui, l'ensemble des montants et conditions reflète la réglementation 2026 en vigueur au moment de la rédaction. Ces éléments évoluent chaque année : les mises à jour de la formation sont incluses." },
      { question: "Cette formation remplace-t-elle un conseiller retraite ou la CPAM ?", answer: "Non, elle donne les repères généraux pour comprendre le système et poser les bonnes questions, mais ne remplace pas un calcul personnalisé sur ta situation individuelle." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
    ],
    totalLessonsForProgress: 20,
    prerequisiteNote:
      "Cette formation complète naturellement « Micro-entreprise 2026 » (le cadre administratif global) et « Gérer sa trésorerie et anticiper les coups durs » (la réserve financière face aux imprévus).",
  },
  {
    slug: "protection-juridique",
    title: "Se protéger juridiquement : CGV, contrats et propriété intellectuelle",
    shortTitle: "Protection juridique",
    category: "PROTECTION",
    accent: "indigo",
    tag: "PROTECTION · Pour freelances et indépendants",
    heroSubtitle:
      "Le guide pour comprendre ce qui te protège vraiment (et ce qui ne te protège pas encore) : conditions générales de vente, contrats de prestation, propriété intellectuelle, et gestion d'un désaccord avec un client.",
    priceEuros: 97,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons avec modèles de clauses commentées",
      "5 quiz d'évaluation avec correction",
      "Des exemples de formulations prêtes à adapter",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Comprendre ce que la séparation de patrimoine protège vraiment, et ce qu'elle ne couvre pas.",
      "Savoir si la RC pro est obligatoire pour ton activité, et pourquoi la souscrire même sans obligation.",
      "Rédiger des CGV et un contrat de prestation qui protègent vraiment, avec des clauses commentées.",
      "Comprendre qui possède réellement ce que tu crées pour un client, et rédiger une clause de cession claire.",
      "Réagir avec méthode face à un désaccord ou un client insatisfait.",
      "Savoir reconnaître le moment où consulter un professionnel du droit devient nécessaire.",
    ],
    modules: [
      { title: "Comprendre ce qui te protège (et ce qui ne te protège pas)", description: "Patrimoine séparé, RC pro, panorama des protections" },
      { title: "Les CGV : ton cadre de référence", description: "Ce qu'elles doivent contenir, B2C vs B2B" },
      { title: "Le contrat de prestation", description: "Les clauses qui protègent le plus, modèles commentés" },
      { title: "La propriété intellectuelle", description: "Qui possède quoi, cession de droits, cas particuliers" },
      { title: "Gérer un désaccord ou un litige", description: "Prévenir, réagir, savoir consulter un professionnel" },
    ],
    forWho: {
      yes: "Tu n'as jamais de CGV ni de contrat clair, tu ne sais pas qui possède réellement ce que tu livres à tes clients, ou tu redoutes de ne pas savoir réagir face à un désaccord ou un litige.",
      no: "Tu es déjà accompagné·e par un avocat sur l'ensemble de ces sujets — cette formation te donne l'essentiel pour l'autonomie au quotidien, pas un service juridique personnalisé.",
    },
    faq: [
      { question: "Cette formation remplace-t-elle un avocat ?", answer: "Non, elle donne les bons réflexes et les repères pour la majorité des situations courantes, mais ne remplace jamais un conseil personnalisé pour un litige déjà engagé ou une situation complexe." },
      { question: "Vais-je recevoir des modèles de clauses à copier directement ?", answer: "Oui, plusieurs exemples de clauses commentées sont fournis, à adapter à ta propre activité — pas des modèles universels à utiliser tels quels sans réflexion." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
    ],
    totalLessonsForProgress: 20,
    prerequisiteNote:
      "Cette formation complète naturellement « Facturer et se faire payer à temps » (le volet paiement) et « De la première prise de contact au client payant » (le volet commercial).",
  },
  {
    slug: "fidelisation",
    title: "Fidéliser et faire grandir sa clientèle existante",
    shortTitle: "Fidélisation",
    category: "COMMERCIAL",
    accent: "sage",
    tag: "COMMERCIAL · Pour freelances et indépendants",
    heroSubtitle:
      "Le guide pour transformer un client ponctuel en client récurrent, vendre plus sans forcer, et récolter recommandations et témoignages sans malaise — la suite logique après ta première vente.",
    priceEuros: 97,
    stripePriceId: null,
    meta: { modules: 5, lessons: 15, quizzes: 5 },
    buyList: [
      "15 leçons avec scripts de messages prêts à adapter",
      "5 quiz d'évaluation avec correction",
      "Un plan d'action personnalisé en fin de formation",
      "Mises à jour incluses",
    ],
    learnItems: [
      "Comprendre pourquoi tes clients existants sont ta ressource commerciale la plus sous-exploitée.",
      "Rester dans le paysage après une mission, sans jamais ressembler à une relance commerciale.",
      "Repérer les occasions naturelles de vendre plus à un client déjà convaincu.",
      "Demander un témoignage ou une recommandation sans malaise, et les utiliser efficacement.",
      "Éviter les erreurs qui cassent une relation client construite sur la durée.",
      "Mettre en place une routine de fidélisation simple et tenable dans le temps.",
    ],
    modules: [
      { title: "La ressource la plus sous-exploitée", description: "Pourquoi les clients existants comptent tant, ce qui les fait revenir" },
      { title: "Rester dans le paysage après la mission", description: "Bon rythme, messages non commerciaux, documenter ses clients" },
      { title: "Vendre plus à un client déjà convaincu", description: "Repérer les occasions, proposer sans forcer" },
      { title: "Transformer la satisfaction en preuve sociale", description: "Témoignages et recommandations, sans malaise" },
      { title: "Construire un système durable", description: "Erreurs à éviter, routine simple, plan d'action" },
    ],
    forWho: {
      yes: "Tu passes ton temps à chercher de nouveaux clients sans jamais penser à ceux que tu as déjà, ou tu te sens gêné·e à l'idée de demander un témoignage ou de proposer une suite à une mission.",
      no: "Tu n'as pas encore signé ton premier client — commence plutôt par « De la première prise de contact au client payant », cette formation prend le relais juste après.",
    },
    faq: [
      { question: "Cette formation convient-elle à toute activité freelance ?", answer: "Oui, les principes s'adaptent à toute activité de service qui travaille avec des clients récurrents ou ponctuels, quel que soit le secteur." },
      { question: "Vais-je apprendre à demander des témoignages sans avoir l'air de mendier ?", answer: "Oui, c'est précisément l'objet du module 4, avec des formulations concrètes prêtes à adapter." },
      { question: "Combien de temps ai-je accès à la formation ?", answer: "L'accès est à vie, avec les mises à jour incluses." },
    ],
    totalLessonsForProgress: 20,
    prerequisiteNote:
      "Cette formation est la suite naturelle de « De la première prise de contact au client payant », une fois la première mission déjà signée et livrée.",
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
