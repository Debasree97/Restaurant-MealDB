import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MealDetails = () => {
    let { mealId } = useParams();

    const [mealDetail, setMealDetail] = useState({});

    useEffect(() => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMealDetail(data.meals[0]));
    }, [mealId]);

    const { strMeal, strCategory, strMealThumb, strInstructions } = mealDetail;
    return (
      <div>
        <img src={strMealThumb} alt="" />
        <h2>{strMeal}</h2>
        <h3>Category: {strCategory}</h3>
        <p>{strInstructions}</p>
      </div>
    );
};

export default MealDetails;