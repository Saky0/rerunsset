"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import type { NotebookSceneId } from "@/content/homepage";
import { useNotebookCanvasLoader } from "@/components/home/use-notebook-canvas-loader";
import { cn } from "@/lib/utils";

const NotebookCanvas = dynamic(
  () => import("@/components/notebook/notebook-canvas").then((mod) => mod.NotebookCanvas),
  { ssr: false },
);

type NotebookVisualProps = {
  scene: NotebookSceneId;
  presentation?: NotebookSceneId;
  progress?: number;
  className?: string;
  children: ReactNode;
};

export function NotebookVisual({ scene, presentation = scene, progress = 0, className, children }: NotebookVisualProps) {
  const { rootRef, mode, shouldMountCanvas, isCanvasActive, isCanvasReady, markCanvasReady } = useNotebookCanvasLoader({
    activeRootMargin: "160px 0px",
    preloadRootMargin: "900px 0px",
  });
  const shouldShowFallback = mode === "fallback";
  const shouldShowLoading = mode !== "fallback" && !isCanvasReady;

  return (
    <div ref={rootRef} className={cn("notebook-visual", className)}>
      {shouldShowFallback ? <div className="notebook-visual-fallback">{children}</div> : null}
      {shouldShowLoading ? <div className="notebook-loading-surface" aria-hidden /> : null}
      {shouldMountCanvas ? (
        <div className={cn("notebook-visual-canvas", isCanvasReady ? "opacity-100" : "opacity-0")}>
          <NotebookCanvas
            active={isCanvasActive || !isCanvasReady}
            scene={scene}
            presentation={presentation}
            progress={progress}
            onReady={markCanvasReady}
          />
        </div>
      ) : null}
    </div>
  );
}
