import { Project, SkillCategory, Course, SemesterData } from './types';

export const projectsData: Project[] = [
  {
    id: 'cliniqueplus',
    title: 'CliniquePlus',
    description: 'Application de gestion d\'hôpital (patients, médecins, consultations).',
    longDescription: 'Une plateforme robuste pour la gestion des dossiers hospitaliers. Permet de gérer les plannings des médecins, les consultations, l\'enregistrement des nouveaux patients et le suivi de leurs antécédents médicaux de manière sécurisée.',
    url: 'https://cliniqueplus-mu.vercel.app/',
    tech: ['Spring Boot', 'Java', 'Tailwind CSS', 'MySQL', 'REST API'],
    category: 'Full-Stack',
    color: '#3B82F6',
    stats: '100% Fonctionnel',
    backgroundImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'stockapp',
    title: 'StockApp',
    description: 'Système professionnel de gestion de stock et de flux logistiques.',
    longDescription: 'Solution complète développée sous Laravel permettant le suivi des produits, la gestion dynamique des entrées et sorties de stock, le calcul automatique des seuils d\'alerte et la génération instantanée de bordereaux au format PDF.',
    url: 'https://stock-app-dtb7.vercel.app/',
    tech: ['Laravel', 'PHP', 'SQLite', 'Tailwind CSS', 'PDF Generation'],
    category: 'Full-Stack',
    color: '#F59E0B',
    stats: 'Génération PDF',
    backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dictionnaire',
    title: 'Dictionnaire Informatique',
    description: 'Dictionnaire interactif regroupant les termes techniques clés de l\'IT.',
    longDescription: 'Une application éducative regroupant les termes fondamentaux du développement web, des réseaux, des algorithmes et de la cybersécurité. Intègre une recherche ultra-rapide et un filtrage thématique intuitif.',
    url: 'https://dictionnaire-informatique.vercel.app/',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    category: 'Frontend',
    color: '#10B981',
    stats: 'Recherche Instantanée',
    backgroundImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chez-claude',
    title: 'Chez Claude',
    description: 'Vitrine de restauration haut de gamme avec menu dynamique et réservations.',
    longDescription: 'Une vitrine moderne et élégante pour un établissement gastronomique. Comprend un menu interactif filtrable, une présentation immersive des plats signatures et un formulaire de demande de réservation fluide.',
    url: 'https://chez-claude.vercel.app/',
    tech: ['Vue.js 3', 'Vite', 'Tailwind CSS', 'Motion', 'Axios'],
    category: 'Frontend',
    color: '#EF4444',
    stats: 'UX Premium',
    backgroundImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'portflow',
    title: 'Port Flow',
    description: 'Plateforme interactive de gestion des flux et des présentations de données.',
    longDescription: 'Un outil interactif permettant la présentation optimisée des données professionnelles. Équipé de tableaux de bord intuitifs et de transitions fluides développées pour un confort d\'utilisation maximal.',
    url: 'https://port-flow-fawn.vercel.app/',
    tech: ['Vue.js', 'Vite', 'Tailwind CSS', 'Axios', 'Charts'],
    category: 'Design',
    color: '#8B5CF6',
    stats: 'Animation 60 FPS',
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'testedesign',
    title: 'Teste Design',
    description: 'Laboratoire de prototypage d\'interfaces et d\'animations d\'avant-garde.',
    longDescription: 'Un espace d\'expérimentation web dédié au développement d\'animations avancées, de transitions non-linéaires et de composants UI ultra-modernes fondés sur les dernières spécifications CSS/JS.',
    url: 'https://teste-design.vercel.app/',
    tech: ['Vue.js', 'Tailwind CSS', 'Vite', 'CSS Keyframes'],
    category: 'Design',
    color: '#EC4899',
    stats: 'Design Sandbox',
    backgroundImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'portfolio-classic',
    title: 'Portfolio Classique',
    description: 'Mon premier portfolio académique répertoriant mes premières armes.',
    longDescription: 'La version historique de mon portfolio en ligne, documentant mon parcours initial, mes compétences de base et l\'ensemble des projets réalisés au cours de ma première année à l\'IAI-TOGO.',
    url: 'https://portfolio-six-nu-94.vercel.app/',
    tech: ['Vue.js 3', 'Vite', 'Tailwind CSS', 'Component Architecture'],
    category: 'Frontend',
    color: '#6B7280',
    stats: 'Première Version',
    backgroundImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  }
];

