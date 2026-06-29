import type { Metadata } from "next";
import { languages, qualities, skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Langages, frameworks, cloud, cybersécurité et outils maîtrisés par Rayane Bahmed, étudiant en Master MIAGE.",
  alternates: { canonical: "/competences" },
  openGraph: {
    title: "Compétences — Rayane Bahmed",
    description:
      "Langages, frameworks, cloud, cybersécurité et outils maîtrisés par Rayane Bahmed, étudiant en Master MIAGE.",
    url: "/competences",
  },
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Compétences"
        title="Stack & savoir-faire"
        description="Compétences techniques regroupées par catégorie, complétées par les langues parlées et les qualités personnelles."
      />

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-lg font-semibold text-ink">{group.title}</h2>
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
          <h2 className="font-display text-lg font-semibold text-ink">Langues</h2>
          <dl className="mt-4 flex flex-col gap-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between border-b border-border-subtle pb-2">
                <dt className="font-medium text-ink">{lang.name}</dt>
                <dd className="text-sm text-ink-muted">{lang.level}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Qualités</h2>
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
  );
}
