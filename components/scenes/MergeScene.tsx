'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function MergeScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-vinyl-100 to-vinyl-200 overflow-hidden"
      style={{ opacity }}
    >
      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-vinyl-100 via-vinyl-200 to-vinyl-300" />
      
      {/* 중앙의 메인 앨범 커버 */}
      <motion.div
        className="relative"
        style={{ scale }}
      >
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-vinyl-500 to-vinyl-700 rounded-2xl shadow-2xl relative overflow-hidden"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* 앨범 커버 디자인 */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
          <div className="absolute inset-8 bg-black rounded-full vinyl-record" />
          
          {/* 글로우 효과 */}
          <div className="absolute inset-0 rounded-2xl animate-glow" />
          
          {/* 앨범 정보 */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-2xl font-bold mb-1">Your Collection</div>
            <div className="text-vinyl-200">Powered by AI</div>
          </div>
        </motion.div>

        {/* 주변 파티클 효과 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-vinyl-400 rounded-full"
            style={{
              left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 12)}%`,
              top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 12)}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </motion.div>

      {/* 텍스트 콘텐츠 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            우리 AI는 당신의 레코드를
            <br />
            <span className="text-gradient">즉시 인식</span>합니다
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            한 장의 사진. 하나의 컬렉션.
          </p>
        </motion.div>
      </div>

      {/* 배경 장식 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-vinyl-300/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 80}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.section>
  )
} 