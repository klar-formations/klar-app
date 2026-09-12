import type { CourseModuleData } from "../course-player/types";

export const modules: CourseModuleData[] = [
  {
    "id": "ps1",
    "title": "Comprendre à quoi tu as droit (et ce qui n'est pas automatique)",
    "icon": "heart",
    "desc": "Démonter le mythe « indépendant = pas protégé », et comprendre ce que couvrent vraiment tes cotisations.",
    "lessons": [
      {
        "id": "ps1l1",
        "title": "Le mythe du « indépendant = pas protégé » : ce qui est vrai et faux",
        "html": "\n      <p>Une idée reçue très répandue veut qu'être micro-entrepreneur signifie renoncer à toute protection sociale digne de ce nom. Cette idée est en partie fausse — mais la partie vraie mérite d'être bien comprise pour ne pas se retrouver démuni·e face à un imprévu.</p>\n      <h4>Ce qui est vrai : tu es rattaché·e au régime général</h4>\n      <p>Depuis le rattachement des indépendants au régime général de la Sécurité sociale, un micro-entrepreneur bénéficie des mêmes remboursements de soins qu'un salarié, et a droit, sous conditions, à des indemnités journalières en cas d'arrêt maladie, à un congé maternité ou paternité, ainsi qu'à une retraite de base et complémentaire. Le statut de micro-entrepreneur n'exclut donc pas ces protections.</p>\n      <h4>Ce qui est vrai aussi : ces droits ne sont pas automatiques ni forcément suffisants</h4>\n      <p>Contrairement à un salarié, dont les droits sont calculés sur un salaire fixe et régulier, ceux d'un micro-entrepreneur dépendent directement du chiffre d'affaires réellement déclaré. Un chiffre d'affaires faible ou irrégulier peut réduire fortement, voire annuler, certains droits — ce qui n'a rien d'automatique ni de garanti comme cela peut l'être pour un salaire fixe.</p>\n      <h4>Ce qui est vrai également : certains risques ne sont pas couverts du tout</h4>\n      <p>Les cotisations forfaitaires des micro-entrepreneurs ne couvrent pas les accidents du travail et les maladies professionnelles (AT/MP), contrairement aux salariés. Sans démarche volontaire de ta part, ce risque reste entièrement à ta charge (voir module 2).</p>\n      <div class=\"callout\"><strong>Le message central de cette formation :</strong> tu as bien des droits réels, mais ils fonctionnent selon des règles différentes de celles d'un salarié, et certains trous existent qu'il vaut mieux connaître à l'avance plutôt que découvrir en pleine urgence personnelle.</div>\n      ",
        "keypoints": [
          "Un micro-entrepreneur est rattaché au régime général et a droit, sous conditions, à des indemnités maladie, maternité et à une retraite.",
          "Ces droits dépendent directement du chiffre d'affaires déclaré, contrairement à un salaire fixe qui garantit des droits stables.",
          "Les accidents du travail et maladies professionnelles (AT/MP) ne sont pas couverts par les cotisations forfaitaires de base.",
          "Mieux vaut connaître ces règles et ces trous à l'avance que les découvrir au moment d'un imprévu personnel."
        ]
      },
      {
        "id": "ps1l2",
        "title": "Comment fonctionne ta couverture sociale de base",
        "html": "\n      <p>Comprendre l'organisation générale de la protection sociale des indépendants aide à savoir à qui s'adresser, et pour quoi, le jour où un besoin se présente.</p>\n      <h4>Qui gère quoi</h4>\n      <ul>\n        <li><strong>La CPAM (Assurance Maladie)</strong> gère tes remboursements de soins, tes indemnités journalières en cas d'arrêt maladie, et les prestations liées à la maternité ou à la paternité.</li>\n        <li><strong>La retraite de base et complémentaire</strong> est gérée soit par la Sécurité sociale des indépendants (SSI, intégrée au régime général) pour la majorité des activités commerciales, artisanales et libérales non réglementées, soit par la CIPAV pour certaines professions libérales réglementées.</li>\n        <li><strong>L'URSSAF</strong> collecte tes cotisations et transmet tes informations de revenus aux organismes ci-dessus, qui calculent ensuite tes droits sur cette base.</li>\n      </ul>\n      <h4>Un point d'attention pour les professions libérales</h4>\n      <p>Si ton activité libérale a débuté avant 2018 et reste rattachée à la CIPAV, certaines règles spécifiques s'appliquent, notamment historiquement sur les indemnités d'arrêt de travail. Si tu es dans ce cas, vérifie directement ton rattachement exact auprès de ta caisse, car des évolutions réglementaires ont permis à certains professionnels de rejoindre le régime général.</p>\n      <h4>Où suivre concrètement tes droits</h4>\n      <p>Ton espace personnel sur ameli.fr centralise tes informations liées à la maladie et à la maternité/paternité. Le site info-retraite.fr te permet de consulter ton relevé de carrière et d'estimer tes droits à la retraite, tous régimes confondus.</p>\n      <div class=\"callout\"><strong>Un réflexe à prendre dès maintenant :</strong> crée tes accès à ces deux espaces (ameli.fr et info-retraite.fr), même si tu n'en as pas un besoin immédiat. Le jour où tu en as besoin est rarement le meilleur moment pour découvrir comment ça fonctionne.</div>\n      ",
        "keypoints": [
          "La CPAM gère les remboursements de soins, les arrêts maladie et la maternité/paternité ; la SSI ou la CIPAV gèrent la retraite selon l'activité.",
          "L'URSSAF collecte les cotisations et transmet les revenus déclarés aux organismes qui calculent ensuite les droits.",
          "Les professions libérales rattachées à la CIPAV avant 2018 suivent des règles historiquement différentes, à vérifier au cas par cas.",
          "Créer ses accès ameli.fr et info-retraite.fr avant d'en avoir besoin évite de découvrir le fonctionnement en pleine urgence."
        ]
      },
      {
        "id": "ps1l3",
        "title": "Ce que tes cotisations forfaitaires couvrent réellement",
        "html": "\n      <p>Le taux de cotisation forfaitaire que tu verses à chaque déclaration URSSAF (entre environ 12 % et 23 % de ton chiffre d'affaires selon ton activité) n'est pas une simple taxe : il finance un ensemble précis de droits sociaux, tous compris dans ce même pourcentage.</p>\n      <h4>Ce que couvre ce taux global</h4>\n      <ul>\n        <li>L'assurance maladie-maternité (remboursements de soins, indemnités journalières, prestations maternité/paternité).</li>\n        <li>Les allocations familiales.</li>\n        <li>La CSG-CRDS (contribution sociale généralisée).</li>\n        <li>La retraite de base.</li>\n        <li>La retraite complémentaire.</li>\n        <li>L'invalidité-décès.</li>\n        <li>La contribution à la formation professionnelle.</li>\n      </ul>\n      <p>Aucune cotisation supplémentaire n'est due séparément pour ces droits : tout est intégré dans le taux global appliqué à ton chiffre d'affaires.</p>\n      <h4>Pourquoi ce taux global peut donner une fausse impression de sécurité</h4>\n      <p>Le fait que tout soit inclus dans un seul taux peut laisser penser que la couverture est automatiquement complète, comme pour un salarié. En réalité, le montant de tes droits dépend directement du chiffre d'affaires que tu déclares : plus il est faible ou irrégulier, plus certains droits (indemnités journalières, trimestres de retraite) risquent d'être réduits ou nuls, alors que les cotisations, elles, restent bien payées.</p>\n      <h4>Ce que ce taux ne couvre pas</h4>\n      <p>Comme vu en leçon 1, les accidents du travail et maladies professionnelles restent hors de ce forfait. Une prévoyance complémentaire volontaire (voir module 5) reste également nécessaire si tu veux sécuriser un niveau de revenu de remplacement plus élevé que le minimum légal en cas de coup dur.</p>\n      <div class=\"callout\"><strong>Le point clé à retenir de ce module :</strong> tu cotises bien pour une protection sociale réelle, mais son niveau dépend directement de ton chiffre d'affaires déclaré — ce lien direct entre CA et droits sociaux est la clé pour comprendre tout le reste de cette formation.</div>\n      ",
        "keypoints": [
          "Le taux de cotisation forfaitaire couvre en un seul versement : maladie-maternité, allocations familiales, CSG-CRDS, retraite de base et complémentaire, invalidité-décès, formation professionnelle.",
          "Aucune cotisation supplémentaire n'est due séparément pour ces droits, tout est intégré dans le taux global.",
          "Le niveau réel de tes droits dépend directement du chiffre d'affaires déclaré, pas seulement du fait de cotiser.",
          "Les accidents du travail/maladies professionnelles restent hors de ce forfait, nécessitant une démarche volontaire séparée."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Un micro-entrepreneur a-t-il droit à une protection sociale ?",
        "options": [
          "Non, aucune protection n'existe pour ce statut",
          "Oui, il est rattaché au régime général avec des droits sous conditions",
          "Uniquement s'il paie une cotisation supplémentaire optionnelle",
          "Uniquement pour les professions libérales"
        ],
        "correct": 1,
        "explain": "Le micro-entrepreneur est rattaché au régime général et a droit, sous conditions, à plusieurs prestations sociales."
      },
      {
        "q": "De quoi dépend directement le niveau des droits sociaux d'un micro-entrepreneur ?",
        "options": [
          "De son âge uniquement",
          "Du chiffre d'affaires réellement déclaré",
          "Du nombre d'années d'expérience professionnelle",
          "D'un choix arbitraire de la CPAM"
        ],
        "correct": 1,
        "explain": "Contrairement à un salaire fixe, les droits d'un micro-entrepreneur varient directement selon le CA déclaré."
      },
      {
        "q": "Quel risque n'est PAS couvert par les cotisations forfaitaires de base ?",
        "options": [
          "La maladie ordinaire",
          "La retraite de base",
          "Les accidents du travail et maladies professionnelles (AT/MP)",
          "La CSG-CRDS"
        ],
        "correct": 2,
        "explain": "Les AT/MP restent hors du forfait de cotisations et nécessitent une démarche volontaire séparée."
      },
      {
        "q": "Quel organisme gère les indemnités journalières et la maternité/paternité ?",
        "options": [
          "L'URSSAF",
          "La CPAM (Assurance Maladie)",
          "La CIPAV uniquement",
          "Aucun organisme ne gère cela"
        ],
        "correct": 1,
        "explain": "La CPAM gère les remboursements de soins ainsi que les indemnités liées à la maladie et à la maternité/paternité."
      },
      {
        "q": "Pourquoi créer ses accès ameli.fr et info-retraite.fr avant d'en avoir besoin ?",
        "options": [
          "Ce n'est jamais utile de le faire à l'avance",
          "Pour éviter de découvrir le fonctionnement en pleine urgence personnelle",
          "Parce que c'est obligatoire dès la création de l'activité",
          "Ces sites ne sont utiles qu'aux salariés"
        ],
        "correct": 1,
        "explain": "Anticiper ces démarches évite de devoir tout découvrir au moment précis où un besoin urgent se présente."
      }
    ]
  },
  {
    "id": "ps2",
    "title": "L'arrêt maladie",
    "icon": "shield",
    "desc": "Conditions d'indemnisation, calcul des indemnités journalières, et ce qui reste à ta charge.",
    "lessons": [
      {
        "id": "ps2l1",
        "title": "Les conditions pour être indemnisé",
        "html": "\n      <p>Être micro-entrepreneur ne garantit pas automatiquement une indemnisation en cas d'arrêt maladie : plusieurs conditions cumulatives doivent être remplies.</p>\n      <h4>Les trois conditions cumulatives</h4>\n      <ul>\n        <li><strong>Une affiliation continue d'au moins 12 mois</strong> au titre de ton activité de micro-entrepreneur, à la date de l'arrêt.</li>\n        <li><strong>Un revenu annuel moyen (RAAM)</strong>, calculé sur les trois dernières années d'activité, supérieur à un seuil minimum (environ 4 582 € en 2026). En dessous de ce seuil, l'indemnité journalière est nulle, sauf si tu as volontairement cotisé pour une garantie minimale.</li>\n        <li><strong>Une prescription médicale d'arrêt de travail</strong>, comme pour n'importe quel assuré.</li>\n      </ul>\n      <h4>Le délai de carence et de transmission</h4>\n      <p>Un délai de carence de 3 jours s'applique avant le versement des indemnités : celles-ci commencent à courir à partir du 4e jour d'arrêt. Tu disposes par ailleurs d'un délai de 48 heures pour transmettre ton arrêt de travail à ta CPAM, faute de quoi le versement peut être retardé ou refusé.</p>\n      <h4>Le piège du chiffre d'affaires trop faible</h4>\n      <p>De nombreux micro-entrepreneurs, notamment ceux qui exercent leur activité en complément d'un autre revenu, se retrouvent avec un chiffre d'affaires sous le seuil minimum et ne perçoivent donc aucune indemnité journalière en cas d'arrêt, alors même qu'ils cotisent bien chaque mois ou trimestre. Ce n'est pas une erreur de calcul : c'est une conséquence directe du principe vu au module 1, où le niveau de droit dépend du CA déclaré.</p>\n      <div class=\"callout\"><strong>Un repère à vérifier dès maintenant :</strong> calcule ton revenu annuel moyen des trois dernières années (ou estime-le si ton activité est récente) pour savoir si tu te situes au-dessus ou en dessous du seuil d'indemnisation. Cette information change directement ta stratégie de prévoyance (voir module 5).</div>\n      ",
        "keypoints": [
          "Trois conditions cumulatives : 12 mois d'affiliation continue, un revenu annuel moyen suffisant, et une prescription médicale.",
          "En dessous du seuil de revenu minimum (environ 4 582 € en 2026), l'indemnité journalière est nulle.",
          "Un délai de carence de 3 jours s'applique ; le versement commence à partir du 4e jour d'arrêt.",
          "Un chiffre d'affaires faible, notamment en activité complémentaire, expose fréquemment à une absence totale d'indemnisation."
        ]
      },
      {
        "id": "ps2l2",
        "title": "Comment est calculée ton indemnité journalière",
        "html": "\n      <p>Le montant de l'indemnité journalière ne se devine pas au hasard : il suit une formule précise, directement liée à ton chiffre d'affaires des trois dernières années.</p>\n      <h4>La formule de calcul</h4>\n      <p>L'indemnité journalière brute correspond à 1/730e de ton revenu d'activité annuel moyen (RAAM) des trois dernières années. Elle est plafonnée à 65,84 € bruts par jour en 2026, quel que soit ton niveau de revenu au-delà de ce plafond.</p>\n      <h4>Le rôle de l'abattement selon ton activité</h4>\n      <p>Ton chiffre d'affaires n'est pas pris en compte à 100 % pour ce calcul : un abattement forfaitaire s'applique d'abord, comme pour le calcul de l'impôt (71 % pour la vente, 50 % pour les prestations de services BIC, 34 % pour les activités BNC), afin de déterminer ton revenu cotisé réel.</p>\n      <h4>Un exemple concret</h4>\n      <p>Une prestataire de services BIC ayant réalisé en moyenne 15 000 € de chiffre d'affaires sur les trois dernières années a un revenu cotisé d'environ 7 500 € (après abattement de 50 %). Son indemnité journalière serait alors d'environ 10 € par jour (7 500 € / 730), bien en dessous du plafond — un montant à connaître avant d'en avoir besoin, pour ne pas être surpris·e le jour venu.</p>\n      <h4>La durée maximale d'indemnisation</h4>\n      <p>L'indemnisation pour un arrêt maladie ordinaire est limitée à 360 jours sur une période glissante de 3 ans. Pour une affection de longue durée (ALD), cette période peut s'étendre jusqu'à 3 ans.</p>\n      <div class=\"callout\"><strong>Le bon réflexe :</strong> calcule dès maintenant, à partir de tes revenus réels des trois dernières années, le montant approximatif de ton indemnité journalière. Ce chiffre, souvent plus bas qu'on ne l'imagine, permet de décider en connaissance de cause si une prévoyance complémentaire est nécessaire.</div>\n      ",
        "keypoints": [
          "L'indemnité journalière équivaut à 1/730e du revenu annuel moyen des 3 dernières années, plafonnée à 65,84 € par jour en 2026.",
          "Un abattement forfaitaire (71 %, 50 % ou 34 % selon l'activité) s'applique au chiffre d'affaires avant ce calcul.",
          "Pour de nombreux micro-entrepreneurs, l'indemnité réelle reste bien en dessous du plafond légal.",
          "L'indemnisation d'un arrêt maladie ordinaire est limitée à 360 jours sur une période glissante de 3 ans."
        ]
      },
      {
        "id": "ps2l3",
        "title": "Ce qui n'est pas couvert, et comment s'en prémunir",
        "html": "\n      <p>Au-delà des conditions et du montant de l'indemnisation classique, certains risques restent entièrement à ta charge par défaut, sauf démarche volontaire de ta part.</p>\n      <h4>Le trou de couverture des accidents du travail et maladies professionnelles</h4>\n      <p>Les cotisations forfaitaires des micro-entrepreneurs n'intègrent pas les accidents du travail ni les maladies professionnelles (AT/MP). Concrètement, si un accident survient dans le cadre de ton activité (une chute sur un lieu de mission, par exemple), tu ne bénéficies d'aucune indemnisation spécifique à ce titre, sauf si tu as souscrit de ta propre initiative une assurance volontaire individuelle contre ce risque.</p>\n      <h4>Le temps partiel thérapeutique</h4>\n      <p>En cas de reprise progressive après un arrêt, un dispositif de temps partiel thérapeutique existe, sous conditions, pour une durée limitée (90 jours sur une période de 3 ans, ou 270 jours sur 4 ans pour les ALD) — une option à connaître si une reprise progressive s'avère nécessaire après un arrêt long.</p>\n      <h4>Le rôle d'une prévoyance complémentaire</h4>\n      <p>Face à ces trous de couverture et au montant souvent limité de l'indemnisation légale (vue en leçon 2), une assurance prévoyance complémentaire, souscrite volontairement, permet de sécuriser un niveau de revenu de remplacement plus élevé en cas d'arrêt de travail prolongé, et peut inclure une couverture spécifique pour les accidents du travail. Ce sujet est approfondi au module 5 de cette formation.</p>\n      <div class=\"callout\"><strong>Un repère de bon sens :</strong> plus ton activité comporte un risque physique ou matériel (déplacements fréquents, travail manuel, matériel professionnel utilisé au quotidien), plus l'absence de couverture AT/MP mérite d'être comblée rapidement par une assurance volontaire.</div>\n      ",
        "keypoints": [
          "Les accidents du travail et maladies professionnelles ne sont pas couverts par les cotisations forfaitaires de base.",
          "Une assurance volontaire individuelle reste le seul moyen de se couvrir contre ce risque spécifique.",
          "Un dispositif de temps partiel thérapeutique existe, sous conditions, pour faciliter une reprise progressive après un arrêt.",
          "Une prévoyance complémentaire volontaire permet de sécuriser un niveau de revenu supérieur au minimum légal en cas de coup dur."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelles sont les 3 conditions cumulatives pour être indemnisé en cas d'arrêt maladie ?",
        "options": [
          "Âge, ancienneté, nationalité",
          "12 mois d'affiliation continue, un revenu minimum sur 3 ans, une prescription médicale",
          "Un diplôme, un local professionnel, une assurance privée",
          "Aucune condition n'est requise"
        ],
        "correct": 1,
        "explain": "Ces trois conditions doivent être réunies simultanément pour ouvrir droit à indemnisation."
      },
      {
        "q": "Comment se calcule l'indemnité journalière d'un micro-entrepreneur ?",
        "options": [
          "1/730e du revenu annuel moyen des 3 dernières années, plafonné à 65,84 €/jour en 2026",
          "Un montant fixe identique pour tous",
          "Le montant du SMIC journalier",
          "Il n'existe pas de méthode de calcul précise"
        ],
        "correct": 0,
        "explain": "La formule officielle applique 1/730e du RAAM, avec un plafond fixé chaque année."
      },
      {
        "q": "Quel risque reste entièrement à la charge du micro-entrepreneur, sauf assurance volontaire ?",
        "options": [
          "La maladie ordinaire",
          "Les accidents du travail et maladies professionnelles (AT/MP)",
          "La maternité",
          "La retraite de base"
        ],
        "correct": 1,
        "explain": "Les AT/MP ne sont pas couverts par les cotisations forfaitaires de base, contrairement aux salariés."
      },
      {
        "q": "Quelle est la durée maximale d'indemnisation pour un arrêt maladie ordinaire ?",
        "options": [
          "30 jours",
          "360 jours sur une période glissante de 3 ans",
          "Illimitée",
          "10 jours"
        ],
        "correct": 1,
        "explain": "Au-delà de 360 jours sur 3 ans glissants, l'indemnisation d'un arrêt ordinaire s'arrête, sauf cas particuliers comme les ALD."
      },
      {
        "q": "Pourquoi calculer à l'avance le montant de sa propre indemnité journalière est-il utile ?",
        "options": [
          "Ce n'est pas vraiment utile en pratique",
          "Cela permet de décider en connaissance de cause si une prévoyance complémentaire est nécessaire",
          "Cela change le montant des cotisations à payer",
          "Cela n'a aucun rapport avec la prévoyance"
        ],
        "correct": 1,
        "explain": "Connaître son indemnité réelle, souvent plus faible que le plafond légal, aide à décider d'une couverture complémentaire ou non."
      }
    ]
  },
  {
    "id": "ps3",
    "title": "Congé maternité et paternité",
    "icon": "chat",
    "desc": "Durée, conditions, et calcul des deux prestations versées pendant le congé.",
    "lessons": [
      {
        "id": "ps3l1",
        "title": "Tes droits, durée et conditions",
        "html": "\n      <p>Depuis 2019, les micro-entrepreneuses bénéficient d'un droit au congé maternité aligné sur celui des salariées, en durée. Les pères micro-entrepreneurs disposent d'un droit équivalent au congé paternité.</p>\n      <h4>La durée du congé maternité</h4>\n      <p>Pour un premier ou un deuxième enfant, avec une grossesse simple, le congé maternité dure au maximum 16 semaines (112 jours), généralement réparties en 6 semaines avant la date présumée de l'accouchement et 10 semaines après. Un arrêt effectif d'activité d'au moins 8 semaines reste obligatoire, dont au moins 6 semaines après l'accouchement : continuer à facturer pendant cette période obligatoire peut entraîner la suspension ou le remboursement des indemnités perçues.</p>\n      <h4>Des durées différentes selon la situation</h4>\n      <p>La durée du congé s'allonge dans certaines situations : naissance avec au moins deux enfants déjà à charge, naissance de jumeaux, naissance de triplés ou plus. Chaque cas correspond à une durée et un montant d'indemnisation spécifiques.</p>\n      <h4>La condition d'éligibilité</h4>\n      <p>Pour bénéficier de ces prestations, il faut justifier d'au moins 6 mois d'affiliation au titre d'une activité non salariée à la date présumée de l'accouchement ou de l'adoption (une activité salariée ou une période de chômage précédente peut, sous conditions, être prise en compte dans ce calcul de continuité).</p>\n      <h4>Le congé paternité</h4>\n      <p>Le congé paternité du micro-entrepreneur dure 25 jours, avec la même logique d'indemnités journalières forfaitaires que pour la maternité.</p>\n      <div class=\"callout\"><strong>Un point important pour une création d'activité récente :</strong> si tu ne remplis pas encore la condition des 6 mois d'affiliation au moment de démarrer ta micro-entreprise, un mécanisme de coordination entre régimes peut permettre de faire valoir des droits acquis via une activité salariée ou une période d'indemnisation chômage précédente. Vérifie ta situation précise directement auprès de ta CPAM.</div>\n      ",
        "keypoints": [
          "Le congé maternité dure jusqu'à 16 semaines (112 jours) pour un 1er ou 2e enfant, avec un arrêt effectif d'au moins 8 semaines obligatoire.",
          "La durée s'allonge en cas de famille nombreuse, de jumeaux ou de naissances multiples.",
          "La condition d'éligibilité est de 6 mois d'affiliation à une activité non salariée à la date présumée de l'accouchement.",
          "Le congé paternité dure 25 jours, avec la même logique d'indemnisation forfaitaire que la maternité."
        ]
      },
      {
        "id": "ps3l2",
        "title": "Les deux prestations et comment elles sont calculées",
        "html": "\n      <p>Le congé maternité d'une micro-entrepreneuse ouvre droit à deux prestations distinctes, versées par l'Assurance Maladie, qui peuvent se cumuler.</p>\n      <h4>L'allocation forfaitaire de repos maternel</h4>\n      <p>Cette allocation compense une partie de l'interruption d'activité liée à la grossesse et à l'arrivée de l'enfant. Son montant, au taux plein, est égal au plafond mensuel de la Sécurité sociale (PMSS), soit 4 005 € en 2026, versé en deux fois.</p>\n      <h4>Les indemnités journalières</h4>\n      <p>En complément, des indemnités journalières sont versées pendant la durée effective de l'arrêt, calculées à partir des revenus cotisés déclarés à l'URSSAF, dans la limite de 65,84 € par jour en 2026 (même plafond que pour l'arrêt maladie, voir module 2).</p>\n      <h4>Le cas des revenus modestes</h4>\n      <p>Si ton revenu annuel moyen des trois années de référence est inférieur à un seuil minimum (autour de 4 582 € en 2026), ces deux prestations sont réduites à 10 % de leur montant au taux plein, soit environ 400 € pour l'allocation et un montant journalier très réduit pour les indemnités. Ce cas concerne notamment les micro-entrepreneuses dont l'activité reste modeste ou complémentaire à un autre revenu.</p>\n      <h4>Les démarches à effectuer</h4>\n      <p>Pour percevoir ces prestations, il faut transmettre à la CPAM un certificat médical attestant de la date prévue d'accouchement, une déclaration sur l'honneur d'interruption effective d'activité, et un certificat d'arrêt de travail. Ces démarches se font via ton compte ameli.fr ou par courrier. Les versements interviennent généralement sous 2 à 4 semaines après réception des justificatifs complets.</p>\n      <div class=\"callout\"><strong>Un repère à retenir :</strong> ces deux prestations ne remplacent pas intégralement un revenu d'activité normal, en particulier pour une activité modeste. Anticiper ce congé financièrement (voir leçon suivante) reste indispensable, même en connaissant précisément ses droits.</div>\n      ",
        "keypoints": [
          "L'allocation forfaitaire de repos maternel s'élève à 4 005 € au taux plein en 2026, versée en deux fois.",
          "Les indemnités journalières sont calculées sur les revenus cotisés déclarés, plafonnées à 65,84 € par jour en 2026.",
          "Sous un seuil de revenu minimum, ces deux prestations sont réduites à 10 % de leur montant au taux plein.",
          "Les démarches (certificat médical, déclaration sur l'honneur, arrêt de travail) se font via ameli.fr, avec un versement sous 2 à 4 semaines."
        ]
      },
      {
        "id": "ps3l3",
        "title": "Anticiper une naissance quand on est indépendante",
        "html": "\n      <p>Au-delà de connaître ses droits, anticiper concrètement une naissance permet de traverser cette période sans que l'activité, ni les finances personnelles, n'en pâtissent trop brutalement.</p>\n      <h4>Constituer une réserve avant le congé</h4>\n      <p>Puisque les prestations versées ne remplacent que partiellement un revenu d'activité habituel, constituer une réserve de trésorerie en amont (voir la formation « Gérer sa trésorerie et anticiper les coups durs ») permet d'aborder cette période sans stress financier immédiat.</p>\n      <h4>Anticiper la suite de l'activité pendant l'arrêt</h4>\n      <p>Selon la nature de l'activité, certaines tâches peuvent être suspendues sans grande conséquence, tandis que d'autres (relations clients en cours, échéances contractuelles) nécessitent une organisation anticipée : informer les clients en cours à l'avance, éventuellement déléguer certaines tâches à un pair de confiance, ou simplement caler les échéances de missions en dehors de la période prévue d'arrêt.</p>\n      <h4>Vérifier ses droits suffisamment tôt</h4>\n      <p>Les démarches administratives (voir leçon précédente) demandent du temps et des justificatifs précis. Vérifier sa situation d'affiliation, rassembler les documents nécessaires, et engager les démarches dès que la grossesse est confirmée médicalement évite un stress administratif superposé à un moment déjà chargé émotionnellement.</p>\n      <h4>Ne pas hésiter à solliciter un accompagnement</h4>\n      <p>De nombreux dispositifs d'accompagnement à la création et à la gestion d'entreprise proposent un soutien spécifique aux femmes entrepreneures, y compris sur ces questions de maternité en activité indépendante. Se renseigner auprès de sa chambre consulaire ou d'associations dédiées peut apporter un soutien concret, au-delà de la seule dimension administrative.</p>\n      <div class=\"callout\"><strong>Le message à retenir de ce module :</strong> une naissance en tant qu'indépendante se prépare, financièrement et organisationnellement, plus tôt qu'on ne le pense généralement — l'anticipation reste la meilleure protection face à des prestations qui, bien réelles, restent souvent modestes.</div>\n      ",
        "keypoints": [
          "Constituer une réserve de trésorerie en amont compense le caractère partiel des prestations maternité/paternité.",
          "Anticiper la suite de l'activité (clients en cours, échéances) évite une double charge administrative et professionnelle pendant l'arrêt.",
          "Engager les démarches administratives dès la confirmation médicale de grossesse limite le stress lié aux délais.",
          "Des dispositifs d'accompagnement spécifiques aux femmes entrepreneures existent et peuvent apporter un vrai soutien."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelle est la durée maximale du congé maternité pour un 1er ou 2e enfant (grossesse simple) ?",
        "options": [
          "4 semaines",
          "16 semaines (112 jours)",
          "1 an",
          "Il n'existe pas de limite"
        ],
        "correct": 1,
        "explain": "16 semaines est la durée maximale pour un premier ou deuxième enfant, réparties généralement en 6 semaines avant et 10 après."
      },
      {
        "q": "Quelle est la condition d'affiliation pour bénéficier du congé maternité en micro-entreprise ?",
        "options": [
          "Aucune condition",
          "6 mois d'affiliation à une activité non salariée à la date présumée de l'accouchement",
          "5 ans d'ancienneté minimum",
          "Un chiffre d'affaires supérieur à 50 000 €"
        ],
        "correct": 1,
        "explain": "La condition principale est de justifier de 6 mois d'affiliation à la date présumée de l'accouchement ou de l'adoption."
      },
      {
        "q": "Quelles sont les deux prestations versées pendant le congé maternité ?",
        "options": [
          "Uniquement une allocation unique",
          "L'allocation forfaitaire de repos maternel et les indemnités journalières",
          "Uniquement des indemnités journalières",
          "Un crédit d'impôt uniquement"
        ],
        "correct": 1,
        "explain": "Ces deux prestations sont cumulables et versées séparément selon des règles de calcul différentes."
      },
      {
        "q": "Que se passe-t-il si le revenu annuel moyen est sous le seuil minimum requis ?",
        "options": [
          "Aucune prestation n'est versée du tout",
          "Les prestations sont réduites à 10 % de leur montant au taux plein",
          "Le montant est doublé",
          "Cela n'a aucun effet sur le montant"
        ],
        "correct": 1,
        "explain": "Sous ce seuil, les deux prestations (allocation et indemnités) sont réduites à 10 % du montant au taux plein, plutôt que supprimées."
      },
      {
        "q": "Pourquoi anticiper financièrement une naissance en tant qu'indépendante ?",
        "options": [
          "Ce n'est pas nécessaire, les prestations couvrent l'intégralité du revenu habituel",
          "Parce que les prestations versées ne remplacent que partiellement un revenu d'activité habituel",
          "Parce que la loi l'exige formellement",
          "Cela n'a aucun rapport avec les prestations sociales"
        ],
        "correct": 1,
        "explain": "Les prestations maternité/paternité, bien réelles, restent souvent inférieures à un revenu d'activité habituel."
      }
    ]
  },
  {
    "id": "ps4",
    "title": "La retraite du micro-entrepreneur",
    "icon": "coin",
    "desc": "Comprendre la validation des trimestres, la retraite complémentaire, et anticiper une pension souvent modeste.",
    "lessons": [
      {
        "id": "ps4l1",
        "title": "Comment tes trimestres sont validés",
        "html": "\n      <p>Contrairement à une idée reçue, être immatriculé·e en micro-entreprise ne suffit pas à valider automatiquement des trimestres de retraite : tout dépend directement du chiffre d'affaires réellement déclaré.</p>\n      <h4>Le principe de calcul</h4>\n      <p>Ton chiffre d'affaires est d'abord converti en « revenu cotisé », via le même abattement forfaitaire que pour l'impôt (71 % pour la vente, 50 % pour les prestations de services BIC, 34 % pour les activités BNC). Ce revenu cotisé est ensuite comparé à la valeur d'un trimestre, fixée à 1 803 € en 2026 (l'équivalent de 150 heures au SMIC horaire).</p>\n      <h4>Des seuils de chiffre d'affaires différents selon l'activité</h4>\n      <p>Pour valider les 4 trimestres d'une année complète en 2026, il faut réaliser environ 24 000 € de chiffre d'affaires pour une activité de vente, environ 14 000 € pour des prestations de services BIC, et environ 11 000 € pour une activité libérale BNC (ces montants varient légèrement selon les sources et les arrondis utilisés — consulte ton relevé de carrière pour un calcul exact sur ta situation).</p>\n      <h4>Une limite à connaître</h4>\n      <p>Il est impossible de valider plus de 4 trimestres par an, même avec un chiffre d'affaires très supérieur au seuil nécessaire. Au-delà de ce seuil, le surplus de chiffre d'affaires n'apporte donc aucun trimestre supplémentaire — une information utile pour ne pas se méprendre sur l'effet d'un CA très élevé sur ses droits à la retraite.</p>\n      <h4>Le cas du cumul avec un emploi salarié</h4>\n      <p>Si tu cumules une activité salariée et une micro-entreprise, le nombre total de trimestres validés, tous régimes confondus, reste plafonné à 4 par an. Si ton emploi salarié valide déjà 4 trimestres à lui seul, ton activité de micro-entrepreneur n'en ajoute pas davantage. En revanche, si ton emploi salarié ne valide que 2 ou 3 trimestres, ton activité micro peut compléter jusqu'à 4 — un vrai levier dans certaines situations de cumul.</p>\n      <div class=\"callout\"><strong>Le repère à retenir :</strong> pour connaître avec certitude le nombre de trimestres que tu as réellement validés, consulte ton relevé de carrière sur info-retraite.fr plutôt que de te fier uniquement à une estimation théorique — les organismes appliquent parfois des règles de calcul légèrement différentes selon les situations.</div>\n      ",
        "keypoints": [
          "Le chiffre d'affaires est converti en revenu cotisé (après abattement selon l'activité), comparé à la valeur d'un trimestre (1 803 € en 2026).",
          "Les seuils de CA pour valider 4 trimestres varient selon l'activité : environ 24 000 € en vente, 14 000 € en services BIC, 11 000 € en BNC.",
          "Il est impossible de valider plus de 4 trimestres par an, quel que soit le niveau de chiffre d'affaires réalisé.",
          "En cas de cumul salarié/micro-entrepreneur, le total de trimestres validés reste plafonné à 4 par an, tous régimes confondus."
        ]
      },
      {
        "id": "ps4l2",
        "title": "Retraite de base et retraite complémentaire",
        "html": "\n      <p>La pension de retraite d'un micro-entrepreneur se compose de deux éléments distincts, calculés selon des logiques différentes : la retraite de base et la retraite complémentaire.</p>\n      <h4>La retraite de base</h4>\n      <p>Elle dépend du nombre de trimestres validés au cours de la carrière (voir leçon précédente) et du revenu moyen des 25 meilleures années d'activité, tous régimes confondus. Le nombre de trimestres nécessaires pour obtenir une pension à taux plein se situe généralement entre 167 et 172 trimestres, selon l'année de naissance.</p>\n      <h4>La retraite complémentaire par points</h4>\n      <p>En parallèle, une partie des cotisations alimente une retraite complémentaire fonctionnant par points, gérée par la Sécurité sociale des indépendants (SSI) ou la CIPAV selon l'activité. Chaque année, en fonction du revenu cotisé, un certain nombre de points est acquis ; à la retraite, ces points sont convertis en pension complémentaire selon leur valeur en vigueur au moment de la liquidation (environ 1,33 € par point en 2026 pour la SSI).</p>\n      <h4>Un exemple pour se projeter</h4>\n      <p>Un micro-entrepreneur qui acquiert environ 50 points par an pendant 30 ans (soit 1 500 points au total) percevrait, à titre d'exemple très approximatif et non contractuel, une retraite complémentaire annuelle de l'ordre de 2 000 € — un montant à mettre en perspective avec le fait qu'il s'additionne à la retraite de base, sans la remplacer.</p>\n      <h4>Pourquoi ce système peut réserver de mauvaises surprises</h4>\n      <p>Le principal piège consiste à croire que cotiser au forfait micro-social garantit automatiquement des droits comparables à ceux d'un salarié avec un salaire stable. En réalité, un chiffre d'affaires modeste ou irrégulier sur plusieurs années, même s'il permet de vivre correctement grâce à des charges réduites, peut aboutir à une pension de retraite très inférieure à ce qu'on pourrait imaginer.</p>\n      <div class=\"callout\"><strong>Le point à retenir :</strong> la retraite d'un micro-entrepreneur se construit sur la durée, trimestre par trimestre et point par point — un chiffre d'affaires régulier et suffisant sur de nombreuses années pèse davantage qu'une bonne année isolée.</div>\n      ",
        "keypoints": [
          "La pension se compose d'une retraite de base (selon les trimestres validés et le revenu moyen des 25 meilleures années) et d'une retraite complémentaire par points.",
          "Le nombre de trimestres nécessaires pour le taux plein se situe généralement entre 167 et 172, selon l'année de naissance.",
          "La retraite complémentaire fonctionne par points, acquis chaque année selon le revenu cotisé, puis convertis en pension à la liquidation.",
          "Un chiffre d'affaires modeste ou irrégulier sur plusieurs années peut aboutir à une pension bien inférieure à ce qu'on imagine spontanément."
        ]
      },
      {
        "id": "ps4l3",
        "title": "Anticiper une pension probablement insuffisante",
        "html": "\n      <p>Le constat, souvent partagé par les professionnels du secteur, est que la retraite issue du seul régime obligatoire des micro-entrepreneurs reste fréquemment modeste. Anticiper ce constat permet d'agir à temps, plutôt que de le découvrir au moment de la liquidation.</p>\n      <h4>Pourquoi ce constat est fréquent</h4>\n      <p>Le régime micro-social, conçu pour sa simplicité, calcule des droits proportionnellement au chiffre d'affaires réellement déclaré, sans mécanisme de rattrapage automatique pour les années plus faibles. Une activité qui démarre progressivement, ou qui reste modeste pendant plusieurs années, se traduit directement par des trimestres et des points de retraite réduits sur ces mêmes années.</p>\n      <h4>Les leviers pour améliorer sa situation</h4>\n      <ul>\n        <li><strong>Augmenter son chiffre d'affaires</strong> quand c'est possible, en gardant à l'esprit qu'au-delà du seuil des 4 trimestres, l'effet sur la retraite de base s'arrête (voir leçon 1).</li>\n        <li><strong>Racheter des trimestres manquants</strong> auprès de l'Assurance Retraite, une démarche coûteuse mais parfois intéressante fiscalement, à étudier au cas par cas avec un conseiller retraite.</li>\n        <li><strong>Ouvrir un plan d'épargne retraite (PER)</strong>, qui permet de se constituer un capital complémentaire, avec un avantage fiscal sur les versements, en dehors du régime obligatoire.</li>\n      </ul>\n      <h4>L'importance de vérifier régulièrement sa situation</h4>\n      <p>Consulter périodiquement son relevé de carrière permet de détecter d'éventuelles erreurs (trimestres manquants alors qu'ils auraient dû être validés) suffisamment tôt pour les faire corriger, plutôt qu'au moment de la demande de liquidation, où les corrections deviennent plus complexes.</p>\n      <div class=\"callout\"><strong>Le message central de cette leçon :</strong> une pension modeste n'est pas une fatalité si elle est anticipée assez tôt — plus les leviers (chiffre d'affaires, rachat de trimestres, épargne complémentaire) sont actionnés tôt dans la carrière, plus leur effet cumulé est important.</div>\n      ",
        "keypoints": [
          "La retraite issue du seul régime obligatoire des micro-entrepreneurs reste fréquemment modeste, en raison du lien direct entre CA et droits.",
          "Augmenter son chiffre d'affaires, racheter des trimestres manquants, ou ouvrir un plan d'épargne retraite sont des leviers possibles.",
          "Au-delà du seuil des 4 trimestres validés, un chiffre d'affaires plus élevé n'améliore plus la retraite de base sur l'année concernée.",
          "Vérifier régulièrement son relevé de carrière permet de détecter et corriger d'éventuelles erreurs suffisamment tôt."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Que faut-il pour valider un trimestre de retraite en micro-entreprise en 2026 ?",
        "options": [
          "Être simplement immatriculé, sans condition de revenu",
          "Atteindre, après abattement, un revenu cotisé équivalent à 1 803 €",
          "Travailler au moins 150 jours dans l'année",
          "Avoir plus de 5 ans d'ancienneté"
        ],
        "correct": 1,
        "explain": "La valeur d'un trimestre en 2026 est de 1 803 € de revenu cotisé, obtenu après application de l'abattement selon l'activité."
      },
      {
        "q": "Combien de trimestres maximum peut-on valider par an, quel que soit le chiffre d'affaires ?",
        "options": [
          "2",
          "4",
          "6",
          "Il n'y a pas de limite"
        ],
        "correct": 1,
        "explain": "4 trimestres est le maximum annuel, même avec un chiffre d'affaires très supérieur au seuil nécessaire."
      },
      {
        "q": "Comment fonctionne la retraite complémentaire des micro-entrepreneurs ?",
        "options": [
          "Elle n'existe pas pour ce statut",
          "Par un système de points, acquis chaque année selon le revenu cotisé",
          "Elle est calculée uniquement sur la dernière année d'activité",
          "Elle est automatiquement égale à la retraite de base"
        ],
        "correct": 1,
        "explain": "La retraite complémentaire fonctionne par points, convertis en pension au moment de la liquidation."
      },
      {
        "q": "En cas de cumul salarié et micro-entrepreneur, quel est le plafond de trimestres validés ?",
        "options": [
          "8 trimestres, cumulés des deux régimes",
          "4 trimestres au total, tous régimes confondus",
          "Aucun plafond dans ce cas précis",
          "2 trimestres uniquement pour la partie micro"
        ],
        "correct": 1,
        "explain": "Le plafond de 4 trimestres par an s'applique globalement, même en cas de cumul de deux régimes différents."
      },
      {
        "q": "Quel levier permet de se constituer un capital retraite complémentaire, en dehors du régime obligatoire ?",
        "options": [
          "Le rachat de trimestres est le seul levier possible",
          "Un plan d'épargne retraite (PER)",
          "Il n'existe aucun levier complémentaire possible",
          "Une simple augmentation du taux de cotisation"
        ],
        "correct": 1,
        "explain": "Le PER permet de se constituer un capital complémentaire, avec un avantage fiscal, en dehors du régime obligatoire."
      }
    ]
  },
  {
    "id": "ps5",
    "title": "S'organiser pour protéger l'avenir",
    "icon": "clipboard",
    "desc": "Le rôle d'une prévoyance complémentaire, un rythme de vérification annuel, et une checklist complète.",
    "lessons": [
      {
        "id": "ps5l1",
        "title": "Le rôle d'une prévoyance complémentaire",
        "html": "\n      <p>Face aux limites du régime obligatoire vues dans les modules précédents — indemnités souvent modestes, trous de couverture (AT/MP), pension de retraite potentiellement faible — une prévoyance complémentaire volontaire permet de combler une partie de ces manques.</p>\n      <h4>Ce qu'une prévoyance complémentaire peut couvrir</h4>\n      <ul>\n        <li><strong>Un complément de revenu en cas d'arrêt de travail</strong>, au-delà du montant souvent limité de l'indemnité journalière légale.</li>\n        <li><strong>Une couverture spécifique pour les accidents du travail</strong>, absente du régime obligatoire de base.</li>\n        <li><strong>Une garantie invalidité</strong>, en cas d'incapacité durable à exercer son activité.</li>\n        <li><strong>Une garantie décès</strong>, pour protéger ses proches en cas de disparition prématurée.</li>\n      </ul>\n      <h4>Comment évaluer si une prévoyance est nécessaire</h4>\n      <p>Le calcul effectué au module 2 (montant réel de ton indemnité journalière légale) donne une première indication concrète : plus l'écart entre cette indemnité et ton besoin réel de revenu mensuel est important, plus une prévoyance complémentaire mérite d'être étudiée sérieusement. Le niveau de risque physique de ton activité (déplacements, travail manuel, matériel utilisé) influence également cette décision.</p>\n      <h4>Un point de vigilance sur le coût</h4>\n      <p>Le coût d'une prévoyance varie fortement selon l'âge, l'activité, et le niveau de garantie choisi. Comparer plusieurs devis, avec des garanties clairement comparables, reste le seul moyen fiable d'évaluer un tarif juste — comme pour tout autre service professionnel (voir la formation « Communication visuelle », module 5, sur la comparaison de devis, un principe qui s'applique tout autant ici).</p>\n      <div class=\"callout\"><strong>Le repère à retenir :</strong> une prévoyance complémentaire n'est pas une dépense superflue à écarter par principe, ni une obligation à souscrire sans réflexion — c'est une décision à prendre en fonction d'un calcul concret de tes besoins réels, comme n'importe quel autre choix financier de ton activité.</div>\n      ",
        "keypoints": [
          "Une prévoyance complémentaire peut couvrir : complément de revenu en arrêt, accidents du travail, invalidité, décès.",
          "Le montant réel de son indemnité journalière légale (module 2) aide à évaluer concrètement le besoin d'une prévoyance.",
          "Le niveau de risque physique de l'activité influence directement la pertinence d'une couverture complémentaire.",
          "Comparer plusieurs devis à garanties comparables reste le seul moyen fiable d'évaluer un tarif de prévoyance juste."
        ]
      },
      {
        "id": "ps5l2",
        "title": "Ce qu'il faut vérifier chaque année",
        "html": "\n      <p>La protection sociale d'un indépendant n'est pas un sujet à régler une fois pour toutes : plusieurs éléments méritent une vérification régulière, idéalement à date fixe chaque année.</p>\n      <h4>Les éléments à vérifier annuellement</h4>\n      <ul>\n        <li><strong>Ton relevé de carrière</strong> sur info-retraite.fr, pour confirmer que les trimestres attendus ont bien été validés selon ton chiffre d'affaires réel.</li>\n        <li><strong>Ton revenu annuel moyen (RAAM)</strong>, pour savoir si tu te situes toujours au-dessus du seuil d'indemnisation en cas d'arrêt maladie.</li>\n        <li><strong>Tes contrats de prévoyance ou d'assurance</strong>, pour vérifier qu'ils correspondent toujours à ton activité actuelle (un changement d'activité peut modifier le niveau de risque couvert).</li>\n        <li><strong>Ta situation personnelle</strong> : un projet de naissance, un changement de statut familial, ou une évolution de ton activité peuvent justifier d'ajuster ta couverture.</li>\n      </ul>\n      <h4>Pourquoi une vérification annuelle plutôt que ponctuelle</h4>\n      <p>Les seuils et montants évoluent chaque année (comme on l'a vu tout au long de cette formation pour 2026), et ta propre situation professionnelle change également. Une vérification régulière, plutôt qu'un contrôle fait une seule fois au démarrage de l'activité, évite de fonctionner avec des informations obsolètes pendant plusieurs années.</p>\n      <h4>Un moment simple pour intégrer cette vérification</h4>\n      <p>Le moment de ta déclaration de revenus annuelle (2042-C-PRO, voir la formation « Micro-entreprise 2026 ») ou celui de ton bilan de trésorerie annuel (voir la formation « Gérer sa trésorerie et anticiper les coups durs ») constituent des occasions naturelles pour intégrer cette vérification de protection sociale, sans avoir à créer un rendez-vous supplémentaire dans ton calendrier.</p>\n      <div class=\"callout\"><strong>Le bon réflexe :</strong> associe cette vérification annuelle à un rendez-vous que tu as déjà l'habitude de tenir (déclaration fiscale, bilan de trésorerie), plutôt que d'espérer t'en souvenir seul·e sans aucun repère dans le calendrier.</div>\n      ",
        "keypoints": [
          "Vérifie chaque année : relevé de carrière, revenu annuel moyen, contrats de prévoyance, et évolution de ta situation personnelle.",
          "Les seuils et montants évoluent chaque année, rendant une vérification ponctuelle rapidement obsolète.",
          "Associer cette vérification à un rendez-vous déjà existant (déclaration fiscale, bilan de trésorerie) facilite sa mise en place durable.",
          "Un changement d'activité ou de situation personnelle peut justifier d'ajuster sa couverture de prévoyance."
        ]
      },
      {
        "id": "ps5l3",
        "title": "Plan d'action : ta checklist de protection sociale",
        "html": "\n      <p>Cette dernière leçon rassemble, sous forme de checklist, l'ensemble des points vus dans cette formation — pour agir concrètement plutôt que de garder ces informations à l'état de connaissance théorique.</p>\n      <h4>Ta checklist de protection sociale</h4>\n      <div class=\"script-block\">☐ J'ai créé mes accès ameli.fr et info-retraite.fr\n☐ J'ai vérifié mon rattachement exact (régime général ou CIPAV selon mon activité)\n☐ J'ai calculé mon revenu annuel moyen (RAAM) des 3 dernières années\n☐ Je sais si je me situe au-dessus ou en dessous du seuil d'indemnisation arrêt maladie\n☐ J'ai calculé le montant approximatif de mon indemnité journalière réelle\n☐ J'ai vérifié si mon activité m'expose à un risque physique justifiant une assurance AT/MP volontaire\n☐ Si je prévois une naissance : j'ai vérifié ma condition d'affiliation et engagé les démarches à temps\n☐ J'ai consulté mon relevé de carrière pour vérifier mes trimestres validés\n☐ J'ai une idée claire de ma pension de retraite complémentaire estimée\n☐ J'ai évalué si une prévoyance complémentaire correspond à mes besoins réels\n☐ J'ai prévu une date annuelle de vérification de l'ensemble de ces points</div>\n      <h4>Comment utiliser cette checklist</h4>\n      <p>Complète-la progressivement, sans chercher à tout régler en une seule fois : certains points (calcul du RAAM, consultation du relevé de carrière) se font en quelques minutes ; d'autres (choix d'une prévoyance) méritent une réflexion plus posée, éventuellement avec l'aide d'un conseiller spécialisé.</p>\n      <h4>Le message de clôture de cette formation</h4>\n      <p>La protection sociale d'un indépendant n'est ni aussi absente qu'on le craint parfois, ni aussi complète qu'on pourrait l'espérer. Elle se situe entre les deux, avec des règles précises qu'il vaut mieux connaître à l'avance. Cette connaissance ne supprime pas les imprévus de la vie, mais elle permet d'y faire face avec des choix éclairés, plutôt qu'avec la découverte tardive et stressante de ce qui aurait pu être anticipé.</p>\n      <div class=\"callout\"><strong>Pour aller plus loin :</strong> les formations « Gérer sa trésorerie et anticiper les coups durs » et « Micro-entreprise 2026 » complètent naturellement cette formation, respectivement sur la constitution d'une réserve financière et sur le cadre administratif global de ton activité.</div>\n      ",
        "keypoints": [
          "La checklist reprend tous les points de la formation : accès aux plateformes, calcul du RAAM, vérification des trimestres, choix de prévoyance.",
          "Cette checklist se complète progressivement, certains points se réglant en quelques minutes, d'autres nécessitant plus de réflexion.",
          "La protection sociale d'un indépendant se situe entre l'absence totale et une couverture complète, avec des règles précises à connaître.",
          "Les formations Trésorerie et Micro-entreprise 2026 complètent naturellement cette formation sur la réserve financière et le cadre administratif."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Que peut couvrir une prévoyance complémentaire, en plus du régime obligatoire ?",
        "options": [
          "Rien de plus que le régime obligatoire",
          "Un complément de revenu en arrêt, les accidents du travail, l'invalidité et le décès",
          "Uniquement la retraite de base",
          "Uniquement les frais de santé courants"
        ],
        "correct": 1,
        "explain": "La prévoyance complémentaire comble plusieurs limites identifiées dans le régime obligatoire de base."
      },
      {
        "q": "Pourquoi vérifier sa protection sociale chaque année plutôt qu'une seule fois ?",
        "options": [
          "Ce n'est jamais nécessaire de revérifier",
          "Les seuils et montants évoluent chaque année, et la situation personnelle change aussi",
          "Parce que la loi l'exige formellement chaque année",
          "Cela n'a aucun intérêt pratique"
        ],
        "correct": 1,
        "explain": "Les paramètres changent chaque année, rendant une vérification unique rapidement obsolète."
      },
      {
        "q": "À quel moment est-il pratique d'intégrer cette vérification annuelle ?",
        "options": [
          "Il n'existe pas de bon moment",
          "En l'associant à un rendez-vous déjà existant, comme la déclaration fiscale annuelle",
          "Uniquement le jour de son anniversaire",
          "Jamais, il faut un rendez-vous entièrement séparé"
        ],
        "correct": 1,
        "explain": "Associer cette vérification à un rendez-vous déjà pris facilite sa réalisation durable."
      },
      {
        "q": "Quel est le message central de cette formation sur la protection sociale des indépendants ?",
        "options": [
          "Elle est totalement absente pour ce statut",
          "Elle est aussi complète que pour un salarié, sans aucune différence",
          "Elle existe réellement mais suit des règles différentes, avec certains trous à connaître",
          "Elle ne concerne que les professions libérales"
        ],
        "correct": 2,
        "explain": "La protection sociale des indépendants est réelle mais différente de celle des salariés, avec des limites précises à anticiper."
      },
      {
        "q": "Quelles formations du catalogue Klar complètent naturellement celle-ci ?",
        "options": [
          "Aucune autre formation n'est liée à ce sujet",
          "Gérer sa trésorerie et anticiper les coups durs, et Micro-entreprise 2026",
          "Uniquement la formation Organisation",
          "Uniquement la formation Tarifs"
        ],
        "correct": 1,
        "explain": "Ces deux formations complètent respectivement la dimension financière et le cadre administratif global abordés ici."
      }
    ]
  }
];
