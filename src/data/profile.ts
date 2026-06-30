import type { Education, Experience, Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Rayane Bahmed",
  title: "Étudiant Master MIAGE | Développeur Full-Stack & Cybersécurité",
  tagline: "À la recherche d'une alternance pour septembre 2026.",
  bio: "Je conçois des applications complètes : APIs REST avec Django et FastAPI, interfaces React, applications mobiles Expo/React Native. Passionné par la cybersécurité (Mastère IPSSI), j'aborde chaque projet avec rigueur et une vraie curiosité technique. Actuellement en Master MIAGE à l'Université de Haute-Alsace, je cherche une alternance à partir de septembre 2026 pour rejoindre une équipe ambitieuse et contribuer à des projets concrets.",
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
  },
  {
    degree: "Mastère Cybersécurité & Cloud Computing",
    school: "École IPSSI, Lille",
    period: "2024 - 2025",
  },
];
