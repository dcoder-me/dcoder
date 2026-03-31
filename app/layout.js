import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Darpan Chakraborty — Web Developer",
  description:
    "Web developer building modern, high-performance applications with React, Next.js, and headless CMS architecture.",
  keywords: [
    "Darpan Chakraborty",
    "web developer",
    "React",
    "Next.js",
    "headless CMS",
    "Prismic",
    "Contentful",
    "portfolio",
  ],
  authors: [{ name: "Darpan Chakraborty" }],
  openGraph: {
    title: "Darpan Chakraborty — Web Developer",
    description:
      "Building modern, high-performance web applications with React, Next.js, and headless CMS architecture.",
    url: "https://dcoder.me",
    siteName: "dcoder.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Chakraborty — Web Developer",
    description:
      "Building modern, high-performance web applications with React, Next.js, and headless CMS architecture.",
    creator: "@dcoder_me",
  },
  metadataBase: new URL("https://dcoder.me"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${jakarta.variable} ${jetbrainsMono.variable} font-body antialiased bg-void-950 text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
