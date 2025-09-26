import { Section, SectionHeading } from "@/components/atoms/section";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/atoms/fade-in";
import { ServiceCard } from "../molecules/service-card";

export function Services() {
  // Map textual icon keys from siteConfig to actual Lucide icon components
  // Default details for modal per service type
  const featuresMap: Record<string, string[]> = {
    web: [
      "Sites e aplicações responsivas",
      "SEO técnico e performance (Core Web Vitals)",
      "Integrações com APIs e bancos de dados",
    ],
    ux: [
      "Descoberta e definição de requisitos",
      "Wireframes, protótipos e Design System",
      "Acessibilidade (WCAG) e testes de usabilidade",
    ],
    data: [
      "Coleta, limpeza e transformação (ETL)",
      "Dashboards e relatórios automatizados",
      "Integração com fontes (SQL, planilhas, APIs)",
    ],
  };

  const technologiesMap: Record<string, string[]> = {
    web: ["Next.js", "Ruby on Rails", "TypeScript", "TailwindCSS", "PostgreSQL"],
    ux: ["Figma", "Storybook", "Tailwind Tokens"],
    data: ["Python", "SQL", "Pandas", "Metabase"],
  };

  return (
    <Section>
      <FadeIn id="servicos" className="space-y-6">
        <SectionHeading>Serviços</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {siteConfig.services.map((s) => {
            const features = featuresMap[s.icon] ?? [];
            const technologies = technologiesMap[s.icon] ?? [];
            return (
              <ServiceCard
                key={s.title}
                iconKey={s.icon as "web" | "ux" | "data"}
                title={s.title}
                description={s.description}
                features={features}
                technologies={technologies}
              />
            );
          })}
        </div>
      </FadeIn>
    </Section>
  );
}
