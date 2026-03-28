import { Project, ProjectCategory } from "@/types/project";

export function filterProjects(
  projects: Project[],
  category: ProjectCategory | "all",
  searchQuery: string
): Project[] {
  return projects.filter((project) => {
    const matchesCategory =
      category === "all" || project.category === category;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });
}

export function getFeaturedProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(
  projects: Project[],
  slug: string
): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
