import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './index.css';

import { FetchMealByFirstLetter, SearchMealByName  } from '../../services/mealtService';

import MealPreviw from '../mealPreview';

const MealPreviwGrid = (props) => {

  const [meals, setMeals] = useState();

  useEffect(() => {
    if(props.input === '') {
      FetchMealByFirstLetter()
      .then((data) => setMeals(data));
    } else {
      SearchMealByName(props.input)
      .then((data) => setMeals(data));
    }
  }, [props.input]);

  console.log(meals);

  return (
    <>
      {meals ? (
        <div className='meal-grid'>
          {meals.map((meal) => (
            <Link to={`meals/${meal.idMeal}`}>
            <MealPreviw meal={meal} />
            </Link>
          ))}
        </div>
      ) : (
        <h2>Loading Meals...</h2>
      )}
    </>
  );
};

export default MealPreviwGrid;
