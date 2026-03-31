import { CursorSpotlight } from "@/components/cursor-spotlight";
import { Sidebar } from "@/components/sidebar";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { AvailabilityCta } from "@/components/availability-cta";
import { Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <CursorSpotlight />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "-15%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(34,211,238,0.035) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(167,139,250,0.035) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Mobile nav */}
      <Nav />

      {/* Two-column layout */}
      <div className="relative z-10 lg:flex">
        <Sidebar />

        {/* Right scrollable content */}
        <main className="min-w-0 flex-1 pt-[57px] lg:pl-[340px] lg:pt-0">
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Experience />
          <AvailabilityCta />
          <Footer />
        </main>
      </div>
    </>
  );
}
