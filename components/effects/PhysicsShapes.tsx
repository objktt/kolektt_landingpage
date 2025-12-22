"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import { useTheme } from "@/context/ThemeContext";

export default function PhysicsShapes() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const { theme } = useTheme();

  // Color config based on theme
  // Color config based on theme
  // Color config based on theme (Matching About Card Accent: #2452FF)
  // Color config based on theme (Base: #2131ff)
  // Color config based on theme
  const colors = theme === "dark" 
    ? {
        primary: "#2131ff", // Base Blue (Dark Mode)
        secondary: "#5966ff", // Lighter tint
        tertiary: "#8c96ff", // Even lighter tint
        background: "transparent"
      }
    : {
        primary: "#f9c049", // Base Yellow (Light Mode)
        secondary: "#fad27d", // Lighter tint
        tertiary: "#fce3af", // Even lighter tint
        background: "transparent"
      };

  // Shape parameters (declare outside effect if needed, but simple constants are fine)
  // ...

  // Use refs for state inside event handlers to avoid closure staleness and scope issues
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Initialize lastScrollY safely on mount
    lastScrollY.current = window.scrollY;

    if (!sceneRef.current) return;

    // Module aliases
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Events = Matter.Events,
          Mouse = Matter.Mouse,
          Vector = Matter.Vector,
          Body = Matter.Body;

    // Create engine
    const engine = Engine.create();
    engine.gravity.y = 1; // Enable gravity
    engineRef.current = engine;

    // Get dimensions
    const width = sceneRef.current.clientWidth;
    const height = sceneRef.current.clientHeight;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
    });
    renderRef.current = render;

    // Shape parameters
    const size = Math.min(width, height) * 0.36; // Increased size (2x of 0.18)
    
    // Spawn positions (Above the view)
    const spawnY = -size * 3;
    const cx = width / 2;

    const shapes: Matter.Body[] = [];

    // Create 3 sets of shapes (Triple count)
    for (let i = 0; i < 3; i++) {
        const xOffset = (Math.random() - 0.5) * width * 0.5;
        const yOffset = -i * size * 1.5; // Stagger vertical spawn

        // 1. Vertical Arch (1x1)
        const archWidth = size;
        const archHeight = size;
        const radius = archWidth / 2;
        const archVertices = [];
        archVertices.push({ x: archWidth/2, y: archHeight/2 }); // BR
        archVertices.push({ x: -archWidth/2, y: archHeight/2 }); // BL
        const steps = 15;
        for (let j = 0; j <= steps; j++) {
            const t = Math.PI - (j / steps) * Math.PI;
            archVertices.push({
                x: radius * Math.cos(t),
                y: 0 - (radius * Math.sin(t))
            });
        }

        const arch = Bodies.fromVertices(cx + xOffset, spawnY + yOffset, [archVertices], {
            render: { fillStyle: colors.primary },
            chamfer: { radius: 0 },
            frictionAir: 0.01,
            restitution: 0.5
        }, true);

        // 2. Square
        const square = Bodies.rectangle(cx + xOffset + (Math.random() - 0.5) * 50, spawnY + yOffset - size - 10, size, size, {
          render: { fillStyle: colors.secondary },
          frictionAir: 0.01,
          restitution: 0.5
        });

        // 3. Circle
        const circle = Bodies.circle(cx + xOffset + (Math.random() - 0.5) * 50, spawnY + yOffset - size * 2 - 20, size/2, {
          render: { fillStyle: colors.tertiary },
          frictionAir: 0.01,
          restitution: 0.5
        });

        shapes.push(arch, square, circle);
    }

    // Boundaries (Walls)
    const wallOptions = { 
        isStatic: true, 
        render: { visible: false },
        friction: 0.5,
        restitution: 0.2
    };
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions);
    const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions);
    
    Composite.add(engine.world, [...shapes, ground, leftWall, rightWall]);

    // Mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: { visible: false }
        }
    });
    Composite.add(engine.world, mouseConstraint);

    // Run the engine
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);
    Render.run(render);

    // Interaction Logic:
    // Scroll Down -> Reverse Gravity (-1)
    // Scroll Stop -> Normal Gravity (1)
    
    const onScroll = () => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        lastScrollY.current = currentScrollY;
        
        if (delta > 0) {
            // Scrolling Down -> Reverse Gravity
            engine.gravity.y = -1;
        } else if (delta < 0) {
            // Scrolling Up -> Normal Gravity
            engine.gravity.y = 1;
        }

        // Debounce to reset to normal
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        
        scrollTimeout.current = setTimeout(() => {
            engine.gravity.y = 1; // Return to normal on stop
        }, 100);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Removed mousemove listener

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      render.canvas = null as any;
      render.context = null as any;
      render.textures = {};
    };
  }, [theme]); 

  // Handle Resize (Simple reload for now as walls need rebuild)
  useEffect(() => {
    // In a real robust impl, we'd update wall positions
  }, []);

  return (
    <div ref={sceneRef} className="w-full h-full relative overflow-hidden" />
  );
}
