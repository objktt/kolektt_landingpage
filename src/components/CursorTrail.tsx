"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CursorTrailProps {
  images?: string[];
}

interface ImageItem {
  id: number;
  x: number;
  y: number;
  image: string;
  type: 'image' | 'circle' | 'square' | 'arch';
  color?: string;
}

export default function CursorTrail({ 
  images = [
    "/images/albums/justice-cross-2007.webp", // 21K
    "/images/albums/daft-punk-random-access-memories-2013.webp", // 25K
    "/images/albums/stan-getz-jo-ao-gilberto-getz-gilberto-1964.webp", // 26K
    "/images/albums/the-white-stripes-elephant-2003.webp", // 34K
    "/images/albums/the-velvet-underground-the-velvet-underground-nico-1967.webp", // 35K
    "/images/albums/the-who-tommy-1969.webp", // 59K
    "/images/albums/the-prodigy-invaders-must-die-2009.webp", // 64K
    "/images/albums/pink-floyd-the-dark-side-of-the-moon-1973.webp", // 67K
    "/images/albums/kraftwerk-computer-world-1981.webp", // 81K
    "/images/albums/joy-division-unknown-pleasures-1979.webp", // 86K
    "/images/albums/grace-jones-nightclubbing-1981.webp", // 103K
    "/images/albums/nick-drake-pink-moon-1973.webp", // 103K
  ]
}: CursorTrailProps) {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const idCounterRef = useRef(0);

  // Intersection Observer to detect when hero section is visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Preload images when visible
  useEffect(() => {
    if (!isVisible || imagesLoaded) return;

    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, [isVisible, images, imagesLoaded]);

  // Mouse move handler
  useEffect(() => {
    if (!imagesLoaded) return;

    const container = containerRef.current;
    if (!container) return;

    let lastTime = Date.now();
    const throttleDelay = 300; // ms between spawns - longer delay for wider spacing

    const handleMouseMove = (e: MouseEvent) => {
      // Check if mouse is within the container (hero section)
      const rect = container.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }

      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      // Randomly choose between image, circle, square, or arch
      const shapeType = Math.random();
      const colors = ['#000000', '#000000']; // Black for all shapes
      
      let type: 'image' | 'circle' | 'square' | 'arch';
      if (shapeType < 0.5) {
        type = 'image';
      } else if (shapeType < 0.65) {
        type = 'circle';
      } else if (shapeType < 0.8) {
        type = 'square';
      } else {
        type = 'arch';
      }
      
      const newItem: ImageItem = {
        id: idCounterRef.current++,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        image: images[currentIndex % images.length],
        type: type,
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      setItems((prev) => [...prev, newItem]);
      setCurrentIndex((prev) => prev + 1);

      // Remove item after animation completes (increased duration)
      setTimeout(() => {
        setItems((prev) => prev.filter((item) => item.id !== newItem.id));
      }, 3500); // Increased from 1500ms to 3500ms
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [currentIndex, images]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {items.map((item) => {
          let borderRadius = '8px';
          if (item.type === 'circle') {
            borderRadius = '50%';
          } else if (item.type === 'square') {
            borderRadius = '0';
          } else if (item.type === 'arch') {
            borderRadius = '31px 0 0 31px'; // Left side fully rounded, right side square (adjusted for 30% size)
          }
          
          // Calculate size - 30% of original for shapes, original for images
          const size = item.type === 'image' ? 208 : 62; // 208 * 0.3 ≈ 62
          const halfSize = size / 2;
          
          return (
            <motion.div
              key={item.id}
              className="absolute overflow-hidden shadow-2xl"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: item.x - halfSize,
                top: item.y - halfSize,
                borderRadius: borderRadius,
                backgroundColor: item.type !== 'image' ? item.color : 'transparent'
              }}
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ 
                opacity: [0, 1, 1, 1, 0],
                scale: [0, 1.2, 1, 1, 0.8],
                rotate: [0, 5, -5, 0, 0]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 3.5, // Increased from 1.5s to 3.5s
                ease: "easeInOut"
              }}
            >
              {item.type === 'image' && (
                <img
                  src={item.image}
                  alt="Album cover"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
