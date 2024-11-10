import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} /> // Ensure you use a unique key for each item
      ))}
    </div>
  );
}
