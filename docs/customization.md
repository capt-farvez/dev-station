# Customization Guide

## Changing Site Identity

### Site Title & Description

Edit `src/app/layout.tsx`:

```ts
export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Your custom description here.",
};
```

### Logo & Brand Name

Edit `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`:

- Change the `DS` text in the logo box to your initials
- Change `"Dev Station"` to your site name

### GitHub Link

Update the GitHub URL in `src/components/layout/Footer.tsx`:

```tsx
<a href="https://github.com/your-actual-username" ...>
```

## Changing Colors

The site uses a consistent color system. The main accent colors are:

| Element          | Current Color   | Tailwind Class       |
| ---------------- | --------------- | -------------------- |
| Primary accent   | Emerald         | `emerald-400/500`    |
| Games accent     | Purple/Violet   | `purple-400/500`     |
| Downloads accent | Blue            | `blue-400/500`       |
| Background       | Zinc 950        | `bg-zinc-950`        |
| Card background  | Zinc 900        | `bg-zinc-900/50`     |
| Borders          | Zinc 800        | `border-zinc-800`    |
| Body text        | Zinc 400        | `text-zinc-400`      |

To change the primary accent from emerald to another color (e.g., blue), search and replace across components:

- `emerald-400` → `blue-400`
- `emerald-500` → `blue-500`
- `emerald-300` → `blue-300`

## Changing the Hero Section

Edit `src/components/layout/HeroSection.tsx`:

- **Status badge text** — Change "Open for opportunities" to whatever fits
- **Heading** — Modify the `<h1>` content
- **Description** — Update the `<p>` paragraph
- **Stats** — Edit the stats array with your own numbers
- **CTA buttons** — Change button labels and links

## Adding a New Category

1. Add the category to the type in `src/types/project.ts`:

```ts
export type ProjectCategory = "web" | "ai" | "desktop" | "game" | "tool" | "mobile";
```

2. Add the label and icon:

```ts
export const categoryLabels: Record<ProjectCategory, string> = {
  // ...existing
  mobile: "Mobile Apps",
};

export const categoryIcons: Record<ProjectCategory, string> = {
  // ...existing
  mobile: "smartphone",
};
```

3. Add the category to the filter in `src/components/projects/CategoryFilter.tsx`:

```ts
const categories: (ProjectCategory | "all")[] = [
  "all", "web", "ai", "desktop", "game", "tool", "mobile",
];
```

4. Create an image folder:

```bash
mkdir public/images/projects/mobile
```

## Adding Social Links

To add social links (LinkedIn, Twitter, etc.) to the footer, edit `src/components/layout/Footer.tsx` and add more `<a>` tags in the links section.

## Customizing the 404 Page

Edit `src/app/not-found.tsx` to change the text, styling, or add a custom illustration.

## Switching to Light Theme

The site is dark-themed by default. To create a light theme:

1. Update `src/app/globals.css` root variables:

```css
:root {
  --background: #fafafa;
  --foreground: #09090b;
}
```

2. Replace dark utility classes across components:
   - `bg-zinc-950` → `bg-white`
   - `bg-zinc-900` → `bg-zinc-50`
   - `text-white` → `text-zinc-900`
   - `text-zinc-400` → `text-zinc-600`
   - `border-zinc-800` → `border-zinc-200`
