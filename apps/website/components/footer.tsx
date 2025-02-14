"use client"

import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-bold text-lg mb-4">MarketIcons</h3>
            <p className="text-muted-foreground">
              Beautiful icons for Turkish stock market companies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#search" className="text-muted-foreground hover:text-foreground transition-colors">
                  Icon Search
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/codixus/marketicons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/codixus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© 2024 MarketIcons. Made with ❤️ by Codixus</p>
        </div>
      </div>
    </footer>
  )
}