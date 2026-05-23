import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ReactLenis } from 'lenis/react';

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <div className="min-h-screen">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
        <div className="ambient-glow glow-3"></div>
        
        <Nav />
        <main className="pt-28">{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
