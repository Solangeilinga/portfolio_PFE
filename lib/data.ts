export const student = {
  name: "Solange ILINGA",
  school: "École Centrale Casablanca / 2iE",
  program: "Bachelor Data Science & Intelligence Artificielle — 3ème année",
  project: "InnoFaso",
  projectDesc: "Plateforme de digitalisation de la maintenance et de la production pour une entreprise agroalimentaire au Burkina Faso",
  team: "Équipe de 4 étudiants",
  year: "2024–2025",
  quote: "Créer, apprendre et évoluer : voilà ma vision du futur.",
  github: "https://github.com/Solangeilinga",
  linkedin: "#",
  email: "solange@example.com",
};

export type TraceItem = {
  label: string;
  type: "file" | "image" | "video" | "link" | "code" | "text";
  url?: string;
  description?: string;
};

export type Apprentissage = {
  id: string;
  titre: string;
  autoEval: "Débutant" | "En développement" | "Compétent" | "Expert";
  reflexion: string;
  defi: string;
  acquis: string;
  traces: TraceItem[];
};

export type Competence = {
  id: number;
  code: string;
  titre: string;
  description: string;
  color: string;
  icon: string;
  apprentissages: Apprentissage[];
};

export const competences: Competence[] = [
  {
    id: 1,
    code: "C1",
    titre: "Appréhender les concepts associés au développement d'un nouveau produit ou service",
    description: "Identifier un besoin réel, analyser le contexte, mener des recherches et prototyper des solutions innovantes adaptées au contexte local.",
    color: "from-primary-600 to-primary-800",
    icon: "🔍",
    apprentissages: [
      {
        id: "c1-a1",
        titre: "Identifier un besoin et une problématique",
        autoEval: "Expert",
        reflexion:
          "Avant la visite chez InnoFaso, je pensais que notre projet serait principalement technique — développer une application web et c'est tout. La réalité a été bien différente. Lors de nos échanges avec les responsables techniques, qualité et production, j'ai compris que le vrai problème n'était pas l'absence d'outils numériques, mais la fragmentation des données : les formulaires papier étaient souvent perdus, les données ressaisies manuellement dans Excel avec des erreurs, et Odoo n'était utilisé que partiellement. Ce décalage entre ce que je supposais et ce que j'ai découvert sur le terrain m'a appris que l'écoute et l'observation sont aussi importantes que les compétences techniques.",
        defi:
          "La difficulté principale était de délimiter le périmètre du système. InnoFaso avait des dizaines de processus différents, et il fallait choisir lesquels numériser en priorité sans promettre plus que ce qu'une équipe de 4 étudiants pouvait livrer en un semestre.",
        acquis:
          "Je suis capable aujourd'hui de mener une analyse de besoin structurée, d'identifier les acteurs d'un système, de formuler une problématique précise et de définir des frontières réalistes pour un projet de digitalisation.",
        traces: [
          { label: "Compte rendu de visite chez InnoFaso", type: "file", description: "Document décrivant les observations terrain, les interviews et les processus identifiés" },
          { label: "Photos des fiches papier originales", type: "image", description: "Exemples de formulaires papier que la plateforme a remplacés" },
          { label: "Formulation de la problématique", type: "text", description: "Comment optimiser la gestion de la maintenance et de la production par la digitalisation et l'exploitation des données ?" },
          { label: "Cahier des charges fonctionnel", type: "file", description: "Document définissant les besoins fonctionnels validés avec le client" },
        ],
      },
      {
        id: "c1-a2",
        titre: "Appliquer des méthodes de créativité pour générer des concepts innovants",
        autoEval: "Expert",
        reflexion:
          "L'une des décisions les plus innovantes du projet a été de proposer un moteur de formulaires dynamiques, plutôt que de coder chaque formulaire individuellement. Cette idée est née d'une contrainte : le client avait 43 formulaires différents, et les coder un par un aurait pris bien plus d'un semestre. En cherchant une solution créative, nous avons conçu un système où les formulaires sont décrits dans la base de données et générés automatiquement. C'est une approche qui permet au client d'ajouter de nouveaux formulaires lui-même, sans intervention du développeur.",
        defi:
          "Adapter des concepts issus des ERP industriels (comme Odoo) à un contexte local avec des contraintes de connectivité et des utilisateurs peu habitués aux outils numériques.",
        acquis:
          "J'ai appris à transformer une contrainte (trop de formulaires à coder) en opportunité technique (moteur dynamique), et à concevoir des solutions pensées pour leur contexte d'usage réel.",
        traces: [
          { label: "Notes de réunions de conception", type: "file", description: "Idées générées lors des séances de brainstorming en équipe" },
          { label: "Maquettes Figma de l'interface", type: "image", description: "Premières maquettes du moteur de formulaires dynamiques" },
          { label: "Recherche comparative sur les ERP", type: "file", description: "Synthèse des solutions existantes (Odoo, solutions locales) et justification de notre approche" },
        ],
      },
      {
        id: "c1-a3",
        titre: "Mener une recherche documentaire ciblée et rédiger une synthèse",
        autoEval: "Expert",
        reflexion:
          "Pour choisir notre stack technique, j'ai mené des recherches approfondies sur les frameworks de développement web adaptés à notre contexte. J'ai notamment comparé les solutions existantes de numérisation de formulaires (KoBoToolbox, ODK, solutions sur mesure) et analysé pourquoi une solution sur mesure était plus adaptée aux besoins spécifiques d'InnoFaso. La rédaction de la synthèse documentaire m'a aussi aidée à structurer mes argumentaires lors des présentations au client.",
        defi:
          "Filtrer l'information pertinente parmi une abondance de ressources techniques, et traduire les conclusions techniques en langage accessible pour le client.",
        acquis:
          "Je sais aujourd'hui identifier des sources fiables, comparer des solutions technologiques de manière objective et rédiger une synthèse orientée décision.",
        traces: [
          { label: "Recherche sur les solutions de collecte de données", type: "file", description: "Comparaison KoBoToolbox, ODK vs solution sur mesure" },
          { label: "Documentation technique React + Node.js", type: "link", url: "https://react.dev", description: "Sources de référence utilisées pendant le développement" },
          { label: "Synthèse sur les systèmes d'information industriels", type: "file", description: "Revue de littérature sur la digitalisation de la maintenance dans le contexte africain" },
        ],
      },
      {
        id: "c1-a4",
        titre: "Développer et tester itérativement des prototypes",
        autoEval: "Compétent",
        reflexion:
          "Notre processus de développement a été itératif par nécessité autant que par méthode. Nous avons livré une première version du moteur de formulaires après trois semaines, l'avons présentée au client, recueilli ses retours, puis ajusté. Par exemple, c'est lors de ce premier retour que nous avons appris que les formulaires devaient impérativement supporter les signatures numériques et les photos — des fonctionnalités que nous n'avions pas priorisées initialement.",
        defi:
          "Maintenir la cohérence de l'interface entre les itérations, tout en intégrant de nouveaux besoins sans casser ce qui fonctionnait déjà.",
        acquis:
          "J'ai développé une discipline de développement itératif : livrer tôt, recueillir des retours, et intégrer les ajustements progressivement.",
        traces: [
          { label: "Captures d'écran v1 vs version finale", type: "image", description: "Évolution visuelle de l'interface entre la première maquette et la livraison finale" },
          { label: "Dépôt GitHub frontend", type: "link", url: "https://github.com/Solangeilinga/frontend-innofaso", description: "Historique des commits illustrant les itérations de développement" },
          { label: "Formulaire de retours client", type: "file", description: "Synthèse des retours recueillis lors des démos intermédiaires" },
        ],
      },
      {
        id: "c1-a5",
        titre: "Évaluer la faisabilité technique et l'expérience utilisateur",
        autoEval: "Expert",
        reflexion:
          "La question de la faisabilité s'est posée très concrètement avec le module IA de prédiction de pannes. Nous avions les données, un modèle qui fonctionnait, mais nous devions évaluer honnêtement ce que nous pouvions livrer dans le temps imparti. J'ai participé à l'évaluation des compromis : un microservice Flask séparé plutôt qu'une intégration complète, des prédictions mensuelles plutôt que temps réel. Cette expérience m'a appris à calibrer les ambitions techniques aux contraintes réelles.",
        defi:
          "Évaluer l'utilisabilité pour des opérateurs terrain peu habitués aux outils numériques, sans pouvoir faire de tests utilisateurs formels sur site.",
        acquis:
          "Je suis capable d'évaluer la faisabilité d'une solution de manière réaliste, en tenant compte des contraintes techniques, temporelles et humaines.",
        traces: [
          { label: "Analyse des risques techniques", type: "file", description: "Document listant les risques identifiés et les décisions de faisabilité prises" },
          { label: "Démonstration du module IA", type: "video", description: "Vidéo de démonstration du microservice de prédiction de pannes" },
        ],
      },
    ],
  },
  {
    id: 2,
    code: "C2",
    titre: "Mettre en œuvre des méthodes de développement technique adaptées au contexte",
    description: "Gérer un projet avec des méthodes agiles, produire un cahier des charges, livrer des incréments de qualité et piloter l'amélioration continue.",
    color: "from-teal-600 to-teal-800",
    icon: "⚙️",
    apprentissages: [
      {
        id: "c2-a1",
        titre: "Mettre en œuvre des méthodes et outils de gestion de projet agiles",
        autoEval: "Expert",
        reflexion:
          "C'est sur ce projet que j'ai vraiment compris la valeur des méthodes agiles — pas comme une théorie apprise en cours, mais comme un outil concret. Nous avons utilisé un tableau Kanban pour suivre nos tâches, organisé des sprints de deux semaines, et tenu des réunions de synchronisation régulières. Ce qui a été révélateur pour moi, c'est que la méthode agile nous a permis de gérer les imprévus : quand un coéquipier a eu du retard sur le backend, nous avons pu réorganiser les priorités sans que le projet s'effondre.",
        defi:
          "Maintenir la discipline des réunions et des comptes rendus dans une équipe d'étudiants avec des emplois du temps chargés, des fuseau horaires différents et des contraintes personnelles variées.",
        acquis:
          "Je maîtrise les outils de gestion de projet agile (Kanban, sprints, rétrospectives) et je suis capable d'animer une équipe projet dans un contexte de contraintes réelles.",
        traces: [
          { label: "Diagramme de Gantt", type: "image", description: "Planning initial et suivi d'avancement du projet sur 16 semaines" },
          { label: "Répartition des tâches (matrice RACI)", type: "file", description: "Document définissant les responsabilités de chaque membre de l'équipe" },
          { label: "Comptes rendus de réunions hebdomadaires", type: "file", description: "Archives des 12 réunions de synchronisation d'équipe" },
          { label: "Tableau Kanban du projet", type: "image", description: "Capture du tableau de suivi des tâches en sprint" },
        ],
      },
      {
        id: "c2-a2",
        titre: "Produire un cahier des charges structuré et priorisé",
        autoEval: "Expert",
        reflexion:
          "La rédaction du cahier des charges a été un exercice difficile mais formateur. Nous avons dû trouver l'équilibre entre être suffisamment précis pour cadrer le développement, et suffisamment flexible pour accueillir les ajustements demandés par le client. Nous avons priorisé les fonctionnalités avec une méthode MoSCoW (Must have, Should have, Could have, Won't have), ce qui nous a permis de justifier nos choix lorsque le client souhaitait ajouter des fonctionnalités en cours de projet.",
        defi:
          "Obtenir la validation du cahier des charges par un client qui n'avait pas l'habitude de ce type de document et qui formulait ses besoins de manière progressive plutôt que structurée.",
        acquis:
          "Je suis capable de transformer des besoins exprimés en langage naturel en un cahier des charges fonctionnel structuré, priorisé et compréhensible par des acteurs non techniques.",
        traces: [
          { label: "Cahier des charges fonctionnel v1.0", type: "file", description: "Version initiale validée par le client" },
          { label: "Cahier des charges v2.0 (après ajustements)", type: "file", description: "Version révisée intégrant les retours des premières démos" },
          { label: "E-mail de validation client", type: "file", description: "Confirmation écrite de la validation du cahier des charges" },
        ],
      },
      {
        id: "c2-a3",
        titre: "Produire et livrer régulièrement des incréments de qualité",
        autoEval: "Expert",
        reflexion:
          "Ma contribution principale au projet a été le développement du frontend, et en particulier le moteur de formulaires dynamiques. C'est la partie dont je suis le plus fière techniquement. Construire un système capable de générer n'importe quel formulaire à partir d'une description en base de données m'a demandé de comprendre non seulement React, mais aussi la manière de concevoir des composants réellement réutilisables. J'ai dû gérer 9 types de champs différents, les sections, la validation, les calculs automatiques et les uploads de photos — tout dans un même composant flexible.",
        defi:
          "Le défi le plus important a été de garantir la qualité du code sur la durée, en évitant les régressions lors de l'ajout de nouvelles fonctionnalités. Sans tests automatisés, nous avons mis en place des procédures de vérification manuelles systématiques avant chaque livraison.",
        acquis:
          "Je sais concevoir des composants React réutilisables et maintenables, implémenter un moteur de rendu dynamique, et livrer des fonctionnalités de qualité de manière régulière dans un contexte de projet réel.",
        traces: [
          { label: "Code source — frontend InnoFaso", type: "link", url: "https://github.com/Solangeilinga/frontend-innofaso", description: "Dépôt GitHub contenant le code du frontend développé" },
          { label: "Démonstration du moteur de formulaires", type: "video", description: "Vidéo démontrant la saisie d'un formulaire de maintenance avec sections, validation et calculs automatiques" },
          { label: "Captures d'écran de l'application", type: "image", description: "Galerie d'écrans : connexion, tableau de bord, formulaire, historique, alertes" },
          { label: "Code source — backend InnoFaso", type: "link", url: "https://github.com/Solangeilinga/innofaso_backend", description: "API Node.js/Express" },
          { label: "Code source — module IA", type: "link", url: "https://github.com/Solangeilinga/innofaso-ia", description: "Microservice Flask de prédiction de pannes" },
        ],
      },
      {
        id: "c2-a4",
        titre: "Piloter l'amélioration continue par une posture réflexive",
        autoEval: "Compétent",
        reflexion:
          "Nous avons introduit des rétrospectives d'équipe à mi-parcours du projet, après avoir constaté des tensions liées à des attentes différentes sur la qualité du code. Cette rétrospective a été un moment clé : chacun a pu exprimer ses frustrations et nous avons collectivement décidé de mettre en place des conventions de code partagées. En regardant en arrière, je regrette de ne pas avoir mis en place ces rituels dès le début.",
        defi:
          "Accepter de remettre en question nos méthodes de travail en cours de projet, sans que cela soit vécu comme une critique personnelle par les membres de l'équipe.",
        acquis:
          "J'ai développé une posture réflexive sur mon propre travail et celui de l'équipe, et je comprends maintenant la valeur des rituels d'amélioration continue dans un projet collectif.",
        traces: [
          { label: "Compte rendu de rétrospective d'équipe", type: "file", description: "Synthèse des points positifs, négatifs et actions d'amélioration décidées" },
          { label: "Conventions de code adoptées", type: "file", description: "Document de normes de développement établies en équipe" },
        ],
      },
    ],
  },
  {
    id: 3,
    code: "C3",
    titre: "Animer une équipe au sein d'une organisation",
    description: "Communiquer de manière professionnelle avec des acteurs variés, adapter son discours selon l'interlocuteur et représenter son équipe.",
    color: "from-accent-600 to-accent-800",
    icon: "🤝",
    apprentissages: [
      {
        id: "c3-a1",
        titre: "Communiquer de manière professionnelle et adaptée avec divers acteurs",
        autoEval: "Expert",
        reflexion:
          "Ce projet m'a confrontée à des interlocuteurs très différents : des responsables techniques d'usine, des opérateurs terrain, des enseignants-tuteurs et mes propres coéquipiers. Adapter mon discours selon l'interlocuteur a été un apprentissage constant. Lors des présentations au client, j'ai appris à ne pas utiliser de jargon technique — dire 'le système génère automatiquement le formulaire' plutôt que 'le composant React charge les champs depuis la table champs_definitions'. Avec l'équipe enseignante, c'était l'inverse : montrer la profondeur technique de nos choix d'architecture.",
        defi:
          "Gérer les moments de désaccord avec le client lorsqu'il demandait des fonctionnalités que nous ne pouvions pas livrer dans les délais, en restant professionnel et constructif.",
        acquis:
          "Je suis capable de communiquer avec des interlocuteurs aux profils très variés, d'adapter mon niveau de discours et de défendre des positions techniques de manière diplomatique.",
        traces: [
          { label: "Présentation intermédiaire au client", type: "file", description: "Support de présentation de l'avancement à mi-parcours" },
          { label: "Présentation finale de soutenance", type: "file", description: "Support de la soutenance finale devant le jury et le client" },
          { label: "Comptes rendus de réunions avec InnoFaso", type: "file", description: "Archives des échanges formels avec l'entreprise cliente" },
          { label: "Vidéo de démonstration client", type: "video", description: "Démonstration de la plateforme réalisée pour le client final" },
        ],
      },
    ],
  },
];
