import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function SignupPage() {
  return <><Navbar /><main className="mx-auto max-w-md px-6 py-16"><h1 className="text-4xl font-bold">Start tracking</h1><form className="mt-8 grid gap-4"><input type="text" placeholder="Name" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" /><input type="email" placeholder="Email" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" /><input type="password" placeholder="Password" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" /><button className="rounded-xl bg-[var(--accent)] px-4 py-3 font-semibold text-white">Create account</button></form><p className="mt-6 text-sm text-[var(--muted)]">Already have an account? <Link href="/login" className="text-[var(--accent)]">Log in</Link></p></main></>;
}
