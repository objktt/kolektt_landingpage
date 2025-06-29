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
      {/* ANALYZE - Center aligned */}
      <motion.div
        className="absolute z-40 text-white text-center left-1/2 transform -translate-x-1/2"
        style={{
          top: 'calc(50% - 150px)', // TRADE와 동일한 위치
          y: useTransform(scrollYProgress, (value) => {
            // ANALYZE: 65%-80% (15% 구간)
            if (value < 0.65) return '100vh'; // 브라우저 최하단
            if (value < 0.68) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.65) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.77) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.80) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.77) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.65, 0.67, 0.78, 0.80], [0, 1, 1, 0])
        }}
      >
        <div className="text-8xl font-bold">Analyze</div>
      </motion.div>

      {/* ANALYZE Cat - 왼쪽에서 나와서 왼쪽으로 나감 */}
      <motion.div
        className="absolute z-50"
        style={{
          left: '20%',
          top: 'calc(50% + 280px)',
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
          width={576}
          height={576}
          className="object-contain drop-shadow-2xl will-change-transform"
          quality={90}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
      </motion.div>

      {/* ANALYZE Subtext - Center aligned */}
      <motion.div
        className="absolute z-40 text-white text-center left-1/2 transform -translate-x-1/2"
        style={{
          top: 'calc(50% - 90px)', // TRADE 서브텍스트와 동일한 위치
          y: useTransform(scrollYProgress, (value) => {
            // ANALYZE 서브텍스트: 66%-81% (15% 구간)
            if (value < 0.66) return '100vh'; // 브라우저 최하단
            if (value < 0.69) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.66) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.78) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.81) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.78) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.66, 0.68, 0.79, 0.81], [0, 1, 1, 0])
        }}
      >
        <div className="text-2xl font-medium">
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
        <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
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
      </motion.div>
    </>
  )
} 