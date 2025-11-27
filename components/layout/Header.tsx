"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: Array<{ name: string; href: string; comingSoon?: boolean }> = [
    { name: "BPM Collect", href: "/bpm-collect" },
    { name: "Kolektt Hub", href: "/hub", comingSoon: true },
    { name: "About", href: "/about" },
  ];


  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-transparent py-4"
            : isScrolled
            ? isAboutPage
              ? "bg-black/80 backdrop-blur-md py-4"
              : theme === "dark"
              ? "bg-black/80 backdrop-blur-md py-4"
              : "bg-background/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <Link href="/" className="z-50 relative group">
            <div className="relative h-[26px] w-[96px]">
              {/* Default Logo */}
              <Image 
                src="/logo/kolektt_logo.svg" 
                alt="Kolektt Logo" 
                width={96} 
                height={26} 
                className={`h-[26px] w-auto absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0 ${isAboutPage || theme === "dark" || isMobileMenuOpen ? "invert" : ""}`}
                priority
              />
              {/* Hover Symbol - Animated SVG */}
              <svg 
                className={`h-[26px] w-auto absolute top-0 left-1/2 -translate-x-1/2 ${isAboutPage || theme === "dark" || isMobileMenuOpen ? "invert" : ""}`}
                viewBox="0 0 1920 639.95" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rectangle (leftmost shape) */}
                <rect
                  x=".15"
                  y="0"
                  width="639.95"
                  height="639.95"
                  transform="translate(.15 640.1) rotate(-90)"
                  fill="currentColor"
                  className="opacity-0 group-hover:opacity-100"
                  style={{ 
                    transition: 'opacity 0.3s ease 0s'
                  }}
                />
                {/* Path (middle shape) */}
                <path
                  d="M960.08,639.95c-176.72,0-319.97-143.26-319.97-319.97C640.1,143.26,783.36,0,960.08,0h319.97s0,639.95,0,639.95h-319.97Z"
                  fill="currentColor"
                  className="opacity-0 group-hover:opacity-100"
                  style={{ 
                    transition: 'opacity 0.3s ease 0.1s'
                  }}
                />
                {/* Circle (rightmost shape) */}
                <circle
                  cx="1600.03"
                  cy="319.97"
                  r="319.97"
                  fill="currentColor"
                  className="opacity-0 group-hover:opacity-100"
                  style={{ 
                    transition: 'opacity 0.3s ease 0.2s'
                  }}
                />
              </svg>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.comingSoon ? (
                <span
                  key={link.name}
                  className={`text-sm font-bold transition-colors font-sans relative group cursor-not-allowed ${
                    isAboutPage
                      ? "text-white/50"
                      : theme === "dark"
                      ? "text-white/50"
                      : "text-primary/50"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                    isAboutPage || theme === "dark"
                      ? "bg-white text-black" 
                      : "bg-primary text-white"
                  }`}>
                    {language === "KO" ? "준비중" : "Coming Soon"}
                  </span>
                </span>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-colors font-sans relative group cursor-pointer ${
                    isAboutPage
                      ? "text-white/80 hover:text-white"
                      : theme === "dark"
                      ? "text-white/80 hover:text-white"
                      : "text-primary/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 font-sans flex items-center gap-1 cursor-pointer ${
                  isAboutPage
                    ? "text-white/80 hover:text-white"
                    : theme === "dark"
                    ? "text-white/80 hover:text-white"
                    : "text-primary/80 hover:text-primary"
                }`}
              >
                <span className="w-6 text-center">{language}</span>
                <ChevronDown size={14} />
              </button>
              <button
                onClick={toggleTheme}
                className={`p-2 text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isAboutPage
                    ? "text-white/80 hover:text-white"
                    : theme === "dark"
                    ? "text-white/80 hover:text-white"
                    : "text-primary/80 hover:text-primary"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 relative cursor-pointer ${isAboutPage || theme === "dark" || isMobileMenuOpen ? "text-white" : "text-primary"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 flex flex-col items-center justify-center gap-8 md:hidden z-40 ${
              theme === "dark" ? "bg-black text-white" : "bg-background text-primary"
            }`}
          >
            {navLinks.map((link) => (
              link.comingSoon ? (
                <span
                  key={link.name}
                  className={`text-2xl font-bold font-sans relative group cursor-not-allowed ${
                    theme === "dark" ? "text-white/50" : "text-primary/50"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                    theme === "dark" ? "bg-white text-black" : "bg-primary text-white"
                  }`}>
                    {language === "KO" ? "준비중" : "Coming Soon"}
                  </span>
                </span>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold font-sans relative group cursor-pointer"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-4">
              <button
                onClick={toggleLanguage}
                className={`px-8 py-3 text-lg font-bold rounded-full flex items-center gap-2 justify-center cursor-pointer ${
                  theme === "dark" ? "bg-white text-black" : "bg-primary text-white"
                }`}
              >
                <span className="w-8 text-center">{language}</span>
                <ChevronDown size={18} />
              </button>
              <button
                onClick={toggleTheme}
                className={`p-3 text-lg font-bold rounded-full cursor-pointer flex items-center justify-center ${
                  theme === "dark" ? "bg-white text-black" : "bg-primary text-white"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
