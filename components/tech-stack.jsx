"use client";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiPrismic,
  SiContentful,
  SiFirebase,
  SiMysql,
  SiGit,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";
import { GradientCard } from "./gradient-card";

const CATEGORIES = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#EDEDEF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    label: "CMS",
    items: [
      { name: "Prismic", icon: SiPrismic, color: "#5163BA" },
      { name: "Contentful", icon: SiContentful, color: "#2478CC" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#EDEDEF" },
    ],
  },
];

/**
 * @returns {JSX.Element}
 */
export const TechStack = () => (
  <section id="stack" className="px-8 py-20 lg:px-14 lg:py-28">
    <FadeIn>
      <SectionLabel>Tech Expertise</SectionLabel>
    </FadeIn>

    <FadeIn delay={0.05}>
      <h2 className="mb-12 font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
        Tools of the Trade
      </h2>
    </FadeIn>

    <div className="space-y-8">
      {CATEGORIES.map((category, ci) => (
        <FadeIn key={category.label} delay={0.08 + ci * 0.06}>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              {category.label}
            </p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {category.items.map((tech, ti) => (
                <TechCard key={tech.name} {...tech} delay={ti * 0.04} />
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

/**
 * @param {{ name: string, icon: React.ComponentType, color: string, delay: number }} props
 * @returns {JSX.Element}
 */
const TechCard = ({ name, icon: Icon, color }) => (
  <GradientCard>
    <div className="flex flex-col items-center gap-2.5 px-3 py-4">
      <Icon className="h-6 w-6 flex-shrink-0" style={{ color }} aria-hidden="true" />
      <span className="font-mono text-[11px] text-slate-400">{name}</span>
    </div>
  </GradientCard>
);
