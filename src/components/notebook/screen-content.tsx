"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import type { NotebookSceneId } from "@/content/homepage";

const ease = [0.22, 1, 0.36, 1] as const;

function ScreenChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[26px] bg-[#090c13] text-white">
      <div className="flex items-center gap-2 border-b border-white/6 bg-[#06080d]/95 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff4158]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
        <div className="ml-3 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/45">
          rerunsset.com
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden p-5">{children}</div>
    </div>
  );
}

function ScreenPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff4158]" />
      {children}
    </span>
  );
}

function ScreenCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,24,36,0.92),rgba(9,12,19,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

function HeroSlide() {
  return (
    <div className="grid h-full grid-cols-[1.16fr_0.84fr] gap-4">
      <ScreenCard className="relative min-h-0">
        <Image
          src="/projects/doxaagencia.png"
          alt="Preview de interface de projeto da Rerunsset"
          fill
          className="object-cover object-top opacity-92"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,13,0.08),rgba(6,8,13,0.72)_78%,rgba(6,8,13,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <ScreenPill>Selected work</ScreenPill>
          <h3 className="mt-3 max-w-[18rem] text-[1.75rem] font-black leading-[1.02] tracking-[-0.02em]">
            Interfaces com direção visual e foco em conversão.
          </h3>
          <p className="mt-2 max-w-[20rem] text-sm leading-6 text-white/58">
            Produtos digitais que equilibram marca, clareza e performance.
          </p>
        </div>
      </ScreenCard>

      <div className="grid min-h-0 gap-4">
        <ScreenCard className="p-4">
          <ScreenPill>Highlights</ScreenPill>
          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/38">Stack</p>
              <p className="mt-2 text-base font-semibold">Next.js, React, Framer Motion</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/38">Approach</p>
              <p className="mt-2 text-base font-semibold">Design systems, UX e performance real</p>
            </div>
          </div>
        </ScreenCard>

        <ScreenCard className="relative min-h-0">
          <Image
            src="/projects/paidotaf.png"
            alt="Landing page desenvolvida pela Rerunsset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,16,0.08),rgba(7,10,16,0.9))]" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">Case direction</p>
              <p className="mt-1 text-lg font-bold">Visual polish</p>
            </div>
            <span className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.06]">
              <ArrowUpRight className="size-5 text-[#ff4158]" />
            </span>
          </div>
        </ScreenCard>
      </div>
    </div>
  );
}

function AboutSlide() {
  const stats = [
    { value: "+4", label: "anos de experiência" },
    { value: "10+", label: "projetos entregues" },
  ] as const;

  return (
    <div className="grid h-full grid-cols-[0.96fr_1.04fr] gap-4">
      <ScreenCard className="relative min-h-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_72%,rgba(37,99,235,0.28),transparent_44%),radial-gradient(circle_at_76%_26%,rgba(255,59,79,0.26),transparent_38%),linear-gradient(180deg,rgba(12,16,25,0.94),rgba(7,10,16,0.98))]" />
        <Image
          src="/davi_dark_portrait_cutout.png"
          alt="Davi Mattos"
          width={864}
          height={1080}
          className="absolute bottom-0 left-1/2 z-10 h-[102%] w-auto -translate-x-1/2 object-contain"
        />
        <div className="absolute left-4 top-4 z-20 grid gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="w-[9.5rem] rounded-[18px] border border-white/10 bg-[#0b0f18]/72 px-4 py-3 shadow-[0_18px_34px_rgba(0,0,0,0.28)] backdrop-blur"
            >
              <p className="text-[1.85rem] font-black leading-none text-[#ff4158]">{stat.value}</p>
              <p className="mt-2 text-sm leading-5 text-white/72">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScreenCard>

      <div className="grid gap-4">
        <ScreenCard className="p-5">
          <ScreenPill>About snapshot</ScreenPill>
          <h3 className="mt-4 text-[1.55rem] font-black leading-[1.04] tracking-[-0.02em]">
            Design, front-end craft and high-performance delivery.
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/56">
            Trabalho combinando produto, interface e engenharia para transformar ideias em experiências digitais mais claras e valiosas.
          </p>
        </ScreenCard>

        <div className="grid gap-3">
          {[
            "Interfaces pensadas para clareza e resultado",
            "Implementação com atenção a performance e SEO",
            "Parceria próxima do discovery ao deploy",
          ].map((item) => (
            <ScreenCard key={item} className="flex items-center gap-3 p-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Sparkles className="size-4 text-[#ff4158]" />
              </span>
              <p className="text-sm leading-6 text-white/68">{item}</p>
            </ScreenCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const slides: Record<NotebookSceneId, React.ComponentType> = {
  hero: HeroSlide,
  about: AboutSlide,
};

export function ScreenContent({ scene }: { scene: NotebookSceneId }) {
  const ActiveSlide = slides[scene];

  return (
    <ScreenChrome>
      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease }}
          className="h-full"
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>
    </ScreenChrome>
  );
}
