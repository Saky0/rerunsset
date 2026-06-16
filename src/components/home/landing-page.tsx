import Image from "next/image";
import type { HTMLMotionProps } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Component,
  Cpu,
  Database,
  Gauge,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MonitorCog,
  PenTool,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  Workflow,
} from "lucide-react";
import { ClientNotebookExperience, ClientShaderBackdrop } from "@/components/home/client-lazy";
import { NotebookVisual } from "@/components/home/notebook-visual";
import { Reveal, RevealSection } from "@/components/home/reveal";
import {
  aboutHighlights,
  education,
  experience,
  navItems,
  services,
  technologyCategories,
  type Accent,
  type HomeIconKey,
} from "@/content/homepage";
import { cn } from "@/lib/utils";
import { copyrightYear } from "@/content/brand";
import { contactData } from "@/lib/data/contact";
import { siteConfig } from "@/content/site";

const iconMap = {
  barChart3: BarChart3,
  bot: Bot,
  brainCircuit: BrainCircuit,
  cloud: Cloud,
  code2: Code2,
  component: Component,
  cpu: Cpu,
  database: Database,
  gauge: Gauge,
  monitorCog: MonitorCog,
  penTool: PenTool,
  rocket: Rocket,
  server: Server,
  shieldCheck: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  userRound: UserRound,
  workflow: Workflow,
} satisfies Record<HomeIconKey, typeof Code2>;

function LogoMark({ priority = false }: { priority?: boolean }) {
  return (
    <a href="#home" className="brand-lockup group no-underline" aria-label="Ir para o início">
      <Image
        src="/new-design/rerunsset-logo-no-bg.png"
        alt=""
        width={1080}
        height={1080}
        priority={priority}
        className="brand-mark"
      />
      <span className="brand-wordmark">RERUNSSET</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="glow-dot" />
      {children}
    </div>
  );
}

function SectionShell({
  id,
  children,
  className,
  ...props
}: HTMLMotionProps<"section"> & {
  children: React.ReactNode;
}) {
  return (
    <RevealSection id={id} className={cn("section-shell", className)} {...props}>
      {children}
    </RevealSection>
  );
}

function SectionTitle({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-[2rem] font-black leading-[1.03] text-white md:text-[2.7rem]">{title}</h2>
        {children ? <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 md:text-base">{children}</p> : null}
      </div>
      {action}
    </div>
  );
}

function GlowButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a href={href} className={cn("glow-button", variant === "secondary" && "glow-button-secondary")}>
      {children}
      <span className="button-dot" />
    </a>
  );
}

function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[78px] max-w-[1548px] items-center justify-between px-5 md:px-10">
        <LogoMark priority />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-medium text-slate-400 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <GlowButton href="#contact" variant="secondary">
          Vamos conversar
        </GlowButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      data-notebook-section="hero"
      className="hero-section relative grid items-center gap-8 pt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(32rem,1.1fr)] lg:pt-24"
    >
      <Reveal className="relative z-10 max-w-[700px]">
        <Eyebrow>Desenvolvimento Web & UI/UX</Eyebrow>
        <h1 className="hero-title mt-7 font-black text-white">
          Transformo ideias em produtos digitais que geram <span className="text-gradient-red">resultados.</span>
        </h1>
        <p className="mt-6 max-w-[600px] text-base leading-8 text-slate-300 md:text-[1.36rem] md:leading-[1.55]">
          Desenvolvimento de sites, plataformas e e-commerces com design estratégico, alta performance e foco em conversão.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#cases" className="primary-cta">
            Ver cases
            <ArrowUpRight className="size-4" />
          </a>
          <GlowButton href="#contact" variant="secondary">
            Vamos conversar
          </GlowButton>
        </div>
      </Reveal>

      <div className="hidden min-h-[38rem] lg:block" aria-hidden />

      <Reveal className="lg:hidden" delay={0.08}>
        <NotebookVisual scene="hero" presentation="hero" className="hero-stage hero-mobile-visual">
          <div className="hero-mobile-fallback">
            <div className="hero-glow hero-glow-blue" />
            <div className="hero-glow hero-glow-red" />
            <Image
              src="/hero_3d_mockup.png"
              alt="Mockup 3D de uma landing page escura da Rerunsset em uma tela premium"
              width={1080}
              height={810}
              priority
              className="hero-mockup"
            />
            <span className="hero-line" />
          </div>
        </NotebookVisual>
      </Reveal>
    </section>
  );
}

