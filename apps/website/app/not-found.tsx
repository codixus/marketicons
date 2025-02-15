"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center space-y-8 animate-in fade-in-50 slide-in-from-bottom-8 duration-500">
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you are looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <a
                href="mailto:info@marketicons.dev"
                className="text-primary hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
