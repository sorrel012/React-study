import React, { useEffect, useState } from 'react';
import { addCartItem, getMeals } from '../plugins/mealAxios.js';

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
        return (
          <li key={meal.id} className="meal-item">
            <div>
              <article>
                <img
                  src={`http://localhost:3000/${meal.image}`}
                  alt="Meal img"
                />
                <h3>{meal.name}</h3>
                <div className="meal-item-price">{meal.price}</div>
                <div className="meal-item-description">{meal.description}</div>
              </article>
              <button
                className="button meal-item-actions"
                onClick={() => handleAddCart(meal)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default loadedMeals;
