# Rayane Bahmed — Portfolio

Portfolio professionnel construit avec Next.js 14 (App Router), TypeScript et Tailwind CSS. Contenu réel extrait du CV de Rayane Bahmed et des dépôts GitHub publics du projet.

## Stack

- Next.js 14 (App Router, React Server Components par défaut)
- TypeScript strict (`noImplicitAny`, `noUncheckedIndexedAccess`)
- Tailwind CSS (tokens custom, pas de librairie de composants)
- `next/font` (Space Grotesk pour les titres, Inter pour le corps de texte)
- Déploiement cible : Vercel

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout racine, fonts, métadonnées globales
│   ├── page.tsx             # / — Hero + projets phares + parcours
│   ├── globals.css
│   ├── sitemap.ts           # /sitemap.xml généré dynamiquement
│   ├── robots.ts            # /robots.txt généré dynamiquement
│   ├── projets/page.tsx      # /projets — toutes les cards projets
│   ├── competences/page.tsx  # /competences — skills groupés par catégorie
│   └── contact/
│       ├── page.tsx
│       └── ContactForm.tsx   # seul Client Component (interactivité du formulaire)
├── components/               # Header, Footer, SkipLink, ProjectCard, Badge, SectionHeading, icons
├── data/                     # profile.ts, projects.ts, skills.ts — contenu réel (pas de lorem ipsum)
└── lib/types.ts              # types TypeScript partagés
```

## Origine du contenu

- **CV** (`CV Rayane BAHMED.pdf`) : identité, bio, expériences, formations, compétences, langues, contact.
- **Dépôts GitHub** (`RayyonGitHub`) : description, stack technique et liens extraits via l'API GitHub (README, `languages`, contenu racine) pour :
  - `ATHLO_COACHING_BACK` / `ATHLO_COACHING_FRONT` / `ATHLO_COACHING_APP`
  - `Outil_Gestion_Stock_Back` / `Outil_Gestion_Stock_Front`
  - `Encoder-Dashcam` / `Decoder-Dashcam`
- 4 projets du CV sans dépôt public (Simulateur de mobilité urbaine, Apocal'ipssi, Pentest, Marketplace freelance) sont affichés en cards sans lien GitHub, comme convenu.

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

Le formulaire `/contact` n'a pas de dépendance externe (pas de Formspree configuré) : à la soumission, il construit une URL `mailto:` pré-remplie (sujet + message + email de l'expéditeur) vers `rayanbahmed@gmail.com` et ouvre le client email par défaut de l'utilisateur. Les coordonnées directes (email, téléphone, réseaux) sont aussi affichées en clair sur la page.

## Accessibilité (WCAG 2.2 AA)

- Skip-link vers le contenu principal sur chaque page.
- Contrastes du thème sombre vérifiés (texte clair sur fond `#0a0a0f`, accent orange `#ff8a3d` réservé aux éléments interactifs).
- États `focus-visible` explicites sur tous les éléments interactifs (liens, boutons, champs).
- `aria-label` sur les liens ouvrant un nouvel onglet (GitHub, LinkedIn) et sur les listes de badges techniques.
- Structure sémantique : un seul `<h1>` par page, hiérarchie de titres respectée, `<nav>`, `<main>`, `<footer>` correctement balisés.

## Sécurité des dépendances

Le projet est figé sur Next.js 14 (App Router) comme demandé, à la version patchée la plus récente de la branche (`14.2.35`). `npm audit` signale encore quelques avisos GitHub dont le correctif officiel n'a été backporté que sur les branches 15.x/16.x de Next.js — ils sont donc inhérents au choix de rester sur la v14. Pour les éliminer complètement, il faudrait migrer vers Next.js 15 ou 16 (hors périmètre de cette demande).
