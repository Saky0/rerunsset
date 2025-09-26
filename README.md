Rerunsset Portfolio (Next.js + App Router)

Projeto de portfólio em Next.js (App Router + TypeScript + Tailwind) estruturado em Atomic Design. Conteúdo em português; componentes e comentários em código em inglês.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde editar conteúdo

- `src/content/site.ts` — textos, links, serviços, projetos, currículo e habilidades.
- Coloque sua foto em `public/profile.jpg` (opcional). As imagens dos projetos ficam em `public/projects/`.

## Estrutura de pastas (Atomic Design)

- `src/components/atoms` — elementos básicos (Button, SectionHeading, ProgressBar, etc.)
- `src/components/molecules` — composições (SkillBar, ServiceCard, ProjectCard)
- `src/components/organisms` — seções (Hero, About, Services, Portfolio, Resume, Footer, Header)
- `src/hooks` — hooks utilitários (useTypewriter)
- `src/content` — dados do site (pt-BR)

## Licença

Uso livre para o site pessoal rerunsset.com.
