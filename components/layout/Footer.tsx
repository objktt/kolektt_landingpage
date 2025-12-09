"use client";

import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [os, setOs] = useState('');
  const [accountEmail, setAccountEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');



  const sections = [
    {
      title: 'Link',
      links: [
        { name: "BPM Collect", href: "/bpm-collect" },
        { name: "Kolektt Hub", href: "/hub", comingSoon: true },
        { name: "About", href: "/about" },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: "hello@kolektt.kr", href: "/contact" },
      ],
    },
  ];

  const legalLinks = [
    { name: language === "KO" ? '개인정보 처리방침' : 'Privacy Policy', href: "/privacy" },
    { name: language === "KO" ? '서비스 이용약관' : 'Terms of Service', href: "/terms" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !os || !accountEmail) return;

    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, os, accountEmail }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setName('');
        setOs('');
        setAccountEmail('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(language === "KO" ? '유효한 이메일을 입력해주세요.' : 'Please enter a valid email.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setError(language === "KO" ? '네트워크 오류가 발생했습니다.' : 'A network error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="py-16 md:py-24 bg-[#0E0E0D] border-white/10 border-t">
      <div className="mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src="/logo/kolektt_logo.svg"
                  alt="Kolektt Logo"
                  width={98}
                  height={28}
                  className="h-7 w-auto brightness-0 invert hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-base text-white/60 leading-relaxed">
              {language === "KO"
                ? "레코드 컬렉터를 위한 스마트 플랫폼. 카메라 기반 자동 인식, 메타데이터 수집, 투자 인사이트로 컬렉션을 쉽게 수집, 관리, 거래하세요."
                : "Smart platform for record collectors. Easily collect, manage, and trade your collection with camera-based auto-recognition, metadata collection, and investment insights."}
            </p>

            {/* Pre-registration */}
            <div className="w-full max-w-sm">
              <h4 className="text-sm font-semibold text-white mb-3">
                {language === "KO" ? "사전등록 신청" : "Pre-registration"}
              </h4>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Name Input */}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === "KO" ? "이름" : "Name"}
                    className="w-full px-4 py-2 text-sm border border-white/10 bg-[#1A1A1A] text-white placeholder-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                    disabled={isLoading}
                  />

                  {/* OS Selection */}
                  <div className="relative">
                    <select
                      value={os}
                      onChange={(e) => setOs(e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-white/10 bg-[#1A1A1A] text-white placeholder-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                      required
                      disabled={isLoading}
                    >
                      <option value="" disabled>
                        {language === "KO" ? "모바일 OS 선택" : "Select Mobile OS"}
                      </option>
                      <option value="iOS">iOS</option>
                      <option value="Android">Android</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white/40">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Account Email Input */}
                  <input
                    type="email"
                    value={accountEmail}
                    onChange={(e) => setAccountEmail(e.target.value)}
                    placeholder={
                      language === "KO"
                        ? os === 'iOS' 
                          ? "Apple ID (베타 테스트 초대용)"
                          : os === 'Android'
                          ? "Google Play 계정 (베타 테스트 초대용)"
                          : "앱스토어 계정 (베타 테스트 초대용)"
                        : os === 'iOS'
                        ? "Apple ID (for TestFlight invite)"
                        : os === 'Android'
                        ? "Google Play Account (for beta invite)"
                        : "App Store Account (for beta invite)"
                    }
                    className="w-full px-4 py-2 text-sm border border-white/10 bg-[#1A1A1A] text-white placeholder-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                    disabled={isLoading}
                  />

                  {/* Contact Email Input & Submit */}
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === "KO" ? "연락받을 이메일" : "Contact Email"}
                      className="flex-1 px-4 py-2 text-sm border border-white/10 bg-[#1A1A1A] text-white placeholder-white/40 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                      disabled={isLoading}
                      suppressHydrationWarning
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-r-lg transition-colors disabled:opacity-50 whitespace-nowrap"
                    >
                      {isLoading 
                        ? (language === "KO" ? '전송중...' : 'Sending...') 
                        : (language === "KO" ? '신청' : 'Submit')}
                    </button>
                  </div>
                  {error && (
                    <p className="text-xs text-red-400 mt-2">{error}</p>
                  )}
                </form>
              ) : (
                <div className="flex items-center gap-2 text-green-400 text-sm py-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{language === "KO" ? "신청 완료!" : "Submitted!"}</span>
                </div>
              )}
              {/* Waitlist Notice */}
              <p className="text-xs text-white/50 mt-3 leading-relaxed">
                {language === "KO"
                  ? "※ 사전 신청 대기 리스트에 등록 시, 구글 플레이 계정 또는 iOS 앱스토어 계정을 함께 등록해 주시기 바랍니다."
                  : "※ When registering for the waitlist, please register your Google Play or iOS App Store account."}
              </p>
            </div>


          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {link.comingSoon ? (
                        <div className="relative group inline-block">
                          <span className="text-sm text-white/30 cursor-not-allowed">
                            {link.name}
                          </span>
                          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-700 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                            {language === "KO" ? "준비중입니다" : "Coming Soon"}
                            <div className="absolute top-full left-4 w-2 h-2 bg-gray-700 rotate-45 -mt-1"></div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                  {/* Add Instagram Button to Contact Section */}
                  {section.title === 'Contact' && (
                    <li className="pt-4">
                      <a 
                        href="https://www.instagram.com/kolektt.mag" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-4 py-2.5 bg-white/5 hover:bg-white/10 border-white/10 border rounded-xl transition-all duration-300 w-fit"
                      >
                        <div className="p-1 bg-white/10 group-hover:bg-white/20 rounded-full transition-colors">
                          <FaInstagram className="size-3.5 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-white/60 group-hover:text-white/80 leading-none mb-0.5">Follow us on</span>
                          <span className="text-xs font-bold text-white leading-none">Instagram</span>
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 text-white/40 pt-8 text-sm md:flex-row md:items-center">
          <p>© 2025 Objktt Studio. All rights reserved.</p>
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
