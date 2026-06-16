"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { canCreateWebGlContext } from "@/components/home/canvas-support";

type CanvasMode = "checking" | "canvas" | "fallback";

type Options = {
  activeRootMargin?: string;
  preloadRootMargin?: string;
  rootMargin?: string;
};

export function useNotebookCanvasLoader({
  activeRootMargin = "120px 0px",
  preloadRootMargin,
  rootMargin,
}: Options = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const nextPreloadRootMargin = preloadRootMargin ?? rootMargin ?? "900px 0px";
  const [mode, setMode] = useState<CanvasMode>("checking");
  const [hasCanvasMounted, setHasCanvasMounted] = useState(false);
  const [isCanvasActive, setIsCanvasActive] = useState(false);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  const markCanvasReady = useCallback(() => setIsCanvasReady(true), []);
  const resetCanvasReady = useCallback(() => setIsCanvasReady(false), []);

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateSupport = () => {
      const canUseCanvas = !reduceMotionQuery.matches && canCreateWebGlContext();

      setMode(canUseCanvas ? "canvas" : "fallback");
      setIsCanvasReady(false);
      setHasCanvasMounted(false);
      setIsCanvasActive(false);
    };

    const frame = window.requestAnimationFrame(updateSupport);
    reduceMotionQuery.addEventListener("change", updateSupport);

    return () => {
      window.cancelAnimationFrame(frame);
      reduceMotionQuery.removeEventListener("change", updateSupport);
    };
  }, []);

  useEffect(() => {
    if (mode !== "canvas" || !rootRef.current) {
      setIsCanvasActive(false);
      return;
    }

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasCanvasMounted(true);
        }
      },
      { rootMargin: nextPreloadRootMargin, threshold: 0 },
    );
    const activeObserver = new IntersectionObserver(
      ([entry]) => setIsCanvasActive(entry.isIntersecting),
      { rootMargin: activeRootMargin, threshold: 0 },
    );

    preloadObserver.observe(rootRef.current);
    activeObserver.observe(rootRef.current);

    return () => {
      preloadObserver.disconnect();
      activeObserver.disconnect();
    };
  }, [activeRootMargin, mode, nextPreloadRootMargin]);

  const shouldMountCanvas = mode === "canvas" && hasCanvasMounted;

  return {
    rootRef,
    mode,
    shouldMountCanvas,
    isCanvasActive,
    isCanvasReady,
    markCanvasReady,
    resetCanvasReady,
  };
}
