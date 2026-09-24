import Link from "next/link";

export function CTA() {
  return <section className="rounded-2xl border border-[var(--line)] bg-white p-6"><h2 className="text-2xl font-bold">Ready to begin?</h2><Link href="/signup" className="mt-4 inline-block text-[var(--accent)] underline underline-offset-4">Create your free account</Link></section>;
}
