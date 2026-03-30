import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-navy-900 text-slate-200`}
      >
        {children}
      </body>
    </html>
  );
}
