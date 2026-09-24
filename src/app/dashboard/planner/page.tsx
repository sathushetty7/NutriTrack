export default function PlannerPage() {
  return <><h1 className="text-4xl font-bold">Meal planner</h1><p className="mt-3 text-[var(--muted)]">Shape a flexible plan for the week ahead.</p><div className="mt-8 grid gap-3 md:grid-cols-3">{["Breakfast", "Lunch", "Dinner"].map((meal) => <div key={meal} className="rounded-2xl border border-dashed border-[var(--line)] bg-white p-5"><p className="font-semibold">{meal}</p><p className="mt-2 text-sm text-[var(--muted)]">Add a meal</p></div>)}</div></>;
}
