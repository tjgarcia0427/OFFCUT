import type { Metadata } from "next";
import { Space_Grotesk, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://joinoffcut.com"
  ),
  title: {
    default: "OFFCUT — custom streetwear, made on commission",
    template: "%s — OFFCUT",
  },
  description:
    "Brief a designer. Get a one-of-one piece made for you. OFFCUT is the commission platform for independent streetwear designers.",
  openGraph: {
    type: "website",
    siteName: "OFFCUT",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@joinoffcut",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink selection:bg-signal selection:text-ink">
        {children}
      </body>
    </html>
  );
}
