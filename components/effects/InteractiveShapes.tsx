"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PerspectiveCamera,
  Environment,
  RoundedBox,
  PresentationControls,
  AdaptiveDpr,
  AdaptiveEvents
} from "@react-three/drei";
import * as THREE from "three";

// --- Shapes ---

function Disk({ position, mouse }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use ExtrudeGeometry to get rounded edges (bevel) on the disk
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.absarc(0, 0, 1.4, 0, Math.PI * 2, false); // Radius 1.4

    // Add central hole
    const hole = new THREE.Path();
    hole.absarc(0, 0, 0.15, 0, Math.PI * 2, true); // Radius 0.15 (Reduced size)
    s.holes.push(hole);
    
    return s;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.15, // Halved thickness
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 8 // Slight reduction for perf
  }), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Disk rotation logic
      const targetRotationY = mouse.current.x * Math.PI * 0.3; 
      const targetRotationX = mouse.current.y * Math.PI * 0.15;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, Math.PI / 4 + targetRotationX, 0.1);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -targetRotationY, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={[Math.PI / 4, 0, 0]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshPhysicalMaterial
          color="#0000FF"
          roughness={0.2}
          transmission={0.4}
          thickness={0.25} // Reduced material thickness
          ior={1.2}
          transparent={true}
          opacity={1}
        />
      </mesh>
    </Float>
  );
}

function Box({ position, mouse }: any) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Box: Inverted and Slower (Opposite direction to Disk)
      const targetRotationY = mouse.current.x * Math.PI * -0.2; // Negative
      const targetRotationX = mouse.current.y * Math.PI * -0.1; // Negative & subtle

      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, Math.PI / 4 + targetRotationY, 0.08); // Slower lerp
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.08);
      meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotationX * 0.7, 0.08); // Adjusted Z-tilt factor
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={meshRef} position={position} rotation={[0, Math.PI / 4, 0]}>
        {/* RoundedBox for smoothed corners. Larger size args */}
        <RoundedBox args={[2.2, 2.2, 2.2]} radius={0.2} smoothness={4}>
          <meshPhysicalMaterial
            color="#0000FF"
            roughness={0.2}
            transmission={0.4}
            thickness={2}
            ior={1.2}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

function HalfCapsule({ position, mouse }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const r = 1.3; // Larger Radius
    
    // Scale up coordinates
    s.moveTo(r, -1.3);
    s.lineTo(r, 0);
    s.absarc(0, 0, r, 0, Math.PI, false);
    s.lineTo(-r, -1.3);
    s.lineTo(r, -1.3);
    return s;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 1.5, // Thicker
    bevelEnabled: true,
    bevelThickness: 0.15, // More rounded edges
    bevelSize: 0.15,
    bevelSegments: 8 // Slight reduction
  }), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // HalfCapsule: Heavy tilt on X, slight Y, different phase
      const targetRotationY = mouse.current.x * Math.PI * -0.2; 
      const targetRotationX = mouse.current.y * Math.PI * 0.2; // Stronger X reaction

      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.05); // Very lazy follow
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.05);
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={0.6}>
       <mesh ref={meshRef} position={position} rotation={[0, 0, -Math.PI / 4]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
         <meshPhysicalMaterial
          color="#0000FF" // Deep Blue
          roughness={0.2}
          transmission={0.4} // Semi-transparent/Frosted glass look
          thickness={2}
          ior={1.2}
        />
      </mesh>
    </Float>
  );
}

// --- Particles ---

// --- Particles ---

function Particles({ count = 80, mouse }: any) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const lightRef = useRef<THREE.Object3D>(new THREE.Object3D());

  // Generate random data for particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -5 + Math.random() * 10;
      const yFactor = -5 + Math.random() * 10;
      const zFactor = -5 - Math.random() * 10; // Push back [-5 to -15]
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Mouse Interaction: Very slow rotation of the entire particle cloud
    // This creates a parallax-like effect against the main shapes
    if (mouse && mouse.current) {
        const targetRotationY = mouse.current.x * Math.PI * 0.05; // Very subtle total rotation
        const targetRotationX = mouse.current.y * Math.PI * 0.05;
        
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.02); // Ultra slow lerp
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.02);
    }

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      
      // Update time/movement - SLOWED DOWN SIGNIFICANTLY
      // Previous: t = particle.t += speed / 2;
      t = particle.t += speed / 10; // 5x slower
      
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Simple floating movement
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      
      // Random rotation
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      // Apply to instance
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {/* Tiny Disk Geometry */}
      <cylinderGeometry args={[0.05, 0.05, 0.01, 20]} /> 
      <meshPhysicalMaterial
        color="#0000FF"
        roughness={0.2}
        transmission={0.4}
        thickness={0.5} 
        ior={1.2}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}

// --- Main Scene ---

function Scene() {
  // Global mouse tracker... (Keep existing logic)
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
      
      {/* Lights - Adjustable for the material properties */}
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <spotLight
        position={[-10, 10, 5]}
        angle={0.5}
        penumbra={1}
        intensity={5}
        // Removed castShadow for performance (Transparent objects handle shadows poorly by default anyway)
      />
      <Environment preset="city" />

      {/* Optimization Components */}
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />

      {/* Shapes - Positions Adjusted for Z-Depth Layering */}
      {/* Visual overlap without physical intersection */}
      
      {/* 1. Yellow Box (Gold) - Background Layer */}
      <Box 
        position={[-2.5, 0, -3]} 
        mouse={mouse}
      />

      {/* 2. Transparent Disk (Glass) - Foreground Layer */}
      <Disk 
        position={[0.8, -0.8, 2.5]} 
        mouse={mouse}
      />

      {/* 3. Blue Half Capsule - Middle Layer */}
      <HalfCapsule 
        position={[2, 1.5, -0.5]} 
        mouse={mouse}
      />

      {/* 4. Background Particles */}
      <Particles count={100} mouse={mouse} />
    </>
  );
}

export default function InteractiveShapes() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
