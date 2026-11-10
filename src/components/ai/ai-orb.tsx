"use client";

import type { CSSProperties, PointerEvent } from "react";

export type AIOrbState = "idle" | "listening" | "thinking" | "speaking";

interface AIOrbProps {
  state?: AIOrbState;
  size?: number;
  className?: string;
  showState?: boolean;
}

const particles = [
  { x: "17%", y: "28%", size: "3px", dx: "8px", dy: "-12px", duration: "4.3s", delay: "-1.4s", color: "#d9ceff" },
  { x: "75%", y: "22%", size: "2px", dx: "-7px", dy: "8px", duration: "5.2s", delay: "-.4s", color: "#a4e7ef" },
  { x: "84%", y: "47%", size: "3px", dx: "-10px", dy: "-6px", duration: "4.8s", delay: "-2.1s", color: "#c5b3ff" },
  { x: "70%", y: "78%", size: "2px", dx: "7px", dy: "-9px", duration: "5.7s", delay: "-1.8s", color: "#9be1ec" },
  { x: "27%", y: "81%", size: "3px", dx: "-8px", dy: "-7px", duration: "4.6s", delay: "-.9s", color: "#cdbdff" },
  { x: "10%", y: "57%", size: "2px", dx: "9px", dy: "8px", duration: "5.1s", delay: "-2.6s", color: "#b1eaf0" },
  { x: "38%", y: "12%", size: "2px", dx: "-5px", dy: "10px", duration: "4.9s", delay: "-3.3s", color: "#cdbdff" },
  { x: "56%", y: "89%", size: "2px", dx: "8px", dy: "-8px", duration: "5.4s", delay: "-1.1s", color: "#a4e7ef" },
  { x: "90%", y: "65%", size: "2px", dx: "-8px", dy: "-8px", duration: "5.9s", delay: "-2.4s", color: "#d9ceff" },
  { x: "11%", y: "39%", size: "2px", dx: "8px", dy: "-8px", duration: "4.4s", delay: "-1.7s", color: "#a4e7ef" },
  { x: "42%", y: "92%", size: "2px", dx: "-8px", dy: "-9px", duration: "5.3s", delay: "-.7s", color: "#cdbdff" },
  { x: "88%", y: "34%", size: "2px", dx: "-7px", dy: "10px", duration: "5s", delay: "-3.1s", color: "#a4e7ef" },
];

const stateLabels: Record<AIOrbState, string> = {
  idle: "Ready",
  listening: "Listening",
  thinking: "Thinking",
  speaking: "Speaking",
};

export function AIOrb({ state = "idle", size = 260, className, showState = true }: AIOrbProps) {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
    event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "0px");
    event.currentTarget.style.setProperty("--pointer-y", "0px");
  }

  const style = { "--orb-size": `${size}px` } as CSSProperties;

  return (
    <div
      className={`ai-orb ${className ?? ""}`}
      style={style}
      data-state={state}
      role="status"
      aria-label={`VOXORA AI ${stateLabels[state].toLowerCase()}`}
      aria-live="polite"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="ai-orb__ambient" aria-hidden="true" />
      <div className="ai-orb__outer" aria-hidden="true" />
      <div className="ai-orb__inner" aria-hidden="true" />
      <div className="ai-orb__core" aria-hidden="true" />
      <div className="ai-orb__particles" aria-hidden="true">
        {particles.map((particle, index) => {
          const particleStyle = {
            "--particle-x": particle.x,
            "--particle-y": particle.y,
            "--particle-size": particle.size,
            "--particle-dx": particle.dx,
            "--particle-dy": particle.dy,
            "--particle-duration": particle.duration,
            "--particle-delay": particle.delay,
            "--particle-color": particle.color,
          } as CSSProperties;

          return <span className="ai-orb__particle" style={particleStyle} key={index} />;
        })}
      </div>
      <div className="ai-orb__voice" aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => <span key={index} style={{ "--bar-index": index } as CSSProperties} />)}
      </div>
      {showState ? <span className="ai-orb__state" aria-hidden="true">{stateLabels[state]}</span> : null}
    </div>
  );
}
