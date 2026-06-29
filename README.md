# Rayane Bahmed | Portfolio

Portfolio professionnel construit avec Next.js 14 (App Router), TypeScript et Tailwind CSS. Site monopage (single-page) : tout le contenu vit sur `/`, organisé en sections ancrées, avec contenu réel extrait du CV de Rayane Bahmed et des dépôts GitHub publics du projet.

## Stack

- Next.js 14 (App Router, React Server Components par défaut)
- TypeScript strict (`noImplicitAny`, `noUncheckedIndexedAccess`)
- Tailwind CSS (tokens custom, pas de librairie de composants)
- `next/font` (Space Grotesk pour les titres, Inter pour le corps de texte)
- Déploiement cible : Vercel

## Structure

```text
src/
├── app/
│   ├── layout.tsx     # Layout racine, fonts, métadonnées globales
│   ├── page.tsx        # / — toutes les sections : Hero, Parcours, Projets, Compétences, Contact
│   ├── globals.css
│   ├── sitemap.ts      # /sitemap.xml généré dynamiquement (une seule URL)
│   └── robots.ts       # /robots.txt généré dynamiquement
├── components/
│   ├── Header.tsx       # Client Component : nav par ancres + indicateur de section active (IntersectionObserver)
│   ├── ContactForm.tsx  # Client Component : formulaire -> mailto: prérempli
│   ├── Footer.tsx, SkipLink.tsx, ProjectCard.tsx, Badge.tsx, SectionHeading.tsx, icons.tsx
├── data/                 # profile.ts, projects.ts, skills.ts — contenu réel (pas de lorem ipsum)
└── lib/types.ts          # types TypeScript partagés
```

Les sections de la page d'accueil ont chacune un `id` (`#top`, `#projets`, `#competences`, `#contact`) ciblé par la nav du `Header`. Le `Header` est le seul composant, avec `ContactForm`, à être un Client Component : il a besoin d'un `IntersectionObserver` pour savoir quelle section est visible et surligner le lien correspondant pendant le scroll.

## Origine du contenu

- **CV** (`CV Rayane BAHMED.pdf`) : identité, bio, expériences, formations, compétences, langues, contact.
- **Dépôts GitHub** (`RayyonGitHub`) : description, stack technique et liens extraits via l'API GitHub (README, `languages`, contenu racine) pour :
  - `ATHLO_COACHING_BACK` / `ATHLO_COACHING_FRONT` / `ATHLO_COACHING_APP`
  - `Outil_Gestion_Stock_Back` / `Outil_Gestion_Stock_Front`
  - `Encoder-Dashcam` / `Decoder-Dashcam`
- 2 projets du CV sans dépôt public (Simulateur de mobilité urbaine, Marketplace freelance) sont affichés en cards sans lien GitHub. Les projets "Apocal'ipssi" et "Pentest" du CV ont été retirés du portfolio à la demande de l'utilisateur.

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint (next/core-web-vitals)
npm run build   # build de production + vérification des types
```

## Déploiement sur Vercel

```bash
npm i -g vercel   # si pas déjà installé
vercel            # premier déploiement (preview)
vercel --prod     # déploiement en production
```

### Variable d'environnement

Définir `NEXT_PUBLIC_SITE_URL` dans les paramètres du projet Vercel (ex: `https://rayane-bahmed.vercel.app` ou un domaine personnalisé) — elle est utilisée pour les URLs absolues Open Graph, `sitemap.xml` et `robots.txt`. Sans cette variable, le site fonctionne avec une valeur par défaut codée dans `src/app/layout.tsx`.

## Formulaire de contact

La section `#contact` n'a pas de dépendance externe (pas de Formspree configuré) : à la soumission, le formulaire construit une URL `mailto:` pré-remplie (sujet + message + email de l'expéditeur) vers `rayanbahmed@gmail.com` et ouvre le client email par défaut de l'utilisateur. Les coordonnées directes (email, téléphone, réseaux) sont aussi affichées en clair dans cette section.

## Accessibilité (WCAG 2.2 AA)

- Skip-link vers le contenu principal.
- Contrastes du thème sombre vérifiés (texte clair sur fond `#0a0a0f`, accent orange `#ff8a3d` réservé aux éléments interactifs).
- États `focus-visible` explicites sur tous les éléments interactifs (liens, boutons, champs).
- `aria-label`/`aria-current` sur la nav active, et sur les liens ouvrant un nouvel onglet (GitHub, LinkedIn).
- Structure sémantique : un seul `<h1>` sur la page, hiérarchie de titres respectée (`<h2>` par section), `<nav>`, `<main>`, `<footer>` correctement balisés.

## Sécurité des dépendances

Le projet est figé sur Next.js 14 (App Router) comme demandé, à la version patchée la plus récente de la branche (`14.2.35`). `npm audit` signale encore quelques avis GitHub dont le correctif officiel n'a été backporté que sur les branches 15.x/16.x de Next.js — ils sont donc inhérents au choix de rester sur la v14. Pour les éliminer complètement, il faudrait migrer vers Next.js 15 ou 16 (hors périmètre de cette demande).
