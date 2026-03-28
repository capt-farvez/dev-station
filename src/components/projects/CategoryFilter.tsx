"use client";

import { ProjectCategory, categoryLabels } from "@/types/project";

interface CategoryFilterProps {
  selected: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
}

const categories: (ProjectCategory | "all")[] = [
  "all",
  "web",
  "ai",
  "desktop",
  "game",
  "tool",
];

export default function CategoryFilter({
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            selected === cat
              ? "bg-emerald-500 text-zinc-950"
              : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          }`}
        >
          {cat === "all" ? "All Projects" : categoryLabels[cat]}
        </button>
      ))}
    </div>
  );
}
