"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="MarketIcons Logo"
                width={32}
                height={32}
                className="w-12 h-12"
              />
            </Link>
            <div className="flex flex-col items-start">
              <Link href="/">
                <span className="font-bold text-xl text-primary">
                  MarketIcons
                </span>
              </Link>
              <a
                href="https://codixus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-satoshi"
              >
                by codixus
              </a>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/docs"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/icons"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Icons
            </Link>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/codixus/marketicons"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/80 backdrop-blur-md border-t">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                href="/docs"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/icons"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Icons
              </Link>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/codixus/marketicons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
