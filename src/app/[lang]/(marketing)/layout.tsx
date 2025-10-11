import Script from "next/script";
import type { Locale } from "@/config/i18n-config";
import { ShadcnHeader } from "@/components/shadcn-header";
import { Footer7 } from "@/components/ui/footer-7";
import { ToastProvider } from "@/components/ui/toast";

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale;
  }>;
}) {
  const { lang } = await params;
  return (
    <>
      {/* Phosphor Icons for icon support */}
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/regular/style.css"
        as="style"
      />
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/fill/style.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/regular/style.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/fill/style.css"
      />

      <ToastProvider>
        <div className="main-page-wrapper bg-white text-gray-900 min-h-screen">
          {/* ShadcnHeader */}
          <ShadcnHeader lang={lang} />

          {/* Page Content */}
          <main>{children}</main>

          {/* Footer */}
          <Footer7 lang={lang} />
        </div>
      </ToastProvider>

      {/* Scripts - Load GSAP first for animations */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
