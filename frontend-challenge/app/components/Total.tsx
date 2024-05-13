import React, { useContext, useState, useEffect } from 'react';
import { ContextValue } from '../context/contextValue';
import { Product } from './ProductGrid';
import '../styles/Total.css'

const Total = () => {
  const { cart } = useContext(ContextValue);
  const [total, setTotal] = useState(0)

  const calculateTotal = () => {
    const total = cart.reduce((acc: number, el: Product) =>  parseFloat(el.price) + acc, 0)
    setTotal(total)
  }

  useEffect(() => {
    calculateTotal()
  }, [cart])

  return (
    <div className='total-container'>
      <p>Total</p>
      <p>R${total.toFixed(2).replace('.', ',')}</p>       
    </div>
  );
};

export default Total;
