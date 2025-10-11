"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Tag,
  BarChart3,
  Settings,
  ChevronDown,
  Plus,
  FileUp,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  Image,
  Eye,
  Store,
} from "lucide-react";
import { useState } from "react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "대시보드",
    href: "/hub/dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    title: "재고 관리",
    href: "/hub/inventory",
    icon: <Package className="w-5 h-5" />,
    children: [
      {
        title: "전체 재고",
        href: "/hub/inventory",
        icon: <Package className="w-4 h-4" />,
      },
      {
        title: "신규 등록",
        href: "/hub/inventory/new",
        icon: <Plus className="w-4 h-4" />,
      },
      {
        title: "파일 업로드",
        href: "/hub/inventory/upload",
        icon: <FileUp className="w-4 h-4" />,
      },
      {
        title: "AI 입고 추천",
        href: "/hub/inventory/ai-recommendations",
        icon: <Sparkles className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "판매 관리",
    href: "/hub/orders",
    icon: <ShoppingCart className="w-5 h-5" />,
    children: [
      {
        title: "Kolektt 주문",
        href: "/hub/orders/kolektt",
        icon: <ShoppingBag className="w-4 h-4" />,
      },
      {
        title: "오프라인 판매",
        href: "/hub/orders/offline",
        icon: <Store className="w-4 h-4" />,
      },
      {
        title: "판매 내역",
        href: "/hub/orders/history",
        icon: <TrendingUp className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "상품 관리",
    href: "/hub/products",
    icon: <Tag className="w-5 h-5" />,
    children: [
      {
        title: "상품 정보 편집",
        href: "/hub/products",
        icon: <Tag className="w-4 h-4" />,
      },
      {
        title: "AI 설명글 생성",
        href: "/hub/products/ai-description",
        icon: <Sparkles className="w-4 h-4" />,
      },
      {
        title: "가격 관리",
        href: "/hub/products/pricing",
        icon: <DollarSign className="w-4 h-4" />,
      },
      {
        title: "이미지 관리",
        href: "/hub/products/images",
        icon: <Image className="w-4 h-4" />,
      },
      {
        title: "노출 설정",
        href: "/hub/products/visibility",
        icon: <Eye className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "분석 및 인사이트",
    href: "/hub/analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    children: [
      {
        title: "판매 분석",
        href: "/hub/analytics/sales",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        title: "재고 분석",
        href: "/hub/analytics/inventory",
        icon: <Package className="w-4 h-4" />,
      },
      {
        title: "AI 리포트",
        href: "/hub/analytics/ai-report",
        icon: <Sparkles className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "설정",
    href: "/hub/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export function HubSidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href)
        ? prev.filter((item) => item !== href)
        : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    if (href === "/hub/dashboard") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/hub/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#243FEB] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">K</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">Kolektt Hub</h1>
            <p className="text-xs text-gray-400">B2B Platform</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <div key={item.href}>
            {item.children ? (
              <>
                <button
                  onClick={() => toggleExpand(item.href)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "bg-[#243FEB] text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedItems.includes(item.href) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedItems.includes(item.href) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                          pathname === child.href
                            ? "bg-[#243FEB] text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        {child.icon}
                        <span>{child.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? "bg-[#243FEB] text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#243FEB] rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">JS</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Jazz Station</p>
            <p className="text-xs text-gray-400">샵 관리자</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
