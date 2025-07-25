'use client'

import React from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface CollectSloganProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
}

const CollectSlogan: React.FC<CollectSloganProps> = ({ scrollYProgress, isKorean }) => (
  <>
    {/* COLLECT - 슬로건, 서브헤드, 설명글을 하나의 컨테이너로 래핑 */}
    <motion.div
      className="absolute z-40 left-[calc(50%-200px)]"
      style={{
        top: 'calc(50% - 200px)',
        y: useTransform(scrollYProgress, (value) => {
          // COLLECT: 50%-65% (15% 구간)
          if (value < 0.50) return '100vh';
          if (value < 0.53) {
            const progress = (value - 0.50) / 0.03;
            const eased = 1 - Math.pow(1 - progress, 3);
            return `calc(${100 - eased * 100}vh)`;
          }
          if (value < 0.62) {
            return '0%';
          }
          if (value < 0.65) {
            const progress = (value - 0.62) / 0.03;
            const eased = Math.pow(progress, 2);
            return `calc(0% - ${eased * 100}vh)`;
          }
          return '-100vh';
        }),
        opacity: useTransform(scrollYProgress, [0.50, 0.52, 0.63, 0.65], [0, 1, 1, 0])
      }}
      aria-label={isKorean ? 'COLLECT 슬로건 및 설명' : 'COLLECT slogan and description'}
    >
      <div className="relative w-[300px] left-[100px]">
        <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10" />
        <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-3xl shadow-2xl px-8 py-8 text-white w-full text-right"
             style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
          <div className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">Collect</div>
          <div className="text-lg font-medium mb-2 leading-tight">
            {isKorean ? (
              <>모든 스캔이 컬렉션이 됩니다.</>
            ) : (
              <>Every scan becomes your collection.</>
            )}
          </div>
          <div className="text-xs font-normal mt-2 leading-snug opacity-90">
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
        </div>
      </div>
    </motion.div>

    {/* COLLECT Cat - 오른쪽에서 나와서 오른쪽으로 나감 (TRADE와 동일) */}
    <motion.div
      className="absolute z-50"
      style={{
        left: 'calc(50% - 50px)',
        top: 'calc(50% + 280px)',
        width: 330,
        height: 330,
        x: useTransform(scrollYProgress, (value) => {
          // COLLECT 구간: 50%-65%
          if (value < 0.50) return '100vw';
          if (value < 0.52) {
            const progress = (value - 0.50) / 0.02;
            const eased = 1 - Math.pow(1 - progress, 3);
            return `${100 - eased * 100}vw`;
          }
          if (value < 0.63) {
            return '0vw';
          }
          if (value < 0.65) {
            const progress = (value - 0.63) / 0.02;
            const eased = Math.pow(progress, 2);
            return `${0 + eased * 100}vw`;
          }
          return '100vw';
        }),
        y: '-50%',
        opacity: 1,
        display: useTransform(scrollYProgress, (value) => value >= 0.50 && value <= 0.65 ? 'block' : 'none')
      }}
    >
      <Image 
        src="/assets/cat_collect_01.png" 
        alt="Cat with vinyl collection crate for COLLECT feature" 
        width={330}
        height={330}
        className="object-contain drop-shadow-2xl will-change-transform bg-transparent"
        quality={90}
        loading="lazy"
      />
    </motion.div>
  </>
)

export default CollectSlogan 