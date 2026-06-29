import type { Education, Experience, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Rayane Bahmed",
  title: "Étudiant Master MIAGE — Développeur Full-Stack & Cybersécurité",
  tagline: "À la recherche d'une alternance pour septembre 2026.",
  bio: "Actuellement en préparation pour intégrer ma deuxième année de Master MIAGE à l'Université de Haute-Alsace, je suis à la recherche d'une alternance pour septembre 2026. Sérieux, dynamique et avec une bonne capacité d'adaptation, j'ai une aisance relationnelle qui me permet de m'intégrer rapidement dans une équipe et de m'investir pleinement dans mes missions.",
  location: "Mulhouse, France",
  email: "rayanbahmed@gmail.com",
  phone: "07 66 87 98 92",
  links: [
    { label: "GitHub", href: "https://github.com/RayyonGitHub" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rayanebahmed" },
  ],
};

export const experiences: Experience[] = [
  {
    role: "Réceptionniste / Gérant",
    context: "Salle des fêtes — job d'été",
    period: "Juillet 2024 — Novembre 2024",
    description:
      "Accueil et orientation des invités, service clientèle, supervision et coordination des coéquipiers.",
  },
  {
    role: "Vendeur",
    context: "Épicerie — job d'été",
    period: "Juin 2022 — Août 2022",
    description:
      "Accueil et information des clients, gestion des opérations d'encaissement, entretien et rangement de la surface de vente.",
  },
];

export const education: Education[] = [
  {
    degree: "Master 1 Informatique — MIAGE",
    school: "Université de Haute-Alsace, Mulhouse",
    period: "2025 — 2026",
  },
  {
    degree: "Mastère Cybersécurité & Cloud Computing",
    school: "École IPSSI, Lille",
    period: "2024 — 2025",
  },
];
