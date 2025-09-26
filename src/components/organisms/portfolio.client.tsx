"use client";

import { useMemo, useState } from "react";
import { PortfolioCard } from "@/components/molecules/portfolio-card";
import { FadeIn } from "@/components/atoms/fade-in";
import { Button as UIButton } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description?: string;
  image?: string;
  url?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  tags?: readonly string[];
}

export default function PortfolioClient({ projects }: { projects: readonly Project[] }) {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return Array.from(s);
  }, [projects]);

  const [selected, setSelected] = useState<string | null>(null);
  const filtered = useMemo(() => {
    if (!selected) return projects;
    return projects.filter((p) => Array.isArray(p.tags) && p.tags.includes(selected));
  }, [projects, selected]);

  return (
    <FadeIn id="portfolio-client" className="space-y-4">
      <div className="space-y-4">
        <div className="flex justify-center flex-wrap gap-2">
          <UIButton size="sm" variant={selected === null ? "default" : "outline"} onClick={() => setSelected(null)}>
            Todas
          </UIButton>
          {allTags.map((t) => (
            <UIButton key={t} size="sm" variant={selected === t ? "default" : "outline"} onClick={() => setSelected(t)}>
              {t}
            </UIButton>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PortfolioCard
              key={p.id}
              title={p.title}
              description={p.description || "Descrição do projeto em desenvolvimento."}
              image={p.image || ""}
              technologies={p.tags ? [...p.tags] : []}
              liveUrl={p.url}
              githubUrl={p.githubUrl || undefined}
              isPrivateRepo={p.isPrivateRepo || false}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
