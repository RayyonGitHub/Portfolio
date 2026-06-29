import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-8 text-sm text-ink-faint sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}. Tous droits réservés.
        </p>
        <ul className="flex items-center gap-4">
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
