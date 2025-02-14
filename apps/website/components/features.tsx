"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Zap } from "lucide-react"

const features = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "TypeScript Ready",
    description: "Built with TypeScript for better developer experience and type safety."
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Zero Dependencies",
    description: "Lightweight and efficient with no external runtime dependencies."
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Multiple Variants",
    description: "Choose from default, colored, or monochrome styles for each icon."
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function Features() {
  return (
    <section className="py-24 bg-muted/50" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 bg-background rounded-lg border transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}