import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
