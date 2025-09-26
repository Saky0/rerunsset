import type React from "react"
import { cn } from "@/lib/utils"

export type SkillLevel = "Basic" | "Intermediary" | "Advanced" | "Professional"
export interface Skill {
  name: string
  level: SkillLevel
  icon?: React.ReactNode
}

const levelConfig: Record<SkillLevel, { segments: number }> = {
  Basic: { segments: 1 },
  Intermediary: { segments: 2 },
  Advanced: { segments: 3 },
  Professional: { segments: 4 },
}

export function SkillItem({ name, level, icon }: Skill) {
  const { segments } = levelConfig[level]

  return (
    <div className="group shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-4 rounded-xl border border-border/50 bg-background/60 hover:bg-background">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          {icon && <div className="w-8 h-8 flex items-center justify-center text-foreground shrink-0 group-hover:scale-110 transition-transform duration-300">{icon}</div>}
          <span className="font-medium text-foreground truncate">{name}</span>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground font-medium ml-4 shrink-0">{level}</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2" role="progressbar" aria-valuemin={0} aria-valuemax={4} aria-valuenow={segments}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2.5 rounded-full w-full transition-all duration-300",
              index < segments
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:shadow-sm"
                : "bg-muted"
            )}
          />
        ))}
      </div>
    </div>
  )
}
