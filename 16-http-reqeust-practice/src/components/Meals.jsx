import React, { useEffect, useState } from 'react';
import { getMeals } from '../plugins/mealAxios.js';
import MealItem from './MealItem.jsx';

function loadedMeals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function getLoadedMeals() {
      const data = await getMeals();

      if (data.isLoading) {
        return <p className="center">Fetching meals...</p>;
      }

      if (data.status === 'SUCCESS') {
        setLoadedMeals(data.result);
      }

      if (data.status === 'FAIL') {
        alert(data.result);
      }
    }

    getLoadedMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}

export default loadedMeals;
