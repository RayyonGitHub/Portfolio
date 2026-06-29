import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "athlo-coaching",
    title: "Athlo — Plateforme de coaching sportif",
    period: "Mai 2026",
    description:
      "Plateforme complète dédiée aux coachs sportifs et à leur écosystème : gestion des clients, séances et programmes d'entraînement, boutique en ligne, nutrition, messagerie, facturation Stripe et tableaux de bord analytiques. Architecture multi-rôles (coach, athlète, prospect, responsable de salle, admin) exposée par une API REST Django sécurisée par JWT, consommée par une interface Web React et une application mobile Expo/React Native.",
    stack: [
      "Django 5.2",
      "Django REST Framework",
      "PostgreSQL",
      "React 19",
      "Tailwind CSS 4",
      "Expo 54",
      "React Native",
      "TypeScript",
      "Stripe",
      "JWT",
    ],
    category: "web",
    featured: true,
    repos: [
      { label: "Back-end (Django REST)", url: "https://github.com/RayyonGitHub/ATHLO_COACHING_BACK" },
      { label: "Front-end Web (React)", url: "https://github.com/RayyonGitHub/ATHLO_COACHING_FRONT" },
      { label: "App Mobile (Expo)", url: "https://github.com/RayyonGitHub/ATHLO_COACHING_APP" },
    ],
  },
  {
    slug: "stockit",
    title: "StockIt — Outil de gestion de stock assisté par IA",
    period: "Mars 2026",
    description:
      "Application de gestion de stock pour un magasin de matériel informatique : CRUD produits, gestion des rôles (Administrateur, Gestionnaire, Vendeur), historique des mouvements d'inventaire, alertes de seuil bas et assistant IA branché sur Ollama capable de répondre aux questions sur le stock et de générer des rapports.",
    stack: ["FastAPI", "SQLAlchemy", "Pydantic", "SQLite", "Ollama", "React 19", "Vite", "Tailwind CSS"],
    category: "web",
    featured: true,
    repos: [
      { label: "Back-end (FastAPI)", url: "https://github.com/RayyonGitHub/Outil_Gestion_Stock_Back" },
      { label: "Front-end (React / Vite)", url: "https://github.com/RayyonGitHub/Outil_Gestion_Stock_Front" },
    ],
  },
  {
    slug: "dashcam-securise",
    title: "Dashcam sécurisé — preuves d'intégrité cryptographiques",
    period: "Janvier 2026",
    description:
      "Système Android Encodeur/Décodeur pour dashcam vérifiable, réalisé dans le cadre du module Cloud du Master MIAGE. L'encodeur capture la vidéo (CameraX), génère un hash SHA-256 par frame normalisée (I420) et transmet les preuves vers un backend Supabase. Le décodeur rejoue le même pipeline et compare les hashs locaux à ceux du serveur pour certifier l'intégrité de la vidéo.",
    stack: ["Kotlin", "Android CameraX", "MediaCodec", "Supabase", "SQL", "SHA-256"],
    category: "mobile",
    featured: true,
    repos: [
      { label: "Encodeur (capture + preuves)", url: "https://github.com/RayyonGitHub/Encoder-Dashcam" },
      { label: "Décodeur (vérification)", url: "https://github.com/RayyonGitHub/Decoder-Dashcam" },
    ],
  },
  {
    slug: "simulateur-mobilite-urbaine",
    title: "Simulateur de mobilité urbaine",
    period: "Novembre 2025",
    description:
      "Outil de simulation visualisant les déplacements et communications de véhicules sur un territoire réel, à partir de données OpenStreetMap (OSM).",
    stack: ["QtCreator", "QML", "C++"],
    category: "desktop",
    featured: false,
    repos: [],
  },
  {
    slug: "apocalipssi",
    title: "Gestion du projet informatique « Apocal'ipssi »",
    period: "Juillet 2025",
    description:
      "Pilotage de projet de bout en bout : livrables d'architecture, planification, chiffrage, analyse des risques et conduite du changement.",
    stack: ["MS Project", "WBS", "Teams", "Registre des risques"],
    category: "management",
    featured: false,
    repos: [],
  },
  {
    slug: "pentest",
    title: "Test d'intrusion « Pentest »",
    period: "Mars 2025",
    description:
      "Réalisation d'un test d'intrusion complet avec rapport final détaillant les vulnérabilités détectées et les mesures correctives associées.",
    stack: ["Docker", "Nmap", "Burp Suite", "Metasploit"],
    category: "security",
    featured: false,
    repos: [],
  },
  {
    slug: "freelance-marketplace",
    title: "Marketplace freelance",
    period: "Mai 2023",
    description:
      "Pilotage et réalisation, en freelance, d'un projet de mise en place d'un marché en ligne type Fiverr pour un client.",
    stack: ["Xampp", "SQL", "HTML", "CSS", "JavaScript", "PHP"],
    category: "freelance",
    featured: false,
    repos: [],
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  web: "Web",
  mobile: "Mobile",
  security: "Cybersécurité",
  desktop: "Desktop",
  management: "Gestion de projet",
  freelance: "Freelance",
};
