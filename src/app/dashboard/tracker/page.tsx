import { NutritionSummary } from "@/components/dashboard/NutritionSummary";

export default function TrackerPage() {
  return <><h1 className="text-4xl font-bold">Daily tracker</h1><p className="mt-3 text-[var(--muted)]">Keep an easy record of what you eat today.</p><div className="mt-8 max-w-xl"><NutritionSummary facts={{ calories: 1280, protein: 82, carbs: 146, fat: 42 }} /></div></>;
}
