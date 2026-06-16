"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import type { NotebookSceneId } from "@/content/homepage";
import { NotebookModel } from "./notebook-model";

type Props = {
  active?: boolean;
  scene: NotebookSceneId;
  presentation?: NotebookSceneId;
  progress?: number;
  onReady?: () => void;
};

const cameras: Record<NotebookSceneId, { position: [number, number, number]; fov: number }> = {
  hero: { position: [0, 1.2, 8.8], fov: 34 },
  about: { position: [0, 1.05, 6.65], fov: 31 },
};

function CanvasReady({ onReady }: { onReady?: () => void }) {
  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => onReady?.());
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [onReady]);

  return null;
}

export function NotebookCanvas({ active = true, scene, presentation = scene, progress = 0, onReady }: Props) {
  return (
    <Canvas
      dpr={[1, 1.35]}
      frameloop={active ? "always" : "demand"}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={cameras[presentation]}
      style={{ background: "transparent" }}
    >
      <fog attach="fog" args={["#05070b", 12, 22]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 7, 6]} intensity={1.25} color="#f8fbff" />
      <directionalLight position={[-5, 4, 3]} intensity={0.7} color="#96b7ff" />
      <pointLight position={[4, 0.5, 3]} intensity={28} color="#ff3048" distance={14} />
      <pointLight position={[-5, 2, 4]} intensity={14} color="#3b82f6" distance={18} />

      <Suspense fallback={null}>
        <NotebookModel scene={scene} presentation={presentation} progress={progress} />
        <Environment preset="city" />
        <CanvasReady onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
