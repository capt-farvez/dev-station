# Adding Projects

All projects are defined in a single file: `src/data/projects.ts`. This is the only file you need to edit to add, update, or remove projects.

## Step-by-Step

### 1. Add a cover image

Place your project screenshot or cover image in the appropriate category folder:

```
public/images/projects/<category>/<slug>.png
```

For example:
```
public/images/projects/web/my-new-app.png
```

Recommended image size: **1200x675** (16:9 aspect ratio).

### 2. Add the project entry

Open `src/data/projects.ts` and add a new object to the `projects` array:

```ts
{
  slug: "my-new-app",
  title: "My New App",
  description: "A short one-liner that appears on the card.",
  longDescription: "A detailed description shown on the project detail page. Explain what the project does, why you built it, and what makes it special.",
  category: "web",
  coverImage: "/images/projects/web/my-new-app.png",
  techStack: ["React", "Node.js", "PostgreSQL"],
  featured: true,
  links: {
    live: "https://my-new-app.com",
    source: "https://github.com/your-username/my-new-app",
  },
  date: "2026-01-15",
}
```

### 3. Rebuild or refresh

If the dev server is running, changes are reflected immediately. For production, redeploy.

## Project Fields Reference

| Field             | Type       | Required | Description                                      |
| ----------------- | ---------- | -------- | ------------------------------------------------ |
| `slug`            | `string`   | Yes      | URL-safe identifier (used in `/projects/[slug]`) |
| `title`           | `string`   | Yes      | Display name                                     |
| `description`     | `string`   | Yes      | Short tagline for cards                          |
| `longDescription` | `string`   | Yes      | Full description for detail page                 |
| `category`        | `string`   | Yes      | `"web"`, `"ai"`, `"desktop"`, `"game"`, `"tool"` |
| `coverImage`      | `string`   | Yes      | Path to cover image in `/public`                 |
| `techStack`       | `string[]` | Yes      | List of technologies used                        |
| `featured`        | `boolean`  | Yes      | Show on home page featured section               |
| `links.live`      | `string`   | No       | URL to live demo                                 |
| `links.source`    | `string`   | No       | URL to source code repository                    |
| `links.play`      | `string`   | No       | Path to play page (games only, e.g. `/play/slug`)|
| `links.download`  | `string`   | No       | Direct download URL                              |
| `downloads`       | `object`   | No       | Platform-specific downloads (desktop apps only)  |
| `downloads.windows` | `string` | No       | Path to Windows installer                        |
| `downloads.mac`   | `string`   | No       | Path to macOS installer                          |
| `downloads.linux` | `string`   | No       | Path to Linux installer                          |
| `date`            | `string`   | Yes      | Date in `YYYY-MM-DD` format                      |

## Category-Specific Examples

### Web App

```ts
{
  slug: "task-board",
  title: "Task Board",
  description: "A Kanban-style task management app.",
  longDescription: "...",
  category: "web",
  coverImage: "/images/projects/web/task-board.png",
  techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  featured: true,
  links: {
    live: "https://task-board.example.com",
    source: "https://github.com/your-username/task-board",
  },
  date: "2026-02-20",
}
```

### Desktop App (with downloads)

```ts
{
  slug: "code-editor",
  title: "Code Editor",
  description: "A lightweight desktop code editor.",
  longDescription: "...",
  category: "desktop",
  coverImage: "/images/projects/desktop/code-editor.png",
  techStack: ["Electron", "TypeScript", "Monaco Editor"],
  featured: false,
  links: {
    source: "https://github.com/your-username/code-editor",
  },
  downloads: {
    windows: "/downloads/code-editor-setup.exe",
    mac: "/downloads/code-editor.dmg",
    linux: "/downloads/code-editor.AppImage",
  },
  date: "2026-01-10",
}
```

### Browser Game (playable)

```ts
{
  slug: "tetris",
  title: "Tetris",
  description: "Classic Tetris game in your browser.",
  longDescription: "...",
  category: "game",
  coverImage: "/images/projects/games/tetris.png",
  techStack: ["TypeScript", "HTML5 Canvas"],
  featured: true,
  links: {
    play: "/play/tetris",
    source: "https://github.com/your-username/tetris",
  },
  date: "2026-03-01",
}
```

For playable games, also place the HTML5 build in `public/games/<slug>/index.html`.

### AI Project

```ts
{
  slug: "chatbot",
  title: "AI Chatbot",
  description: "An intelligent chatbot powered by LLMs.",
  longDescription: "...",
  category: "ai",
  coverImage: "/images/projects/ai/chatbot.png",
  techStack: ["Python", "FastAPI", "React", "OpenAI"],
  featured: true,
  links: {
    live: "https://chatbot.example.com",
    source: "https://github.com/your-username/chatbot",
  },
  date: "2025-11-20",
}
```
