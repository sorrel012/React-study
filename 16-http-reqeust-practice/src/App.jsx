import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import React, { useRef } from 'react';
import CartModal from './components/CartModal.jsx';
import { CartContextProvider } from './store/CarContext.jsx';

function App() {
  const dialog = useRef();

  function handleClick() {
    dialog.current.open();
  }

  return (
    <CartContextProvider>
      <CartModal ref={dialog} />
      <Header onClickButton={handleClick} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
