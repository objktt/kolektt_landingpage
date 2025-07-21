'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '계정 삭제 - Kolektt',
  description: 'Kolektt 서비스 계정을 삭제하기 위한 안내 페이지',
};

export default function DeleteAccountPage() {
  const [isKorean, setIsKorean] = useState(true);

  const toggleLanguage = () => {
    setIsKorean(!isKorean);
  };

  if (!isKorean) {
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              Kolektt
            </Link>
            <button 
              onClick={toggleLanguage}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              한국어
            </button>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Account Deletion Guidance</h1>
          <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="text-gray-300 mb-8">
            Thank you for using Kolektt services. If you wish to delete your account, please refer to the guidelines below.
          </p>

          <div className="space-y-8">
            <section>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ Important Notice</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Account deletion is irreversible.</strong> Deleted data cannot be recovered, so please decide carefully.
                </p>
                <p className="text-gray-400">
                  You can re-register with the same email, but previous data will not be restored.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data to be Deleted</h2>
              <div className="space-y-4 text-gray-300">
                <p>The following data will be permanently deleted when your account is deleted:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal profile information (name, email, profile picture, etc.)</li>
                  <li>All album collection data</li>
                  <li>Wishlist</li>
                  <li>App settings and usage history</li>
                  <li>Uploaded images and reviews</li>
                  <li>Interaction history with other users</li>
                  <li>Subscription information and payment records</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Delete Your Account</h2>
              
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Method 1: Delete in App</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-300">
                  <li>Run the Kolektt app</li>
                  <li>Navigate to the profile tab</li>
                  <li>Select the settings menu</li>
                  <li>Choose &apos;Privacy Settings&apos;</li>
                  <li>Select &apos;Delete Account&apos; in the &apos;Data Management&apos; section</li>
                  <li>Complete the deletion process as instructed</li>
                </ol>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Method 2: Request by Email</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-300">
                  <li>Send a deletion request from your registered email address</li>
                  <li>Include &quot;[Account Deletion Request]&quot; in the subject</li>
                  <li>The email must be sent from the same email you used to sign up for identity verification</li>
                  <li>Your account will be deleted within 7 days of request submission</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
              <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>In-app deletion: Immediate processing</li>
                  <li>Email request: Processed within 7 days of submission</li>
                  <li>A confirmation email will be sent to you upon completion</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Considerations Before Deletion</h2>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                  <li>If you want to temporarily stop using the service, just log out</li>
                  <li>If you want to backup your precious collection data, please save a screenshot in advance</li>
                  <li>If you are subscribed to a service, please cancel your subscription first</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Handling of Personal Information</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Even after the account is deleted, some information may be retained in accordance with relevant laws:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>E-Commerce Law: Payment/refund-related records 5 years</li>
                  <li>Telecommunications Secret Protection Law: Service usage records 3 months</li>
                  <li>Personal Information Protection Law: Complaint handling related records 3 years</li>
                </ul>
                <p>
                  Retained information is used only within the scope of the purpose of the relevant laws and will be destroyed immediately after the retention period elapses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact and Support</h2>
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white mb-3">📧 Account Deletion Requests and Inquiries</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><strong>Email:</strong> <a href="mailto:hello@kolektt.kr" className="text-blue-400 hover:text-blue-300 underline">hello@kolektt.kr</a></li>
                  <li><strong>Processing Time:</strong> 10:00 am - 6:00 pm weekdays (excluding weekends/holidays)</li>
                  <li><strong>Response Time:</strong> Within 1-2 business days</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-16">
          <div className="container mx-auto px-6 py-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} objktt. All rights reserved.
            </p>
            <p className="text-center text-gray-500 text-sm mt-2">
              Kolektt is a product of objktt
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Kolektt
          </Link>
          <button 
            onClick={toggleLanguage}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            English
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">계정 삭제 안내</h1>
        <p className="text-gray-400 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="text-gray-300 mb-8">
          Kolektt 서비스를 이용해 주셔서 감사합니다. 계정 삭제를 원하시는 경우, 아래 안내를 참고하여 진행해 주시기 바랍니다.
        </p>

        <div className="space-y-8">
          <section>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ 중요 안내</h3>
              <p className="text-gray-300 mb-2">
                <strong>계정 삭제는 되돌릴 수 없는 작업입니다.</strong> 삭제된 데이터는 복구할 수 없으므로 신중히 결정해 주시기 바랍니다.
              </p>
              <p className="text-gray-400">
                계정 삭제 후에는 동일한 이메일로 재가입이 가능하지만, 기존 데이터는 복구되지 않습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">삭제되는 데이터</h2>
            <div className="space-y-4 text-gray-300">
              <p>계정 삭제 시 다음 데이터가 영구적으로 삭제됩니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>개인 프로필 정보 (이름, 이메일, 프로필 사진 등)</li>
                <li>모든 앨범 컬렉션 데이터</li>
                <li>위시리스트</li>
                <li>앱 설정 및 이용 기록</li>
                <li>업로드한 이미지 및 리뷰</li>
                <li>다른 사용자와의 상호작용 기록</li>
                <li>구독 정보 및 결제 내역</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">계정 삭제 방법</h2>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-white mb-3">방법 1: 앱 내에서 삭제</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-300">
                <li>Kolektt 앱을 실행합니다</li>
                <li>프로필 탭으로 이동합니다</li>
                <li>설정 메뉴를 선택합니다</li>
                <li>&apos;개인정보 보호 설정&apos;을 선택합니다</li>
                <li>&apos;데이터 관리&apos; 섹션에서 &apos;계정 삭제&apos;를 선택합니다</li>
                <li>안내에 따라 삭제 절차를 완료합니다</li>
              </ol>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-white mb-3">방법 2: 이메일로 요청</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-300">
                <li>등록된 이메일 주소로 삭제 요청을 보냅니다</li>
                <li>제목에 &quot;[계정삭제요청]&quot;을 포함하여 작성합니다</li>
                <li>본인 확인을 위해 가입 시 사용한 이메일로 발송해야 합니다</li>
                <li>요청 후 7일 이내에 계정이 삭제됩니다</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">처리 기간</h2>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>앱 내 삭제: 즉시 처리</li>
                <li>이메일 요청: 접수 후 7일 이내 처리</li>
                <li>삭제 완료 후 확인 이메일을 발송드립니다</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">계정 삭제 전 고려사항</h2>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                <li>일시적으로 서비스 이용을 중단하려면 로그아웃만 하시면 됩니다</li>
                <li>소중한 컬렉션 데이터를 백업하고 싶다면 미리 스크린샷을 저장해 두세요</li>
                <li>구독 중인 서비스가 있다면 먼저 구독을 취소해 주세요</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">개인정보 처리</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                계정 삭제 후에도 관련 법률에 따라 일부 정보는 다음과 같이 보관될 수 있습니다:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>전자상거래법: 결제/환불 관련 기록 5년</li>
                <li>통신비밀보호법: 서비스 이용 기록 3개월</li>
                <li>개인정보보호법: 민원 처리 관련 기록 3년</li>
              </ul>
              <p>
                보관되는 정보는 해당 법률의 목적 범위 내에서만 이용되며, 
                보관 기간 경과 후 즉시 파기됩니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">문의 및 지원</h2>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-3">📧 계정 삭제 요청 및 문의</h3>
              <ul className="space-y-2 text-gray-300">
                <li><strong>이메일:</strong> <a href="mailto:hello@kolektt.kr" className="text-blue-400 hover:text-blue-300 underline">hello@kolektt.kr</a></li>
                <li><strong>처리시간:</strong> 평일 10:00 - 18:00 (주말/공휴일 제외)</li>
                <li><strong>응답시간:</strong> 영업일 기준 1-2일 이내</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} objktt. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Kolektt is a product of objktt
          </p>
        </div>
      </footer>
    </div>
  );
}
