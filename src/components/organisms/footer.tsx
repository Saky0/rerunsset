import { siteConfig } from "@/content/site";

export function Footer() {
  const s = siteConfig.brand.social;
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between text-sm">
        <div>© {new Date().getFullYear()} Rerunsset</div>
        <nav className="flex gap-4">
          <a href={s.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href={s.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
          <a href={s.whatsapp} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a>
          <a href={s.telegram} target="_blank" rel="noreferrer" className="hover:underline">Telegram</a>
        </nav>
      </div>
    </footer>
  );
}
