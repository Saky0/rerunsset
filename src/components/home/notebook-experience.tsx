"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNotebookCanvasLoader } from "@/components/home/use-notebook-canvas-loader";
import { cn } from "@/lib/utils";

const NotebookCanvas = dynamic(
  () => import("@/components/notebook/notebook-canvas").then((mod) => mod.NotebookCanvas),
  { ssr: false },
);

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function NotebookExperience() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const { rootRef, mode, shouldMountCanvas, isCanvasActive, isCanvasReady, markCanvasReady } =
    useNotebookCanvasLoader({
      activeRootMargin: "160px 0px",
      preloadRootMargin: "960px 0px",
    });

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-notebook-section='hero']");

    if (!hero) {
      return;
    }

    const update = () => {
      const rect = hero.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = Math.max(hero.offsetHeight - viewportHeight * 0.7, 1);
      const distance = clamp(-rect.top, 0, total);

      setProgress(distance / total);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const shouldShowFallback = mode === "fallback";
  const shouldShowLoading = mode !== "fallback" && !isCanvasReady;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute left-0 right-0 top-0 z-0 hidden h-[clamp(700px,86vh,820px)] overflow-visible lg:block"
    >
      <div className="sticky top-[92px] flex h-[calc(100vh-108px)] items-center">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 18, rotate: 0.6 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, x: -10, rotate: -1.1 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="hero-notebook-frame relative ml-auto h-[clamp(25rem,34vw,31rem)] w-[clamp(32rem,42vw,40rem)] max-w-[40rem] overflow-visible"
        >
          <div className="absolute inset-x-6 inset-y-8 rounded-[2rem] bg-[radial-gradient(circle_at_18%_28%,rgba(37,99,235,0.14),transparent_36%),radial-gradient(circle_at_76%_62%,rgba(255,48,72,0.12),transparent_32%)] blur-2xl" />
          {shouldShowFallback ? (
            <div className="hero-notebook-fallback">
              <Image
                src="/hero_3d_mockup.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-contain"
              />
            </div>
          ) : null}
          {shouldShowLoading ? <div className="hero-notebook-loading notebook-loading-surface" aria-hidden /> : null}
          {shouldMountCanvas ? (
            <div className={cn("hero-notebook-canvas", isCanvasReady ? "opacity-100" : "opacity-0")}>
              <NotebookCanvas
                active={isCanvasActive || !isCanvasReady}
                scene="hero"
                presentation="hero"
                progress={progress}
                onReady={markCanvasReady}
              />
            </div>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}
