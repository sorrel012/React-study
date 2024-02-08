import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { useEffect, useState } from 'react';
import { getMealsData } from './plugins/mealAxios.js';

function App() {
  const [meals, setMeals] = useState([]);

  async function getMeals() {
    const data = await getMealsData();
    if (data.status === 'SUCCESS') {
      setMeals(data.result);
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      <Header />
      <Meals meals={meals} />
    </>
  );
}

export default App;
