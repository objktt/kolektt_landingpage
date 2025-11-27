"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface UltraSimpleSelectorProps {
  isActive: boolean;
  bpm: number;
}

export default function UltraSimpleSelector({
  isActive,
  bpm,
}: UltraSimpleSelectorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationData, setAnimationData] = useState<any>(null);
  const lottieRef = useRef<any>(null);

  const animations = [
    {
      name: "Clap",
      emoji: "👏",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f44f/lottie.json",
    },
    {
      name: "Dance",
      emoji: "💃",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f483/lottie.json",
    },
    {
      name: "Sax",
      emoji: "🎷",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b7/lottie.json",
    },
    {
      name: "Maracas",
      emoji: "🪇",
      url: "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa87/lottie.json",
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % animations.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + animations.length) % animations.length,
    );

  const current = animations[currentIndex];

  // Load Lottie animation when currentIndex changes
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(current.url);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error(`Failed to load ${current.name} animation:`, error);
        setAnimationData(null);
      }
    };

    loadAnimation();
  }, [currentIndex, current.url, current.name]);

  // Control animation based on BPM
  useEffect(() => {
    if (isActive && bpm > 0 && lottieRef.current && animationData) {
      // Convert BPM to beats per second
      const beatsPerSecond = bpm / 60;

      // Get base animation duration in seconds
      const baseDurationSeconds = animationData.op / animationData.fr;

      // Calculate speed multiplier
      const targetDurationSeconds = 1 / beatsPerSecond;
      const speed = baseDurationSeconds / targetDurationSeconds / 2;

      // console.log(`${current.name} - BPM: ${bpm}, Speed: ${speed.toFixed(3)}x`);

      lottieRef.current.setSpeed(speed);
      lottieRef.current.play();
    } else if (lottieRef.current) {
      lottieRef.current.stop();
    }
  }, [isActive, bpm, animationData, current.name]);

  return (
    <div className="flex flex-col items-center relative">
      {/* Main Display */}
      <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] flex items-center justify-center">
        {animationData ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={false}
            className="w-full h-full"
          />
        ) : (
          <div
            className={`text-[10rem] md:text-[24rem] leading-none ${
              isActive && bpm > 0 ? "animate-pulse" : ""
            }`}
          >
            {current.emoji}
          </div>
        )}

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute -left-4 md:-left-[60px] top-1/2 -translate-y-1/2 bg-transparent border-none text-primary text-4xl md:text-6xl cursor-pointer flex items-center justify-center p-0 transition-all duration-300 hover:scale-125 hover:opacity-80 z-10"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute -right-4 md:-right-[60px] top-1/2 -translate-y-1/2 bg-transparent border-none text-primary text-4xl md:text-6xl cursor-pointer flex items-center justify-center p-0 transition-all duration-300 hover:scale-125 hover:opacity-80 z-10"
        >
          ›
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 mt-4">
        {animations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full border-none cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-primary/30 scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
