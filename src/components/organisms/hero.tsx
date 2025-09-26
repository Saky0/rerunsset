"use client";
import { SafeImage } from "@/components/atoms/safe-image";
import { SocialIconButton } from "@/components/atoms/social-icon-button";
import { Section } from "@/components/atoms/section";
import { FadeIn } from "@/components/atoms/fade-in";
import { useTypewriter } from "@/hooks/useTypewriter";
import { siteConfig } from "@/content/site";

export function Hero() {
  const typed = useTypewriter(siteConfig.brand.roleAlternatives, 60, 1000);

  return (
    <Section className="mt-3 sm:mt-10">
      <FadeIn className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 w-full flex flex-col max-md:justify-center max-md:items-center max-md:text-center">  
          <h1 className="group text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            {/* <span className="opacity-80">I’m </span> */}
            <span className="relative inline-block">
              <span className="relative z-10">Davi Mattos</span>
              {/* hover placeholder underline/marker */}
              <span className="absolute left-0 right-0 -bottom-1 h-3 rounded-md bg-[linear-gradient(135deg,#60a5fa_0%,#a78bfa_60%,#22d3ee_100%)]/30 transition-opacity opacity-0 group-hover:opacity-100 pointer-events-none"></span>
            </span>
          </h1>
          {/* Typewriter roles line */}
          <div className="mt-2 text-base text-black/70 dark:text-white/70 h-6 space-x-1">
            <span className="font-medium text-black/80">Desenvolvedor Web | </span>
            <span className="font-medium">{typed || siteConfig.brand.roleAlternatives[0]}</span>
          </div>
          {/* <div className="mt-3 text-lg text-black/70 dark:text-white/70">
            <span className="font-medium">Web Developer • FullStack</span>
          </div> */}
          <p className="mt-6 text-balance text-black/80 dark:text-white/80 max-w-[60ch]">
            Desenvolvedor Ruby on Rails, motivado e adaptável, com +3 anos de experiência em aplicações web.
          </p>
          <p className="mt-2 text-balance text-black/80 dark:text-white/80 max-w-[60ch]">
            Ajudo empresas a lançar produtos rápidos, acessíveis e com design limpo.
          </p>

          <div className="mt-6 flex items-center gap-3 group" id="contato">
            <SocialIconButton href={siteConfig.brand.social.linkedin} ariaLabel="LinkedIn" iconSrc="/contact-icons/linkedin.png" />
            <SocialIconButton href={siteConfig.brand.social.instagram} ariaLabel="Instagram" iconSrc="/contact-icons/instagram.png" />
            <SocialIconButton href={siteConfig.brand.social.whatsapp} ariaLabel="WhatsApp" iconSrc="/contact-icons/whatsapp.png" />
            <SocialIconButton href={siteConfig.brand.social.email} ariaLabel="Email" iconSrc="/contact-icons/email.png" />
            <SocialIconButton href={siteConfig.brand.social.github} ariaLabel="GitHub" iconSrc="/contact-icons/github.png" />
          </div>
        </div>
        <div className="w-[280px] md:w-[320px] lg:w-[360px] shrink-0">
          <div className="relative">
            {/* blue rounded block behind (offset) */}
            <div className="absolute -right-4 -bottom-4 w-full h-full rounded-[36px] bg-[#3f5aa9] opacity-95" aria-hidden />
            <div className="relative w-full aspect-square rounded-tl-[72px] rounded-[36px] overflow-hidden ring-2 ring-black/10 shadow-md bg-white">
              <SafeImage src="/davi-mattos.jpg" alt="Foto de perfil" fill className="object-cover" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
