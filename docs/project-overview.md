# Project Overview

## What is Dev Station?

Dev Station is a modern, dark-themed developer portfolio website built to showcase all projects in one central hub. It supports multiple project categories — web apps, AI projects, desktop applications, browser games, and developer tools — each with tailored presentation and action buttons.

## Key Features

- **Category-based browsing** — Filter projects by Web Apps, AI Projects, Desktop Apps, Games, and Tools
- **Full-text search** — Search across project names, descriptions, and tech stacks
- **Adaptive project cards** — Action buttons change based on category:
  - Web Apps → Live Demo + Source Code
  - Desktop Apps → Download (Windows/macOS/Linux) + Source Code
  - Games → Play Now (in-browser) + Source Code
  - AI Projects → Try It + Source Code
- **Project detail pages** — Full description, image gallery, tech breakdown, and links
- **Play Zone** — Dedicated section for embedded browser-playable games
- **Responsive design** — Works on mobile, tablet, and desktop
- **Dark theme** — Command-center aesthetic with emerald and purple accents

## Tech Stack

| Technology     | Version | Purpose                        |
| -------------- | ------- | ------------------------------ |
| Next.js        | 16.2.1  | React framework (App Router)   |
| React          | 19.2.4  | UI library                     |
| TypeScript     | 5.x     | Type safety                    |
| Tailwind CSS   | 4.x     | Utility-first styling          |
| Geist Font     | —       | Typography (Sans + Mono)       |

## Architecture

Dev Station follows a **static-first** approach:

1. All project data lives in a single TypeScript file (`src/data/projects.ts`)
2. Pages are statically generated at build time using `generateStaticParams`
3. No database, no CMS, no API calls — just edit the data file and redeploy
4. Client-side interactivity is limited to filtering and search on the projects page

This makes the site extremely fast, easy to maintain, and free to host on platforms like Vercel or Netlify.
