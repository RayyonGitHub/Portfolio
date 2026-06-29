"use client";

import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "top", href: "#top", label: "Accueil" },
  { id: "projets", href: "#projets", label: "Projets" },
  { id: "competences", href: "#competences", label: "Compétences" },
  { id: "contact", href: "#contact", label: "Contact" },
];

export function Header() {
  const [activeId, setActiveId] = useState<string>("top");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          className="rounded-md font-display text-lg font-semibold tracking-tight text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Rayane Bahmed
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                    isActive ? "text-accent" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
