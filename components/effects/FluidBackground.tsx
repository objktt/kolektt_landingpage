"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FluidShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color(0.0, 0.0, 0.0) },
    uColor2: { value: new THREE.Color(0.0, 0.0, 0.0) },
    uColor3: { value: new THREE.Color(0.0, 0.0, 0.0) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      // Use vUv for consistent coords
      vec2 uv = vUv;
      
      float time = uTime * 0.2;
      
      // Creating fluid-like movement by layering noise
      float noise1 = snoise(uv * 1.5 + time * 0.1);
      float noise2 = snoise(uv * 2.5 - time * 0.15);
      
      float mixFactor = (noise1 + noise2) * 0.5 + 0.5; // Remap to 0.0 - 1.0
      
      // Blending colors based on noise
      vec3 mixColor = mix(uColor1, uColor2, mixFactor);
      mixColor = mix(mixColor, uColor3, sin(mixFactor * 3.14 + time));
      
      gl_FragColor = vec4(mixColor, 1.0);
    }
  `,
};

function GradientMesh({ theme }: { theme: "light" | "dark" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create memoized uniforms object to pass to shaderMaterial
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color() },
      uColor2: { value: new THREE.Color() },
      uColor3: { value: new THREE.Color() },
    }),
    []
  );

  const colors = useMemo(() => {
    return theme === "dark"
      ? {
          c1: new THREE.Color("#1A1A1A"), // Dark background base
          c2: new THREE.Color("#000000"), // Deep black
          c3: new THREE.Color("#222222"), // Slight variation
        }
      : {
          c1: new THREE.Color("#EAEAE6"), // Light background base
          c2: new THREE.Color("#FFFFFF"), // White
          c3: new THREE.Color("#D1D1CF"), // Slightly darker grey
        };
  }, [theme]);

  useFrame(({ clock }) => {
    if (uniforms) {
      uniforms.uTime.value = clock.getElapsedTime();
      // Smoothly lerp colors
      uniforms.uColor1.value.lerp(colors.c1, 0.1);
      uniforms.uColor2.value.lerp(colors.c2, 0.1);
      uniforms.uColor3.value.lerp(colors.c3, 0.1);
    }
  });

  return (
    <mesh ref={meshRef} frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={FluidShaderMaterial.vertexShader}
        fragmentShader={FluidShaderMaterial.fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function FluidBackground({ theme }: { theme: "light" | "dark" }) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }} resize={{ scroll: false }}>
        <GradientMesh theme={theme} />
      </Canvas>
    </div>
  );
}
