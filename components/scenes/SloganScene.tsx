'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const slogans = [
  { 
    word: 'SNAP', 
    subtitle: 'AI로 레코드를 스캔하세요',
    color: 'from-red-500 to-pink-500'
  },
  { 
    word: 'COLLECT', 
    subtitle: '개인 아카이브를 구축하세요',
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    word: 'ANALYZE', 
    subtitle: '당신의 취향을 이해하세요',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    word: 'TRADE', 
    subtitle: '다른 사람들과 연결하고 교환하세요',
    color: 'from-purple-500 to-violet-500'
  },
]

export default function SloganScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="relative" style={{ height: `${slogans.length * 100}vh` }}>
      {/* 고정된 아이폰 */}
      <div className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
          className="w-48 h-96 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl border border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </div>

      {/* 스크롤되는 슬로건들 */}
      {slogans.map((slogan, index) => {
        const sectionProgress = useTransform(
          scrollYProgress,
          [index / slogans.length, (index + 1) / slogans.length],
          [1, 0]
        )
        
        const y = useTransform(
          scrollYProgress,
          [index / slogans.length, (index + 1) / slogans.length],
          ['100vh', '-100vh']
        )

        const opacity = useTransform(
          scrollYProgress,
          [
            index / slogans.length,
            (index + 0.2) / slogans.length,
            (index + 0.8) / slogans.length,
            (index + 1) / slogans.length
          ],
          [0, 1, 1, 0]
        )

        return (
          <motion.div
            key={slogan.word}
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
      })}
    </div>
  )
} 