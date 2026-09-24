import Link from "next/link";
import { MealCard } from "@/components/dashboard/MealCard";
import { Navbar } from "@/components/layout/Navbar";
import { sampleFoods } from "@/lib/nutrition";

export default function MealsPage() {
  const meals = [{ id: "breakfast", name: "Breakfast", foods: [sampleFoods[0]] }, { id: "dinner", name: "Dinner", foods: [sampleFoods[1], sampleFoods[2]] }];
  return <><Navbar /><main className="mx-auto max-w-6xl px-6 py-12"><h1 className="text-4xl font-bold">My meals</h1><div className="mt-8 grid gap-4 md:grid-cols-2">{meals.map((meal) => <Link key={meal.id} href={`/meals/${meal.id}`}><MealCard meal={meal} /></Link>)}</div></main></>;
}
