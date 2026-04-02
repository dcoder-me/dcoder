import { Hero } from "@/components/hero";
import { Expertise } from "@/components/expertise";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <TechStack />
      <Experience />
      <Contact />
    </>
  );
}
