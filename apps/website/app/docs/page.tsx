"use client"

import { motion } from "framer-motion"
import { Header } from '@/components/header'
import { CodeBlock } from '@/components/code-block'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const installCode = `npm install marketicons
# or
yarn add marketicons
# or
pnpm add marketicons`

const usageCode = `import { MarketIcon } from 'marketicons'

function App() {
  return (
    <div>
      <MarketIcon code="THYAO" size={32} />
      <MarketIcon code="GARAN" variant="colored" />
      <MarketIcon code="AKBNK" variant="monochrome" />
    </div>
  )
}`

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn how to install and use MarketIcons in your projects.
          </p>

          <div className="space-y-12">
            {/* Installation */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Installation</h2>
              <CodeBlock code={installCode} language="bash" />
            </section>

            {/* Usage */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Usage</h2>
              <p className="text-muted-foreground mb-4">
                Import and use the MarketIcon component in your React application:
              </p>
              <CodeBlock code={usageCode} language="typescript" />
            </section>

            {/* API Reference */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <div className="prose dark:prose-invert max-w-none">
                <Tabs defaultValue="props" className="w-full">
                  <TabsList>
                    <TabsTrigger value="props">Props</TabsTrigger>
                    <TabsTrigger value="types">Types</TabsTrigger>
                  </TabsList>
                  <TabsContent value="props">
                    <div className="rounded-lg border p-4">
                      <h3 className="text-xl font-semibold mb-4">MarketIcon Props</h3>
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="text-left py-2">Prop</th>
                            <th className="text-left py-2">Type</th>
                            <th className="text-left py-2">Default</th>
                            <th className="text-left py-2">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2">code</td>
                            <td className="py-2 text-purple-500">string</td>
                            <td className="py-2">-</td>
                            <td className="py-2">BIST company code (e.g., "THYAO")</td>
                          </tr>
                          <tr>
                            <td className="py-2">size</td>
                            <td className="py-2 text-purple-500">number</td>
                            <td className="py-2">24</td>
                            <td className="py-2">Icon size in pixels</td>
                          </tr>
                          <tr>
                            <td className="py-2">variant</td>
                            <td className="py-2 text-purple-500">"default" | "colored" | "monochrome"</td>
                            <td className="py-2">"default"</td>
                            <td className="py-2">Visual style of the icon</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="types">
                    <div className="rounded-lg border p-4">
                      <h3 className="text-xl font-semibold mb-4">Type Definitions</h3>
                      <CodeBlock
                        code={`type MarketIconVariant = "default" | "colored" | "monochrome"

interface MarketIconProps {
  code: string
  size?: number
  variant?: MarketIconVariant
  className?: string
}`}
                        language="typescript"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>

            {/* Examples */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Examples</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
                  <CodeBlock
                    code={`<MarketIcon code="THYAO" />`}
                    language="typescript"
                  />
                </div>
                <div className="rounded-lg border p-6">
                  <h3 className="text-xl font-semibold mb-4">Custom Size</h3>
                  <CodeBlock
                    code={`<MarketIcon 
  code="GARAN"
  size={48}
/>`}
                    language="typescript"
                  />
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
}