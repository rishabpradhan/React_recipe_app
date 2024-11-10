import FoodList from "./components/FoodList";
import Search from "./components/Search";
import { useState } from "react";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]); // usestate for the name of food
  const [foodId, setFoodId] = useState(""); //uniqueid for each type of dish
  return (
    <div>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          {/* render when foodid is set*/}
          {foodId && <FoodDetails foodId={foodId} />}
        </InnerContainer>
      </Container>

      <p
        style={{
          display: "felx",
          textAlign: "center",
          fontSize: 25,
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
      >
        All copyrights and reserved under Rishab Pradhan@2024
      </p>

      <p
        style={{
          display: "felx",
          textAlign: "center",
          fontSize: 20,
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
      >
        rishabpradhan15@gmail.com
      </p>
    </div>
  );
}

export default App;
