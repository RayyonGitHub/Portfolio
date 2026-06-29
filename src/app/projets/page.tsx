import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Sélection de projets de Rayane Bahmed : plateforme de coaching sportif, outil de gestion de stock assisté par IA, dashcam sécurisé, et plus.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets — Rayane Bahmed",
    description:
      "Sélection de projets de Rayane Bahmed : plateforme de coaching sportif, outil de gestion de stock assisté par IA, dashcam sécurisé, et plus.",
    url: "/projets",
  },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projets"
        description="Sept projets, du développement académique au freelance, couvrant le web, le mobile et la cybersécurité."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
