import type { Meal } from "@/types/nutrition";

export function MealCard({ meal }: { meal: Meal }) {
  return <article className="rounded-2xl border border-[var(--line)] bg-white p-5"><h3 className="font-semibold">{meal.name}</h3><p className="mt-2 text-sm text-[var(--muted)]">{meal.foods.map((food) => food.name).join(", ")}</p></article>;
}
