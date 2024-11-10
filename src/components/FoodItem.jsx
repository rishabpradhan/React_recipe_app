import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.container}>
      <img className={styles.itemImage} src={food.image}></img>
      <div className={styles.title}>
        <p key={food.id}>{food.title}</p>
      </div>
      <div className={styles.btns}>
        {" "}
        <button
          onClick={() => {
            //console.log(food.id);
            setFoodId(food.id);
          }}
          className={styles.btn}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
