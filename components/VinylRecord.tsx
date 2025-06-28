'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'
import { memo } from 'react'
import Image from 'next/image'

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
  shouldBlur: boolean
  randomTopIndex: number
}

const VinylRecord = memo(({ 
  record, 
  coverImage, 
  mergeProgress, 
  scrollYProgress, 
  shouldBlur, 
  randomTopIndex 
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

  return (
    <motion.div
      className="absolute w-52 h-52 md:w-64 md:h-64 rounded-lg cursor-pointer vinyl-animation"
      style={{
        left: recordX,
        top: recordY,
        x: '-50%',
        y: '-50%',
        rotate: recordRotation,
        scale: recordScale,
        opacity: recordOpacity,
        backgroundColor: record.color,
        zIndex: record.id === randomTopIndex ? 30 : 20 - record.id,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transformStyle: 'preserve-3d'
      }}
      initial={{ 
        scale: 0, 
        opacity: 0,
        filter: 'blur(4px)'
      }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        filter: shouldBlur ? 'blur(4px)' : 'blur(0px)'
      }}
      transition={{ delay: record.id * 0.1, duration: 0.8 }}
      whileHover={{
        scale: 1.1,
        rotateX: 15,
        rotateY: 10,
        z: 50,
        zIndex: 50,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        filter: 'blur(0px)',
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20
        }
      }}
      whileTap={{
        scale: 0.95,
        rotateX: 5,
        rotateY: 5
      }}
    >
      {/* Album Cover Image */}
      {coverImage ? (
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Image 
            src={coverImage} 
            alt={`${record.title} by ${record.artist}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 256px"
            priority={record.id < 5}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
      ) : (
        <>
          {/* Default vinyl record grooves */}
          <div className="absolute inset-4 bg-black rounded-full opacity-80 transition-all duration-150 hover:shadow-inner">
            <div className="absolute inset-8 border-4 border-gray-600 rounded-full opacity-60 transition-all duration-150" />
            <div className="absolute inset-12 border-2 border-gray-500 rounded-full opacity-40 transition-all duration-150" />
            <div className="absolute inset-16 border border-gray-400 rounded-full opacity-30 transition-all duration-150" />
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150">
              <div className="absolute inset-0.5 bg-gray-400 rounded-full opacity-60" />
            </div>
          </div>
        </>
      )}
      
      {/* Album cover shine */}
      <div className="absolute inset-0 bg-white/10 rounded-lg transition-all duration-150 hover:bg-white/10" />
    </motion.div>
  )
})

VinylRecord.displayName = 'VinylRecord'

export default VinylRecord 