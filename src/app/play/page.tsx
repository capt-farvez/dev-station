import { projects } from "@/data/projects";
import GameCard from "@/components/games/GameCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Zone — Dev Station",
  description: "Free browser games built by me. Play them right here!",
};

export default function PlayZonePage() {
  const games = projects.filter((p) => p.category === "game");

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-400">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play Zone
        </div>
        <h1 className="mt-4 text-3xl font-bold text-white">Free Games</h1>
        <p className="mt-2 text-zinc-400">
          Games I&apos;ve built that you can play right in your browser. No
          downloads, no sign-ups — just click and play.
        </p>
      </div>

      {games.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 py-20">
          <p className="text-lg font-medium text-zinc-400">
            Games coming soon!
          </p>
          <p className="mt-1 text-sm text-zinc-600">
            Check back later for playable browser games.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
