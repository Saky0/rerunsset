import { Hero } from "@/components/organisms/hero";
import { About } from "@/components/organisms/about";
import { Services } from "@/components/organisms/services";
import { Portfolio } from "@/components/organisms/portfolio";
import { Resume } from "@/components/organisms/resume";
import { Contact } from "@/components/organisms/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
  );
}
