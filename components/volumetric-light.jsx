/**
 * Decorative volumetric light beam rendered behind hero content.
 * CSS-only, no JS, pointer-events none.
 * @returns {JSX.Element}
 */
export const VolumetricLight = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    {/* Wide cone beam */}
    <div
      style={{
        position: "absolute",
        top: "-5%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "130%",
        height: "65%",
        background:
          "conic-gradient(from 180deg at 50% -30%, transparent 25deg, rgba(34,211,238,0.055) 45deg, rgba(167,139,250,0.03) 75deg, transparent 95deg)",
        filter: "blur(55px)",
      }}
    />
    {/* Core bright glow at top */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "500px",
        height: "320px",
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.09) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)",
        filter: "blur(25px)",
      }}
    />
    {/* Subtle floor reflection */}
    <div
      style={{
        position: "absolute",
        bottom: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "280px",
        height: "80px",
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.04) 0%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  </div>
);
