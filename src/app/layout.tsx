import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BoboBot } from "@/components/layout/BoboBot";
import { Sidebar } from "@/components/layout/Sidebar";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.avatarUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full">
        <Sidebar />
        <main className="sm:pl-60">
          <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10">
            {children}
          </div>
        </main>
        <BoboBot />
      </body>
    </html>
  );
}
