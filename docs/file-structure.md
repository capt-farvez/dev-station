# File Structure

## Root Directory

```
dev-station/
├── docs/                        # Documentation files
├── public/                      # Static assets (served as-is)
│   ├── images/
│   │   └── projects/            # Project cover images
│   │       ├── web/             #   Web app screenshots
│   │       ├── ai/              #   AI project screenshots
│   │       ├── desktop/         #   Desktop app screenshots
│   │       ├── games/           #   Game screenshots
│   │       └── tools/           #   Tool screenshots
│   ├── downloads/               # Desktop app installers (.exe, .dmg, .AppImage)
│   └── games/                   # Embeddable HTML5 game builds
│
├── src/                         # Source code
│   ├── app/                     # Next.js App Router (pages & layouts)
│   ├── components/              # Reusable React components
│   ├── data/                    # Static data (project definitions)
│   ├── lib/                     # Utility functions
│   └── types/                   # TypeScript type definitions
│
├── .gitignore                   # Git ignore rules
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── next-env.d.ts                # Next.js TypeScript declarations
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Locked dependency versions
├── postcss.config.mjs           # PostCSS configuration (Tailwind)
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project readme
```

## Source Directory (`src/`)

### `app/` — Pages & Routes

```
app/
├── layout.tsx                   # Root layout (Navbar + Footer wrapper)
├── page.tsx                     # Home page (hero, featured, play zone preview)
├── globals.css                  # Global styles and Tailwind imports
├── favicon.ico                  # Site favicon
├── not-found.tsx                # Custom 404 page
├── projects/
│   ├── page.tsx                 # All projects page (filter + search)
│   └── [slug]/
│       └── page.tsx             # Individual project detail page
└── play/
    ├── page.tsx                 # Play Zone listing page
    └── [slug]/
        └── page.tsx             # Game player page (embedded game)
```

### `components/` — Reusable Components

```
components/
├── layout/
│   ├── Navbar.tsx               # Sticky navigation bar with active route highlight
│   ├── Footer.tsx               # Site footer with links
│   └── HeroSection.tsx          # Hero banner with stats and CTAs
├── projects/
│   ├── ProjectCard.tsx          # Project card with cover image and action buttons
│   ├── ProjectGrid.tsx          # Responsive grid layout for project cards
│   ├── ProjectDetail.tsx        # Full project detail view (used on [slug] pages)
│   ├── CategoryFilter.tsx       # Category tab/pill selector
│   └── TechBadge.tsx            # Small tech stack badge pill
├── games/
│   ├── GameCard.tsx             # Game card with play overlay animation
│   └── GameEmbed.tsx            # Game embed container (iframe/canvas)
└── ui/
    └── SearchBar.tsx            # Search input with icon
```

### `data/` — Static Data

```
data/
└── projects.ts                  # All project definitions (single source of truth)
```

### `lib/` — Utilities

```
lib/
└── utils.ts                     # filterProjects, getFeaturedProjects,
                                 # getProjectBySlug, formatDate
```

### `types/` — TypeScript Types

```
types/
└── project.ts                   # Project, ProjectCategory, ProjectLinks,
                                 # ProjectDownloads, categoryLabels, categoryIcons
```

## Public Directory

### `public/images/projects/`

Each category has its own subfolder. Place cover images here, named to match the project `slug`:

```
images/projects/
├── web/
│   ├── siderian-cloud-admin.svg
│   └── dev-station.svg
├── ai/
│   └── ai-image-generator.svg
├── desktop/
│   └── smart-note.svg
├── games/
│   ├── space-invaders.svg
│   └── snake-game.svg
└── tools/
    └── cli-task-manager.svg
```

### `public/downloads/`

Place desktop app installers here. Reference them in the project's `downloads` field.

### `public/games/`

Place HTML5 game builds here. Each game should have its own folder with an `index.html`:

```
games/
├── space-invaders/
│   └── index.html
└── snake-game/
    └── index.html
```
