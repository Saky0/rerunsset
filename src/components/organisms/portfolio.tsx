"use client";
import { Section, SectionHeading } from "@/components/atoms/section";
import { PortfolioCard } from "@/components/molecules/portfolio-card";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/atoms/fade-in";
import { useMemo, useState } from "react";
import { Button as UIButton } from "@/components/ui/button";

export function Portfolio() {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    siteConfig.projects.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const [selected, setSelected] = useState<string | null>(null);
  const filtered = useMemo(() => {
    if (!selected) return siteConfig.projects;
    return siteConfig.projects.filter((p) => Array.isArray(p.tags) && p.tags.includes(selected));
  }, [selected]);

  return (
    <Section className="bg-white">
      <FadeIn id="portfolio" className="space-y-6">
        <div className="text-center mb-16 animate-fade-in flex flex-col gap-y-3">
          <SectionHeading className="mb-0">Portfólio</SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">Alguns projetos recentes. Clique em &quot;Visualizar&quot; para abrir o site do cliente.</p>
        </div>

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
                image={p.image} 
                technologies={p.tags ? [...p.tags] : []}
                liveUrl={p.url} 
                githubUrl={p.githubUrl || undefined}
                isPrivateRepo={p.isPrivateRepo || false}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
