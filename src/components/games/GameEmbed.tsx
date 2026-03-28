"use client";

import { Project } from "@/types/project";

interface GameEmbedProps {
  game: Project;
}

export default function GameEmbed({ game }: GameEmbedProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{game.title}</h1>
          <div className="flex items-center gap-2">
            {game.links.source && (
              <a
                href={game.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source
              </a>
            )}
          </div>
        </div>

        {/* Game iframe container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10">
                <svg className="h-8 w-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="mt-4 text-lg font-medium text-zinc-300">
                {game.title}
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Game embed will load here. Add your HTML5 game build to{" "}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-emerald-400">
                  /public/games/{game.slug}/index.html
                </code>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          {game.description}
        </p>
      </div>
    </div>
  );
}
