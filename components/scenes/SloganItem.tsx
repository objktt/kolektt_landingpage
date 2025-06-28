'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import { memo } from 'react'

interface SloganItemProps {
  slogan: {
    word: string
    subtitle: string
    color: string
  }
  index: number
  scrollYProgress: MotionValue<number>
  totalSlogans: number
}

const SloganItem = memo(({ slogan, index, scrollYProgress, totalSlogans }: SloganItemProps) => {
  const sectionProgress = useTransform(
    scrollYProgress,
    [index / totalSlogans, (index + 1) / totalSlogans],
    [1, 0]
  )
  
  const y = useTransform(
    scrollYProgress,
    [index / totalSlogans, (index + 1) / totalSlogans],
    ['100vh', '-100vh']
  )

  const opacity = useTransform(
    scrollYProgress,
    [
      index / totalSlogans,
      (index + 0.2) / totalSlogans,
      (index + 0.8) / totalSlogans,
      (index + 1) / totalSlogans
    ],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-black relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* 배경 그라디언트 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slogan.color} opacity-10`} />
      
      {/* 메인 슬로건 */}
      <div className={`absolute ${index % 2 === 0 ? 'left-8 md:left-16' : 'right-8 md:right-16'} top-1/2 transform -translate-y-1/2`}>
        <motion.h2
          className={`text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r ${slogan.color} leading-none`}
          initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {slogan.word}
        </motion.h2>
        
        <motion.p
          className="text-white text-lg md:text-xl mt-4 max-w-md"
          initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {slogan.subtitle}
        </motion.p>
      </div>

      {/* 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${slogan.color} rounded-full`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  )
})

SloganItem.displayName = 'SloganItem'

export default SloganItem 