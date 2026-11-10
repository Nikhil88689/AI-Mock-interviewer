import Link from "next/link";
import { AudioWaveform, Command } from "lucide-react";

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="app-frame">
      <header className="app-header">
        <Link className="brand-lockup" href="/" aria-label="VOXORA home">
          <span className="brand-mark"><AudioWaveform size={19} strokeWidth={2.1} /></span>
          <span className="brand-wordmark">VOXORA<span className="brand-period">.</span></span>
        </Link>
        <div className="header-context"><span className="context-pulse" /> INTERVIEW STUDIO</div>
        <div className="header-actions">
          <span className="header-status"><span className="status-indicator" /> YOUR SPACE, YOUR PACE</span>
          <span className="header-divider" />
        </div>
      </header>
      <div className="app-rule" />
      <div className="workspace-meta">
        <div className="workspace-breadcrumb"><span>VOXORA</span><span className="breadcrumb-slash">/</span><span className="breadcrumb-current">YOUR NEXT CHAPTER</span></div>
        <div className="workspace-shortcut"><Command size={13} /> A CALMER WAY TO PREPARE</div>
      </div>
      {children}
      <footer className="app-footer"><span>© VOXORA</span><span>MAKE THE MOMENT YOURS <span className="footer-star">✳</span></span></footer>
    </div>
  );
}
