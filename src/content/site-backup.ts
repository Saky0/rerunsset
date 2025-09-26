// Site content (pt-BR). Keep component code/comments in English.
export const siteConfig = {
  brand: {
    name: "Rerunsset",
    owner: "Davi Mattos",
    roleAlternatives: [
      "Microserviços",
      "Full Stack",
      "Ruby on Rails",
      "NextJS",
      "UI/UX",
    ],
    city: "Teresópolis",
    state: "RJ",
    summary:
      "Profissional motivado e adaptável focado em aplicações Rails e web modernas.",
    social: {
      linkedin: "https://www.linkedin.com/in/davi-mtts/",
      instagram: "https://www.instagram.com/rerunsset",
      whatsapp: "https://wa.me/5521967190441",
      telegram: "https://t.me/rerunsset",
      email: "daviteremattos@gmail.com",
      github: "https://github.com/Saky0",
    },
  },
  about: {
    bio:
      "Conhecido por resolver problemas e colaborar com times. Experiência em criar interfaces limpas e sistemas escaláveis.",
    fullName: "Davi Mattos",
    phone: "+55 (21) 9 6719-0441",
    skills: [
      { name: "Ruby on Rails", level: 80 },
      { name: "Postgres", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "Next.js", level: 65 },
      { name: "Figma", level: 60 },
      { name: "AWS", level: 40 },
      { name: "Bootstrap", level: 70 },
      { name: "Vercel", level: 60 },
      { name: "Node.js", level: 55 },
    ],
  },
  services: [
    {
      icon: "web",
      title: "Desenvolvimento Web",
      description: "Sites e aplicações performáticas com foco em resultado.",
    },
    {
      icon: "ux",
      title: "UI/UX Design",
      description: "Protótipos, identidade visual e design system enxuto.",
    },
  ],
  projects: [
    {
      id: "doxa-agencia",
      title: "Dóxa Agência",
      description: "Website institucional para agência de comunicação digital com foco em estratégia e resultados mensuráveis.",
      image: "/projects/doxa-agencia.jpg",
      url: "https://doxaagencia.com/",
      githubUrl: "https://github.com/davimtts/doxa-agencia",
      tags: ["Next.js", "Design", "Marketing"],
    },
    {
      id: "packvip-raissa",
      title: "Pack VIP Raíssa Lobo",
      description: "Landing page de alta conversão para pack de gestão jurídica com mais de 60 ferramentas para advogados.",
      image: "/projects/packvip-raissa.jpg",
      url: "https://packvip.raissalobo.com.br/",
      githubUrl: "https://github.com/davimtts/packvip-raissa",
      tags: ["Next.js", "Conversion", "Landing Page"],
    },
    {
      id: "museclub",
      title: "Musa Club",
      description: "Plataforma fitness exclusiva para mulheres com treinos personalizados, dietas e comunidade (projeto cancelado).",
      image: "/projects/museclub.jpg",
      url: "https://museclub-teste.rerunsset.com/",
      githubUrl: "https://github.com/davimtts/museclub",
      tags: ["Next.js", "Fitness", "SaaS"],
    },
    {
      id: "roupas-dona-lo",
      title: "Roupas Dona Lo",
      description: "E-commerce em desenvolvimento para marca de roupas femininas com catálogo e sistema de vendas online.",
      image: "/projects/roupas-dona-lo.jpg",
      url: "https://roupasdonalo.com.br/",
      githubUrl: "https://github.com/davimtts/roupas-dona-lo",
      tags: ["E-commerce", "Rails", "Fashion"],
    },
  ],
  resume: {
    education: [
      {
        year: "abr/2023 - presente",
        title: "Bacharelado em Ciência da Computação",
        org: "Estácio",
        desc: "Graduação em Ciência da Computação.",
      },
      {
        year: "jun/2021 - dez/2021",
        title: "Backend Java Developer (Programação de Computadores)",
        org: "Tech4me",
        desc: "Criação de APIs com microsserviços e recursos como Eureka, Zuul e containers Docker. Nota: 9,38.",
      },
    ],
    experience: [
      {
        year: "mar/2024 - presente",
        title: "Junior Ruby Developer",
        org: "Local Labs, LLC (Remoto)",
        desc: "Atuação com Ruby e MySQL para criação de story types.",
      },
      {
        year: "fev/2023 - set/2023",
        title: "Junior Ruby Developer",
        org: "Local Labs, LLC (Remoto)",
        desc: "Atuação com Ruby e MySQL para criação de story types.",
      },
      {
        year: "ago/2022 - abr/2023",
        title: "Probationary Ruby Developer",
        org: "Local Labs, LLC (Remoto)",
        desc: "Treinamento em Ruby e MySQL para criação de story types.",
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
