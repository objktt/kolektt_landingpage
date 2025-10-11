"use client";

import { CircularLoader } from "@/components/ui/circular-loader";

export default function LoaderDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Circular Loader Showcase</h1>
          <p className="text-xl text-gray-600">Enhanced loading animations with perfect center alignment</p>
        </div>
        
        <div className="grid gap-8 md:gap-12">
          {/* Size Variations */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Small */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Small Size</h2>
              <div className="flex justify-center items-center h-32">
                <CircularLoader size="sm" text="KOLEKTT • " spinDuration={2} className="drop-shadow-sm" />
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">Perfect for inline elements and buttons</p>
            </div>

            {/* Medium */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Medium Size</h2>
              <div className="flex justify-center items-center h-32">
                <CircularLoader size="md" text="KOLEKTT • LOADING • " spinDuration={3} className="drop-shadow-md" />
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">Great for modal dialogs and cards</p>
            </div>

            {/* Large */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Large Size</h2>
              <div className="flex justify-center items-center h-32">
                <CircularLoader size="lg" text="KOLEKTT • LOADING • " spinDuration={4} className="drop-shadow-lg" />
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">Ideal for full-screen loading states</p>
            </div>
          </div>

          {/* Button Demo */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Button Loading States</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">
                <CircularLoader size="sm" text="• " spinDuration={1.5} className="mr-2" />
                Loading...
              </button>
              <button className="flex items-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition-colors">
                <CircularLoader size="sm" text="• " spinDuration={1.5} className="mr-2" />
                Processing
              </button>
              <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
                <CircularLoader size="sm" text="✓ " spinDuration={2} className="mr-2" />
                Uploading
              </button>
            </div>
          </div>

          {/* Full Screen Demo */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 min-h-[400px] flex items-center justify-center shadow-xl">
            <div className="flex flex-col items-center gap-6">
              <CircularLoader 
                size="lg" 
                text="KOLEKTT • LOADING • " 
                spinDuration={3} 
                className="drop-shadow-2xl" 
              />
              <div className="text-center">
                <p className="text-white text-lg animate-pulse">Loading your vinyl collection...</p>
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Text Examples */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Custom Text Examples</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <CircularLoader size="md" text="♪ MUSIC ♪ " spinDuration={2.5} className="mx-auto mb-2" />
                <p className="text-sm text-gray-500">Music Theme</p>
              </div>
              <div className="text-center">
                <CircularLoader size="md" text="⚡ FAST ⚡ " spinDuration={1.5} className="mx-auto mb-2" />
                <p className="text-sm text-gray-500">Fast Loading</p>
              </div>
              <div className="text-center">
                <CircularLoader size="md" text="☆ STAR ☆ " spinDuration={3.5} className="mx-auto mb-2" />
                <p className="text-sm text-gray-500">Star Theme</p>
              </div>
              <div className="text-center">
                <CircularLoader size="md" text="● ● ● " spinDuration={2} className="mx-auto mb-2" />
                <p className="text-sm text-gray-500">Minimal Dots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
