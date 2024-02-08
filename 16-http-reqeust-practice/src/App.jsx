import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { useEffect, useRef, useState } from 'react';
import { getMealsData } from './plugins/mealAxios.js';
import CartModal from './components/CartModal.jsx';

function App() {
  const dialog = useRef();

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

  function handleClick() {
    dialog.current.open();
  }

  return (
    <>
      <CartModal ref={dialog} />
      <Header onClickButton={handleClick} />
      <Meals meals={meals} />
    </>
  );
}

export default App;
