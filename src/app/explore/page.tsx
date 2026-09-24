import { FoodCard } from "@/components/food/FoodCard";
import { FoodSearch } from "@/components/food/FoodSearch";
import { Navbar } from "@/components/layout/Navbar";
import { sampleFoods } from "@/lib/nutrition";

export default function ExplorePage() {
  return <><Navbar /><main className="mx-auto max-w-6xl px-6 py-12"><h1 className="text-4xl font-bold">Explore foods</h1><p className="mt-3 text-[var(--muted)]">Find nutrition details for your next meal.</p><div className="mt-8 max-w-xl"><FoodSearch /></div><div className="mt-8 grid gap-4 md:grid-cols-3">{sampleFoods.map((food) => <FoodCard key={food.id} food={food} />)}</div></main></>;
}
