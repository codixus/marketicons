"use client";

import { motion } from "framer-motion";

export default function LicensePage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose dark:prose-invert max-w-3xl mx-auto"
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">License</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: March 15, 2024
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">MIT License</h2>
            <p className="text-muted-foreground">
              Copyright (c) 2024 MarketIcons
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Logo Usage Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              The BIST company logos available through MarketIcons are
              trademarks and property of their respective owners. Their use is
              subject to the following conditions:
            </p>

            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>
                Logos must be used in their original form without modification
              </li>
              <li>
                Usage must not imply endorsement by the respective companies
              </li>
              <li>
                Logos must be used in compliance with their owners' trademark
                guidelines
              </li>
              <li>
                Usage must be for reference or identification purposes only
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Additional Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              While the MarketIcons software is open source under the MIT
              license, the BIST company logos are subject to their respective
              owners' intellectual property rights. Users are responsible for
              ensuring their use of these logos complies with all applicable
              trademark laws and guidelines.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our license terms, please contact
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
