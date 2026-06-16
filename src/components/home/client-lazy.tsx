"use client";

import dynamic from "next/dynamic";

const ShaderBackdrop = dynamic(
  () => import("@/components/home/shader-backdrop").then((mod) => mod.ShaderBackdrop),
  { ssr: false },
);

const NotebookExperience = dynamic(
  () => import("@/components/home/notebook-experience").then((mod) => mod.NotebookExperience),
  { ssr: false },
);

export function ClientShaderBackdrop() {
  return <ShaderBackdrop />;
}

export function ClientNotebookExperience() {
  return <NotebookExperience />;
}
