import { AudioLines, BriefcaseBusiness, Sparkles } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";

const focusAreas = [
  { label: "Technical depth", icon: BriefcaseBusiness },
  { label: "Clear communication", icon: AudioLines },
  { label: "Confidence that carries", icon: Sparkles },
];

export default function HomePage() {
  return (
    <AppShell>
      <main className="home-content">
        <section className="welcome-layout" aria-labelledby="welcome-title">
          <div className="welcome-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> A little practice changes everything</div>
            <h1 id="welcome-title">Show up ready<br />for <span>what&apos;s next.</span></h1>
            <p className="welcome-description">
              Thoughtful interview practice, shaped around the role you want and the experience you bring.
            </p>
            <div className="tagline-lockup">
              <span className="tagline-rule" aria-hidden="true" />
              <p>Your next opportunity starts with preparation.</p>
            </div>
          </div>

          <div className="orb-stage" aria-hidden="true">
            <div className="orb-halo" />
            <div className="orb-ring orb-ring-one" />
            <div className="orb-ring orb-ring-two" />
            <div className="orb-core"><div className="orb-core-glint" /></div>
            <div className="orb-spark orb-spark-one" />
            <div className="orb-spark orb-spark-two" />
            <div className="orb-caption"><span className="orb-caption-line" /> VOXORA / 01</div>
          </div>
        </section>

        <section className="foundation-strip" aria-label="VOXORA practice principles">
          <div className="strip-heading">
            <span className="strip-kicker">BUILT AROUND YOU</span>
            <span className="strip-note">The right kind of practice makes all the difference.</span>
          </div>
          <div className="focus-list">
            {focusAreas.map(({ label, icon: Icon }) => (
              <div className="focus-item" key={label}>
                <div className="focus-icon"><Icon size={16} strokeWidth={1.7} /></div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </AppShell>
  );
}
