import Image from "next/image";
import Link from "next/link";
import { Project, categoryLabels } from "@/types/project";
import TechBadge from "./TechBadge";
import { formatDate } from "@/lib/utils";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Back link */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Cover Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Meta */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
          {categoryLabels[project.category]}
        </span>
        <span className="text-sm text-zinc-500">{formatDate(project.date)}</span>
      </div>

      {/* Title & Description */}
      <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-zinc-400">
        {project.longDescription}
      </p>

      {/* Tech Stack */}
      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Tech Stack
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Live Demo
          </a>
        )}

        {project.links.play && (
          <Link
            href={project.links.play}
            className="inline-flex items-center gap-2 rounded-lg bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Play Now
          </Link>
        )}

        {project.links.source && (
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Source Code
          </a>
        )}
      </div>

      {/* Download Section for Desktop Apps */}
      {project.downloads && (
        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-lg font-semibold text-white">Download</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Choose your platform to download the latest version.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.downloads.windows && (
              <a
                href={project.downloads.windows}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
                Windows
              </a>
            )}
            {project.downloads.mac && (
              <a
                href={project.downloads.mac}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                macOS
              </a>
            )}
            {project.downloads.linux && (
              <a
                href={project.downloads.linux}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-4 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.868.07 1.723-.36 2.21-.96.643-.18 1.738-.086 2.59-.621.68-.428.956-1.166.767-1.865a.405.405 0 00-.117-.12c-.005-.133-.018-.158-.032-.32a4.487 4.487 0 00-.143-.727c-.024-.093-.065-.166-.109-.258a5.926 5.926 0 00-.442-.89c-.16-.265-.364-.495-.574-.726-.209-.23-.426-.446-.622-.696-.386-.51-.592-1.095-.764-1.693a9.07 9.07 0 01-.192-.793c-.054-.255-.091-.456-.137-.71-.046-.254-.14-.516-.24-.693-.102-.174-.217-.308-.347-.379-.13-.07-.264-.13-.407-.157-.142-.028-.289-.03-.437-.016-.15.01-.275.005-.428.029-.257.043-.59.239-.735.638-.146.403-.12.833-.11 1.244l.009.394c.013.236-.02.472-.065.707a9.753 9.753 0 01-.29 1.25 3.85 3.85 0 01-.16.452c-.073.168-.157.332-.26.456a.614.614 0 01-.32.224c-.11.022-.24.001-.37-.055-.107-.053-.198-.12-.258-.199-.129-.166-.197-.38-.231-.593a6.898 6.898 0 01-.076-1.3c.01-.525.065-1.058.038-1.53-.015-.298-.066-.574-.175-.806-.109-.232-.259-.42-.446-.574a1.72 1.72 0 00-.32-.19 1.756 1.756 0 00-.325-.1 2.13 2.13 0 00-.658-.02c-.223.03-.444.086-.64.192-.195.108-.376.252-.505.435-.127.183-.227.393-.27.638-.01.074-.017.15-.021.224l-.015.413c-.005.258.003.513.015.762.027.498.074.993.086 1.5.008.259 0 .534-.042.762-.022.119-.052.222-.103.3a.387.387 0 01-.162.156.405.405 0 01-.213.044c-.088-.003-.174-.033-.258-.084-.166-.101-.299-.267-.397-.462-.098-.195-.167-.423-.207-.65a4.27 4.27 0 01-.074-.762l.002-.08c.005-.178.015-.35.024-.519.018-.339.025-.65-.014-.95-.039-.301-.123-.576-.271-.814-.147-.238-.362-.436-.653-.585-.291-.148-.647-.249-1.09-.272a4.44 4.44 0 00-.6.012z" />
                </svg>
                Linux
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
