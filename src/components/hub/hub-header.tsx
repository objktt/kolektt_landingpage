"use client";

import { Bell, Search } from "lucide-react";
import { useState } from "react";

export function HubHeader() {
  const [notifications] = useState(3);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="검색... (앨범, 아티스트, SKU 등)"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#243FEB] focus:border-transparent"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-6 h-6 text-gray-600" />
          {notifications > 0 && (
            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {notifications}
            </span>
          )}
        </button>

        {/* Quick Stats */}
        <div className="hidden lg:flex items-center space-x-6 pl-6 border-l border-gray-200">
          <div>
            <p className="text-xs text-gray-500">오늘 주문</p>
            <p className="text-lg font-semibold text-gray-900">12</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">총 재고</p>
            <p className="text-lg font-semibold text-gray-900">2,847</p>
          </div>
        </div>
      </div>
    </header>
  );
}
