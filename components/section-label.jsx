/**
 * Minimal section header with mono label and a decorative line.
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export const SectionLabel = ({ children }) => (
  <div className="mb-10 flex items-center gap-4">
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
      {children}
    </span>
    <span className="h-px flex-1 bg-void-700" aria-hidden="true" />
  </div>
);
