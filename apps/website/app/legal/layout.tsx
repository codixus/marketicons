import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | MarketIcons",
    default: "Legal - MarketIcons",
  },
  description:
    "Legal information, terms of use, privacy policy, and licensing for MarketIcons.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto space-y-8 text-foreground">
        {children}
      </div>
    </div>
  );
}
