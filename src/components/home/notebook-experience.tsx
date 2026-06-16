"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { NotebookSceneId } from "@/content/homepage";
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
  const [scene, setScene] = useState<NotebookSceneId>("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const journey = document.querySelector<HTMLElement>("[data-notebook-journey]");
    const about = document.querySelector<HTMLElement>("[data-notebook-section='about']");

    if (!journey) {
      return;
    }

    const update = () => {
      const rect = journey.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = Math.max(journey.offsetHeight - viewportHeight, 1);
      const distance = clamp(-rect.top, 0, total);
      const nextProgress = distance / total;

      setProgress(nextProgress);

      if (!about) {
        setScene("hero");
        return;
      }

      const aboutRect = about.getBoundingClientRect();
      const isAboutVisible = aboutRect.top <= viewportHeight * 0.64 && aboutRect.bottom >= viewportHeight * 0.24;

      setScene(isAboutVisible ? "about" : "hero");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden overflow-hidden lg:block">
      <div className="sticky top-[92px] flex h-[calc(100vh-108px)] items-center">
        <motion.div
          layout
          animate={
            reduceMotion
              ? { x: 0, rotate: 0 }
              : { x: scene === "hero" ? -10 : 10, rotate: scene === "hero" ? -1.1 : 1.1 }
          }
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative h-[min(42vw,32rem)] w-[min(46vw,42rem)] max-w-[42rem]",
            scene === "hero" ? "ml-auto" : "mr-auto",
          )}
        >
          <div className="absolute inset-x-6 inset-y-8 rounded-[2rem] bg-[radial-gradient(circle_at_18%_28%,rgba(37,99,235,0.14),transparent_36%),radial-gradient(circle_at_76%_62%,rgba(255,48,72,0.12),transparent_32%)] blur-2xl" />
          <NotebookCanvas scene={scene} progress={progress} />
        </motion.div>
      </div>
    </div>
  );
}
