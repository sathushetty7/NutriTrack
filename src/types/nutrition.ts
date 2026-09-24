export type NutritionFacts = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type Food = {
  id: string;
  name: string;
  serving: string;
  facts: NutritionFacts;
};

export type Meal = {
  id: string;
  name: string;
  foods: Food[];
};
