'use client'

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import VinylRecord from '@/components/VinylRecord'
import { albums } from '@/lib/mobileData'
import MobileHeader from '@/components/mobile/MobileHeader'
import dynamic from 'next/dynamic'
import { Footer } from '@/components/Footer'

const SnapSlogan = dynamic(() => import('@/components/scenes/SnapSlogan'), { ssr: false })
const CollectSlogan = dynamic(() => import('@/components/scenes/CollectSlogan'), { ssr: false })
const AnalyzeSlogan = dynamic(() => import('@/components/scenes/AnalyzeSlogan'), { ssr: false })
const TradeSlogan = dynamic(() => import('@/components/scenes/TradeSlogan'), { ssr: false })

export default function MPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  const [coverImages, setCoverImages] = useState<{[key: number]: string}>({})
  const [randomTopIndex, setRandomTopIndex] = useState<number>(0)
  const [randomSnapAlbum, setRandomSnapAlbum] = useState<string>('')
  const [isKorean, setIsKorean] = useState(false)
  const [shouldBlur, setShouldBlur] = useState(true)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const mergeProgress = useMotionValue(0);

  // 컴포넌트 마운트 시 랜덤 순서와 커버 이미지들 로드
  useEffect(() => {
    // 랜덤하게 맨 위에 올 앨범의 ID 설정 (1부터 시작하므로 +1)
    const randomIndex = Math.floor(Math.random() * albums.length)
    setRandomTopIndex(albums[randomIndex].id)
    
    // SNAP 섹션용 랜덤 앨범 선택
    const randomSnapIndex = Math.floor(Math.random() * albums.length)
    setRandomSnapAlbum(albums[randomSnapIndex]?.image || '')
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Collect 섹션: useTransform 배열을 컴포넌트 최상단에서 직접 선언
  const collectOpacityArr = [
    useTransform(scrollYProgress, [0.50 + 0 * 0.015, 0.52 + 0 * 0.015], [0, 1]),
    useTransform(scrollYProgress, [0.50 + 1 * 0.015, 0.52 + 1 * 0.015], [0, 1]),
    useTransform(scrollYProgress, [0.50 + 2 * 0.015, 0.52 + 2 * 0.015], [0, 1]),
    useTransform(scrollYProgress, [0.50 + 3 * 0.015, 0.52 + 3 * 0.015], [0, 1]),
    useTransform(scrollYProgress, [0.50 + 4 * 0.015, 0.52 + 4 * 0.015], [0, 1]),
    useTransform(scrollYProgress, [0.50 + 5 * 0.015, 0.52 + 5 * 0.015], [0, 1]),
    useTransform(scrollYProgress, [0.50 + 6 * 0.015, 0.52 + 6 * 0.015], [0, 1]),
    useTransform(scrollYProgress, [0.50 + 7 * 0.015, 0.52 + 7 * 0.015], [0, 1]),
  ];
  const collectXArr = [
    useTransform(scrollYProgress, [0.50 + 0 * 0.015, 0.52 + 0 * 0.015], [30, 0]),
    useTransform(scrollYProgress, [0.50 + 1 * 0.015, 0.52 + 1 * 0.015], [30, 0]),
    useTransform(scrollYProgress, [0.50 + 2 * 0.015, 0.52 + 2 * 0.015], [30, 0]),
    useTransform(scrollYProgress, [0.50 + 3 * 0.015, 0.52 + 3 * 0.015], [30, 0]),
    useTransform(scrollYProgress, [0.50 + 4 * 0.015, 0.52 + 4 * 0.015], [30, 0]),
    useTransform(scrollYProgress, [0.50 + 5 * 0.015, 0.52 + 5 * 0.015], [30, 0]),
    useTransform(scrollYProgress, [0.50 + 6 * 0.015, 0.52 + 6 * 0.015], [30, 0]),
    useTransform(scrollYProgress, [0.50 + 7 * 0.015, 0.52 + 7 * 0.015], [30, 0]),
  ];

  // ANALYZE 섹션: useTransform 배열을 컴포넌트 최상단에서 직접 선언
  const genreStrokeDasharrayArr = [
    useTransform(scrollYProgress, [0.67, 0.71], ['0 100', '45 55']),
    useTransform(scrollYProgress, [0.68, 0.72], ['0 100', '25 75']),
    useTransform(scrollYProgress, [0.69, 0.73], ['0 100', '20 80']),
    useTransform(scrollYProgress, [0.70, 0.74], ['0 100', '10 90']),
  ];
  const genreLegendOpacityArr = [
    useTransform(scrollYProgress, [0.68, 0.72], [0, 1]),
    useTransform(scrollYProgress, [0.69, 0.73], [0, 1]),
    useTransform(scrollYProgress, [0.70, 0.74], [0, 1]),
    useTransform(scrollYProgress, [0.71, 0.75], [0, 1]),
  ];
  const genreLegendXArr = [
    useTransform(scrollYProgress, [0.68, 0.72], [10, 0]),
    useTransform(scrollYProgress, [0.69, 0.73], [10, 0]),
    useTransform(scrollYProgress, [0.70, 0.74], [10, 0]),
    useTransform(scrollYProgress, [0.71, 0.75], [10, 0]),
  ];
  // Decade(4개)
  const decadeHeightArr = [
    useTransform(scrollYProgress, [0.68, 0.72], [0, '60%']),
    useTransform(scrollYProgress, [0.70, 0.74], [0, '85%']),
    useTransform(scrollYProgress, [0.72, 0.76], [0, '75%']),
    useTransform(scrollYProgress, [0.74, 0.78], [0, '40%']),
  ];
  // Mood(4개)
  const moodWidthArr = [
    useTransform(scrollYProgress, [0.69, 0.73], [0, '78%']),
    useTransform(scrollYProgress, [0.70, 0.74], [0, '45%']),
    useTransform(scrollYProgress, [0.71, 0.75], [0, '62%']),
    useTransform(scrollYProgress, [0.72, 0.76], [0, '33%']),
  ];

  // TRADE 섹션: useTransform 배열을 컴포넌트 최상단에서 직접 선언
  // Price range selection (3개)
  const tradePriceOpacityArr = [
    useTransform(scrollYProgress, [0.83, 0.85], [0, 1]),
    useTransform(scrollYProgress, [0.84, 0.86], [0, 1]),
    useTransform(scrollYProgress, [0.85, 0.87], [0, 1]),
  ];
  const tradePriceYArr = [
    useTransform(scrollYProgress, [0.83, 0.85], [10, 0]),
    useTransform(scrollYProgress, [0.84, 0.86], [10, 0]),
    useTransform(scrollYProgress, [0.85, 0.87], [10, 0]),
  ];
  // Other listings (2개)
  const tradeMoreOpacityArr = [
    useTransform(scrollYProgress, [0.87, 0.89], [0, 1]),
    useTransform(scrollYProgress, [0.89, 0.91], [0, 1]),
  ];
  const tradeMoreXArr = [
    useTransform(scrollYProgress, [0.87, 0.89], [20, 0]),
    useTransform(scrollYProgress, [0.89, 0.91], [20, 0]),
  ];

  // 스크롤 진행도에 따라 블러 상태 업데이트
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setShouldBlur(latest < 0.1)
    })
    return unsubscribe
  }, [scrollYProgress])

  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector('[data-section="waitlist"]')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const bodyHeight = document.body.scrollHeight
      // 98% 이상 스크롤 시 푸터 노출
      if (scrollY + windowHeight >= bodyHeight * 0.98) {
        setIsFooterVisible(true)
      } else {
        setIsFooterVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v < 0.15) mergeProgress.set(0);
      else if (v > 0.25) mergeProgress.set(1);
      else mergeProgress.set((v - 0.15) / 0.1);
    });
    return unsubscribe;
  }, [scrollYProgress, mergeProgress]);

  return (
    <div ref={containerRef} className="relative" style={{ height: '5500px' }}>


      {/* Fixed viewport - 90도 top-down view */}
      <div className="fixed inset-0 bg-black overflow-hidden">
        
        {/* White flash effect when vinyl reaches center */}
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, (value) => {
              // 비닐이 중앙에 도달하는 42% 지점에서 플래시 (더 늦게)
              if (value >= 0.415 && value <= 0.425) {
                // 1% 구간에서 플래시 (훨씬 더 길게)
                const progress = (value - 0.415) / 0.01;
                // 빠르게 올라갔다가 빠르게 내려옴
                return Math.sin(progress * Math.PI) * 0.9; // 최대 90% 투명도
              }
              return 0;
            })
          }}
        />
        
        {/* Dark textured floor background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-black" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                   radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
                   linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%),
                   linear-gradient(-45deg, rgba(255,255,255,0.01) 25%, transparent 25%)
                 `,
                 backgroundSize: '200px 200px, 300px 300px, 40px 40px, 40px 40px'
               }}
          />
        </div>

        {/* Black overlay container above all elements */}
        <motion.div
          className="absolute inset-0 bg-black/60 z-[45] pointer-events-none backdrop-blur-md"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0])
          }}
        />

        {/* Album Info Display - 레코드가 모였을 때 맨 위 레코드 정보 표시 */}
        <motion.div
          className="absolute z-40 text-white text-center"
          style={{
            left: '50%',
            top: 'calc(50% + 150px)',
            x: '-50%',
            opacity: useTransform(scrollYProgress, (value) => {
              if (value < 0.25) return 0;
              if (value < 0.265) return (value - 0.25) / 0.015;
              if (value < 0.295) return 1;
              if (value < 0.34) return 1 - (value - 0.295) / 0.015;
              return 0;
            })
          }}
        >
          <div className="bg-black/60 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-1">
              {albums.find(record => record.id === randomTopIndex)?.title}
            </h3>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-lg text-gray-300">
                {albums.find(record => record.id === randomTopIndex)?.artist}
              </span>
              <span className="text-sm text-blue-200 font-semibold">
                {albums.find(record => record.id === randomTopIndex)?.year}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Vinyl records wall */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center" 
          style={{ 
            perspective: '1000px',
            opacity: scrollYProgress.get() < 0.50 ? 1 : 0
          }}
        >
          {scrollYProgress.get() < 0.50 && albums.map((record) => (
            <VinylRecord
              key={record.id}
              record={record}
              coverImage={record.image || ''}
              mergeProgress={mergeProgress}
              scrollYProgress={scrollYProgress}
              randomTopIndex={randomTopIndex}
            />
          ))}
        </motion.div> 

        {/* iPhone */}
        <motion.div
          className="absolute z-30"
          style={{
            left: '50%',
            x: '-50%',
            y: useTransform(scrollYProgress, (value) => {
              // 0.25-0.35: 하단에서 중앙으로 올라옴 (원래 진입 시점)
              if (value < 0.25) return '150%'; // 화면 하단 밖
              if (value < 0.35) {
                const progress = (value - 0.25) / 0.1;
                return `${150 - progress * 200}%`; // 150%에서 -50%로
              }
              // 0.35-0.96: 중앙에 머무름 (훨씬 더 오래 머무름)
              if (value < 0.96) return '-50%';
              // 0.96-1.0: 상단으로 올라감 (마지막에만 나감)
              if (value < 1.0) {
                const progress = (value - 0.96) / 0.04;
                return `${-50 - progress * 200}%`; // -50%에서 -250%로
              }
              return '-250%'; // 화면 상단 밖
            }),
            top: '50%',
            opacity: 1,
            scale: useTransform(scrollYProgress, (value) => {
              // 0.25-0.35: 진입하면서 스케일 증가
              if (value < 0.25) return 0.6; // 작게 시작
              if (value < 0.35) {
                const progress = (value - 0.25) / 0.1;
                return 0.6 + progress * 0.4; // 0.6에서 1.0으로
              }
              // 0.35-0.96: 정상 크기 유지 (훨씬 더 오래 유지)
              if (value < 0.96) return 1.0;
              // 0.96-1.0: 나가면서 스케일 감소
              if (value < 1.0) {
                const progress = (value - 0.96) / 0.04;
                return 1.0 - progress * 0.4; // 1.0에서 0.6으로
              }
              return 0.6; // 작게 끝
            }),
            transformOrigin: 'center center'
          }}
        >
          <div className="relative">
            <div 
              className="w-[45rem] h-[72rem] drop-shadow-2xl"
              style={{
                backgroundImage: 'url(/assets/phone.svg)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Phone screen background with record list */}
            <div 
              className="absolute overflow-hidden"
              style={{
                backgroundColor: '#101114',
                // 아이폰 화면 비율에 맞춤
                left: '30.6%',    
                top: '24%',       
                width: '39%',     
                height: '52%',    
                borderRadius: '32px',
              }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2 text-white text-xs">
                <span className="font-semibold">9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 border border-white rounded-sm">
                    <div className="w-full h-full bg-white rounded-sm" />
                  </div>
                </div>
              </div>

              {/* App header */}
              <div className="px-4 py-3 text-center">
                <h3 className="text-white text-lg font-bold">Kolektt</h3>
                <p className="text-blue-200 text-xs">AI Vinyl Collection</p>
              </div>

              {/* Search bar */}
              <div className="px-4 mb-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-white/60 text-xs">Search your collection...</span>
                </div>
              </div>

              {/* App content container */}
              <div className="relative flex-1 overflow-hidden">
                {/* COLLECT section - Records list (only visible during COLLECT phase) */}
                <motion.div
                  className="space-y-2 absolute inset-0 px-4 pt-2"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.50, 0.52, 0.60, 0.62], [0, 1, 1, 0]),
                    zIndex: 10
                  }}
                >
                  <p className="text-white/80 text-xs font-medium">Your Collection</p>
                  {albums.slice(0, 8).map((record, index) => (
                    <motion.div
                      key={`collect-${record.id}`}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center space-x-3"
                      style={{
                        opacity: collectOpacityArr[index],
                        x: collectXArr[index]
                      }}
                    >
                      {/* Album cover thumbnail */}
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/20 flex-shrink-0 relative">
                        {record.image ? (
                          <Image 
                            src={record.image}
                            alt={record.title}
                            fill
                            className="object-cover will-change-transform"
                            sizes="40px"
                            quality={75}
                            loading="lazy"
                          />
                        ) : (
                          <div 
                            className="w-full h-full rounded-lg"
                            style={{ backgroundColor: record.color }}
                          />
                        )}
                      </div>
                      {/* Album info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white text-xs font-semibold truncate">
                          {record.title}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <span className="text-blue-200 text-xs truncate">
                            {record.artist}
                          </span>
                          <span className="text-xs text-blue-100 font-semibold">
                            {record.year}
                          </span>
                        </div>
                      </div>
                      {/* Status indicator */}
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* ANALYZE section - Music taste analytics */}
                <motion.div
                  className="space-y-2 absolute inset-0 px-4 pt-2"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.65, 0.67, 0.78, 0.80], [0, 1, 1, 0]),
                    zIndex: 20
                  }}
                >
                  <p className="text-white/80 text-xs font-medium">Music Taste Analysis</p>
                  
                  {/* Genre distribution pie chart */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-xs font-medium mb-3">Genre Distribution</p>
                    <div className="flex items-center space-x-4">
                      {/* Pie chart */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 42 42">
                          {/* Background circle */}
                          <circle
                            cx="21"
                            cy="21"
                            r="15.915"
                            fill="transparent"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="3"
                          />
                          
                          {/* Genre segments */}
                          {(() => {
                            const genres = [
                              { genre: 'Rock', percentage: 45, color: '#EF4444' },
                              { genre: 'Jazz', percentage: 25, color: '#3B82F6' },
                              { genre: 'Electronic', percentage: 20, color: '#8B5CF6' },
                              { genre: 'Classical', percentage: 10, color: '#10B981' }
                            ];
                            let cumulativePercentage = 0;
                            
                            return genres.map((item, index) => {
                              const strokeDasharray = `${item.percentage} ${100 - item.percentage}`;
                              const strokeDashoffset = 100 - cumulativePercentage;
                              cumulativePercentage += item.percentage;
                              
                              return (
                                <motion.circle
                                  key={item.genre}
                                  cx="21"
                                  cy="21"
                                  r="15.915"
                                  fill="transparent"
                                  stroke={item.color}
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  style={{
                                    strokeDasharray: genreStrokeDasharrayArr[index],
                                    strokeDashoffset
                                  }}
                                />
                              );
                            });
                          })()}
                        </svg>
                      </div>
                      
                      {/* Legend */}
                      <div className="flex-1 space-y-1">
                        {[
                          { genre: 'Rock', percentage: 45, color: '#EF4444' },
                          { genre: 'Jazz', percentage: 25, color: '#3B82F6' },
                          { genre: 'Electronic', percentage: 20, color: '#8B5CF6' },
                          { genre: 'Classical', percentage: 10, color: '#10B981' }
                        ].map((item, index) => (
                          <motion.div 
                            key={item.genre} 
                            className="flex items-center justify-between"
                            style={{
                              opacity: genreLegendOpacityArr[index],
                              x: genreLegendXArr[index]
                            }}
                          >
                            <div className="flex items-center space-x-1">
                              <div 
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-blue-200 text-xs">{item.genre}</span>
                            </div>
                            <span className="text-white text-xs font-medium">{item.percentage}%</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decade analysis */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-xs font-medium mb-3">Era Preference</p>
                    <div className="grid grid-cols-4 gap-1">
                      {[
                        { decade: '70s', height: 60, albums: 12 },
                        { decade: '80s', height: 85, albums: 23 },
                        { decade: '90s', height: 75, albums: 18 },
                        { decade: '00s', height: 40, albums: 8 }
                      ].map((item, index) => (
                        <div key={item.decade} className="text-center">
                          <div className="h-16 flex items-end justify-center mb-1">
                             <motion.div
                               className="w-4 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                               style={{
                                 height: decadeHeightArr[index]
                               }}
                             />
                          </div>
                          <p className="text-blue-200 text-xs">{item.decade}</p>
                          <p className="text-white text-xs font-medium">{item.albums}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Listening mood analysis */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-xs font-medium mb-2">Mood Profile</p>
                    <div className="space-y-1">
                      {[
                        { mood: 'Energetic', value: 78 },
                        { mood: 'Melancholic', value: 45 },
                        { mood: 'Upbeat', value: 62 },
                        { mood: 'Ambient', value: 33 }
                      ].map((item, index) => (
                        <div key={item.mood} className="flex items-center justify-between">
                          <span className="text-blue-200 text-xs">{item.mood}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-12 bg-white/10 rounded-full h-1">
                               <motion.div 
                                 className="bg-gradient-to-r from-vinyl-400 to-vinyl-500 rounded-full h-1"
                                 style={{
                                   width: moodWidthArr[index]
                                 }}
                               />
                            </div>
                            <span className="text-white text-xs w-6">{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* SNAP section - Simple app interface */}
                <motion.div
                  className="space-y-3 relative px-4"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.35, 0.40, 0.48, 0.50], [1, 1, 1, 0]),
                    zIndex: 5
                  }}
                >
                  {/* Main feature area */}
                  <div className="bg-black rounded-lg h-[500px] flex items-center justify-center">
                    {/* Camera Preview Container */}
                    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                      
                      {/* Camera Frame Lines */}
                      <motion.div 
                        className="absolute inset-0 border-2 border-white/40 rounded-lg"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.36, 0.38], [0, 1])
                        }}
                      />
                      <motion.div 
                        className="absolute inset-0 border border-white/25 rounded-lg"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.37, 0.39], [0, 1])
                        }}
                      />
                      
                      {/* Recognizing Status */}
                      <motion.div 
                        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.42, 0.44], [0, 1])
                        }}
                      >
                        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Recognizing...</span>
                        </div>
                      </motion.div>

                      {/* Album Cover Preview in Camera */}
                      <motion.div 
                        className="absolute left-1/2 transform -translate-x-1/2"
                        style={{
                          top: 'calc(50% - 80px)',
                          transform: 'translate(-50%, -50%)',
                          opacity: useTransform(scrollYProgress, [0.40, 0.42], [0, 1])
                        }}
                      >
                        <motion.div 
                          className="w-48 h-48 rounded-lg overflow-hidden shadow-2xl"
                        >
                          {randomSnapAlbum && (
                            <Image 
                              src={randomSnapAlbum} 
                              alt="Random Snap Album"
                              width={192}
                              height={192}
                              className="w-full h-full object-cover will-change-transform"
                              quality={90}
                              priority={true}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            />
                          )}
                        </motion.div>
                      </motion.div>

                      {/* Camera Button */}
                      <motion.div 
                        className="absolute bottom-[74px] left-1/2 transform -translate-x-1/2"
                        style={{
                          opacity: useTransform(scrollYProgress, [0.35, 0.37], [0, 1])
                        }}
                      >
                        <div className="w-16 h-16 rounded-full border-4 border-white bg-white/10 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* TRADE section - Price selection and seller contact */}
                <motion.div
                  className="space-y-2 absolute inset-0 px-4 pt-2"
                  style={{
                    opacity: useTransform(scrollYProgress, [0.80, 0.82, 0.94, 0.96], [0, 1, 1, 0]),
                    zIndex: 30
                  }}
                >
                  <p className="text-white/80 text-xs font-medium">Marketplace</p>
                  
                  {/* Featured album for trade */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                          <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/20 flex-shrink-0 relative">
                        <Image 
                          src="/albums/pink-floyd_dark-side-of-the-moon.webp" 
                          alt="Dark Side of The Moon"
                          fill
                          className="object-cover will-change-transform"
                          sizes="48px"
                          quality={75}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          onError={(e) => {
                            console.warn('Failed to load Dark Side of the Moon image')
                          }}
                        />
                        </div>
                      <div className="flex-1">
                        <h4 className="text-white text-xs font-semibold">Dark Side of The Moon</h4>
                        <p className="text-blue-200 text-xs">Pink Floyd • 1973</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xs font-semibold">Available</p>
                      </div>
                    </div>

                    {/* Price range selection */}
                    <div className="mb-3">
                      <p className="text-white text-xs font-medium mb-2">Select Your Offer</p>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { price: '$25-35', label: 'Good', color: 'bg-blue-500/20 border-blue-400' },
                          { price: '$40-55', label: 'Very Good', color: 'bg-green-500/20 border-green-400' },
                          { price: '$60-80', label: 'Near Mint', color: 'bg-purple-500/20 border-purple-400' }
                        ].map((option, index) => (
                          <motion.div
                            key={option.price}
                            className={`${option.color} border rounded-lg p-2 text-center cursor-pointer transition-all`}
                            style={{
                              opacity: tradePriceOpacityArr[index],
                              y: tradePriceYArr[index]
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <p className="text-white text-xs font-semibold">{option.price}</p>
                            <p className="text-white/70 text-xs">{option.label}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Contact seller button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-vinyl-500 to-vinyl-600 text-white text-xs font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
                      style={{
                        opacity: useTransform(scrollYProgress, [0.86, 0.88], [0, 1]),
                        y: useTransform(scrollYProgress, [0.86, 0.88], [20, 0])
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Contact Seller</span>
                    </motion.button>
                  </div>

                  {/* Other listings */}
                  <div className="space-y-2">
                    <p className="text-white/60 text-xs">More Listings</p>
                    {[
                      { title: 'Abbey Road', artist: 'The Beatles', price: '$45-60', condition: 'VG+', image: '/albums/the-beatles_abbey-road.webp' },
                      { title: 'Rumours', artist: 'Fleetwood Mac', price: '$30-40', condition: 'VG', image: '/albums/fleetwood-mac_rumours.webp' }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="bg-white/5 rounded-lg p-3 flex items-center justify-between"
                        style={{
                          opacity: tradeMoreOpacityArr[index],
                          x: tradeMoreXArr[index]
                        }}
                      >
                                                  <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                            <Image 
                              src={item.image} 
                              alt={item.title}
                              fill
                              className="object-cover will-change-transform"
                              sizes="32px"
                              quality={75}
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                              onError={(e) => {
                                console.warn(`Failed to load marketplace image: ${item.image}`)
                              }}
                            />
                            </div>
                          <div>
                            <p className="text-white text-xs font-medium">{item.title}</p>
                            <p className="text-blue-200 text-xs">{item.artist}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-white text-xs font-semibold">{item.price}</p>
                          <p className="text-white/60 text-xs">{item.condition}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Bottom navigation */}
              <div className="px-4 py-3 border-t border-white/10 relative" style={{ zIndex: 1 }}>
                <div className="flex justify-around">
                  {['Collection', 'Scan', 'Wishlist', 'Profile'].map((item, index) => (
                    <div key={item} className="flex flex-col items-center space-y-1">
                      <div className={`w-5 h-5 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/30'}`} />
                      <span className={`text-xs ${index === 0 ? 'text-white' : 'text-white/60'}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

                {/* SNAP Slogan Component */}
        <SnapSlogan scrollYProgress={scrollYProgress} isKorean={isKorean} />

                {/* COLLECT Slogan Component */}
        <CollectSlogan scrollYProgress={scrollYProgress} isKorean={isKorean} />

        {/* ANALYZE Slogan Component */}
        <AnalyzeSlogan scrollYProgress={scrollYProgress} isKorean={isKorean} />

        {/* TRADE Slogan Component */}
        <TradeSlogan scrollYProgress={scrollYProgress} isKorean={isKorean} />

        {/* Mobile Header Component */}
        <MobileHeader
          scrollYProgress={scrollYProgress}
          isKorean={isKorean}
          setIsKorean={setIsKorean}
          scrollToWaitlist={scrollToWaitlist}
        />

        {/* Footer와 겹치지 않도록 충분한 여백 */}
        <div className="pb-[120px]" />
        {isFooterVisible && (
          <div className="fixed bottom-0 left-0 w-full z-50">
            <Footer
              logo={null}
              brandName="Kolektt"
              socialLinks={[]}
              mainLinks={[
                { href: '/about', label: 'About' },
                { href: 'mailto:objktt@gmail.com', label: 'Contact' }
              ]}
              legalLinks={[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' }
              ]}
              copyright={{
                text: `© ${new Date().getFullYear()} objktt. All rights reserved.`,
                license: 'Kolektt - Experience vinyl like never before with AI'
              }}
            />
          </div>
        )}











      </div>
    </div>
  )
} 