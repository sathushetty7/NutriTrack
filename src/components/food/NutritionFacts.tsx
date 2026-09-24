import type { NutritionFacts } from "@/types/nutrition";

export function NutritionFacts({ facts }: { facts: NutritionFacts }) {
  return <div className="grid grid-cols-4 gap-3 text-center">{Object.entries(facts).map(([label, value]) => <div key={label} className="rounded-xl bg-[var(--accent-soft)] p-3"><p className="text-lg font-bold">{value}</p><p className="text-xs capitalize text-[var(--muted)]">{label}</p></div>)}</div>;
}
