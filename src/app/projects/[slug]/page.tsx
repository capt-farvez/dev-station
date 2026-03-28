import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/utils";
import ProjectDetail from "@/components/projects/ProjectDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} — Dev Station`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(projects, slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <ProjectDetail project={project} />
    </div>
  );
}
