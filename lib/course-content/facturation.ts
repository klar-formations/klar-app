import type { CourseModuleData } from "../course-player/types";

export const modules: CourseModuleData[] = [
  {
    "id": "f1",
    "title": "Poser les bases",
    "icon": "doc",
    "desc": "Les règles d'une facturation saine, acomptes et échéances, et ce qu'il faut écrire dans ses CGV.",
    "lessons": [
      {
        "id": "f1l1",
        "title": "Les règles d'une facturation saine",
        "html": "\n      <p>Une facturation saine ne se limite pas à envoyer un document conforme : elle pose, dès le départ, un cadre qui protège ta trésorerie et réduit fortement le risque d'impayé. Voici les règles fondamentales à respecter systématiquement.</p>\n      <h4>Formaliser avant de commencer, jamais après</h4>\n      <p>Un devis signé (ou un accord écrit clair) avant le début de toute prestation protège les deux parties. Démarrer un travail sur un simple accord oral, même avec un client de confiance, complique énormément toute réclamation en cas de désaccord ultérieur sur le prix ou le périmètre.</p>\n      <h4>Ne jamais livrer l'intégralité avant paiement complet</h4>\n      <p>Livrer 100 % du travail avant d'avoir reçu 100 % du paiement retire tout levier de négociation en cas de retard. Un acompte à la commande, puis un solde à la livraison (ou un paiement échelonné pour les missions longues), garde toujours une carte en main tant que le paiement n'est pas soldé.</p>\n      <h4>Facturer rapidement, sans délai</h4>\n      <p>Chaque jour qui passe entre la fin d'une prestation et l'envoi de la facture retarde d'autant le paiement potentiel. Facture dans les 24 à 48h suivant la livraison ou la fin de la mission, pendant que le service rendu est encore présent à l'esprit du client.</p>\n      <h4>Des conditions de paiement claires, écrites, et jamais implicites</h4>\n      <p>Le délai de paiement, le mode de règlement accepté, et les conséquences d'un retard doivent être écrits noir sur blanc — sur le devis, la facture, et idéalement dans des conditions générales de vente (voir leçon 3). Une condition simplement évoquée à l'oral n'a presque aucune valeur en cas de litige.</p>\n      <h4>Garder une trace de chaque échange important</h4>\n      <p>Même pour un client de longue date, résume par écrit (e-mail) toute validation de périmètre, de délai ou de prix qui aurait été discutée oralement ou en visio. Cette habitude, simple à prendre, évite la majorité des désaccords sur ce qui avait \"vraiment\" été convenu.</p>\n      <div class=\"callout\"><strong>Le principe fondamental :</strong> une facturation saine n'est pas une question de méfiance envers tes clients — c'est un cadre professionnel standard qui protège ta trésorerie sans nuire à la relation, bien au contraire : un cadre clair rassure un bon client autant qu'il dissuade un mauvais payeur.</div>\n      ",
        "keypoints": [
          "Formalise toujours un accord écrit avant de démarrer une prestation, jamais après.",
          "Ne livre jamais l'intégralité du travail avant d'avoir reçu l'intégralité du paiement.",
          "Facture rapidement, dans les 24 à 48h suivant la fin de la prestation.",
          "Garde toujours une trace écrite des validations importantes, même après un échange oral."
        ]
      },
      {
        "id": "f1l2",
        "title": "Acomptes, échéances et conditions de paiement",
        "html": "\n      <p>La structure de paiement que tu choisis pour chaque mission influence directement ton risque d'impayé et ta trésorerie. Voici comment la construire intelligemment.</p>\n      <h4>Le principe de l'acompte à la commande</h4>\n      <p>Un acompte de 30 à 50 % à la signature du devis est une pratique standard pour une prestation ponctuelle. Il engage réellement le client au-delà d'un simple accord verbal, et sécurise ton démarrage de mission.</p>\n      <h4>Le paiement échelonné pour les missions longues</h4>\n      <p>Pour une mission en plusieurs phases, fractionne le paiement par étape validée plutôt que d'attendre la toute fin du projet pour être payé. Cette structure limite fortement le risque financier en cas d'interruption du projet en cours de route, côté client comme côté prestataire.</p>\n      <h4>Définir un délai de paiement clair</h4>\n      <p>Le délai légal maximal entre professionnels en France est de 60 jours à compter de la date d'émission de la facture (ou 45 jours fin de mois), sauf accord contraire mentionné explicitement sur la facture. En pratique, pour un freelance ou micro-entrepreneur, un délai de paiement à réception ou à 15-30 jours reste largement recommandé, pour limiter ton exposition au risque de trésorerie.</p>\n      <h4>Anticiper les modes de paiement acceptés</h4>\n      <p>Précise dès le devis les moyens de paiement que tu acceptes (virement, carte bancaire, chèque...) — cela évite les allers-retours au moment de régler, et accélère mécaniquement l'encaissement.</p>\n      <h4>Les pénalités de retard, un outil dissuasif autant que curatif</h4>\n      <p>Mentionner sur chaque facture le taux de pénalités de retard applicable et l'indemnité forfaitaire de 40 € pour frais de recouvrement (obligatoire pour tout client professionnel) a un effet dissuasif réel, même si tu ne les appliques pas systématiquement en pratique — leur simple présence signale un cadre professionnel sérieux.</p>\n      <div class=\"callout\"><strong>Un repère pour construire ta structure de paiement :</strong> plus la mission est longue ou le montant élevé, plus il est justifié de fractionner le paiement en plusieurs étapes — ne jamais faire dépendre toute ta rémunération d'un unique paiement final, plusieurs mois après le début du projet.</div>\n      ",
        "keypoints": [
          "Un acompte de 30 à 50 % à la commande est une pratique standard pour sécuriser le démarrage d'une mission.",
          "Pour les missions longues, fractionne le paiement par phase validée plutôt que d'attendre la fin du projet.",
          "Le délai légal maximal entre professionnels est de 60 jours, mais un délai plus court reste recommandé pour un indépendant.",
          "Mentionner les pénalités de retard sur chaque facture a un effet dissuasif, même sans application systématique."
        ]
      },
      {
        "id": "f1l3",
        "title": "Ce qu'il faut écrire dans ses conditions générales",
        "html": "\n      <p>Des conditions générales de vente (CGV) claires, même simples, structurent ta relation commerciale et te protègent en cas de désaccord. Voici les éléments essentiels à y faire figurer.</p>\n      <h4>Les modalités de paiement</h4>\n      <p>Délai de paiement, moyens acceptés, montant et modalités de l'acompte, conséquences d'un retard (pénalités, indemnité forfaitaire) — ces éléments, détaillés en leçon 2, doivent figurer explicitement dans tes CGV, pas seulement sur chaque devis pris isolément.</p>\n      <h4>Les modalités de réalisation de la prestation</h4>\n      <p>Nombre de révisions incluses, délai de réalisation standard, processus de validation des livrables : préciser ces éléments dans un document de référence évite de devoir les renégocier à chaque nouvelle mission.</p>\n      <h4>Les conditions d'annulation ou de report</h4>\n      <p>Que se passe-t-il si le client annule la mission après le versement de l'acompte ? Si le projet est mis en pause plusieurs mois par le client ? Prévoir ces cas à l'avance, même brièvement, évite des négociations inconfortables le jour où ils surviennent réellement.</p>\n      <h4>La propriété intellectuelle et les droits d'usage</h4>\n      <p>Selon ton activité (graphisme, développement, rédaction...), précise à quel moment les droits d'utilisation ou de propriété sont transférés au client — généralement après paiement intégral, et non dès la livraison du travail.</p>\n      <h4>La clause de responsabilité</h4>\n      <p>Une clause qui limite raisonnablement ta responsabilité en cas de problème indépendant de ta prestation (mauvaise utilisation du livrable par le client, par exemple) te protège juridiquement, sans avoir besoin d'un contrat complexe pour autant.</p>\n      <h4>Comment mettre en place tes CGV</h4>\n      <p>Un document d'une à deux pages, rédigé une fois pour toutes et joint systématiquement à chaque devis (ou accessible sur ton site), suffit largement pour la majorité des activités de freelance ou de micro-entrepreneur. Ce n'est pas nécessairement un contrat complexe rédigé par un avocat, sauf si ton activité présente des risques juridiques particuliers.</p>\n      <div class=\"callout\"><strong>Bon à savoir :</strong> pour une activité B2C (vente à des particuliers), des mentions légales obligatoires supplémentaires s'appliquent (droit de rétractation notamment) — vérifie ce point si tu vends directement à des particuliers.</div>\n      ",
        "keypoints": [
          "Les CGV doivent détailler les modalités de paiement, de réalisation, d'annulation et de propriété intellectuelle.",
          "Prévoir les cas d'annulation ou de report à l'avance évite des négociations inconfortables le moment venu.",
          "Une clause de responsabilité raisonnable protège juridiquement sans nécessiter un contrat complexe.",
          "Un document d'une à deux pages, joint systématiquement au devis, suffit pour la majorité des activités indépendantes."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Que faut-il faire avant de démarrer toute prestation ?",
        "options": [
          "Rien de particulier, l'accord oral suffit",
          "Formaliser un accord écrit (devis signé ou équivalent)",
          "Attendre la fin du projet pour tout formaliser",
          "Facturer immédiatement 100% du montant"
        ],
        "correct": 1,
        "explain": "Un accord écrit avant le début de la prestation protège les deux parties en cas de désaccord ultérieur."
      },
      {
        "q": "Quel est le délai légal maximal de paiement entre professionnels en France ?",
        "options": [
          "15 jours",
          "30 jours",
          "60 jours à compter de l'émission de la facture",
          "Il n'y a pas de délai légal"
        ],
        "correct": 2,
        "explain": "Le délai légal maximal est de 60 jours à compter de l'émission de la facture, sauf accord contraire précisé."
      },
      {
        "q": "Pourquoi fractionner le paiement pour une mission longue ?",
        "options": [
          "Ce n'est jamais recommandé",
          "Cela limite le risque financier en cas d'interruption du projet",
          "Cela complique inutilement la gestion",
          "Cela n'a aucun effet sur le risque d'impayé"
        ],
        "correct": 1,
        "explain": "Le paiement par phase limite l'exposition au risque si le projet s'arrête en cours de route."
      },
      {
        "q": "Que doivent préciser les conditions générales de vente concernant la propriété intellectuelle ?",
        "options": [
          "Rien, ce sujet n'a pas besoin d'être précisé",
          "À quel moment les droits sont transférés au client, généralement après paiement intégral",
          "Les droits sont toujours transférés immédiatement à la livraison",
          "Les droits restent toujours chez le prestataire"
        ],
        "correct": 1,
        "explain": "Préciser le moment du transfert des droits (généralement après paiement complet) protège le prestataire."
      },
      {
        "q": "Quel est l'effet de mentionner les pénalités de retard sur une facture ?",
        "options": [
          "Aucun effet réel",
          "Un effet dissuasif, même sans application systématique",
          "Cela rend la facture invalide",
          "Cela est interdit par la loi"
        ],
        "correct": 1,
        "explain": "La simple présence de cette mention signale un cadre professionnel sérieux et dissuade les retards."
      }
    ]
  },
  {
    "id": "f2",
    "title": "Facturer correctement",
    "icon": "chat",
    "desc": "Les mentions obligatoires, le bon moment pour facturer, et les réflexes pour être payé plus vite.",
    "lessons": [
      {
        "id": "f2l1",
        "title": "Les mentions obligatoires (rappel)",
        "html": "\n      <p>Une facture incomplète ou mal formée peut, à elle seule, retarder un paiement — certains services comptables d'entreprises clientes bloquent systématiquement le règlement d'une facture non conforme. Voici un rappel synthétique des mentions essentielles.</p>\n      <h4>Les informations d'identification</h4>\n      <ul>\n        <li>Ton nom ou ta dénomination commerciale, ton adresse, ton numéro SIREN/SIRET.</li>\n        <li>Le nom et l'adresse du client, avec son numéro SIREN/SIRET pour un client professionnel.</li>\n      </ul>\n      <h4>Les informations sur la facture elle-même</h4>\n      <ul>\n        <li>Un numéro de facture unique, suivant une séquence chronologique continue.</li>\n        <li>La date d'émission, et la date de la prestation si elle diffère.</li>\n        <li>La désignation précise de chaque prestation, avec son prix unitaire hors taxes.</li>\n      </ul>\n      <h4>Les informations liées à la TVA et au paiement</h4>\n      <ul>\n        <li>La mention TVA applicable, ou « TVA non applicable, art. 293 B du CGI » en franchise de TVA.</li>\n        <li>La date d'échéance du paiement.</li>\n        <li>Pour un client professionnel : le taux des pénalités de retard et la mention de l'indemnité forfaitaire de 40 € pour frais de recouvrement.</li>\n      </ul>\n      <h4>Pourquoi ce rappel compte particulièrement dans cette formation</h4>\n      <p>Au-delà de l'obligation légale, une facture complète et professionnelle envoie un signal de sérieux qui, statistiquement, accélère le traitement côté client — notamment dans les entreprises où la facture passe par un service comptable avant validation du paiement.</p>\n      <div class=\"callout\"><strong>Pour aller plus loin :</strong> le détail complet de chaque mention, avec les cas particuliers (facturation à l'étranger, facturation électronique...), est couvert dans la formation \"Micro-entreprise 2026\", module 2.</div>\n      ",
        "keypoints": [
          "Une facture incomplète peut, à elle seule, retarder un paiement côté client.",
          "Les mentions essentielles couvrent l'identification, la numérotation, la TVA et les conditions de paiement.",
          "Pour un client professionnel, les pénalités de retard et l'indemnité de 40 € doivent être mentionnées.",
          "Une facture professionnelle et complète accélère souvent le traitement du paiement côté client."
        ]
      },
      {
        "id": "f2l2",
        "title": "Quand envoyer sa facture",
        "html": "\n      <p>Le moment d'envoi d'une facture influence directement la rapidité du paiement — un point souvent sous-estimé par les indépendants débutants.</p>\n      <h4>Facturer immédiatement après la livraison</h4>\n      <p>Le meilleur moment pour envoyer une facture est le jour même, ou au plus tard dans les 24 à 48h suivant la fin de la prestation ou la livraison du travail. Plus le délai s'allonge, plus le service rendu s'éloigne dans l'esprit du client, et plus le paiement risque de glisser dans la liste des priorités.</p>\n      <h4>Le cas des acomptes</h4>\n      <p>La facture d'acompte s'envoie dès la signature du devis, avant même le démarrage de la prestation — c'est elle qui déclenche officiellement le début de la mission une fois réglée.</p>\n      <h4>Le cas des missions récurrentes</h4>\n      <p>Pour une prestation récurrente (abonnement, accompagnement mensuel), fixe une date d'émission fixe chaque mois (par exemple, le 1er ou le dernier jour du mois), pour installer une routine claire côté client et côté prestataire.</p>\n      <h4>Le cas des missions longues en plusieurs phases</h4>\n      <p>Facture chaque phase dès sa validation par le client, sans attendre la fin de l'ensemble du projet. Ce rythme régulier sécurise ta trésorerie tout au long de la mission, plutôt que de la faire dépendre d'un unique paiement final.</p>\n      <h4>Ne jamais laisser une facture \"en attente\" de ton côté</h4>\n      <p>Certains indépendants retardent volontairement l'envoi d'une facture par manque de temps administratif ou par gêne à réclamer un paiement. Ce réflexe, bien compréhensible, coûte directement de la trésorerie : plus une facture part tard, plus le paiement arrive tard.</p>\n      <div class=\"callout\"><strong>Le bon réflexe à automatiser :</strong> facture au moment même de la livraison, pas \"quand tu auras le temps\" — un modèle de facture pré-rempli (voir module 5) réduit ce temps de friction à quelques minutes.</div>\n      ",
        "keypoints": [
          "Facture idéalement le jour même de la livraison, ou au plus tard dans les 24 à 48h.",
          "La facture d'acompte s'envoie dès la signature du devis, avant le début de la mission.",
          "Pour les missions récurrentes, fixe une date d'émission mensuelle stable.",
          "Retarder l'envoi d'une facture par manque de temps administratif coûte directement de la trésorerie."
        ]
      },
      {
        "id": "f2l3",
        "title": "Les bons réflexes pour être payé plus vite",
        "html": "\n      <p>Au-delà des règles de base, quelques réflexes concrets accélèrent significativement la vitesse à laquelle tes factures sont réglées.</p>\n      <h4>Faciliter le paiement au maximum</h4>\n      <p>Propose plusieurs moyens de paiement (virement, carte bancaire en ligne...), et indique clairement toutes les coordonnées nécessaires directement sur la facture (IBAN, lien de paiement). Chaque étape supplémentaire que le client doit faire pour te payer retarde mécaniquement le règlement.</p>\n      <h4>Demander la bonne personne dès le départ</h4>\n      <p>Pour un client professionnel, identifie dès le début de la mission qui, dans l'entreprise, traite réellement les factures (souvent différent de ton interlocuteur principal sur le projet). Envoyer la facture directement à la bonne personne ou au bon service évite un délai de transmission interne inutile.</p>\n      <h4>Vérifier la réception de la facture</h4>\n      <p>Un court message quelques jours après l'envoi, du type « Je voulais m'assurer que la facture vous est bien parvenue », permet de détecter rapidement un problème (mauvaise adresse e-mail, facture égarée) avant qu'il ne se transforme en retard de plusieurs semaines.</p>\n      <h4>Proposer un escompte pour paiement rapide (avec prudence)</h4>\n      <p>Une petite réduction pour un paiement anticipé (par exemple sous 8 jours) peut inciter certains clients à régler plus vite. Cette pratique doit rester ponctuelle et bien calculée pour ne pas rogner excessivement ta marge — ce n'est pas un réflexe à généraliser systématiquement.</p>\n      <h4>Garder un ton professionnel et non intrusif</h4>\n      <p>Réclamer un paiement dans les temps n'a rien d'agressif ni de gênant : c'est une démarche professionnelle normale, présentée avec un ton neutre et factuel plutôt que hésitant ou accusateur.</p>\n      <div class=\"callout\"><strong>Le principe général :</strong> chaque friction supprimée dans le processus de paiement (moyens multiples, bonne personne contactée, vérification de réception) réduit statistiquement le délai moyen de règlement, bien avant même d'en arriver à une relance.</div>\n      ",
        "keypoints": [
          "Faciliter le paiement (moyens multiples, coordonnées claires) réduit mécaniquement le délai de règlement.",
          "Identifie dès le départ la bonne personne à contacter pour le traitement des factures côté client.",
          "Vérifier la bonne réception de la facture quelques jours après l'envoi détecte les problèmes tôt.",
          "Réclamer un paiement dans les temps est une démarche professionnelle normale, jamais gênante en soi."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Pourquoi une facture incomplète peut-elle retarder un paiement ?",
        "options": [
          "Ce n'est jamais le cas en pratique",
          "Certains services comptables bloquent le règlement d'une facture non conforme",
          "Une facture incomplète n'a aucun impact",
          "La loi interdit de la corriger ensuite"
        ],
        "correct": 1,
        "explain": "Les services comptables de certaines entreprises exigent une facture conforme avant tout règlement."
      },
      {
        "q": "Quand faut-il idéalement envoyer une facture ?",
        "options": [
          "Plusieurs semaines après la prestation",
          "Le jour même ou dans les 24 à 48h suivant la livraison",
          "Une fois par an, en une seule fois",
          "Uniquement si le client la demande"
        ],
        "correct": 1,
        "explain": "Facturer rapidement limite le risque que le paiement glisse dans les priorités du client."
      },
      {
        "q": "Quand la facture d'acompte doit-elle être envoyée ?",
        "options": [
          "Après la fin de la mission",
          "Dès la signature du devis, avant le début de la prestation",
          "Jamais, l'acompte ne se facture pas",
          "Un mois après le début du projet"
        ],
        "correct": 1,
        "explain": "La facture d'acompte déclenche officiellement le début de la mission, une fois réglée."
      },
      {
        "q": "Que faut-il vérifier dès le début d'une mission avec un client professionnel ?",
        "options": [
          "Rien de particulier",
          "Qui, dans l'entreprise, traite réellement les factures",
          "Le nombre d'employés de l'entreprise",
          "L'adresse personnelle du dirigeant"
        ],
        "correct": 1,
        "explain": "Envoyer la facture directement à la bonne personne évite un délai de transmission interne inutile."
      },
      {
        "q": "Comment percevoir la démarche de réclamer un paiement dans les temps ?",
        "options": [
          "Comme une démarche gênante à éviter",
          "Comme une démarche professionnelle normale",
          "Comme un signe de méfiance excessive",
          "Comme une perte de temps inutile"
        ],
        "correct": 1,
        "explain": "Réclamer un paiement dans les délais convenus est une pratique professionnelle standard, pas un acte agressif."
      }
    ]
  },
  {
    "id": "f3",
    "title": "Relancer sans s'épuiser",
    "icon": "megaphone",
    "desc": "Le calendrier de relance efficace, les messages qui fonctionnent, et les situations particulières.",
    "lessons": [
      {
        "id": "f3l1",
        "title": "Le calendrier de relance efficace",
        "html": "\n      <p>Une relance de facture impayée suit une progression structurée, du ton le plus léger au plus ferme, avec un calendrier précis pour ne pas laisser traîner la situation.</p>\n      <h4>Le calendrier recommandé</h4>\n      <ul>\n        <li><strong>J+2 à J+3 après l'échéance :</strong> une première relance légère, qui suppose un simple oubli.</li>\n        <li><strong>J+8 à J+10 après l'échéance :</strong> une deuxième relance, plus directe, avec rappel du montant et de la date d'échéance dépassée.</li>\n        <li><strong>J+15 à J+20 après l'échéance :</strong> une troisième relance, plus ferme, qui mentionne explicitement les pénalités de retard applicables.</li>\n        <li><strong>Au-delà de J+30 :</strong> passage à la procédure amiable structurée, détaillée au module 4 (mise en demeure).</li>\n      </ul>\n      <h4>Pourquoi respecter un calendrier plutôt que d'improviser</h4>\n      <p>Un calendrier défini à l'avance évite deux écueils fréquents : relancer trop tard par gêne (le retard s'accumule silencieusement), ou relancer de façon désordonnée et anxieuse (ce qui fragilise ta posture professionnelle face au client).</p>\n      <h4>Adapter le rythme selon le profil du client</h4>\n      <p>Un client de longue date, habituellement ponctuel, mérite peut-être un délai un peu plus souple avant la première relance. À l'inverse, un nouveau client ou un profil déjà repéré comme peu réactif justifie un calendrier plus strict, appliqué sans exception.</p>\n      <h4>Documenter chaque relance</h4>\n      <p>Note la date et le contenu de chaque relance envoyée (simple copie d'e-mail suffit). Cette trace devient précieuse si la situation évolue vers une procédure plus formelle (module 4).</p>\n      <div class=\"callout\"><strong>Le principe à retenir :</strong> une relance envoyée à temps, avec un calendrier clair, n'est jamais perçue comme agressive par un client de bonne foi — et elle protège ta trésorerie face à ceux qui le sont moins.</div>\n      ",
        "keypoints": [
          "Le calendrier de relance progresse en fermeté : J+2/3, J+8/10, J+15/20, puis procédure amiable après J+30.",
          "Un calendrier défini à l'avance évite de relancer trop tard par gêne ou de façon désordonnée.",
          "Adapte le rythme selon le profil et l'historique de paiement du client concerné.",
          "Documente systématiquement chaque relance envoyée, en vue d'une éventuelle procédure future."
        ]
      },
      {
        "id": "f3l2",
        "title": "Les messages de relance qui fonctionnent",
        "html": "\n      <p>Comme pour une relance commerciale, une relance de facture impayée efficace reste factuelle, claire, et progressive dans son ton. Voici des modèles pour chaque étape du calendrier.</p>\n      <h4>Première relance (J+2/3) — légère</h4>\n      <div class=\"script-block\">Bonjour [Prénom],\n\nJe me permets un petit rappel concernant la facture n°[numéro] du [date], d'un montant de [montant], dont l'échéance était fixée au [date d'échéance].\n\nIl s'agit probablement d'un simple oubli — n'hésitez pas à revenir vers moi si un justificatif ou une information complémentaire est nécessaire de votre côté.\n\nBelle journée,\n[Prénom]</div>\n      <h4>Deuxième relance (J+8/10) — directe</h4>\n      <div class=\"script-block\">Bonjour [Prénom],\n\nJe reviens vers vous concernant la facture n°[numéro], toujours en attente de règlement à ce jour. L'échéance était fixée au [date], soit un retard de [X] jours.\n\nPourriez-vous me confirmer la date à laquelle le paiement sera effectué ? Je reste bien sûr disponible en cas de difficulté particulière de votre côté.\n\nCordialement,\n[Prénom]</div>\n      <h4>Troisième relance (J+15/20) — ferme</h4>\n      <div class=\"script-block\">Bonjour [Prénom],\n\nSauf erreur de ma part, la facture n°[numéro] d'un montant de [montant] reste impayée à ce jour, avec un retard de [X] jours par rapport à l'échéance convenue.\n\nJe vous rappelle que des pénalités de retard, ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement, sont applicables conformément aux mentions figurant sur la facture.\n\nJe souhaite régler cette situation rapidement et à l'amiable : merci de me contacter dans les meilleurs délais pour convenir d'une solution.\n\nCordialement,\n[Prénom]</div>\n      <div class=\"callout\"><strong>Un point commun aux trois messages :</strong> chacun reste factuel — montant, numéro de facture, date d'échéance — plutôt qu'émotionnel. C'est ce qui permet de garder une posture professionnelle, même à la troisième relance.</div>\n      ",
        "keypoints": [
          "Chaque relance doit rester factuelle : numéro de facture, montant, date d'échéance précise.",
          "La première relance suppose un simple oubli ; la troisième mentionne explicitement les pénalités applicables.",
          "Le ton progresse en fermeté au fil des relances, sans jamais devenir accusateur ou émotionnel.",
          "Ces trois modèles sont à adapter avec le contexte réel de chaque situation avant envoi."
        ]
      },
      {
        "id": "f3l3",
        "title": "Que faire selon les situations (silence, promesse non tenue…)",
        "html": "\n      <p>Toutes les situations d'impayé ne se ressemblent pas. Voici comment adapter ta réponse selon les cas les plus fréquents.</p>\n      <h4>Silence total après plusieurs relances</h4>\n      <p>Si le client ne répond à aucune des relances du calendrier, passe directement à l'étape suivante sans attendre indéfiniment une réponse : la mise en demeure (module 4). Le silence prolongé, contrairement à une relance commerciale classique, ne doit pas être interprété avec la même patience — il s'agit ici d'argent déjà dû pour un travail déjà livré.</p>\n      <h4>Le client répond mais reporte indéfiniment</h4>\n      <p>Face à des promesses répétées non tenues (« je règle la semaine prochaine », plusieurs fois de suite), demande un engagement écrit et daté précisément, plutôt qu'une nouvelle promesse orale ou vague.</p>\n      <div class=\"script-block\">Je comprends la situation. Pourriez-vous me confirmer par écrit une date précise de règlement ? Cela me permettra d'ajuster mon suivi en conséquence.</div>\n      <h4>Le client conteste le montant ou la prestation</h4>\n      <p>Si la contestation est sincère, écoute et examine sa demande objectivement (elle est parfois légitime). Si elle intervient tardivement, uniquement au moment de payer, alors qu'aucun désaccord n'avait été soulevé avant, elle mérite d'être traitée avec plus de fermeté — en rappelant les éléments validés (devis signé, échanges antérieurs).</p>\n      <h4>Le client invoque une difficulté financière réelle</h4>\n      <p>Une difficulté de trésorerie sincère mérite une réponse humaine : proposer un paiement échelonné plutôt qu'un blocage total peut permettre de récupérer la somme due sans envenimer la relation, si le client reste transparent et coopératif dans sa démarche.</p>\n      <h4>Le client est injoignable (numéro, e-mail ne fonctionnent plus)</h4>\n      <p>Documente chaque tentative de contact (dates, canaux utilisés), et envisage une mise en demeure envoyée par courrier recommandé à la dernière adresse connue — cette démarche reste valable juridiquement même sans réponse du destinataire.</p>\n      <div class=\"callout\"><strong>Le repère général :</strong> adapte le ton à la situation réelle, mais jamais la fermeté sur le fond — un impayé reste un impayé, quelle que soit la façon dont le client le justifie.</div>\n      ",
        "keypoints": [
          "Face à un silence total après plusieurs relances, passe à la mise en demeure sans attendre indéfiniment.",
          "Face à des promesses répétées non tenues, demande un engagement écrit et daté précisément.",
          "Une contestation tardive du montant, jamais évoquée avant, mérite d'être traitée avec fermeté.",
          "Une difficulté financière sincère peut justifier un paiement échelonné, sans pour autant abandonner la créance."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quand envoyer la première relance après une échéance dépassée ?",
        "options": [
          "Immédiatement le jour même",
          "J+2 à J+3 après l'échéance",
          "Après 2 mois",
          "Il ne faut jamais relancer avant 6 mois"
        ],
        "correct": 1,
        "explain": "Un délai de 2 à 3 jours reste léger et suppose un simple oubli côté client."
      },
      {
        "q": "Que doit toujours contenir un message de relance ?",
        "options": [
          "Des menaces directes",
          "Des éléments factuels : numéro de facture, montant, date d'échéance",
          "Aucune information précise",
          "Une remise automatique"
        ],
        "correct": 1,
        "explain": "Rester factuel permet de garder une posture professionnelle tout au long du processus de relance."
      },
      {
        "q": "Que faire face à un silence total après plusieurs relances ?",
        "options": [
          "Continuer à attendre indéfiniment",
          "Passer à la mise en demeure sans attendre plus longtemps",
          "Abandonner immédiatement la créance",
          "Envoyer un cadeau au client"
        ],
        "correct": 1,
        "explain": "Un silence prolongé sur un impayé justifie de passer à l'étape formelle suivante, contrairement à une relance commerciale classique."
      },
      {
        "q": "Face à des promesses de paiement répétées non tenues, il vaut mieux :",
        "options": [
          "Accepter une nouvelle promesse orale vague",
          "Demander un engagement écrit avec une date précise",
          "Ne plus jamais relancer ce client",
          "Envoyer immédiatement un huissier"
        ],
        "correct": 1,
        "explain": "Un engagement écrit et daté est plus solide qu'une nouvelle promesse orale non vérifiable."
      },
      {
        "q": "Comment traiter une contestation du montant survenue uniquement au moment de payer ?",
        "options": [
          "L'accepter automatiquement sans vérification",
          "L'examiner avec fermeté en rappelant les éléments validés (devis, échanges)",
          "L'ignorer complètement",
          "Rembourser immédiatement sans discussion"
        ],
        "correct": 1,
        "explain": "Une contestation tardive, jamais évoquée avant, mérite d'être recadrée avec les preuves des accords passés."
      }
    ]
  },
  {
    "id": "f4",
    "title": "Gérer les impayés",
    "icon": "shield",
    "desc": "La procédure amiable étape par étape, la mise en demeure, et savoir quand lâcher ou s'acharner.",
    "lessons": [
      {
        "id": "f4l1",
        "title": "La procédure amiable étape par étape",
        "html": "\n      <p>Avant tout recours judiciaire, une procédure amiable structurée permet souvent de récupérer une créance sans frais ni délai excessif. Voici les étapes à suivre dans l'ordre.</p>\n      <h4>Étape 1 — Les relances classiques (déjà vues au module 3)</h4>\n      <p>Le calendrier de relance en trois temps constitue la première étape de toute procédure de recouvrement, avant tout passage à une démarche plus formelle.</p>\n      <h4>Étape 2 — La lettre de mise en demeure</h4>\n      <p>Si les relances restent sans effet, une mise en demeure formalise clairement la demande de paiement, avec un délai précis pour régulariser (généralement 8 à 15 jours). Elle se distingue d'une simple relance par sa formulation juridique et sa valeur de preuve en cas de procédure ultérieure (détaillée en leçon 2).</p>\n      <h4>Étape 3 — La tentative de médiation ou de conciliation</h4>\n      <p>Pour un désaccord partiel (contestation d'une partie de la prestation, par exemple), une médiation via un tiers (médiateur de la consommation pour un client particulier, conciliateur de justice pour un professionnel) permet parfois de débloquer la situation sans procédure judiciaire.</p>\n      <h4>Étape 4 — L'injonction de payer</h4>\n      <p>Sans réponse à la mise en demeure, tu peux saisir le tribunal compétent (tribunal de commerce pour un client professionnel, tribunal judiciaire pour un particulier) d'une demande d'injonction de payer — une procédure simplifiée, réalisable sans avocat pour les petits montants, qui ne nécessite pas d'audience si la créance est bien justifiée par des documents (devis signé, factures, relances).</p>\n      <h4>Étape 5 — Le recours à un professionnel du recouvrement</h4>\n      <p>Pour des montants significatifs ou des situations complexes, une société de recouvrement ou un avocat spécialisé peut prendre le relais, moyennant des frais généralement proportionnels à la somme récupérée.</p>\n      <div class=\"callout\"><strong>Un repère de proportionnalité :</strong> évalue toujours le rapport entre le montant dû, le temps et l'énergie nécessaires à chaque étape, et les chances réelles de récupération — ce point est approfondi en leçon 3.</div>\n      ",
        "keypoints": [
          "La procédure amiable suit une progression : relances, mise en demeure, médiation éventuelle, injonction de payer.",
          "La mise en demeure se distingue d'une relance classique par sa formulation juridique et sa valeur de preuve.",
          "L'injonction de payer est une procédure simplifiée, accessible sans avocat pour les petits montants.",
          "Le recours à un professionnel du recouvrement se justifie surtout pour des montants significatifs."
        ]
      },
      {
        "id": "f4l2",
        "title": "Mise en demeure et recours possibles",
        "html": "\n      <p>La mise en demeure est une étape charnière : elle marque le passage d'une simple relance à une démarche formelle, avec de réelles conséquences juridiques en cas de non-réponse.</p>\n      <h4>Ce que doit contenir une mise en demeure</h4>\n      <ul>\n        <li>La mention explicite « Mise en demeure » en objet ou en titre du courrier.</li>\n        <li>Le rappel précis de la créance : numéro de facture, montant, date d'échéance dépassée.</li>\n        <li>Un délai clair pour régulariser (généralement 8 à 15 jours à réception).</li>\n        <li>La mention des suites possibles en l'absence de réponse (procédure judiciaire, pénalités).</li>\n        <li>L'envoi en lettre recommandée avec accusé de réception, pour garantir une preuve de réception opposable.</li>\n      </ul>\n      <h4>Exemple de structure de mise en demeure</h4>\n      <div class=\"script-block\">Objet : Mise en demeure de payer\n\nMadame, Monsieur,\n\nJe vous mets en demeure de régler la facture n°[numéro] du [date], d'un montant de [montant] TTC, restée impayée malgré mes relances des [dates des relances précédentes].\n\nJe vous demande de procéder au règlement de cette somme dans un délai de [X] jours à compter de la réception de ce courrier.\n\nÀ défaut de règlement dans ce délai, je me réserve le droit d'engager toute procédure utile au recouvrement de cette créance, notamment une procédure d'injonction de payer.\n\nJe reste disponible pour trouver une solution amiable à cette situation.\n\n[Prénom Nom]</div>\n      <h4>Après l'envoi de la mise en demeure</h4>\n      <p>Trois scénarios possibles : le client paie (issue la plus fréquente, la mise en demeure ayant un effet dissuasif réel), le client propose un accord (échelonnement, par exemple), ou le client reste silencieux — auquel cas l'injonction de payer devient l'option suivante logique.</p>\n      <div class=\"callout\"><strong>Un point rassurant :</strong> une part importante des mises en demeure suffisent, à elles seules, à débloquer un paiement — l'aspect formel du courrier a souvent un effet que les relances classiques n'ont pas.</div>\n      ",
        "keypoints": [
          "Une mise en demeure doit être précise, chiffrée, avec un délai clair, et envoyée en recommandé avec accusé de réception.",
          "Elle marque le passage d'une simple relance à une démarche formelle aux conséquences juridiques réelles.",
          "Après une mise en demeure, trois issues sont possibles : paiement, accord amiable, ou silence persistant.",
          "L'effet dissuasif d'une mise en demeure suffit souvent, à lui seul, à débloquer la situation."
        ]
      },
      {
        "id": "f4l3",
        "title": "Quand lâcher et quand s'acharner",
        "html": "\n      <p>Toutes les créances impayées ne méritent pas d'être poursuivies jusqu'au bout. Savoir évaluer objectivement quand continuer et quand abandonner protège ton temps, ton énergie et ta santé mentale.</p>\n      <h4>Le calcul de proportionnalité à faire systématiquement</h4>\n      <p>Compare le montant dû au temps et à l'énergie que chaque étape supplémentaire va te demander. Une procédure judiciaire pour un petit montant peut coûter, en temps et en stress, davantage que ce qu'elle rapporterait en cas de succès.</p>\n      <h4>Les signaux qui justifient de continuer</h4>\n      <ul>\n        <li>Le montant dû est significatif par rapport à ton activité.</li>\n        <li>Le client dispose visiblement de ressources pour payer (activité en cours, autres signes de solvabilité).</li>\n        <li>Tu disposes de preuves solides (devis signé, échanges écrits, factures conformes).</li>\n        <li>D'autres clients ou partenaires pourraient être informés de l'issue, avec un enjeu de réputation.</li>\n      </ul>\n      <h4>Les signaux qui justifient de lâcher</h4>\n      <ul>\n        <li>Le montant est faible par rapport au temps et au coût d'une procédure judiciaire.</li>\n        <li>Le client est manifestement insolvable (entreprise en liquidation, par exemple) — récupérer la somme devient alors très improbable, quelle que soit la procédure engagée.</li>\n        <li>Le dossier manque de preuves solides pour espérer une issue favorable en cas de litige.</li>\n        <li>Le coût émotionnel de la poursuite dépasse largement le bénéfice financier espéré.</li>\n      </ul>\n      <h4>La créance irrécouvrable : une réalité à accepter parfois</h4>\n      <p>Certaines créances ne seront jamais récupérées, quels que soient les efforts engagés. Dans ce cas, la meilleure décision est souvent d'accepter la perte, de la passer en charge (fiscalement, une créance irrécouvrable peut faire l'objet d'un traitement comptable spécifique selon ton régime), et de réinvestir ton énergie dans des clients solvables.</p>\n      <div class=\"callout\"><strong>Le repère final :</strong> s'acharner sur une créance manifestement irrécouvrable coûte souvent plus cher, en temps et en énergie, que la somme elle-même. Savoir lâcher prise sur un dossier n'est pas un échec — c'est une décision économique rationnelle.</div>\n      ",
        "keypoints": [
          "Compare toujours le montant dû au coût réel (temps, énergie) de chaque étape supplémentaire de recouvrement.",
          "Un client manifestement insolvable rend la récupération très improbable, quelle que soit la procédure engagée.",
          "Des preuves solides (devis signé, échanges écrits) sont indispensables pour espérer une issue favorable.",
          "Accepter une créance irrécouvrable et réinvestir son énergie ailleurs est parfois la décision la plus rationnelle."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelle est la première étape de la procédure amiable de recouvrement ?",
        "options": [
          "L'injonction de payer directement",
          "Les relances classiques",
          "Le recours à un huissier immédiatement",
          "Aucune étape n'est nécessaire"
        ],
        "correct": 1,
        "explain": "Les relances classiques constituent toujours la première étape, avant toute démarche plus formelle."
      },
      {
        "q": "Comment doit être envoyée une mise en demeure ?",
        "options": [
          "Par SMS uniquement",
          "En lettre recommandée avec accusé de réception",
          "Oralement, par téléphone",
          "Cela n'a pas d'importance"
        ],
        "correct": 1,
        "explain": "L'envoi en recommandé avec accusé de réception garantit une preuve de réception opposable en cas de litige."
      },
      {
        "q": "Qu'est-ce qui distingue une mise en demeure d'une simple relance ?",
        "options": [
          "Rien, c'est la même chose",
          "Sa formulation juridique et sa valeur de preuve pour une procédure ultérieure",
          "Elle est toujours plus courte",
          "Elle ne peut jamais être suivie d'effet"
        ],
        "correct": 1,
        "explain": "La mise en demeure a une portée juridique plus formelle qu'une relance classique."
      },
      {
        "q": "Quel élément justifie de continuer à poursuivre une créance impayée ?",
        "options": [
          "Un montant très faible",
          "Des preuves solides et un client visiblement solvable",
          "Un client en liquidation judiciaire",
          "L'absence totale de documents"
        ],
        "correct": 1,
        "explain": "Des preuves solides et une solvabilité réelle du client augmentent les chances de récupération."
      },
      {
        "q": "Que faire face à une créance manifestement irrécouvrable ?",
        "options": [
          "S'acharner indéfiniment quel qu'en soit le coût",
          "Accepter la perte et réinvestir son énergie ailleurs",
          "Ignorer complètement la situation sans aucune décision",
          "Poursuivre uniquement par principe"
        ],
        "correct": 1,
        "explain": "Accepter une perte irrécouvrable et se concentrer sur des clients solvables est souvent la décision la plus rationnelle."
      }
    ]
  },
  {
    "id": "f5",
    "title": "S'organiser pour éviter les problèmes",
    "icon": "toolbox",
    "desc": "Système de suivi des factures, outils utiles, et checklist complète anti-impayés.",
    "lessons": [
      {
        "id": "f5l1",
        "title": "Système simple de suivi des factures",
        "html": "\n      <p>Sans suivi structuré, il devient facile de perdre de vue une facture impayée jusqu'à ce que le retard devienne significatif. Un système simple, tenu à jour régulièrement, change complètement la donne.</p>\n      <h4>Les informations essentielles à suivre pour chaque facture</h4>\n      <ul>\n        <li>Le numéro de facture, le client, le montant.</li>\n        <li>La date d'émission et la date d'échéance.</li>\n        <li>Le statut : en attente, payée, en retard, en relance, en litige.</li>\n        <li>La date de la dernière relance envoyée, et celle prévue pour la suivante.</li>\n      </ul>\n      <h4>Comment organiser ce suivi concrètement</h4>\n      <p>Un tableur simple (gratuit) suffit largement pour démarrer : une ligne par facture, avec un code couleur pour visualiser rapidement les statuts (par exemple : vert pour payée, orange pour en attente dans les délais, rouge pour en retard). De nombreux outils de facturation intègrent aussi un tableau de bord de ce type automatiquement.</p>\n      <h4>La routine hebdomadaire à adopter</h4>\n      <p>Réserve un créneau fixe chaque semaine (10 à 15 minutes suffisent) pour passer en revue l'ensemble de tes factures en attente : quelles échéances approchent, quelles relances sont dues cette semaine, quelles factures nécessitent une action. Cette routine évite qu'un impayé ne passe inaperçu pendant plusieurs semaines.</p>\n      <h4>Anticiper visuellement les échéances à venir</h4>\n      <p>Au-delà du suivi des factures déjà émises, garde une vision des échéances à venir dans les prochaines semaines — cela te permet d'anticiper ta trésorerie, et de repérer rapidement un client qui commence à sortir de son rythme de paiement habituel.</p>\n      <div class=\"callout\"><strong>Le bon réflexe :</strong> ajoute chaque facture à ton suivi au moment même de son envoi, jamais après — cette habitude prend quelques secondes et évite qu'une facture ne \"disparaisse\" de ton radar.</div>\n      ",
        "keypoints": [
          "Suis pour chaque facture : montant, échéance, statut, dernière relance et prochaine action prévue.",
          "Un tableur simple avec un code couleur suffit largement pour démarrer un suivi efficace.",
          "Réserve un créneau hebdomadaire fixe pour passer en revue l'ensemble de tes factures en attente.",
          "Ajoute chaque facture à ton suivi dès son envoi, pour ne jamais la perdre de vue."
        ]
      },
      {
        "id": "f5l2",
        "title": "Outils utiles",
        "html": "\n      <p>Plusieurs catégories d'outils facilitent concrètement la facturation, le suivi et la relance — sans nécessiter un budget conséquent pour un indépendant ou une micro-entreprise.</p>\n      <h4>Pour la facturation elle-même</h4>\n      <p>Un outil de facturation gratuit ou peu coûteux, qui génère automatiquement la numérotation, les mentions obligatoires, et idéalement un suivi des statuts de paiement directement intégré (facture envoyée, vue par le client, payée). Certains outils envoient même des relances automatiques programmées, ce qui réduit encore la charge mentale.</p>\n      <h4>Pour le suivi de trésorerie global</h4>\n      <p>Une banque professionnelle en ligne avec un tableau de bord de trésorerie permet de croiser facilement les paiements reçus avec les factures émises, et de repérer rapidement un écart entre ce qui est facturé et ce qui est réellement encaissé.</p>\n      <h4>Pour les relances automatisées</h4>\n      <p>Certains outils de facturation permettent de programmer à l'avance des relances automatiques à des échéances définies (J+3, J+10...), ce qui élimine le risque d'oubli tout en gardant un ton personnalisable pour chaque message.</p>\n      <h4>Pour les démarches de mise en demeure et de recouvrement</h4>\n      <p>Des services en ligne simplifiés existent pour générer une mise en demeure conforme, ou pour déposer une demande d'injonction de payer sans avocat, pour les petits litiges. Utile si tu ne souhaites pas rédiger ces documents toi-même à chaque fois.</p>\n      <h4>Le principe à garder en tête</h4>\n      <p>Le meilleur outil est celui que tu utilises réellement, de façon constante. Un système simple mais suivi rigoureusement vaut toujours mieux qu'un outil sophistiqué configuré une fois puis abandonné.</p>\n      <div class=\"callout\"><strong>Avant de choisir un outil payant :</strong> teste d'abord les versions gratuites disponibles — pour le volume de facturation de la majorité des indépendants, elles suffisent largement dans les premières années d'activité.</div>\n      ",
        "keypoints": [
          "Un outil de facturation avec suivi de statut intégré simplifie considérablement le suivi des paiements.",
          "Une banque professionnelle avec tableau de bord aide à croiser factures émises et paiements réellement reçus.",
          "Certains outils permettent de programmer des relances automatiques à des échéances définies.",
          "Le meilleur outil reste celui utilisé réellement et de façon constante, pas le plus sophistiqué."
        ]
      },
      {
        "id": "f5l3",
        "title": "Checklist complète anti-impayés",
        "html": "\n      <p>Voici la checklist récapitulative de l'ensemble de cette formation, à garder sous la main pour sécuriser chaque nouvelle mission.</p>\n      <h4>Avant de démarrer une mission</h4>\n      <ul>\n        <li>J'ai un devis signé ou un accord écrit clair avant tout démarrage de prestation.</li>\n        <li>Mes conditions générales de vente sont rédigées et jointes systématiquement.</li>\n        <li>J'ai défini une structure de paiement adaptée (acompte, échelonnement selon la mission).</li>\n      </ul>\n      <h4>Pendant la facturation</h4>\n      <ul>\n        <li>Ma facture contient toutes les mentions obligatoires.</li>\n        <li>Je facture dans les 24 à 48h suivant la livraison ou la fin de la prestation.</li>\n        <li>Je facilite le paiement (moyens multiples, coordonnées claires sur la facture).</li>\n      </ul>\n      <h4>Dans le suivi régulier</h4>\n      <ul>\n        <li>Chaque facture est ajoutée à mon système de suivi dès son envoi.</li>\n        <li>Je consacre un créneau hebdomadaire à la revue de mes factures en attente.</li>\n        <li>Je vérifie la bonne réception de chaque facture quelques jours après son envoi.</li>\n      </ul>\n      <h4>En cas de retard</h4>\n      <ul>\n        <li>Je respecte mon calendrier de relance, sans attendre par gêne.</li>\n        <li>Mes relances restent factuelles, avec une fermeté progressive.</li>\n        <li>Je documente chaque relance envoyée.</li>\n      </ul>\n      <h4>En cas d'impayé persistant</h4>\n      <ul>\n        <li>J'envoie une mise en demeure formelle en recommandé avec accusé de réception si les relances restent sans effet.</li>\n        <li>J'évalue objectivement la proportionnalité entre le montant dû et le coût d'une procédure supplémentaire.</li>\n        <li>Je sais accepter une créance irrécouvrable plutôt que de m'épuiser indéfiniment sur un dossier sans issue.</li>\n      </ul>\n      <div class=\"callout\"><strong>Comment utiliser cette checklist :</strong> applique-la systématiquement à chaque nouvelle mission, dès le devis — c'est en amont, avant même le premier euro facturé, que se prévient la grande majorité des impayés.</div>\n      ",
        "keypoints": [
          "La checklist couvre cinq phases : avant la mission, la facturation, le suivi, le retard, et l'impayé persistant.",
          "La prévention en amont (devis signé, CGV, structure de paiement) reste le levier le plus efficace contre les impayés.",
          "Chaque phase de cette formation correspond à une section précise de la checklist.",
          "Utiliser cette checklist dès le devis, systématiquement, prévient la grande majorité des situations difficiles."
        ]
      }
    ],
    "quiz": [
      {
        "q": "Quelle information n'est PAS essentielle dans un système de suivi des factures ?",
        "options": [
          "Le statut de la facture (payée, en retard...)",
          "La date d'échéance",
          "La couleur préférée du client",
          "Le montant et le numéro de facture"
        ],
        "correct": 2,
        "explain": "Le suivi porte sur des informations opérationnelles : montant, échéance, statut, relances — pas sur des détails sans lien avec le paiement."
      },
      {
        "q": "Que permettent certains outils de facturation modernes ?",
        "options": [
          "Rien de particulier au-delà de l'émission de factures",
          "Programmer des relances automatiques à des échéances définies",
          "Remplacer entièrement le suivi manuel",
          "Garantir légalement le paiement du client"
        ],
        "correct": 1,
        "explain": "Certains outils permettent d'automatiser les relances à des échéances programmées à l'avance."
      },
      {
        "q": "Quel est le meilleur outil de suivi selon cette formation ?",
        "options": [
          "Le plus cher du marché",
          "Celui utilisé réellement et de façon constante",
          "Un outil jamais mis à jour",
          "Il n'existe aucun bon outil"
        ],
        "correct": 1,
        "explain": "La constance d'utilisation prime sur la sophistication de l'outil choisi."
      },
      {
        "q": "À quel moment se prévient la majorité des impayés selon cette formation ?",
        "options": [
          "Uniquement lors de la procédure judiciaire",
          "En amont, dès le devis (accord écrit, CGV, structure de paiement)",
          "Il est impossible de les prévenir",
          "Uniquement après la première relance"
        ],
        "correct": 1,
        "explain": "La prévention en amont, avant même le démarrage de la mission, reste le levier le plus efficace."
      },
      {
        "q": "Que recommande la checklist en cas d'impayé persistant malgré les relances ?",
        "options": [
          "Abandonner immédiatement sans autre démarche",
          "Envoyer une mise en demeure formelle en recommandé",
          "Ignorer la situation indéfiniment",
          "Réduire automatiquement le montant dû de moitié"
        ],
        "correct": 1,
        "explain": "La mise en demeure formelle est l'étape suivante logique lorsque les relances classiques restent sans effet."
      }
    ]
  }
];
