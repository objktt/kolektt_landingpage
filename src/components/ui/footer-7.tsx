"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
  lang?: string;
}

const getDefaultSections = (lang: string) => [
  {
    title: 'Link',
    links: [
      { name: "BPM Collect", href: "/bpm-collect" },
      { name: "Kolektt Hub", href: "/hub" },
      { name: lang === 'ko' ? '소개' : 'About', href: "/about" },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: "hello@kolektt.kr", href: "mailto:hello@kolektt.kr" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
];

const getDefaultLegalLinks = (lang: string) => [
  { name: lang === 'ko' ? '개인정보 처리방침' : 'Privacy Policy', href: "/privacy-policy" },
  { name: lang === 'ko' ? '서비스 이용약관' : 'Terms of Service', href: "/terms-of-service" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/images/logo/kolektt-logo.svg",
    alt: "Kolektt Logo",
    title: "Kolektt",
  },
  sections,
  description,
  socialLinks = defaultSocialLinks,
  copyright,
  legalLinks,
  lang = "en",
}: Footer7Props) => {
  // Set defaults based on language
  const defaultSections = sections || getDefaultSections(lang);
  const defaultDescription = description || (lang === 'ko' 
    ? '레코드 컬렉터를 위한 스마트 플랫폼. 카메라 기반 자동 인식, 메타데이터 수집, 투자 인사이트로 컬렉션을 쉽게 수집, 관리, 거래하세요.'
    : 'Smart platform for Record Collectors. Easily collect, manage, and trade your collection with camera-based automatic recognition, metadata collection, and investment insights.');
  const defaultCopyright = copyright || (lang === 'ko'
    ? '© 2025 Objktt Studio. 모든 권리 보유.'
    : '© 2025 Objktt Studio. All rights reserved.');
  const defaultLegalLinks = legalLinks || getDefaultLegalLinks(lang);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        // 3초 후 다시 폼 표시
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(lang === 'ko' ? '유효한 이메일을 입력해주세요.' : 'Please enter a valid email.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setError(lang === 'ko' ? '네트워크 오류가 발생했습니다.' : 'Network error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="mx-auto px-6 md:px-10 lg:px-16 max-w-7xl">
        <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href={`/${lang}`}>
                <Image
                  src="/images/logo/kolektt_logo.svg"
                  alt="Kolektt Logo"
                  width={98}
                  height={28}
                  className="h-7 w-auto brightness-0 invert hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              {defaultDescription}
            </p>

            {/* Beta Tester Application */}
            <div className="w-full max-w-sm">
              <h4 className="text-sm font-semibold text-white mb-3">
                {lang === 'ko' ? '베타테스터 신청' : 'Apply for Beta Testing'}
              </h4>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lang === 'ko' ? '이메일을 입력하세요' : 'Enter your email'}
                      className="flex-1 px-4 py-2 text-sm border border-gray-600 bg-gray-800 text-white placeholder-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      disabled={isLoading}
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="px-4 py-2 text-white text-sm font-medium rounded-r-lg transition-colors disabled:opacity-50"
                      style={{ backgroundColor: '#1520FF' }}
                      onMouseEnter={(e) => !isLoading && (e.currentTarget.style.backgroundColor = '#0D16CC')}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1520FF'}
                    >
                      {isLoading ? (
                        lang === 'ko' ? '전송중...' : 'Sending...'
                      ) : (
                        lang === 'ko' ? '신청' : 'Apply'
                      )}
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
                  <span>{lang === 'ko' ? '신청 완료!' : 'Application submitted!'}</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <ul className="flex items-center space-x-4 text-gray-400">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-white transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16 lg:gap-20">
            {defaultSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {link.href === "/hub" ? (
                        <div className="relative group inline-block">
                          <span className="text-sm text-gray-500 cursor-not-allowed">
                            {link.name}
                          </span>
                          <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-700 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                            {lang === "ko" ? "준비중입니다" : "Coming Soon"}
                            <div className="absolute top-full left-4 w-2 h-2 bg-gray-700 rotate-45 -mt-1"></div>
                          </div>
                        </div>
                      ) : link.href.startsWith("mailto:") ||
                      link.href.startsWith("http") ||
                      link.href === "#" ? (
                        <a
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={`/${lang}${link.href}`}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-700 pt-8 text-sm text-gray-400 md:flex-row md:items-center">
          <p>{defaultCopyright}</p>
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {defaultLegalLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={`/${lang}${link.href}`}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
