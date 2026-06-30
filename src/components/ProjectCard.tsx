import Image from "next/image";
import { categoryLabels } from "@/data/projects";
import type { Project } from "@/lib/types";
import { Badge } from "@/components/Badge";
import { GitHubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-bg-raised transition-colors hover:border-accent/50 overflow-hidden">
      {project.image ? (
        <div className="relative h-44 w-full flex-shrink-0">
          <Image
            src={project.image}
            alt={`Capture d'écran du projet ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent">
          <span>{categoryLabels[project.category]}</span>
          <span className="text-ink-faint" aria-hidden="true">•</span>
          <span className="text-ink-faint">{project.period}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies utilisées">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        {project.repos.length > 0 ? (
          <ul className="mt-5 flex flex-col gap-2 border-t border-border-subtle pt-4">
            {project.repos.map((repo) => (
              <li key={repo.url}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Voir le dépôt ${repo.label} de ${project.title} sur GitHub (nouvel onglet)`}
                  className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-raised"
                >
                  <GitHubIcon className="h-4 w-4" />
                  {repo.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 border-t border-border-subtle pt-4 text-sm text-ink-faint">
            Projet académique ou freelance, sans dépôt public.
          </p>
        )}
      </div>
    </article>
  );
}
