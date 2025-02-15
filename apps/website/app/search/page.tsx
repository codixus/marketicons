import type { Metadata } from "next";
import { LogoSearch } from "@/components/logo-search";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Search BIST Icons - Find Company Logos",
  description:
    "Search and browse through a comprehensive collection of Borsa Istanbul (BIST) company logos. Download high-quality SVG icons for your projects.",
  openGraph: {
    title: "Search BIST Icons - Find Company Logos",
    description:
      "Search and browse through a comprehensive collection of Borsa Istanbul (BIST) company logos. Download high-quality SVG icons for your projects.",
  },
};

export default function SearchPage() {
  return <LogoSearch />;
}
