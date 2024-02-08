import React from 'react';
import { addCartItem } from '../plugins/mealAxios.js';

function Meals({ meals }) {
  async function handleAddCart(meal) {
    const result = addCartItem(meal);
  }

  return (
    <div id="meals">
      {meals.map((meal) => {
        return (
          <div key={meal.id} className="meal-item">
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
          </div>
        );
      })}
    </div>
  );
}

export default Meals;
