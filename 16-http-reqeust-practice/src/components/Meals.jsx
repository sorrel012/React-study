import React from 'react';

function Meals({ meals }) {
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
              <button className="button meal-item-actions">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Meals;
