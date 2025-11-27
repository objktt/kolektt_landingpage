"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface ShapeConnectAnimation01Props {
  theme?: 'light' | 'dark';
}

export const ShapeConnectAnimation01 = ({ theme = 'light' }: ShapeConnectAnimation01Props) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });
  
  // Transform shapes based on scroll progress
  const circleX = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const squareX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  
  const [circleAnimationData, setCircleAnimationData] = React.useState(null);
  const [squareAnimationData, setSquareAnimationData] = React.useState(null);

  React.useEffect(() => {
    // Circle - Globe (Americas)
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/1f30e/lottie.json')
      .then(response => response.json())
      .then(data => setCircleAnimationData(data))
      .catch(error => console.error('Error loading circle Lottie animation:', error));
    
    // Square - Comet
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/2604_fe0f/lottie.json')
      .then(response => response.json())
      .then(data => setSquareAnimationData(data))
      .catch(error => console.error('Error loading square Lottie animation:', error));
  }, []);
  
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-background';
  const textClass = theme === 'dark' ? 'text-gray-400' : 'text-primary/60';
  
  return (
    <section ref={ref} className={cn("relative py-20 lg:py-32 overflow-hidden -mt-[150px]", bgClass)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-64 relative">
          
          {/* Circle - Lottie Animation */}
          <motion.div
            style={{ 
              x: circleX,
              opacity: opacity
            }}
            className="absolute z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 overflow-hidden rounded-full">
              {circleAnimationData && (
                <Lottie 
                  animationData={circleAnimationData}
                  loop={true}
                  style={{ width: '102%', height: '102%', marginLeft: '-1%', marginTop: '-1%' }}
                />
              )}
            </div>
          </motion.div>

          {/* Square - Lottie Animation */}
          <motion.div
            style={{ 
              x: squareX,
              opacity: opacity
            }}
            className="absolute z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
              {squareAnimationData && (
                <Lottie 
                  animationData={squareAnimationData}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
          </motion.div>

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className={cn("text-sm font-medium", textClass)}>We approach the world</p>
        </div>

      </div>
    </section>
  );
};
