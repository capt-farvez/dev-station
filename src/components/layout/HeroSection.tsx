import Link from "next/link";
import { projects } from "@/data/projects";

export default function HeroSection() {
  const totalProjects = projects.length;
  const totalTechnologies = new Set(projects.flatMap((p) => p.techStack)).size;
  const playableGames = projects.filter((p) => p.category === "game").length;
  const categories = new Set(projects.map((p) => p.category)).size;

  const stats = [
    { value: `${totalProjects}+`, label: "Projects" },
    { value: `${totalTechnologies}+`, label: "Technologies" },
    { value: `${playableGames}+`, label: "Playable Games" },
    { value: `${categories}+`, label: "Categories" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open for opportunities
          </div>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to my{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Dev Station
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            A central hub where I build, experiment, and showcase all my
            projects. From web apps to games, AI tools to desktop
            applications — everything lives here.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              Browse Projects
            </Link>
            <Link
              href="/play"
              className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Play Games
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
