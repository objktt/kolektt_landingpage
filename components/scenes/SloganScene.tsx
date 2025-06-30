'use client'

import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import SnapSlogan from './SnapSlogan'
import CollectSlogan from './CollectSlogan'
import AnalyzeSlogan from './AnalyzeSlogan'
import TradeSlogan from './TradeSlogan'

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

      {/* 각 슬로건별 개별 컴포넌트 렌더링 */}
      <SnapSlogan scrollYProgress={scrollYProgress} isKorean={true} />
      <CollectSlogan scrollYProgress={scrollYProgress} isKorean={true} />
      <AnalyzeSlogan scrollYProgress={scrollYProgress} isKorean={true} />
      <TradeSlogan scrollYProgress={scrollYProgress} isKorean={true} />
    </div>
  )
} 