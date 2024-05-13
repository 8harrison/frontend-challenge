'use client';
import React, { useContext } from 'react';
import CheckoutList from './CheckoutList';
import Buy from './Buy';
import Total from './Total';
import { ContextValue } from '../context/contextValue';
import '../styles/Checkout.css';

const Checkout = () => {
  const { isCheckout, setIsCheckout } = useContext(ContextValue);
  const closeCheckout = () => {
    setIsCheckout(false);
  };
  return (
    <div
      data-testid='id-checkout'
      className='checkout-container'
      style={{ display: isCheckout ? 
        '' : 
        'none' 
      }}
    >
      <div className='checkout-header-container'>
        <p className='checkout-title' data-testid='id-title'>
          Carrinho de compras
        </p>
        <button
          data-testid='id-close-checkout'
          className='close-cart'
          onClick={() => closeCheckout()}
        >
          x
        </button>
      </div>
      <CheckoutList />
      <Total />
      <Buy />
    </div>
  );
};

export default Checkout;
