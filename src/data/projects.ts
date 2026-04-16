import { Project } from "@/types/project";

export const projects: Project[] = [
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
      live: "https://bss-rms.vercel.app/",
      source: "https://github.com/capt-farvez/bss-rms",
    },
    date: "2025-10-01",
  },
  {
    slug: "obemaster",
    title: "OBEmaster",
    description:
      "A web application for Outcome-Based Education (OBE) management, supporting 12,000+ student assessments.",
    longDescription:
      "OBEmaster is a comprehensive web application designed to streamline Outcome-Based Education (OBE) processes in universities, co-developed during final year at UAP. Built using Django REST Framework on the backend and React.js with Tailwind CSS on the frontend, it supports 12,000+ student assessments, generating in-depth results and OBE-aligned reports. Features include Google OAuth integration for secure account management, advanced analytics and reporting system for academic assessment. Currently under review for official use at the University of Asia Pacific.",
    category: "web",
    coverImage: "/images/projects/web/obemaster.svg",
    techStack: ["Django REST Framework", "React.js", "Tailwind CSS", "PostgreSQL", "Google OAuth"],
    featured: true,
    links: {},
    date: "2025-08-01",
  },
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
    links: {},
    date: "2025-12-01",
  },
  {
    slug: "bestdeal",
    title: "BestDeal",
    description:
      "A comparative shopping web application that finds the best prices across multiple online platforms.",
    longDescription:
      "BestDeal is a powerful comparative shopping web application that empowers users to find the best prices for products across various online platforms. Built with Python and Django, it features real-time price comparison across multiple e-commerce platforms, an integrated chatbot for natural user interaction and shopping assistance, advanced web scraping capabilities for accurate price tracking, and a user-friendly interface for seamless shopping experience.",
    category: "web",
    coverImage: "/images/projects/web/bestdeal.svg",
    techStack: ["Python", "Django", "Web Scraping", "RESTful APIs"],
    featured: true,
    links: {
      source: "https://github.com/capt-farvez/BestDeal",
    },
    date: "2025-03-01",
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
    featured: false,
    links: {
      live: "https://farvez.me/dev-station/",
      source: "https://github.com/capt-farvez/dev-station",
    },
    date: "2026-03-28",
  },
  {
    slug: "researchlog",
    title: "ResearchLog",
    description:
      "An online research paper repository for the University of Asia Pacific community.",
    longDescription:
      "ResearchLog is an innovative online platform exclusively designed for the University of Asia Pacific community, enabling researchers to easily upload and share their valuable research papers and publications. It features advanced search and filtering functionalities across various disciplines, easy navigation through different categories and related works, and real-time updates on the latest developments in respective fields.",
    category: "web",
    coverImage: "/images/projects/web/researchlog.svg",
    techStack: ["Web Development"],
    featured: false,
    links: {},
    date: "2024-12-01",
  },
  {
    slug: "weatherspotter",
    title: "WeatherSpotter",
    description:
      "A web-based weather application for checking weather conditions worldwide.",
    longDescription:
      "WeatherSpotter is a user-friendly weather application built with Django REST Framework that allows users to check weather conditions for any location worldwide. It features location-based weather search functionality, real-time weather data using REST APIs, a user-friendly interface for location selection, and accurate weather forecasts for any selected location.",
    category: "web",
    coverImage: "/images/projects/web/weatherspotter.svg",
    techStack: ["Django", "Django REST Framework", "Weather APIs"],
    featured: false,
    links: {},
    date: "2024-10-01",
  },
  {
    slug: "todomate",
    title: "TodoMate",
    description:
      "A simple and intuitive task management app to stay organized and manage daily tasks.",
    longDescription:
      "TodoMate is designed to help you stay organized and manage your daily tasks efficiently, ensuring that nothing falls through the cracks. Features include creating and tracking daily tasks, prioritizing tasks based on importance, a simple and intuitive user interface, task completion tracking and management, and task categorization to stay organized.",
    category: "tool",
    coverImage: "/images/projects/tools/todomate.svg",
    techStack: ["Web Development"],
    featured: false,
    links: {
      source: "https://github.com/capt-farvez/TodoMate",
    },
    date: "2024-08-01",
  },
  {
    slug: "quizz",
    title: "Quizz",
    description:
      "An interactive online education platform for enhancing knowledge through quizzes.",
    longDescription:
      "Quizz is an engaging platform designed to help students enhance their knowledge through exciting quizzes while tracking their progress and improvement over time. It offers a wide variety of quizzes across different subjects and topics, multiple quiz formats including multiple-choice, fill-in-the-blanks, and matching exercises, progress tracking and performance measurement, and a dynamic learning experience combining knowledge acquisition with self-assessment.",
    category: "web",
    coverImage: "/images/projects/web/quizz.svg",
    techStack: ["Web Development"],
    featured: false,
    links: {},
    date: "2024-06-01",
  },
  {
    slug: "ashol",
    title: "Ashol",
    description:
      "A web-based platform to verify the authenticity and validity of restaurant branches.",
    longDescription:
      "Ashol is a web-based application designed to empower customers by providing a convenient and user-friendly platform to verify the authenticity and validity of restaurant branches in their vicinity. It features location-based restaurant search, a user-friendly interface for restaurant verification, and serves as a reliable resource for customer decision-making, promoting trust and transparency in restaurant selection.",
    category: "web",
    coverImage: "/images/projects/web/ashol.svg",
    techStack: ["Web Development"],
    featured: false,
    links: {},
    date: "2024-04-01",
  },
  {
    slug: "perahin",
    title: "Perahin",
    description:
      "A student data management system built with C for managing academic records.",
    longDescription:
      "Perahin is a comprehensive student data management system developed using C programming language, designed to help teachers efficiently store and manage student information and track academic progress. Features include storing and organizing student basic details (name, DOB, contact information), managing academic records and performance tracking, attendance management system, disciplinary records management, and a streamlined data management interface.",
    category: "desktop",
    coverImage: "/images/projects/desktop/perahin.svg",
    techStack: ["C"],
    featured: false,
    links: {},
    date: "2023-12-01",
  },
  {
    slug: "banking-system",
    title: "Banking System",
    description:
      "A secure banking application with account management, transfers, and bill payment services.",
    longDescription:
      "A comprehensive banking application that provides a wide range of convenient services while ensuring the confidentiality and integrity of customer data through advanced security measures. Features include account balance inquiries and statements, fund transfers between accounts, bill payment services, loan application and management, advanced encryption techniques for data security, and robust authentication protocols.",
    category: "desktop",
    coverImage: "/images/projects/desktop/banking-system.svg",
    techStack: ["Programming"],
    featured: false,
    links: {},
    date: "2023-10-01",
  },
  {
    slug: "drf-celery-redis-libraryapi",
    title: "Library API",
    description:
      "A Django REST Framework library API with Celery background tasks and Redis caching.",
    longDescription:
      "A production-ready Library API built with Django REST Framework, integrated with Celery for background task processing and Redis for caching and task queueing. Features include full CRUD operations for library resources, filtering and search capabilities, asynchronous task processing via Celery workers, Redis-based caching for improved performance, and a Docker-ready setup for easy deployment.",
    category: "web",
    coverImage: "/images/projects/web/drf-library-api.svg",
    techStack: ["Django REST Framework", "Celery", "Redis", "PostgreSQL", "Docker"],
    featured: false,
    links: {
      source: "https://github.com/capt-farvez/drf-celery-redis-libraryapi",
    },
    date: "2024-11-01",
  },
  {
    slug: "3d-shooter",
    title: "3D Shooter",
    description:
      "An interactive 3D road scene with dynamic lighting and camera controls built with OpenGL, playable in the browser via Three.js.",
    longDescription:
      "3D Shooter is an interactive 3D scene originally built with C++ and OpenGL, ported to Three.js for browser play. It features a road environment with 24 buildings, dynamic lighting including directional and point lights using Phong shading, first-person camera controls (WASD + mouse), a shooting mechanic, background music, and an animated enemy character. Built as a CSE 426 Computer Graphics lab project demonstrating advanced computer graphics concepts.",
    category: "game",
    coverImage: "/images/projects/games/3d-shooter.svg",
    techStack: ["C++", "OpenGL", "GLSL", "Three.js"],
    featured: true,
    links: {
      play: "/play/3d-shooter",
      source: "https://github.com/capt-farvez/3D-Shooter",
    },
    date: "2024-02-01",
  },
  {
    slug: "ai-chat-log-summarizer",
    title: "AI Chat Summarizer",
    description:
      "A Python tool that analyzes chat logs and generates summaries with keyword extraction.",
    longDescription:
      "AI Chat Log Summarizer is a Python tool that analyzes conversation logs and generates comprehensive summaries with statistics. It separates chat logs by speaker (User vs. AI), generates message statistics and counts, extracts top keywords using NLTK (excluding stopwords), supports batch processing of multiple chat logs from directories, and produces summary reports with conversation topics.",
    category: "tool",
    coverImage: "/images/projects/tools/ai-chat-summarizer.svg",
    techStack: ["Python", "NLTK"],
    featured: false,
    links: {
      source: "https://github.com/capt-farvez/ai-chat-log-summarizer-script",
    },
    date: "2025-01-01",
  },
  {
    slug: "kubernetes-microservices-demo",
    title: "K8s Microservices Demo",
    description:
      "A practical Kubernetes microservices demo with FastAPI services and API gateway.",
    longDescription:
      "A comprehensive Kubernetes microservices demonstration featuring three interconnected FastAPI services with KrakenD API Gateway integration. Supports multiple deployment modes including Docker Compose, Kubernetes, and local development. Includes health checks, service discovery, auto-generated Swagger documentation, and detailed deployment guides for all environments. Built as a production-ready learning resource for microservices architecture.",
    category: "tool",
    coverImage: "/images/projects/tools/k8s-microservices.svg",
    techStack: ["Python", "FastAPI", "Docker", "Kubernetes", "KrakenD"],
    featured: false,
    links: {
      source: "https://github.com/capt-farvez/kubernetes-microservices-demo",
    },
    date: "2025-02-01",
  },
];
