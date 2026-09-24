import Link from "next/link";

export function DashboardSidebar() {
  return (
    <aside className="w-full border-b border-[var(--line)] bg-white p-5 md:w-56 md:border-b-0 md:border-r">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">Your space</p>
      <nav className="grid gap-2 text-sm">
        <Link href="/dashboard">Overview</Link>
        <Link href="/dashboard/tracker">Tracker</Link>
        <Link href="/dashboard/planner">Planner</Link>
        <Link href="/dashboard/progress">Progress</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}
