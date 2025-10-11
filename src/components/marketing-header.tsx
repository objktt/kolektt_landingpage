"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/config/i18n-config";

interface MarketingHeaderProps {
  lang: Locale;
}

export default function MarketingHeader({ lang }: MarketingHeaderProps) {
  const pathname = usePathname();

  // 현재 경로에 따라 활성 상태 확인
  const isActive = (path: string) => {
    if (path === "/") {
      // 홈페이지의 경우
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    return (
      pathname === `/${lang}${path}` || pathname.startsWith(`/${lang}${path}`)
    );
  };

  return (
    <header className="theme-main-menu menu-style-five light-vr sticky-menu menu-overlay">
      <div className="inner-content gap-three">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0 me-lg-5">
              <Link
                href={`/${lang}`}
                className="d-flex align-items-center"
                style={{ textDecoration: "none", outline: "none" }}
              >
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "22px",
                    letterSpacing: "0.5px",
                    color: "#000",
                  }}
                >
                  Kolektt
                </span>
              </Link>
            </div>

            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <Link
                href={`/${lang}/hub`}
                className="btn-global-header"
                data-event="enter_hub_click"
              >
                Enter Hub
              </Link>
            </div>

            <nav className="navbar navbar-expand-lg p0 mx-lg-auto order-lg-2">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav align-items-lg-center">
                  <li className="d-block d-lg-none">
                    <div className="logo">
                      <Link
                        href={`/${lang}`}
                        className="d-block"
                        style={{ textDecoration: "none", outline: "none" }}
                      >
                        <span
                          style={{
                            fontWeight: 800,
                            fontSize: "22px",
                            letterSpacing: "0.5px",
                            color: "#000",
                          }}
                        >
                          Kolektt
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-black after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${isActive("/bpm-collect") ? "active after:!w-full" : ""}`}
                      href={`/${lang}/bpm-collect`}
                    >
                      BPM Collect
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-black after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${isActive("/hub") ? "active after:!w-full" : ""}`}
                      href={`/${lang}/hub`}
                    >
                      Kolektt Hub
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-black after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${isActive("/about") ? "active after:!w-full" : ""}`}
                      href={`/${lang}/about`}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
