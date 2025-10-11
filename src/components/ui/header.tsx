"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/components/ui";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  lang: string;
}

function KolekttHeader({ lang }: HeaderProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Kolektt</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                  <ListItem href={`/${lang}/hub`} title="Kolektt Hub">
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
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  BPM Collect
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={`/${lang}/hub`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kolektt Hub
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={`/${lang}/about`} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Logo */}
        <div className="flex md:hidden">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <span className="font-bold">Kolektt</span>
          </Link>
        </div>

        {/* Right side - Actions */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href={`/${lang}/bpm-collect`}>Try Demo</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${lang}/hub`}>Sign In</Link>
          </Button>
          <Button asChild>
            <Link href={`/${lang}/hub`}>Get Started</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            size="icon"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href={`/${lang}/bpm-collect`}
                className="font-medium transition-colors hover:text-foreground/80"
                onClick={() => setOpen(false)}
              >
                BPM Collect
              </Link>
              <Link
                href={`/${lang}/hub`}
                className="font-medium transition-colors hover:text-foreground/80"
                onClick={() => setOpen(false)}
              >
                Kolektt Hub
              </Link>
              <Link
                href={`/${lang}/about`}
                className="font-medium transition-colors hover:text-foreground/80"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
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

export { KolekttHeader };
