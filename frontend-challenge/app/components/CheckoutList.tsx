'use client';
import { ContextValue } from '../context/contextValue';
import React, { useContext, useState, useEffect } from 'react';
import { Product } from './ProductGrid';
import ProductCheckoutCard from './ProductCheckoutCard';
import '../styles/CheckoutList.css'

const CheckoutList = () => {
  const { cart, setCart } = useContext(ContextValue);
  const [newList, setNewList] = useState<Product[]>([]);

  const siever = (): Product[] => {
    const setList = new Set<Product>(cart);
    const list = new Array(...setList)
    return list;
  };

  useEffect(() => {
    setNewList(siever());
  }, [cart]);

  return (
    <div className='checkout-list-container'>
      {newList.map((product: Product) => (
        <ProductCheckoutCard product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default CheckoutList;
