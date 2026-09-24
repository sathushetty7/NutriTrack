import type { Food, NutritionFacts } from "@/types/nutrition";

export const sampleFoods: Food[] = [
  { id: "oats", name: "Overnight oats", serving: "1 bowl", facts: { calories: 320, protein: 14, carbs: 48, fat: 9 } },
  { id: "salmon", name: "Roasted salmon", serving: "150 g", facts: { calories: 280, protein: 31, carbs: 0, fat: 17 } },
  { id: "avocado-toast", name: "Avocado toast", serving: "2 slices", facts: { calories: 360, protein: 10, carbs: 42, fat: 18 } },
];

export const dailyTarget: NutritionFacts = { calories: 2200, protein: 140, carbs: 240, fat: 70 };

export function totalNutrition(foods: Food[]): NutritionFacts {
  return foods.reduce(
    (total, food) => ({
      calories: total.calories + food.facts.calories,
      protein: total.protein + food.facts.protein,
      carbs: total.carbs + food.facts.carbs,
      fat: total.fat + food.facts.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );
}
