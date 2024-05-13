import React from 'react';
import Cart from './Cart';
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div>
        <p>MKS</p>
        <p>Sistemas</p>
      </div>
      <Cart />
    </div>
  );
};

export default Header;
