'use client';
import React, { useContext } from 'react';
import shopping_cart_icon from '../shopping_cart_icon.png';
import { ContextValue } from '../context/contextValue';
import '../styles/Cart.css'

const Cart = () => {
  const { cart, setIsCheckout } = useContext(ContextValue);
  const toCheckout = () => {
    setIsCheckout(true);
  };
  return (
    <button onClick={() => toCheckout()} className='cart-button'>
      <img src={shopping_cart_icon.src} /> {cart.length}
    </button>
  );
};

export default Cart;
