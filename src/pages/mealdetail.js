import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./mealdetail.css";

import { FetchMealById } from "../services/mealtService";

function MealDetail() {

  const [meal, setMeal] = useState();

  const { id } = useParams();

  useEffect(() => {
    FetchMealById(id)
      .then((data) => setMeal(data))
  }, []);

  console.log(meal);

  return (
    <>
    {meal ? (
      <div className="meal">
        <h1 className="meal-title">{meal.strMeal}</h1>
        <img src={meal.strMealThumb}></img>
        <p className="meal-instructions">{meal.strInstructions}</p>
      </div>
    ): (
      <h2>Loading Meal...</h2>
    )}
      
    </>
  )
};

export default MealDetail;