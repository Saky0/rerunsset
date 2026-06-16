"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import type { NotebookSceneId } from "@/content/homepage";
import { NotebookModel } from "./notebook-model";

type Props = {
  scene: NotebookSceneId;
  progress?: number;
};

export function NotebookCanvas({ scene, progress = 0 }: Props) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 1.25, 8.2], fov: 34 }}
      style={{ background: "transparent" }}
    >
      <fog attach="fog" args={["#05070b", 12, 22]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 7, 6]} intensity={1.25} color="#f8fbff" />
      <directionalLight position={[-5, 4, 3]} intensity={0.7} color="#96b7ff" />
      <pointLight position={[4, 0.5, 3]} intensity={28} color="#ff3048" distance={14} />
      <pointLight position={[-5, 2, 4]} intensity={14} color="#3b82f6" distance={18} />

      <Suspense fallback={null}>
        <NotebookModel scene={scene} progress={progress} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
