"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { NotebookSceneId } from "@/content/homepage";

const NotebookCanvas = dynamic(
  () => import("@/components/notebook/notebook-canvas").then((mod) => mod.NotebookCanvas),
  { ssr: false },
);

const scenes: readonly NotebookSceneId[] = ["hero", "about"];

export function NotebookPageExample() {
  const [scene, setScene] = useState<NotebookSceneId>("hero");

  return (
    <div className="space-y-4 rounded-[28px] border border-white/10 bg-[#070a11] p-5 text-white">
      <div className="flex flex-wrap gap-2">
        {scenes.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setScene(value)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-semibold capitalize transition",
              scene === value
                ? "border-[#ff4158] bg-[#ff4158]/12 text-white"
                : "border-white/10 bg-white/[0.04] text-white/58 hover:border-white/20 hover:text-white",
            ].join(" ")}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="h-[32rem] overflow-hidden rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(255,48,72,0.16),transparent_36%),radial-gradient(circle_at_left,rgba(37,99,235,0.14),transparent_32%),#05070b]">
        <NotebookCanvas scene={scene} />
      </div>
    </div>
  );
}
