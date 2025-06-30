'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function CTAScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setEmail('')
      } else {
        console.error('Error:', data.error)
        // 에러 처리 (선택사항: 에러 토스트 표시)
      }
    } catch (error) {
      console.error('Network error:', error)
      // 네트워크 에러 처리
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  return (
    <motion.section
      ref={containerRef}
      data-section="waitlist"
      className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden"
      style={{ opacity }}
    >
      {/* 배경 */}
      <div className="absolute inset-0 bg-black" />
      
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border border-vinyl-400/10 rounded-full"
            style={{
              left: `${-20 + i * 25}%`,
              top: `${-20 + (i % 3) * 40}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 25 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* 떠다니는 음표들 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`note-${i}`}
            className="absolute text-vinyl-400/20 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              rotate: [-5, 5, -5],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >


            {/* 메인 헤딩 */}
            <motion.h2
              className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Join Our Waitlist
              </span>
            </motion.h2>

            {/* 서브 텍스트 */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Be the first to experience the future of music collection.
              <br />
              <span className="text-blue-300">AI meets vinyl passion.</span>
            </motion.p>



            {/* 사전 등록 폼 */}
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                    required
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-vinyl-500 to-vinyl-600 text-white font-semibold rounded-full hover:from-vinyl-600 hover:to-vinyl-700 focus:outline-none focus:ring-4 focus:ring-vinyl-500/30 transition-all duration-150 shadow-lg hover:shadow-vinyl-500/25 disabled:opacity-50 whitespace-nowrap"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Joining...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Join Our Waitlist</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.form>

            {/* 다운로드 버튼들 */}
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* App Store 버튼 */}
              <motion.button
                onClick={handleDownloadClick}
                className="group relative overflow-hidden bg-black border border-white/20 rounded-full px-8 py-4 flex items-center space-x-4 hover:border-white/40 transition-all duration-300 min-w-[240px] opacity-60 cursor-not-allowed"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-vinyl-500/10 to-vinyl-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Apple 로고 */}
                <div className="relative z-10">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                
                <div className="relative z-10 text-left">
                  <div className="text-sm text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold text-white">App Store</div>
                </div>
              </motion.button>

              {/* Google Play 버튼 */}
              <motion.button
                onClick={handleDownloadClick}
                className="group relative overflow-hidden bg-black border border-white/20 rounded-full px-8 py-4 flex items-center space-x-4 hover:border-white/40 transition-all duration-300 min-w-[240px] opacity-60 cursor-not-allowed"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-vinyl-500/10 to-vinyl-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Google Play 로고 */}
                <div className="relative z-10">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00D4FF"/>
                        <stop offset="25%" stopColor="#00A1FF"/>
                        <stop offset="50%" stopColor="#FF3D71"/>
                        <stop offset="75%" stopColor="#FFBA00"/>
                        <stop offset="100%" stopColor="#00D4FF"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#playGradient)" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                
                <div className="relative z-10 text-left">
                  <div className="text-sm text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold text-white">Google Play</div>
                </div>
              </motion.button>
            </motion.div>

            {/* 추가 정보 */}
            <motion.div
              className="mt-8 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-sm">
                Get early access, beta invitations, and exclusive updates
              </p>
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* 성공 메시지 */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            
            <motion.h3
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              You&apos;re on the list! 🎉
            </motion.h3>
            
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We&apos;ll notify you as soon as Kolektt is ready to revolutionize your music collection experience.
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center space-x-8 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-vinyl-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-vinyl-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">Email confirmed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-vinyl-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-vinyl-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-sm">Privacy protected</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* 하단 그라디언트 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* 토스트 메시지 */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-8 left-0 right-0 mx-auto w-fit z-[100] bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full shadow-2xl backdrop-blur-sm border border-blue-400/30"
        >
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm">2025년 7월 런칭 예정</p>
              <p className="text-xs text-blue-100">조금만 기다려주세요!</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  )
} 