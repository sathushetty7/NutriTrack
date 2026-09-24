import type { NutritionFacts } from "@/types/nutrition";

export function NutritionSummary({ facts }: { facts: NutritionFacts }) {
  return <section className="rounded-2xl bg-[var(--accent)] p-6 text-white"><p className="text-sm opacity-80">Today&apos;s intake</p><p className="mt-1 text-4xl font-bold">{facts.calories} kcal</p><div className="mt-5 grid grid-cols-3 gap-3 text-sm"><span>{facts.protein}g protein</span><span>{facts.carbs}g carbs</span><span>{facts.fat}g fat</span></div></section>;
}
