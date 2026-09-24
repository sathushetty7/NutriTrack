import { notFound } from "next/navigation";
import { MealCard } from "@/components/dashboard/MealCard";
import { Navbar } from "@/components/layout/Navbar";
import { sampleFoods } from "@/lib/nutrition";

export default async function MealDetailPage({ params }: { params: Promise<{ mealId: string }> }) {
  const { mealId } = await params;
  const meal = mealId === "breakfast" ? { id: "breakfast", name: "Breakfast", foods: [sampleFoods[0]] } : mealId === "dinner" ? { id: "dinner", name: "Dinner", foods: [sampleFoods[1], sampleFoods[2]] } : null;
  if (!meal) notFound();
  return <><Navbar /><main className="mx-auto max-w-3xl px-6 py-12"><h1 className="text-4xl font-bold">{meal.name}</h1><div className="mt-8"><MealCard meal={meal} /></div></main></>;
}
