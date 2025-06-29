'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface CollectSloganProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
}

export function CollectSlogan({ scrollYProgress, isKorean }: CollectSloganProps) {
  return (
    <>
      {/* COLLECT - Center aligned */}
      <motion.div
        className="absolute z-40 text-white text-center left-1/2 transform -translate-x-1/2"
        style={{
          top: 'calc(50% - 150px)', // TRADE와 동일한 위치
          y: useTransform(scrollYProgress, (value) => {
            // COLLECT: 50%-65% (15% 구간)
            if (value < 0.50) return '100vh'; // 브라우저 최하단
            if (value < 0.53) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.50) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.62) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.65) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.62) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.50, 0.52, 0.63, 0.65], [0, 1, 1, 0])
        }}
      >
        <div className="text-8xl font-bold">Collect</div>
      </motion.div>

      {/* COLLECT Vinyl Crate - 오른쪽에서 나와서 오른쪽으로 나감 */}
      <motion.div
        className="absolute z-50"
        style={{
          left: '50%',
          top: 'calc(50% + 280px)',
          x: useTransform(scrollYProgress, (value) => {
            // COLLECT 구간: 50%-65%
            if (value < 0.50) return '100vw'; // 화면 오른쪽 밖
            if (value < 0.52) {
              // 오른쪽에서 중앙으로 들어옴 (2% 구간)
              const progress = (value - 0.50) / 0.02;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `${100 - eased * 100}vw`; // 100vw -> 0vw (중앙까지)
            }
            if (value < 0.63) {
              // 중앙에서 멈춤 (11% 구간)
              return '0vw';
            }
            if (value < 0.65) {
              // 오른쪽으로 나감 (2% 구간)
              const progress = (value - 0.63) / 0.02;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `${0 + eased * 100}vw`; // 0vw -> 100vw
            }
            return '100vw'; // 화면 오른쪽 밖
          }),
          y: '-50%',
          opacity: 1,
          display: useTransform(scrollYProgress, (value) => value >= 0.50 && value <= 0.65 ? 'block' : 'none')
        }}
      >
        <Image 
          src="/assets/cat_collect_01.png" 
          alt="Cat with vinyl collection crate for COLLECT feature" 
          width={576}
          height={576}
          className="object-contain drop-shadow-2xl will-change-transform"
          quality={90}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
      </motion.div>

      {/* COLLECT Subtext - Center aligned */}
      <motion.div
        className="absolute z-40 text-white text-center left-1/2 transform -translate-x-1/2"
        style={{
          top: 'calc(50% - 90px)', // TRADE 서브텍스트와 동일한 위치
          y: useTransform(scrollYProgress, (value) => {
            // COLLECT 서브텍스트: 51%-66% (15% 구간)
            if (value < 0.51) return '100vh'; // 브라우저 최하단
            if (value < 0.54) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.51) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.63) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.66) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.63) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.51, 0.53, 0.64, 0.66], [0, 1, 1, 0])
        }}
      >
        <div className="text-2xl font-medium">
          {isKorean ? (
            <>
              모든 스캔이 컬렉션이 됩니다.<br />디지털 라이브러리를 구축하세요.
            </>
          ) : (
            <>
          Every scan becomes your collection.<br />Build your digital library.
            </>
          )}
        </div>
        <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
          {isKorean ? (
            <>
              스캔한 모든 앨범이 디지털 컬렉션의 일부가 됩니다.<br />
              전체 카탈로그를 손끝에서 탐색하고 정리하세요.<br />
              물리적 레코드를 디지털 발견으로 바꾸세요.<br />
              언제 어디서나 당신의 음악 여행을 추적하세요.
            </>
          ) : (
            <>
          Every scanned album becomes part of your digital collection.<br />
          Explore and organize your complete catalog at your fingertips.<br />
          Transform physical records into digital discoveries.<br />
          Track your musical journey wherever you are.
            </>
          )}
        </div>
      </motion.div>
    </>
  )
} 