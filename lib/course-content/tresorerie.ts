import type { CourseModuleData } from "../course-player/types";

export const modules: CourseModuleData[] = [
  {
    "id": "t1",
    "title": "Comprendre sa trésorerie",
    "icon": "coin",
    "desc": "La différence entre chiffre d'affaires, bénéfice et argent disponible — et pourquoi elle change tout.",
    "lessons": [
      {
        "id": "t1l1",
        "title": "La différence entre chiffre d'affaires, bénéfice et argent disponible",
        "html": "\n      <p>Trois notions se ressemblent mais désignent des réalités très différentes — et les confondre est la source numéro un des difficultés de trésorerie chez les indépendants.</p>\n      <h4>Le chiffre d'affaires (CA)</h4>\n      <p>C'est le total de ce que tu encaisses pour tes ventes ou prestations, avant toute déduction. C'est un indicateur d'activité, pas un indicateur de richesse disponible : une grande partie de ce montant ne t'appartient pas vraiment, puisqu'elle est destinée à couvrir tes cotisations sociales, ton impôt, et tes charges professionnelles.</p>\n      <h4>Le bénéfice</h4>\n      <p>C'est ce qu'il reste une fois que tu as retiré du CA l'ensemble de tes charges : cotisations sociales, impôt, charges professionnelles (outils, déplacements, sous-traitance...). C'est un indicateur comptable et annuel — utile pour ta déclaration de revenus, mais qui ne te dit rien sur ce que tu as réellement sur ton compte à un instant T.</p>\n      <h4>L'argent disponible</h4>\n      <p>C'est la vraie question qui compte au quotidien : combien puis-je dépenser ou me verser <strong>aujourd'hui</strong>, sans mettre en danger le paiement de mes prochaines cotisations, de mes charges, ou de mes imprévus ? Cet argent disponible est toujours inférieur au solde brut de ton compte bancaire professionnel, car une partie de ce solde est déjà \"engagée\" pour des dépenses à venir.</p>\n      <h4>Un exemple simple</h4>\n      <p>Tu encaisses 3 000 € ce mois-ci (ton CA du mois). Tes cotisations sociales représenteront environ 700 € à provisionner. Tu as aussi 200 € de charges professionnelles courantes. Ton bénéfice réel du mois est donc d'environ 2 100 €. Mais si tu dois aussi mettre 300 € de côté pour ta réserve de sécurité (module 3), ton argent réellement disponible à te verser ce mois-ci tombe à 1 800 €.</p>\n      <div class=\"callout\"><strong>Le principe à retenir :</strong> ton compte bancaire professionnel n'affiche jamais \"ce que tu peux dépenser\". Il affiche un mélange de ton argent disponible et de l'argent qui doit encore partir ailleurs. Tout l'enjeu de cette formation est de séparer clairement les deux.</div>\n      ",
        "keypoints": [
          "Le chiffre d'affaires est un indicateur d'activité, pas de richesse disponible.",
          "Le bénéfice est un indicateur comptable annuel, utile mais insuffisant pour le pilotage au quotidien.",
          "L'argent disponible est ce que tu peux réellement dépenser sans mettre en danger tes prochaines échéances.",
          "Le solde de ton compte pro mélange toujours de l'argent disponible et de l'argent déjà engagé ailleurs."
        ]
      },
      {
        "id": "t1l2",
        "title": "Pourquoi tant d'indépendants se retrouvent en difficulté",
        "html": "\n      <p>Les difficultés de trésorerie touchent une grande partie des indépendants, y compris ceux dont l'activité se porte objectivement bien. Voici les causes qui reviennent le plus souvent.</p>\n      <h4>Confondre CA encaissé et argent disponible</h4>\n      <p>C'est la cause numéro un, détaillée en leçon 1 : dépenser comme si tout l'argent encaissé était disponible, sans avoir mis de côté la part destinée aux cotisations et à l'impôt.</p>\n      <h4>Ne pas anticiper le décalage des cotisations</h4>\n      <p>Les cotisations sociales se paient après l'encaissement (le mois ou le trimestre suivant selon ta périodicité de déclaration). Ce décalage donne une fausse impression d'aisance financière au moment de l'encaissement, suivie d'un choc au moment du prélèvement.</p>\n      <h4>Des revenus irréguliers, sans lissage</h4>\n      <p>Contrairement à un salarié, l'indépendant encaisse rarement un montant stable chaque mois. Sans système de lissage (détaillé au module 4), les mois hauts sont dépensés en intégralité, et les mois bas deviennent des mois de crise.</p>\n      <h4>L'absence de réserve de sécurité</h4>\n      <p>Sans réserve, le moindre imprévu (client qui paie en retard, dépense professionnelle imprévue, baisse d'activité passagère) se transforme immédiatement en problème de trésorerie aigu.</p>\n      <h4>Le mélange des comptes pro et perso</h4>\n      <p>Sans séparation claire, il devient presque impossible de savoir, à un instant donné, ce qui appartient réellement à l'activité et ce qui peut être dépensé personnellement.</p>\n      <h4>L'optimisme sur les rentrées futures</h4>\n      <p>Compter par avance sur un paiement \"qui ne va pas tarder\" pour couvrir une dépense engagée aujourd'hui est l'un des pièges les plus fréquents — et les retards de paiement clients sont, en pratique, très courants (voir la formation \"Facturer et se faire payer à temps\" pour approfondir ce sujet).</p>\n      <div class=\"callout\"><strong>Le point commun à toutes ces causes :</strong> elles viennent presque toujours d'un manque de visibilité, pas d'un manque de revenus. Le module 2 te donne le système minimal pour retrouver cette visibilité.</div>\n      ",
        "keypoints": [
          "La confusion entre CA encaissé et argent disponible reste la cause la plus fréquente de difficultés.",
          "Le décalage entre l'encaissement et le paiement des cotisations crée une fausse impression d'aisance.",
          "Des revenus irréguliers sans système de lissage fragilisent particulièrement la trésorerie.",
          "L'absence de réserve et le mélange des comptes pro/perso amplifient chaque imprévu."
        ]
      },
      {
        "id": "t1l3",
        "title": "Les indicateurs simples à suivre chaque mois",
        "html": "\n      <p>Pas besoin d'un tableau de bord complexe : cinq indicateurs simples, suivis régulièrement, suffisent à garder une vision claire de ta trésorerie.</p>\n      <h4>1. Le CA encaissé du mois</h4>\n      <p>Le montant réellement reçu sur ton compte professionnel, pas celui facturé. C'est la base de tout le reste.</p>\n      <h4>2. Les charges et cotisations dues</h4>\n      <p>Ce que tu devras verser sur ce CA : cotisations sociales, impôt (si versement libératoire), charges professionnelles fixes. Ce montant doit être provisionné, pas seulement connu.</p>\n      <h4>3. Le solde disponible réel</h4>\n      <p>Le solde de ton compte professionnel, moins tout ce qui est déjà engagé ailleurs (cotisations à venir, réserve de sécurité). C'est le seul chiffre qui te dit vraiment ce que tu peux te permettre de dépenser ou de te verser.</p>\n      <h4>4. Le nombre de mois de trésorerie d'avance</h4>\n      <p>Ta réserve de sécurité (module 3), divisée par tes charges mensuelles moyennes. Ce chiffre te dit combien de temps tu pourrais tenir si ton activité s'arrêtait brutalement.</p>\n      <h4>5. Les factures en attente de paiement</h4>\n      <p>Le montant total facturé mais pas encore encaissé. Un chiffre qui grossit anormalement doit alerter : soit tes délais de paiement se dégradent, soit certains clients tardent à régler.</p>\n      <div class=\"callout\"><strong>La bonne fréquence :</strong> mets à jour ces cinq indicateurs une fois par mois, à date fixe — le module 5 te propose une routine complète pour ça. Cinq minutes suffisent une fois le système en place.</div>\n      ",
        "keypoints": [
          "Cinq indicateurs suffisent : CA encaissé, charges dues, solde disponible réel, mois de trésorerie d'avance, factures en attente.",
          "Le solde disponible réel est le chiffre le plus important pour savoir ce que tu peux dépenser.",
          "Les mois de trésorerie d'avance mesurent ta capacité à encaisser un coup dur.",
          "Un suivi mensuel à date fixe suffit largement pour garder une vision claire."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelle est la différence entre chiffre d'affaires et argent disponible ?",
        "options": [
          "Il n'y a aucune différence",
          "Le CA est le total encaissé, l'argent disponible est ce qui reste après avoir mis de côté ce qui ne t'appartient pas vraiment",
          "L'argent disponible est toujours supérieur au CA",
          "Le CA se calcule après impôt"
        ],
        "correct": 1,
        "explain": "Le CA est un indicateur d'activité brut ; l'argent disponible tient compte des cotisations, charges et réserves à provisionner."
      },
      {
        "q": "Pourquoi le décalage de paiement des cotisations pose-t-il problème ?",
        "options": [
          "Il n'existe pas en réalité",
          "Il donne une fausse impression d'aisance au moment de l'encaissement, suivie d'un choc au prélèvement",
          "Il permet de ne jamais payer de cotisations",
          "Il n'affecte que les grandes entreprises"
        ],
        "correct": 1,
        "explain": "Les cotisations se paient après l'encaissement, ce qui peut créer une désagréable surprise si l'argent n'a pas été provisionné."
      },
      {
        "q": "Quel indicateur dit le plus précisément ce que tu peux réellement dépenser ?",
        "options": [
          "Le CA facturé",
          "Le solde brut du compte bancaire",
          "Le solde disponible réel, après déduction de ce qui est déjà engagé",
          "Le nombre de clients actifs"
        ],
        "correct": 2,
        "explain": "Le solde disponible réel exclut les sommes déjà destinées aux cotisations et à la réserve de sécurité."
      },
      {
        "q": "Que mesurent les « mois de trésorerie d'avance » ?",
        "options": [
          "Le nombre de factures envoyées",
          "Combien de temps tu pourrais tenir si ton activité s'arrêtait brutalement",
          "Le taux de tes cotisations sociales",
          "Le nombre de clients en retard de paiement"
        ],
        "correct": 1,
        "explain": "Cet indicateur rapporte ta réserve de sécurité à tes charges mensuelles moyennes."
      },
      {
        "q": "Quelle est la cause la plus fréquente de difficultés de trésorerie chez les indépendants ?",
        "options": [
          "Un CA trop élevé",
          "La confusion entre CA encaissé et argent réellement disponible",
          "Un excès de réserve de sécurité",
          "Trop de clients"
        ],
        "correct": 1,
        "explain": "Traiter tout le CA encaissé comme disponible, sans provisionner cotisations et charges, est la cause la plus répandue."
      }
    ]
  },
  {
    "id": "t2",
    "title": "Mettre en place un suivi simple",
    "icon": "doc",
    "desc": "Le système minimal qui fonctionne, un tableau de bord prêt à l'emploi, et la séparation des comptes.",
    "lessons": [
      {
        "id": "t2l1",
        "title": "Le système de suivi minimal qui fonctionne",
        "html": "\n      <p>Pas besoin d'un logiciel de comptabilité complexe pour suivre sa trésorerie : un système simple, tenu régulièrement, est largement suffisant pour la majorité des indépendants.</p>\n      <h4>Le principe : viser la trésorerie, pas la comptabilité complète</h4>\n      <p>La comptabilité (obligatoire, voir tes obligations fiscales) répond à une question annuelle : combien as-tu gagné ? Le suivi de trésorerie répond à une question du quotidien : combien peux-tu dépenser maintenant, et combien te faudra-t-il dans un mois ? Ce sont deux outils différents, et le second ne nécessite ni logiciel spécialisé, ni compétences comptables.</p>\n      <h4>Les trois piliers du système minimal</h4>\n      <ul>\n        <li><strong>Un tableau de suivi mensuel</strong> (détaillé en leçon 2), qui centralise CA encaissé, charges provisionnées et solde disponible.</li>\n        <li><strong>Un compte bancaire dédié</strong> à l'activité professionnelle (leçon 3), pour ne jamais mélanger les flux.</li>\n        <li><strong>Une routine régulière</strong> pour mettre à jour ce tableau (approfondie au module 5), sans quoi le meilleur système du monde devient obsolète en quelques semaines.</li>\n      </ul>\n      <h4>Pourquoi ce système minimal suffit</h4>\n      <p>Pour la grande majorité des micro-entrepreneurs et freelances, la complexité ne vient jamais du nombre de transactions (souvent limité), mais du manque de régularité dans le suivi. Un tableau simple, mis à jour chaque mois sans faute, bat largement un outil sophistiqué utilisé une fois par trimestre.</p>\n      <div class=\"callout\"><strong>Le bon réflexe pour démarrer :</strong> ne cherche pas l'outil parfait avant de commencer. Un simple tableur, mis en place aujourd'hui avec les trois piliers ci-dessus, vaut infiniment mieux qu'un système idéal que tu repousses indéfiniment.</div>\n      ",
        "keypoints": [
          "Le suivi de trésorerie répond à une question du quotidien, différente de la comptabilité annuelle.",
          "Trois piliers suffisent : tableau mensuel, compte dédié, routine régulière.",
          "La régularité du suivi compte plus que la sophistication de l'outil utilisé.",
          "Un tableur simple mis en place aujourd'hui vaut mieux qu'un système parfait repoussé indéfiniment."
        ]
      },
      {
        "id": "t2l2",
        "title": "Tableau de bord simple (modèle inclus)",
        "html": "\n      <p>Voici un modèle de tableau de bord complet, à recréer directement dans un tableur (une ligne par mois), pour centraliser tous tes indicateurs de trésorerie.</p>\n      <h4>Les colonnes à créer</h4>\n      <div class=\"script-block\">Mois | CA encaissé | Cotisations provisionnées | Charges pro | Réserve de sécurité alimentée | Solde disponible réel | Factures en attente | Mois de trésorerie d'avance</div>\n      <h4>Comment remplir chaque colonne</h4>\n      <ul>\n        <li><strong>CA encaissé :</strong> le total réellement reçu sur le compte professionnel ce mois-ci.</li>\n        <li><strong>Cotisations provisionnées :</strong> le pourcentage de cotisations sociales (et d'impôt si versement libératoire) correspondant à ce CA, mis de côté dès l'encaissement.</li>\n        <li><strong>Charges pro :</strong> les dépenses professionnelles réelles du mois (outils, abonnements, déplacements...).</li>\n        <li><strong>Réserve de sécurité alimentée :</strong> le montant transféré ce mois-ci vers ta réserve (module 3).</li>\n        <li><strong>Solde disponible réel :</strong> CA encaissé moins toutes les colonnes précédentes — c'est ce que tu peux te verser ou dépenser librement ce mois-ci.</li>\n        <li><strong>Factures en attente :</strong> le montant facturé mais pas encore encaissé à la fin du mois.</li>\n        <li><strong>Mois de trésorerie d'avance :</strong> ta réserve totale actuelle, divisée par tes charges mensuelles moyennes (cotisations + charges pro).</li>\n      </ul>\n      <h4>Un exemple concret sur un mois</h4>\n      <p>CA encaissé : 2 800 €. Cotisations provisionnées (21,2 % pour une activité de services) : 594 €. Charges pro : 150 €. Réserve alimentée : 140 € (5 % du CA). Solde disponible réel : 2 800 − 594 − 150 − 140 = 1 916 €. C'est ce montant, et non les 2 800 € encaissés, qui représente ce que tu peux réellement te verser ou dépenser.</p>\n      <div class=\"callout\"><strong>Astuce :</strong> configure ton tableur pour que les colonnes de calcul (solde disponible réel, mois de trésorerie d'avance) se mettent à jour automatiquement dès que tu saisis le CA et les charges — cela transforme une tâche de dix minutes en une tâche de deux minutes chaque mois.</div>\n      ",
        "keypoints": [
          "Un tableau à 8 colonnes suffit : mois, CA encaissé, cotisations, charges pro, réserve, solde disponible, factures en attente, mois d'avance.",
          "Le solde disponible réel se calcule en soustrayant toutes les provisions du CA encaissé.",
          "Un exemple chiffré aide à comprendre l'écart entre CA encaissé et argent réellement disponible.",
          "Automatiser les calculs dans le tableur rend le suivi mensuel rapide et sans effort."
        ]
      },
      {
        "id": "t2l3",
        "title": "Comment séparer argent pro et argent perso",
        "html": "\n      <p>Séparer clairement tes finances professionnelles et personnelles est la base indispensable de tout système de suivi de trésorerie fiable — et c'est aussi, au-delà d'un certain seuil, une obligation légale.</p>\n      <h4>Le rappel légal</h4>\n      <p>En micro-entreprise, un compte bancaire dédié à l'activité professionnelle est obligatoire dès lors que ton chiffre d'affaires dépasse 10 000 € sur deux années civiles consécutives. Mais même en dessous de ce seuil, ouvrir un compte dédié dès le départ est très fortement recommandé : c'est la condition de base pour un suivi de trésorerie fiable.</p>\n      <h4>Pourquoi cette séparation change tout</h4>\n      <p>Sans compte dédié, chaque dépense personnelle et professionnelle se mélange dans le même flux, rendant impossible de répondre simplement à la question : combien ai-je réellement de disponible pour mon activité ? La séparation des comptes transforme cette question complexe en une lecture directe de ton solde bancaire professionnel.</p>\n      <h4>Se verser un revenu, plutôt que piocher au coup par coup</h4>\n      <p>Plutôt que de prélever de l'argent du compte professionnel de façon irrégulière selon les besoins du moment, adopte le réflexe de te <strong>verser un montant fixe régulier</strong> vers ton compte personnel — comme un salaire. Ce montant, déterminé selon la méthode du module 4, doit rester stable même quand un mois est exceptionnellement bon, l'excédent restant alors sur le compte professionnel pour lisser les mois plus creux.</p>\n      <h4>Comment organiser ce virage concrètement</h4>\n      <ul>\n        <li>Ouvre un compte professionnel dédié si ce n'est pas déjà fait — de nombreuses banques en ligne proposent des offres gratuites ou très abordables pour les micro-entrepreneurs.</li>\n        <li>Fixe une date mensuelle fixe pour ton virement vers ton compte personnel (par exemple, le 5 de chaque mois).</li>\n        <li>Ne fais aucune dépense professionnelle depuis ton compte personnel, ni l'inverse — même pour de petits montants.</li>\n      </ul>\n      <div class=\"callout\"><strong>Le bénéfice concret :</strong> avec cette séparation, ton solde de compte professionnel devient un indicateur de santé de ton activité en un coup d'œil — sans avoir à démêler ce qui est personnel de ce qui ne l'est pas.</div>\n      ",
        "keypoints": [
          "Un compte bancaire dédié est obligatoire au-delà de 10 000 € de CA sur deux années consécutives, et recommandé dès le départ.",
          "La séparation des comptes rend le suivi de trésorerie immédiatement plus fiable et plus simple.",
          "Se verser un montant fixe régulier, plutôt que de piocher au coup par coup, stabilise tes finances personnelles.",
          "Aucune dépense ne devrait transiter entre les deux comptes, même pour de petits montants."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelle est la différence entre suivi de trésorerie et comptabilité ?",
        "options": [
          "Il n'y a aucune différence",
          "La comptabilité répond à une question annuelle, le suivi de trésorerie à une question du quotidien",
          "Le suivi de trésorerie remplace la comptabilité obligatoire",
          "Seules les grandes entreprises ont besoin des deux"
        ],
        "correct": 1,
        "explain": "Ce sont deux outils complémentaires : l'un pour la déclaration annuelle, l'autre pour piloter au jour le jour."
      },
      {
        "q": "Que représente le « solde disponible réel » dans le tableau de bord ?",
        "options": [
          "Le CA facturé du mois",
          "Le CA encaissé moins toutes les provisions (cotisations, charges, réserve)",
          "Le solde brut du compte bancaire",
          "Le montant des factures en attente"
        ],
        "correct": 1,
        "explain": "C'est ce qui reste réellement disponible une fois toutes les sommes engagées ailleurs déduites."
      },
      {
        "q": "À partir de quel seuil de CA un compte bancaire dédié devient-il obligatoire ?",
        "options": [
          "Dès le premier euro",
          "10 000 € sur deux années civiles consécutives",
          "50 000 €",
          "Il n'est jamais obligatoire"
        ],
        "correct": 1,
        "explain": "Le compte dédié est obligatoire au-delà de 10 000 € de CA sur deux années consécutives, mais recommandé dès le départ."
      },
      {
        "q": "Quelle habitude est recommandée plutôt que de piocher de l'argent au coup par coup ?",
        "options": [
          "Ne jamais se verser d'argent",
          "Se verser un montant fixe régulier, comme un salaire",
          "Vider le compte professionnel chaque mois",
          "Emprunter systématiquement"
        ],
        "correct": 1,
        "explain": "Un virement régulier stabilise les finances personnelles et laisse l'excédent des bons mois lisser les mois creux."
      },
      {
        "q": "Quel est le principal avantage d'un tableau de bord automatisé dans un tableur ?",
        "options": [
          "Il remplace l'expert-comptable",
          "Il rend le suivi mensuel rapide, une fois les formules de calcul en place",
          "Il évite de devoir ouvrir un compte professionnel",
          "Il calcule automatiquement les impôts"
        ],
        "correct": 1,
        "explain": "Automatiser les calculs transforme un suivi potentiellement fastidieux en une tâche de quelques minutes chaque mois."
      }
    ]
  },
  {
    "id": "t3",
    "title": "Anticiper et sécuriser",
    "icon": "shield",
    "desc": "Calculer son reste à vivre réel, se constituer une réserve, et anticiper les périodes creuses.",
    "lessons": [
      {
        "id": "t3l1",
        "title": "Comment calculer son reste à vivre réel",
        "html": "\n      <p>Le \"reste à vivre\" est le montant que tu peux réellement dépenser ou te verser, une fois toutes tes obligations professionnelles couvertes. Le calculer précisément évite de vivre dans l'approximation — une source constante de stress financier.</p>\n      <h4>La formule de base</h4>\n      <div class=\"script-block\">Reste à vivre = CA encaissé (moyenne mensuelle) − cotisations sociales et impôt − charges professionnelles fixes et variables − épargne de précaution mise de côté</div>\n      <h4>Pourquoi utiliser une moyenne, pas le dernier mois</h4>\n      <p>Calculer ton reste à vivre sur la base d'un seul mois (souvent le plus récent) donne une image faussée si ton activité est irrégulière. Utilise plutôt la moyenne de tes 3 à 6 derniers mois de CA encaissé : cette moyenne lisse les variations et donne un chiffre plus fiable pour prendre des décisions durables (comme le montant à te verser régulièrement, voir module 4).</p>\n      <h4>Un exemple chiffré complet</h4>\n      <p>Moyenne de CA encaissé sur 6 mois : 2 600 €. Cotisations sociales (21,2 % pour une activité de service) : 551 €. Charges professionnelles moyennes : 180 €. Épargne de précaution visée : 10 % du CA, soit 260 €. Reste à vivre réel : 2 600 − 551 − 180 − 260 = <strong>1 609 €</strong> par mois en moyenne.</p>\n      <h4>Ce que ce chiffre te permet de faire</h4>\n      <p>Une fois ce montant connu, tu peux : décider sereinement du montant fixe à te verser chaque mois (module 4), évaluer si ton activité couvre réellement tes besoins personnels, et identifier si une hausse de tarifs ou de volume d'activité est nécessaire pour atteindre ton objectif de revenu.</p>\n      <div class=\"callout\"><strong>Recalcule ce chiffre tous les trimestres</strong>, en particulier si ton activité évolue (nouveaux clients, changement de tarifs, nouvelle charge professionnelle) — un reste à vivre calculé une fois et jamais mis à jour perd rapidement sa fiabilité.</div>\n      ",
        "keypoints": [
          "Le reste à vivre réel se calcule en déduisant cotisations, charges et épargne de précaution du CA encaissé moyen.",
          "Utiliser une moyenne sur plusieurs mois donne un chiffre plus fiable qu'un calcul sur le dernier mois seul.",
          "Ce chiffre sert de base pour décider du montant à se verser régulièrement.",
          "Recalcule ton reste à vivre chaque trimestre pour qu'il reste représentatif de ta situation réelle."
        ]
      },
      {
        "id": "t3l2",
        "title": "Constituer une réserve de sécurité",
        "html": "\n      <p>Une réserve de sécurité est le meilleur rempart contre les imprévus — un client qui paie en retard, une dépense professionnelle imprévue, ou une baisse d'activité passagère. Voici comment la construire progressivement, sans effort insoutenable.</p>\n      <h4>Quel montant viser</h4>\n      <p>Une réserve équivalente à 2 à 3 mois de charges (cotisations et charges professionnelles moyennes) représente un objectif raisonnable pour la majorité des indépendants. Ceux dont l'activité est très irrégulière ou saisonnière peuvent viser davantage, jusqu'à 4 à 6 mois.</p>\n      <h4>Comment la construire sans te mettre en difficulté</h4>\n      <p>Plutôt que de viser un gros virement ponctuel (souvent impossible en pratique), alimente ta réserve avec un <strong>petit pourcentage systématique de chaque encaissement</strong> — par exemple 5 à 10 % du CA encaissé, directement intégré à ton tableau de bord (module 2). Ce pourcentage, prélevé automatiquement dans ta tête (ou via un virement automatique), devient rapidement un réflexe indolore.</p>\n      <h4>Où garder cette réserve</h4>\n      <p>Sur un compte séparé de ton compte professionnel courant, idéalement un compte d'épargne simple (livret), disponible rapidement en cas de besoin mais suffisamment \"hors de vue\" pour ne pas être piocher au quotidien pour des dépenses courantes.</p>\n      <h4>Quand puiser dans cette réserve — et quand ne pas le faire</h4>\n      <p>La réserve est faite pour les imprévus réels : un retard de paiement client qui met en tension ta trésorerie, une dépense professionnelle exceptionnelle, un mois particulièrement creux. Elle n'est pas destinée à financer des dépenses de confort régulières — si tu y puises chaque mois, c'est le signe que ton reste à vivre (leçon 1) est mal calibré, pas que ta réserve est insuffisante.</p>\n      <div class=\"callout\"><strong>Le bon rythme pour démarrer :</strong> vise d'abord un mois de charges de côté — un premier palier atteignable qui change déjà beaucoup ta sérénité — avant de viser l'objectif complet de 2 à 3 mois.</div>\n      ",
        "keypoints": [
          "Vise une réserve de 2 à 3 mois de charges, davantage si ton activité est irrégulière ou saisonnière.",
          "Alimente-la avec un petit pourcentage systématique de chaque encaissement plutôt qu'un gros virement ponctuel.",
          "Garde-la sur un compte séparé, accessible mais distinct du compte courant professionnel.",
          "Réserve-la aux imprévus réels : y puiser chaque mois signale un reste à vivre mal calibré."
        ]
      },
      {
        "id": "t3l3",
        "title": "Anticiper les périodes creuses et les grosses échéances",
        "html": "\n      <p>Une bonne gestion de trésorerie ne se contente pas de réagir aux imprévus : elle anticipe activement ce qui est prévisible, qu'il s'agisse de baisses d'activité récurrentes ou d'échéances financières importantes.</p>\n      <h4>Identifier tes périodes creuses récurrentes</h4>\n      <p>Beaucoup d'activités indépendantes connaissent des variations saisonnières ou cycliques (été calme pour certains services B2B, rentrée chargée pour d'autres...). En observant ton historique de CA sur une année complète, tu peux identifier ces périodes et t'y préparer à l'avance, plutôt que de les subir chaque fois comme une surprise.</p>\n      <h4>Lister tes grosses échéances connues à l'avance</h4>\n      <p>Certaines dépenses reviennent chaque année à date fixe et sont connues longtemps à l'avance : la CFE (généralement en décembre), le solde de l'impôt sur le revenu si tu n'es pas au versement libératoire, le renouvellement d'assurances professionnelles, ou des abonnements annuels. Note ces échéances dans ton calendrier dès le début de l'année, avec leur montant estimé.</p>\n      <h4>La technique du lissage</h4>\n      <p>Pour une échéance annuelle connue (par exemple 800 € de CFE en décembre), divise ce montant par 12 et provisionne cette part chaque mois dans ton tableau de bord, plutôt que de découvrir la dépense au dernier moment. Cette technique transforme une grosse dépense ponctuelle en une charge mensuelle prévisible et indolore.</p>\n      <h4>Se préparer à une période creuse identifiée</h4>\n      <p>Si tu sais qu'un trimestre est traditionnellement plus calme pour ton activité, renforce ta réserve de sécurité avant cette période plutôt que pendant, et évite de programmer des dépenses professionnelles importantes juste avant cette échéance prévisible.</p>\n      <div class=\"callout\"><strong>Le principe général :</strong> tout ce qui est prévisible ne devrait jamais devenir un imprévu. Un calendrier annuel de tes échéances connues, couplé à un lissage mensuel, élimine une grande partie du stress de trésorerie lié aux grosses dépenses.</div>\n      ",
        "keypoints": [
          "Identifie tes périodes creuses récurrentes en observant ton historique de CA sur une année complète.",
          "Liste tes grosses échéances connues à l'avance (CFE, impôt, assurances) dans un calendrier annuel.",
          "La technique du lissage divise une dépense annuelle en provision mensuelle indolore.",
          "Renforce ta réserve avant une période creuse identifiée, pas pendant."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Pourquoi utiliser une moyenne sur plusieurs mois pour calculer son reste à vivre ?",
        "options": [
          "Ce n'est jamais recommandé",
          "Cela lisse les variations d'un revenu irrégulier et donne un chiffre plus fiable",
          "Cela permet d'ignorer les cotisations",
          "Seul le dernier mois compte réellement"
        ],
        "correct": 1,
        "explain": "Une moyenne sur 3 à 6 mois évite les décisions basées sur un mois exceptionnellement haut ou bas."
      },
      {
        "q": "Quel montant de réserve de sécurité est généralement recommandé ?",
        "options": [
          "Aucune réserve n'est nécessaire",
          "2 à 3 mois de charges, davantage si l'activité est irrégulière",
          "12 mois de CA",
          "Un montant fixe de 100 €"
        ],
        "correct": 1,
        "explain": "2 à 3 mois de charges représentent un objectif raisonnable pour la majorité des indépendants."
      },
      {
        "q": "Comment alimenter sa réserve de sécurité efficacement ?",
        "options": [
          "Avec un gros virement ponctuel une fois par an",
          "Avec un petit pourcentage systématique de chaque encaissement",
          "En empruntant",
          "En ne la garnissant qu'en cas d'urgence"
        ],
        "correct": 1,
        "explain": "Un petit pourcentage régulier (5 à 10 % du CA) rend l'alimentation de la réserve indolore et durable."
      },
      {
        "q": "Que permet la technique du lissage pour une grosse échéance annuelle ?",
        "options": [
          "D'éviter complètement de la payer",
          "De la transformer en provision mensuelle prévisible plutôt qu'un choc ponctuel",
          "De la reporter indéfiniment",
          "De la payer en une seule fois sans préparation"
        ],
        "correct": 1,
        "explain": "Diviser le montant annuel par 12 et le provisionner chaque mois rend la dépense indolore."
      },
      {
        "q": "Que signale le fait de puiser régulièrement dans sa réserve de sécurité chaque mois ?",
        "options": [
          "Que la réserve est trop importante",
          "Que le reste à vivre est probablement mal calibré",
          "Que c'est le fonctionnement normal attendu",
          "Rien de particulier"
        ],
        "correct": 1,
        "explain": "La réserve est destinée aux imprévus réels ; y puiser systématiquement indique un déséquilibre à corriger dans le calcul du reste à vivre."
      }
    ]
  },
  {
    "id": "t4",
    "title": "Se verser et piloter",
    "icon": "handshake",
    "desc": "Décider de ce qu'on peut se verser, gérer les imprévus, et éviter les erreurs les plus coûteuses.",
    "lessons": [
      {
        "id": "t4l1",
        "title": "Comment décider de ce qu'on peut se verser",
        "html": "\n      <p>Décider du montant que tu te verses chaque mois ne devrait jamais être une improvisation au dernier moment. Voici une méthode simple pour fixer ce montant sereinement, et le faire évoluer intelligemment dans le temps.</p>\n      <h4>La méthode en trois étapes</h4>\n      <ol style=\"padding-left:1.3em;\">\n        <li><strong>Calcule ton reste à vivre moyen</strong> (module 3, leçon 1), basé sur une moyenne de plusieurs mois plutôt que sur le dernier encaissement.</li>\n        <li><strong>Fixe un montant légèrement inférieur</strong> à ce reste à vivre moyen — cette marge de sécurité supplémentaire absorbe les mois plus faibles sans te forcer à réajuster ton virement à chaque fluctuation.</li>\n        <li><strong>Verse ce montant fixe chaque mois</strong>, quelle que soit la performance du mois en cours — l'excédent des bons mois reste sur le compte professionnel, formant naturellement une réserve additionnelle.</li>\n      </ol>\n      <h4>Pourquoi un montant fixe plutôt que variable</h4>\n      <p>Se verser un montant qui varie selon le CA du mois transmet l'instabilité de ton activité directement dans ta vie personnelle — un stress inutile la plupart du temps. Un montant fixe, calculé sur une base prudente, te protège de cette instabilité tout en te laissant profiter des bons mois via l'accumulation de réserve.</p>\n      <h4>Quand réajuster ce montant</h4>\n      <p>Révise ton montant de versement tous les trimestres, à la lumière de ton tableau de bord (module 2) : si ta moyenne de CA encaissé progresse durablement, tu peux augmenter prudemment ; si elle diminue, mieux vaut ajuster à la baisse plutôt que de puiser dans ta réserve de sécurité pour maintenir artificiellement un niveau de vie non soutenable.</p>\n      <div class=\"callout\"><strong>Le repère à garder :</strong> un montant fixe, même modeste au départ, vaut toujours mieux qu'un montant optimiste que tu dois régulièrement rogner. La stabilité prime sur le montant absolu.</div>\n      ",
        "keypoints": [
          "Fixe ton versement mensuel légèrement en dessous de ton reste à vivre moyen, pour absorber les fluctuations.",
          "Un montant fixe protège ta vie personnelle de l'instabilité naturelle de ton activité.",
          "Les bons mois alimentent naturellement ta réserve, sans avoir à ajuster ton versement à chaque fois.",
          "Révise ce montant chaque trimestre, à la hausse comme à la baisse, selon l'évolution réelle de ton CA moyen."
        ]
      },
      {
        "id": "t4l2",
        "title": "Gérer les acomptes, les retards de paiement et les imprévus",
        "html": "\n      <p>Trois situations reviennent régulièrement dans la vie d'un indépendant et méritent une approche spécifique pour ne pas déstabiliser ta trésorerie.</p>\n      <h4>Les acomptes : un outil de lissage, pas seulement de sécurité</h4>\n      <p>Au-delà de sécuriser l'engagement d'un client (voir la formation \"De la première prise de contact au client payant\"), les acomptes jouent un rôle important dans le lissage de ta trésorerie : ils permettent d'encaisser une partie du montant d'une mission avant sa réalisation complète, réduisant l'attente entre le travail effectué et le paiement correspondant.</p>\n      <h4>Les retards de paiement : anticiper plutôt que subir</h4>\n      <p>Ne compte jamais un paiement comme acquis avant de l'avoir réellement encaissé — y compris dans ton tableau de bord de trésorerie. Si un client a l'habitude de payer en retard, intègre ce délai dans tes prévisions plutôt que de bâtir ton budget sur une date de paiement théorique. La formation \"Facturer et se faire payer à temps\" détaille les bons réflexes pour réduire ces retards.</p>\n      <h4>Les imprévus : avoir un plan avant qu'ils arrivent</h4>\n      <p>Un imprévu (panne de matériel professionnel, dépense de santé, réparation urgente) est moins déstabilisant s'il existe déjà un plan clair : d'abord puiser dans la réserve de sécurité (module 3) si le montant le justifie, ensuite éventuellement retarder une dépense professionnelle non essentielle, et en dernier recours seulement, ajuster temporairement le montant que tu te verses.</p>\n      <h4>Un ordre de priorité à connaître à l'avance</h4>\n      <div class=\"script-block\">1. Utiliser la réserve de sécurité si l'imprévu la justifie\n2. Reporter une dépense professionnelle non essentielle\n3. Ajuster temporairement (et de façon assumée) le montant versé\n4. En dernier recours : négocier un délai avec ses propres créanciers (URSSAF, fournisseurs...)</div>\n      <div class=\"callout\"><strong>Le bénéfice d'avoir ce plan à l'avance :</strong> face à un imprévu, tu appliques une procédure déjà réfléchie plutôt que de prendre une décision financière stressante dans l'urgence.</div>\n      ",
        "keypoints": [
          "Les acomptes servent aussi à lisser ta trésorerie, pas seulement à sécuriser un client.",
          "Ne compte jamais un paiement comme acquis avant son encaissement réel dans ton suivi.",
          "Prévois un ordre de priorité clair pour réagir à un imprévu, avant qu'il ne survienne.",
          "Puiser dans la réserve, reporter une dépense, ajuster le versement : dans cet ordre, avant d'envisager un délai auprès de tes créanciers."
        ]
      },
      {
        "id": "t4l3",
        "title": "Les erreurs à éviter absolument",
        "html": "\n      <p>Après avoir vu les bonnes pratiques, voici les erreurs qui reviennent le plus souvent et qui fragilisent durablement la trésorerie d'un indépendant.</p>\n      <h4>Dépenser le CA facturé avant encaissement</h4>\n      <p>S'engager sur une dépense en comptant sur une facture \"bientôt payée\" est l'un des pièges les plus fréquents — et les plus dangereux, en particulier si le client paie finalement en retard.</p>\n      <h4>Ne pas provisionner ses cotisations dès l'encaissement</h4>\n      <p>Attendre la date de déclaration URSSAF pour réaliser qu'il faut trouver le montant des cotisations transforme une charge normale en une urgence de trésorerie récurrente.</p>\n      <h4>Se verser un revenu fixe déconnecté de la réalité</h4>\n      <p>Un montant de versement fixé une fois, sans jamais être réévalué à la lumière de l'évolution réelle du CA, finit soit par piocher excessivement dans la réserve (si le montant est trop haut), soit par sous-évaluer ce que l'activité permet réellement (si le montant est trop prudent et jamais réévalué).</p>\n      <h4>Ignorer les signaux d'alerte précoces</h4>\n      <p>Une réserve de sécurité qui diminue mois après mois, des factures en attente qui s'accumulent anormalement, un nombre de mois de trésorerie d'avance qui baisse durablement : ces signaux, visibles dans ton tableau de bord (module 2), doivent déclencher une action rapide plutôt qu'être constatés passivement.</p>\n      <h4>Ne pas avoir de compte dédié</h4>\n      <p>Sans cette séparation (module 2, leçon 3), impossible de distinguer clairement ce qui appartient réellement à l'activité — une confusion qui amplifie toutes les autres erreurs de cette liste.</p>\n      <h4>Compter systématiquement sur les rentrées futures</h4>\n      <p>Prévoir une dépense importante en s'appuyant sur un paiement non encore reçu, plutôt que sur de la trésorerie déjà disponible, expose à un décalage dangereux si ce paiement tarde ou n'arrive pas comme prévu.</p>\n      <div class=\"callout\"><strong>Le fil conducteur de toutes ces erreurs :</strong> elles viennent d'un manque d'anticipation, pas d'un manque de revenus. Le système mis en place dans cette formation — tableau de bord, réserve, versement fixe, lissage — corrige précisément ce manque d'anticipation.</div>\n      ",
        "keypoints": [
          "Dépenser sur la base d'un CA facturé mais non encore encaissé reste l'erreur la plus fréquente et la plus risquée.",
          "Provisionner ses cotisations dès l'encaissement évite les urgences de trésorerie récurrentes.",
          "Un montant de versement jamais réévalué finit par devenir déconnecté de la réalité de l'activité.",
          "Les signaux d'alerte visibles dans le tableau de bord doivent déclencher une action rapide, pas être ignorés."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Comment fixer le montant que tu te verses chaque mois ?",
        "options": [
          "Selon l'humeur du moment",
          "Légèrement en dessous du reste à vivre moyen, en montant fixe",
          "Toujours égal au CA du dernier mois",
          "Le montant maximum possible chaque mois"
        ],
        "correct": 1,
        "explain": "Un montant fixe, légèrement prudent, protège des fluctuations naturelles de l'activité indépendante."
      },
      {
        "q": "Quel rôle jouent les acomptes au-delà de sécuriser l'engagement du client ?",
        "options": [
          "Aucun autre rôle",
          "Ils aident à lisser la trésorerie en réduisant l'attente du paiement",
          "Ils remplacent la facture finale",
          "Ils sont obligatoires dans tous les cas"
        ],
        "correct": 1,
        "explain": "Les acomptes permettent d'encaisser une partie du montant avant la fin de la mission, ce qui aide au lissage de trésorerie."
      },
      {
        "q": "Quelle est la première ressource à utiliser face à un imprévu financier ?",
        "options": [
          "Emprunter immédiatement",
          "La réserve de sécurité, si l'imprévu le justifie",
          "Ajuster son versement personnel en priorité",
          "Ignorer l'imprévu"
        ],
        "correct": 1,
        "explain": "La réserve de sécurité est précisément conçue pour ce type de situation, avant d'envisager d'autres ajustements."
      },
      {
        "q": "Quelle est l'erreur la plus fréquente et la plus risquée en gestion de trésorerie ?",
        "options": [
          "Avoir trop de réserve",
          "Dépenser sur la base d'un CA facturé mais pas encore encaissé",
          "Se verser un montant trop faible",
          "Avoir un compte bancaire dédié"
        ],
        "correct": 1,
        "explain": "S'engager financièrement en comptant sur un paiement non encore reçu expose directement aux retards clients."
      },
      {
        "q": "Que doit déclencher une baisse durable du nombre de mois de trésorerie d'avance ?",
        "options": [
          "Rien, c'est normal",
          "Une action rapide pour comprendre et corriger la situation",
          "La fermeture immédiate de l'activité",
          "Une augmentation automatique des tarifs"
        ],
        "correct": 1,
        "explain": "C'est un signal d'alerte précoce visible dans le tableau de bord, à traiter activement plutôt qu'ignorer."
      }
    ]
  },
  {
    "id": "t5",
    "title": "Outils et organisation",
    "icon": "toolbox",
    "desc": "Les meilleurs outils simples en 2026, une routine mensuelle, et la checklist complète.",
    "lessons": [
      {
        "id": "t5l1",
        "title": "Les meilleurs outils simples en 2026",
        "html": "\n      <p>Comme pour l'administratif, pas besoin d'un arsenal d'outils sophistiqués pour bien gérer sa trésorerie : quelques outils simples, bien utilisés, suffisent largement.</p>\n      <h4>Pour le tableau de bord</h4>\n      <p>Un tableur classique (gratuit) reste l'outil le plus flexible pour construire le tableau de bord du module 2, avec des formules de calcul automatiques pour le solde disponible réel et les mois de trésorerie d'avance.</p>\n      <h4>Pour le suivi bancaire</h4>\n      <p>Les banques professionnelles en ligne proposent aujourd'hui des fonctions de catégorisation automatique des dépenses, qui facilitent le remplissage du tableau de bord sans ressaisie manuelle. Vérifie si la tienne propose cette fonctionnalité.</p>\n      <h4>Pour l'épargne de sécurité</h4>\n      <p>Un livret d'épargne simple, séparé du compte courant professionnel, suffit largement — l'essentiel est la séparation, pas la sophistication du produit d'épargne choisi.</p>\n      <h4>Pour les rappels d'échéances</h4>\n      <p>Le calendrier natif de ton téléphone, avec des rappels programmés pour tes grosses échéances annuelles connues (module 3), évite d'avoir à retenir ces dates de mémoire.</p>\n      <h4>Pour aller plus loin, si le besoin s'en fait sentir</h4>\n      <p>Certains outils de comptabilité pour indépendants intègrent aujourd'hui un module de prévision de trésorerie automatisé, utile si ton activité se complexifie (plusieurs sources de revenus, équipe qui grandit). Pour la majorité des micro-entrepreneurs et freelances en solo, le tableur manuel reste largement suffisant.</p>\n      <div class=\"callout\"><strong>Le principe à retenir :</strong> l'outil le plus sophistiqué du monde ne remplace jamais la régularité du suivi. Mieux vaut un tableur simple mis à jour chaque mois qu'un logiciel avancé consulté une fois par trimestre.</div>\n      <div class=\"callout\"><strong>Outils recommandés (à titre indicatif, 2026) :</strong><ul><li><strong>Tableur :</strong> Google Sheets ou Excel, pour construire ton tableau de bord.</li><li><strong>Banque professionnelle avec catégorisation automatique :</strong> Qonto, Shine ou Blank.</li><li><strong>Épargne séparée :</strong> un simple livret chez ta banque actuelle, ou une banque en ligne comme Boursorama ou Fortuneo.</li><li><strong>Comptabilité avec prévision de trésorerie :</strong> Indy ou Tiime, si ton activité se complexifie.</li></ul><span style=\"font-size:0.85rem;color:#7a7d95;\">Cette liste évolue : vérifie toujours l'offre actuelle avant de choisir — ce sont des points de départ, pas des recommandations exclusives.</span></div>\n      ",
        "keypoints": [
          "Un tableur gratuit avec formules automatiques suffit pour le tableau de bord.",
          "Les banques pro en ligne proposent souvent une catégorisation automatique utile pour le suivi.",
          "Un simple livret d'épargne séparé convient très bien pour la réserve de sécurité.",
          "La régularité du suivi compte davantage que la sophistication de l'outil choisi."
        ]
      },
      {
        "id": "t5l2",
        "title": "Routine mensuelle de suivi",
        "html": "\n      <p>Un système de suivi ne vaut que par la régularité avec laquelle il est utilisé. Voici une routine simple, à tenir chaque mois, pour que ton tableau de bord reste toujours à jour et utile.</p>\n      <h4>Choisis une date fixe chaque mois</h4>\n      <p>Le même jour chaque mois (par exemple, le premier lundi, ou une date liée à tes échéances URSSAF), bloque quinze minutes dans ton agenda pour cette routine — traite-la avec la même rigueur qu'une échéance administrative.</p>\n      <h4>Les cinq étapes de la routine</h4>\n      <ol style=\"padding-left:1.3em;\">\n        <li><strong>Mets à jour le CA encaissé</strong> du mois écoulé dans ton tableau de bord.</li>\n        <li><strong>Calcule et provisionne les cotisations</strong> correspondantes, si ce n'est pas déjà fait au fil de l'eau.</li>\n        <li><strong>Vérifie ton solde disponible réel</strong> et compare-le à ton montant de versement habituel.</li>\n        <li><strong>Regarde ta réserve de sécurité</strong> : progresse-t-elle comme prévu, stagne-t-elle, ou diminue-t-elle ?</li>\n        <li><strong>Anticipe le mois suivant</strong> : une grosse échéance arrive-t-elle ? Une période creuse est-elle prévisible ?</li>\n      </ol>\n      <h4>Une revue trimestrielle plus approfondie</h4>\n      <p>Tous les trois mois, prends un moment un peu plus long (30 à 45 minutes) pour recalculer ton reste à vivre moyen (module 3), ajuster ton montant de versement si nécessaire (module 4), et vérifier que ta réserve de sécurité reste alignée avec tes objectifs.</p>\n      <div class=\"callout\"><strong>Le bénéfice de cette régularité :</strong> une routine tenue chaque mois transforme la gestion de trésorerie en un réflexe rapide et sans stress, plutôt qu'en une source d'angoisse ponctuelle et chronophage.</div>\n      ",
        "keypoints": [
          "Fixe une date mensuelle récurrente pour ta routine de suivi de trésorerie.",
          "Cinq étapes suffisent : CA encaissé, cotisations provisionnées, solde disponible, réserve, anticipation du mois suivant.",
          "Une revue trimestrielle plus approfondie permet de réajuster le pilotage global.",
          "La régularité transforme la gestion de trésorerie en réflexe rapide plutôt qu'en source de stress ponctuel."
        ]
      },
      {
        "id": "t5l3",
        "title": "Checklist complète de gestion de trésorerie",
        "html": "\n      <p>Voici la checklist récapitulative de l'ensemble de cette formation, à garder sous la main pour structurer durablement ta gestion de trésorerie.</p>\n      <h4>Les fondations</h4>\n      <ul>\n        <li>J'ai un compte bancaire professionnel séparé de mon compte personnel.</li>\n        <li>Je distingue clairement CA encaissé, bénéfice et argent réellement disponible.</li>\n        <li>J'ai mis en place un tableau de bord simple avec les indicateurs essentiels.</li>\n      </ul>\n      <h4>Le suivi régulier</h4>\n      <ul>\n        <li>Je provisionne mes cotisations dès l'encaissement, pas au moment de la déclaration.</li>\n        <li>Je mets à jour mon tableau de bord chaque mois, à date fixe.</li>\n        <li>Je vérifie régulièrement mes factures en attente de paiement.</li>\n      </ul>\n      <h4>La sécurisation</h4>\n      <ul>\n        <li>J'ai calculé mon reste à vivre réel, sur la base d'une moyenne de plusieurs mois.</li>\n        <li>Je constitue progressivement une réserve de sécurité de 2 à 3 mois de charges.</li>\n        <li>J'ai identifié mes grosses échéances annuelles et je les lisse mensuellement.</li>\n      </ul>\n      <h4>Le pilotage</h4>\n      <ul>\n        <li>Je me verse un montant fixe et régulier, plutôt que de piocher au coup par coup.</li>\n        <li>Je révise ce montant chaque trimestre selon l'évolution réelle de mon activité.</li>\n        <li>J'ai un plan clair pour réagir face à un imprévu, avant qu'il ne survienne.</li>\n      </ul>\n      <div class=\"callout\"><strong>Comment utiliser cette checklist :</strong> reviens-y chaque trimestre pour vérifier que chaque point reste vrai pour ta situation actuelle. Une gestion de trésorerie saine n'est jamais un acquis définitif, mais une habitude entretenue dans la durée.</div>\n      ",
        "keypoints": [
          "La checklist couvre quatre piliers : fondations, suivi régulier, sécurisation, pilotage.",
          "Chaque point de la checklist correspond à une leçon détaillée de cette formation.",
          "Revenir régulièrement à cette checklist permet de vérifier que les bonnes pratiques restent en place.",
          "Une gestion de trésorerie saine est une habitude entretenue, pas un acquis définitif."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quel outil suffit généralement pour construire son tableau de bord de trésorerie ?",
        "options": [
          "Un logiciel de comptabilité professionnel obligatoire",
          "Un tableur simple avec des formules de calcul automatiques",
          "Aucun outil n'est nécessaire",
          "Un expert-comptable à temps plein"
        ],
        "correct": 1,
        "explain": "Un tableur gratuit, bien structuré, suffit largement pour la majorité des indépendants."
      },
      {
        "q": "Quelle est la première étape de la routine mensuelle de suivi ?",
        "options": [
          "Recalculer entièrement son activité",
          "Mettre à jour le CA encaissé du mois écoulé",
          "Changer de banque",
          "Augmenter ses tarifs"
        ],
        "correct": 1,
        "explain": "La mise à jour du CA encaissé est le point de départ de toute la routine mensuelle."
      },
      {
        "q": "À quelle fréquence est recommandée la revue plus approfondie du pilotage de trésorerie ?",
        "options": [
          "Chaque semaine",
          "Chaque trimestre",
          "Une fois tous les 5 ans",
          "Jamais, une seule fois suffit"
        ],
        "correct": 1,
        "explain": "Une revue trimestrielle permet de réajuster le reste à vivre et le montant de versement selon l'évolution réelle de l'activité."
      },
      {
        "q": "Que signifie une gestion de trésorerie saine selon cette formation ?",
        "options": [
          "Un acquis définitif une fois mis en place",
          "Une habitude entretenue régulièrement dans la durée",
          "Un système impossible à tenir en solo",
          "Un sujet réservé aux grandes entreprises"
        ],
        "correct": 1,
        "explain": "La gestion de trésorerie nécessite un entretien régulier, pas seulement une mise en place ponctuelle."
      },
      {
        "q": "Quel est le lien entre le tableau de bord et la réserve de sécurité ?",
        "options": [
          "Aucun lien",
          "Le tableau de bord permet de suivre l'évolution de la réserve et de détecter les signaux d'alerte",
          "La réserve remplace le tableau de bord",
          "Le tableau de bord sert uniquement à calculer les impôts"
        ],
        "correct": 1,
        "explain": "Le tableau de bord centralise notamment le suivi de la réserve de sécurité et des mois de trésorerie d'avance."
      }
    ]
  }
];
