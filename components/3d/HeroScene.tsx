"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={3.2}>
        {/* Abstract Vinyl Shape */}
        <cylinderGeometry args={[1, 1, 0.05, 64]} />
        <MeshDistortMaterial
          color="#1E1E1D"
          distort={0.15}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}
