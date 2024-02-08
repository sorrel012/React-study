import React from 'react';
import logoImg from '../assets/logo.jpg';

function Header({ onClickButton }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        ReactFood
        <h1></h1>
      </div>
      <nav>
        <button onClick={onClickButton} className="text-button">
          Cart (3)
        </button>
      </nav>
    </header>
  );
}

export default Header;
