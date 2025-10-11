"use client";

import { useEffect, useMemo } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NoSSR } from './no-ssr';

const getRotationTransition = (duration: number, from: number, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween' as const,
  repeat: loop ? Infinity : 0
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring' as const,
    damping: 20,
    stiffness: 300
  }
});

interface CircularLoaderProps {
  text?: string;
  spinDuration?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  noSSR?: boolean;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32'
};

const fontSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base'
};

const sizeConfig = {
  sm: { width: 64, height: 64, radius: 25.6 },
  md: { width: 96, height: 96, radius: 38.4 },
  lg: { width: 128, height: 128, radius: 51.2 }
};
export function CircularLoader({ 
  text = 'KOLEKTT • LOADING • ', 
  spinDuration = 3, 
  className = '',
  size = 'md',
  noSSR = false
}: CircularLoaderProps) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const config = sizeConfig[size];

  // Memoize letter positions to prevent hydration mismatch
  const letterPositions = useMemo(() => {
    return letters.map((letter, i) => {
      const rotationDeg = (360 / letters.length) * i;
      const angle = (rotationDeg * Math.PI) / 180;
      const x = Math.sin(angle) * config.radius;
      const y = -Math.cos(angle) * config.radius;
      // Use fixed precision to ensure consistency between server and client
      const xFixed = Number(x.toFixed(2));
      const yFixed = Number(y.toFixed(2));
      
      return {
        letter,
        rotationDeg: Number(rotationDeg.toFixed(2)),
        x: xFixed,
        y: yFixed,
        transform: `translate(calc(-50% + ${xFixed}px), calc(-50% + ${yFixed}px)) rotate(${rotationDeg}deg)`
      };
    });
  }, [letters, config.radius]);

  useEffect(() => {
    controls.start({
      rotate: 360,
      scale: 1,
      transition: {
        rotate: {
          from: 0,
          to: 360,
          ease: 'linear',
          duration: spinDuration,
          repeat: Infinity,
          repeatType: 'loop' as const
        },
        scale: {
          type: 'spring' as const,
          damping: 20,
          stiffness: 300
        }
      }
    });
  }, [spinDuration, controls]);

  const loaderContent = (
    <motion.div
      className={cn('relative mx-auto flex items-center justify-center', sizeClasses[size], className)}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
    >
      {letterPositions.map((pos, i) => (
        <span 
          key={`${pos.letter}-${i}`}
          className={cn(
            'absolute left-1/2 top-1/2 font-black transition-all duration-500 text-primary flex items-center justify-center select-none',
            fontSizes[size]
          )}
          style={{ 
            transform: pos.transform,
            WebkitTransform: pos.transform,
            transformOrigin: 'center center',
            width: 'max-content',
            height: 'max-content'
          }}
        >
          {pos.letter}
        </span>
      ))}
    </motion.div>
  );

  if (noSSR) {
    return (
      <NoSSR fallback={<div className={cn('relative mx-auto', sizeClasses[size], className)} />}>
        {loaderContent}
      </NoSSR>
    );
  }

  return loaderContent;
}

export default CircularLoader;
