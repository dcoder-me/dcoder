import { Nav } from "@/components/nav";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
