import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function LoginPage() {
  return <><Navbar /><main className="mx-auto max-w-md px-6 py-16"><h1 className="text-4xl font-bold">Welcome back</h1><form className="mt-8 grid gap-4"><input type="email" placeholder="Email" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" /><input type="password" placeholder="Password" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" /><button className="rounded-xl bg-[var(--accent)] px-4 py-3 font-semibold text-white">Log in</button></form><p className="mt-6 text-sm text-[var(--muted)]">New here? <Link href="/signup" className="text-[var(--accent)]">Create an account</Link></p></main></>;
}
