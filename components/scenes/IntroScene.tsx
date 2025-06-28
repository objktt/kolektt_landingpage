'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const vinylCovers = [
  { id: 1, title: 'Abbey Road', artist: 'The Beatles', color: 'bg-blue-500', x: 5, y: 50, rotation: -15, zIndex: 8 },
  { id: 2, title: 'Dark Side of the Moon', artist: 'Pink Floyd', color: 'bg-purple-600', x: 25, y: 45, rotation: 20, zIndex: 7 },
  { id: 3, title: 'Thriller', artist: 'Michael Jackson', color: 'bg-red-500', x: 45, y: 55, rotation: -10, zIndex: 6 },
  { id: 4, title: 'Nevermind', artist: 'Nirvana', color: 'bg-cyan-400', x: 65, y: 40, rotation: 25, zIndex: 5 },
  { id: 5, title: 'The Wall', artist: 'Pink Floyd', color: 'bg-gray-800', x: 15, y: 65, rotation: -25, zIndex: 4 },
  { id: 6, title: 'Led Zeppelin IV', artist: 'Led Zeppelin', color: 'bg-yellow-600', x: 35, y: 70, rotation: 15, zIndex: 3 },
  { id: 7, title: 'Back in Black', artist: 'AC/DC', color: 'bg-black', x: 55, y: 75, rotation: -20, zIndex: 2 },
  { id: 8, title: 'Rumours', artist: 'Fleetwood Mac', color: 'bg-green-600', x: 75, y: 60, rotation: 10, zIndex: 1 },
]

export default function IntroScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-vinyl-50 to-vinyl-100 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-vinyl-50 to-vinyl-100" />
      
      {/* 흩어진 바이닐 커버들 */}
      <div className="relative w-full h-full">
        {vinylCovers.map((vinyl, index) => (
          <motion.div
            key={vinyl.id}
            className={`absolute w-48 h-48 md:w-64 md:h-64 ${vinyl.color} rounded-lg shadow-2xl hover-lift`}
            style={{
              left: `${vinyl.x}%`,
              top: `${vinyl.y}%`,
              zIndex: vinyl.zIndex,
              transform: `translateX(-50%) translateY(-50%)`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0, 
              rotate: vinyl.rotation - 180,
              y: -200 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: vinyl.rotation,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            whileHover={{
              scale: 1.05,
              rotate: vinyl.rotation + 5,
              y: -10,
              zIndex: 20,
              transition: { duration: 0.3 }
            }}
          >
            {/* 바이닐 레코드 효과 */}
            <div className="w-full h-full rounded-lg relative overflow-hidden">
              <div className="absolute inset-2 bg-black rounded-full vinyl-record opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
            </div>
            
            {/* 앨범 정보 툴팁 */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              <div className="font-semibold">{vinyl.title}</div>
              <div className="text-gray-300 text-xs">{vinyl.artist}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 중앙 텍스트 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          모든 소리는
          <br />
          <span className="text-gradient">추억</span>입니다
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          사랑했지만 잃어버린 레코드들을
          <br />
          다시 찾아보세요
        </motion.p>

        {/* 스크롤 인디케이터 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">스크롤하여 계속</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 