import React, { useEffect, useState } from 'react';
import { addCartItem, getMeals } from '../plugins/mealAxios.js';
import MealItem from './MealItem.jsx';

function loadedMeals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function getLoadedMeals() {
      const data = await getMeals();
      if (data.status === 'SUCCESS') {
        setLoadedMeals(data.result);
      }
    }

    getLoadedMeals();
  }, []);

  async function handleAddCart(meal) {
    const result = addCartItem(meal);
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}

export default loadedMeals;
