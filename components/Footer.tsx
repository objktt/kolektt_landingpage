'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

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
  return (
            <footer className="bg-black text-white pb-[30px] pt-4 lg:pb-2 lg:pt-5.5 min-h-[120px] relative">
      <div className="px-[50px] max-w-7xl mx-auto">
        
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