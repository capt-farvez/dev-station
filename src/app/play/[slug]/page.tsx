import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/utils";
import GameEmbed from "@/components/games/GameEmbed";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.category === "game")
    .map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getProjectBySlug(projects, slug);
  if (!game) return { title: "Not Found" };

  return {
    title: `Play ${game.title} — Dev Station`,
    description: game.description,
  };
}

export default async function GamePlayerPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getProjectBySlug(projects, slug);

  if (!game || game.category !== "game") {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <Link
        href="/play"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Play Zone
      </Link>

      <GameEmbed game={game} />
    </div>
  );
}
