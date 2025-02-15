"use client";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { LogoSearch } from "@/components/logo-search";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <LogoSearch />
    </>
  );
}
