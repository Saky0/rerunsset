import { ProgressBar } from "@/components/atoms/progess-bar";

export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-28 shrink-0 text-sm text-black/70 dark:text-white/70">{name}</div>
      <ProgressBar value={level} />
    </div>
  );
}
