import { NutritionSummary } from "@/components/dashboard/NutritionSummary";
import { ProgressChart } from "@/components/dashboard/ProgressChart";

export default function DashboardPage() {
  return <><p className="text-sm font-bold uppercase tracking-widest text-[var(--accent)]">Thursday, September 24</p><h1 className="mt-2 text-4xl font-bold">Good morning.</h1><div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><NutritionSummary facts={{ calories: 1280, protein: 82, carbs: 146, fat: 42 }} /><section><h2 className="mb-3 font-semibold">Weekly rhythm</h2><ProgressChart /></section></div></>;
}
