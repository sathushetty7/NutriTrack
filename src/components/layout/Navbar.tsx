import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-[var(--line)] bg-white/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-[var(--accent)]">NutriTrack</Link>
        <div className="flex gap-5 text-sm text-[var(--muted)]">
          <Link href="/explore">Explore</Link>
          <Link href="/meals">Meals</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
