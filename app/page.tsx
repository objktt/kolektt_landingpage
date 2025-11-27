"use client";

import HeroBento from "@/components/sections/HeroBento";
import Snap from "@/components/sections/Snap";
import Collect from "@/components/sections/Collect";
import Trade from "@/components/sections/Trade";
import Technology from "@/components/sections/Technology";
import Pricing from "@/components/sections/Pricing";
import EarlyBird from "@/components/sections/EarlyBird";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <main className={`min-h-screen ${theme === "dark" ? "bg-black" : "bg-background"} text-primary selection:bg-accent selection:text-white`}>
      <HeroBento />
      <Snap />
      <Collect />
      <Trade />
      <Technology />
      <Pricing />
      <EarlyBird />
      <Testimonials />
      <CTA />
    </main>
  );
}
