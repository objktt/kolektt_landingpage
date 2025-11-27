"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface MinimalistHeroProps {
  mainText: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  leftImage?: string;
  className?: string;
  theme?: 'light' | 'dark';
}

export const MinimalistHero = ({
  mainText,
  overlayText,
  leftImage,
  className,
  theme = 'light',
}: MinimalistHeroProps) => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -150]);
  const imageRotate = useTransform(scrollY, [0, 500], [0, -10]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const textColor = theme === 'dark' ? 'text-white' : 'text-primary';
  const descColor = theme === 'dark' ? 'text-gray-300' : 'text-primary/60';
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-background';

  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden p-8 font-sans md:p-12',
        bgClass,
        className
      )}
    >
      {/* Left Image */}
      {leftImage && (
        <motion.div
          style={{
            y: imageY,
            rotate: imageRotate,
            scale: imageScale,
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-4 top-4 z-10 w-[390px] h-[390px] md:w-[520px] md:h-[520px] lg:w-[650px] lg:h-[650px] opacity-10"
        >
          <Image
            src={leftImage}
            alt="Hero illustration"
            fill
            className="object-contain"
          />
        </motion.div>
      )}

      {/* Main Content Area */}
      <div className="relative flex w-full max-w-7xl flex-grow items-center justify-center">
        <div className="z-20 text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className={cn("text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight tracking-tight", textColor)}>
              {overlayText.part1}
              <br />
              {overlayText.part2}
            </h1>
          </motion.div>
          
          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className={cn("text-lg md:text-xl leading-relaxed font-medium", descColor)}>{mainText}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
