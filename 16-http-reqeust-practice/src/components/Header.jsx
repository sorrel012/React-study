import React from 'react';
import logoImg from '../assets/logo.jpg';

function Header({ onClickButton }) {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logoImg} alt="Main logo" />
        ReactFood
      </h1>
      <button onClick={onClickButton} className="text-button">
        Cart (3)
      </button>
    </header>
  );
}

export default Header;
