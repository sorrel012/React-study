import React from 'react';
import { currencyFormatter } from '../util/formatting.js';

function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.image} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={() => handleAddCart(meal)}>
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}

export default MealItem;
