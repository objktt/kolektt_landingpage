'use client'

import { motion, useTransform, MotionValue, useMotionValueEvent } from 'framer-motion'
import { memo, useState, useRef, useEffect } from 'react'
import AlbumCover from './AlbumCover'

interface VinylRecordProps {
  record: {
    id: number
    title: string
    artist: string
    color: string
    x: number
    y: number
    rotation: number
  }
  coverImage: string | undefined
  mergeProgress: MotionValue<number>
  scrollYProgress: MotionValue<number>
  randomTopIndex: number
  setMergeProgress?: (v: number) => void
  forceToCenter?: boolean
  setForceToCenter?: (v: boolean) => void
}

const VinylRecord = memo(({ 
  record, 
  coverImage, 
  mergeProgress, 
  scrollYProgress, 
  randomTopIndex,
  setMergeProgress,
  forceToCenter,
  setForceToCenter
}: VinylRecordProps) => {
  const recordX = useTransform(
    mergeProgress,
    [0, 1],
    [`${record.x}%`, '50%']
  )
  
  const recordY = useTransform(
    mergeProgress,
    [0, 1],
    [`${record.y}%`, '50%']
  )
  
  const recordRotation = useTransform(
    mergeProgress,
    [0, 1],
    [record.rotation, 0]
  )
  
  const recordScale = useTransform(
    mergeProgress,
    [0, 1],
    [1, 1]
  )
  
  const recordOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.9, 1],
    [1, 1, 0, 0]
  )

  // 완전히 모인 후에 맨 위 이미지만 남기고 나머지는 사라지게
  const mergeOpacity = useTransform(
    mergeProgress,
    [0, 0.99, 1],
    [1, 1, record.id === randomTopIndex ? 1 : 0]
  )

  // mergeProgress가 1이 되는 순간을 state로 관리
  const [isMerged, setIsMerged] = useState(false);
  useMotionValueEvent(mergeProgress, 'change', (v) => {
    setIsMerged(v === 1);
  });

  // 드래그 상태 관리
  const [isDragging, setIsDragging] = useState(false);
  // 드래그로 merge 트리거된 앨범만 중앙 이동
  const [dragEndPos, setDragEndPos] = useState<{x: number, y: number} | null>(null);
  const motionDivRef = useRef<HTMLDivElement>(null);

  // mergeProgress가 0보다 크면(모이기 시작하면) 맨 위 앨범은 항상 원본만 보이게
  const [isMergingOrMerged, setIsMergingOrMerged] = useState(false);
  useMotionValueEvent(mergeProgress, 'change', (v) => {
    setIsMergingOrMerged(v > 0);
  });

  // 드래그 종료 시 중앙 판별 및 merge 트리거
  // 드롭 위치 기억, merge 트리거 시 해당 앨범만 중앙 이동
  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const dx = Math.abs(info.point.x - centerX);
    const dy = Math.abs(info.point.y - centerY);
    const hasParent = motionDivRef.current && motionDivRef.current.parentElement;
    if (setMergeProgress) {
      if (dx < 100 && dy < 100 && hasParent) {
        // 부모 기준 좌표로 변환
        const parentRect = motionDivRef.current.parentElement.getBoundingClientRect();
        const localX = info.point.x - parentRect.left;
        const localY = info.point.y - parentRect.top;
        if (setDragEndPos) setDragEndPos({ x: localX, y: localY });
        if (setForceToCenter) setForceToCenter(true);
        setMergeProgress?.(1);
      } else {
        // 중앙 근처가 아니면 원래 위치로 복귀
        if (setForceToCenter) setForceToCenter(false);
        if (setDragEndPos) setDragEndPos(null);
        setMergeProgress?.(0);
      }
    }
  };

  // merge가 끝나면 forceToCenter 해제
  useEffect(() => {
    if (forceToCenter && mergeProgress.get() === 1 && setForceToCenter) {
      const timeout = setTimeout(() => setForceToCenter(false), 600); // 애니메이션 후 해제
      return () => clearTimeout(timeout);
    }
  }, [forceToCenter, mergeProgress, setForceToCenter]);

  // 드롭된 앨범만 드롭 위치에서 중앙으로 이동
  let left = undefined;
  let top = undefined;
  let x = '-50%';
  let y = '-50%';
  let animate = {};
  if (forceToCenter && dragEndPos) {
    left = dragEndPos.x + 'px';
    top = dragEndPos.y + 'px';
    x = '';
    y = '';
    animate = {
      left: '50%',
      top: '50%',
      x: '-50%',
      y: '-50%',
      transition: { duration: 0.6, ease: 'easeInOut' }
    };
  }

  return (
    <motion.div
      ref={motionDivRef}
      className="absolute w-52 h-52 md:w-64 md:h-64 rounded-lg cursor-pointer vinyl-animation z-[50]"
      style={{
        left: left ?? recordX,
        top: top ?? recordY,
        x,
        y,
        rotate: recordRotation,
        scale: recordScale,
        opacity: useTransform([recordOpacity, mergeOpacity], ([scroll, merge]) => (scroll as number) * (merge as number)),
        backgroundColor: record.color,
        zIndex: record.id === randomTopIndex ? 30 : 20 - record.id,
        boxShadow: 'none',
      }}
      initial={{ 
        scale: 0, 
        opacity: 0,
      }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        boxShadow: 'none',
        ...animate
      }}
      transition={{ 
        delay: record.id * 0.1, 
        duration: 0.8,
        type: "spring",
        stiffness: 1200,
        damping: 60
      }}
    >
      {/* Album Cover Image */}
      {coverImage ? (
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          {/* 블랙 오버레이: AlbumCover보다 먼저 렌더링, z-10 */}
          <div className="absolute inset-0 rounded-lg bg-black/40 z-10 pointer-events-none" />
          {/* 원본 이미지: 항상 z-50 */}
          <AlbumCover
            src={coverImage}
            alt={`${record.title} by ${record.artist}`}
            className="w-full h-full z-[50]"
            sizes="(min-width: 768px) 256px, 208px"
            priority={true}
            loading="eager"
          />
        </div>
      ) : (
        <>
          {/* Default vinyl record grooves */}
          <div className="absolute inset-4 bg-black rounded-full opacity-80 transition-all duration-75 hover:shadow-inner">
            <div className="absolute inset-8 border-4 border-gray-600 rounded-full opacity-60 transition-all duration-75" />
            <div className="absolute inset-12 border-2 border-gray-500 rounded-full opacity-40 transition-all duration-75" />
            <div className="absolute inset-16 border border-gray-400 rounded-full opacity-30 transition-all duration-75" />
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75">
              <div className="absolute inset-0.5 bg-gray-400 rounded-full opacity-60" />
            </div>
          </div>
        </>
      )}
      
      {/* Album cover shine */}
      <div className="absolute inset-0 bg-white/10 rounded-lg transition-all duration-75 hover:bg-white/10" />
    </motion.div>
  )
})

VinylRecord.displayName = 'VinylRecord'

export default VinylRecord 