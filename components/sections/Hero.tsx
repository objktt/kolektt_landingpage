"use client";

import { motion } from "framer-motion";
import AuroraTest from "@/components/effects/AuroraTest";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Aurora Test */}
      <AuroraTest />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-10 max-w-4xl"
        >
          <h1 className="text-display text-6xl md:text-[7rem] lg:text-[9rem] text-primary leading-[0.9] md:leading-[0.85] tracking-tighter">
            Collect <br />
            Your <br />
            Sound Story
          </h1>
          
          <div className="flex flex-col gap-8 max-w-xl pl-1">
            <p className="text-xl md:text-2xl text-primary/60 font-korean leading-relaxed font-medium">
              카메라 기반 AI 인식으로 당신의 레코드 컬렉션을 <br className="hidden md:block" />
              기록하고, 관리하고, 거래하세요.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <button type="button" className="px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-black hover:bg-[#222] active:bg-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="36px" fill="#fff" className="inline mr-2" viewBox="0 0 22.773 22.773">
                  <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] text-white leading-none text-left font-medium">Download on the</span>
                  <span className="text-lg">App Store</span>
                </div>
              </button>

              <button type="button" className="group relative px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-xl tracking-wider border-none outline-none bg-black hover:bg-[#222] active:bg-black transition-colors overflow-hidden">
                {/* Button Content */}
                <div className="flex items-center transition-opacity duration-300 group-hover:opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36px" fill="#fff" className="inline mr-2" viewBox="0 0 64 64">
                    <path fill="#57cef3" d="M7 3v58l33-29z" />
                    <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                    <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                    <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                    <path fill="#f33" d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z" />
                    <path fill="#0779e4" d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z" />
                    <path fill="#314a52" d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] text-white leading-none text-left font-medium">Get it on</span>
                    <span className="text-lg">Google Play</span>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-base font-bold font-korean">준비중</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Gradient/Blur */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gray-100/80 via-transparent to-transparent -z-10 pointer-events-none" />
    </section>
  );
}
