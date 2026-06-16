"use client";

import { Html, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { MathUtils } from "three";
import type { NotebookSceneId } from "@/content/homepage";
import { ScreenContent } from "./screen-content";

type Props = {
  scene: NotebookSceneId;
  progress: number;
};

type Pose = {
  position: [number, number, number];
  rotation: [number, number, number];
  lid: number;
  pedestalX: number;
};

const poses: Record<NotebookSceneId, Pose> = {
  hero: {
    position: [0.34, 0.08, 0],
    rotation: [0.06, -0.46, 0.06],
    lid: -0.12,
    pedestalX: 0.28,
  },
  about: {
    position: [-0.34, 0.04, 0],
    rotation: [0.08, 0.42, -0.05],
    lid: -0.18,
    pedestalX: -0.28,
  },
};

export function NotebookModel({ scene, progress }: Props) {
  const root = useRef<Group>(null);
  const lid = useRef<Group>(null);
  const pedestal = useRef<Group>(null);
  const currentPose = useMemo(() => poses[scene], [scene]);

  useFrame((state, delta) => {
    if (!root.current || !lid.current || !pedestal.current) {
      return;
    }

    const time = state.clock.elapsedTime;
    const float = Math.sin(time * 0.8) * 0.045;
    const drift = Math.cos(time * 0.55) * 0.018;
    const lift = MathUtils.lerp(0, -0.25, MathUtils.clamp(progress, 0, 1));

    root.current.position.x = MathUtils.damp(root.current.position.x, currentPose.position[0], 4.5, delta);
    root.current.position.y = MathUtils.damp(root.current.position.y, currentPose.position[1] + float + lift, 4.8, delta);
    root.current.position.z = MathUtils.damp(root.current.position.z, currentPose.position[2] + drift, 4.8, delta);

    root.current.rotation.x = MathUtils.damp(root.current.rotation.x, currentPose.rotation[0], 4.2, delta);
    root.current.rotation.y = MathUtils.damp(root.current.rotation.y, currentPose.rotation[1], 4.2, delta);
    root.current.rotation.z = MathUtils.damp(root.current.rotation.z, currentPose.rotation[2], 4.2, delta);

    lid.current.rotation.x = MathUtils.damp(lid.current.rotation.x, currentPose.lid, 5.8, delta);
    pedestal.current.position.x = MathUtils.damp(pedestal.current.position.x, currentPose.pedestalX, 4, delta);
  });

  return (
    <group scale={0.84}>
      <group ref={pedestal} position={[poses.hero.pedestalX, -2.15, 0.15]}>
        <RoundedBox args={[6.3, 2.2, 4.05]} radius={0.08} smoothness={5} receiveShadow castShadow>
          <meshStandardMaterial color="#090b11" metalness={0.24} roughness={0.92} />
        </RoundedBox>
        <mesh position={[3.12, 0.05, 0]} castShadow>
          <boxGeometry args={[0.035, 2.05, 4.02]} />
          <meshStandardMaterial color="#ff3048" emissive="#ff3048" emissiveIntensity={1.6} />
        </mesh>
        <mesh position={[0, 1.08, 0]}>
          <boxGeometry args={[6.12, 0.03, 3.88]} />
          <meshStandardMaterial color="#0f131d" metalness={0.35} roughness={0.7} />
        </mesh>
      </group>

      <group ref={root} position={poses.hero.position} rotation={poses.hero.rotation} scale={1.03}>
        <RoundedBox args={[4.85, 0.18, 3.18]} radius={0.09} smoothness={6} castShadow receiveShadow>
          <meshPhysicalMaterial color="#1b1f28" metalness={0.92} roughness={0.28} clearcoat={0.68} clearcoatRoughness={0.18} />
        </RoundedBox>

        <mesh position={[0, -0.14, 0.28]} receiveShadow>
          <boxGeometry args={[4.6, 0.11, 2.38]} />
          <meshStandardMaterial color="#0a0d13" metalness={0.7} roughness={0.52} />
        </mesh>

        <mesh position={[0, 0.096, 0.7]}>
          <boxGeometry args={[1.6, 0.018, 1.04]} />
          <meshStandardMaterial color="#262b36" metalness={0.3} roughness={0.6} />
        </mesh>

        <mesh position={[0, 0.1, -0.45]}>
          <boxGeometry args={[3.72, 0.02, 1.58]} />
          <meshStandardMaterial color="#11151d" metalness={0.2} roughness={0.84} />
        </mesh>

        <mesh position={[0, 0.09, -1.56]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.09, 0.09, 4.32, 28]} />
          <meshStandardMaterial color="#0a0c11" metalness={0.95} roughness={0.2} />
        </mesh>

        <group ref={lid} position={[0, 0.11, -1.56]} rotation={[-0.12, 0, 0]}>
          <RoundedBox args={[4.72, 3.02, 0.12]} radius={0.1} smoothness={6} position={[0, 1.52, -0.02]} castShadow>
            <meshPhysicalMaterial color="#171b23" metalness={0.9} roughness={0.24} clearcoat={0.78} clearcoatRoughness={0.16} />
          </RoundedBox>

          <RoundedBox args={[4.34, 2.72, 0.03]} radius={0.08} smoothness={5} position={[0, 1.52, 0.046]}>
            <meshStandardMaterial color="#020304" emissive="#090d15" emissiveIntensity={0.9} />
          </RoundedBox>

          <Html
            transform
            occlude={false}
            position={[0, 1.52, 0.07]}
            scale={0.165}
            wrapperClass="notebook-screen-html"
            style={{
              width: "1280px",
              height: "820px",
              overflow: "hidden",
              borderRadius: "28px",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            <ScreenContent scene={scene} />
          </Html>
        </group>
      </group>
    </group>
  );
}
