'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface TradeSloganProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
}

export function TradeSlogan({ scrollYProgress, isKorean }: TradeSloganProps) {
  return (
    <>
      {/* TRADE - Center aligned */}
      <motion.div
        className="absolute z-40 text-white text-center left-1/2 transform -translate-x-1/2"
        style={{
          top: 'calc(50% - 150px)', // 모바일에서 아이폰 위로 이동
          y: useTransform(scrollYProgress, (value) => {
            // TRADE: 80%-95% (15% 구간)
            if (value < 0.80) return '100vh'; // 브라우저 최하단
            if (value < 0.83) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.80) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.92) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.95) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.92) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.80, 0.82, 0.93, 0.95], [0, 1, 1, 0])
        }}
      >
        <div className="text-8xl font-bold">Trade</div>
      </motion.div>

      {/* TRADE Subtext - Center aligned */}
      <motion.div
        className="absolute z-40 text-white text-center left-1/2 transform -translate-x-1/2"
        style={{
          top: 'calc(50% - 90px)', // 모바일에서 슬로건 아래, 아이폰 위로 이동
          y: useTransform(scrollYProgress, (value) => {
            // TRADE 서브텍스트: 81%-96% (15% 구간)
            if (value < 0.81) return '100vh'; // 브라우저 최하단
            if (value < 0.84) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.81) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.93) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.96) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.93) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.81, 0.83, 0.94, 0.96], [0, 1, 1, 0])
        }}
      >
        <div className="text-2xl font-medium">
          {isKorean ? '당신의 컬렉션을 수익으로 바꾸세요.' : 'Turn your collection into profit.'}
        </div>
        <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
          {isKorean ? (
            <>
              마켓플레이스를 통해 전 세계 컬렉터들과 연결하세요.<br />
              상태와 희귀성에 따른 실시간 가치 평가를 받아보세요.<br />
              다른 애호가들과 거래하고, 판매하고, 희귀한 발견을 해보세요.<br />
              당신의 열정을 번창하는 바이닐 비즈니스로 변화시키세요.
            </>
          ) : (
            <>
          Connect with collectors worldwide through our marketplace.<br />
          Get real-time valuations based on condition and rarity.<br />
          Trade, sell, or discover rare finds from other enthusiasts.<br />
          Transform your passion into a thriving vinyl business.
            </>
          )}
        </div>
      </motion.div>

      {/* TRADE Cat - 오른쪽에서 나와서 오른쪽으로 나감 (COLLECT와 동일) */}
      <motion.div
        className="absolute z-50"
        style={{
          left: '50%',
          top: 'calc(50% + 280px)',
          x: useTransform(scrollYProgress, (value) => {
            // TRADE 구간: 80%-95%
            if (value < 0.80) return '100vw'; // 화면 오른쪽 밖
            if (value < 0.82) {
              // 오른쪽에서 중앙으로 들어옴 (2% 구간)
              const progress = (value - 0.80) / 0.02;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `${100 - eased * 100}vw`; // 100vw -> 0vw (중앙까지)
            }
            if (value < 0.93) {
              // 중앙에서 멈춤 (11% 구간)
              return '0vw';
            }
            if (value < 0.95) {
              // 오른쪽으로 나감 (2% 구간)
              const progress = (value - 0.93) / 0.02;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `${0 + eased * 100}vw`; // 0vw -> 100vw
            }
            return '100vw'; // 화면 오른쪽 밖
          }),
          y: '-50%',
          opacity: 1,
          display: useTransform(scrollYProgress, (value) => value >= 0.80 && value <= 0.95 ? 'block' : 'none')
        }}
      >
        <Image 
          src="/assets/cat_trade_01.png" 
          alt="Cat with trading interface for TRADE feature" 
          width={576}
          height={576}
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