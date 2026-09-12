import type { CourseModuleData } from "../course-player/types";

export const modules: CourseModuleData[] = [
  {
    "id": "ta1",
    "title": "Comprendre la logique des prix",
    "icon": "compass",
    "desc": "Pourquoi tant de freelances se sous-vendent, valeur perçue, et les différentes façons de tarifer.",
    "lessons": [
      {
        "id": "ta1l1",
        "title": "Pourquoi tant de freelances se sous-vendent",
        "html": "\n      <p>Se sous-vendre est l'un des pièges les plus répandus chez les freelances, débutants comme confirmés. Comprendre pourquoi ce mécanisme s'installe est la première étape pour en sortir durablement.</p>\n      <h4>La confusion entre prix et valeur personnelle</h4>\n      <p>Beaucoup de freelances vivent une négociation de prix comme un jugement sur leur valeur en tant que personne, et non comme une simple évaluation économique d'une prestation. Cette confusion pousse à baisser ses tarifs pour éviter un rejet perçu comme personnel, alors qu'il ne l'est presque jamais.</p>\n      <h4>La peur de perdre le client</h4>\n      <p>Au démarrage d'activité surtout, chaque client semble précieux et irremplaçable. Cette rareté perçue pousse à accepter des tarifs bas plutôt que de risquer un refus — un réflexe compréhensible, mais qui installe durablement des habitudes de prix difficiles à corriger ensuite.</p>\n      <h4>Le manque de repères sur son propre marché</h4>\n      <p>Sans connaître les tarifs pratiqués par d'autres professionnels comparables, il est facile de se caler, par défaut, sur le tarif le plus bas imaginable — souvent bien en dessous de ce que le marché accepterait réellement de payer.</p>\n      <h4>L'oubli des charges réelles derrière un tarif</h4>\n      <p>Un tarif ne couvre pas que le temps de la prestation elle-même : il couvre aussi le temps commercial, administratif, les périodes creuses, les congés, les cotisations sociales et l'impôt. Beaucoup de freelances calculent leur prix sur la seule base du temps de production, ce qui aboutit mécaniquement à un tarif intenable sur la durée.</p>\n      <h4>Les conséquences d'un sous-tarif installé dans la durée</h4>\n      <p>Un tarif trop bas ne se contente pas de réduire les revenus : il attire souvent une clientèle plus exigeante sur le prix que sur la qualité, complique toute augmentation ultérieure (les clients existants s'habituent au tarif initial), et entretient un sentiment d'épuisement, puisqu'il faut multiplier les missions pour atteindre un revenu correct.</p>\n      <div class=\"callout\"><strong>Le point de départ à intégrer :</strong> fixer un tarif juste n'est pas un acte d'audace personnelle, c'est un calcul économique. Le reste de cette formation te donne une méthode concrète pour le faire, étape par étape.</div>\n      <div class=\"callout\"><strong>Avant de continuer :</strong> cette formation part du principe que tu as déjà une idée claire de ton activité et de ce que tu vends. Si ce n'est pas encore le cas — si ta niche ou ton offre restent floues — la formation « Niche, Offre & Système de vente » est le point de départ le plus logique.</div>\n      ",
        "keypoints": [
          "Confondre prix et valeur personnelle pousse à baisser ses tarifs par peur du rejet.",
          "La peur de perdre un client installe des habitudes de prix bas difficiles à corriger ensuite.",
          "Un tarif doit couvrir bien plus que le seul temps de production : administratif, périodes creuses, cotisations.",
          "Un sous-tarif installé dans la durée attire une clientèle sensible au prix et complique toute augmentation future."
        ]
      },
      {
        "id": "ta1l2",
        "title": "Prix et valeur perçue",
        "html": "\n      <p>Le prix qu'un client accepte de payer ne dépend pas uniquement du coût réel de ta prestation : il dépend surtout de la valeur qu'il perçoit. Comprendre ce mécanisme change complètement la façon d'aborder ses tarifs.</p>\n      <h4>La valeur perçue n'est pas la valeur réelle</h4>\n      <p>Deux prestations strictement identiques en contenu peuvent être vendues à des prix très différents selon la façon dont elles sont présentées et le contexte dans lequel elles sont proposées. Un client ne compare pas des heures de travail : il compare des résultats, des risques évités, et un niveau de confiance.</p>\n      <h4>Ce qui construit la valeur perçue, à prestation égale</h4>\n      <ul>\n        <li><strong>L'expertise démontrée</strong> : portfolio, références, façon de s'exprimer sur le sujet.</li>\n        <li><strong>La clarté du processus</strong> : un client qui comprend précisément ce qu'il obtient et comment perçoit moins de risque, donc plus de valeur.</li>\n        <li><strong>La rareté et la sélectivité</strong> : un professionnel qui n'accepte pas toutes les missions, ou qui a un délai d'attente, envoie un signal de valeur, même involontairement.</li>\n      </ul>\n      <h4>Le piège du prix le plus bas</h4>\n      <p>Se positionner comme l'option la moins chère du marché attire une clientèle qui restera sensible avant tout au prix — et qui partira dès qu'un concurrent proposera moins cher. Cette stratégie de prix, en plus d'être économiquement fragile, est aussi la plus difficile à faire évoluer par la suite.</p>\n      <div class=\"callout\"><strong>Un exercice utile :</strong> demande-toi ce que ton client gagne réellement à travailler avec toi — du temps, de la tranquillité d'esprit, un risque évité, un résultat professionnel — plutôt que de penser uniquement en heures de travail fournies.</div>\n      <div class=\"callout\"><strong>Pour aller plus loin :</strong> cette leçon se concentre sur l'effet de la valeur perçue sur le prix. Le travail plus large de positionnement — à qui tu t'adresses, ce qui te distingue, comment le communiquer — est traité en profondeur dans la formation « Niche, Offre & Système de vente ».</div>\n      ",
        "keypoints": [
          "La valeur perçue par le client détermine le prix acceptable, bien plus que le coût réel de la prestation.",
          "L'expertise démontrée, la clarté du processus et la sélectivité construisent la valeur perçue, à prestation égale.",
          "Se positionner comme l'option la moins chère attire une clientèle fragile et difficile à faire évoluer.",
          "Penser en résultats et bénéfices pour le client, plutôt qu'en heures travaillées, aide à mieux valoriser son offre."
        ]
      },
      {
        "id": "ta1l3",
        "title": "Les différentes façons de tarifer (forfait, journalier, package…)",
        "html": "\n      <p>Il existe plusieurs modes de tarification, chacun avec ses avantages et ses limites. Le bon choix dépend de ton activité, du type de mission, et de ta capacité à estimer précisément une charge de travail.</p>\n      <h4>Le tarif journalier (TJM)</h4>\n      <p>Tu factures un montant fixe par jour de travail. Simple à calculer et à comparer, ce mode convient bien aux missions dont le périmètre est difficile à estimer à l'avance, ou aux missions longues avec un client qui préfère payer au temps passé. Limite : il plafonne mécaniquement tes revenus à ton temps disponible, et peut inciter (à tort) le client à raisonner en \"combien de jours\" plutôt qu'en résultat.</p>\n      <h4>Le forfait</h4>\n      <p>Tu factures un montant fixe pour un périmètre de prestation clairement défini, quel que soit le temps réellement passé. Ce mode valorise ton efficacité (plus tu es rapide, plus ta rentabilité horaire augmente) et facilite la décision du client, qui connaît le montant total dès le départ. Limite : un périmètre mal cadré peut te faire perdre de l'argent si la mission dérape (d'où l'importance du devis précis, voir la formation \"Premiers clients\").</p>\n      <h4>Le package ou l'offre packagée</h4>\n      <p>Tu regroupes plusieurs prestations dans une offre unique à prix fixe (par exemple : \"Pack lancement de site\" incluant design, développement et formation). Ce mode simplifie la décision d'achat et permet souvent de vendre plus, le client percevant un ensemble cohérent plutôt que des prestations séparées à additionner mentalement.</p>\n      <h4>L'abonnement ou la rétribution récurrente</h4>\n      <p>Tu factures un montant fixe régulier (mensuel, généralement) pour une prestation continue ou un volume de travail récurrent. Ce mode sécurise ta trésorerie sur la durée, au prix d'un engagement mutuel plus fort avec le client.</p>\n      <h4>Comment choisir</h4>\n      <ul>\n        <li>Périmètre bien défini et répétable → <strong>forfait</strong> ou <strong>package</strong>.</li>\n        <li>Périmètre incertain, mission exploratoire ou évolutive → <strong>tarif journalier</strong>.</li>\n        <li>Besoin récurrent du client, relation de longue durée → <strong>abonnement</strong>.</li>\n      </ul>\n      <div class=\"callout\"><strong>Bon à savoir :</strong> rien n'empêche de combiner plusieurs modes selon les missions — un tarif journalier pour du conseil ponctuel, un forfait pour un projet cadré, par exemple. L'essentiel est que chaque mode soit choisi consciemment, et non par habitude ou par défaut.</div>\n      ",
        "keypoints": [
          "Le tarif journalier convient aux missions difficiles à estimer, mais plafonne les revenus au temps disponible.",
          "Le forfait valorise l'efficacité mais nécessite un périmètre précisément cadré pour ne pas perdre d'argent.",
          "Le package simplifie la décision d'achat en regroupant plusieurs prestations en une offre cohérente.",
          "L'abonnement sécurise la trésorerie sur la durée, au prix d'un engagement mutuel plus fort."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Pourquoi beaucoup de freelances se sous-vendent-ils ?",
        "options": [
          "Parce que leur travail est de mauvaise qualité",
          "Parce qu'ils confondent souvent prix et valeur personnelle, par peur du rejet",
          "Parce que la loi les y oblige",
          "Parce que c'est toujours la meilleure stratégie"
        ],
        "correct": 1,
        "explain": "La confusion entre prix et valeur personnelle pousse à baisser ses tarifs par peur d'un rejet perçu comme personnel."
      },
      {
        "q": "Qu'est-ce qui construit la valeur perçue par un client ?",
        "options": [
          "Uniquement le nombre d'heures travaillées",
          "L'expertise démontrée, la clarté du processus et le positionnement",
          "Le prix le plus bas possible",
          "La taille de l'entreprise du freelance"
        ],
        "correct": 1,
        "explain": "La valeur perçue dépend de facteurs qualitatifs bien plus que du seul temps de travail fourni."
      },
      {
        "q": "Quel est le principal risque d'un positionnement 'le moins cher du marché' ?",
        "options": [
          "Aucun risque particulier",
          "Attirer une clientèle sensible au prix, difficile à faire évoluer ensuite",
          "Gagner automatiquement plus de clients fidèles",
          "Être perçu comme un expert"
        ],
        "correct": 1,
        "explain": "Ce positionnement attire une clientèle qui reste concentrée sur le prix plutôt que sur la valeur."
      },
      {
        "q": "Quel mode de tarification convient le mieux à un périmètre incertain ou évolutif ?",
        "options": [
          "Le forfait fixe uniquement",
          "Le tarif journalier",
          "L'abonnement uniquement",
          "Aucun mode ne convient"
        ],
        "correct": 1,
        "explain": "Le tarif journalier s'adapte mieux à un périmètre difficile à estimer précisément à l'avance."
      },
      {
        "q": "Que doit couvrir un tarif, au-delà du seul temps de production ?",
        "options": [
          "Rien d'autre que le temps de production",
          "Le temps commercial, l'administratif, les périodes creuses et les cotisations",
          "Uniquement les impôts",
          "Le tarif ne doit couvrir que le matériel utilisé"
        ],
        "correct": 1,
        "explain": "Un tarif viable intègre l'ensemble des coûts et du temps non facturable liés à l'activité, pas seulement la prestation elle-même."
      }
    ]
  },
  {
    "id": "ta2",
    "title": "Calculer et définir ses tarifs",
    "icon": "coin",
    "desc": "La méthode pour calculer un tarif minimum viable, définir un tarif juste, et créer plusieurs offres.",
    "lessons": [
      {
        "id": "ta2l1",
        "title": "La méthode simple pour calculer son tarif minimum",
        "html": "\n      <p>Avant de penser positionnement ou stratégie, il faut connaître un chiffre essentiel : ton tarif minimum, celui en dessous duquel ton activité n'est tout simplement pas viable. Voici une méthode simple pour le calculer.</p>\n      <h4>Étape 1 — Définir le revenu net mensuel visé</h4>\n      <p>Détermine combien tu souhaites percevoir chaque mois, une fois cotisations sociales et impôt déduits. C'est ton point de départ, pas une conséquence de ton tarif.</p>\n      <h4>Étape 2 — Remonter au chiffre d'affaires nécessaire</h4>\n      <p>À partir du revenu net visé, remonte au chiffre d'affaires brut nécessaire en tenant compte de ton taux de charges (cotisations sociales, éventuellement impôt si versement libératoire — voir la formation \"Micro-entreprise 2026\" pour les taux précis selon ton activité).</p>\n      <h4>Étape 3 — Compter tes jours réellement facturables</h4>\n      <p>Un mois ne compte pas 20 jours facturables. Il faut déduire : les week-ends et jours fériés, les congés, le temps commercial (prospection, devis, relances), le temps administratif (facturation, déclarations), et une marge pour les imprévus. En réalité, beaucoup d'indépendants ne facturent que 10 à 14 jours par mois en moyenne, une fois tout ce temps déduit.</p>\n      <h4>Étape 4 — Diviser pour obtenir ton tarif journalier minimum</h4>\n      <p>Chiffre d'affaires mensuel nécessaire ÷ nombre de jours réellement facturables = ton tarif journalier minimum. Ce chiffre est un plancher, pas un objectif : il correspond au tarif en dessous duquel tu travailles à perte par rapport à tes objectifs de revenu.</p>\n      <h4>Exemple simplifié</h4>\n      <div class=\"script-block\">Revenu net visé : 2 200 €/mois\nChiffre d'affaires brut nécessaire (avec un taux de charges estimé) : environ 3 100 €/mois\nJours réellement facturables : 12 jours/mois\nTarif journalier minimum : 3 100 / 12 ≈ 258 € / jour</div>\n      <div class=\"callout\"><strong>Une erreur fréquente à éviter :</strong> calculer son tarif sur la base de 20 jours facturables par mois. C'est un calcul optimiste qui aboutit presque toujours à un tarif trop bas pour être réellement viable une fois la réalité du métier prise en compte.</div>\n      ",
        "keypoints": [
          "Le tarif minimum se calcule à partir du revenu net visé, pas l'inverse.",
          "Il faut remonter du revenu net au chiffre d'affaires brut nécessaire en tenant compte du taux de charges.",
          "Le nombre de jours réellement facturables est souvent bien inférieur à 20 jours par mois.",
          "Le tarif obtenu est un plancher à ne pas descendre, pas un objectif à atteindre."
        ]
      },
      {
        "id": "ta2l2",
        "title": "Comment définir un tarif juste et assumable",
        "html": "\n      <p>Le tarif minimum calculé en leçon 1 n'est qu'un plancher de survie économique. Le tarif que tu affiches réellement doit aussi être juste (cohérent avec le marché et la valeur apportée) et assumable (que tu peux annoncer sans hésitation ni malaise).</p>\n      <h4>Comparer avec le marché, sans s'y aligner aveuglément</h4>\n      <p>Observe les tarifs pratiqués par des professionnels comparables (expérience, spécialité, positionnement). Cette observation sert de repère, pas de règle absolue : un tarif de marché n'est ni un plafond ni un plancher automatique pour toi.</p>\n      <h4>Ajouter une marge de confort au-dessus du minimum</h4>\n      <p>Ton tarif réel doit dépasser ton tarif minimum calculé, pour absorber les imprévus (mission qui dépasse le périmètre prévu, période creuse plus longue que prévu, investissement en formation ou en matériel) sans mettre ton équilibre financier en péril à chaque aléa.</p>\n      <h4>Le test de l'aisance à l'oral</h4>\n      <p>Un bon indicateur : peux-tu annoncer ce tarif à voix haute, à un client, sans grimacer intérieurement ni ressentir le besoin de te justifier immédiatement ? Si l'idée même de prononcer ce chiffre te met mal à l'aise, il mérite d'être retravaillé — soit à la hausse pour mieux refléter ta valeur, soit accompagné d'une meilleure justification de ce qu'il couvre.</p>\n      <h4>Accepter qu'un tarif \"parfait\" n'existe pas</h4>\n      <p>Il n'y a pas de tarif universellement juste : un tarif juste est un tarif cohérent, assumé, et ajusté avec l'expérience. Il est normal — et sain — de le faire évoluer au fil du temps (voir module 4), plutôt que de chercher à trouver le chiffre définitif dès le départ.</p>\n      <div class=\"callout\"><strong>Un repère concret :</strong> si tu hésites entre deux tarifs, choisis presque toujours le plus élevé des deux — le regret de l'avoir annoncé trop haut est statistiquement bien plus rare que celui de l'avoir annoncé trop bas.</div>\n      ",
        "keypoints": [
          "Le tarif de marché sert de repère, pas de règle absolue à suivre aveuglément.",
          "Ajoute toujours une marge de confort au-dessus de ton tarif minimum calculé.",
          "Le test de l'aisance à l'oral est un bon indicateur pour savoir si un tarif est vraiment assumable.",
          "Un tarif n'est jamais définitif : il s'ajuste normalement avec l'expérience et l'évolution de l'activité."
        ]
      },
      {
        "id": "ta2l3",
        "title": "Le prix de plusieurs offres : ancrage et effet de comparaison",
        "html": "\n      <p>Proposer plusieurs niveaux de prix, plutôt qu'un tarif unique, élargit ta clientèle potentielle et facilite souvent la décision d'achat — sans jamais brader ton offre principale.</p>\n      <h4>Pourquoi proposer plusieurs niveaux de prix</h4>\n      <p>Un client hésitant face à un tarif unique n'a que deux choix : accepter ou refuser. Face à plusieurs niveaux, il compare et choisit celui qui correspond le mieux à son budget et à son besoin — ce qui augmente les chances de conclure une vente, même si ce n'est pas toujours au niveau le plus élevé.</p>\n      <h4>Le rôle stratégique du niveau premium</h4>\n      <p>Même si peu de clients choisissent le niveau premium, sa seule présence rend le niveau standard plus attractif par comparaison — un effet d'ancrage bien documenté en psychologie de la décision. Le niveau premium justifie aussi, en creux, le prix du niveau standard.</p>\n      <h4>La règle à ne jamais enfreindre sur le niveau d'entrée</h4>\n      <p>Ne construis jamais ton niveau \"entrée de gamme\" en bradant ton tarif horaire réel : il doit rester rentable, simplement avec un périmètre plus restreint (moins d'options, moins de révisions, délai plus long) — jamais avec le même travail à prix cassé.</p>\n      <div class=\"callout\"><strong>Pour aller plus loin :</strong> cette leçon couvre l'effet du prix sur la décision du client. La construction complète de ces différents niveaux d'offre — ce qu'ils contiennent, comment les nommer, comment les présenter sur une page de vente — est traitée en détail dans la formation « Niche, Offre & Système de vente ».</div>\n      ",
        "keypoints": [
          "Proposer plusieurs niveaux de prix facilite la décision d'achat, comparé à un tarif unique.",
          "Le niveau premium rend le niveau standard plus attractif par effet de comparaison, même si peu de clients le choisissent.",
          "Le niveau d'entrée doit rester rentable : un périmètre réduit, jamais un même travail bradé.",
          "La construction détaillée de chaque niveau d'offre est approfondie dans la formation Niche, Offre & Système de vente."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Sur quoi se base le calcul du tarif minimum selon la méthode proposée ?",
        "options": [
          "Le tarif des concurrents uniquement",
          "Le revenu net mensuel visé, remonté en chiffre d'affaires nécessaire",
          "Le nombre d'années d'expérience",
          "Le prix le plus bas du marché"
        ],
        "correct": 1,
        "explain": "La méthode part du revenu net souhaité pour remonter au chiffre d'affaires, puis au tarif journalier minimum."
      },
      {
        "q": "Pourquoi le nombre de jours réellement facturables est-il souvent inférieur à 20 par mois ?",
        "options": [
          "Parce que les indépendants travaillent moins que les salariés",
          "Parce qu'il faut déduire congés, temps commercial et administratif",
          "Ce n'est jamais le cas en réalité",
          "Parce que la loi l'interdit"
        ],
        "correct": 1,
        "explain": "Le temps non facturable (commercial, administratif, congés) réduit fortement le nombre de jours vraiment facturables."
      },
      {
        "q": "Que représente le tarif minimum calculé ?",
        "options": [
          "Un objectif à atteindre à tout prix",
          "Un plancher, en dessous duquel l'activité n'est pas viable",
          "Le tarif à toujours annoncer aux clients",
          "Un chiffre sans importance"
        ],
        "correct": 1,
        "explain": "Le tarif réel doit dépasser ce plancher, qui sert uniquement de repère minimal de viabilité économique."
      },
      {
        "q": "Quel est l'intérêt principal de proposer une offre premium ?",
        "options": [
          "Aucun intérêt réel",
          "Elle rend l'offre standard plus attractive par comparaison, même si peu de clients la choisissent",
          "Elle remplace systématiquement l'offre standard",
          "Elle doit toujours être la moins chère"
        ],
        "correct": 1,
        "explain": "L'effet de comparaison avec l'offre premium valorise l'offre standard aux yeux du client."
      },
      {
        "q": "Comment doit être construite une offre d'entrée de gamme ?",
        "options": [
          "Avec le même travail que l'offre standard, à prix cassé",
          "Avec un périmètre réduit, tout en restant rentable",
          "Elle ne doit jamais exister",
          "En offrant plus de services que l'offre premium"
        ],
        "correct": 1,
        "explain": "L'offre d'entrée de gamme réduit le périmètre, pas la rentabilité du travail fourni."
      }
    ]
  },
  {
    "id": "ta3",
    "title": "Présenter et défendre ses prix",
    "icon": "shield",
    "desc": "Annoncer ses tarifs avec assurance, les bonnes formulations, et répondre au 'c'est trop cher'.",
    "lessons": [
      {
        "id": "ta3l1",
        "title": "Comment annoncer ses tarifs avec assurance",
        "html": "\n      <p>La façon dont un tarif est annoncé influence autant sa perception que le montant lui-même. Un même chiffre, dit avec assurance ou avec hésitation, ne produit pas le même effet chez le client.</p>\n      <h4>Le ton compte autant que les mots</h4>\n      <p>Annoncer un prix avec une pause, un débit hésitant, ou une intonation montante en fin de phrase (comme une question) signale inconsciemment un doute — même si les mots employés sont corrects. Un tarif s'annonce avec le même ton assuré que le reste d'une présentation professionnelle.</p>\n      <h4>Ne jamais s'excuser avant d'annoncer un prix</h4>\n      <p>Des formulations comme « Alors, au niveau du prix... » suivies d'un silence gêné, ou « je vous préviens, ça risque d'être un peu élevé » plantent le doute avant même que le client ait entendu le chiffre. Le prix s'annonce directement, sans préambule anxieux.</p>\n      <h4>Faire suivre le prix d'un silence, pas d'une justification immédiate</h4>\n      <p>Après avoir annoncé un tarif, résiste à l'envie de combler immédiatement le silence par une justification défensive. Laisse au client le temps de réagir : un silence bref après l'annonce d'un prix est normal, et ne signifie pas automatiquement un désaccord.</p>\n      <h4>Préparer la phrase à l'avance</h4>\n      <p>Beaucoup d'hésitations viennent du fait de devoir improviser l'annonce du prix en temps réel. Préparer et répéter la formulation exacte à l'avance (même mentalement) élimine une grande partie du stress au moment de la dire réellement.</p>\n      <div class=\"script-block\">Pour ce projet, mon tarif est de [montant]. Cela couvre [rappel bref du périmètre].</div>\n      <div class=\"callout\"><strong>Un exercice simple :</strong> entraîne-toi à dire ton tarif à voix haute, seul·e, plusieurs fois, jusqu'à ce que la phrase sorte naturellement, sans hésitation ni accélération du débit. Cette préparation change concrètement la façon dont le chiffre est perçu à l'oral.</div>\n      ",
        "keypoints": [
          "Le ton et l'assurance avec lesquels un prix est annoncé influencent sa perception autant que le montant.",
          "Ne jamais s'excuser ou préparer le client négativement avant d'annoncer un tarif.",
          "Laisser un silence après l'annonce du prix, sans le combler immédiatement par une justification.",
          "Préparer et répéter la formulation du prix à l'avance réduit fortement l'hésitation au moment de le dire."
        ]
      },
      {
        "id": "ta3l2",
        "title": "Les formulations qui fonctionnent",
        "html": "\n      <p>Certaines formulations facilitent naturellement l'acceptation d'un tarif, en le reliant clairement à la valeur apportée plutôt qu'en le présentant comme un chiffre isolé.</p>\n      <h4>Relier le prix au résultat, pas au temps</h4>\n      <div class=\"script-block\">Ce tarif vous garantit [résultat concret attendu], livré dans les délais convenus.</div>\n      <p>Plutôt que : <em>« Ça me prend environ 3 jours de travail, donc... »</em> — qui invite à négocier sur la rapidité plutôt que sur le résultat.</p>\n      <h4>Expliciter ce qui est inclus</h4>\n      <div class=\"script-block\">Ce montant comprend [éléments clés inclus], ce qui vous évite [un risque ou une contrainte évitée].</div>\n      <p>Cette formulation transforme un chiffre abstrait en une liste concrète de bénéfices, plus facile à évaluer positivement pour le client.</p>\n      <h4>Utiliser le conditionnel avec parcimonie</h4>\n      <p>Des formulations comme « ça pourrait coûter dans les... » ou « ça devrait tourner autour de... » affaiblissent l'annonce. Privilégie l'indicatif présent, plus assertif : « Le tarif est de... ».</p>\n      <h4>Ancrer le prix dans un contexte de valeur avant de l'annoncer</h4>\n      <div class=\"script-block\">Compte tenu de [enjeu ou objectif du client] et de [ce que la prestation permet d'atteindre], mon tarif pour cette mission est de [montant].</div>\n      <p>Cette structure amène le client à penser d'abord en termes de valeur et d'enjeu, avant de recevoir le chiffre — ce qui change la grille de lecture avec laquelle il l'évalue.</p>\n      <div class=\"callout\"><strong>Le principe commun à toutes ces formulations :</strong> le prix n'est jamais un chiffre isolé dans le discours — il est toujours relié explicitement à ce qu'il permet d'obtenir pour le client.</div>\n      ",
        "keypoints": [
          "Relie toujours le prix au résultat obtenu, jamais uniquement au temps de travail.",
          "Explicite ce qui est inclus dans le tarif pour transformer un chiffre abstrait en bénéfices concrets.",
          "Utilise l'indicatif présent plutôt que le conditionnel pour annoncer un prix avec assurance.",
          "Ancrer le prix dans le contexte de l'enjeu du client, avant de l'annoncer, change la façon dont il est perçu."
        ]
      },
      {
        "id": "ta3l3",
        "title": "Répondre aux « c'est trop cher »",
        "html": "\n      <p>« C'est trop cher » est l'une des objections les plus fréquentes — et l'une des plus mal gérées par les freelances débutants, souvent par réflexe de céder immédiatement. Voici comment y répondre efficacement.</p>\n      <h4>Ne jamais baisser le prix par réflexe immédiat</h4>\n      <p>Céder instantanément confirme, aux yeux du client, que le tarif initial n'était pas réellement justifié — ce qui fragilise ta crédibilité pour la suite de la relation, et pour tes tarifs futurs avec ce même client.</p>\n      <h4>Étape 1 — Comprendre ce qui se cache derrière l'objection</h4>\n      <p>« C'est trop cher » peut signifier plusieurs choses différentes : un budget réellement limité, une comparaison avec une offre moins chère, un doute sur la valeur réelle de la prestation, ou simplement un réflexe de négociation. Pose une question avant de répondre.</p>\n      <div class=\"script-block\">Je comprends. Pour mieux vous répondre, est-ce le montant global qui pose question, ou plutôt ce qui est inclus dans cette proposition ?</div>\n      <h4>Étape 2 — Répondre selon la vraie nature de l'objection</h4>\n      <p>Si c'est un budget réellement limité : propose une version allégée du périmètre plutôt qu'une remise pure sur le même périmètre (voir module 2, leçon 3). Si c'est un doute sur la valeur : reviens sur les bénéfices concrets et les garanties de ton offre. Si c'est une comparaison avec un concurrent moins cher : ne le dénigre jamais, explique ce que ton tarif garantit spécifiquement.</p>\n      <h4>Étape 3 — Rester ferme sans être rigide</h4>\n      <p>Il est possible d'ajuster une offre (périmètre, délai, modalités de paiement) sans jamais brader le tarif de base par principe. La fermeté sur le prix, combinée à une vraie flexibilité sur la forme de l'offre, est perçue comme professionnelle plutôt que comme rigide.</p>\n      <div class=\"script-block\">Je préfère ne pas baisser ce tarif, qui reflète [rappel de la valeur]. En revanche, je peux vous proposer [ajustement du périmètre ou des modalités] pour mieux correspondre à votre budget.</div>\n      <div class=\"callout\"><strong>Le repère à garder :</strong> une objection sur le prix n'est presque jamais un signal qu'il faut brader — c'est une invitation à clarifier la valeur, ou à ajuster intelligemment l'offre plutôt que le tarif.</div>\n      ",
        "keypoints": [
          "Ne jamais baisser un prix par réflexe immédiat : cela fragilise la crédibilité du tarif initial.",
          "Cherche d'abord à comprendre la vraie nature de l'objection avant d'y répondre.",
          "Ajuste le périmètre ou les modalités plutôt que de brader le tarif de base par principe.",
          "La fermeté sur le prix combinée à de la flexibilité sur la forme de l'offre est perçue comme professionnelle."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Que faut-il éviter absolument juste avant d'annoncer un prix ?",
        "options": [
          "De sourire",
          "De s'excuser ou de préparer négativement le client",
          "D'utiliser l'indicatif présent",
          "De rester silencieux"
        ],
        "correct": 1,
        "explain": "S'excuser ou minimiser à l'avance plante le doute avant même que le client ait entendu le chiffre."
      },
      {
        "q": "Après avoir annoncé un tarif, la meilleure attitude est :",
        "options": [
          "Combler immédiatement le silence par des justifications",
          "Laisser un silence bref, sans le combler immédiatement",
          "Changer immédiatement de sujet",
          "Proposer immédiatement une remise"
        ],
        "correct": 1,
        "explain": "Un silence bref après l'annonce d'un prix est normal et ne signifie pas automatiquement un désaccord."
      },
      {
        "q": "Quelle formulation relie efficacement le prix à la valeur ?",
        "options": [
          "« Ça me prend 3 jours, donc... »",
          "« Ce tarif vous garantit [résultat concret], livré dans les délais convenus »",
          "« Ça devrait coûter dans les... »",
          "Ne rien dire du tout sur ce que couvre le prix"
        ],
        "correct": 1,
        "explain": "Relier le prix au résultat obtenu, plutôt qu'au temps de travail, renforce la valeur perçue."
      },
      {
        "q": "Face à « c'est trop cher », la première chose à faire est :",
        "options": [
          "Baisser immédiatement le prix de 20%",
          "Comprendre la vraie nature de l'objection avant de répondre",
          "Refuser toute discussion",
          "Ignorer la remarque du client"
        ],
        "correct": 1,
        "explain": "L'objection peut avoir plusieurs origines différentes ; comprendre laquelle permet une réponse plus pertinente."
      },
      {
        "q": "Comment ajuster une offre face à une contrainte de budget, sans brader son tarif de base ?",
        "options": [
          "En baissant simplement le prix sur le même périmètre",
          "En proposant une version allégée du périmètre à un tarif ajusté en conséquence",
          "En refusant toute négociation",
          "En doublant le prix"
        ],
        "correct": 1,
        "explain": "Ajuster le périmètre plutôt que de brader le tarif de base préserve la cohérence et la rentabilité de l'offre."
      }
    ]
  },
  {
    "id": "ta4",
    "title": "Augmenter et faire évoluer ses tarifs",
    "icon": "megaphone",
    "desc": "Quand et comment augmenter ses prix, l'annoncer aux clients existants, et savoir dire non.",
    "lessons": [
      {
        "id": "ta4l1",
        "title": "Quand et comment augmenter ses prix",
        "html": "\n      <p>Augmenter ses tarifs est une étape normale et saine de toute activité freelance — pourtant beaucoup repoussent cette décision par appréhension, parfois pendant plusieurs années, au détriment de leur rentabilité.</p>\n      <h4>Les signaux qui indiquent qu'il est temps d'augmenter</h4>\n      <ul>\n        <li>Ton carnet de commandes est plein en permanence, sans effort commercial particulier — signe que la demande dépasse ton tarif actuel.</li>\n        <li>Tu ressens une pointe de soulagement lorsqu'un client refuse ta proposition, plutôt qu'une déception — signe que ton tarif actuel ne te motive plus assez.</li>\n        <li>Ton expertise, tes résultats ou tes références ont significativement progressé depuis la fixation de ton tarif actuel.</li>\n        <li>Cela fait plus d'un an que ton tarif n'a pas évolué, alors que tes charges (cotisations, coût de la vie) ont continué d'augmenter.</li>\n      </ul>\n      <h4>À quelle fréquence augmenter ses tarifs</h4>\n      <p>Une révision annuelle est un bon rythme de référence pour la majorité des freelances, avec une augmentation plus significative lors d'un changement de positionnement ou d'un saut d'expertise notable. Des augmentations trop fréquentes (plusieurs fois par an) fragilisent en revanche la confiance des clients réguliers.</p>\n      <h4>Comment décider du montant de l'augmentation</h4>\n      <p>Une augmentation de 10 à 20 % est généralement bien absorbée par le marché sans effort de justification particulier. Au-delà de 20 à 30 %, prévois une justification plus explicite (montée en compétence, nouveau positionnement, forte demande) pour accompagner l'annonce.</p>\n      <h4>Appliquer l'augmentation aux nouveaux clients d'abord</h4>\n      <p>La façon la plus simple de commencer : applique ton nouveau tarif à tout nouveau prospect immédiatement, sans attendre une date symbolique. Le traitement des clients existants, plus délicat, fait l'objet de la leçon suivante.</p>\n      <div class=\"callout\"><strong>Le vrai risque à anticiper :</strong> ce n'est pas d'augmenter trop tôt, c'est de ne jamais augmenter — une activité dont le tarif reste figé pendant des années finit presque toujours par devenir économiquement intenable, à charge de travail égale.</div>\n      ",
        "keypoints": [
          "Un carnet de commandes plein en permanence est un signal clair qu'il est temps d'augmenter ses tarifs.",
          "Une révision annuelle est un bon rythme de référence pour la majorité des freelances.",
          "Une augmentation de 10 à 20 % est généralement bien absorbée sans justification particulière.",
          "Applique ton nouveau tarif à tous les nouveaux prospects dès la décision prise, sans attendre."
        ]
      },
      {
        "id": "ta4l2",
        "title": "Comment l'annoncer aux clients existants",
        "html": "\n      <p>Annoncer une augmentation de tarif à un client existant demande plus de tact qu'avec un nouveau prospect, mais reste une démarche tout à fait normale et généralement bien reçue si elle est amenée correctement.</p>\n      <h4>Anticiper, ne jamais surprendre</h4>\n      <p>Informe le client suffisamment à l'avance (au moins 1 à 2 mois avant la prochaine mission ou échéance de facturation), pour qu'il puisse anticiper de son côté. Une augmentation annoncée avec un délai raisonnable passe presque toujours mieux qu'une augmentation surprise sur une facture.</p>\n      <h4>La structure d'une annonce efficace</h4>\n      <ol style=\"padding-left:1.3em;\">\n        <li>Remercier le client pour la collaboration passée, sincèrement.</li>\n        <li>Annoncer clairement le nouveau tarif et sa date d'application.</li>\n        <li>Justifier brièvement, sans excès de justification (montée en compétence, évolution du marché, nouveau positionnement).</li>\n        <li>Rester disponible pour en discuter si besoin.</li>\n      </ol>\n      <div class=\"script-block\">Bonjour [Prénom],\n\nJe tenais à vous informer d'une évolution de mes tarifs à partir du [date]. Mon tarif pour [type de prestation] passera à [nouveau montant].\n\nCette évolution reflète [montée en compétence / évolution de mon positionnement / évolution du marché], et je reste bien sûr disponible si vous souhaitez en discuter.\n\nMerci pour votre confiance depuis [durée de la collaboration],\n[Prénom]</div>\n      <h4>Que faire si le client refuse la nouvelle grille tarifaire</h4>\n      <p>Un client qui refuse fermement une augmentation raisonnable, après plusieurs années de collaboration à tarif inchangé, révèle souvent une relation déséquilibrée depuis le départ. Ce n'est jamais confortable, mais c'est une information précieuse pour décider de la suite de cette collaboration.</p>\n      <div class=\"callout\"><strong>Un repère rassurant :</strong> la grande majorité des clients sérieux acceptent une augmentation raisonnable et bien amenée, surtout si la collaboration se passe bien par ailleurs. La peur du refus est presque toujours plus forte que le refus réel.</div>\n      ",
        "keypoints": [
          "Annonce toujours une augmentation avec un délai d'anticipation raisonnable, jamais en surprise.",
          "Structure l'annonce : remerciement, annonce claire, justification brève, disponibilité pour en discuter.",
          "Un refus ferme d'une augmentation raisonnable révèle souvent un déséquilibre dans la relation client.",
          "La majorité des clients sérieux acceptent une augmentation bien amenée sans réelle difficulté."
        ]
      },
      {
        "id": "ta4l3",
        "title": "Dire non aux demandes qui ne correspondent pas",
        "html": "\n      <p>Savoir dire non est un complément indispensable à une bonne politique tarifaire. Accepter systématiquement toute demande, même mal alignée avec ton positionnement ou ton tarif, dilue ta valeur et ton énergie.</p>\n      <h4>Identifier les demandes à décliner</h4>\n      <ul>\n        <li>Un budget très en dessous de ton tarif minimum, sans possibilité d'ajuster le périmètre en conséquence.</li>\n        <li>Une mission hors de ton champ de compétence réel, où tu risques de livrer un résultat décevant.</li>\n        <li>Un client dont le comportement (pression excessive, manque de respect du cadre) laisse présager une collaboration difficile.</li>\n        <li>Une charge de travail qui dépasse ta capacité réelle, au risque de sacrifier la qualité d'autres missions en cours.</li>\n      </ul>\n      <h4>Dire non sans culpabiliser ni s'justifier à l'excès</h4>\n      <p>Un refus clair et bref est plus professionnel qu'un refus noyé dans de longues excuses. Tu n'as pas à te justifier en détail pour décliner une mission qui ne te convient pas.</p>\n      <div class=\"script-block\">Merci pour votre proposition. Après réflexion, je pense que ce projet ne correspond pas à ce que je peux vous apporter au mieux [ou : à mon positionnement actuel / à ma disponibilité]. Je vous souhaite de trouver la bonne personne pour ce projet.</div>\n      <h4>Proposer une alternative quand c'est possible</h4>\n      <p>Si tu connais un confrère ou une consœur dont le profil correspond mieux à la demande, une recommandation transforme un refus en geste positif, qui renforce ta réputation professionnelle plutôt que de simplement fermer une porte.</p>\n      <h4>Le bénéfice à long terme de savoir dire non</h4>\n      <p>Chaque non dit à une mission mal alignée libère du temps et de l'énergie pour des missions qui correspondent réellement à ton positionnement et à ton tarif — ce qui, paradoxalement, améliore ta rentabilité globale plus qu'accepter systématiquement tout ce qui se présente.</p>\n      <div class=\"callout\"><strong>Le repère à intégrer :</strong> dire non à une mission n'est pas un échec commercial — c'est une décision stratégique qui protège ta valeur, ta qualité de travail, et ton énergie sur le long terme.</div>\n      ",
        "keypoints": [
          "Identifie clairement les types de demandes à décliner : budget trop bas, hors champ de compétence, charge excessive.",
          "Un refus clair et bref est plus professionnel qu'un refus noyé dans des justifications excessives.",
          "Proposer une alternative ou une recommandation transforme un refus en geste positif pour ta réputation.",
          "Savoir dire non protège ta valeur et ta qualité de travail sur le long terme, plus qu'un simple confort ponctuel."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quel est un signal clair qu'il est temps d'augmenter ses tarifs ?",
        "options": [
          "Avoir peu de demandes",
          "Avoir un carnet de commandes plein en permanence sans effort commercial",
          "Ne jamais ressentir de soulagement face à un refus",
          "Avoir baissé récemment ses tarifs"
        ],
        "correct": 1,
        "explain": "Un carnet de commandes toujours plein indique que la demande dépasse le tarif actuellement pratiqué."
      },
      {
        "q": "À quel rythme une révision de tarif est-elle généralement recommandée ?",
        "options": [
          "Toutes les semaines",
          "Environ une fois par an",
          "Jamais",
          "Tous les 10 ans"
        ],
        "correct": 1,
        "explain": "Une révision annuelle est un bon rythme de référence pour la majorité des freelances."
      },
      {
        "q": "Comment annoncer une augmentation à un client existant ?",
        "options": [
          "Sans prévenir, directement sur la prochaine facture",
          "Avec un délai d'anticipation raisonnable et une structure claire",
          "En évitant totalement le sujet",
          "En doublant systématiquement le tarif"
        ],
        "correct": 1,
        "explain": "Anticiper l'annonce avec un délai raisonnable évite l'effet de surprise et facilite l'acceptation."
      },
      {
        "q": "Que révèle souvent un refus ferme d'une augmentation raisonnable après plusieurs années ?",
        "options": [
          "Rien de particulier",
          "Un déséquilibre dans la relation client installé depuis le départ",
          "Que le freelance a fait une erreur de calcul",
          "Que le client va forcément rompre la collaboration"
        ],
        "correct": 1,
        "explain": "Un tel refus signale souvent une relation tarifaire déséquilibrée depuis longtemps, à examiner sérieusement."
      },
      {
        "q": "Comment dire non à une demande mal alignée avec son positionnement ?",
        "options": [
          "Avec de longues excuses justificatives",
          "De façon claire et brève, sans culpabiliser",
          "En ignorant simplement le message",
          "En acceptant quand même pour ne pas déplaire"
        ],
        "correct": 1,
        "explain": "Un refus clair et bref est perçu comme plus professionnel qu'un refus noyé dans des justifications excessives."
      }
    ]
  },
  {
    "id": "ta5",
    "title": "Ancrer la bonne posture",
    "icon": "heart",
    "desc": "Travailler sa confiance sur l'argent, éviter les erreurs classiques, et passer à l'action.",
    "lessons": [
      {
        "id": "ta5l1",
        "title": "Travailler sa confiance sur le sujet de l'argent",
        "html": "\n      <p>Au-delà des méthodes de calcul et des formulations, la confiance sur le sujet de l'argent se travaille comme une compétence à part entière — elle n'est pas un trait de personnalité figé.</p>\n      <h4>Déconstruire les croyances limitantes courantes</h4>\n      <p>Certaines croyances, souvent héritées de l'éducation ou du contexte culturel, freinent inconsciemment la capacité à fixer des tarifs justes : « demander de l'argent, c'est un peu indécent », « je ne mérite pas de gagner autant tant que je débute », « si je facture cher, je dois être irréprochable en permanence ». Identifier ces croyances, souvent héritées et rarement questionnées, est la première étape pour les neutraliser.</p>\n      <h4>Séparer le prix de la prestation... de sa propre valeur en tant que personne</h4>\n      <p>Un prix reflète la valeur économique d'une prestation dans un contexte donné — pas la valeur intrinsèque de la personne qui la fournit. Cette distinction, simple sur le papier, demande souvent un vrai travail intérieur pour être pleinement intégrée au quotidien.</p>\n      <h4>S'exposer progressivement à l'inconfort</h4>\n      <p>La confiance sur le sujet de l'argent se construit par la pratique répétée, pas par la seule réflexion théorique. Chaque annonce de prix un peu plus assumée, chaque négociation menée sans céder immédiatement, renforce progressivement cette confiance — un peu comme un muscle qui se développe par l'usage.</p>\n      <h4>S'entourer de pairs plutôt que de rester isolé sur le sujet</h4>\n      <p>Échanger avec d'autres indépendants sur les tarifs pratiqués, les difficultés rencontrées et les réussites permet de sortir de l'isolement souvent associé à ces questions, et de relativiser ses propres inquiétudes en les comparant à celles d'autres professionnels.</p>\n      <div class=\"callout\"><strong>Un repère à garder en tête :</strong> la confiance ne précède pas toujours l'action — elle en découle souvent. Chaque fois que tu annonces un tarif assumé et que la conversation se passe bien, ta confiance pour la fois suivante augmente naturellement.</div>\n      ",
        "keypoints": [
          "Les croyances limitantes sur l'argent sont souvent héritées et rarement questionnées consciemment.",
          "Le prix d'une prestation ne reflète pas la valeur personnelle de celui ou celle qui la fournit.",
          "La confiance sur l'argent se construit par la pratique répétée, pas seulement par la réflexion théorique.",
          "Échanger avec des pairs sur les tarifs aide à sortir de l'isolement et à relativiser ses inquiétudes."
        ]
      },
      {
        "id": "ta5l2",
        "title": "Les erreurs à ne plus jamais commettre",
        "html": "\n      <p>Pour conclure cette formation, voici une synthèse des erreurs les plus fréquentes en matière de tarification — à repérer immédiatement si elles se présentent dans tes propres habitudes.</p>\n      <h4>Erreur 1 — Fixer un tarif sans calcul préalable</h4>\n      <p>Choisir un chiffre \"au feeling\", sans être passé par la méthode du module 2, mène presque toujours à un tarif trop bas, découvert souvent trop tard, une fois les charges réelles constatées.</p>\n      <h4>Erreur 2 — Justifier son prix avant même qu'on ne le questionne</h4>\n      <p>Anticiper une objection qui n'a pas encore été formulée, en noyant l'annonce du prix dans des justifications préventives, installe un doute chez le client qui n'existait pas forcément avant.</p>\n      <h4>Erreur 3 — Céder systématiquement à la première objection</h4>\n      <p>Baisser son prix au moindre signe d'hésitation du client, sans même chercher à comprendre la nature de l'objection, dévalorise durablement l'offre et complique toute négociation future avec ce même client.</p>\n      <h4>Erreur 4 — Ne jamais réviser ses tarifs</h4>\n      <p>Garder le même tarif pendant plusieurs années, par appréhension d'en discuter, érode progressivement la rentabilité réelle de l'activité, notamment face à l'augmentation des charges et du coût de la vie.</p>\n      <h4>Erreur 5 — Accepter toutes les missions par peur du manque</h4>\n      <p>Dire oui systématiquement, y compris à des missions mal alignées avec son positionnement ou son tarif, dilue la valeur perçue de l'activité et épuise l'énergie disponible pour les missions réellement adaptées.</p>\n      <h4>Erreur 6 — Comparer son tarif uniquement à la baisse</h4>\n      <p>Ne se comparer qu'aux prestataires les moins chers du marché, sans jamais regarder vers le haut, enferme durablement dans une tarification insuffisante par rapport à sa valeur réelle.</p>\n      <div class=\"callout\"><strong>Comment utiliser cette liste :</strong> relis-la régulièrement, en particulier avant une négociation ou une révision tarifaire — reconnaître une erreur en train de se reproduire est souvent suffisant pour l'interrompre à temps.</div>\n      ",
        "keypoints": [
          "Fixer un tarif sans calcul préalable mène presque toujours à un tarif trop bas.",
          "Justifier son prix avant même une objection installe un doute qui n'existait pas forcément.",
          "Céder systématiquement à la première objection dévalorise durablement l'offre.",
          "Ne jamais réviser ses tarifs érode progressivement la rentabilité réelle de l'activité."
        ]
      },
      {
        "id": "ta5l3",
        "title": "Plan d'action pour appliquer immédiatement",
        "html": "\n      <p>Pour clore cette formation, voici un plan d'action concret, à dérouler dans les prochains jours pour mettre en pratique ce qui vient d'être vu.</p>\n      <h4>Cette semaine</h4>\n      <ul>\n        <li>Calcule ton tarif minimum avec la méthode du module 2, leçon 1 — même approximativement, ce chiffre est essentiel pour la suite.</li>\n        <li>Compare ce tarif minimum à ton tarif actuellement pratiqué : y a-t-il un écart important ?</li>\n        <li>Identifie une croyance limitante personnelle sur le sujet de l'argent (module 5, leçon 1), et note-la clairement.</li>\n      </ul>\n      <h4>Dans les 2 prochaines semaines</h4>\n      <ul>\n        <li>Rédige la formulation exacte que tu utiliseras désormais pour annoncer tes tarifs (module 3, leçon 2), et entraîne-toi à la dire à voix haute.</li>\n        <li>Si pertinent, structure 2 à 3 niveaux d'offre pour ton activité (module 2, leçon 3).</li>\n        <li>Décide d'une date à partir de laquelle ton nouveau tarif s'appliquera à tout nouveau prospect.</li>\n      </ul>\n      <h4>Dans le mois qui vient</h4>\n      <ul>\n        <li>Si une augmentation est justifiée, prépare et envoie ton message d'annonce aux clients existants concernés (module 4, leçon 2).</li>\n        <li>Identifie une demande récente que tu as acceptée par réflexe alors qu'elle ne correspondait pas à ton positionnement — et prépare la formulation que tu utiliserais aujourd'hui pour la décliner.</li>\n        <li>Programme une révision annuelle de tes tarifs dans ton calendrier, pour ne plus jamais laisser ce sujet de côté pendant plusieurs années.</li>\n      </ul>\n      <h4>Le principe à garder en tête pour la suite</h4>\n      <p>Une bonne politique tarifaire n'est jamais figée : elle se construit, se teste, et s'ajuste progressivement. L'essentiel n'est pas d'obtenir le tarif parfait dès aujourd'hui, mais de sortir des réflexes de sous-évaluation identifiés dans cette formation, un pas concret après l'autre.</p>\n      <div class=\"callout\"><strong>Dernier repère :</strong> reviens sur ce plan d'action dans un mois pour vérifier ce qui a été mis en place, et ce qui mérite d'être retravaillé — la tarification est un sujet qui se pratique et s'affine dans la durée, pas une fois pour toutes.</div>\n      ",
        "keypoints": [
          "Le plan d'action se déroule sur trois horizons : cette semaine, les deux prochaines semaines, le mois qui vient.",
          "Calculer son tarif minimum et préparer sa formulation d'annonce sont les premières priorités concrètes.",
          "Programmer une révision tarifaire annuelle évite de laisser le sujet de côté pendant plusieurs années.",
          "Une bonne politique tarifaire se construit et s'ajuste progressivement, elle n'est jamais figée définitivement."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Comment se construit principalement la confiance sur le sujet de l'argent ?",
        "options": [
          "Uniquement par la réflexion théorique",
          "Par la pratique répétée et l'exposition progressive à l'inconfort",
          "Elle est figée dès la naissance",
          "Elle n'a aucun lien avec la pratique"
        ],
        "correct": 1,
        "explain": "La confiance se renforce à travers l'expérience répétée, pas seulement par la compréhension théorique du sujet."
      },
      {
        "q": "Quelle erreur consiste à anticiper une objection qui n'a pas encore été formulée ?",
        "options": [
          "Ne jamais réviser ses tarifs",
          "Justifier son prix avant même qu'on ne le questionne",
          "Créer plusieurs offres",
          "Dire non à une mission mal alignée"
        ],
        "correct": 1,
        "explain": "Justifier un prix avant toute question installe un doute chez le client qui n'existait pas forcément."
      },
      {
        "q": "Quelle est la conséquence de ne jamais réviser ses tarifs sur plusieurs années ?",
        "options": [
          "Aucune conséquence particulière",
          "Une érosion progressive de la rentabilité réelle de l'activité",
          "Une augmentation automatique de la clientèle",
          "Une simplification de la gestion administrative"
        ],
        "correct": 1,
        "explain": "Sans révision, le tarif reste figé alors que les charges et le coût de la vie continuent d'évoluer."
      },
      {
        "q": "Que recommande le plan d'action pour la première semaine ?",
        "options": [
          "Envoyer immédiatement une augmentation à tous les clients",
          "Calculer son tarif minimum et le comparer à son tarif actuel",
          "Attendre un an avant d'agir",
          "Changer immédiatement de métier"
        ],
        "correct": 1,
        "explain": "Le calcul du tarif minimum est la première étape concrète recommandée dès la première semaine."
      },
      {
        "q": "Une bonne politique tarifaire est décrite dans cette formation comme :",
        "options": [
          "Un chiffre définitif à trouver une fois pour toutes",
          "Un processus qui se construit et s'ajuste progressivement dans la durée",
          "Un sujet à éviter autant que possible",
          "Une question uniquement réservée aux grandes entreprises"
        ],
        "correct": 1,
        "explain": "La tarification est présentée comme un sujet à pratiquer et affiner en continu, jamais figé définitivement."
      }
    ]
  }
];
