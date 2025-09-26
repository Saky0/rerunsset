import { Section, SectionHeading } from "@/components/atoms/section";
import { siteConfig } from "@/content/site";
import PortfolioClient from "./portfolio.client";

export function Portfolio() {
  return (
    <Section className="bg-white">
      <div id="portfolio" className="space-y-6">
        <div className="text-center mb-16 flex flex-col gap-y-3">
          <SectionHeading className="mb-0">Portfólio</SectionHeading>
          <p className="text-muted-foreground max-w-2xl mx-auto">Alguns projetos recentes. Clique em &quot;Visualizar&quot; para abrir o site do cliente.</p>
        </div>

        {/* Client wrapper handles interactivity (filters, buttons, cards) */}
        <PortfolioClient projects={siteConfig.projects} />
      </div>
    </Section>
  );
}
