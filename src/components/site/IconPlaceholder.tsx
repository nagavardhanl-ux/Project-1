import type { ReactNode } from "react";

export function IconPlaceholder({ label, children }: { label?: string; children?: ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label ?? "3D icon placeholder"}
      className="relative grid h-14 w-14 place-items-center rounded-2xl glass-strong overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--gradient-accent)] opacity-20" />
      <div className="absolute -inset-1 blur-xl bg-[var(--gradient-accent)] opacity-25" />
      <div className="relative text-accent-glow">{children}</div>
    </div>
  );
}
