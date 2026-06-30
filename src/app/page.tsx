import type { Metadata } from "next";
import { education, experiences, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { languages, qualities, skillGroups } from "@/data/skills";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";
import { ContactForm } from "@/components/ContactForm";
import { ArrowIcon, DownloadIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Rayane Bahmed, étudiant Master MIAGE et développeur Full-Stack & Cybersécurité : projets, compétences et contact pour une alternance dès septembre 2026.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.bio,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <section id="top" className="mx-auto max-w-content scroll-mt-20 px-6 pb-20 pt-20 sm:pt-28">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
          {profile.tagline}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-ink-muted sm:text-xl">{profile.title}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">{profile.bio}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Voir mes projets
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Me contacter
          </a>
          <a
            href="/cv-rayane-bahmed.pdf"
            download
            aria-label="Télécharger le CV de Rayane Bahmed (PDF)"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
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
            <dd className="mt-1 font-medium text-ink">Alternance dès septembre 2026</dd>
          </div>
        </dl>
      </section>

      <section className="mx-auto max-w-content px-6 pb-20" aria-labelledby="parcours-heading">
        <h2 id="parcours-heading" className="sr-only">
          Expérience et formation
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
                    {exp.role} <span className="text-ink-muted">({exp.context})</span>
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

      <section id="projets" className="mx-auto max-w-content scroll-mt-20 px-6 pb-20" aria-labelledby="projets-heading">
        <h2 id="projets-heading" className="sr-only">
          Projets
        </h2>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projets"
          description="Du développement académique au freelance, couvrant le web, le mobile et la cybersécurité."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        id="competences"
        className="mx-auto max-w-content scroll-mt-20 px-6 pb-20"
        aria-labelledby="competences-heading"
      >
        <h2 id="competences-heading" className="sr-only">
          Compétences
        </h2>
        <SectionHeading
          eyebrow="Compétences"
          title="Stack & savoir-faire"
          description="Compétences techniques regroupées par catégorie, complétées par les langues parlées et les qualités personnelles."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 border-t border-border-subtle pt-10 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Langues</h3>
            <dl className="mt-4 flex flex-col gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between border-b border-border-subtle pb-2"
                >
                  <dt className="font-medium text-ink">{lang.name}</dt>
                  <dd className="text-sm text-ink-muted">{lang.level}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-ink">Qualités</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {qualities.map((quality) => (
                <li key={quality} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {quality}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-content scroll-mt-20 px-6 pb-24"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading" className="sr-only">
          Contact
        </h2>
        <SectionHeading
          eyebrow="Contact"
          title="Travaillons ensemble"
          description="Le formulaire ouvre votre client email avec le message prérempli. Vous pouvez aussi me contacter directement."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-bg-raised p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Coordonnées directes</h3>
              <dl className="mt-4 flex flex-col gap-3 text-sm">
                <div>
                  <dt className="text-ink-faint">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-raised"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Téléphone</dt>
                  <dd>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                      className="font-medium text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-raised"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-faint">Localisation</dt>
                  <dd className="font-medium text-ink">{profile.location}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-bg-raised p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Réseaux</h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {profile.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${link.label} (nouvel onglet)`}
                      className="font-medium text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-raised"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
