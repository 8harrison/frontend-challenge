'use client';
import React, { ReactPropTypes, useContext } from 'react';
import shopping_bag from '../shopping_bag_icon.svg';
import { ContextValue } from '../context/contextValue';
import { Product } from './ProductGrid';
import '../styles/AddToCart.css'

export interface AddProps {
  product: Product;
}

const AddToCart = ({ product }: AddProps) => {
  const { cart, setCart } = useContext(ContextValue);
  const addToCart = () => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <button className='button-add-to-cart' onClick={() => addToCart()}>
        <img src={shopping_bag.src} />
        COMPRAR
      </button>
    </div>
  );
};

export default AddToCart;
