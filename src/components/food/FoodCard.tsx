import Link from "next/link";
import type { Food } from "@/types/nutrition";

export function FoodCard({ food }: { food: Food }) {
  return (
    <Link href={`/explore/${food.id}`} className="block rounded-2xl border border-[var(--line)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
      <h3 className="font-semibold">{food.name}</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">{food.serving}</p>
      <p className="mt-4 text-sm"><strong>{food.facts.calories}</strong> kcal · {food.facts.protein}g protein</p>
    </Link>
  );
}
