import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-screen">
      <div className="state-mark">404</div>
      <p className="state-eyebrow">THIS PAGE ISN&apos;T HERE</p>
      <h1>Let&apos;s find your way back.</h1>
      <p className="state-description">The page may have moved, or the address may be incomplete.</p>
      <Link className="state-action" href="/">Return to VOXORA</Link>
    </main>
  );
}
