import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { Footer } from "@/components/contact";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: "DCoder",
  description:
    "Full-stack web developer building scalable applications with React, Next.js, and modern cloud architecture. Specializing in headless CMS, SaaS products, and AI-integrated solutions.",
  keywords: [
    "Darpan Chakraborty",
    "full-stack developer",
    "React",
    "Next.js",
    "SaaS",
    "Prisma",
    "PostgreSQL",
    "headless CMS",
    "AI",
    "portfolio",
  ],
  authors: [{ name: "Darpan Chakraborty" }],
  openGraph: {
    title: "Darpan Chakraborty — Full-Stack Web Developer",
    description:
      "Building scalable web applications with React, Next.js, and modern cloud architecture.",
    url: "https://dcoder.me",
    siteName: "dcoder.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Chakraborty — Full-Stack Web Developer",
    description:
      "Building scalable web applications with React, Next.js, and modern cloud architecture.",
    creator: "@dcoder_me",
  },
  metadataBase: new URL("https://dcoder.me"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased bg-surface text-content`}
      >
        <SmoothScroll />
        <CursorSpotlight />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
