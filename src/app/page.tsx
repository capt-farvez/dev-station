import HeroSection from "@/components/layout/HeroSection";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";
import { getFeaturedProjects } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const featured = getFeaturedProjects(projects);
  const games = projects.filter((p) => p.category === "game");

  return (
    <>
      <HeroSection />

      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Handpicked highlights from my work
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
          >
            View all &rarr;
          </Link>
        </div>
        <ProjectGrid projects={featured} />
      </section>

      {/* Play Zone Preview */}
      {games.length > 0 && (
        <section className="border-t border-zinc-800">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Play Zone
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Free games you can play right in your browser
                </p>
              </div>
              <Link
                href="/play"
                className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                All games &rarr;
              </Link>
            </div>
            <ProjectGrid projects={games.slice(0, 3)} />
          </div>
        </section>
      )}
    </>
  );
}
