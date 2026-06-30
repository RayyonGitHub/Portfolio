import type { Education, Experience, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Rayane Bahmed",
  title: "Étudiant Master MIAGE | Développeur Full-Stack & Cybersécurité",
  tagline: "À la recherche d'une alternance pour septembre 2026.",
  bio: [
    "Je m'appelle Rayane Bahmed et je suis passionné par l'informatique sous toutes ses formes. J'aime comprendre, construire, sécuriser et améliorer les systèmes qui font tourner le numérique. Au fil de mon parcours, j'ai développé une vraie polyvalence : développement, bases de données, cloud, systèmes et réseaux, cybersécurité… autant de domaines qui me motivent et dans lesquels je prends plaisir à progresser.",
    "Je suis quelqu'un de sérieux, rigoureux et autonome, avec une bonne capacité d'adaptation. J'accorde beaucoup d'importance à la qualité du travail, à la clarté dans la communication et au fait d'aller au bout de ce que j'entreprends. J'aime apprendre, monter en compétence et m'investir pleinement dans ce que je fais.",
    "Aujourd'hui, je souhaite évoluer dans un environnement stimulant, continuer à développer mes compétences et apporter une vraie valeur grâce à mon engagement, ma motivation et ma capacité à apprendre vite.",
  ],
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
    context: "Salle des fêtes (job d'été)",
    period: "Juillet 2024 - Novembre 2024",
    description:
      "Accueil et orientation des invités, service clientèle, supervision et coordination des coéquipiers.",
  },
  {
    role: "Vendeur",
    context: "Épicerie (job d'été)",
    period: "Juin 2022 - Août 2022",
    description:
      "Accueil et information des clients, gestion des opérations d'encaissement, entretien et rangement de la surface de vente.",
  },
];

export const education: Education[] = [
  {
    degree: "Master 1 Informatique (MIAGE)",
    school: "Université de Haute-Alsace, Mulhouse",
    period: "2025 - 2026",
    courses: [
      "Gestion de projet / ERP et conduite de projet",
      "Programmation des objets connectés / Java",
      "Administration des bases de données / Big data",
    ],
  },
  {
    degree: "Mastère Cybersécurité & Cloud Computing",
    school: "École IPSSI, Lille",
    period: "2024 - 2025",
    courses: [
      "Hardening système",
      "Cloud computing (architecture AWS, Microsoft Azure)",
      "Intégration et sécurité des bases de données",
    ],
  },
  {
    degree: "Licence Informatique - Systèmes Informatiques",
    school: "Université Mouloud Mammeri, Tizi Ouzou (Algérie)",
    period: "2020 - 2023",
    courses: [
      "Programmation (procédurale, orientée objet)",
      "Systèmes d'exploitation",
      "Bases de données relationnelles",
    ],
  },
];
