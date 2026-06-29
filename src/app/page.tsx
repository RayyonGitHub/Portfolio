import type { Metadata } from "next";
import Link from "next/link";
import { education, experiences, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Accueil",
  description: profile.bio,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.bio,
    url: "/",
  },
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="mx-auto max-w-content px-6 pb-20 pt-20 sm:pt-28">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
          {profile.tagline}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-ink-muted sm:text-xl">{profile.title}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">{profile.bio}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Voir mes projets
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Me contacter
          </Link>
        </div>

        <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-border-subtle pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-ink-faint">Localisation</dt>
            <dd className="mt-1 font-medium text-ink">{profile.location}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-faint">Formation actuelle</dt>
            <dd className="mt-1 font-medium text-ink">{education[0]?.degree}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-faint">Disponibilité</dt>
            <dd className="mt-1 font-medium text-ink">Alternance — septembre 2026</dd>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20" aria-labelledby="featured-heading">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="featured-heading" className="sr-only">
            Projets phares
          </h2>
          <SectionHeading
            eyebrow="Projets phares"
            title="Ce que j'ai construit récemment"
            description="Une sélection de projets avec dépôts publics, du back-end à l'application mobile."
          />
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-accent transition-colors hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Tous les projets
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-6 pb-24" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="sr-only">
          Expérience professionnelle
        </h2>
        <SectionHeading eyebrow="Parcours" title="Expérience & formation" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Expérience professionnelle</h3>
            <ul className="mt-4 flex flex-col gap-6">
              {experiences.map((exp) => (
                <li key={exp.role + exp.period} className="border-l-2 border-border pl-4">
                  <p className="text-sm text-ink-faint">{exp.period}</p>
                  <p className="mt-1 font-medium text-ink">
                    {exp.role} — <span className="text-ink-muted">{exp.context}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Formation</h3>
            <ul className="mt-4 flex flex-col gap-6">
              {education.map((edu) => (
                <li key={edu.degree} className="border-l-2 border-border pl-4">
                  <p className="text-sm text-ink-faint">{edu.period}</p>
                  <p className="mt-1 font-medium text-ink">{edu.degree}</p>
                  <p className="mt-1 text-sm text-ink-muted">{edu.school}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
