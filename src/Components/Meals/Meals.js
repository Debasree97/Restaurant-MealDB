import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Meals = (props) => {
  const { searchText } = props;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <div className="d-flex">
      <div className="me-4 w-100">
        <Row xs={1} md={3} className="g-3 ">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      </div>
      <div>
        <h2>The selected will be shown here</h2>
      </div>
    </div>
  );
};

export default Meals;
