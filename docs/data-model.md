# Data Model

## Overview

Dev Station uses a static data approach — all project information is defined in TypeScript and rendered at build time. No database or CMS is required.

## Type Definitions

All types are defined in `src/types/project.ts`.

### `ProjectCategory`

```ts
type ProjectCategory = "web" | "ai" | "desktop" | "game" | "tool";
```

| Value     | Label              | Accent Color |
| --------- | ------------------ | ------------ |
| `web`     | Web Apps           | Emerald      |
| `ai`      | AI Projects        | Purple       |
| `desktop` | Desktop Apps       | Blue         |
| `game`    | Games              | Violet       |
| `tool`    | Tools & Experiments| Orange       |

### `ProjectLinks`

```ts
interface ProjectLinks {
  live?: string;      // URL to live demo
  source?: string;    // URL to source code
  download?: string;  // Direct download URL
  play?: string;      // Internal path to play page
}
```

### `ProjectDownloads`

```ts
interface ProjectDownloads {
  windows?: string;   // Path to .exe installer
  mac?: string;       // Path to .dmg installer
  linux?: string;     // Path to .AppImage
}
```

### `Project`

```ts
interface Project {
  slug: string;                   // URL identifier
  title: string;                  // Display name
  description: string;            // Short tagline (shown on cards)
  longDescription: string;        // Full description (shown on detail page)
  category: ProjectCategory;      // Project category
  coverImage: string;             // Path to cover image
  techStack: string[];            // List of technologies
  featured: boolean;              // Show in featured section
  links: ProjectLinks;            // External/internal links
  downloads?: ProjectDownloads;   // Platform downloads (desktop only)
  date: string;                   // Date string (YYYY-MM-DD)
}
```

## Lookup Maps

### `categoryLabels`

Maps category values to human-readable labels:

```ts
const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web Apps",
  ai: "AI Projects",
  desktop: "Desktop Apps",
  game: "Games",
  tool: "Tools & Experiments",
};
```

### `categoryIcons`

Maps category values to icon identifiers:

```ts
const categoryIcons: Record<ProjectCategory, string> = {
  web: "globe",
  ai: "brain",
  desktop: "monitor",
  game: "gamepad",
  tool: "wrench",
};
```

## Utility Functions

Defined in `src/lib/utils.ts`:

### `filterProjects(projects, category, searchQuery)`

Filters projects by category and search query. Search matches against title, description, and tech stack (case-insensitive).

### `getFeaturedProjects(projects)`

Returns only projects with `featured: true`.

### `getProjectBySlug(projects, slug)`

Finds a single project by its slug. Returns `undefined` if not found.

### `formatDate(dateString)`

Converts a `YYYY-MM-DD` string to a formatted date like "March 28, 2026".

## Data Flow

```
src/data/projects.ts          ← Single source of truth
        │
        ├── src/app/page.tsx           (home: featured + games)
        ├── src/app/projects/page.tsx   (all: filtered + searched)
        ├── src/app/projects/[slug]     (detail: single project)
        ├── src/app/play/page.tsx       (games list)
        └── src/app/play/[slug]         (game player)
```

All pages import directly from `src/data/projects.ts` and use utility functions from `src/lib/utils.ts` to filter or look up data. There are no API routes or data fetching — everything is resolved at build time.
