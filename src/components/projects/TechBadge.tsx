export default function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
      {name}
    </span>
  );
}