function TrustedBy() {
  return (
    <div className="py-3">
      <Reveal className="trusted-strip">
        <p>Empresas que confiam no meu trabalho</p>
        <Image
          src="/client_logo_strip_dark.png"
          alt="Logos de empresas: Belluno, Bolder, Funnelytics, Quality, Pontocell, SUNNE e VOLL"
          width={1916}
          height={821}
          className="trusted-logos"
        />
      </Reveal>
    </div>
  );
}

function About() {
  return (
    <SectionShell id="about" className="about-grid" data-notebook-section="about">
      <NotebookVisual scene="about" presentation="about" progress={0.72} className="about-visual">
        <div className="about-portrait">
          <div className="about-stat about-stat-top">
            <UserRound className="size-6" />
            <strong>+4</strong>
            <span>anos de experiência</span>
          </div>
          <div className="about-stat about-stat-bottom">
            <BriefcaseBusiness className="size-6" />
            <strong>10+</strong>
            <span>projetos entregues</span>
          </div>
          <span className="portrait-orbit portrait-orbit-blue" />
          <span className="portrait-orbit portrait-orbit-red" />
          <Image
            src="/davi_dark_portrait_cutout.png"
            alt="Davi Mattos sorrindo com camisa preta e braços cruzados"
            width={864}
            height={1080}
            className="portrait-image"
          />
        </div>
      </NotebookVisual>

      <div className="about-copy relative z-10">
        <Eyebrow>Sobre mim</Eyebrow>
        <h2 className="mt-4 text-[2.25rem] font-black leading-[1.03] text-white md:text-[3rem]">
          Mais que código. Estratégia, design e <span className="text-gradient-red">performance.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
          Me chamo Davi Mattos e sou desenvolvedor web com foco em criar produtos digitais modernos, rápidos e escaláveis. Atuo ajudando empresas e empreendedores a transformar ideias em soluções digitais de alta performance.
        </p>
        <div className="mt-8 grid gap-5">
          {aboutHighlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];

            return (
              <Reveal key={highlight.text} className="about-bullet" delay={index * 0.04}>
                <span>
                  <Icon className="size-5" />
                </span>
                {highlight.text}
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8">
          <a href="#contact" className="outline-arrow-button">
            Conhecer mais sobre mim
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

function HeroAboutJourney() {
  return (
    <div data-notebook-journey className="relative mx-auto max-w-[1548px] px-5 md:px-10">
      <ClientNotebookExperience />
      <Hero />
      <TrustedBy />
      <About />
    </div>
  );
}

function CaseCardMedia({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-[16/9.4] overflow-hidden rounded-[18px] border border-white/8 bg-[#080b12]"
      aria-label={`Ver case ${title}`}
    >
      <Image
        src={image}
        alt={`Preview do projeto ${title}`}
        width={720}
        height={420}
        className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.035] group-hover:brightness-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,13,0.02),rgba(6,8,13,0.36)_72%,rgba(6,8,13,0.74))]" />
    </a>
  );
}

function CaseCardTags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function CaseAction({
  href,
  label,
  icon: Icon,
  disabled = false,
}: {
  href?: string;
  label: string;
  icon: typeof ArrowUpRight;
  disabled?: boolean;
}) {
  const content = (
    <>
      <Icon className="size-4" />
      <span>{label}</span>
    </>
  );

  const className =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.03] px-4 text-sm font-semibold text-white transition duration-200 hover:border-white/20 hover:bg-white/[0.05]";

  if (disabled || !href) {
    return (
      <span className={cn(className, "cursor-default text-white/52 hover:border-white/10 hover:bg-white/[0.03]")}>
        {content}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  );
}

