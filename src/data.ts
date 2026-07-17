import { Project, SkillCategory, Course } from './types';

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
    title: 'Programmation & Développement',
    icon: 'Layout',
    skills: ['Python', 'C#', 'Programmation Web', 'Programmation Mobile', 'Laravel (PHP)', 'Spring Boot (Java)', 'Vue.js 3', 'React / TypeScript', 'Tailwind CSS', 'Vite / Axios']
  },
  {
    title: 'Bases de Données & Administration',
    icon: 'Database',
    skills: ['Conception de BD', 'Implémentation de BD', 'Gestion de bases de données', 'Méthode MERISE', 'Modélisation UML', 'MySQL', 'SQLite']
  },
  {
    title: 'Réseaux & Sécurité',
    icon: 'Shield',
    skills: ['CISCO CCNA 2', 'Cryptographie', 'Sécurité Informatique', 'Cloud Computing', 'Modèle OSI / TCP-IP', 'Routage & Switching (VLAN)', 'SSH & Clés publiques/privées', 'RSA / Affine / Hill / César']
  },
  {
    title: 'Gestion de Projet & Méthodes',
    icon: 'Binary',
    skills: ['Méthodes AGILES (Scrum)', 'Approche Systémique (MERISE)', 'Génie Logiciel', 'Gestion de flux de production']
  },
  {
    title: 'Outils & Bureautique',
    icon: 'TrendingUp',
    skills: ['Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel', 'Canva Design', 'Git & GitHub', 'Docker', 'Composer & Maven', 'XAMPP & phpMyAdmin']
  },
  {
    title: 'Langues & Loisirs',
    icon: 'Server',
    skills: ['Français (couramment parlé)', 'Anglais (quelques notions)', 'Football', 'Basket-ball', 'Lecture (romans)']
  }
];

export const coursesData: Course[] = [
  {
    title: 'Formations Initiales d\'Élite',
    category: 'Technique',
    topics: [
      '2023 – en cours : Parcours Licence en analyse de données en cours d\'obtention à l’IAI Togo (Lomé)',
      '2023 : Baccalauréat série D scientifique à OPEM BAGUIDA'
    ]
  },
  {
    title: 'Génie Logiciel & Modélisation',
    category: 'Technique',
    topics: [
      'Programmation moderne & objets : Python, C#, Java (Spring Boot), PHP (Laravel)',
      'Développement Web & Mobile : Conception d\'interfaces web interactives et d\'applications mobiles',
      'Méthodologies structurées : Modélisation UML, Méthodes AGILES et démarche systémique MERISE'
    ]
  },
  {
    title: 'Réseaux & Sécurité Réseau',
    category: 'Technique',
    topics: [
      'Compétences Cisco : Niveau CISCO CCNA 2 (Routage, commutation, configuration VLAN)',
      'Algorithmes de sécurité : Cryptographie classique et moderne (César, Hill, Affine, RSA, Merkle-Hellman)',
      'Architecture cloud : Introduction au Cloud Computing et à la conteneurisation (Docker)'
    ]
  }
];

export const personalQualities = [
  'Curieux & Organisé',
  'Autonome & Rigoureux',
  'Persévérant (toujours à la recherche de solutions complexes)',
  'Esprit d\'analyse scientifique',
  'Apprentissage rapide des nouvelles technologies',
  'Goût marqué pour les projets pratiques'
];
