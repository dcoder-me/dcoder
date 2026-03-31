"use client";

import { useState } from "react";

/**
 * Card wrapper that shows a cyan→violet gradient border on hover.
 * @param {{ children: React.ReactNode, className?: string }} props
 * @returns {JSX.Element}
 */
export const GradientCard = ({ children, className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`rounded-xl transition-all duration-300 ${className}`}
      style={{
        background: hovered
          ? `linear-gradient(#111115, #111115) padding-box, linear-gradient(135deg, #22D3EE, #A78BFA) border-box`
          : `linear-gradient(#111115, #111115) padding-box, linear-gradient(135deg, #1A1A22, #1A1A22) border-box`,
        border: "1px solid transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
};
