"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: March 15, 2024
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using MarketIcons (marketicons.dev), you agree to
              be bound by these Terms of Use. If you do not agree to these
              terms, please do not use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Use of Service</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Permitted Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                You may use MarketIcons to access and download BIST company
                icons for use in your projects, subject to our license terms and
                any applicable third-party rights.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Prohibited Use</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>
                  Using the icons in a way that violates any applicable laws or
                  regulations
                </li>
                <li>Redistributing the icons as a standalone package</li>
                <li>Claiming ownership of the icons or our service</li>
                <li>
                  Using the service in any way that could damage or disable our
                  systems
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The MarketIcons service, including but not limited to its
              codebase, design, and functionality, is owned by us. The BIST
              company logos and trademarks remain the property of their
              respective owners.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              MarketIcons is provided "as is" without any warranties, express or
              implied. We do not guarantee the accuracy, completeness, or
              reliability of the icons or our service.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We shall not be liable for any damages arising from the use or
              inability to use our service, including but not limited to direct,
              indirect, incidental, or consequential damages.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes by posting the new terms on
              this page.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Use, please contact
              us at{" "}
              <a
                href="mailto:info@marketicons.dev"
                className="text-primary hover:text-primary/80 font-medium"
              >
                info@marketicons.dev
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
