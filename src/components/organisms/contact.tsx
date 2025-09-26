"use client";
import { Section, SectionHeading } from "@/components/atoms/section";
import { Button } from "@/components/atoms/button";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/atoms/fade-in";

export function Contact() {
  const s = siteConfig.brand.social;

  return (
    <Section className="bg-white">
      <FadeIn id="contato" className="space-y-6">
        <SectionHeading>Contato</SectionHeading>
        <div className="flex justify-center items-center gap-6">
          <div className="space-y-3">
            <p className="text-muted-foreground">Abra um canal direto comigo pelos links abaixo.</p>
            <div className="flex justify-center flex-wrap gap-3">
              <Button href={s.linkedin} target="_blank">LinkedIn</Button>
              <Button href={s.instagram} variant="secondary" target="_blank">Instagram</Button>
              <Button href={s.whatsapp} variant="secondary" target="_blank">WhatsApp</Button>
              {/* <Button href={s.telegram} variant="secondary" target="_blank">Telegram</Button> */}
            </div>
          </div>
          {/* <form
            className="grid gap-3"
            action={`mailto:${s.email}`}
            method="post"
            encType="text/plain"
          >
            <Input name="name" placeholder="Seu nome" required />
            <Input type="email" name="email" placeholder="Seu e-mail" required />
            <Textarea name="message" placeholder="Sua mensagem" rows={5} required />
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 h-10 text-sm font-medium">Enviar</button>
          </form> */}
        </div>
      </FadeIn>
    </Section>
  );
}
