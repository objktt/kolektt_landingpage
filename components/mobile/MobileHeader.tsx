'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import { useState } from 'react'
import BetaServiceSticker from '../BetaServiceSticker'

interface MobileHeaderProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
  setIsKorean: (value: boolean) => void
  scrollToWaitlist: () => void
}

export default function MobileHeader({ 
  scrollYProgress, 
  isKorean, 
  setIsKorean, 
  scrollToWaitlist 
}: MobileHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Thank You Message - appears when iPhone disappears */}
      <motion.div
        className="absolute z-50 text-white text-center select-none pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
          opacity: useTransform(scrollYProgress, (value) => {
            if (value < 0.96) return 0;
            if (value < 0.98) {
              const progress = (value - 0.96) / 0.02;
              return progress;
            }
            if (value < 1.0) return 1;
            return 0;
          })
        }}
      >
        <div className="bg-black/60 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20">
          <h2 className="text-2xl font-bold mb-2">
            {isKorean ? '곧 만나요!' : 'See you soon!'}
          </h2>
          <p className="text-gray-300">
            {isKorean ? 'Kolektt과 함께 음악의 새로운 세계를 탐험해보세요.' : 'Explore the new world of music with Kolektt.'}
          </p>
        </div>
      </motion.div>

      {/* Animated Kolektt Typography - transforms from center to header */}
      <motion.div
        className="fixed left-1/2 z-50 select-none pointer-events-none"
        style={{
          top: useTransform(scrollYProgress, (value) => {
            const progress = Math.min(Math.max((value - 0) / (0.2 - 0), 0), 1);
            const easedProgress = progress * progress; // ease-in (quadratic)
            const startVh = 40;
            const endRem = -3.8;
            return progress === 0 ? `${startVh}vh` : progress === 1 ? `${endRem}rem` : `calc(${startVh - easedProgress * startVh}vh + ${easedProgress * endRem}rem)`;
          }),
          x: '-50%',
          scale: useTransform(scrollYProgress, (value) => {
            const progress = Math.min(Math.max((value - 0) / (0.2 - 0), 0), 1);
            const easedProgress = progress * progress; // ease-in (quadratic)
            return 1 - (easedProgress * 0.8);
          }),
        }}
      >
        <div className="text-center">
          <div className="relative">
            <motion.h1 
              className="font-black select-none pointer-events-none"
              style={{
                color: '#ffffff',
                fontSize: useTransform(scrollYProgress, [0, 0.2], ['7.26rem', '10.89rem']),
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                letterSpacing: useTransform(scrollYProgress, [0, 0.2], ['-0.05em', '-0.02em']),
                lineHeight: useTransform(scrollYProgress, [0, 0.2], ['0.8', '1']),
                filter: useTransform(
                  scrollYProgress, 
                  [0, 0.2], 
                  ['drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))', 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))']
                )
              }}
            >
              Kolektt
            </motion.h1>
            
            {/* Beta Service Sticker */}
            <motion.div
              className="absolute -top-11 -right-8 select-none pointer-events-none transform rotate-12"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
                scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
              }}
            >
              <BetaServiceSticker 
                scrollYProgress={scrollYProgress}
                rotate={true}
                rotationDuration={8}
                size={64}
              />
            </motion.div>
          </div>
          
          {/* Subtitle */}
          <motion.div
            className="mt-4 select-none pointer-events-none"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
            }}
          >
            <div className="text-white/90 font-medium text-sm" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
              {isKorean ? '레코드로 연결되고, 연결로 창조합니다.' : 'Through records, we connect. Through connection, we create.'}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Fixed Mobile Hamburger Menu Button - appears when title reaches header */}
      <motion.div
        className="fixed z-[999]"
        style={{
          top: '16px',
          right: '24px',
          transform: 'none',
          position: 'fixed',
          opacity: 1, // 테스트를 위해 항상 보이게 설정
        }}
      >
        <div>
          <motion.button
            className="flex flex-col items-center justify-center w-12 h-12 hover:bg-white/10 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Hamburger Icon with animation */}
            <div className="flex flex-col space-y-1">
              <motion.div 
                className="w-5 h-0.5 bg-white rounded-full origin-center"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="w-5 h-0.5 bg-white rounded-full"
                animate={{
                  opacity: isMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div 
                className="w-5 h-0.5 bg-white rounded-full origin-center"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Dropdown Menu - Separate from hamburger button */}
      <motion.div
        className="fixed bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden z-[1000]"
        style={{
          top: '76px',
          right: '24px',
          transform: 'none',
          transformOrigin: 'right top',
          width: '256px'
        }}
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -10,
          scale: isMenuOpen ? 1 : 0.95,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Business Offer */}
        <motion.button
          onClick={() => {
            window.open('/about#business', '_blank')
            setIsMenuOpen(false)
          }}
          className="w-full px-6 py-4 text-left text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/10"
          whileHover={{ x: 4 }}
        >
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-vinyl-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
            <div>
              <div className="font-semibold">Business Offer</div>
              <div className="text-sm text-gray-400">Partnership opportunities</div>
            </div>
          </div>
        </motion.button>

        {/* Language Toggle */}
        <motion.button
          onClick={() => {
            setIsKorean(!isKorean)
            setIsMenuOpen(false)
          }}
          className="w-full px-6 py-4 text-left text-white hover:bg-white/10 transition-colors duration-200 border-b border-white/10"
          whileHover={{ x: 4 }}
        >
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-vinyl-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <div>
              <div className="font-semibold">{isKorean ? 'English' : '한국어'}</div>
              <div className="text-sm text-gray-400">Switch language</div>
            </div>
          </div>
        </motion.button>

        {/* Join Waitlist */}
        <motion.button
          onClick={() => {
            scrollToWaitlist()
            setIsMenuOpen(false)
          }}
          className="w-full px-6 py-4 text-left text-white hover:bg-white/10 transition-colors duration-200"
          whileHover={{ x: 4 }}
        >
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-vinyl-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div>
              <div className="font-semibold">Join Waitlist</div>
              <div className="text-sm text-gray-400">Get early access</div>
            </div>
          </div>
        </motion.button>
      </motion.div>
    </>
  )
} 