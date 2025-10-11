"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/config/i18n-config";

interface ModernHeaderProps {
  lang: Locale;
}

export default function ModernHeader({ lang }: ModernHeaderProps) {
  const pathname = usePathname();
  const { showToast } = useToast();

  // 현재 경로에 따라 활성 상태 확인
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    return (
      pathname === `/${lang}${path}` || pathname.startsWith(`/${lang}${path}`)
    );
  };

  const handleHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast(
      lang === 'ko' ? '곧 출시 예정입니다! 🎉' : 'Coming Soon! 🎉',
      'info'
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <div className="mr-4 flex">
          <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold text-2xl tracking-wide sm:inline-block">
              Kolektt
            </span>
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="flex-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={`/${lang}/bpm-collect`}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          BPM Collect
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Smart platform for Record Collectors with AI
                          recognition
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Kolektt Hub" onClick={handleHubClick}>
                    Manage and trade your collection
                  </ListItem>
                  <ListItem href={`/${lang}/about`} title="About">
                    Learn more about our platform
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={`/${lang}/bpm-collect`} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/bpm-collect") &&
                      "bg-accent text-accent-foreground",
                  )}
                >
                  BPM Collect
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "cursor-pointer",
                  isActive("/hub") && "bg-accent text-accent-foreground",
                )}
                onClick={handleHubClick}
              >
                Kolektt Hub
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={`/${lang}/about`} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    isActive("/about") && "bg-accent text-accent-foreground",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side - Enter Hub button */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button onClick={handleHubClick}>
            Enter Kolektt Hub
          </Button>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
