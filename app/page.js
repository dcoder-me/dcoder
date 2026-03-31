import { Nav } from "@/components/nav";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { Hero } from "@/components/hero";
import { Expertise } from "@/components/expertise";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
