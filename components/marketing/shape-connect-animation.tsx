"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';

import { cn } from '@/lib/utils';

interface ShapeConnectAnimationProps {
  theme?: 'light' | 'dark';
}

export const ShapeConnectAnimation = ({ theme = 'light' }: ShapeConnectAnimationProps) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });
  
  const [circleAnimationData, setCircleAnimationData] = React.useState(null);
  const [squareAnimationData, setSquareAnimationData] = React.useState(null);

  React.useEffect(() => {
    // Circle - Right Fist
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/1faf1_1f3fd/lottie.json')
      .then(response => response.json())
      .then(data => setCircleAnimationData(data))
      .catch(error => console.error('Error loading circle Lottie animation:', error));
    
    // Square - Left Fist
    fetch('https://fonts.gstatic.com/s/e/notoemoji/latest/1faf2_1f3fb/lottie.json')
      .then(response => response.json())
      .then(data => setSquareAnimationData(data))
      .catch(error => console.error('Error loading square Lottie animation:', error));
  }, []);
  
  const circleX = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const squareX = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-background';
  const textClass = theme === 'dark' ? 'text-gray-400' : 'text-primary/60';

  return (
    <section ref={ref} className={cn("relative py-20 lg:py-32 overflow-hidden", bgClass)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-64 relative">
          
          {/* Circle Animation */}
          <motion.div
            style={{ 
              x: circleX,
              opacity: opacity
            }}
            className="absolute z-20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
              {circleAnimationData && (
                <Lottie 
                  animationData={circleAnimationData}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </div>
          </motion.div>

          {/* Square Animation */}
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
          <p className={cn("text-sm font-medium", textClass)}>We create together</p>
        </div>

      </div>
    </section>
  );
};
