# Portfolio Professionnel — DOGBE KOMLA JEAN CLAUDE

Ce projet est un portfolio web ultra-moderne, interactif, fluide et immersif, conçu pour présenter les compétences, réalisations et le parcours académique de **DOGBE KOMLA JEAN CLAUDE**, Étudiant en Informatique & Développeur Full-Stack / Administrateur Réseaux à l'IAI-TOGO.

Le site intègre des animations 3D fluides basées sur le défilement (scroll), des effets de survol magnétiques sophistiqués, un arrière-plan interactif élégant, un CV académique complet et un espace de messagerie de contact persistant.

---

## 🚀 Fonctionnalités Principales

- **Design Premium Minimaliste** : Une interface moderne à fort contraste avec une palette sombre et raffinée et des détails dorés.
- **Animations Scroll 3D & Parallaxe** : Une transition organique et dynamique en perspective 3D au fil du défilement des sections grâce à `Framer Motion`.
- **Parcours Académique Dynamique** : Une frise chronologique détaillée présentant le parcours scolaire à l'Institut Africain d'Informatique (IAI-TOGO).
- **Grille de Compétences Interactive** : Un explorateur de compétences classées par catégories (Génie Logiciel, Systèmes & Réseaux, Bureautique, Gestion de Projet) avec des fiches de détails.
- **Section Projets Tridimensionnels** : Un showcase de projets web et mobiles avec redirection et descriptif technique détaillé.
- **Formulaire de Contact Actif** : Un moyen d'envoyer des messages instantanés avec confirmation visuelle immédiate.

---

## 🛠️ Stack Technique

- **Framework** : React 19 (TypeScript)
- **Outil de Build** : Vite
- **Styles** : Tailwind CSS (avec le nouveau compilateur `@tailwindcss/vite`)
- **Animations** : Framer Motion (Motion API)
- **Icônes** : Lucide React

---

## 🖥️ Exécution Locale

Suivez ces instructions simples pour démarrer le projet sur votre machine locale.

### Préréquis

Assurez-vous d'avoir installé sur votre système :
- **Node.js** (Version 18.x ou supérieure recommandée)
- Un gestionnaire de paquets comme **npm** ou **bun**

### 1. Installation des dépendances

Ouvrez un terminal dans le répertoire racine du projet et exécutez la commande suivante :

```bash
npm install
```

*(Si vous utilisez Bun, vous pouvez exécuter `bun install`)*

### 2. Démarrage du serveur de développement

Pour lancer le serveur de développement local, lancez la commande suivante :

```bash
npm run dev
```

Cette commande démarre le compilateur rapide Vite et lance le serveur local de développement.

### 3. Accéder à l'application

Une fois le serveur démarré, ouvrez votre navigateur web favori et accédez à l'URL suivante :

```
http://localhost:3000
```

Le serveur écoute par défaut sur le port **3000** et prend en charge le rechargement à chaud (HMR) pour refléter instantanément vos modifications de code.

---

## 📦 Construction pour la Production

Pour compiler l'application en fichiers statiques optimisés pour le déploiement en production, lancez :

```bash
npm run build
```

Les fichiers générés et minifiés seront disponibles dans le dossier `/dist`. Vous pourrez héberger ce dossier sur n'importe quel service d'hébergement statique (Vercel, Netlify, Firebase Hosting, GitHub Pages, etc.).

---

## 📂 Structure du Projet

```text
├── src/
│   ├── components/       # Composants réutilisables (Scroll3D, Hero, Skills, Projects, etc.)
│   ├── context/          # Contexte global de gestion de données (PortfolioContext)
│   ├── data.ts           # Données statiques structurées du portfolio
│   ├── App.tsx           # Composant racine de l'application
│   ├── main.tsx          # Point d'entrée de l'application React
│   └── index.css         # Importation de Tailwind CSS et configurations de thèmes
├── package.json          # Dépendances et scripts de l'application
├── vite.config.ts        # Configuration du bundler Vite
└── README.md             # Guide d'utilisation et d'exécution du projet
```

---
*Développé avec rigueur et passion par DOGBE KOMLA JEAN CLAUDE.*
