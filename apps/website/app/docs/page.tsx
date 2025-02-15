"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const installCode = {
  react: `# npm
npm install @marketicons/bist-react

# yarn
yarn add @marketicons/bist-react

# pnpm
pnpm add @marketicons/bist-react`,
  reactNative: `# npm
npm install @marketicons/bist-react-native react-native-svg

# yarn
yarn add @marketicons/bist-react-native react-native-svg

# pnpm
pnpm add @marketicons/bist-react-native react-native-svg

# Note: react-native-svg library is required
# For iOS, don't forget to run pod install
cd ios && pod install && cd ..`,
};

const reactCode = `import { BistIcon } from '@marketicons/bist-react'

function App() {
  return (
    <div>
      <BistIcon name="THYAO" size={32} />
      <BistIcon name="GARAN" size={48} />
    </div>
  )
}`;

const reactNativeCode = `import { BistIcon } from '@marketicons/bist-react-native'

function App() {
  return (
    <View>
      <BistIcon name="THYAO" size={32} />
      <BistIcon name="GARAN" size={48} />
    </View>
  )
}`;

export default function DocsPage() {
  const [selectedTab, setSelectedTab] = useState<string>("react");

  return (
    <main className="container mx-auto px-4 pt-24 pb-16 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to use MarketIcons in your React and React Native projects.
        </p>

        <div className="space-y-12">
          {/* Installation */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <p className="text-muted-foreground mb-4">
              Install the package using your preferred package manager:
            </p>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="react">React</TabsTrigger>
                <TabsTrigger value="react-native">React Native</TabsTrigger>
              </TabsList>
              <TabsContent value="react">
                <CodeBlock code={installCode.react} language="bash" />
              </TabsContent>
              <TabsContent value="react-native">
                <CodeBlock code={installCode.reactNative} language="bash" />
              </TabsContent>
            </Tabs>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="react">React</TabsTrigger>
                <TabsTrigger value="react-native">React Native</TabsTrigger>
              </TabsList>
              <TabsContent value="react">
                <div className="rounded-lg border p-4">
                  <p className="text-muted-foreground mb-4">
                    Import and use the BistIcon component in your React
                    application:
                  </p>
                  <CodeBlock code={reactCode} language="typescript" />
                </div>
              </TabsContent>
              <TabsContent value="react-native">
                <div className="rounded-lg border p-4">
                  <p className="text-muted-foreground mb-4">
                    Import and use the BistIcon component in your React Native
                    application:
                  </p>
                  <CodeBlock code={reactNativeCode} language="typescript" />
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* API Reference */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
            <div className="prose dark:prose-invert max-w-none">
              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList>
                  <TabsTrigger value="react">React Props</TabsTrigger>
                  <TabsTrigger value="react-native">
                    React Native Props
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="react">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-semibold mb-4">
                      BistIcon Props (React)
                    </h3>
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
                          <td className="py-2">name</td>
                          <td className="py-2 text-purple-500">string</td>
                          <td className="py-2">-</td>
                          <td className="py-2">
                            BIST company code (e.g., "THYAO")
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">size</td>
                          <td className="py-2 text-purple-500">number</td>
                          <td className="py-2">24</td>
                          <td className="py-2">Icon size in pixels</td>
                        </tr>
                        <tr>
                          <td className="py-2">className</td>
                          <td className="py-2 text-purple-500">string</td>
                          <td className="py-2">-</td>
                          <td className="py-2">Additional CSS classes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                <TabsContent value="react-native">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-xl font-semibold mb-4">
                      BistIcon Props (React Native)
                    </h3>
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
                          <td className="py-2">name</td>
                          <td className="py-2 text-purple-500">string</td>
                          <td className="py-2">-</td>
                          <td className="py-2">
                            BIST company code (e.g., "THYAO")
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">size</td>
                          <td className="py-2 text-purple-500">number</td>
                          <td className="py-2">24</td>
                          <td className="py-2">Icon size in pixels</td>
                        </tr>
                        <tr>
                          <td className="py-2">style</td>
                          <td className="py-2 text-purple-500">ViewStyle</td>
                          <td className="py-2">-</td>
                          <td className="py-2">Additional styles</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Examples</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6 overflow-hidden">
                <h3 className="text-xl font-semibold mb-4">
                  React with Tailwind CSS
                </h3>
                <div className="w-full overflow-x-auto">
                  <CodeBlock
                    code={`<BistIcon 
  name="THYAO"
  size={32}
  className="group-hover:scale-110 transition-transform"
/>`}
                    language="typescript"
                  />
                </div>
              </div>
              <div className="rounded-lg border p-6 overflow-hidden">
                <h3 className="text-xl font-semibold mb-4">
                  React Native with Styles
                </h3>
                <div className="w-full overflow-x-auto">
                  <CodeBlock
                    code={`<BistIcon 
  name="GARAN"
  size={48}
  style={{ marginBottom: 8 }}
/>`}
                    language="typescript"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Installation Tabs */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Package Installation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6 overflow-hidden">
                <h3 className="text-xl font-semibold mb-4">NPM</h3>
                <div className="w-full overflow-x-auto">
                  <CodeBlock
                    code={`# React
npm install @marketicons/bist-react

# React Native
npm install @marketicons/bist-react-native`}
                    language="bash"
                  />
                </div>
              </div>
              <div className="rounded-lg border p-6 overflow-hidden">
                <h3 className="text-xl font-semibold mb-4">Yarn</h3>
                <div className="w-full overflow-x-auto">
                  <CodeBlock
                    code={`# React
yarn add @marketicons/bist-react

# React Native
yarn add @marketicons/bist-react-native`}
                    language="bash"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
