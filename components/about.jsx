"use client";

import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

/**
 * @returns {JSX.Element}
 */
export const About = () => (
  <section id="about" className="px-8 py-20 lg:px-14 lg:py-28">
    <div className="max-w-2xl">
      <FadeIn>
        <SectionLabel>About Me</SectionLabel>
      </FadeIn>

      <div className="space-y-5">
        <FadeIn delay={0.1}>
          <p className="text-base leading-relaxed text-slate-400">
            I'm a web developer based in Kolkata, India, focused on building
            modern, performant web applications. Over the past four years at{" "}
            <span className="text-slate-200">Favfly</span>, I've shipped
            production-grade websites for businesses using React, Next.js, and
            headless CMS platforms — turning complex requirements into clean,
            maintainable code.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base leading-relaxed text-slate-400">
            My work sits at the intersection of frontend engineering and content
            architecture. I specialize in wiring{" "}
            <span className="text-slate-200">
              headless CMS backends (Prismic, Contentful)
            </span>{" "}
            to modern React frontends — a workflow that demands both technical
            depth and an understanding of how content teams operate.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-base leading-relaxed text-slate-400">
            Every project I deliver is fast, accessible, and built to scale.
            When I'm not building for clients, I'm exploring the broader
            JavaScript ecosystem and pushing my craft forward.
          </p>
        </FadeIn>
      </div>
    </div>
  </section>
);
