import type { LanguageSkill, SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Langages",
    items: [
      "C",
      "C++",
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "Kotlin",
      "PHP",
      "SQL",
      "PL/SQL",
      "Bash",
      "Assembly",
    ],
  },
  {
    title: "Frameworks & librairies",
    items: ["Django", "Django REST Framework", "FastAPI", "React", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    title: "Bases de données",
    items: ["MySQL", "MariaDB", "Oracle", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Microsoft Azure", "Docker", "VMware", "Terraform", "CI/CD (GitHub Actions)"],
  },
  {
    title: "Cybersécurité",
    items: ["Nmap", "Burp Suite", "Metasploit", "JWT", "SHA-256", "Tests d'intrusion"],
  },
  {
    title: "Outils & environnements",
    items: [
      "VS Code",
      "Android Studio",
      "QtCreator",
      "Eclipse",
      "PyCharm",
      "CodeBlocks",
      "Xampp",
      "Git",
      "Cisco",
      "MS Project",
    ],
  },
  {
    title: "Systèmes",
    items: ["Windows", "Linux"],
  },
];

export const languages: LanguageSkill[] = [
  { name: "Kabyle", level: "Natif" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Courant" },
  { name: "Allemand", level: "Débutant" },
];

export const qualities: string[] = [
  "Sérieux & travailleur",
  "Bonne communication",
  "Autonome & rigoureux",
  "Bonne capacité d'adaptation",
];
