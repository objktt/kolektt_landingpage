'use client'

import { motion, useTransform, MotionValue } from 'framer-motion'

interface BetaStickerProps {
  scrollYProgress?: MotionValue<number>
  className?: string
  text?: string
  size?: number
  backgroundColor?: string
  textColor?: string
  fontSize?: {
    initial: string
    final: string
  }
  rotate?: boolean
  rotationDuration?: number
}

export default function BetaServiceSticker({
  scrollYProgress,
  className = "",
  text = "BETA SERVICE JULY OPEN •",
  size = 64,
  backgroundColor = "#0036ff",
  textColor = "white",
  fontSize = { initial: "8px", final: "7px" },
  rotate = false,
  rotationDuration = 10
}: BetaStickerProps) {
  const center = size / 2
  const pathRadius = size * 0.3125 // 20/64 비율 유지
  const whiteCircleRadius = size * 0.0375 // 2.4/64 비율 유지

  return (
    <motion.div 
      className={`rounded-full shadow-lg flex items-center justify-center relative ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: backgroundColor,
      }}
      animate={rotate ? { rotate: 360 } : {}}
      transition={rotate ? {
        duration: rotationDuration,
        repeat: Infinity,
        ease: "linear"
      } : {}}
    >
      <svg className="w-full h-full absolute inset-0" viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <path 
            id="circle-path" 
            d={`M ${center}, ${center} m -${pathRadius}, 0 a ${pathRadius},${pathRadius} 0 1,1 ${pathRadius * 2},0 a ${pathRadius},${pathRadius} 0 1,1 -${pathRadius * 2},0`}
          />
        </defs>
        {/* Small white circle in center */}
        <circle 
          cx={center} 
          cy={center} 
          r={whiteCircleRadius} 
          fill={textColor}
          className="drop-shadow-sm"
        />
        <motion.text 
          className={`fill-${textColor === 'white' ? 'white' : 'current'} font-bold`}
          style={{
            fontSize: scrollYProgress 
              ? useTransform(scrollYProgress, [0, 0.2], [fontSize.initial, fontSize.final])
              : fontSize.initial,
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fill: textColor
          }}
        >
          <textPath href="#circle-path" startOffset="0%">
            {text}
          </textPath>
        </motion.text>
      </svg>
    </motion.div>
  )
} 