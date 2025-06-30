'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState } from 'react'

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  return (
            <footer className="bg-black text-white pb-[80px] pt-4 lg:pb-[102px] lg:pt-5.5 min-h-[120px] relative" data-section="waitlist">
      <div className="px-[50px] max-w-7xl mx-auto">
        {/* 모바일에서만 웨이트리스트 폼 노출 - 최상단 */}
        {typeof window !== 'undefined' && window.innerWidth < 768 && (
          <div className="w-full flex flex-col items-center justify-center py-6 mb-[100px]">
            <h2 className="text-2xl font-bold text-white mb-2">Join Our Waitlist</h2>
            <p className="text-base text-gray-300 mb-4 text-center max-w-xs">
              Be the first to experience the future of music collection.<br />
              <span className="text-blue-300">AI meets vinyl passion.</span>
            </p>
            {!isSubmitted ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  if (!email.trim()) {
                    setMessage('Please enter your email.')
                    setStatus('error')
                    return
                  }
                  setStatus('loading')
                  setMessage('')
                  try {
                    const res = await fetch('/api/waitlist', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: email.trim() })
                    })
                    const data = await res.json()
                    if (res.ok) {
                      setStatus('success')
                      setIsSubmitted(true)
                      setMessage('웨이트리스트에 등록되었습니다!')
                      setEmail('')
                    } else {
                      setStatus('error')
                      setMessage(data.error || '등록에 실패했습니다.')
                    }
                  } catch {
                    setStatus('error')
                    setMessage('네트워크 오류입니다. 다시 시도해 주세요.')
                  }
                }}
                className="max-w-xs w-full flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Submitting...' : 'Join Our Waitlist'}
                </button>
              </form>
            ) : (
              <div className="mt-4 text-green-400 text-base font-semibold">웨이트리스트에 등록되었습니다! 🎉</div>
            )}
            {message && !isSubmitted && (
              <div className={`mt-2 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </div>
            )}
          </div>
        )}
        <div className="md:flex md:items-start md:justify-between mb-2.5">
          <a
            href="/"
            className="flex items-center gap-x-2 text-white hover:text-white transition-colors"
            aria-label={brandName}
          >
            {logo && logo}
            <span className="font-bold text-xl">{brandName}</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-white border-0 backdrop-blur-sm"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-white/30 mt-2.5 pt-2.5 md:mt-1.5 md:pt-3.5 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-sm text-white underline-offset-4 hover:underline hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-white underline-offset-4 hover:underline hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-2.5 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-sm text-white underline-offset-4 hover:underline hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-white underline-offset-4 hover:underline hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2.5 text-sm leading-6 text-white whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div className="text-white font-medium">{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
} 