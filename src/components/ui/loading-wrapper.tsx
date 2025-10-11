"use client";

import { useEffect, useState } from 'react';
import { CircularLoader } from './circular-loader';
import { cn } from '@/lib/utils';

interface LoadingWrapperProps {
  minDisplayTime?: number;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

export function LoadingWrapper({ 
  minDisplayTime = 500,
  size = 'lg',
  text = 'KOLEKTT • LOADING • ',
  fullScreen = true,
  className
}: LoadingWrapperProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  if (!isVisible) return null;

  return (
    <div className={cn(
      'flex items-center justify-center relative overflow-hidden',
      fullScreen ? 'fixed inset-0 bg-white z-50' : 'min-h-[400px]',
      className
    )}>
      <div className="flex flex-col items-center gap-6">
        <CircularLoader 
          size={size} 
          text={text} 
          spinDuration={3} 
          className="drop-shadow-lg" 
        />
        <div className="text-center">
          <p className="text-sm text-gray-500 animate-pulse">
            {fullScreen ? 'Loading your collection experience...' : 'Loading...'}
          </p>
          {fullScreen && (
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
