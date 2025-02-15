import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Suspense } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Bold.ttf",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marketicons.dev"),
  title: {
    default:
      "MarketIcons - Stock Market Icons Library for React & React Native",
    template: "%s | MarketIcons",
  },
  description:
    "High-quality Borsa Istanbul (BIST) company logos for React and React Native projects. Modern, easy-to-use, and TypeScript ready.",
  keywords: [
    "BIST",
    "Borsa Istanbul",
    "company logos",
    "React icons",
    "React Native icons",
    "Turkish stock market",
    "stock market icons",
    "TypeScript icons",
  ],
  authors: [{ name: "Codixus", url: "https://marketicons.dev" }],
  creator: "Codixus",
  publisher: "Codixus",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marketicons.dev",
    title: "MarketIcons - Stock Market Icons Library for React & React Native",
    description:
      "High-quality Borsa Istanbul (BIST) company logos for React and React Native projects. Modern, easy-to-use, and TypeScript ready.",
    siteName: "MarketIcons",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketIcons - Stock Market Icons Library for React & React Native",
    description:
      "High-quality Borsa Istanbul (BIST) company logos for React and React Native projects. Modern, easy-to-use, and TypeScript ready.",
    creator: "@codixus",
  },
  alternates: {
    canonical: "https://marketicons.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(montserrat.variable, satoshi.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans")}>
        <Suspense>
          <Header />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
