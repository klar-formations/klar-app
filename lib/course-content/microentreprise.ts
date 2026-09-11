import type { CourseModuleData } from "../course-player/types";

export const modules: CourseModuleData[] = [
  {
    "id": "m1",
    "title": "Comprendre ton statut et tes obligations",
    "icon": "doc",
    "desc": "Le socle : ce qu'est vraiment la micro-entreprise, ses seuils et ses limites en 2026.",
    "lessons": [
      {
        "id": "m1l1",
        "title": "Micro-entreprise vs autres statuts : ce que tu dois vraiment savoir",
        "html": "\n      <p>La micro-entreprise n'est pas, à proprement parler, une forme juridique d'entreprise. C'est un <strong>régime</strong> — fiscal et social — accolé à un statut juridique bien précis : l'entreprise individuelle (EI). Quand tu crées une micro-entreprise, tu crées donc une entreprise individuelle, et tu optes en même temps pour le régime micro-social et micro-fiscal, qui simplifie considérablement le calcul de tes cotisations et de ton impôt.</p>\n      <h4>Ce qui distingue vraiment la micro-entreprise</h4>\n      <p>Trois caractéristiques structurent tout le régime, et tu vas les retrouver dans chaque module de cette formation :</p>\n      <ul>\n        <li><strong>Des cotisations calculées sur le chiffre d'affaires encaissé</strong>, et non sur un bénéfice. Tu ne déduis aucune charge réelle (loyer, matériel, déplacements...) : un pourcentage fixe de ton CA couvre forfaitairement tes cotisations sociales.</li>\n        <li><strong>Pas de CA, pas de cotisations.</strong> C'est l'un des grands avantages du régime : si tu n'encaisses rien sur une période, tu ne paies rien (mais tu dois quand même déclarer, on y revient au module 3).</li>\n        <li><strong>Une comptabilité allégée</strong> : pas de bilan, pas de compte de résultat à déposer. Tu dois seulement tenir un livre des recettes (et un registre des achats si tu vends des marchandises), et conserver tes factures.</li>\n      </ul>\n      <h4>Micro-entreprise face aux autres statuts</h4>\n      <p>Face à une entreprise individuelle au régime réel, la micro-entreprise gagne en simplicité mais perd en flexibilité : impossible de déduire tes charges réelles, même si elles sont élevées (un abattement forfaitaire s'applique à la place, on le détaille au module 4). Face à une société (EURL, SASU), tu perds la possibilité de te verser un salaire optimisé ou de réinvestir des bénéfices non distribués dans l'entreprise, mais tu gagnes une simplicité de création et de gestion sans commune mesure : pas de statuts à rédiger, pas de capital social, pas de comptabilité en partie double.</p>\n      <p>Un point rassurant, souvent mal connu : depuis la réforme de l'entreprise individuelle entrée en vigueur en 2022, ton patrimoine personnel est automatiquement protégé. Tu n'as plus besoin de démarche particulière (l'ancien statut EIRL a disparu) : par défaut, seul ton patrimoine professionnel peut être saisi par tes créanciers professionnels, sauf exceptions (dettes fiscales ou sociales en cas de manœuvres frauduleuses, ou renonciation volontaire à cette protection pour un prêt bancaire par exemple).</p>\n      <div class=\"callout\"><strong>En pratique :</strong> si ton activité génère peu de charges (prestations intellectuelles, création, conseil...), la micro-entreprise est souvent la solution la plus rentable et la plus simple pour démarrer. Si tes charges réelles dépassent largement l'abattement forfaitaire (achat de matières premières, local commercial, sous-traitance lourde...), il faudra un jour comparer sérieusement avec le régime réel — on aborde ce passage au module 6.</p></div>\n      ",
        "keypoints": [
          "La micro-entreprise est un régime fiscal et social simplifié, adossé au statut d'entreprise individuelle (EI).",
          "Les cotisations se calculent sur le CA encaissé, sans déduction de charges réelles.",
          "Ton patrimoine personnel est protégé automatiquement depuis 2022, sans démarche à faire.",
          "C'est le bon choix quand tes charges réelles restent modestes ; sinon, le régime réel ou une société peuvent devenir plus intéressants."
        ]
      },
      {
        "id": "m1l2",
        "title": "Les seuils de chiffre d'affaires 2026 (et ce qui se passe si tu les dépasses)",
        "html": "\n      <p>Pour rester en micro-entreprise, ton chiffre d'affaires annuel encaissé ne doit pas dépasser certains plafonds. Ces seuils sont révisés tous les trois ans : la période en vigueur est <strong>2026-2028</strong>, avec une revalorisation par rapport à la période précédente (2023-2025).</p>\n      <h4>Les plafonds 2026</h4>\n      <ul>\n        <li><strong>203 100 € HT</strong> pour les activités de vente de marchandises, d'objets, de denrées à emporter ou à consommer sur place, et les prestations d'hébergement (y compris les meublés de tourisme classés).</li>\n        <li><strong>83 600 € HT</strong> pour les prestations de services relevant des bénéfices industriels et commerciaux (BIC) ou des bénéfices non commerciaux (BNC), c'est-à-dire l'immense majorité des activités de service et des professions libérales.</li>\n        <li>Pour une <strong>activité mixte</strong> (vente + services), ton chiffre d'affaires global ne doit pas dépasser 203 100 €, dont un maximum de 83 600 € au titre des prestations de services.</li>\n      </ul>\n      <h4>C'est le CA encaissé, pas le CA facturé</h4>\n      <p>Ce point piège beaucoup de monde. Ce qui compte pour apprécier le seuil, ce n'est pas la date de tes factures, mais la date à laquelle tu es réellement payé·e. Une facture émise en décembre 2026 mais réglée en janvier 2027 compte dans le chiffre d'affaires... de 2027.</p>\n      <h4>Création en cours d'année : un seuil proratisé</h4>\n      <p>Si tu crées ton activité en cours d'année, le plafond est ajusté au nombre de jours d'activité restants jusqu'au 31 décembre, selon la formule :</p>\n      <p style=\"text-align:center;font-weight:600;\">Seuil annuel × (nombre de jours d'activité / 365) = seuil à ne pas dépasser</p>\n      <p>Par exemple, pour une activité de services créée le 1er avril 2026 (275 jours d'activité restants), le seuil proratisé s'élève à environ 62 986 €, et non 83 600 €.</p>\n      <h4>Que se passe-t-il en cas de dépassement ?</h4>\n      <p>Un dépassement ponctuel, une seule année, n'a <strong>aucune conséquence</strong> : tu restes en micro-entreprise l'année suivante. En revanche, si tu dépasses le seuil correspondant à ton activité <strong>deux années civiles consécutives</strong>, tu sors du régime micro-entreprise et tu bascules automatiquement vers un régime réel d'imposition (BIC ou BNC réel) à compter du 1er janvier de l'année suivante.</p>\n      <div class=\"callout\"><strong>Attention à ne pas confondre :</strong> ce plafond détermine ton maintien dans le régime micro. Il existe un second seuil, bien plus bas, qui concerne uniquement la TVA : c'est l'objet de la prochaine leçon.</div>\n      ",
        "keypoints": [
          "2026 : 203 100 € pour la vente/hébergement, 83 600 € pour les prestations de services (seuils valables jusqu'en 2028).",
          "C'est le CA réellement encaissé qui compte, pas le CA facturé.",
          "En cas de création en cours d'année, le seuil est proratisé au nombre de jours d'activité.",
          "Il faut dépasser le seuil deux années civiles de suite pour sortir du régime micro l'année suivante."
        ]
      },
      {
        "id": "m1l3",
        "title": "Franchise en base de TVA : avantages, limites et pièges",
        "html": "\n      <p>Tant que ton chiffre d'affaires reste sous certains seuils, tu bénéficies de la <strong>franchise en base de TVA</strong> : tu ne factures pas de TVA à tes clients, et en contrepartie tu ne récupères pas la TVA sur tes achats professionnels. C'est un mécanisme distinct des seuils du régime micro vus dans la leçon précédente — beaucoup plus bas.</p>\n      <h4>Les seuils de franchise TVA en 2026</h4>\n      <p>Chaque catégorie d'activité a deux seuils : un seuil de base et un seuil majoré.</p>\n      <ul>\n        <li><strong>Vente de marchandises et hébergement :</strong> 85 000 € (seuil de base) / 93 500 € (seuil majoré).</li>\n        <li><strong>Prestations de services :</strong> 37 500 € (seuil de base) / 41 250 € (seuil majoré).</li>\n      </ul>\n      <h4>Ce qui se passe en cas de dépassement</h4>\n      <p>Les deux seuils n'ont pas le même effet, et c'est là que se niche le vrai piège :</p>\n      <ul>\n        <li>Si tu dépasses le <strong>seuil de base</strong> sans franchir le seuil majoré, tu perds la franchise et deviens redevable de la TVA seulement <strong>à partir du 1er janvier de l'année suivante</strong>. Tu as donc un peu de temps pour t'organiser.</li>\n        <li>Si tu dépasses le <strong>seuil majoré</strong> en cours d'année, tu deviens redevable de la TVA <strong>dès le premier jour du mois de dépassement</strong>, sans délai. C'est le scénario à surveiller de près si ton activité est en forte croissance.</li>\n      </ul>\n      <h4>Les avantages de la franchise</h4>\n      <p>Ne pas facturer de TVA simplifie énormément ta gestion (pas de déclaration de TVA à produire) et te rend plus compétitif·ve face à une clientèle de particuliers, puisque ton prix TTC = ton prix HT.</p>\n      <h4>Les limites et pièges à anticiper</h4>\n      <ul>\n        <li><strong>Tu ne récupères pas la TVA</strong> sur tes achats professionnels (matériel, logiciels, fournitures) : elle reste une charge sèche pour toi.</li>\n        <li><strong>Face à une clientèle professionnelle</strong>, certains clients B2B préfèrent des prestataires assujettis à la TVA, qu'ils peuvent récupérer de leur côté — ce n'est pas un blocage, mais un élément à connaître.</li>\n        <li><strong>La sortie de franchise se prépare</strong> : si tu sens que tu vas dépasser le seuil de base, anticipe une hausse de tes prix HT (pour ne pas rogner ta marge le jour où tu devras ajouter la TVA) et renseigne-toi sur le régime de TVA qui s'appliquera (réel simplifié ou réel normal selon ton activité).</li>\n        <li>Même en franchise, tu restes <strong>assujetti·e à la TVA au sens de la réforme de la facturation électronique</strong> — un point essentiel du module 2.</li>\n      </ul>\n      <div class=\"callout\"><strong>Sur tes factures</strong>, tant que tu es en franchise, tu dois obligatoirement faire figurer la mention : « TVA non applicable, art. 293 B du CGI ».</div>\n      ",
        "keypoints": [
          "Seuils de franchise TVA 2026 : 85 000 €/93 500 € (vente-hébergement) et 37 500 €/41 250 € (services).",
          "Dépassement du seuil de base : TVA due au 1er janvier suivant. Dépassement du seuil majoré : TVA due immédiatement.",
          "En franchise, tu ne factures pas de TVA mais tu ne la récupères pas non plus sur tes achats.",
          "La mention « TVA non applicable, art. 293 B du CGI » est obligatoire sur chaque facture tant que tu es en franchise."
        ]
      },
      {
        "id": "m1l4",
        "title": "Ce qui a changé en 2026 (et ce qui change en 2027)",
        "html": "\n      <p>Le régime de la micro-entreprise évolue chaque année. Voici un panorama synthétique des changements entrés en vigueur en 2026, et de ceux qui t'attendent en 2027 — pour que tu partes du bon pied, avec les bonnes règles en tête.</p>\n      <h4>Ce qui change en 2026</h4>\n      <ul>\n        <li><strong>Nouveaux seuils de chiffre d'affaires</strong> pour la période triennale 2026-2028 : 203 100 € (vente) et 83 600 € (services), en hausse par rapport à la période 2023-2025.</li>\n        <li><strong>Réforme de l'ACRE :</strong> depuis le 1er janvier 2026, l'exonération n'est plus attribuée automatiquement. Il faut désormais en faire la demande auprès de l'URSSAF dans les 60 jours suivant le début d'activité. De plus, à partir du 1er juillet 2026, le taux d'exonération diminue (on détaille tout cela au module 4).</li>\n        <li><strong>Obligation de réception des factures électroniques</strong> dès le <strong>1er septembre 2026</strong>, pour toutes les entreprises sans exception, y compris les micro-entrepreneurs en franchise de TVA.</li>\n        <li><strong>Ajustement des taux de cotisations sociales</strong>, notamment pour les professions libérales, dans le cadre de la poursuite de la réforme de la retraite complémentaire des indépendants engagée depuis 2024.</li>\n      </ul>\n      <h4>Ce qui t'attend en 2027</h4>\n      <ul>\n        <li><strong>Obligation d'émettre des factures électroniques</strong> dès le <strong>1er septembre 2027</strong> pour les micro-entreprises, TPE et PME (les grandes entreprises et ETI y sont déjà soumises depuis 2026). Un simple PDF envoyé par e-mail ne suffira plus pour tes factures B2B concernées.</li>\n        <li><strong>Entrée en vigueur de l'e-reporting</strong> pour les micro-entreprises à la même date : la transmission à l'administration fiscale de certaines données de transactions (notamment tes ventes à des particuliers) deviendra automatique via ta plateforme de facturation.</li>\n      </ul>\n      <div class=\"callout\"><strong>Pourquoi retenir ce calendrier ?</strong> Parce qu'il structure toute la suite de cette formation. Le module 2 t'explique en détail comment t'y préparer sans stress, bien avant l'échéance.</div>\n      ",
        "keypoints": [
          "2026 : nouveaux seuils de CA, réforme de l'ACRE (demande obligatoire, taux réduit), réception des factures électroniques obligatoire dès septembre.",
          "2027 : émission des factures électroniques et e-reporting obligatoires pour les micro-entreprises dès le 1er septembre.",
          "Anticiper ces échéances évite les mauvaises surprises et les sanctions financières.",
          "Le reste de la formation détaille chacun de ces points pour que tu sois prêt·e bien à l'avance."
        ]
      }
    ],
    "quiz": [
      {
        "q": "La micro-entreprise est...",
        "options": [
          "Une forme juridique de société",
          "Un régime fiscal et social adossé à l'entreprise individuelle",
          "Une association",
          "Un statut réservé aux artisans"
        ],
        "correct": 1,
        "explain": "La micro-entreprise est un régime simplifié appliqué à une entreprise individuelle (EI), pas une forme de société."
      },
      {
        "q": "En 2026, le plafond de CA pour une activité de prestations de services est de :",
        "options": [
          "83 600 €",
          "203 100 €",
          "37 500 €",
          "150 000 €"
        ],
        "correct": 0,
        "explain": "83 600 € pour les services (BIC/BNC), 203 100 € pour la vente et l'hébergement."
      },
      {
        "q": "Que se passe-t-il si tu dépasses le seuil de CA une seule année ?",
        "options": [
          "Tu sors immédiatement du régime micro",
          "Il ne se passe rien, tant que ce n'est pas 2 années consécutives",
          "Tu perds l'ACRE",
          "Tu dois créer une société"
        ],
        "correct": 1,
        "explain": "Il faut dépasser le seuil deux années civiles consécutives pour sortir du régime micro."
      },
      {
        "q": "Le seuil de franchise en base de TVA pour les prestations de services en 2026 est de :",
        "options": [
          "85 000 €",
          "83 600 €",
          "37 500 €",
          "93 500 €"
        ],
        "correct": 2,
        "explain": "37 500 € est le seuil de base de franchise TVA pour les services (41 250 € pour le seuil majoré)."
      },
      {
        "q": "Depuis le 1er septembre 2026, tous les micro-entrepreneurs doivent :",
        "options": [
          "Émettre leurs factures au format électronique",
          "Pouvoir recevoir des factures électroniques",
          "Payer la TVA quel que soit leur CA",
          "Tenir une comptabilité en partie double"
        ],
        "correct": 1,
        "explain": "L'obligation de réception des factures électroniques s'applique à toutes les entreprises dès septembre 2026 ; l'émission n'est obligatoire pour les micro-entreprises qu'à partir de septembre 2027."
      }
    ]
  },
  {
    "id": "m2",
    "title": "La facturation correctement",
    "icon": "chat",
    "desc": "Mentions obligatoires, bonnes pratiques, facturation électronique et cas particuliers.",
    "lessons": [
      {
        "id": "m2l1",
        "title": "Les mentions obligatoires sur une facture",
        "html": "\n      <p>Une facture n'est pas un simple document commercial : c'est une pièce juridique et fiscale, dont le contenu est strictement encadré par la loi. Une facture incomplète t'expose à une amende (jusqu'à 75 000 € pour une personne physique en théorie, même si ce montant maximal n'est appliqué qu'en cas de manquement grave et répété) et peut poser problème en cas de contrôle. Voici la liste complète des mentions à faire figurer.</p>\n      <h4>Les informations sur toi et ton client</h4>\n      <ul>\n        <li>Ton nom et prénom (ou ta dénomination commerciale si tu en as une), ton adresse professionnelle.</li>\n        <li>Ton numéro SIREN ou SIRET.</li>\n        <li>La mention de ton statut de micro-entrepreneur n'est pas obligatoire en tant que telle, mais la mention TVA (voir plus bas) l'est.</li>\n        <li>Le nom (ou la raison sociale) et l'adresse de ton client. Pour un client professionnel, son numéro SIREN/SIRET est également requis.</li>\n      </ul>\n      <h4>Les informations sur la facture elle-même</h4>\n      <ul>\n        <li>Un <strong>numéro de facture unique</strong>, basé sur une séquence chronologique continue et sans interruption (voir la leçon suivante).</li>\n        <li>La <strong>date d'émission</strong> de la facture, et la date de la vente ou de la prestation si elle diffère.</li>\n        <li>La désignation précise de chaque produit ou service vendu (nature, quantité).</li>\n        <li>Le prix unitaire hors taxes de chaque produit ou service, et le montant total.</li>\n      </ul>\n      <h4>Les informations liées à la TVA</h4>\n      <ul>\n        <li>Si tu es en franchise en base : la mention <strong>« TVA non applicable, art. 293 B du CGI »</strong>.</li>\n        <li>Si tu es assujetti·e à la TVA : le taux de TVA appliqué et le montant correspondant pour chaque ligne, ainsi que le total TTC.</li>\n      </ul>\n      <h4>Les informations liées au paiement</h4>\n      <ul>\n        <li>La date d'échéance du règlement (ou les conditions d'escompte, s'il y en a — rare en pratique pour un micro-entrepreneur).</li>\n        <li>Pour les clients professionnels : le <strong>taux des pénalités de retard</strong> applicables (le taux légal ou un taux au moins égal à trois fois le taux d'intérêt légal, selon ce que tu choisis d'indiquer) et la mention de l'<strong>indemnité forfaitaire pour frais de recouvrement de 40 €</strong>, due de plein droit en cas de retard de paiement d'un professionnel.</li>\n      </ul>\n      <div class=\"callout\"><strong>Cas particulier :</strong> si ton activité nécessite une assurance de responsabilité civile professionnelle obligatoire (bâtiment, professions réglementées...), les coordonnées de ton assureur et la couverture géographique de ton contrat doivent également apparaître sur tes factures et devis.</div>\n      ",
        "keypoints": [
          "Une facture doit comporter tes coordonnées complètes, celles de ton client, un numéro unique et la date.",
          "La désignation précise, le prix unitaire HT et le total sont obligatoires pour chaque ligne.",
          "Mentionne « TVA non applicable, art. 293 B du CGI » tant que tu es en franchise de TVA.",
          "Pour les clients professionnels, indique le taux de pénalités de retard et l'indemnité forfaitaire de 40 €."
        ]
      },
      {
        "id": "m2l2",
        "title": "Numérotation, conservation et bonnes pratiques",
        "html": "\n      <h4>Une numérotation chronologique et continue</h4>\n      <p>Tes factures doivent suivre une <strong>séquence unique, continue et chronologique</strong>, sans trou ni doublon. Il n'existe pas de format imposé par la loi : tu peux choisir « FA2026-001 », « 2026-01 », ou tout autre système, à condition qu'il soit cohérent dans le temps et qu'il ne saute jamais de numéro. Beaucoup de micro-entrepreneurs repartent d'une numérotation à zéro chaque année civile (FA2026-001, FA2027-001...), ce qui est parfaitement admis tant que la logique reste continue au sein de chaque année.</p>\n      <h4>Ne jamais modifier une facture déjà émise</h4>\n      <p>Une fois qu'une facture est envoyée à un client, tu ne dois jamais la modifier ni la supprimer, même pour corriger une erreur. Si une correction est nécessaire (erreur de montant, remise oubliée...), tu dois émettre soit une <strong>facture rectificative</strong>, soit un <strong>avoir</strong>, qui référence la facture d'origine.</p>\n      <h4>Combien de temps conserver tes factures ?</h4>\n      <p>Deux obligations se superposent : la conservation à des fins commerciales (10 ans) et à des fins fiscales (6 ans minimum). En pratique, la règle la plus simple à retenir — et la plus prudente — est de <strong>conserver toutes tes factures, devis et justificatifs pendant au moins 10 ans</strong>, au format papier ou numérique.</p>\n      <h4>Bonnes pratiques pour une facturation sans accroc</h4>\n      <ul>\n        <li><strong>Facture rapidement</strong> après la livraison ou la fin de la prestation : c'est plus simple pour toi, et ça sécurise ta trésorerie.</li>\n        <li><strong>Fais toujours signer un devis</strong> avant de démarrer une prestation significative : il protège les deux parties et clarifie le périmètre de la mission.</li>\n        <li><strong>Utilise un outil dédié</strong> plutôt qu'un simple traitement de texte : la numérotation automatique et l'archivage te feront gagner un temps précieux (voir la leçon 4 de ce module).</li>\n        <li><strong>Sépare tes flux professionnels et personnels</strong> avec un compte bancaire dédié à ton activité — c'est d'ailleurs une obligation légale au-delà de 10 000 € de CA sur deux années consécutives.</li>\n      </ul>\n      ",
        "keypoints": [
          "La numérotation des factures doit être chronologique, continue, sans trou ni doublon.",
          "Une facture émise ne se modifie jamais : on émet un avoir ou une facture rectificative.",
          "Conserve toutes tes factures et justificatifs au moins 10 ans.",
          "Facture vite, fais signer tes devis, et sépare tes comptes bancaires pro et perso."
        ]
      },
      {
        "id": "m2l3",
        "title": "Facturation électronique : ce qui est obligatoire dès septembre 2026 (réception) et septembre 2027 (émission)",
        "html": "\n      <p>C'est la réforme la plus structurante des prochaines années pour tous les indépendants français. Voici comment elle s'applique concrètement à toi, micro-entrepreneur, étape par étape.</p>\n      <h4>Le principe général</h4>\n      <p>La réforme impose progressivement à toutes les entreprises assujetties à la TVA — y compris celles en franchise en base, comme la majorité des micro-entrepreneurs — d'échanger leurs factures au format électronique structuré, via une <strong>plateforme de dématérialisation agréée par l'État (PDP)</strong>, et non plus par simple e-mail avec un PDF joint.</p>\n      <h4>Étape 1 : la réception, dès le 1er septembre 2026</h4>\n      <p>À partir de cette date, <strong>toutes les entreprises françaises</strong>, sans exception de taille, doivent être en mesure de <strong>recevoir</strong> des factures électroniques de leurs fournisseurs. Concrètement, tu dois avoir choisi et configuré ta plateforme de dématérialisation avant cette échéance, et t'être inscrit·e dans l'annuaire central qui recense l'adresse de réception de chaque entreprise. Cette obligation te concerne même si tu ne vends qu'à des particuliers : tu peux tout de même recevoir des factures électroniques de tes propres fournisseurs professionnels (matériel, logiciels, sous-traitance...).</p>\n      <h4>Étape 2 : l'émission, à partir du 1er septembre 2027</h4>\n      <p>Pour les micro-entreprises, TPE et PME, l'obligation d'<strong>émettre</strong> tes propres factures au format électronique (et de transmettre les données correspondantes à l'administration via l'e-reporting) entre en vigueur le <strong>1er septembre 2027</strong>. Les grandes entreprises et ETI, elles, y sont déjà soumises depuis septembre 2026 : si tu factures ce type de clients, ils pourraient donc te demander de passer par une plateforme avant même ton échéance légale.</p>\n      <h4>Qui est concerné, qui ne l'est pas</h4>\n      <p>Tous les indépendants assujettis à la TVA — même en franchise — entrent dans le champ de la réforme, pour leurs opérations avec d'autres entreprises françaises (B2B). Les ventes à des particuliers (B2C) et les opérations internationales relèvent, elles, de l'e-reporting : une transmission de données de transaction à l'administration, sans passer par l'échange de facture structurée entre les deux parties.</p>\n      <h4>Ce qu'il faut faire, concrètement</h4>\n      <ol style=\"padding-left:1.3em;\">\n        <li>Choisir une plateforme de dématérialisation partenaire (PDP), souvent proposée gratuitement pour les petits volumes par les outils de facturation (voir la leçon suivante).</li>\n        <li>Vérifier que ton outil actuel de facturation sera compatible avec ce format d'ici septembre 2027.</li>\n        <li>Anticiper : ne pas attendre l'été 2027 pour s'en préoccuper. Beaucoup d'outils gratuits ou peu coûteux permettent déjà de s'organiser sereinement, bien avant l'échéance.</li>\n      </ol>\n      <div class=\"callout\"><strong>Sanctions à connaître :</strong> l'absence de plateforme désignée peut entraîner une amende de 500 € (puis 1 000 € tous les trimestres), 15 € par facture non transmise au bon format une fois l'obligation en vigueur, et jusqu'à 250 € par manquement à l'e-reporting. Ces montants restent plafonnés annuellement, mais autant les éviter en t'organisant à l'avance.</div>\n      ",
        "keypoints": [
          "Réception de factures électroniques obligatoire pour tous dès le 1er septembre 2026.",
          "Émission de factures électroniques obligatoire pour les micro-entreprises à partir du 1er septembre 2027.",
          "Il faut choisir une plateforme de dématérialisation agréée (PDP) et s'inscrire dans l'annuaire central.",
          "Les ventes B2C et internationales passent par l'e-reporting plutôt que par l'échange de facture structurée."
        ]
      },
      {
        "id": "m2l4",
        "title": "Comment choisir une plateforme de facturation adaptée",
        "html": "\n      <p>Avec la réforme de la facturation électronique, le choix de ton outil de facturation devient une vraie décision stratégique, et pas seulement une question de confort. Voici les critères à examiner.</p>\n      <h4>Les critères essentiels</h4>\n      <ul>\n        <li><strong>La compatibilité avec la réforme :</strong> vérifie que l'outil est raccordé à une plateforme de dématérialisation partenaire (PDP) ou qu'il a prévu de l'être avant septembre 2027, et qu'il te permettra de recevoir des factures électroniques dès septembre 2026.</li>\n        <li><strong>La numérotation automatique et continue</strong> de tes factures, pour éviter toute erreur de séquence.</li>\n        <li><strong>La génération automatique des mentions obligatoires</strong> (TVA non applicable, pénalités de retard, indemnité forfaitaire...).</li>\n        <li><strong>L'export comptable</strong> de ton chiffre d'affaires, utile pour tes déclarations URSSAF et ta déclaration de revenus.</li>\n        <li><strong>La gestion des devis</strong>, avec possibilité de les transformer en facture en un clic.</li>\n        <li><strong>Le coût</strong>, bien sûr : de nombreuses solutions proposent une offre gratuite ou très abordable, largement suffisante pour un volume de facturation de micro-entrepreneur.</li>\n      </ul>\n      <h4>Les options accessibles</h4>\n      <p>Plusieurs types de solutions existent aujourd'hui pour les micro-entrepreneurs :</p>\n      <ul>\n        <li>Des <strong>outils de facturation gratuits ou freemium</strong> dédiés aux indépendants, qui incluent la génération de devis, factures et le suivi des paiements.</li>\n        <li>Les <strong>outils intégrés aux banques professionnelles en ligne</strong>, qui proposent souvent un module de facturation basique inclus dans l'abonnement.</li>\n        <li>Des <strong>logiciels de gestion plus complets</strong> (facturation + comptabilité + suivi des déclarations URSSAF), payants mais utiles si ton activité se développe rapidement.</li>\n      </ul>\n      <p>Avant de choisir, compare toujours l'offre gratuite proposée : elle suffit largement tant que ton volume de factures reste modéré (quelques dizaines par mois). Le critère décisif pour 2026-2027 reste la compatibilité annoncée avec la réforme de la facturation électronique — demande explicitement cette information à l'éditeur si elle n'est pas indiquée clairement sur son site.</p>\n      <div class=\"callout\"><strong>Astuce :</strong> évite les solutions « maison » (tableur, traitement de texte) dès que ton activité prend de l'ampleur. Elles ne garantissent ni la numérotation continue, ni l'archivage sécurisé, ni la compatibilité avec la facturation électronique à venir.</div>\n      ",
        "keypoints": [
          "Le critère prioritaire pour 2026-2027 : la compatibilité avec une plateforme de dématérialisation agréée.",
          "Cherche numérotation automatique, mentions légales pré-remplies et export comptable.",
          "De nombreuses solutions gratuites ou très abordables suffisent largement pour un volume de micro-entrepreneur.",
          "Anticipe la bascule avant l'échéance de septembre 2027 plutôt que de la découvrir au dernier moment."
        ]
      },
      {
        "id": "m2l5",
        "title": "Cas particuliers : facturation aux particuliers, à l'étranger, aux entreprises",
        "html": "\n      <h4>Facturer un particulier (B2C)</h4>\n      <p>La facture reste en principe obligatoire, mais la loi tolère une facture non obligatoire dans certains cas de vente ou service à un particulier en dessous de 25 € TTC — dans la pratique, mieux vaut systématiquement établir une facture ou une note dès qu'un client la demande, ou au-delà de ce montant. Tu n'as pas besoin du SIRET du client (il n'en a pas), mais son nom et son adresse restent nécessaires.</p>\n      <h4>Facturer une entreprise en France (B2B)</h4>\n      <p>C'est le cas le plus encadré : toutes les mentions vues en leçon 1 s'appliquent scrupuleusement, y compris les pénalités de retard et l'indemnité forfaitaire de recouvrement de 40 €. C'est aussi ce flux qui sera concerné en priorité par la facturation électronique obligatoire à partir de septembre 2027.</p>\n      <h4>Facturer un client dans l'Union européenne</h4>\n      <p>Si tu factures une entreprise assujettie dans un autre pays de l'UE, tu dois indiquer sur ta facture le numéro de TVA intracommunautaire de ton client, ainsi que ton propre numéro de TVA intracommunautaire. Même en franchise en base, tu dois demander ce numéro auprès du service des impôts des entreprises dès lors que tu factures ce type de prestations. Il n'y a pas de TVA française à appliquer sur ces échanges B2B intracommunautaires (mécanisme d'autoliquidation par le client), mais la mention « TVA non applicable » reste indiquée.</p>\n      <h4>Facturer un client hors Union européenne</h4>\n      <p>Pour un client établi hors UE (particulier ou professionnel), la TVA française ne s'applique pas non plus. Si tu vends des biens physiques, des formalités douanières à l'exportation peuvent s'ajouter selon le pays de destination et la valeur des marchandises. Renseigne-toi auprès des douanes françaises si ton activité de vente à l'international se développe.</p>\n      <div class=\"callout\"><strong>Le réflexe à garder :</strong> quel que soit le client, la rigueur reste la même : facture numérotée, mentions complètes, conservation. Seules les mentions de TVA intracommunautaire et les formalités douanières changent selon la destination.</div>\n      ",
        "keypoints": [
          "Facturer un particulier : pas de SIRET requis, mais le nom et l'adresse du client restent obligatoires.",
          "Facturer une entreprise en France : toutes les mentions légales s'appliquent, y compris les pénalités de retard.",
          "Facturer dans l'UE : demande un numéro de TVA intracommunautaire, même en franchise en base.",
          "Facturer hors UE : pas de TVA française, mais des formalités douanières possibles pour les biens physiques."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelle mention est obligatoire sur une facture émise en franchise de TVA ?",
        "options": [
          "Le taux de TVA à 20 %",
          "« TVA non applicable, art. 293 B du CGI »",
          "Le numéro de TVA intracommunautaire",
          "Aucune mention spécifique"
        ],
        "correct": 1,
        "explain": "Tant que tu es en franchise en base, cette mention précise est obligatoire sur chaque facture."
      },
      {
        "q": "Que dois-tu faire si tu constates une erreur sur une facture déjà envoyée ?",
        "options": [
          "La modifier directement et la renvoyer",
          "La supprimer et recommencer",
          "Émettre un avoir ou une facture rectificative",
          "Rien, ce n'est pas grave"
        ],
        "correct": 2,
        "explain": "Une facture émise ne se modifie jamais : on la corrige via un avoir ou une facture rectificative qui la référence."
      },
      {
        "q": "Pendant combien de temps faut-il conserver ses factures ?",
        "options": [
          "3 ans",
          "5 ans",
          "Au moins 10 ans",
          "1 an"
        ],
        "correct": 2,
        "explain": "La règle prudente, qui couvre les obligations commerciales et fiscales, est de conserver factures et justificatifs au moins 10 ans."
      },
      {
        "q": "À partir de quand les micro-entrepreneurs devront-ils émettre leurs factures au format électronique ?",
        "options": [
          "1er septembre 2026",
          "1er janvier 2027",
          "1er septembre 2027",
          "1er janvier 2028"
        ],
        "correct": 2,
        "explain": "L'obligation d'émission s'applique aux micro-entreprises, TPE et PME à partir du 1er septembre 2027."
      },
      {
        "q": "Pour facturer une entreprise dans un autre pays de l'UE, tu dois :",
        "options": [
          "Facturer avec la TVA française",
          "Demander un numéro de TVA intracommunautaire",
          "Refuser ce type de client",
          "Facturer en dollars"
        ],
        "correct": 1,
        "explain": "Même en franchise, un numéro de TVA intracommunautaire est nécessaire pour ce type de facturation B2B."
      }
    ]
  },
  {
    "id": "m3",
    "title": "Les déclarations URSSAF",
    "icon": "calendar",
    "desc": "Calendrier, choix de périodicité, versement libératoire et erreurs à éviter.",
    "lessons": [
      {
        "id": "m3l1",
        "title": "Déclaration mensuelle ou trimestrielle : comment choisir",
        "html": "\n      <p>Dès la création de ton activité, tu dois choisir un rythme de déclaration de ton chiffre d'affaires à l'URSSAF : mensuel ou trimestriel. Ce choix détermine la fréquence à laquelle tu déclares ton CA encaissé, et donc celle à laquelle tu paies tes cotisations sociales.</p>\n      <h4>La déclaration mensuelle</h4>\n      <p>Tu déclares et payes chaque mois le chiffre d'affaires encaissé le mois précédent. C'est l'option la plus confortable pour la trésorerie : les montants à sortir sont plus petits et plus réguliers, ce qui limite le risque de mauvaise surprise. C'est aussi plus adapté si ton activité est irrégulière, car cela te permet un suivi financier plus fin, mois après mois.</p>\n      <h4>La déclaration trimestrielle</h4>\n      <p>Tu déclares et payes tous les trois mois le chiffre d'affaires du trimestre écoulé. C'est l'option la plus légère administrativement : 4 déclarations par an au lieu de 12. Mais elle regroupe trois mois de cotisations en un seul prélèvement, ce qui peut représenter un choc de trésorerie si tu n'as pas mis de côté au fil de l'eau.</p>\n      <h4>Comment trancher</h4>\n      <ul>\n        <li>Si tu as tendance à dépenser ce que tu encaisses sans provisionner : privilégie le <strong>mensuel</strong>, qui te discipline naturellement.</li>\n        <li>Si ton CA est stable et que tu es rigoureux·se sur la mise de côté : le <strong>trimestriel</strong> te fait gagner du temps administratif sans risque.</li>\n        <li>Dans le doute, le mensuel reste le choix le plus sûr pour un début d'activité : il lisse mieux les variations et t'évite une régularisation douloureuse en fin de trimestre.</li>\n      </ul>\n      <h4>Peut-on changer en cours de route ?</h4>\n      <p>Oui, mais pas en cours d'année : le changement de périodicité doit être demandé <strong>avant le 31 octobre</strong>, pour une application au <strong>1er janvier de l'année suivante</strong>. La demande se fait directement depuis ton espace personnel sur autoentrepreneur.urssaf.fr.</p>\n      ",
        "keypoints": [
          "Tu choisis entre déclaration mensuelle (12 échéances) et trimestrielle (4 échéances) dès la création.",
          "Le mensuel lisse la trésorerie et discipline ; le trimestriel réduit la charge administrative.",
          "Le changement de périodicité se demande avant le 31 octobre, pour une application au 1er janvier suivant.",
          "En cas de doute, le mensuel reste l'option la plus prudente pour débuter."
        ]
      },
      {
        "id": "m3l2",
        "title": "Calendrier exact des déclarations 2026",
        "html": "\n      <p>Voici toutes les échéances URSSAF de l'année 2026, que tu déclares chaque mois ou chaque trimestre.</p>\n      <h4>Si tu es en déclaration mensuelle</h4>\n      <p>La règle est simple : tu déclares le CA du mois M <strong>avant la fin du mois M+1</strong>. Par exemple, le chiffre d'affaires encaissé en janvier 2026 doit être déclaré avant le 28 février 2026 ; celui de mars 2026, avant le 30 avril 2026 ; et ainsi de suite tout au long de l'année. Le paiement des cotisations est automatiquement prélevé quelques jours après la validation de ta déclaration.</p>\n      <h4>Si tu es en déclaration trimestrielle</h4>\n      <p>Quatre échéances rythment ton année 2026 :</p>\n      <ul>\n        <li><strong>1er trimestre</strong> (janvier à mars) : déclaration avant le <strong>30 avril 2026</strong>.</li>\n        <li><strong>2e trimestre</strong> (avril à juin) : déclaration avant le <strong>31 juillet 2026</strong>.</li>\n        <li><strong>3e trimestre</strong> (juillet à septembre) : déclaration avant le <strong>31 octobre 2026</strong>.</li>\n        <li><strong>4e trimestre</strong> (octobre à décembre) : déclaration avant le <strong>31 janvier 2027</strong>.</li>\n      </ul>\n      <h4>Les autres échéances à garder en tête sur l'année</h4>\n      <ul>\n        <li><strong>Mai-juin 2026 :</strong> déclaration annuelle de revenus (formulaire 2042-C-PRO), avec une date limite qui varie selon ton département — pour La Réunion et les autres territoires ultramarins, la date limite se situe généralement début juin.</li>\n        <li><strong>15 juin 2026 :</strong> acompte de CFE si ta cotisation de l'année précédente dépassait 3 000 €.</li>\n        <li><strong>15 décembre 2026 :</strong> solde de la CFE.</li>\n        <li><strong>31 octobre 2026 :</strong> dernier délai pour demander un changement de périodicité de déclaration URSSAF pour l'année suivante.</li>\n      </ul>\n      <div class=\"callout\"><strong>Le réflexe à adopter :</strong> note ces dates dans ton calendrier dès aujourd'hui, avec un rappel une semaine avant chaque échéance. Le module 5 te propose un système complet pour ne plus jamais y penser au dernier moment.</div>\n      ",
        "keypoints": [
          "Déclaration mensuelle : avant la fin du mois suivant celui du CA encaissé.",
          "Déclaration trimestrielle 2026 : 30 avril, 31 juillet, 31 octobre, puis 31 janvier 2027.",
          "La déclaration de revenus (2042-C-PRO) tombe en mai-juin, la CFE en décembre.",
          "Toutes ces dates méritent d'être calées dans un calendrier avec rappel anticipé."
        ]
      },
      {
        "id": "m3l3",
        "title": "Comment déclarer même avec un CA à 0 €",
        "html": "\n      <p>C'est une règle mal connue et pourtant essentielle : <strong>la déclaration de chiffre d'affaires est obligatoire à chaque échéance, même si tu n'as rien encaissé</strong> sur la période concernée.</p>\n      <h4>Pourquoi cette obligation existe</h4>\n      <p>L'URSSAF a besoin d'une déclaration à chaque échéance pour connaître ta situation, que tu aies ou non généré du chiffre d'affaires. Il n'existe aucun seuil minimal en dessous duquel tu serais dispensé·e de déclarer.</p>\n      <h4>Ce qu'il se passe si tu ne déclares pas</h4>\n      <p>Si tu oublies une déclaration, deux conséquences s'enchaînent :</p>\n      <ul>\n        <li>Une <strong>pénalité forfaitaire</strong> s'applique pour chaque déclaration manquante (de l'ordre d'une soixantaine d'euros), même si ton CA réel était nul.</li>\n        <li>En cas de manquements répétés et non régularisés, l'URSSAF peut calculer tes cotisations sur une <strong>base forfaitaire estimée</strong> — souvent nettement plus élevée que ton CA réel — jusqu'à ce que tu régularises ta situation.</li>\n      </ul>\n      <h4>Comment déclarer un CA à 0 €</h4>\n      <p>La démarche est très simple : connecte-toi sur ton espace autoentrepreneur.urssaf.fr, sélectionne la période concernée, et indique 0 € de chiffre d'affaires encaissé. Aucune cotisation n'est due, mais ta déclaration est enregistrée et ton dossier reste à jour. Cela prend moins de deux minutes.</p>\n      <div class=\"callout\"><strong>Bon réflexe :</strong> même en pleine période creuse (vacances, maladie, début d'activité sans client), bloque un rappel dans ton calendrier pour ne jamais sauter une échéance — déclarer 0 € reste toujours plus simple que de devoir régulariser une pénalité plus tard.</div>\n      ",
        "keypoints": [
          "La déclaration de CA est obligatoire à chaque échéance, même sans aucun encaissement.",
          "Une déclaration manquante entraîne une pénalité forfaitaire, même à CA nul.",
          "Des manquements répétés peuvent conduire à un calcul de cotisations sur une base forfaitaire majorée.",
          "Déclarer 0 € prend moins de deux minutes sur ton espace personnel."
        ]
      },
      {
        "id": "m3l4",
        "title": "Le versement libératoire de l'impôt : est-ce intéressant pour toi ?",
        "html": "\n      <p>Le versement libératoire est une option fiscale qui te permet de payer ton impôt sur le revenu directement en même temps que tes cotisations sociales, à l'URSSAF, sous forme d'un pourcentage fixe appliqué à ton chiffre d'affaires encaissé.</p>\n      <h4>Le principe</h4>\n      <p>Sans cette option, ton chiffre d'affaires (après abattement forfaitaire) est intégré à tes revenus du foyer fiscal et imposé selon le barème progressif de l'impôt sur le revenu, l'année suivante. Avec le versement libératoire, l'impôt est réglé au fil de l'eau, en même temps que tes cotisations, à un taux fixe appliqué directement sur ton CA brut, sans abattement.</p>\n      <h4>Les taux 2026</h4>\n      <ul>\n        <li><strong>1 %</strong> du CA pour les activités de vente de marchandises et d'hébergement.</li>\n        <li><strong>1,7 %</strong> du CA pour les prestations de services commerciales ou artisanales (BIC).</li>\n        <li><strong>2,2 %</strong> du CA pour les activités libérales relevant des BNC.</li>\n      </ul>\n      <h4>Qui peut en bénéficier</h4>\n      <p>Le versement libératoire est soumis à une condition de revenu : le revenu fiscal de référence de ton foyer, calculé sur l'avant-dernière année, ne doit pas dépasser un plafond fixé par part de quotient familial (environ 27 478 € par part pour une éligibilité en 2026, basé sur tes revenus 2024). Ce plafond est réévalué chaque année.</p>\n      <h4>Est-ce intéressant pour toi ?</h4>\n      <p>Tout dépend de ton <strong>taux marginal d'imposition</strong> — le taux qui s'applique à la dernière tranche de tes revenus. En résumé :</p>\n      <ul>\n        <li>Si ton taux marginal d'imposition est <strong>supérieur</strong> au taux du versement libératoire correspondant à ton activité, l'option est avantageuse : tu paies moins d'impôt que via le barème classique.</li>\n        <li>Si tes revenus sont <strong>faibles ou nuls par ailleurs</strong> et que tu serais peu ou pas imposé·e sans cette option, le versement libératoire peut devenir un piège : tu paies un impôt sur ton CA même si, au final, tu n'aurais dû payer que peu ou pas d'impôt sur le revenu classique.</li>\n        <li>L'avantage est généralement net pour les foyers déjà imposés à un taux marginal de 30 % ou plus.</li>\n      </ul>\n      <h4>Comment et quand opter</h4>\n      <p>La demande se fait auprès de l'URSSAF, soit <strong>dans les 3 mois suivant la création</strong> de ton activité pour une application immédiate, soit avant le <strong>30 septembre de l'année</strong> pour une application au 1er janvier de l'année suivante.</p>\n      <div class=\"callout\"><strong>Avant de te décider :</strong> simule les deux options (barème classique avec abattement, versus versement libératoire) sur la base de tes revenus prévisionnels. Si tu as un doute, un expert-comptable ou un conseiller France Travail / URSSAF peut t'aider à trancher en quelques minutes.</div>\n      ",
        "keypoints": [
          "Le versement libératoire règle l'impôt sur le revenu en même temps que les cotisations, à taux fixe sur le CA (1 % à 2,2 % selon l'activité).",
          "Il est soumis à un plafond de revenu fiscal de référence par part, réévalué chaque année.",
          "Il est avantageux si ton taux marginal d'imposition dépasse le taux forfaitaire applicable à ton activité.",
          "La demande se fait dans les 3 mois suivant la création, ou avant le 30 septembre pour l'année suivante."
        ]
      },
      {
        "id": "m3l5",
        "title": "Les erreurs les plus fréquentes et leurs conséquences",
        "html": "\n      <p>Après avoir vu les règles, voici les pièges dans lesquels tombent le plus souvent les micro-entrepreneurs — pour les éviter dès le départ.</p>\n      <h4>Déclarer le CA facturé au lieu du CA encaissé</h4>\n      <p>C'est l'erreur numéro un. Le régime micro fonctionne en <strong>comptabilité de trésorerie</strong> : seul ce que tu as réellement encaissé compte, quelle que soit la date de la facture. Une facture de décembre payée en janvier se déclare en janvier, pas en décembre.</p>\n      <h4>Oublier une échéance de déclaration</h4>\n      <p>Même à CA nul, l'oubli déclenche une pénalité automatique (voir leçon 3). La meilleure parade reste un système de rappels fiable (module 5).</p>\n      <h4>Appliquer le mauvais taux de cotisation</h4>\n      <p>Si ton activité mélange de la vente et du service (par exemple, vente de créations + prestations de conseil), il faut ventiler ton CA entre les deux catégories et appliquer le taux correspondant à chacune. Une erreur de catégorisation peut fausser durablement le calcul de tes cotisations.</p>\n      <h4>Ne pas provisionner pour les cotisations</h4>\n      <p>Beaucoup de micro-entrepreneurs dépensent l'intégralité de ce qu'ils encaissent, sans mettre de côté la part destinée aux cotisations sociales (et à l'impôt, si versement libératoire). La bonne habitude : dès qu'un paiement arrive, transférer immédiatement le pourcentage correspondant sur un compte dédié.</p>\n      <h4>Oublier de signaler un changement de situation</h4>\n      <p>Changement d'adresse, de nom commercial, d'activité : ces évolutions doivent être signalées rapidement sur le guichet unique de l'INPI, qui transmet ensuite l'information à l'URSSAF et aux impôts. Un oubli peut entraîner des avis (notamment de CFE) envoyés à la mauvaise adresse, ou basés sur une activité obsolète.</p>\n      <h4>Ne pas régulariser une erreur détectée</h4>\n      <p>Si tu te rends compte d'une erreur dans une déclaration passée, ne laisse pas traîner : une déclaration rectificative peut généralement être effectuée directement depuis ton espace URSSAF. Plus tu régularises tôt, moins les pénalités s'accumulent.</p>\n      <div class=\"callout\"><strong>La discipline qui change tout :</strong> mettre systématiquement de côté ta part de cotisations dès l'encaissement, et déclarer à date fixe, quel que soit le montant. C'est simple, et ça élimine 90 % des mauvaises surprises administratives.</div>\n      ",
        "keypoints": [
          "L'erreur la plus fréquente : déclarer le CA facturé au lieu du CA réellement encaissé.",
          "Oublier une échéance, même à 0 €, entraîne une pénalité automatique.",
          "En cas d'activité mixte, applique bien le taux de cotisation correspondant à chaque catégorie.",
          "Provisionne systématiquement ta part de cotisations dès l'encaissement pour éviter tout choc de trésorerie."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quand faut-il demander un changement de périodicité de déclaration URSSAF ?",
        "options": [
          "N'importe quand dans l'année",
          "Avant le 31 octobre, pour application l'année suivante",
          "Avant le 1er janvier de la même année",
          "Ce n'est jamais possible"
        ],
        "correct": 1,
        "explain": "Le changement se demande avant le 31 octobre, pour une application au 1er janvier de l'année suivante."
      },
      {
        "q": "En déclaration trimestrielle, l'échéance du 1er trimestre 2026 (janvier-mars) tombe :",
        "options": [
          "Avant le 31 mars 2026",
          "Avant le 30 avril 2026",
          "Avant le 31 mai 2026",
          "Avant le 30 juin 2026"
        ],
        "correct": 1,
        "explain": "Le 1er trimestre se déclare avant le 30 avril 2026."
      },
      {
        "q": "Si ton CA est de 0 € sur la période, dois-tu quand même déclarer ?",
        "options": [
          "Non, ce n'est pas nécessaire",
          "Oui, une déclaration à 0 € reste obligatoire",
          "Seulement si tu es en trimestriel",
          "Seulement la première année"
        ],
        "correct": 1,
        "explain": "La déclaration est obligatoire à chaque échéance, même sans aucun encaissement."
      },
      {
        "q": "Le versement libératoire de l'impôt applique un taux fixe sur :",
        "options": [
          "Le bénéfice net",
          "Le chiffre d'affaires brut encaissé",
          "Le chiffre d'affaires facturé",
          "Les revenus du foyer fiscal"
        ],
        "correct": 1,
        "explain": "Le taux s'applique directement sur le CA encaissé, sans abattement préalable."
      },
      {
        "q": "Quelle est l'erreur la plus fréquente en matière de déclaration URSSAF ?",
        "options": [
          "Déclarer trop souvent",
          "Déclarer le CA facturé au lieu du CA encaissé",
          "Déclarer un montant en centimes",
          "Utiliser le mauvais navigateur"
        ],
        "correct": 1,
        "explain": "Le régime micro fonctionne en comptabilité de trésorerie : seul le CA réellement encaissé doit être déclaré."
      }
    ]
  },
  {
    "id": "m4",
    "title": "Impôts et CFE",
    "icon": "coin",
    "desc": "Déclaration de revenus, cotisation foncière, ACRE et autres taxes éventuelles.",
    "lessons": [
      {
        "id": "m4l1",
        "title": "Comment déclarer tes revenus (formulaire 2042-C-PRO)",
        "html": "\n      <p>Même en micro-entreprise, tu dois déclarer chaque année ton chiffre d'affaires à l'administration fiscale, dans le cadre de ta déclaration de revenus annuelle. C'est le formulaire complémentaire <strong>2042-C-PRO</strong> qui s'en charge.</p>\n      <h4>Deux régimes fiscaux possibles</h4>\n      <ul>\n        <li><strong>Le régime micro-fiscal classique</strong> (par défaut) : tu déclares ton chiffre d'affaires brut encaissé dans les cases dédiées du 2042-C-PRO, selon ta catégorie d'activité. L'administration applique alors automatiquement un <strong>abattement forfaitaire</strong> censé représenter tes charges professionnelles : 71 % pour la vente et l'hébergement, 50 % pour les prestations de services BIC, 34 % pour les activités libérales BNC. Le revenu net ainsi obtenu est ensuite ajouté à tes autres revenus du foyer, et imposé selon le barème progressif de l'impôt sur le revenu.</li>\n        <li><strong>Le versement libératoire</strong> (si tu as opté pour ce dispositif, voir module 3) : ton impôt a déjà été payé au fil de l'eau à l'URSSAF. Le 2042-C-PRO n'a alors qu'un rôle informatif — tu dois quand même y reporter ton chiffre d'affaires, mais il n'y a pas de nouvelle imposition à ce moment-là.</li>\n      </ul>\n      <h4>Où et quand déclarer</h4>\n      <p>La déclaration de revenus s'effectue en ligne sur impots.gouv.fr, généralement entre avril et juin, dans la même campagne que celle de tous les contribuables français. La date limite précise varie selon ton département de résidence, par zones successives (les départements ultramarins, dont La Réunion, font partie des dernières échéances, généralement début juin).</p>\n      <h4>Ce qu'il faut avoir sous la main</h4>\n      <p>Ton chiffre d'affaires annuel total, ventilé par catégorie d'activité si tu en as plusieurs (vente / services / libéral). Cette information, tu l'as déjà communiquée à l'URSSAF tout au long de l'année via tes déclarations périodiques : il te suffit de reprendre le total annuel.</p>\n      <div class=\"callout\"><strong>Un oubli fréquent :</strong> penser que le versement libératoire dispense de toute déclaration de revenus. Ce n'est pas le cas : la déclaration reste obligatoire chaque année, même si elle n'entraîne pas de nouvel impôt à payer dans ce cadre.</div>\n      ",
        "keypoints": [
          "Le formulaire 2042-C-PRO sert à déclarer ton chiffre d'affaires annuel à l'administration fiscale.",
          "Sans versement libératoire : un abattement forfaitaire s'applique (71 %, 50 % ou 34 % selon l'activité) avant imposition au barème.",
          "Avec versement libératoire : la déclaration reste obligatoire, mais à titre informatif, l'impôt étant déjà payé.",
          "La déclaration se fait en ligne entre avril et juin, avec une date limite qui varie selon ton département."
        ]
      },
      {
        "id": "m4l2",
        "title": "La Cotisation Foncière des Entreprises (CFE) : qui la paie, quand, comment",
        "html": "\n      <p>La CFE est un impôt local dû par la quasi-totalité des professionnels exerçant une activité non salariée au 1er janvier de l'année d'imposition — y compris les micro-entrepreneurs qui travaillent depuis leur domicile.</p>\n      <h4>L'exonération de la première année</h4>\n      <p>Bonne nouvelle : l'année de création de ton activité, tu es <strong>totalement exonéré·e</strong> de CFE, quelle que soit la date de création dans l'année. En revanche, cette exonération n'est pas automatique dans ses démarches : tu dois impérativement effectuer une <strong>déclaration initiale</strong> (formulaire 1447-C-SD) avant le <strong>31 décembre de l'année de création</strong>.</p>\n      <h4>Après la première année</h4>\n      <p>À partir de la deuxième année civile, ta CFE devient due, avec une particularité : la <strong>base d'imposition est réduite de moitié</strong> pour cette première année d'imposition. Un autre cas d'exonération existe, indépendamment de l'ancienneté : si ton chiffre d'affaires de l'avant-dernière année (N-2) ne dépasse pas <strong>5 000 €</strong>, tu es exonéré·e de CFE pour l'année en cours — cette exonération est automatique, sans démarche à faire.</p>\n      <h4>Comment est calculé le montant</h4>\n      <p>Le montant dépend soit de la valeur locative de tes locaux professionnels (rarement pertinent pour un micro-entrepreneur travaillant à domicile), soit, le plus souvent, d'une <strong>base minimale forfaitaire</strong> fixée par ta commune, à l'intérieur d'une fourchette légale qui varie selon ta tranche de chiffre d'affaires. Deux micro-entrepreneurs avec le même CA peuvent ainsi payer des montants très différents selon leur commune d'implantation.</p>\n      <h4>Les échéances de paiement</h4>\n      <ul>\n        <li><strong>15 décembre :</strong> date limite de paiement du solde de la CFE.</li>\n        <li><strong>15 juin :</strong> si ta CFE de l'année précédente dépassait 3 000 €, un acompte de 50 % est exigible à cette date.</li>\n      </ul>\n      <p>Tous les avis de CFE sont aujourd'hui dématérialisés et consultables uniquement depuis ton espace professionnel sur impots.gouv.fr : aucun courrier papier n'est envoyé, il faut donc penser à aller consulter ton espace chaque automne.</p>\n      <h4>En cas d'erreur ou de désaccord</h4>\n      <p>Si tu reçois un avis alors que tu penses être exonéré·e (par exemple parce que ton CA N-2 était sous 5 000 €), tu peux déposer une réclamation auprès du service des impôts des entreprises (SIE) compétent, par courrier ou via ta messagerie sécurisée. Le délai de réclamation court jusqu'au 31 décembre de l'année suivant la mise en recouvrement.</p>\n      <div class=\"callout\"><strong>N'oublie pas la déclaration initiale :</strong> c'est la démarche la plus fréquemment oubliée. Sans elle, l'exonération de première année peut être mal appliquée et générer un avis erroné.</div>\n      ",
        "keypoints": [
          "Exonération totale de CFE l'année de création, sous réserve d'envoyer la déclaration initiale (1447-C-SD) avant le 31 décembre.",
          "Exonération automatique si ton CA de l'année N-2 est inférieur ou égal à 5 000 €.",
          "Paiement au plus tard le 15 décembre, avec un acompte au 15 juin si la CFE précédente dépassait 3 000 €.",
          "Les avis sont uniquement disponibles en ligne, sur ton espace professionnel impots.gouv.fr."
        ]
      },
      {
        "id": "m4l3",
        "title": "ACRE : conditions et démarche en 2026",
        "html": "\n      <p>L'ACRE (aide à la création ou à la reprise d'entreprise) permet, sous conditions, de bénéficier d'une réduction de tes cotisations sociales durant les premiers mois de ton activité. La réforme entrée en vigueur en 2026 en modifie sensiblement les règles : voici tout ce qu'il faut savoir.</p>\n      <h4>Ce qui a changé : plus d'attribution automatique</h4>\n      <p>Depuis le <strong>1er janvier 2026</strong>, l'ACRE n'est plus accordée automatiquement à la création d'une micro-entreprise. Tu dois désormais en faire la <strong>demande explicite</strong> auprès de l'URSSAF, dans un délai de <strong>60 jours</strong> suivant la date de début d'activité. Passé ce délai, le bénéfice de l'aide est définitivement perdu.</p>\n      <h4>Qui peut en bénéficier</h4>\n      <p>L'ACRE reste réservée à certains profils de créateurs, parmi lesquels : les demandeurs d'emploi (indemnisés ou non indemnisés depuis plus de 6 mois), les bénéficiaires du RSA, les personnes de moins de 26 ans (ou moins de 30 ans en situation de handicap), les personnes en situation de handicap, les créateurs installés en quartier prioritaire de la ville (QPV) ou en zone France Ruralités Revitalisation (ZFRR — une nouveauté introduite par la loi de financement de la sécurité sociale pour 2026).</p>\n      <h4>La durée de l'exonération</h4>\n      <p>Pour un micro-entrepreneur, l'exonération ne s'applique pas sur 12 mois pleins comme pour les autres créateurs, mais <strong>jusqu'à la fin du troisième trimestre civil suivant celui du début d'activité</strong>. Concrètement, si tu crées ton activité en juin 2026, l'exonération court jusqu'au 31 mars 2027 — soit 10 mois. Si tu crées en avril 2026, elle court aussi jusqu'au 31 mars 2027, mais cette fois sur 12 mois pleins.</p>\n      <h4>Le taux d'exonération : une baisse au 1er juillet 2026</h4>\n      <p>C'est le changement le plus important de la réforme. Le taux dépend de la date de ta demande :</p>\n      <ul>\n        <li><strong>Demande déposée avant le 1er juillet 2026 :</strong> exonération de 50 % des cotisations sociales habituelles. Cela donne des taux réduits de 6,2 % (vente), 10,6 % (services BIC), 12,8 % (libéral BNC général) et 13,4 % (CIPAV).</li>\n        <li><strong>Demande déposée à partir du 1er juillet 2026 :</strong> exonération réduite à 25 % des cotisations habituelles. Les taux réduits deviennent alors 9,3 % (vente), 15,9 % (services BIC), 19,2 % (libéral BNC général) et 17,4 % (CIPAV).</li>\n      </ul>\n      <h4>Un plafond de revenu</h4>\n      <p>L'exonération ACRE cesse de s'appliquer au-delà d'un certain niveau de revenu professionnel : le plafond annuel de la Sécurité sociale, soit <strong>48 060 €</strong> en 2026. Au-delà, les taux de cotisation classiques s'appliquent sur la part de revenu excédentaire.</p>\n      <h4>Comment faire la demande</h4>\n      <p>La demande s'effectue via la messagerie de ton espace personnel sur autoentrepreneur.urssaf.fr, en joignant les justificatifs correspondant à ta situation (attestation France Travail, notification RSA, justificatif d'âge...). L'URSSAF dispose ensuite d'un délai pour statuer ; en l'absence de réponse dans ce délai, l'ACRE est réputée accordée.</p>\n      <div class=\"callout\"><strong>Le bon réflexe :</strong> si tu es éligible et que tu envisages de créer ton activité, dépose ta demande dès la création et avant le 1er juillet 2026 si tu le peux, pour bénéficier du taux d'exonération le plus favorable — la différence est significative sur tes premiers mois de cotisations.</div>\n      ",
        "keypoints": [
          "Depuis 2026, l'ACRE n'est plus automatique : demande à faire auprès de l'URSSAF dans les 60 jours suivant le début d'activité.",
          "L'exonération s'applique jusqu'à la fin du 3e trimestre civil suivant celui du début d'activité.",
          "Le taux d'exonération passe de 50 % à 25 % pour les demandes déposées à partir du 1er juillet 2026.",
          "L'aide reste plafonnée à un niveau de revenu annuel de 48 060 € en 2026."
        ]
      },
      {
        "id": "m4l4",
        "title": "Les autres taxes éventuelles selon ton activité",
        "html": "\n      <p>Au-delà des cotisations URSSAF, de l'impôt sur le revenu et de la CFE, quelques prélèvements ou obligations supplémentaires peuvent te concerner selon la nature exacte de ton activité.</p>\n      <h4>La taxe pour frais de chambre consulaire (TFCC)</h4>\n      <p>Si ton activité est de nature commerciale ou artisanale, une petite contribution destinée à financer les chambres de commerce (CCI) ou les chambres de métiers (CMA) s'ajoute directement à ton taux de cotisation URSSAF — elle est incluse dans le pourcentage global que tu verses, tu n'as donc pas de démarche séparée à effectuer.</p>\n      <h4>La contribution à la formation professionnelle (CFP)</h4>\n      <p>Comme la TFCC, elle est intégrée à ton taux de cotisation global (entre 0,1 % et 0,3 % selon ton activité) et finance ton accès à la formation professionnelle continue, notamment via ton compte personnel de formation (CPF) et les fonds d'assurance formation (FAF) propres à certaines professions.</p>\n      <h4>La CVAE (cotisation sur la valeur ajoutée des entreprises)</h4>\n      <p>Elle ne concerne en pratique jamais un micro-entrepreneur : elle ne s'applique qu'à partir d'un chiffre d'affaires très supérieur à ceux du régime micro, et elle est de toute façon en cours de suppression progressive au niveau national.</p>\n      <h4>L'assurance responsabilité civile professionnelle</h4>\n      <p>Ce n'est pas une taxe, mais une obligation légale pour certaines activités réglementées (bâtiment, professions de santé, agents immobiliers, professions juridiques...) : sans cette assurance, tu ne peux légalement pas exercer, et son montant doit figurer sur tes devis et factures pour les activités concernées.</p>\n      <h4>Les taxes spécifiques à certaines activités</h4>\n      <p>Selon ton secteur, des prélèvements particuliers peuvent s'appliquer : redevance sur les ventes de certains produits réglementés, écotaxes ou éco-contributions sur certains emballages et produits, droits spécifiques pour les activités artistiques (droits d'auteur, cotisations spécifiques). Si ton activité relève d'un cas particulier, il est utile de vérifier auprès de ta chambre consulaire ou d'un professionnel du chiffre si une taxe sectorielle s'applique à toi.</p>\n      <div class=\"callout\"><strong>En résumé :</strong> pour la grande majorité des micro-entrepreneurs sans activité très spécifique, les seuls prélèvements réels restent les cotisations URSSAF (qui incluent déjà TFCC et CFP), l'impôt sur le revenu, et la CFE. Les autres cas restent l'exception plutôt que la règle.</div>\n      ",
        "keypoints": [
          "La taxe pour frais de chambre consulaire (TFCC) et la contribution formation (CFP) sont déjà incluses dans ton taux URSSAF.",
          "La CVAE ne concerne quasiment jamais un micro-entrepreneur.",
          "Certaines activités réglementées imposent une assurance RC professionnelle obligatoire.",
          "Des taxes sectorielles spécifiques peuvent exister selon ton secteur d'activité : vérifie ton cas particulier si besoin."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quel formulaire sert à déclarer ton chiffre d'affaires annuel à l'administration fiscale ?",
        "options": [
          "Le formulaire 2042-C-PRO",
          "Le formulaire 1447-C-SD",
          "Le formulaire CA3",
          "Le formulaire P0"
        ],
        "correct": 0,
        "explain": "Le 2042-C-PRO est le formulaire complémentaire dédié aux revenus de micro-entreprise."
      },
      {
        "q": "L'année de création de ton activité, es-tu redevable de la CFE ?",
        "options": [
          "Oui, immédiatement",
          "Non, tu es totalement exonéré·e cette première année",
          "Seulement si ton CA dépasse 10 000 €",
          "Seulement en cas d'activité commerciale"
        ],
        "correct": 1,
        "explain": "L'exonération de CFE est totale l'année de création, sous réserve d'envoyer la déclaration initiale avant le 31 décembre."
      },
      {
        "q": "Depuis le 1er janvier 2026, l'ACRE pour un micro-entrepreneur :",
        "options": [
          "Reste automatique",
          "Doit être demandée dans les 60 jours suivant le début d'activité",
          "N'existe plus du tout",
          "Est accordée sur 5 ans"
        ],
        "correct": 1,
        "explain": "L'ACRE n'est plus automatique depuis 2026 : elle doit être demandée à l'URSSAF dans les 60 jours."
      },
      {
        "q": "À partir du 1er juillet 2026, le taux d'exonération ACRE passe de :",
        "options": [
          "25 % à 50 %",
          "50 % à 25 %",
          "100 % à 50 %",
          "Il ne change pas"
        ],
        "correct": 1,
        "explain": "Le taux d'exonération diminue, passant de 50 % à 25 % pour les demandes déposées à partir du 1er juillet 2026."
      },
      {
        "q": "La contribution à la formation professionnelle (CFP) est :",
        "options": [
          "Une démarche séparée à faire chaque année",
          "Déjà incluse dans ton taux global de cotisation URSSAF",
          "Réservée aux salariés",
          "Payée uniquement par les sociétés"
        ],
        "correct": 1,
        "explain": "La CFP est intégrée directement à ton taux de cotisation URSSAF, sans démarche distincte."
      }
    ]
  },
  {
    "id": "m5",
    "title": "Organisation et outils pour ne plus jamais être en retard",
    "icon": "toolbox",
    "desc": "Un système simple pour suivre tes échéances, tes documents et corriger sereinement tes erreurs.",
    "lessons": [
      {
        "id": "m5l1",
        "title": "Le système simple de suivi des échéances (calendrier + checklist)",
        "html": "\n      <p>La plupart du stress administratif ne vient pas de la complexité des règles, mais de l'absence de système pour les suivre. Voici une méthode simple, à mettre en place une bonne fois pour toutes.</p>\n      <h4>Ta trame annuelle d'échéances récurrentes</h4>\n      <ul>\n        <li><strong>Chaque mois (si mensuel) ou chaque trimestre (si trimestriel) :</strong> déclaration de CA à l'URSSAF avant la date limite correspondante.</li>\n        <li><strong>Mai-juin :</strong> déclaration annuelle de revenus (2042-C-PRO).</li>\n        <li><strong>15 juin :</strong> acompte de CFE si ta cotisation N-1 dépassait 3 000 €.</li>\n        <li><strong>15 décembre :</strong> solde de la CFE.</li>\n        <li><strong>31 octobre :</strong> dernier délai pour changer de périodicité de déclaration URSSAF (si besoin).</li>\n        <li><strong>31 décembre de l'année de création uniquement :</strong> déclaration initiale de CFE (formulaire 1447-C-SD).</li>\n      </ul>\n      <h4>La méthode en trois niveaux</h4>\n      <ol style=\"padding-left:1.3em;\">\n        <li><strong>Un calendrier avec rappels</strong> (numérique de préférence : Google Agenda, calendrier de ton téléphone...) : crée un événement récurrent pour chaque échéance, avec une alerte 7 jours avant, puis une autre la veille.</li>\n        <li><strong>Une checklist mensuelle</strong> : à chaque fin de mois, trois réflexes — vérifier ton chiffre d'affaires encaissé, déclarer si l'échéance tombe ce mois-ci, mettre de côté la part correspondant à tes cotisations (et à ton impôt si versement libératoire).</li>\n        <li><strong>Une revue trimestrielle</strong> : un moment posé, tous les trois mois, pour vérifier que tu n'approches pas d'un seuil de CA (régime micro ou franchise TVA), que tes documents sont bien classés, et que rien n'a été oublié.</li>\n      </ol>\n      <h4>Le principe d'or : provisionner dès l'encaissement</h4>\n      <p>Dès qu'un paiement arrive sur ton compte, transfère immédiatement le pourcentage correspondant à tes cotisations (et à ton impôt si versement libératoire) vers un compte d'épargne dédié. Ainsi, au moment de la déclaration, l'argent est déjà là : plus aucun stress de trésorerie.</p>\n      <div class=\"callout\"><strong>Astuce simple :</strong> ouvre un second compte, même gratuit, uniquement dédié à cette réserve de cotisations. Ne le regarde que le jour de la déclaration — c'est redoutablement efficace pour ne plus jamais être pris·e de court.</div>\n      ",
        "keypoints": [
          "Structure ton année autour d'une trame fixe d'échéances : URSSAF, 2042-C-PRO, CFE.",
          "Mets en place un calendrier avec rappels à J-7 et J-1 avant chaque échéance.",
          "Adopte une checklist mensuelle et une revue trimestrielle de ta situation.",
          "Provisionne systématiquement ta part de cotisations dès l'encaissement, sur un compte dédié."
        ]
      },
      {
        "id": "m5l2",
        "title": "Quels documents conserver et pendant combien de temps",
        "html": "\n      <p>Une bonne organisation documentaire te protège en cas de contrôle et te fait gagner un temps précieux au quotidien. Voici ce qu'il faut garder, et pour combien de temps.</p>\n      <h4>Les documents à conserver au moins 10 ans</h4>\n      <ul>\n        <li>Toutes tes <strong>factures émises</strong> (clients) et <strong>factures reçues</strong> (fournisseurs, achats professionnels).</li>\n        <li>Tes <strong>devis signés</strong>, en particulier pour les prestations significatives.</li>\n        <li>Ton <strong>livre des recettes</strong> (obligatoire pour tout micro-entrepreneur), qui recense chronologiquement chaque encaissement.</li>\n        <li>Ton <strong>registre des achats</strong> (obligatoire uniquement pour les activités de vente de marchandises, de fourniture de logement ou de restauration).</li>\n        <li>Les <strong>relevés de ton compte bancaire professionnel</strong>.</li>\n      </ul>\n      <h4>Les documents administratifs à conserver sans limite de durée</h4>\n      <ul>\n        <li>Ton <strong>extrait d'immatriculation</strong> (SIRENE/SIRET) et les justificatifs de création de ton activité.</li>\n        <li>Tes <strong>déclarations fiscales</strong> annuelles (2042-C-PRO) et leurs avis correspondants.</li>\n        <li>Les <strong>attestations URSSAF</strong> (attestation de vigilance, attestation de régularité sociale) que certains clients professionnels peuvent te demander.</li>\n      </ul>\n      <h4>Comment organiser concrètement ce classement</h4>\n      <p>Le format numérique est parfaitement admis pour la quasi-totalité de ces documents : un dossier cloud organisé par année, avec des sous-dossiers « factures émises », « factures reçues », « déclarations », « attestations », suffit largement. L'essentiel est la régularité : classe chaque document au fil de l'eau plutôt que d'accumuler un vrac à trier en fin d'année.</p>\n      <div class=\"callout\"><strong>Un réflexe utile :</strong> télécharge et archive systématiquement tes attestations de déclaration URSSAF (accessibles sur ton espace personnel) au fur et à mesure — elles te seront parfois demandées par des clients professionnels, des banques, ou pour des démarches administratives (logement, prêt...).</div>\n      ",
        "keypoints": [
          "Conserve factures, devis, livre des recettes et relevés bancaires professionnels au moins 10 ans.",
          "Le registre des achats est obligatoire si tu vends des marchandises ou proposes de l'hébergement/restauration.",
          "Les documents d'immatriculation et déclarations fiscales se conservent sans limite pratique de durée.",
          "Un classement numérique régulier, par année et par catégorie, t'évite un tri fastidieux en fin d'année."
        ]
      },
      {
        "id": "m5l3",
        "title": "Les meilleurs outils gratuits ou peu chers en 2026",
        "html": "\n      <p>Pas besoin d'un budget conséquent pour bien s'organiser. Voici les catégories d'outils à connaître, avec leur usage précis.</p>\n      <h4>Pour la facturation</h4>\n      <p>Privilégie un outil gratuit ou freemium dédié aux indépendants, qui gère la numérotation automatique, les mentions légales, les devis, et qui annonce sa compatibilité avec la réforme de la facturation électronique (voir module 2). C'est le socle de ton organisation administrative.</p>\n      <h4>Pour le suivi des déclarations URSSAF</h4>\n      <p>L'espace personnel officiel <strong>autoentrepreneur.urssaf.fr</strong> reste la référence : c'est là que tu déclares ton CA, que tu télécharges tes attestations, et que tu peux consulter l'historique de tes paiements. Beaucoup d'outils de facturation ou de comptabilité proposent aussi un rappel automatique des échéances, en complément.</p>\n      <h4>Pour le livre des recettes et le registre des achats</h4>\n      <p>Un simple tableur (gratuit) suffit pour démarrer si ton volume d'activité reste modeste : une ligne par encaissement, avec date, client, montant, mode de paiement. De nombreux outils de facturation génèrent aussi automatiquement ce livre des recettes à partir de tes factures encaissées, ce qui t'évite une double saisie.</p>\n      <h4>Pour la gestion bancaire</h4>\n      <p>Une banque professionnelle en ligne, souvent gratuite ou à très faible coût pour un micro-entrepreneur, permet de séparer clairement tes flux personnels et professionnels (obligation légale au-delà de 10 000 € de CA sur deux années consécutives) et propose généralement un suivi de trésorerie simple.</p>\n      <h4>Pour le calendrier des échéances</h4>\n      <p>Le calendrier natif de ton téléphone ou de ta messagerie (Google Agenda, Outlook...) suffit amplement : crée des événements récurrents pour chaque échéance URSSAF, fiscale et de CFE, avec des rappels automatiques.</p>\n      <div class=\"callout\"><strong>Le principe à retenir :</strong> mieux vaut un système simple que tu utilises vraiment, qu'un outil sophistiqué que tu abandonnes après trois semaines. Commence avec le minimum viable (facturation + calendrier + compte dédié aux cotisations), et ne complexifie ton organisation que si ton activité grandit réellement.</div>\n      <div class=\"callout\"><strong>Outils recommandés (à titre indicatif, 2026) :</strong><ul><li><strong>Facturation :</strong> Henrri, Freebe ou Indy — gratuits ou freemium, pensés pour les micro-entrepreneurs français, compatibles avec la facturation électronique.</li><li><strong>Banque professionnelle :</strong> Qonto, Shine ou Blank — comptes pro en ligne à faible coût, avec suivi de trésorerie intégré.</li><li><strong>Tableur :</strong> Google Sheets (gratuit) ou Excel.</li><li><strong>Calendrier :</strong> Google Agenda ou Outlook.</li></ul><span style=\"font-size:0.85rem;color:#7a7d95;\">Cette liste évolue : vérifie toujours l'offre actuelle avant de choisir — ce sont des points de départ, pas des recommandations exclusives.</span></div>\n      ",
        "keypoints": [
          "Un outil de facturation gratuit compatible avec la réforme électronique est la priorité numéro un.",
          "L'espace autoentrepreneur.urssaf.fr reste la référence pour tes déclarations et attestations.",
          "Un simple tableur suffit pour le livre des recettes tant que ton activité reste modeste.",
          "Privilégie la simplicité : un système que tu utilises vraiment vaut mieux qu'un outil sophistiqué abandonné."
        ]
      },
      {
        "id": "m5l4",
        "title": "Que faire en cas de retard ou d'erreur (procédure de régularisation)",
        "html": "\n      <p>Un oubli ou une erreur arrive à tout le monde. Ce qui compte, c'est la rapidité et la méthode avec lesquelles tu la régularises. Voici la marche à suivre selon la situation.</p>\n      <h4>En cas de déclaration URSSAF oubliée</h4>\n      <ol style=\"padding-left:1.3em;\">\n        <li>Connecte-toi dès que possible sur ton espace autoentrepreneur.urssaf.fr et effectue la déclaration manquante, même en retard.</li>\n        <li>Si une pénalité forfaitaire a été appliquée, tu peux, pour un premier oubli isolé, demander une remise gracieuse via la messagerie de ton espace personnel, en expliquant la situation. Ce n'est pas garanti, mais fréquemment accordé pour un incident ponctuel.</li>\n        <li>Si tu anticipes des difficultés récurrentes à respecter les délais, envisage de passer en déclaration mensuelle : les montants sont plus petits, et l'échéance revient plus souvent, ce qui aide certains profils à ne plus l'oublier.</li>\n      </ol>\n      <h4>En cas d'erreur dans une déclaration déjà envoyée</h4>\n      <p>Tu peux généralement effectuer une <strong>déclaration rectificative</strong> directement depuis ton espace personnel URSSAF, pour corriger un montant erroné. Plus tu régularises tôt, plus l'ajustement de tes cotisations sera simple et limité.</p>\n      <h4>En cas d'avis de CFE que tu penses erroné</h4>\n      <p>Si tu penses être exonéré·e (première année, CA N-2 sous 5 000 €) mais que tu reçois quand même un avis, dépose une <strong>réclamation contentieuse</strong> auprès du service des impôts des entreprises (SIE) compétent, par courrier ou via la messagerie sécurisée de ton espace professionnel sur impots.gouv.fr. Le délai de réclamation court jusqu'au 31 décembre de l'année suivant la mise en recouvrement de l'avis contesté.</p>\n      <h4>En cas de retard de paiement (URSSAF ou CFE)</h4>\n      <p>Des majorations et intérêts de retard s'appliquent généralement en cas de paiement tardif. Si tu traverses une période difficile (baisse d'activité, imprévu personnel), contacte l'organisme concerné avant l'échéance plutôt qu'après : un délai de paiement ou un échelonnement peut souvent être négocié, alors qu'une fois la pénalité appliquée, la marge de manœuvre est plus faible.</p>\n      <div class=\"callout\"><strong>Le principe général à retenir :</strong> dans l'administration française, la rapidité de régularisation et la bonne foi jouent presque toujours en ta faveur. Un oubli isolé, corrigé rapidement et de sa propre initiative, est traité très différemment d'un manquement répété et ignoré.</div>\n      ",
        "keypoints": [
          "Régularise une déclaration oubliée dès que possible, et demande une remise gracieuse pour un premier incident isolé.",
          "Une déclaration rectificative permet de corriger une erreur directement depuis ton espace URSSAF.",
          "Pour un avis de CFE erroné, dépose une réclamation contentieuse auprès du SIE, dans les délais impartis.",
          "En cas de difficulté de paiement, contacte l'organisme avant l'échéance plutôt qu'après."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelle est la meilleure habitude pour ne jamais être pris·e de court par tes cotisations ?",
        "options": [
          "Attendre l'échéance pour voir ce qu'il reste",
          "Provisionner la part correspondante dès chaque encaissement",
          "Ne rien provisionner, l'URSSAF prévient toujours à l'avance",
          "Emprunter au moment venu"
        ],
        "correct": 1,
        "explain": "Mettre de côté dès l'encaissement élimine la quasi-totalité du stress de trésorerie lié aux cotisations."
      },
      {
        "q": "Le registre des achats est obligatoire pour :",
        "options": [
          "Toutes les micro-entreprises sans exception",
          "Les activités de vente de marchandises, hébergement ou restauration",
          "Uniquement les professions libérales",
          "Aucune micro-entreprise"
        ],
        "correct": 1,
        "explain": "Le registre des achats concerne spécifiquement les activités de vente, d'hébergement ou de restauration."
      },
      {
        "q": "En cas d'oubli isolé d'une déclaration URSSAF, tu peux :",
        "options": [
          "Ne rien faire, ça se régularise tout seul",
          "Demander une remise gracieuse de la pénalité via ta messagerie URSSAF",
          "Fermer ta micro-entreprise",
          "Changer immédiatement de statut"
        ],
        "correct": 1,
        "explain": "Une remise gracieuse peut être demandée pour un premier incident isolé, via la messagerie de ton espace personnel."
      },
      {
        "q": "Pour contester un avis de CFE que tu juges erroné, tu dois :",
        "options": [
          "Ne rien payer et attendre",
          "Déposer une réclamation contentieuse auprès du SIE",
          "Appeler l'URSSAF",
          "Changer de commune"
        ],
        "correct": 1,
        "explain": "La contestation d'un avis de CFE passe par une réclamation auprès du service des impôts des entreprises (SIE)."
      },
      {
        "q": "Quel espace en ligne permet de suivre tes déclarations et tes attestations URSSAF ?",
        "options": [
          "impots.gouv.fr uniquement",
          "autoentrepreneur.urssaf.fr",
          "Le site de ta banque",
          "Le guichet unique de l'INPI uniquement"
        ],
        "correct": 1,
        "explain": "C'est ton espace personnel sur autoentrepreneur.urssaf.fr qui centralise tes déclarations, paiements et attestations."
      }
    ]
  },
  {
    "id": "m6",
    "title": "Les situations particulières",
    "icon": "compass",
    "desc": "Cumul avec un salariat ou le chômage, passage au régime réel, cessation d'activité.",
    "lessons": [
      {
        "id": "m6l1",
        "title": "Cumul micro-entreprise + salariat",
        "html": "\n      <p>Cumuler un emploi salarié et une activité de micro-entrepreneur est parfaitement légal en France, et c'est même l'une des situations les plus courantes chez les créateurs d'activité. Quelques points de vigilance méritent toutefois d'être connus.</p>\n      <h4>Le principe général</h4>\n      <p>Aucun texte n'interdit à un salarié de créer et gérer sa propre micro-entreprise en parallèle de son emploi, y compris à temps plein. Tu cotises alors doublement : au régime général en tant que salarié·e, et au régime social des indépendants pour ta micro-entreprise, chaque activité générant ses propres droits sociaux (retraite, notamment).</p>\n      <h4>Vérifie ton contrat de travail</h4>\n      <p>Avant de te lancer, relis attentivement ton contrat de travail, en particulier :</p>\n      <ul>\n        <li>Une éventuelle <strong>clause d'exclusivité</strong>, qui t'interdirait d'exercer toute autre activité professionnelle — ces clauses sont encadrées et ne sont valables que si elles sont justifiées par la nature de tes fonctions, mais leur présence doit t'alerter.</li>\n        <li>Une éventuelle <strong>clause de non-concurrence</strong> : ton activité de micro-entrepreneur ne doit pas concurrencer directement celle de ton employeur, sous peine de faute pouvant justifier un licenciement.</li>\n        <li>L'<strong>obligation de loyauté</strong>, qui s'applique même sans clause écrite : tu ne dois pas utiliser les ressources, le temps ou les clients de ton employeur au profit de ta micro-entreprise.</li>\n      </ul>\n      <h4>Faut-il informer ton employeur ?</h4>\n      <p>Il n'existe pas d'obligation légale générale d'informer ton employeur de ta micro-entreprise, sauf clause contraire prévue dans ton contrat ou ta convention collective. En pratique, mieux vaut rester transparent dès lors que ton activité pourrait avoir un lien, même indirect, avec ton secteur professionnel, afin d'éviter tout litige ultérieur sur la loyauté ou la concurrence.</p>\n      <h4>Les fonctionnaires : un régime spécifique</h4>\n      <p>Les agents publics (fonctionnaires titulaires ou contractuels) sont soumis à des règles de cumul d'activités plus strictes, encadrées par leur statut : une autorisation préalable de leur hiérarchie est en principe nécessaire pour créer une micro-entreprise, avec certaines exceptions et un cumul limité dans le temps selon les cas.</p>\n      <div class=\"callout\"><strong>En résumé :</strong> le cumul est possible et fréquent, mais il se prépare : vérifie ton contrat, reste loyal envers ton employeur actuel, et anticipe la déclaration de tes deux sources de revenus lors de ta déclaration annuelle d'impôt.</div>\n      ",
        "keypoints": [
          "Cumuler salariat et micro-entreprise est légal, y compris avec un emploi à temps plein.",
          "Vérifie ton contrat de travail : clause d'exclusivité, clause de non-concurrence, obligation de loyauté.",
          "Aucune obligation légale générale d'informer ton employeur, sauf disposition contraire de ton contrat.",
          "Les fonctionnaires sont soumis à des règles de cumul spécifiques et généralement plus strictes."
        ]
      },
      {
        "id": "m6l2",
        "title": "Cumul avec le chômage / ARE",
        "html": "\n      <p>Créer une micro-entreprise tout en étant inscrit·e à France Travail (ex-Pôle emploi) est possible, et deux options s'offrent à toi pour la gestion de tes allocations chômage.</p>\n      <h4>Option 1 : le maintien partiel de l'ARE</h4>\n      <p>Tu peux continuer à percevoir une partie de ton Allocation de retour à l'emploi (ARE) tout en développant ton activité de micro-entrepreneur, dans la limite de tes droits restants. Chaque mois, tu déclares à France Travail le revenu tiré de ta micro-entreprise ; l'allocation versée est alors réduite en fonction de ce revenu, selon une règle de calcul qui garantit généralement un revenu global au moins égal à ton allocation pleine, sans jamais la dépasser. Ce mécanisme permet de sécuriser tes revenus pendant que ton activité démarre, tout en consommant progressivement tes droits restants.</p>\n      <h4>Option 2 : l'ARCE (aide à la reprise ou à la création d'entreprise)</h4>\n      <p>Alternative au maintien de l'ARE, l'ARCE te permet de percevoir <strong>une partie de tes droits restants sous forme de capital</strong>, versé en deux fois (à la création, puis six mois plus tard, sous réserve que ton activité soit toujours en cours). Le montant correspond généralement à 60 % du reliquat de tes droits à l'ARE. Ce choix est intéressant si tu as besoin d'un apport de trésorerie pour démarrer (matériel, stock, communication...), mais il met fin au versement mensuel de l'ARE.</p>\n      <h4>Comment choisir entre les deux</h4>\n      <ul>\n        <li>Le <strong>maintien de l'ARE</strong> convient mieux si tu préfères un revenu régulier et sécurisant pendant le lancement, en particulier si ton activité démarre progressivement.</li>\n        <li>L'<strong>ARCE</strong> convient mieux si tu as un besoin de trésorerie immédiat pour investir dans ton activité, et que tu te sens en confiance sur ta capacité à générer rapidement du chiffre d'affaires.</li>\n      </ul>\n      <h4>La démarche</h4>\n      <p>Le choix entre ARE maintenue et ARCE doit être fait explicitement auprès de ton conseiller France Travail, généralement au moment de la création de ta micro-entreprise — ce choix est en principe définitif une fois exercé. N'hésite pas à demander une simulation chiffrée avant de te décider.</p>\n      <div class=\"callout\"><strong>Point de vigilance :</strong> quelle que soit l'option choisie, tu dois continuer à actualiser ta situation chaque mois auprès de France Travail, en déclarant précisément ton activité et tes revenus de micro-entrepreneur.</div>\n      ",
        "keypoints": [
          "Le maintien partiel de l'ARE permet de cumuler allocation chômage et revenus de micro-entreprise, dans la limite de tes droits.",
          "L'ARCE verse environ 60 % de tes droits restants sous forme de capital, en deux fois.",
          "Le choix entre les deux options se fait auprès de ton conseiller France Travail, en principe de façon définitive.",
          "Tu dois continuer à actualiser ta situation chaque mois, quelle que soit l'option retenue."
        ]
      },
      {
        "id": "m6l3",
        "title": "Passage du régime micro au régime réel",
        "html": "\n      <p>Ton activité grandit, et à un moment donné, la question du passage au régime réel se pose — soit parce que tu y es contraint·e, soit parce que tu y as intérêt. Voici comment ce basculement fonctionne.</p>\n      <h4>Le basculement automatique</h4>\n      <p>Comme vu au module 1, si tu dépasses le seuil de chiffre d'affaires de ta catégorie d'activité <strong>deux années civiles consécutives</strong>, tu sors automatiquement du régime micro-entreprise et bascules vers un régime réel d'imposition (BIC réel simplifié ou normal, BNC réel selon ton activité) à compter du 1er janvier de l'année suivante. Cette bascule ne remet pas en cause ton statut d'entreprise individuelle : seul le mode de calcul de tes charges et de ton imposition change.</p>\n      <h4>L'option volontaire pour le régime réel</h4>\n      <p>Tu peux aussi choisir de passer au régime réel <strong>par anticipation</strong>, même sans dépasser les seuils, si tu estimes que tes charges réelles dépassent nettement l'abattement forfaitaire du régime micro. Cette option se formalise par un courrier adressé à ton service des impôts des entreprises, généralement avant le 1er février de l'année pour laquelle tu souhaites que l'option s'applique.</p>\n      <h4>Ce qui change concrètement</h4>\n      <ul>\n        <li><strong>La comptabilité :</strong> tu dois tenir une comptabilité complète (livre-journal, grand livre, bilan et compte de résultat), ce qui implique en pratique de recourir à un expert-comptable dans la grande majorité des cas.</li>\n        <li><strong>La déduction des charges :</strong> tu peux déduire tes charges réelles (loyer, matériel, sous-traitance, frais de déplacement...) au lieu de l'abattement forfaitaire, ce qui devient avantageux dès lors que tes charges réelles dépassent le pourcentage d'abattement de ta catégorie.</li>\n        <li><strong>La TVA :</strong> si tu dépasses également les seuils de franchise TVA au même moment, tu devras facturer et déclarer la TVA selon le régime applicable (réel simplifié ou normal).</li>\n        <li><strong>Le coût de gestion :</strong> honoraires d'expert-comptable, logiciel de comptabilité plus complet — un budget à anticiper dans ton calcul de rentabilité.</li>\n      </ul>\n      <div class=\"callout\"><strong>Avant de basculer volontairement,</strong> fais réaliser une simulation comparative par un expert-comptable : le gain fiscal potentiel doit clairement dépasser le coût de gestion supplémentaire pour que l'opération soit intéressante.</div>\n      ",
        "keypoints": [
          "Le passage au régime réel est automatique après deux années consécutives de dépassement du seuil de CA.",
          "Une option volontaire est possible, généralement avant le 1er février de l'année concernée.",
          "Le régime réel permet de déduire tes charges réelles, mais impose une comptabilité complète.",
          "Le passage implique presque toujours le recours à un expert-comptable, à intégrer dans ton calcul de rentabilité."
        ]
      },
      {
        "id": "m6l4",
        "title": "Cessation d'activité : les démarches propres",
        "html": "\n      <p>Que ce soit un choix ou une nécessité, mettre fin à ta micro-entreprise suit une procédure précise, à ne pas négliger pour éviter des avis fiscaux ou des cotisations mal calculées après la fermeture.</p>\n      <h4>La déclaration de cessation</h4>\n      <p>La cessation d'activité se déclare en ligne, sur le <strong>guichet unique des formalités d'entreprises de l'INPI</strong>, dans un délai de <strong>30 jours</strong> suivant la date effective de cessation. Cette déclaration unique transmet automatiquement l'information à l'URSSAF, à l'administration fiscale et à l'INSEE, qui procèdent ensuite à la radiation de ton SIRET.</p>\n      <h4>Ta dernière déclaration de chiffre d'affaires</h4>\n      <p>Tu dois effectuer une ultime déclaration de CA à l'URSSAF, portant sur la période d'activité restante jusqu'à la date de cessation, dans un délai spécifique (généralement 30 à 90 jours selon ta situation, à vérifier sur ton espace personnel au moment de la démarche). Cette déclaration finale déclenche le calcul de tes toutes dernières cotisations sociales dues.</p>\n      <h4>Et côté CFE ?</h4>\n      <p>La CFE reste due au prorata de l'année de cessation, sauf si tu cesses ton activité la même année civile que sa création (auquel cas l'exonération de première année continue de s'appliquer). Il est important de bien déclarer ta cessation pour que le calcul soit ajusté : sans cette déclaration, l'administration continue de considérer ton activité comme en cours et pourrait t'adresser un avis de CFE non justifié pour l'année suivante.</p>\n      <h4>Et côté impôt sur le revenu ?</h4>\n      <p>Le chiffre d'affaires réalisé jusqu'à la cessation devra être déclaré lors de ta prochaine déclaration annuelle de revenus (2042-C-PRO), selon les mêmes règles que d'habitude (abattement forfaitaire ou versement libératoire déjà réglé).</p>\n      <h4>Ce qu'il faut conserver malgré tout</h4>\n      <p>La cessation d'activité ne te dispense pas de conserver tes documents comptables et fiscaux pendant la durée habituelle (au moins 10 ans) : en cas de contrôle a posteriori, tu dois pouvoir justifier de ton activité passée.</p>\n      <div class=\"callout\"><strong>Un cas particulier à connaître :</strong> si ta cessation d'activité correspond en réalité à une pause temporaire, tu peux envisager une <strong>mise en sommeil</strong> plutôt qu'une cessation définitive, dans certaines conditions — cela évite une nouvelle immatriculation si tu comptes reprendre ton activité sous peu. Renseigne-toi sur le guichet unique de l'INPI pour vérifier si cette option est ouverte à ta situation.</div>\n      ",
        "keypoints": [
          "La cessation se déclare en ligne sur le guichet unique de l'INPI, dans les 30 jours suivant la date effective.",
          "Une dernière déclaration de chiffre d'affaires est obligatoire, dans un délai spécifique après la cessation.",
          "La CFE reste due au prorata de l'année de cessation, sauf cessation l'année même de la création.",
          "Conserve tous tes documents comptables et fiscaux au moins 10 ans, même après la fermeture de ton activité."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Cumuler un emploi salarié et une micro-entreprise est :",
        "options": [
          "Interdit par la loi",
          "Possible, sous réserve de respecter les clauses de ton contrat de travail",
          "Réservé aux temps partiels",
          "Possible uniquement avec l'accord écrit systématique de l'employeur"
        ],
        "correct": 1,
        "explain": "Le cumul est légal, mais il faut vérifier les éventuelles clauses d'exclusivité ou de non-concurrence de ton contrat."
      },
      {
        "q": "L'ARCE consiste à :",
        "options": [
          "Maintenir l'ARE mensuelle sans limite",
          "Percevoir une partie de ses droits ARE restants sous forme de capital",
          "Perdre tous ses droits au chômage",
          "Doubler son ARE"
        ],
        "correct": 1,
        "explain": "L'ARCE verse environ 60 % du reliquat des droits à l'ARE, sous forme de capital versé en deux fois."
      },
      {
        "q": "Le passage automatique au régime réel intervient après :",
        "options": [
          "Un simple dépassement de seuil sur une année",
          "Deux années civiles consécutives de dépassement du seuil",
          "Trois ans d'activité, quel que soit le CA",
          "Un choix aléatoire de l'administration"
        ],
        "correct": 1,
        "explain": "Il faut dépasser le seuil deux années de suite pour basculer automatiquement vers le régime réel l'année suivante."
      },
      {
        "q": "Où déclare-t-on la cessation d'activité d'une micro-entreprise ?",
        "options": [
          "Uniquement à l'URSSAF par courrier",
          "Sur le guichet unique des formalités d'entreprises de l'INPI",
          "Chez un notaire",
          "Il n'y a rien à déclarer"
        ],
        "correct": 1,
        "explain": "Le guichet unique de l'INPI centralise la déclaration de cessation, transmise ensuite à l'URSSAF et aux impôts."
      },
      {
        "q": "Après une cessation d'activité, dois-tu conserver tes documents comptables ?",
        "options": [
          "Non, plus aucune obligation",
          "Oui, pendant au moins 10 ans",
          "Oui, mais seulement 1 an",
          "Seulement en cas de contrôle en cours"
        ],
        "correct": 1,
        "explain": "L'obligation de conservation (au moins 10 ans) reste valable même après la fermeture de l'activité."
      }
    ]
  },
  {
    "id": "m7",
    "title": "Mon entreprise",
    "icon": "heart",
    "isWorkspace": true,
    "desc": "Ton espace personnel : pose ton projet à l'écrit et suis ton avancement, à ton rythme.",
    "workspaceIntro": "Ce module n'a ni leçon, ni quiz : c'est ton espace. Utilise-le pour poser à l'écrit ce que les six modules précédents t'ont donné envie de clarifier sur ton propre projet. Tu peux y revenir autant de fois que tu veux — tes réponses restent enregistrées sur cet appareil.",
    "workspaceFields": [
      {
        "id": "ws_idee",
        "label": "Mon activité en une phrase",
        "hint": "Ce que tu proposes, et à qui.",
        "placeholder": "Ex. : je crée des peintures sur mobilier et objets atypiques pour particuliers et professionnels à La Réunion."
      },
      {
        "id": "ws_client",
        "label": "Mon client idéal",
        "hint": "À qui penses-tu quand tu imagines ta prochaine vente ?",
        "placeholder": ""
      },
      {
        "id": "ws_offre",
        "label": "Mon offre ou mes produits/services",
        "hint": "Liste ce que tu vends aujourd'hui, ou ce que tu comptes vendre.",
        "placeholder": ""
      },
      {
        "id": "ws_priorites",
        "label": "Mes 3 priorités des 30 prochains jours",
        "hint": "En lien avec ce que tu as appris dans les modules précédents.",
        "placeholder": ""
      },
      {
        "id": "ws_doutes",
        "label": "Mes doutes ou blocages actuels",
        "hint": "Ce qui reste flou, ce qui te freine — pour y revenir plus tard.",
        "placeholder": ""
      }
    ],
    "workspaceChecklist": [
      "J'ai choisi le nom de mon activité",
      "J'ai vérifié la disponibilité de ce nom (INPI / annuaire des entreprises)",
      "J'ai immatriculé ma micro-entreprise sur le guichet unique",
      "J'ai ouvert un compte bancaire dédié à mon activité",
      "J'ai choisi mon outil de facturation et vérifié sa compatibilité avec la réforme électronique",
      "J'ai fixé mes tarifs",
      "J'ai identifié mes 3 premiers clients potentiels",
      "J'ai choisi ma périodicité de déclaration URSSAF (mensuelle ou trimestrielle)",
      "J'ai mis en place mon calendrier d'échéances (module 5)",
      "J'ai vérifié mes seuils de chiffre d'affaires et de franchise TVA (module 1)"
    ]
  }
];
