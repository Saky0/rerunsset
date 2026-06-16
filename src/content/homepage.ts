export type Accent = "red" | "purple" | "blue" | "green" | "indigo";

export type HomeIconKey =
  | "barChart3"
  | "bot"
  | "brainCircuit"
  | "cloud"
  | "code2"
  | "component"
  | "cpu"
  | "database"
  | "gauge"
  | "monitorCog"
  | "penTool"
  | "rocket"
  | "server"
  | "shieldCheck"
  | "sparkles"
  | "target"
  | "userRound"
  | "workflow";

export type NotebookSceneId = "hero" | "about";

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tags: readonly string[];
  repoHref?: string;
  repoLabel?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: HomeIconKey;
  accent: Accent;
};

export type TechnologyGroup = {
  label: string;
  icon: HomeIconKey;
  items: readonly string[];
};

export type TechnologyCategory = {
  title: string;
  description: string;
  icon: HomeIconKey;
  accent: Accent;
  groups: readonly TechnologyGroup[];
  note: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  meta: string;
  description: string;
};

export type AboutHighlight = {
  icon: HomeIconKey;
  text: string;
};

export const navItems: readonly NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Serviços", href: "#services" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Currículo", href: "#resume" },
  { label: "Contato", href: "#contact" },
] as const;

export const projects: readonly Project[] = [
  {
    title: "VOLL",
    category: "Plataforma de cursos online",
    description: "Plataforma digital com experiência premium, recorrência e área do aluno sob medida.",
    image: "/projects/museclub.png",
    href: "#contact",
    tags: ["Next.js", "Edu Tech", "SaaS"],
    repoLabel: "Repositório privado",
  },
  {
    title: "Belluno",
    category: "E-commerce de móveis",
    description: "Loja virtual com foco em conversão, vitrine editorial e experiência de compra fluida.",
    image: "/projects/Dona Lo 1.png",
    href: "#contact",
    tags: ["E-commerce", "Conversion", "UI Design"],
    repoLabel: "Repositório privado",
  },
  {
    title: "SUNNE",
    category: "Site institucional",
    description: "Site moderno para marca de energia com narrativa visual e performance de carregamento.",
    image: "/projects/doxaagencia.png",
    href: "#contact",
    tags: ["Institutional", "Performance", "Brand"],
    repoLabel: "Repositório privado",
  },
  {
    title: "Pontocell",
    category: "E-commerce de eletrônicos",
    description: "Experiência de catálogo com foco em velocidade, confiança e captação comercial.",
    image: "/projects/packvip-raissalobo.png",
    href: "#contact",
    tags: ["E-commerce", "SEO", "High Performance"],
    repoLabel: "Repositório privado",
  },
  {
    title: "Bolder",
    category: "Plataforma educacional",
    description: "Produto digital para saúde e bem-estar com conteúdo, clareza visual e onboarding simples.",
    image: "/projects/paidotaf.png",
    href: "#contact",
    tags: ["Education", "Wellness", "Landing Page"],
    repoLabel: "Repositório privado",
  },
  {
    title: "Quality",
    category: "Landing page",
    description: "Landing page focada em geração de leads, autoridade da marca e oferta clara.",
    image: "/projects/paidotaf.png",
    href: "#contact",
    tags: ["Lead Gen", "Landing Page", "Healthcare"],
    repoLabel: "Repositório privado",
  },
] as const;

export const services: readonly Service[] = [
  {
    title: "Web Development",
    description:
      "Desenvolvimento de sites, plataformas e aplicações web modernas, responsivas e otimizadas para performance.",
    icon: "code2",
    accent: "red",
  },
  {
    title: "Automações com AI",
    description:
      "Criação de automações inteligentes com IA para otimizar processos, reduzir tarefas manuais e aumentar produtividade.",
    icon: "bot",
    accent: "purple",
  },
  {
    title: "Análise de Dados com IA",
    description:
      "Transformo dados em insights valiosos com IA para decisões estratégicas e resultados melhores.",
    icon: "barChart3",
    accent: "blue",
  },
] as const;

