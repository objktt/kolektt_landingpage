import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const isMobile = /iPhone|iPad|iPod|Android|Mobile/i.test(userAgent)

  // 모바일에서 / 접속 시 /m으로 리다이렉트
  if (isMobile && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/m', request.url))
  }
  return NextResponse.next()
} 