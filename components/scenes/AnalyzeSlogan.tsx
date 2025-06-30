'use client'

import React from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface AnalyzeSloganProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
}

const AnalyzeSlogan: React.FC<AnalyzeSloganProps> = ({ scrollYProgress, isKorean }) => (
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
      <div className="relative w-[300px] left-[100px]">
        <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10" />
        <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-3xl shadow-2xl px-8 py-8 text-white w-full text-right"
             style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
          <div className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">Analyze</div>
          <div className="text-lg font-medium mb-2 leading-tight">
            {isKorean ? (
              <>컬렉션을 데이터로 분석하세요.</>
            ) : (
              <>Analyze your collection with data.</>
            )}
          </div>
          <div className="text-xs font-normal mt-2 leading-snug opacity-90">
            {isKorean ? (
              <>
                나만의 컬렉션을 다양한 시각화로 확인하세요.<br />
                희귀도, 장르, 발매 연도 등 다양한 기준으로 분석합니다.<br />
                트렌드와 인사이트를 한눈에 파악하세요.<br />
                데이터 기반으로 더 스마트하게 컬렉팅하세요.
              </>
            ) : (
              <>
                Visualize your collection in various ways.<br />
                Analyze by rarity, genre, release year, and more.<br />
                Instantly spot trends and insights.<br />
                Collect smarter with data-driven decisions.
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>

    {/* ANALYZE Cat - 오른쪽에서 나와서 오른쪽으로 나감 (TRADE와 동일) */}
    <motion.div
      className="absolute z-50"
      style={{
        left: 'calc(50% - 50px)',
        top: 'calc(50% + 280px)',
        width: 330,
        height: 330,
        x: useTransform(scrollYProgress, (value) => {
          // ANALYZE 구간: 65%-80%
          if (value < 0.65) return '100vw';
          if (value < 0.67) {
            const progress = (value - 0.65) / 0.02;
            const eased = 1 - Math.pow(1 - progress, 3);
            return `${100 - eased * 100}vw`;
          }
          if (value < 0.78) {
            return '0vw';
          }
          if (value < 0.80) {
            const progress = (value - 0.78) / 0.02;
            const eased = Math.pow(progress, 2);
            return `${0 + eased * 100}vw`;
          }
          return '100vw';
        }),
        y: '-50%',
        opacity: 1,
        display: useTransform(scrollYProgress, (value) => value >= 0.65 && value <= 0.80 ? 'block' : 'none')
      }}
    >
      <Image 
        src="/assets/cat_analyze_02.png" 
        alt="Cat with analytics for ANALYZE feature" 
        width={330}
        height={330}
        className="object-contain drop-shadow-2xl will-change-transform bg-transparent"
        quality={90}
        loading="lazy"
      />
    </motion.div>
  </>
)

export default AnalyzeSlogan 