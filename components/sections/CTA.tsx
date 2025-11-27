"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { language } = useLanguage();

  return (
    <section id="download" className="py-40 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-display text-[4.5rem] md:text-[7rem] lg:text-[9rem] mb-16 leading-[0.9] tracking-tighter">
            {language === "KO" ? (
              <>
                지금, 당신만의 <br />
                레코드 컬렉션을 <br />
                <span className="text-accent">시작</span>하세요.
              </>
            ) : (
              <>
                <span className="text-accent">Start</span> your <br />
                own record <br />
                collection now.
              </>
            )}
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              type="button" 
              className="group relative flex items-center px-6 py-3 rounded-xl border-none min-w-[200px] hover:scale-105 active:scale-95 cursor-pointer shadow-lg transition-all overflow-hidden bg-white text-black hover:bg-gray-200"
            >
              <div className="flex items-center transition-opacity duration-300 group-hover:opacity-20 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" fill="#000" className="mr-3" viewBox="0 0 22.773 22.773">
                  <path d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] leading-tight uppercase tracking-wide mb-0.5 text-black/80">Download on the</span>
                  <span className="text-lg font-bold">App Store</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-base font-bold font-korean">
                  {language === "KO" ? "준비중" : "Coming Soon"}
                </span>
              </div>
            </button>

            <button 
              type="button" 
              className="group relative flex items-center px-6 py-3 rounded-xl border-none min-w-[200px] hover:scale-105 active:scale-95 cursor-pointer shadow-lg transition-all overflow-hidden bg-white text-black hover:bg-gray-200"
            >
              <div className="flex items-center transition-opacity duration-300 group-hover:opacity-20 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="28px" className="mr-3 shrink-0" viewBox="0 0 64 64">
                  <path fill="#57cef3" d="M7 3v58l33-29z" />
                  <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" />
                  <path fill="#48ff48" d="M36 32 7 3h4l34 20z" />
                  <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" />
                  <path fill="#f33" d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z" />
                  <path fill="#0779e4" d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z" />
                  <path fill="#314a52" d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] leading-tight uppercase tracking-wide mb-0.5 text-black/80">Get it on</span>
                  <span className="text-lg font-bold">Google Play</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-base font-bold font-korean">
                  {language === "KO" ? "준비중" : "Coming Soon"}
                </span>
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Video & Overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/cta_bg.mp4" type="video/mp4" />
        </video>
        {/* Dot Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.3
          }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-10" />
      </div>
    </section>
  );
}
