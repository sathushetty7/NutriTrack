import Link from "next/link";

export function Hero() {
  return <section className="rounded-3xl bg-[#dcebdd] p-8 md:p-14"><p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">Small choices, visible progress</p><h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">Eat with more clarity.</h1><p className="mt-5 max-w-xl text-lg text-[var(--muted)]">Track meals, understand your nutrition, and build routines that feel good to keep.</p><Link href="/dashboard" className="mt-8 inline-block rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-white">Open dashboard</Link></section>;
}
