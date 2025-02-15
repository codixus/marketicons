"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Search,
  Download,
  Zap,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "React & React Native Support",
    description:
      "Modern components for both web and mobile applications. Ensure type safety with TypeScript support.",
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "Advanced Search",
    description:
      "Quick search by company code or name. Instantly access logos of all companies listed on Borsa Istanbul.",
  },
  {
    icon: <Download className="h-10 w-10" />,
    title: "SVG Download",
    description:
      "Download all logos in high-quality SVG format. Use at any size without quality loss.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Easy Integration",
    description:
      "Add logos to your project with a single line of code. Get started quickly with comprehensive documentation.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Responsive Design",
    description:
      "Optimized SVG icons compatible with all screen sizes. Use seamlessly in your mobile applications.",
  },
  {
    icon: <RefreshCw className="h-10 w-10" />,
    title: "Regular Updates",
    description:
      "Regular updates tracking changes in Borsa Istanbul. Always use up-to-date logos.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            MarketIcons offers many features that make it easy to use Borsa
            Istanbul company logos in your projects.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl border"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
