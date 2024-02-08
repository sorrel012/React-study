import React, { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CarContext.jsx';

function Header({ onClickButton }) {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        ReactFood
        <h1></h1>
      </div>
      <nav>
        <Button onClick={onClickButton} textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
