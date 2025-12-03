'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [countdown, setCountdown] = useState(3);
  const type = searchParams.get('type') || 'signup';

  useEffect(() => {
    // URL에서 파라미터 확인 (PKCE code 또는 implicit flow)
    const hash = window.location.hash.substring(1);
    const hashParams = new URLSearchParams(hash);
    const queryParams = new URLSearchParams(window.location.search);
    
    // PKCE flow: ?code=...
    const code = queryParams.get('code');
    
    // Implicit flow: #access_token=...
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');
    
    // 에러 처리
    const errorParam = queryParams.get('error') || hashParams.get('error');
    const errorDescription = queryParams.get('error_description') || hashParams.get('error_description');

    if (errorParam) {
      setStatus('error');
      console.error('Auth error:', errorDescription);
      return;
    }

    // PKCE code 또는 토큰이 있으면 성공
    if (code || accessToken || refreshToken) {
      setStatus('success');
      
      // 카운트다운 시작
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // 앱으로 리다이렉트
            redirectToApp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      // 토큰이 없으면 에러 처리
      setStatus('error');
    }
  }, []);

  const redirectToApp = () => {
    // 토큰을 포함한 URL 파라미터를 앱으로 전달
    const hash = window.location.hash;
    const search = window.location.search;
    const appScheme = 'com.kolektt.app';
    const fallbackScheme = 'kolektt';
    
    // PKCE code가 있으면 query string 사용, 없으면 hash 사용
    const params = search || hash;
    
    // 먼저 primary scheme 시도
    window.location.href = `${appScheme}://auth-callback${params}`;
    
    // fallback으로 alternative scheme도 시도
    setTimeout(() => {
      window.location.href = `${fallbackScheme}://auth-callback${params}`;
    }, 500);
  };

  const handleManualRedirect = () => {
    redirectToApp();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Logo */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Kolektt</h1>
            <p className="text-gray-500">나만의 바이닐 컬렉션</p>
          </div>

          {/* Status Content */}
          {status === 'loading' && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mb-4"></div>
              <p className="text-gray-600">인증 처리 중...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center py-4 space-y-6">
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Success Message */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {type === 'signup' ? '회원가입이 완료되었습니다! 🎉' : '인증이 완료되었습니다! ✅'}
                </h2>
                <p className="text-gray-600">
                  {type === 'signup' 
                    ? 'Kolektt에 오신 것을 환영합니다!'
                    : '이제 앱에서 로그인하실 수 있습니다.'}
                </p>
              </div>

              {/* Countdown */}
              <div className="bg-purple-50 rounded-xl p-4">
                <p className="text-purple-700 font-medium">
                  {countdown}초 후 앱으로 자동 이동합니다...
                </p>
              </div>

              {/* Manual Redirect Button */}
              <button
                onClick={handleManualRedirect}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                앱으로 바로 이동하기
              </button>

              {/* Help Text */}
              <div className="bg-blue-50 rounded-xl p-4 text-left space-y-2">
                <p className="text-sm font-semibold text-blue-900">
                  💡 앱이 자동으로 열리지 않나요?
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• "앱으로 바로 이동하기" 버튼을 눌러주세요</li>
                  <li>• 팝업 허용 후 "열기"를 선택해주세요</li>
                  <li>• 앱에서 로그인하시면 바로 이용 가능합니다</li>
                </ul>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center py-4 space-y-6">
              {/* Error Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {/* Error Message */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  인증 처리 중 오류가 발생했습니다
                </h2>
                <p className="text-gray-600">
                  인증 링크가 만료되었거나 이미 사용되었을 수 있습니다.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => window.location.href = 'com.kolektt.app://'}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg"
                >
                  앱으로 돌아가기
                </button>
                <a
                  href="mailto:hello@kolektt.kr"
                  className="block w-full text-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  문의하기
                </a>
              </div>

              {/* Help Box */}
              <div className="bg-gray-50 rounded-xl p-4 text-left">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  해결 방법:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 앱에서 인증 메일을 다시 요청해주세요</li>
                  <li>• 최신 인증 링크만 사용 가능합니다</li>
                  <li>• 문제가 계속되면 고객센터로 문의해주세요</li>
                </ul>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              문의: <a href="mailto:hello@kolektt.kr" className="text-purple-600 hover:underline">hello@kolektt.kr</a>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              © 2025 Kolektt. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mb-4"></div>
              <p className="text-gray-600">인증 처리 중...</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