export const extraProjects: Project[] = [
  {
    id: 'concours',
    title: 'Plateforme de Concours & Votes',
    description: 'Portail de vote en ligne avec intégration de paiements locaux et mobiles (MoMo, Flooz, Wave, TapTapSend).',
    longDescription: 'Un système d\'inscription et de scrutin en temps réel sécurisé. Permet aux électeurs d\'effectuer des paiements de bulletins par MTN MoMo, Flooz, Wave, TapTapSend ou carte bancaire.',
    tech: ['Laravel', 'MySQL', 'API Mobile Money', 'Webhooks'],
    category: 'Full-Stack',
    color: '#D97706',
    url: '#',
    backgroundImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tontine',
    title: 'Application de Tontine Collaborative',
    description: 'Outil de gestion des cotisations et d\'organisation algorithmique des bénéficiaires.',
    longDescription: 'Un tableau de bord d\'administration complet où l\'administrateur valide les adhésions, enregistre les cotisations mensuelles et définit de manière algorithmique l\'ordre des bénéficiaires de la tontine.',
    tech: ['Spring Boot', 'Java', 'Thymeleaf', 'SQLite'],
    category: 'Full-Stack',
    color: '#4F46E5',
    url: '#',
    backgroundImage: 'https://images.unsplash.com/photo-1556742400-b5b7c513f599?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cvgen',
    title: 'Générateur Automatique de CV ATS',
    description: 'Création automatique de CV de niveau professionnel avec deux modèles et export PDF direct.',
    longDescription: 'Une application sans authentification conçue pour générer rapidement des CV au format international ATS. L\'utilisateur choisit entre deux modèles soignés, et télécharge le PDF généré à la volée.',
    tech: ['Laravel', 'Vue.js 3', 'SQLite', 'DomPDF'],
    category: 'Full-Stack',
    color: '#0D9488',
    url: '#',
    backgroundImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programmation & Génie Logiciel',
    icon: 'Layout',
    skills: [
      'JEE (Spring Boot, JSP, Servlets)',
      'Programmation Mobile (Flutter / Android)',
      'Programmation Distribuée (Python, Java, C++)',
      'POO Avancée (Django, Flask)',
      'Outils Web (Laravel, Node.js)',
      'React / TypeScript',
      'Vue.js 3',
      'C# / .NET',
      'Tailwind CSS',
      'Vite / Axios'
    ]
  },
  {
    title: 'Bases de Données & Administration',
    icon: 'Database',
    skills: [
      'Administration BD Oracle',
      'Administration BD SQL-Server',
      'Sécurité des Bases de Données',
      'Big Data & NoSQL (MongoDB, Cassandra)',
      'Système d\'Information Géographique (SIG)',
      'Système d\'Aide à la Décision (SIAD)',
      'MySQL / SQLite',
      'Méthode MERISE & Modélisation UML'
    ]
  },
  {
    title: 'Intelligence Artificielle & Audit',
    icon: 'Binary',
    skills: [
      'Introduction à l\'Intelligence Artificielle (IA)',
      'Analyse de Données (Data Science)',
      'Introduction au Génie Logiciel',
      'Audit des Systèmes d\'Information (Audit SI)',
      'Techniques Multimédias et Infographie',
      'Projet de Fin de Formation (GLSI)'
    ]
  },
  {
    title: 'Réseaux & Cybersécurité',
    icon: 'Shield',
    skills: [
      'Certification Cisco ITE 7.02',
      'Sécurité Informatique',
      'Cryptographie (RSA, Affine, Hill, César)',
      'Modèle OSI & TCP/IP',
      'Cloud Computing & Virtualisation'
    ]
  },
  {
    title: 'Outils & Environnements',
    icon: 'TrendingUp',
    skills: [
      'Git & GitHub',
      'Docker',
      'Composer & Maven',
      'Canva Design & Infographie',
      'Microsoft Office (Word, Excel, PowerPoint)',
      'Linux / Bash',
      'XAMPP & phpMyAdmin'
    ]
  },
  {
    title: 'Transverse, Langues & Titres',
    icon: 'Server',
    skills: [
      'Permis de Conduire (Catégories A & B)',
      'Certification Cisco Networking Academy (ITE 7.02)',
      'Anglais Expert (Préparation TOEIC)',
      'Français (Courant)',
      'Football, Basket-ball, Lecture'
    ]
  }
];

