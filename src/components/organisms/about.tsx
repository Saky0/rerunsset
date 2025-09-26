import { Section, SectionHeading } from "@/components/atoms/section";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/atoms/fade-in";
import { SafeImage } from "@/components/atoms/safe-image";

import { Code2, Palette, Database, Globe, Smartphone, GitBranch } from "lucide-react";
import { SkillItem, type Skill } from "../atoms/skill-item";
import { Button } from "../ui/button";

const skills: Skill[] = [
  // Core stack & expertise first (includes Ruby)
  { name: "Ruby on Rails", level: "Professional", icon: <Code2 className="w-5 h-5" /> },
  { name: "React & Next.js", level: "Advanced", icon: <Globe className="w-5 h-5" /> },
  { name: "JavaScript & TypeScript", level: "Advanced", icon: <Code2 className="w-5 h-5" /> },
  { name: "Git/GitHub", level: "Advanced", icon: <GitBranch className="w-5 h-5" /> },
  // Infra / banco / design
  { name: "MySQL / PostgreSQL", level: "Intermediary", icon: <Database className="w-5 h-5" /> },
  { name: "AWS / Vercel", level: "Intermediary", icon: <Globe className="w-5 h-5" /> },
  { name: "UI/UX (Figma)", level: "Intermediary", icon: <Palette className="w-5 h-5" /> },
  // Extras
  { name: "Mobile (React Native)", level: "Basic", icon: <Smartphone className="w-5 h-5" /> },
]

export function About() {
  const { about, brand } = siteConfig;
  const info = [
    { label: "Nome", value: about.fullName },
    { label: "Endereço", value: `${brand.city}, ${brand.state}` },
    { label: "Telefone", value: about.phone },
    { label: "Email", value: brand.social.email },
  ] as const;
  return (
    <Section>
      <FadeIn id="sobre" className="space-y-8 sm:space-y-12">
        <SectionHeading>Sobre mim</SectionHeading>
        {/* Header area: image on the left, info card on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Profile Image with blue offset block */}
          <div className="w-full flex items-center justify-center">
            <div className="relative mx-auto md:mx-0 w-60 sm:w-80">
              <div className="absolute -right-4 -bottom-4 w-full h-full rounded-[36px] bg-[#3f5aa9] opacity-95" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-border bg-muted">
                <SafeImage
                  src="/rerunsset-creative.png"
                  alt="Foto de perfil - Davi Mattos"
                  width={640}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right card: bio + info list + contact button */}
          <div className="border border-border/60 rounded-2xl p-6 bg-background/70 backdrop-blur-sm shadow-sm flex flex-col gap-6">
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Desenvolvedor focado em transformar ideias em produtos digitais reais. Domino Ruby on Rails e o ecossistema web moderno (Next.js, TypeScript), entregando aplicações seguras, performáticas e fáceis de evoluir.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Do conceito ao deploy, ajudo a definir requisitos, desenhar a interface, modelar dados e publicar em produção. Comunicação simples, prazos claros e qualidade como padrão.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {info.map((item) => (
                <div key={item.label} className="grid grid-cols-[110px,1fr] items-center text-sm">
                  <span className="text-muted-foreground font-medium">{item.label}</span>
                  <span className="truncate">{item.value}</span>
                </div>
              ))}
            </div>

            <div>
              <Button asChild size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <a href={`mailto:${brand.social.email}`} aria-label="Entrar em contato por e-mail">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Skills grid using SkillItem (two columns like the mock) */}
        <div className="">
          <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
