'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface AnalyzeSloganProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
}

export function AnalyzeSlogan({ scrollYProgress, isKorean }: AnalyzeSloganProps) {
  return (
    <>
      {/* ANALYZE - 슬로건, 서브헤드, 설명글을 하나의 컨테이너로 래핑 */}
      <motion.div
        className="absolute z-40 left-[calc(50%-200px)]"
        style={{
          top: 'calc(50% - 200px)',
          y: useTransform(scrollYProgress, (value) => {
            // ANALYZE: 65%-80% (15% 구간)
            if (value < 0.65) return '100vh';
            if (value < 0.68) {
              const progress = (value - 0.65) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3);
              return `calc(${100 - eased * 100}vh)`;
            }
            if (value < 0.77) {
              return '0%';
            }
            if (value < 0.80) {
              const progress = (value - 0.77) / 0.03;
              const eased = Math.pow(progress, 2);
              return `calc(0% - ${eased * 100}vh)`;
            }
            return '-100vh';
          }),
          opacity: useTransform(scrollYProgress, [0.65, 0.67, 0.78, 0.80], [0, 1, 1, 0])
        }}
        aria-label={isKorean ? 'ANALYZE 슬로건 및 설명' : 'ANALYZE slogan and description'}
      >
        <div className="relative w-[300px]">
          <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10" />
          <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-3xl shadow-2xl px-8 py-8 text-white w-full text-left"
               style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
            <div className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">Analyze</div>
            <div className="text-lg font-medium mb-2 leading-tight">
              {isKorean ? (
                <>
                  당신의 취향을 이해하세요.<br />정말 맞는 음악을 찾아보세요.
                </>
              ) : (
                <>
                  Understand your taste.<br />Get music that really fits you.
                </>
              )}
            </div>
            <div className="text-xs font-normal mt-2 leading-snug opacity-90">
              {isKorean ? (
                <>
                  AI가 당신의 컬렉션 패턴과 청취 습관을 분석합니다.<br />
                  당신만의 스타일에 맞는 새로운 아티스트를 발견하세요.<br />
                  당신의 바이닐 DNA를 기반으로 개인화된 추천을 받아보세요.<br />
                  당신의 컬렉션을 음악 여행의 지도로 만들어보세요.
                </>
              ) : (
                <>
                  Our AI analyzes your collection patterns and listening habits.<br />
                  Discover new artists that match your unique style.<br />
                  Get personalized recommendations based on your vinyl DNA.<br />
                  Turn your collection into a map of your musical journey.
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ANALYZE Cat - 왼쪽에서 나와서 왼쪽으로 나감 */}
      <motion.div
        className="absolute z-50"
        style={{
          left: 'calc(20% + 100px)',
          top: 'calc(50% + 230px)',
          x: useTransform(scrollYProgress, (value) => {
            // ANALYZE 구간: 65%-80%
            if (value < 0.65) return '-100vw'; // 화면 왼쪽 밖
            if (value < 0.67) {
              // 왼쪽에서 중앙으로 들어옴 (2% 구간)
              const progress = (value - 0.65) / 0.02;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `${-100 + eased * 100}vw`; // -100vw -> 0vw (중앙까지)
            }
            if (value < 0.78) {
              // 중앙에서 멈춤 (11% 구간)
              return '0vw';
            }
            if (value < 0.80) {
              // 왼쪽으로 나감 (2% 구간)
              const progress = (value - 0.78) / 0.02;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `${0 - eased * 100}vw`; // 0vw -> -100vw
            }
            return '-100vw'; // 화면 왼쪽 밖
          }),
          y: '-50%',
          opacity: 1,
          display: useTransform(scrollYProgress, (value) => value >= 0.65 && value <= 0.80 ? 'block' : 'none')
        }}
      >
        <Image 
          src="/assets/cat.png" 
          alt="Cat with analytics for ANALYZE feature" 
          width={320}
          height={320}
          className="object-contain drop-shadow-2xl will-change-transform"
          quality={90}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
      </motion.div>
    </>
  )
} 