export const ciscoCertificate = {
  title: "Cisco Networking Academy — ITE 7.02 French",
  courseName: "ITE 7.02 French",
  recipient: "Komla Jean-claude DOGBE",
  institution: "Institut Internationale des Sciences et des Arts du Numérique",
  program: "Cisco Networking Academy",
  instructor: "Abdourahmane GUEYE",
  completionDate: "15 Jul 2026",
  dateFormatted: "15 Juillet 2026",
  certId: "aa4fcf6a-46f5-4686-b948-6919a8cdad43",
  image: "/src/assets/images/cisco_certificate_1791317108496.jpg"
};


export const semestersData: SemesterData[] = [
  {
    number: 5,
    name: 'SEMESTRE 5',
    title: 'Approfondissement Systèmes, JEE, Distribué & Administration BD',
    period: '3ème Année Licence GLSI — Semestre 5',
    description: 'Semestre charnière axé sur l\'architecture d\'entreprise JEE, la programmation distribuée, le Big Data, la géomatique (SIG), l\'administration avancée Oracle & SQL-Server et l\'intelligence artificielle.',
    units: [
      {
        id: 'ue-s5-bdd',
        name: 'Application des Bases de Données',
        categoryName: 'Bases de Données & Décisionnel',
        icon: 'Database',
        elements: [
          'Système d\'Information Géographique (SIG)',
          'Big Data (NoSQL, architectures distribuées)',
          'Système d\'Information d\'Aide à la Décision (SIAD)'
        ]
      },
      {
        id: 'ue-s5-prog',
        name: 'Programmation Avancée 2',
        categoryName: 'Développement d\'Entreprise',
        icon: 'Code',
        elements: [
          'Programmation JEE (SpringBoot, JSP, Servlets, REST)',
          'Programmation Mobile (Android & Multiplateforme)',
          'Programmation Distribuée (Python, Java, C++)'
        ]
      },
      {
        id: 'ue-s5-admin',
        name: 'Administration Base de Données et Sécurité',
        categoryName: 'Infrastructure & Sécurité',
        icon: 'Shield',
        elements: [
          'Administration des BD Oracle',
          'Sécurité des Bases de Données & Politiques d\'accès',
          'Administration des BD SQL-Server'
        ]
      },
      {
        id: 'ue-s5-ia-gl',
        name: 'Intelligence Artificielle et Génie Logiciel',
        categoryName: 'IA & Méthodologies Logicielles',
        icon: 'Brain',
        elements: [
          'Introduction à l\'Intelligence Artificielle',
          'Analyse de Données (Data Analysis)',
          'Introduction au Génie Logiciel (Modélisation & Cycles)'
        ]
      },
      {
        id: 'ue-s5-comm',
        name: 'Communication & Soft Skills',
        categoryName: 'Langues & Développement Personnel',
        icon: 'MessageSquare',
        elements: [
          'Anglais Expert',
          'Préparation au TOEIC',
          'Développement Personnel & Posture Professionnelle'
        ]
      }
    ]
  },
  {
    number: 6,
    name: 'SEMESTRE 6',
    title: 'Génie Logiciel Avancé, Web Moderne, Audit SI & Projet de Fin de Cycle',
    period: '3ème Année Licence GLSI — Semestre 6',
    description: 'Semestre de professionnalisation et de finalisation du cycle : frameworks web modernes (Django, Flask, Laravel, Node.js), audit et gouvernance SI, entrepreneuriat et réalisation du projet de fin de formation.',
    units: [
      {
        id: 'ue-s6-droit',
        name: 'Droit et Entrepreneuriat',
        categoryName: 'Management & Légal',
        icon: 'Scale',
        elements: [
          'Création d\'Entreprises & Business Models',
          'Droit du Travail & Législation du Numérique'
        ]
      },
      {
        id: 'ue-s6-prog',
        name: 'Programmation Avancée 3',
        categoryName: 'Frameworks Web & POO',
        icon: 'Layers',
        elements: [
          'Programmation O.O. Avancée (Django, Flask, Python)',
          'Outils de Programmation Web (Laravel, Node.js, Express)'
        ]
      },
      {
        id: 'ue-s6-audit',
        name: 'Audit et Multimédia',
        categoryName: 'Gouvernance & Design',
        icon: 'CheckCircle',
        elements: [
          'Audit des Systèmes d\'Information (Gouvernance & Contrôle)',
          'Techniques Multimédias et Infographie'
        ]
      },
      {
        id: 'ue-s6-sport',
        name: 'Sport et Discipline',
        categoryName: 'Excellence & Éthique',
        icon: 'Award',
        elements: [
          'Sport Universitaire',
          'Séminaire Thématique 3 + Discipline'
        ]
      },
      {
        id: 'ue-s6-pfc',
        name: 'Projet de Fin de Cycle',
        categoryName: 'Mémoire & Soutenance',
        icon: 'Sparkles',
        elements: [
          'Projet de Fin de Formation (Soutenance de Licence GLSI)'
        ]
      }
    ]
  }
];

