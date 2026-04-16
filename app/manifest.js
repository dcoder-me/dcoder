export default function manifest() {
  return {
    name: "Darpan Chakraborty — Full-Stack Developer",
    short_name: "DCoder",
    description:
      "Full-stack web and mobile developer building scalable apps with React, Next.js, and React Native.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
