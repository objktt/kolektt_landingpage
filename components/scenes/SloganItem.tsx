'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import Image from 'next/image'

interface SnapSloganProps {
  scrollYProgress: MotionValue<number>
  isKorean: boolean
}

export function SnapSlogan({ scrollYProgress, isKorean }: SnapSloganProps) {
  return (
    <>
      {/* SNAP - Left aligned */}
      <motion.div
        className="absolute z-40 text-white text-left left-[calc(50%-200px)]"
        style={{
          top: 'calc(50% - 200px)', // 위로 50px 이동
          y: useTransform(scrollYProgress, (value) => {
            // SNAP: 35%-50% (15% 구간)
            if (value < 0.35) return '100vh'; // 브라우저 최하단
            if (value < 0.38) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.35) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.47) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.50) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.47) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.35, 0.37, 0.48, 0.50], [0, 1, 1, 0])
        }}
      >
        <div className="text-8xl font-bold">Snap</div>
      </motion.div>

      {/* SNAP 원형 도형 - 오른쪽에서 중앙으로, 왼쪽으로 나감 */}
      <motion.div
        className="absolute z-35"
        style={{
          left: '50%',
          top: '50%',
          transform: useTransform(scrollYProgress, (value) => {
            // X축 이동 계산
            let xPos = '0px';
            if (value < 0.38) {
              xPos = '100vw'; // 화면 오른쪽 밖
            } else if (value < 0.40) {
              // 오른쪽에서 중앙으로 들어옴 (2% 구간)
              const progress = (value - 0.38) / 0.02;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              xPos = `${100 - eased * 100}vw`; // 100vw -> 0vw (중앙)
            } else if (value < 0.47) {
              // 중앙에 멈춤 (7% 구간 - SNAP과 동일하게 오래 멈춤)
              xPos = '0px';
            } else if (value < 0.50) {
              // 왼쪽으로 나감 (3% 구간 - SNAP이 올라가는 시간과 동일)
              const progress = (value - 0.47) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              xPos = `${0 - eased * 100}vw`; // 0vw -> -100vw
            } else {
              xPos = '-100vw'; // 화면 왼쪽 밖
            }

            // 완전한 중앙 정렬: translate(-50%, -50%) + 위치 이동 (회전 제거)
            return `translate(calc(-50% + ${xPos}), -50%)`;
          }),
          opacity: 1,
          display: 'none'
        }}
      >
      </motion.div>

      {/* SNAP Blur Panel - appears above iPhone during SNAP section */}
      <motion.div
        className="absolute z-[30]"
        style={{
          left: '50%',
          top: 'calc(50% - 300px)',
          x: '-50%',
          opacity: useTransform(scrollYProgress, [0.35, 0.37, 0.48, 0.50], [0, 1, 1, 0]),
          scale: useTransform(scrollYProgress, [0.35, 0.37, 0.48, 0.50], [0.9, 1, 1, 0.9])
        }}
      >
        <div className="bg-black/20 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl w-[300px] h-[300px]">
        </div>
      </motion.div>

      {/* SNAP Cat Image - 왼쪽에서 중앙으로, 왼쪽으로 나감 */}
      <motion.div
        className="absolute z-50"
        style={{
          left: '20%',
          top: 'calc(50% + 190px)',
          x: useTransform(scrollYProgress, (value) => {
            // SNAP 구간: 35%-50%
            if (value < 0.35) return '-100vw'; // 화면 왼쪽 밖
            if (value < 0.37) {
              // 왼쪽에서 중앙으로 들어옴 (2% 구간)
              const progress = (value - 0.35) / 0.02;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `${-100 + eased * 100}vw`; // -100vw -> 0vw (중앙까지)
            }
            if (value < 0.48) {
              // 중앙에서 멈춤 (11% 구간)
              return '0vw';
            }
            if (value < 0.50) {
              // 왼쪽으로 나감 (2% 구간)
              const progress = (value - 0.48) / 0.02;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `${0 - eased * 100}vw`; // 0vw -> -100vw
            }
            return '-100vw'; // 화면 왼쪽 밖
          }),
          y: '-50%',
          opacity: 1,
          display: useTransform(scrollYProgress, (value) => value >= 0.35 && value <= 0.50 ? 'block' : 'none')
        }}
      >
        <Image 
          src="/assets/cat_snap_01.png" 
          alt="Cat with camera for SNAP feature" 
          width={600}
          height={600}
          className="object-contain drop-shadow-2xl will-change-transform"
          quality={90}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
      </motion.div>

      {/* SNAP Subtext - Left aligned */}
      <motion.div
        className="absolute z-40 text-white text-left left-[calc(50%-200px)]"
        style={{
          top: 'calc(50% - 90px)', // TRADE 서브텍스트와 동일한 위치
          y: useTransform(scrollYProgress, (value) => {
            // SNAP 서브텍스트: 36%-51% (15% 구간)
            if (value < 0.36) return '100vh'; // 브라우저 최하단
            if (value < 0.39) {
              // 1단계: 하단에서 화면 중앙으로 올라옴 (3% 구간)
              const progress = (value - 0.36) / 0.03;
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              return `calc(${100 - eased * 100}vh)`; // 100vh -> 0%
            }
            if (value < 0.48) {
              // 2단계: 화면 중앙에서 멈춤 (9% 구간)
              return '0%';
            }
            if (value < 0.51) {
              // 3단계: 상단으로 올라감 (3% 구간)
              const progress = (value - 0.48) / 0.03;
              const eased = Math.pow(progress, 2); // ease-in quadratic
              return `calc(0% - ${eased * 100}vh)`; // 0% -> -100vh
            }
            return '-100vh'; // 브라우저 최상단
          }),
          opacity: useTransform(scrollYProgress, [0.36, 0.38, 0.49, 0.51], [0, 1, 1, 0])
        }}
      >
        <div className="text-2xl font-medium">
          {isKorean ? (
            <>
              바이닐을 촬영하세요.<br />AI가 인식합니다.
            </>
          ) : (
            <>
          Capture your vinyl.<br />Let AI recognize it.
            </>
          )}
        </div>
        <div className="text-base font-normal mt-4 leading-relaxed opacity-80">
          {isKorean ? (
            <>
              앨범 재킷에 카메라를 향하기만 하면 됩니다.<br />
              한 번의 스냅으로 충분합니다.<br />
              AI가 앨범, 아티스트, 릴리스를 즉시 인식합니다 — 바코드나 타이핑 불필요.<br />
              커버를 촬영하는 순간부터 컬렉션 구축을 시작하세요.
            </>
          ) : (
            <>
          Just point your camera at the album jacket.<br />
          One snap is all it takes.<br />
          Our AI instantly recognizes the album, artist, and release — no barcodes, no typing.<br />
          Start building your collection the moment you capture the cover.
            </>
          )}
        </div>
      </motion.div>
    </>
  )
} 