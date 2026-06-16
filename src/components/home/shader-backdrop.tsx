"use client";

import { FilmGrain, FlowingGradient, MultiPointGradient, Shader, Vignette } from "shaders/react";
import { useEffect, useState } from "react";

export function ShaderBackdrop() {
  const [canUseShaders, setCanUseShaders] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const hasWebGpu = "gpu" in navigator;

      setCanUseShaders(hasWebGpu && !reduceMotion);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div aria-hidden className="shader-backdrop">
      <div className="shader-fallback" />
      {canUseShaders ? (
        <Shader
          disableTelemetry
          colorSpace="srgb"
          className="shader-layer"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <FlowingGradient
            id="heroFlow"
            colorA="#05070b"
            colorB="#12192b"
            colorC="#ff3048"
            colorD="#2f7cff"
            speed={0.15}
            distortion={0.22}
            opacity={0.94}
          />
          <MultiPointGradient
            id="heroMesh"
            blendMode="screen"
            opacity={0.62}
            colorA="#0b1120"
            positionA={{ x: 0.14, y: 0.18 }}
            colorB="#ff2442"
            positionB={{ x: 0.82, y: 0.28 }}
            colorC="#2f7cff"
            positionC={{ x: 0.26, y: 0.78 }}
            colorD="#3b1363"
            positionD={{ x: 0.84, y: 0.78 }}
            colorE="#0a1020"
            positionE={{ x: 0.52, y: 0.48 }}
            smoothness={2.4}
          />
          <FilmGrain id="heroGrain" strength={0.18} bias={2.8} animated={false} opacity={0.2} />
          <Vignette
            id="heroVignette"
            color="#020304"
            center={{ x: 0.5, y: 0.42 }}
            radius={0.4}
            falloff={0.58}
            intensity={0.95}
            opacity={0.82}
          />
        </Shader>
      ) : null}
    </div>
  );
}
