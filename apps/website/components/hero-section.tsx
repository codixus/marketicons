"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23234990\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <a
              href="https://github.com/codixus/marketicons"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium inline-flex items-center hover:bg-primary/20 transition-colors"
            >
              <span>Now on GitHub</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Turkish Stock Market Icons
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Comprehensive collection of BIST company logos, ready to use in your
            projects. Modern React and React Native components with TypeScript
            support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/codixus/marketicons"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-muted-foreground"
          >
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/50 rounded-lg border">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>SVG Icons Library</span>
            </div>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/50 rounded-lg border">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span>TypeScript Ready</span>
            </div>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/50 rounded-lg border">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span>React & React Native</span>
            </div>
            <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/50 rounded-lg border">
              <div className="w-2 h-2 rounded-full bg-orange-400" />
              <span>Regular Updates</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
