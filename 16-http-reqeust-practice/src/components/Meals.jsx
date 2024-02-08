import React from 'react';

function Meals({ meals }) {
  return (
    <div>
      {meals.map((meal) => {
        return (
          <div key={meal.id}>
            <img src={meal.image} alt="Meal img" />
            <div>{meal.name}</div>
            <div>{meal.price}</div>
            <div>{meal.description}</div>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Meals;
