import { ProgressChart } from "@/components/dashboard/ProgressChart";

export default function ProgressPage() {
  return <><h1 className="text-4xl font-bold">Progress</h1><p className="mt-3 text-[var(--muted)]">A simple view of your consistency over time.</p><div className="mt-8 max-w-2xl"><ProgressChart /></div></>;
}
