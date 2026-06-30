import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rayane-bahmed.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    "Rayane Bahmed",
    "Développeur Full-Stack",
    "MIAGE",
    "Cybersécurité",
    "Portfolio",
    "Alternance",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: `${profile.name} | Portfolio`,
    title: `${profile.name} | Portfolio`,
    description: profile.bio,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Portfolio`,
    description: profile.bio,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <AccessibilityPanel />
      </body>
    </html>
  );
}
