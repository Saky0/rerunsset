import Link from "next/link";
import { SafeImage } from "@/components/atoms/safe-image";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <SafeImage src="/rerunsset-logo.png" alt="Rerunsset" width={20} height={20} />
          <span className="font-semibold tracking-tight">Rerunsset</span>
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#sobre" className="hover:underline">Sobre</a>
          <a href="#servicos" className="hover:underline">Serviços</a>
          <a href="#portfolio" className="hover:underline">Portfólio</a>
          <a href="#curriculo" className="hover:underline">Currículo</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}
