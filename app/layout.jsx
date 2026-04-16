import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/contact";
import { MotionProvider } from "@/components/motion-provider";
import { SwRegister } from "./sw-register";
import "./globals.css";

const SmoothScroll = dynamic(
  () => import("@/components/smooth-scroll").then((mod) => mod.SmoothScroll),
  { ssr: false }
);

const CursorSpotlight = dynamic(
  () =>
    import("@/components/cursor-spotlight").then((mod) => mod.CursorSpotlight),
  { ssr: false }
);

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
    "Full-stack web and mobile developer building scalable applications with React, Next.js, and React Native. Specializing in headless CMS, SaaS products, and AI-integrated solutions.",
  keywords: [
    "Darpan Chakraborty",
    "full-stack developer",
    "React",
    "Next.js",
    "React Native",
    "mobile developer",
    "SaaS",
    "Prisma",
    "PostgreSQL",
    "headless CMS",
    "AI",
    "portfolio",
  ],
  authors: [{ name: "Darpan Chakraborty" }],
  openGraph: {
    title: "Darpan Chakraborty — Full-Stack Web & Mobile Developer",
    description:
      "Building scalable web and mobile applications with React, Next.js, and React Native.",
    url: "https://dcoder.me",
    siteName: "dcoder.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Chakraborty — Full-Stack Web & Mobile Developer",
    description:
      "Building scalable web and mobile applications with React, Next.js, and React Native.",
    creator: "@dcoder_me",
  },
  metadataBase: new URL("https://dcoder.me"),
  themeColor: "#050505",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DCoder",
  },
  icons: {
    apple: "/icons/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased bg-surface text-content`}
      >
        <MotionProvider>
          <SwRegister />
          <SmoothScroll />
          <CursorSpotlight />
          <Nav />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
