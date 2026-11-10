"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="state-screen" role="alert">
      <div className="state-mark state-mark-error">!</div>
      <p className="state-eyebrow">A MOMENTARY PAUSE</p>
      <h1>That didn&apos;t go as planned.</h1>
      <p className="state-description">Something interrupted this view. Try again when you&apos;re ready.</p>
      <button className="state-action" onClick={reset} type="button">Try again</button>
    </main>
  );
}