export const technologyCategories: readonly TechnologyCategory[] = [
  {
    title: "Frontend & UX",
    description: "Construção de interfaces modernas e acessíveis",
    icon: "monitorCog",
    accent: "red",
    groups: [
      { label: "Frameworks", icon: "component", items: ["Next.js", "React", "TypeScript"] },
      { label: "Styling & UI", icon: "penTool", items: ["Tailwind CSS", "UI Systems", "Design Tokens"] },
      { label: "Experiência", icon: "userRound", items: ["Figma", "Acessibilidade", "UX Research"] },
    ],
    note: "Interfaces rápidas, responsivas e inclusivas com foco em conversão e usabilidade.",
  },
  {
    title: "Backend & APIs",
    description: "Lógica de negócio, APIs e integrações robustas",
    icon: "server",
    accent: "purple",
    groups: [
      { label: "Runtime & Frameworks", icon: "cpu", items: ["Ruby", "Ruby on Rails", "Node.js"] },
      { label: "APIs & Integrações", icon: "workflow", items: ["REST APIs", "Auth & JWT", "Webhooks"] },
      { label: "Processos", icon: "gauge", items: ["Background Jobs", "Queues", "Scheduling"] },
    ],
    note: "Backends escaláveis, seguros e prontos para integrações de alto desempenho.",
  },
  {
    title: "Data, AI & Automations",
    description: "Dados, inteligência artificial e automações avançadas",
    icon: "brainCircuit",
    accent: "indigo",
    groups: [
      { label: "Banco de dados", icon: "database", items: ["PostgreSQL", "Prisma", "Supabase"] },
      { label: "Dados & Analytics", icon: "barChart3", items: ["Analytics", "Eventos", "Dashboards"] },
      { label: "AI & Automações", icon: "bot", items: ["AI Workflows", "Agents", "Data Pipelines"] },
    ],
    note: "Dados inteligentes, automações e IA para gerar insights e eficiência real.",
  },
  {
    title: "Cloud, Infra & Deploy",
    description: "Infraestrutura, serviços e deploys escaláveis",
    icon: "cloud",
    accent: "blue",
    groups: [
      { label: "Cloud & CDN", icon: "cloud", items: ["Vercel", "AWS S3", "CloudFront"] },
      { label: "Containers & Serviços", icon: "server", items: ["Docker", "Nginx", "PM2"] },
      { label: "Deploy & Monitoring", icon: "shieldCheck", items: ["VPS Deploy", "Monitoring", "Logs & Alerts"] },
    ],
    note: "Infraestrutura moderna, deploys confiáveis e monitoramento contínuo.",
  },
] as const;

export const experience: readonly TimelineItem[] = [
  {
    period: "ago/2022 - abr/2023",
    title: "Probationary Ruby Developer",
    meta: "Local Labs, LLC (Remoto)",
    description: "Treinamento em Ruby e MySQL para criação de story types.",
  },
  {
    period: "fev/2023 - set/2023",
    title: "Junior Ruby Developer",
    meta: "Local Labs, LLC (Remoto)",
    description: "Atuação com Ruby e MySQL para criação de story types.",
  },
  {
    period: "mar/2024 - presente",
    title: "Junior Ruby Developer",
    meta: "Local Labs, LLC (Remoto)",
    description: "Atuação com Ruby e MySQL para criação de story types.",
  },
] as const;

export const education: readonly TimelineItem[] = [
  {
    period: "abr/2023 - presente",
    title: "Bacharelado em Ciência da Computação",
    meta: "Estácio",
    description: "Graduação em Ciência da Computação.",
  },
  {
    period: "jun/2021 - dez/2021",
    title: "Backend Java Developer",
    meta: "Tech4me",
    description: "Criação de APIs com microsserviços e recursos como Eureka, Zuul e containers Docker. Nota: 9,38.",
  },
] as const;

export const aboutHighlights: readonly AboutHighlight[] = [
  {
    icon: "target",
    text: "Desenvolvimento com Next.js, React, Ruby on Rails e tecnologias modernas",
  },
  {
    icon: "penTool",
    text: "Design de interfaces que geram conexão, clareza e conversão",
  },
  {
    icon: "sparkles",
    text: "Foco total em performance, SEO e experiência do usuário",
  },
  {
    icon: "rocket",
    text: "Acompanhamento próximo em todas as etapas do projeto",
  },
] as const;
