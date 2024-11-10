import { useEffect, useState } from "react";

import styles from "./pizza.module.css";
export default function Search({ setFoodData }) {
  // destructing prop
  // when enter key is pressed fetch api
  const handleKeydown = async (event) => {
    if (event.key === "Enter") {
      await fetchData();
    }
  };
  //api fetch logic
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const apiKey = import.meta.env.VITE_API_KEY;
  const [query, setQuery] = useState("");
  //useeffect hooks used to sync an external system with our react compnent
  // useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    } catch (error) {
      console.log("error occured", error.message);
    }
  };
  // when enter key is pressed fetch api

  // fetch data only when value to query is provided
  //if (query) {
  //fetchData();

  // }, [query, setFoodData]); //added to dependency to ensure effect reruns whenever query or setFoodData changes
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          className={styles.input}
          placeholder="Enter any food items.."
          onKeyDown={handleKeydown}
        />
        <button className={styles.btn} onClick={fetchData}>
          Search
        </button>
      </div>
      <div className={styles.heading}>
        <span className={styles.static}>Search any food with</span>
        <span className={styles.animated}>
          <span>Nutrition</span>
          <span>Recipes</span>
          <span>Ingredients</span>
        </span>
      </div>
    </>
  );
}
