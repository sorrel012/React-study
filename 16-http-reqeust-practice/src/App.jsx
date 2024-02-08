import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { useRef } from 'react';
import CartModal from './components/CartModal.jsx';

function App() {
  const dialog = useRef();

  function handleClick() {
    dialog.current.open();
  }

  return (
    <>
      <CartModal ref={dialog} />
      <Header onClickButton={handleClick} />
      <Meals />
    </>
  );
}

export default App;
