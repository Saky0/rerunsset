type Props = { value: number };

export function ProgressBar({ value }: Props) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 w-full overflow-hidden">
      <div
        className="h-full bg-[#2563eb] dark:bg-[#60a5fa] rounded-full transition-all"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
