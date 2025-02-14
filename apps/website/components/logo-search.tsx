"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const demoLogos = [
  "THYAO", "GARAN", "AKBNK", "EREGL", "ASELS",
  "KCHOL", "TUPRS", "YKBNK", "SISE", "BIMAS"
]

export function LogoSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLogos = demoLogos.filter(logo => 
    logo.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="py-24" id="search">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Search Icons
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect icon for your project from our comprehensive collection of BIST company logos.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder="Search by company code (e.g., THYAO)"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {filteredLogos.map((logo, index) => (
            <motion.div
              key={logo}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-4 border rounded-lg bg-background hover:shadow-md transition-shadow"
            >
              <div className="aspect-square rounded-lg bg-muted flex items-center justify-center mb-2">
                <span className="text-2xl font-semibold text-muted-foreground">
                  {logo}
                </span>
              </div>
              <p className="text-sm text-center text-muted-foreground">
                {logo}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}