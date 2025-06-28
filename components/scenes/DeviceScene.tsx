'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function DeviceScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden"
      style={{ opacity }}
    >
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* 배경 파티클 효과 */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 아이폰 */}
      <motion.div
        className="relative z-10"
        style={{ y, scale }}
        initial={{ opacity: 0, rotateY: -30 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* 아이폰 바디 */}
        <div className="relative">
          {/* 글로우 효과 */}
          <div className="absolute -inset-4 bg-gradient-to-r from-vinyl-500/20 to-vinyl-600/20 rounded-[3rem] blur-xl" />
          
          {/* 아이폰 프레임 */}
          <div className="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl border border-gray-700">
            {/* 스크린 */}
            <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
              {/* 노치 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
              
              {/* 앱 화면 */}
              <div className="absolute inset-0 bg-gradient-to-br from-vinyl-50 to-vinyl-100 flex flex-col">
                {/* 상태바 */}
                <div className="h-12 flex items-center justify-between px-6 pt-2">
                  <span className="text-black text-sm font-semibold">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 border border-black rounded-sm">
                      <div className="w-full h-full bg-black rounded-sm" />
                    </div>
                  </div>
                </div>
                
                {/* 앱 콘텐츠 */}
                <div className="flex-1 px-6 py-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">Kolektt</h3>
                    <p className="text-gray-600 text-sm">AI 바이닐 컬렉터</p>
                  </div>
                  
                  {/* 바이닐 스캔 영역 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                    <div className="w-full h-32 bg-gradient-to-br from-vinyl-200 to-vinyl-300 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-vinyl-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600">바이닐을 스캔하세요</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 최근 스캔 */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-white rounded-lg p-3 flex items-center space-x-3 shadow-sm">
                        <div className="w-8 h-8 bg-vinyl-400 rounded-lg" />
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded w-3/4 mb-1" />
                          <div className="h-2 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 텍스트 콘텐츠 */}
      <div className="absolute inset-0 flex items-end justify-center pb-20 z-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            이제 손바닥 안에서
            <br />
            <span className="text-gradient">음악 컬렉션을 관리</span>하세요
          </h2>
        </motion.div>
      </div>
    </motion.section>
  )
} 