"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  Copy,
  Check,
  FileCode,
  Image,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Highlight, themes } from "prism-react-renderer";
import icons from "@marketicons/bist";
import { BistIcon } from "@marketicons/bist-react";
import { getMarketInfo, Exchange } from "@marketicons/markets";

const ITEMS_PER_PAGE = 50;

const getReactCode = (
  icon: string
) => `import { BistIcon } from "@marketicons/bist-react";

export function MyComponent() {
  return (
    <BistIcon name="${icon}" size={24} />
  );
}`;

const getReactNativeCode = (
  icon: string
) => `import { BistIcon } from "@marketicons/bist-react-native";

export function MyComponent() {
  return (
    <BistIcon name="${icon}" size={24} />
  );
}`;

const formatSVGCode = (svgContent: string) => {
  // Split SVG content into lines
  const lines = svgContent
    .replace(/></g, ">\n<") // Add new line between tags
    .replace(/\/>/g, "/>\n") // Add new line after self-closing tags
    .split("\n")
    .map((line) => line.trim()) // Trim each line
    .filter((line) => line.length > 0); // Remove empty lines

  // Indent nested structure
  let indent = 0;
  let formattedCode = "";

  lines.forEach((line) => {
    // Decrease indent for closing or self-closing tags
    if (line.startsWith("</") || line.endsWith("/>")) {
      if (line.startsWith("</")) indent--;
      formattedCode += "  ".repeat(Math.max(0, indent)) + line + "\n";
      return;
    }

    // Add line and increase indent for opening tags
    formattedCode += "  ".repeat(indent) + line + "\n";
    if (line.startsWith("<") && !line.endsWith("/>")) indent++;
  });

  return formattedCode.trim();
};

export function LogoSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("react");
  const [selectedExchange, setSelectedExchange] = useState<Exchange>(
    Exchange.BIST
  );

  const allIcons = Object.keys(icons);
  const filteredIcons = allIcons.filter(
    (icon) =>
      icon.toLowerCase().includes(searchQuery.toLowerCase()) ||
      getMarketInfo(selectedExchange, icon)
        ?.name?.toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredIcons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentIcons = filteredIcons.slice(startIndex, endIndex);

  const handleCopyCode = (code: string, tab: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const handleDownloadSVG = (icon: string) => {
    const svgContent = icons[icon].content;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${icon}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyMarketCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderCode = (code: string, language: string) => (
    <Highlight
      theme={themes.github}
      code={language === "markup" ? formatSVGCode(code) : code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className="relative p-4 rounded-lg bg-muted font-mono text-sm overflow-x-auto max-w-[100vw]"
          style={style}
        >
          <code className="inline-block min-w-full">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className="whitespace-pre"
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );

  return (
    <section className="py-24" id="search">
      <div className="container mx-auto px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Search Icons</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect icon for your project from our comprehensive
            collection of stock market company logos.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto mb-12 space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search by company code or name"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <Select
              value={selectedExchange}
              onValueChange={(value) => {
                setSelectedExchange(value as Exchange);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select exchange" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={Exchange.BIST}>
                  Borsa Istanbul (BIST)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Showing {currentIcons.length} results from {filteredIcons.length}{" "}
            icons
          </p>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {currentIcons.map((icon) => {
            const info = getMarketInfo(selectedExchange, icon);
            return (
              <motion.div
                key={icon}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-4 border rounded-lg bg-background hover:bg-accent/50 transition-colors group cursor-pointer"
                onClick={() => setSelectedIcon(icon)}
              >
                <div className="aspect-square rounded-lg bg-muted flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <BistIcon
                    name={icon}
                    size={120}
                    className="text-foreground rounded-lg"
                  />
                </div>
                <p className="font-medium text-center">{icon}</p>
                {info?.name && (
                  <p className="text-sm text-center text-muted-foreground mt-1 line-clamp-2">
                    {info.name}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        <Dialog
          open={!!selectedIcon}
          onOpenChange={() => {
            setSelectedIcon(null);
            setCopiedCode(false);
          }}
        >
          <DialogContent className="max-w-4xl w-[90vw] rounded-lg md:rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-4">
                {selectedIcon && (
                  <>
                    <BistIcon
                      name={selectedIcon}
                      size={32}
                      className="text-foreground"
                    />
                    <div className="flex items-center gap-2">
                      <span>{selectedIcon}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6"
                        onClick={(e) => {
                          e.preventDefault();
                          selectedIcon && handleCopyMarketCode(selectedIcon);
                        }}
                      >
                        {copiedCode ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground text-left">
                {selectedIcon &&
                  getMarketInfo(selectedExchange, selectedIcon)?.name}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6">
              <Tabs
                defaultValue="react"
                value={selectedTab}
                onValueChange={setSelectedTab}
              >
                <TabsList className="mb-4">
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="react-native">React Native</TabsTrigger>
                  <TabsTrigger value="svg">SVG</TabsTrigger>
                </TabsList>

                <TabsContent value="react" className="space-y-4">
                  <div className="relative rounded-lg border overflow-x-scroll max-w-[80vw]">
                    {selectedIcon &&
                      renderCode(getReactCode(selectedIcon), "tsx")}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        selectedIcon &&
                        handleCopyCode(getReactCode(selectedIcon), "react")
                      }
                    >
                      {copiedTab === "react" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="react-native" className="space-y-4">
                  <div className="relative rounded-lg border overflow-x-scroll max-w-[80vw]">
                    {selectedIcon &&
                      renderCode(getReactNativeCode(selectedIcon), "tsx")}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        selectedIcon &&
                        handleCopyCode(
                          getReactNativeCode(selectedIcon),
                          "react-native"
                        )
                      }
                    >
                      {copiedTab === "react-native" ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="svg" className="space-y-4">
                  <div className="grid gap-4">
                    <div className="relative">
                      <div className="aspect-square w-full max-w-[200px] mx-auto rounded-lg bg-muted flex items-center justify-center">
                        {selectedIcon && (
                          <BistIcon
                            name={selectedIcon}
                            size={120}
                            className="text-foreground"
                          />
                        )}
                      </div>
                      <div className="flex justify-center gap-2 mt-4">
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() =>
                            selectedIcon && handleDownloadSVG(selectedIcon)
                          }
                          className="flex items-center gap-2"
                        >
                          <Image className="h-4 w-4" />
                          <span>Download SVG</span>
                        </Button>
                      </div>
                    </div>
                    <div className="relative rounded-lg border overflow-hidden">
                      <div className="text-sm font-medium p-2 text-foreground flex justify-between items-center border-b bg-muted">
                        <span>SVG Code:</span>
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() =>
                            selectedIcon &&
                            handleCopyCode(icons[selectedIcon].content, "svg")
                          }
                          className="flex items-center gap-2"
                        >
                          {copiedTab === "svg" ? (
                            <>
                              <Check className="h-4 w-4" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              <span>Copy SVG</span>
                            </>
                          )}
                        </Button>
                      </div>
                      {selectedIcon &&
                        renderCode(icons[selectedIcon].content, "markup")}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
