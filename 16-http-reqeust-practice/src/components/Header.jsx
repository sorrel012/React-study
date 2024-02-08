import React from 'react';
import logoImg from '../assets/logo.jpg';

function Header() {
  return (
    <header id="main-header">
      <h1 id="title">
        <img src={logoImg} alt="Main logo" />
        ReactFood
      </h1>
      <button className="text-button">Cart (3)</button>
    </header>
  );
}

export default Header;
