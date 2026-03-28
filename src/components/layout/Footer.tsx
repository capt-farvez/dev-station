import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500 text-xs font-bold text-zinc-950">
            DS
          </div>
          <span className="text-sm text-zinc-400">
            Dev Station &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/projects"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Projects
          </Link>
          <Link
            href="/play"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Play Zone
          </Link>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
