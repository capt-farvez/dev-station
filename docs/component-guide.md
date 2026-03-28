# Component Guide

This document explains each component, its purpose, props, and where it's used.

## Layout Components

### `Navbar` — `src/components/layout/Navbar.tsx`

Sticky navigation bar at the top of every page.

- **Type:** Client component (`"use client"`)
- **Behavior:** Highlights the active route using `usePathname()`
- **Links:** Home, Projects, Play Zone

### `Footer` — `src/components/layout/Footer.tsx`

Minimal footer at the bottom of every page.

- **Type:** Server component
- **Contains:** Logo, copyright year (auto-updates), navigation links, GitHub link

### `HeroSection` — `src/components/layout/HeroSection.tsx`

Hero banner shown only on the home page.

- **Type:** Server component
- **Contains:** Tagline, description, CTA buttons (Browse Projects / Play Games), stats grid
- **Styling:** Grid background pattern, radial glow effect, animated status badge

---

## Project Components

### `ProjectCard` — `src/components/projects/ProjectCard.tsx`

Individual project card displayed in grids.

| Prop      | Type      | Description        |
| --------- | --------- | ------------------ |
| `project` | `Project` | The project to render |

**Adaptive buttons based on category:**
- Shows "Live Demo" if `links.live` exists
- Shows "Play Now" if `links.play` exists
- Shows "Download" if `downloads` exists
- Shows "Source" if `links.source` exists

### `ProjectGrid` — `src/components/projects/ProjectGrid.tsx`

Responsive grid that renders an array of `ProjectCard` components.

| Prop       | Type        | Description              |
| ---------- | ----------- | ------------------------ |
| `projects` | `Project[]` | Projects to display      |

Shows an empty state message when the array is empty.

**Grid layout:** 1 column on mobile, 2 on tablet, 3 on desktop.

### `ProjectDetail` — `src/components/projects/ProjectDetail.tsx`

Full project detail view used on `/projects/[slug]` pages.

| Prop      | Type      | Description        |
| --------- | --------- | ------------------ |
| `project` | `Project` | The project to render |

**Sections:**
- Back navigation link
- Cover image (full width)
- Category badge + date
- Title + long description
- Tech stack badges
- Action buttons (Live Demo, Play Now, Source Code)
- Download section (only for desktop apps with `downloads`)

### `CategoryFilter` — `src/components/projects/CategoryFilter.tsx`

Tab-style category selector for filtering projects.

| Prop       | Type                           | Description            |
| ---------- | ------------------------------ | ---------------------- |
| `selected` | `ProjectCategory \| "all"`     | Currently active category |
| `onChange` | `(cat: ProjectCategory \| "all") => void` | Selection handler |

- **Type:** Client component (`"use client"`)
- **Categories:** All Projects, Web Apps, AI Projects, Desktop Apps, Games, Tools

### `TechBadge` — `src/components/projects/TechBadge.tsx`

Small pill badge showing a technology name.

| Prop   | Type     | Description        |
| ------ | -------- | ------------------ |
| `name` | `string` | Technology name    |

---

## Game Components

### `GameCard` — `src/components/games/GameCard.tsx`

Game-specific card with a play overlay animation on hover.

| Prop   | Type      | Description    |
| ------ | --------- | -------------- |
| `game` | `Project` | Game project   |

**Features:**
- Hover effect shows a play button overlay
- Purple accent theme (vs emerald for regular projects)
- Full-width "Play Now" CTA button

### `GameEmbed` — `src/components/games/GameEmbed.tsx`

Container for embedding playable HTML5 games.

| Prop   | Type      | Description    |
| ------ | --------- | -------------- |
| `game` | `Project` | Game project   |

- **Type:** Client component (`"use client"`)
- **Usage:** Shown on `/play/[slug]` pages
- **Note:** Currently shows a placeholder. To embed a game, add the HTML5 build to `public/games/<slug>/index.html` and update the component to use an iframe

---

## UI Components

### `SearchBar` — `src/components/ui/SearchBar.tsx`

Search input with a magnifying glass icon.

| Prop          | Type                       | Description          |
| ------------- | -------------------------- | -------------------- |
| `value`       | `string`                   | Current search text  |
| `onChange`     | `(value: string) => void`  | Change handler       |
| `placeholder` | `string` (optional)        | Input placeholder    |

- **Type:** Client component (`"use client"`)

---

## Component Hierarchy

```
RootLayout (layout.tsx)
├── Navbar
├── <main>
│   ├── Home (/)
│   │   ├── HeroSection
│   │   ├── ProjectGrid (featured)
│   │   └── ProjectGrid (games preview)
│   │
│   ├── Projects (/projects)
│   │   ├── CategoryFilter
│   │   ├── SearchBar
│   │   └── ProjectGrid → ProjectCard[] → TechBadge[]
│   │
│   ├── Project Detail (/projects/[slug])
│   │   └── ProjectDetail → TechBadge[]
│   │
│   ├── Play Zone (/play)
│   │   └── GameCard[]
│   │
│   └── Game Player (/play/[slug])
│       └── GameEmbed
│
└── Footer
```
