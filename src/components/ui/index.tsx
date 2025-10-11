// Basic UI Components
export { Button } from './button';
export { Card } from './card';
export { cn } from '@/lib/utils';

// Import actual components from src folder
export { MinimalistHero } from './src/minimalist-hero';
export { MinimalistHeroRight } from './src/minimalist-hero-right';
export { ShapeConnectAnimation } from './src/shape-connect-animation';
export { ShapeConnectAnimation01 } from './src/shape-connect-animation-01';
export { ShapeConnectAnimation02 } from './src/shape-connect-animation-02';
export { CircularLoader } from './circular-loader';

export const Skeleton = ({ className = '', ...props }: any) => (
  <div
    className={`animate-pulse rounded-md bg-muted ${className}`}
    {...props}
  />
);

export const Badge = ({ className = '', variant = 'default', children, ...props }: any) => (
  <div
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Add more components as needed
export const Sheet = ({ children }: any) => <div>{children}</div>;
export const SheetContent = ({ children }: any) => <div>{children}</div>;
export const SheetDescription = ({ children }: any) => <div>{children}</div>;
export const SheetHeader = ({ children }: any) => <div>{children}</div>;
export const SheetTitle = ({ children }: any) => <div>{children}</div>;
export const SheetTrigger = ({ children }: any) => <div>{children}</div>;

export const DropdownMenu = ({ children }: any) => <div>{children}</div>;
export const DropdownMenuContent = ({ children }: any) => <div>{children}</div>;
export const DropdownMenuItem = ({ children }: any) => <div>{children}</div>;
export const DropdownMenuLabel = ({ children }: any) => <div>{children}</div>;
export const DropdownMenuSeparator = () => <hr />;
export const DropdownMenuTrigger = ({ children }: any) => <div>{children}</div>;

export const Separator = ({ className = '' }: any) => (
  <div className={`shrink-0 bg-border h-[1px] w-full ${className}`} />
);

export const Avatar = ({ children, className = '' }: any) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
    {children}
  </div>
);

export const AvatarImage = ({ src, alt, className = '' }: any) => (
  <img className={`aspect-square h-full w-full ${className}`} src={src} alt={alt} />
);

export const AvatarFallback = ({ children, className = '' }: any) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>
    {children}
  </div>
);