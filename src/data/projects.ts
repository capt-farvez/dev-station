import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ml-diabetes-predictor",
    title: "ML Diabetes Predictor",
    description:
      "A machine learning web app that predicts diabetes likelihood from health metrics using a Random Forest model.",
    longDescription:
      "ML Diabetes Predictor is a machine learning web application that lets users input 8 medical parameters — pregnancies, glucose, blood pressure, skin thickness, insulin, BMI, diabetes pedigree function, and age — and instantly receive a diabetes risk prediction. The backend is built with Flask and uses a Random Forest Classifier (20 estimators) trained on a cleaned diabetes dataset. The ML pipeline handles missing-value imputation (mean for glucose/blood pressure, median for skin thickness/insulin/BMI) before training. The trained model is serialized with pickle for fast inference. The app includes a clean HTML form UI, a /predict endpoint for predictions, and an /about page showing model accuracy. Containerized with Docker and deployed on Render.",
    category: "ai",
    coverImage: "/images/projects/ai/ml-diabetes-predictor.svg",
    techStack: ["Python", "Flask", "scikit-learn", "pandas", "Docker"],
    featured: true,
    links: {
      live: "https://ml-diabetes-predictor-p3pz.onrender.com",
      source: "https://github.com/capt-farvez/ml-diabetes-predictor",
    },
    date: "2025-06-10",
  },
  {
    slug: "bss-rms",
    title: "BSS Restaurant Management System",
    description:
      "A full-stack restaurant management system with orders, analytics, expense tracking, and real-time dashboards.",
    longDescription:
      "BSS RMS is a comprehensive restaurant management platform built for Bangladesh Software Solution. The Angular SPA frontend paired with a clean architecture ASP.NET Core API covers the full restaurant workflow. Features include JWT authentication with sign-up/sign-in, an employee management module with image uploads, table management with employee-to-table assignments, a complete food inventory system, and a powerful order management flow with six status stages (Pending, Confirmed, Preparing, PreparedToServe, Served, Paid). The new-order page features infinite scroll food selection with a draggable floating cart. An expense tracking module records operational costs, and the Reports & Analytics page provides daily/monthly/yearly breakdowns of sales, expenses, and revenue with interactive bar and pie charts powered by ngx-charts. The real-time dashboard shows today's orders, table occupancy, available tables, total employees, recent orders, and top-selling items with revenue. Built with repository pattern, dependency injection, AutoMapper, Entity Framework Core, and fully documented via Swagger.",
    category: "web",
    coverImage: "/images/projects/web/bss-rms.svg",
    techStack: ["Angular", "ASP.NET Core", "TypeScript", "SQL Server", "Tailwind CSS", "Entity Framework"],
    featured: true,
    links: {
      live: "https://restaurant.farvez.me",
      source: "https://github.com/capt-farvez/bss-rms",
    },
    date: "2025-10-01",
  },
  {
    slug: "siderian-cloud-admin",
    title: "Siderian Cloud Admin",
    description:
      "A comprehensive cloud administration panel with dashboard, security management, and setup modules.",
    longDescription:
      "Siderian Cloud Admin is a full-featured enterprise administration platform built with ASP.NET Core and Angular. It includes power dashboards, security management (organizations, employees, departments, positions), and extensive setup configuration for foundations, risks, impacts, processing types, and contracts.",
    category: "web",
    coverImage: "/images/projects/web/siderian-cloud-admin.svg",
    techStack: ["ASP.NET Core", "Angular", "TypeScript", "SQL Server"],
    featured: true,
    links: {
      source: "https://github.com/your-username/siderian-cloud-admin",
    },
    date: "2025-12-01",
  },
  {
    slug: "dev-station",
    title: "Dev Station",
    description:
      "My personal developer portfolio — the central hub for all my projects.",
    longDescription:
      "Dev Station is this very portfolio website! Built with Next.js, TypeScript, and Tailwind CSS. It features category-based filtering, search, project detail pages, an embedded game player, and a dark command-center aesthetic.",
    category: "web",
    coverImage: "/images/projects/web/dev-station.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    links: {
      live: "https://dev-station.vercel.app",
      source: "https://github.com/your-username/dev-station",
    },
    date: "2026-03-28",
  },
  {
    slug: "ai-image-generator",
    title: "AI Image Generator",
    description:
      "Generate stunning images from text prompts using state-of-the-art AI models.",
    longDescription:
      "An AI-powered image generation tool that leverages diffusion models to create images from natural language descriptions. Features include prompt suggestions, image history, style presets, and batch generation.",
    category: "ai",
    coverImage: "/images/projects/ai/ai-image-generator.svg",
    techStack: ["Python", "FastAPI", "React", "Stable Diffusion"],
    featured: true,
    links: {
      live: "https://ai-image-gen.example.com",
      source: "https://github.com/your-username/ai-image-generator",
    },
    date: "2025-09-15",
  },
  {
    slug: "smart-note-desktop",
    title: "Smart Note",
    description:
      "A cross-platform desktop note-taking app with AI-powered organization.",
    longDescription:
      "Smart Note is a desktop application built with Electron that provides an intelligent note-taking experience. Features include AI-powered auto-tagging, full-text search, markdown support, and cloud sync across devices.",
    category: "desktop",
    coverImage: "/images/projects/desktop/smart-note.svg",
    techStack: ["Electron", "React", "TypeScript", "SQLite"],
    featured: false,
    links: {
      source: "https://github.com/your-username/smart-note",
    },
    downloads: {
      windows: "/downloads/smart-note-setup.exe",
      mac: "/downloads/smart-note.dmg",
      linux: "/downloads/smart-note.AppImage",
    },
    date: "2025-06-20",
  },
  {
    slug: "space-invaders",
    title: "Space Invaders",
    description:
      "A classic Space Invaders clone built with vanilla JavaScript and HTML5 Canvas.",
    longDescription:
      "Relive the classic arcade experience! This Space Invaders game is built entirely with vanilla JavaScript and HTML5 Canvas. Features include progressive difficulty, power-ups, high score tracking, and retro sound effects.",
    category: "game",
    coverImage: "/images/projects/games/space-invaders.svg",
    techStack: ["JavaScript", "HTML5 Canvas", "CSS"],
    featured: true,
    links: {
      play: "/play/space-invaders",
      source: "https://github.com/your-username/space-invaders",
    },
    date: "2025-04-10",
  },
  {
    slug: "snake-game",
    title: "Snake Game",
    description: "The timeless Snake game with modern visuals and smooth controls.",
    longDescription:
      "A modern take on the classic Snake game. Built with TypeScript and HTML5 Canvas featuring smooth animations, multiple themes, difficulty levels, and a global leaderboard.",
    category: "game",
    coverImage: "/images/projects/games/snake-game.svg",
    techStack: ["TypeScript", "HTML5 Canvas"],
    featured: false,
    links: {
      play: "/play/snake-game",
      source: "https://github.com/your-username/snake-game",
    },
    date: "2025-03-05",
  },
  {
    slug: "cli-task-manager",
    title: "CLI Task Manager",
    description:
      "A fast, keyboard-driven task manager for the terminal.",
    longDescription:
      "A terminal-based task manager built with Go. Features include priority-based sorting, due date reminders, project grouping, and seamless integration with Git workflow. Perfect for developers who live in the terminal.",
    category: "tool",
    coverImage: "/images/projects/tools/cli-task-manager.svg",
    techStack: ["Go", "Cobra", "SQLite"],
    featured: false,
    links: {
      source: "https://github.com/your-username/cli-task-manager",
    },
    date: "2025-07-12",
  },
];
