# Setup & Installation

## Prerequisites

- **Node.js** — version 18.x or higher ([download](https://nodejs.org))
- **npm** — comes with Node.js (used as the package manager)
- **Git** — for cloning the repository

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/your-username/dev-station.git
cd dev-station
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The site will be available at **http://localhost:3000**.

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Create production build                  |
| `npm run start` | Serve the production build locally       |
| `npm run lint`  | Run ESLint to check for code issues      |

## Environment Setup

No environment variables are required. The site uses static data and has no external API dependencies.

If you add features that need environment variables in the future, create a `.env.local` file in the root:

```
# .env.local (not committed to git)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## IDE Setup

### VS Code (Recommended)

Install these extensions for the best experience:

- **ESLint** — Linting
- **Tailwind CSS IntelliSense** — Tailwind class autocomplete
- **TypeScript Vue Plugin** is not needed; TypeScript support is built-in

### Settings

Add to your VS Code `settings.json` for Tailwind v4 support:

```json
{
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "css.validate": false,
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*[:=]\\s*['\"]([^'\"]*)['\"]"]
  ]
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Done. Every push to `main` triggers a new deployment

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and import the repository
3. Set build command to `npm run build`
4. Set publish directory to `.next`
5. Deploy

### Static Export (Self-hosted)

Add `output: 'export'` to `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

Then build and serve the `out/` directory:

```bash
npm run build
# Upload the 'out' folder to any static host
```
