"use client";

import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AccessibilityProvider>
          <Header />
          <main className="pt-28">{children}</main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
