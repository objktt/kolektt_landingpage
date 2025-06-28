'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function TransitionScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-vinyl-900 overflow-hidden"
    >
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-vinyl-900" />
      
      {/* 사라지는 아이폰 */}
      <motion.div
        className="relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="w-48 h-96 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border border-gray-700">
          <div className="w-full h-full bg-black rounded-[2rem] relative overflow-hidden">
            {/* 노치 */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10" />
            
            {/* 스크린 */}
            <div className="absolute inset-0 bg-gradient-to-br from-vinyl-50 to-vinyl-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-vinyl-500 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black">Kolektt</h3>
                <p className="text-xs text-gray-600">AI Music Collector</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 중앙 텍스트 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            이제 당신만의
            <br />
            <span className="text-gradient">사운드스케이프</span>를
            <br />
            경험할 준비가 되셨나요?
          </h2>
        </motion.div>
      </div>

      {/* 배경 파티클 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-vinyl-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* 음파 효과 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-vinyl-400/20 rounded-full"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
            }}
            animate={{
              scale: [1, 2, 3],
              opacity: [0.5, 0.2, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </motion.section>
  )
} 