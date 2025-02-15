"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: March 15, 2024
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              MarketIcons ("we," "us," or "our") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you visit our website
              (marketicons.dev) and use our services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Information You Provide</h3>
              <p className="text-muted-foreground leading-relaxed">
                We do not collect any personal information unless you explicitly
                provide it to us.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Automatically Collected Information
              </h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>
                  Usage Data: We may collect information about how you interact
                  with our website, including pages visited and time spent.
                </li>
                <li>
                  Technical Data: This includes your IP address, browser type,
                  device information, and operating system.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Improve and optimize our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Maintain the security and stability of our services</li>
              <li>Respond to your inquiries or requests</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate security measures to protect your
              information. However, no method of transmission over the internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services for analytics and hosting. These
              services have their own privacy policies, and we recommend
              reviewing them.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
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
