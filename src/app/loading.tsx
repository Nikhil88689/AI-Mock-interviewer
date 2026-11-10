export default function Loading() {
  return (
    <main className="state-screen" aria-live="polite" aria-busy="true">
      <div className="loading-orb" />
      <p className="state-eyebrow">A MOMENT TO SETTLE IN</p>
      <h1>Preparing your space</h1>
      <p className="state-description">Your next step is on its way.</p>
    </main>
  );
}
