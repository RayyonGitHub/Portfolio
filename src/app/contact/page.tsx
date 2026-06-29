import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contacter ${profile.name} pour une alternance, une mission freelance ou un projet.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${profile.name}`,
    description: `Contacter ${profile.name} pour une alternance, une mission freelance ou un projet.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Travaillons ensemble"
        description="Le formulaire ouvre votre client email avec le message prérempli. Vous pouvez aussi me contacter directement."
      />

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-border bg-bg-raised p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Coordonnées directes</h2>
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
            <h2 className="font-display text-lg font-semibold text-ink">Réseaux</h2>
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
  );
}
