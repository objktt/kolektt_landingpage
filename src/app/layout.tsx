import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | Kolektt",
    default: "Kolektt - Smart Platform for Record Collectors",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Kolektt",
      url: siteConfig.url,
    },
  ],
  creator: "Kolektt",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Kolektt - 레코드 컬렉터를 위한 스마트 플랫폼",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Kolektt",
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolektt",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "ko-KR": `${siteConfig.url}/ko`,
      "en-US": `${siteConfig.url}/en`,
    },
  },
  verification: {
    google: "your-google-search-console-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="your-google-search-console-verification-code"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
