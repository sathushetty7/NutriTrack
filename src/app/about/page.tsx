import { Navbar } from "@/components/layout/Navbar";

export default function AboutPage() {
  return <><Navbar /><main className="mx-auto max-w-3xl px-6 py-16"><p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">About NutriTrack</p><h1 className="mt-4 text-5xl font-bold">Nutrition support without the noise.</h1><p className="mt-6 text-lg leading-8 text-[var(--muted)]">NutriTrack helps you turn everyday meals into useful insight. The goal is a calmer, clearer relationship with food.</p></main></>;
}
