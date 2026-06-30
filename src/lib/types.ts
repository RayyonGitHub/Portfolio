export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  links: SocialLink[];
}

export interface Experience {
  role: string;
  context: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export type ProjectCategory = "web" | "mobile" | "desktop" | "freelance";

export interface ProjectRepo {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  repos: ProjectRepo[];
  featured: boolean;
  image?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
}
