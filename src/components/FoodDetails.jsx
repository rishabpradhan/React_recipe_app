import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`${url}?apiKey=${apiKey}`);
        const data = await res.json();
        //console.log(data);
        setFood(data);
      } catch (error) {
        console.log("error occured", error.message);
      }
    };
    if (foodId) {
      //only render once foodId is set
      fetchRecipe();
    }
  }, [foodId]);

  return (
    <div className={styles.foodContainer}>
      <div className={styles.recipe}>
        <h1>{food.title}</h1>
        <img src={food.image} className={styles.recipeimg} />
        <span className={styles.food}>
          <strong>⏱️{food.readyInMinutes}</strong>

          <strong>🧑‍⚕️{food.healthScore}</strong>

          <strong>💲{food.pricePerServing}</strong>

          <strong>👨 {food.servings}</strong>

          <strong>🥕Vegetarian:{food.vegetarian ? "true" : "false"}</strong>
        </span>
      </div>

      <div className={styles.foodrecipe}>
        <h1>Recipe Steps</h1>

        {food.analyzedInstructions && food.analyzedInstructions[0] && (
          <ul>
            {food.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h1>Ingredients</h1>
        <ul>
          {food.extendedIngredients &&
            food.extendedIngredients.map((ingredient, index) => (
              <li key={index}>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                  className={styles.img}
                />
                <strong>{ingredient.name}:</strong>{" "}
                <strong>
                  {ingredient.amount} {ingredient.measures?.us.unitShort}{" "}
                </strong>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
