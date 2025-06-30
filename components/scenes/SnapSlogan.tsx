'use client'

import React from 'react'
import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface SnapSloganProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
}

const SnapSlogan: React.FC<SnapSloganProps> = ({ scrollYProgress, isKorean }) => (
  <>
    {/* SNAP - 슬로건, 서브헤드, 설명글을 하나의 컨테이너로 래핑 */}
    <motion.div
      className="absolute z-40 left-[calc(50%-200px)]"
      style={{
        top: 'calc(50% - 200px)',
        y: useTransform(scrollYProgress, (value) => {
          // SNAP: 35%-50% (15% 구간)
          if (value < 0.35) return '100vh';
          if (value < 0.38) {
            const progress = (value - 0.35) / 0.03;
            const eased = 1 - Math.pow(1 - progress, 3);
            return `calc(${100 - eased * 100}vh)`;
          }
          if (value < 0.47) {
            return '0%';
          }
          if (value < 0.50) {
            const progress = (value - 0.47) / 0.03;
            const eased = Math.pow(progress, 2);
            return `calc(0% - ${eased * 100}vh)`;
          }
          return '-100vh';
        }),
        opacity: useTransform(scrollYProgress, [0.35, 0.37, 0.48, 0.50], [0, 1, 1, 0])
      }}
      aria-label={isKorean ? 'SNAP 슬로건 및 설명' : 'SNAP slogan and description'}
    >
      <div className="relative w-[250px] left-[100px]">
        <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10" />
        <div className="border border-white/0 rounded-3xl shadow-2xl px-8 py-8 text-white w-full text-right"
             style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
          <div className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">SNAP</div>
          <div className="text-lg font-medium mb-2 leading-tight">
            {isKorean ? (
              <>AI로 레코드를 스캔하세요.</>
            ) : (
              <>Scan your records with AI.</>
            )}
          </div>
          <div className="text-xs font-normal mt-2 leading-snug opacity-90">
            {isKorean ? (
              <>
                스마트폰 카메라로 레코드 커버를 촬영하면<br />
                AI가 자동으로 앨범 정보를 인식합니다.<br />
                수동 입력 없이 손쉽게 컬렉션을 쌓아보세요.<br />
                스냅 한 번으로 나만의 바이닐 라이브러리를 만드세요.
              </>
            ) : (
              <>
                Just snap a photo of your record cover.<br />
                AI will recognize album info automatically.<br />
                Build your collection effortlessly—no manual entry.<br />
                Create your own vinyl library with a single snap.
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>

    {/* SNAP Cat - 오른쪽에서 나와서 오른쪽으로 나감 (TRADE와 동일) */}
    <motion.div
      className="absolute z-50"
      style={{
        left: 'calc(50% - 50px)',
        top: 'calc(50% + 280px)',
        width: 330,
        height: 330,
        x: useTransform(scrollYProgress, (value) => {
          // SNAP 구간: 35%-50%
          if (value < 0.35) return '100vw';
          if (value < 0.37) {
            const progress = (value - 0.35) / 0.02;
            const eased = 1 - Math.pow(1 - progress, 3);
            return `${100 - eased * 100}vw`;
          }
          if (value < 0.48) {
            return '0vw';
          }
          if (value < 0.50) {
            const progress = (value - 0.48) / 0.02;
            const eased = Math.pow(progress, 2);
            return `${0 + eased * 100}vw`;
          }
          return '100vw';
        }),
        y: '-50%',
        opacity: 1,
        display: useTransform(scrollYProgress, (value) => value >= 0.35 && value <= 0.50 ? 'block' : 'none')
      }}
    >
      <Image 
        src="/assets/cat_snap_01.png" 
        alt="Cat with camera for SNAP feature" 
        width={264}
        height={264}
        className="object-contain drop-shadow-2xl will-change-transform"
        quality={90}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
      />
    </motion.div>
  </>
)

export default SnapSlogan 