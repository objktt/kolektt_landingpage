import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '계정 삭제 - Kolektt',
  description: 'Kolektt 서비스 계정을 삭제하기 위한 안내 페이지',
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
