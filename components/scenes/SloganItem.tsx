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
        <div className="relative w-[300px]">
          <div className="absolute inset-0 bg-black/40 rounded-3xl -z-10" />
          <div className="backdrop-blur-md bg-black/20 border border-white/20 rounded-3xl shadow-2xl px-8 py-8 text-white w-full"
               style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)'}}>
            <div className="text-5xl font-bold mb-6 drop-shadow-lg leading-tight">Snap</div>
            <div className="text-lg font-medium mb-2 leading-tight">
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
            <div className="text-xs font-normal mt-2 leading-snug opacity-90">
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
          </div>
        </div>
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

      {/* SNAP Cat Image - 왼쪽에서 중앙으로, 왼쪽으로 나감 */}
      <motion.div
        className="absolute z-50"
        style={{
          left: 'calc(20% + 100px)',
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
          width={300}
          height={300}
          className="object-contain drop-shadow-2xl will-change-transform scale-x-[-1]"
          quality={90}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
      </motion.div>
    </>
  )
} 