export const coursesData: Course[] = [
  {
    title: '3ème Année Licence Informatique — Option GLSI',
    category: 'Technique',
    topics: [
      '2024 – 2026 : Parcours Licence en Informatique, Option Génie Logiciel et Systèmes d\'Information (GLSI) à l\'IAI-TOGO (Institut Africain d\'Informatique, Lomé)',
      'Semestre 5 : Application BD (SIG, Big Data NoSQL, SIAD), Prog Avancée 2 (JEE SpringBoot, Mobile, Distribuée), Admin BD Oracle & SQL-Server, IA, Analyse de Données, Anglais Expert & TOEIC',
      'Semestre 6 : POO Avancée (Django, Flask), Web Moderne (Laravel, Node.js), Audit des Systèmes d\'Information, Projet de Fin de Formation'
    ]
  },
  {
    title: 'Formations & Diplômes Précédents',
    category: 'Sciences',
    topics: [
      '2023 : Baccalauréat Série D (Scientifique) à OPEM BAGUIDA (Baguida, Togo)',
      '2024 – 2025 : Fondations en algorithmique, programmation C#/Python/PHP, conception MERISE, réseaux informatiques'
    ]
  },
  {
    title: 'Titres & Certifications Professionnelles',
    category: 'Gestion',
    topics: [
      'Cisco Networking Academy : Certification ITE 7.02 French (Achevée le 15 Juillet 2026, Cert ID: aa4fcf6a-46f5-4686-b948-6919a8cdad43, Institut Internationale des Sciences et des Arts du Numérique)',
      'Permis de Conduire : Catégories A et B (Deux-roues & Véhicules légers)'
    ]
  }
];

export const personalQualities = [
  'Curieux & Organisé',
  'Autonome & Rigoureux',
  'Persévérant (toujours à la recherche de solutions complexes)',
  'Esprit d\'analyse scientifique & conception logicielle',
  'Apprentissage rapide des nouvelles technologies',
  'Goût marqué pour les projets pratiques et de grande envergure'
];