function CaseCard({ project }: { project: (typeof siteConfig.projects)[number] }) {
  const repoHref = project.isPrivateRepo ? undefined : project.githubUrl;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,24,36,0.88),rgba(8,12,20,0.96))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:shadow-[0_18px_42px_rgba(0,0,0,0.24)]">
      <CaseCardMedia title={project.title} image={project.image} href={project.url} />

      <div className="flex flex-1 flex-col gap-5 px-2 pb-2 pt-5">
        <div className="space-y-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.13em] text-white/80">Case</p>
            <h3 className="mt-2 text-[1.12rem] font-semibold leading-6 text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
          </div>
          <CaseCardTags tags={project.tags} />
        </div>

        <div className="mt-auto">
          <div className="grid gap-3 sm:grid-cols-2">
            <CaseAction href={project.url} label="Visualizar" icon={ArrowUpRight} />
            <CaseAction href={repoHref} label="Código" icon={Github} disabled={project.isPrivateRepo || !repoHref} />
          </div>
          <p className="mt-2 text-center text-[11px] text-slate-500 sm:text-right">
            {project.isPrivateRepo ? "Repositório privado" : "Código disponível"}
          </p>
        </div>
      </div>
    </article>
  );
}

function Cases() {
  return (
    <SectionShell id="cases">
      <SectionTitle
        eyebrow="Cases"
        title={
          <>
            Projetos que geram <span className="text-gradient-red">impacto.</span>
          </>
        }
        action={
          <GlowButton href="#contact" variant="secondary">
            Ver todos os cases
          </GlowButton>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {siteConfig.projects.map((project, index) => (
          <Reveal key={project.title} className="h-full" delay={Math.min(index * 0.04, 0.16)}>
            <CaseCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = iconMap[service.icon];

  return (
    <article className={cn("service-card", `accent-${service.accent}`)}>
      <div className="service-icon">
        <Icon className="size-12" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-[#ff3b4f]">
          Saiba mais
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </article>
  );
}

function Services() {
  return (
    <SectionShell id="services" className="grid gap-5 lg:grid-cols-[0.52fr_1.48fr]">
      <div>
        <Eyebrow>Serviços</Eyebrow>
        <h2 className="mt-3 text-[2rem] font-black leading-[1.05] text-white md:text-[2.6rem]">
          Como posso <span className="text-gradient-red">ajudar</span> o seu negócio.
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} className="h-full" delay={index * 0.05}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function TechnologyCategory({ category }: { category: (typeof technologyCategories)[number] }) {
  const Icon = iconMap[category.icon];

  return (
    <article className={cn("tech-category", `accent-${category.accent}`)}>
      <div className="tech-category-head">
        <Icon className="size-10" />
        <div>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
      </div>
      <div className="tech-connector" />
      <div className="tech-group-grid">
        {category.groups.map((group) => {
          const GroupIcon = iconMap[group.icon];

          return (
            <div key={group.label} className="tech-group">
              <p>
                <GroupIcon className="size-4" /> {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-chip">
                    <span>{item.slice(0, 1)}</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="tech-note">{category.note}</div>
    </article>
  );
}

function Technologies() {
  return (
    <SectionShell id="technologies">
      <SectionTitle
        eyebrow="Tecnologias"
        title={
          <>
            Meu ecossistema de <span className="text-gradient-red">tecnologias.</span>
          </>
        }
      >
        Um ecossistema completo de tecnologias modernas que utilizo para desenvolver produtos digitais de alta performance, escaláveis e centrados em resultados.
      </SectionTitle>
      <div className="grid gap-8 xl:grid-cols-4">
        {technologyCategories.map((category, index) => (
          <Reveal key={category.title} className="h-full" delay={Math.min(index * 0.04, 0.14)}>
            <TechnologyCategory category={category} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function TimelineCard({
  title,
  icon: Icon,
  items,
  accent,
}: {
  title: string;
  icon: typeof BriefcaseBusiness;
  items: readonly { period: string; title: string; meta: string; description: string }[];
  accent: Accent;
}) {
  return (
    <article className={cn("timeline-card", `accent-${accent}`)}>
      <h3 className="flex items-center gap-3 text-xl font-bold text-white">
        <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
          <Icon className="size-5" />
        </span>
        {title}
      </h3>
      <div className="mt-7 grid gap-7">
        {items.map((item) => (
          <div key={`${item.period}-${item.title}`} className="timeline-item">
            <p className="text-xs text-slate-500">{item.period}</p>
            <h4 className="mt-1 text-sm font-bold text-white">
              {item.title} <span className="font-medium text-slate-400">- {item.meta}</span>
            </h4>
            <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function Resume() {
  return (
    <SectionShell id="resume">
      <SectionTitle
        eyebrow="Currículo"
        title={
          <>
            Minha jornada <span className="text-gradient-red">profissional</span> e{" "}
            <span className="text-gradient-purple">acadêmica.</span>
          </>
        }
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <TimelineCard title="Experiência profissional" icon={BriefcaseBusiness} items={experience} accent="red" />
        </Reveal>
        <Reveal className="h-full" delay={0.06}>
          <TimelineCard title="Formação acadêmica" icon={GraduationCap} items={education} accent="purple" />
        </Reveal>
      </div>
    </SectionShell>
  );
}

function ContactCTA() {
  return (
    <SectionShell id="contact" className="contact-grid">
      <div>
        <Eyebrow>Vamos conversar</Eyebrow>
        <h2 className="mt-3 text-[2rem] font-black leading-[1.03] text-white md:text-[2.6rem]">
          Tem um <span className="text-gradient-red">projeto</span> em mente?
        </h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
          Vamos transformar sua ideia em um produto digital de sucesso. Entre em contato e vamos conversar sobre como posso te ajudar.
        </p>
      </div>
      <a href="mailto:contato@rerunsset.com" className="contact-method">
        <Mail className="size-6 text-[#ff5a3d]" />
        <span>E-mail</span>
        <strong>{contactData.email}</strong>
        <small>Resposta em até 24h</small>
      </a>
      <a href="https://wa.me/5549984018258" target="_blank" rel="noopener noreferrer" className="contact-method">
        <MessageCircle className="size-6 text-[#22c55e]" />
        <span>WhatsApp</span>
        <strong>{contactData.phone}</strong>
        <small>Vamos conversar?</small>
      </a>
      <a href="mailto:contato@rerunsset.com" aria-label="Enviar e-mail para Rerunsset" className="floating-contact">
        <ArrowUpRight className="size-7" />
      </a>
    </SectionShell>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="mt-4 grid gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-sm text-slate-400 transition hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 mt-8 w-full border-t border-white/6 bg-[linear-gradient(180deg,rgba(7,10,16,0.86),rgba(5,7,11,0.98))]">
      <div className="mx-auto max-w-[1548px] px-5 md:px-10">
        <div className="footer-grid">
          <div>
            <LogoMark />
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Desenvolvimento web com foco em design, performance e resultados.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-button">
                <Instagram className="size-4" />
              </a>
              <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-button">
                <Linkedin className="size-4" />
              </a>
              <a href={contactData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-button">
                <Github className="size-4" />
              </a>
            </div>
          </div>

          <FooterList title="Navegação" items={navItems.map((item) => ({ label: item.label, href: item.href }))} />

          <FooterList
            title="Serviços"
            items={[
              { label: "Desenvolvimento Web", href: "#services" },
              { label: "E-commerce", href: "#services" },
              { label: "Landing Pages", href: "#services" },
              { label: "UI/UX Design", href: "#services" },
              { label: "Automação com IA", href: "#services" },
            ]}
          />

          <div>
            <h3 className="footer-title">Contato</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {contactData.email}
              <br />
              {contactData.phone}
              <br />
              {contactData.address}
            </p>
            <p className="mt-8 text-xs text-slate-500">© {copyrightYear} Rerunsset. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <>
      <ClientShaderBackdrop />
      <Header />
      <main className="relative z-10 overflow-x-clip overflow-y-visible">
        <HeroAboutJourney />
        <div className="mx-auto grid max-w-[1548px] gap-6 px-5 py-6 md:px-10">
          <Cases />
          <Services />
          <Technologies />
          <Resume />
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
