"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">MarketIcons</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/docs" className="text-foreground/80 hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#search" className="text-foreground/80 hover:text-foreground transition-colors">
              Search
            </Link>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/codixus/marketicons" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
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
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/docs"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="#features"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#search"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Search
              </Link>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/codixus/marketicons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
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
  )
}