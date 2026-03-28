export type ProjectCategory = "web" | "ai" | "desktop" | "game" | "tool";

export interface ProjectDownloads {
  windows?: string;
  mac?: string;
  linux?: string;
}

export interface ProjectLinks {
  live?: string;
  source?: string;
  download?: string;
  play?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  coverImage: string;
  techStack: string[];
  featured: boolean;
  links: ProjectLinks;
  downloads?: ProjectDownloads;
  date: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web Apps",
  ai: "AI Projects",
  desktop: "Desktop Apps",
  game: "Games",
  tool: "Tools & Experiments",
};

export const categoryIcons: Record<ProjectCategory, string> = {
  web: "globe",
  ai: "brain",
  desktop: "monitor",
  game: "gamepad",
  tool: "wrench",
};
