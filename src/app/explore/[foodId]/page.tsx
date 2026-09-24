import { notFound } from "next/navigation";
import { NutritionFacts } from "@/components/food/NutritionFacts";
import { Navbar } from "@/components/layout/Navbar";
import { sampleFoods } from "@/lib/nutrition";

export default async function FoodDetailPage({ params }: { params: Promise<{ foodId: string }> }) {
  const { foodId } = await params;
  const food = sampleFoods.find((item) => item.id === foodId);
  if (!food) notFound();
  return <><Navbar /><main className="mx-auto max-w-3xl px-6 py-12"><p className="text-sm text-[var(--muted)]">Food details</p><h1 className="mt-2 text-4xl font-bold">{food.name}</h1><p className="mt-3 text-[var(--muted)]">Serving size: {food.serving}</p><div className="mt-8"><NutritionFacts facts={food.facts} /></div></main></>;
}
