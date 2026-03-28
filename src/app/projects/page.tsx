"use client";

import { useState } from "react";
import { ProjectCategory } from "@/types/project";
import { projects } from "@/data/projects";
import { filterProjects } from "@/lib/utils";
import CategoryFilter from "@/components/projects/CategoryFilter";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SearchBar from "@/components/ui/SearchBar";

export default function ProjectsPage() {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = filterProjects(projects, category, search);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">All Projects</h1>
        <p className="mt-2 text-zinc-400">
          Browse everything I&apos;ve built — filter by category or search by
          name and tech.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter selected={category} onChange={setCategory} />
        <div className="w-full sm:w-72">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-zinc-500">
        Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      <ProjectGrid projects={filtered} />
    </div>
  );
}
