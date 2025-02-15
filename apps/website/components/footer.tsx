"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="MarketIcons Logo"
                width={32}
                height={32}
                className="w-12 h-12  "
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-primary">MarketIcons</h3>
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
            <p className="text-sm text-muted-foreground">
              High-quality BIST company logos for your React and React Native
              projects.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/icons"
                  className="hover:text-foreground transition-colors"
                >
                  Icons
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/codixus/marketicons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/legal/license"
                  className="hover:text-foreground transition-colors"
                >
                  License
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@marketicons.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@marketicons.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground font-satoshi">
          <a
            href="https://codixus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤︎ by Codixus
          </a>
        </div>
      </div>
    </footer>
  );
}
