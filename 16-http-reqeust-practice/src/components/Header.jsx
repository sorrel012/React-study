import React from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';

function Header({ onClickButton }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        ReactFood
        <h1></h1>
      </div>
      <nav>
        <Button onClick={onClickButton} textOnly>
          Cart (3)
        </Button>
      </nav>
    </header>
  );
}

export default Header;
