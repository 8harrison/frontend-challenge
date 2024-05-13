import React, { useContext, useState, useEffect } from 'react';
import { ContextValue } from '../context/contextValue';
import { Product } from './ProductGrid';
import { AddProps } from './AddToCart';
import '../styles/Qtd.css';

const Qtd = ({ product }: AddProps) => {
  const { cart, setCart } = useContext(ContextValue);
  const [total, setTotal] = useState(0);
  const totalItem = () => {
    const total: Product[] = cart.filter((item: Product) => item === product);
    return total.length;
  };
  function aux() {
    for (let i = cart.length - 1; i >= 0; i--) {
      if (cart[i] === product) {
        return i;
      }
    }
  }
  const decreaseItem = () => {
    const newList = [...cart].filter((el, ind) => ind !== aux());
    console.log(newList);
    setCart(newList);
  };

  const increaseItem = () => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    setTotal(totalItem());
  }, [cart]);

  return (
    <div className='qtd-container'>
      <button onClick={() => decreaseItem()}>-</button>
      <div className='barra-meio'></div>
      <p>{total}</p>
      <div className='barra-meio'></div>
      <button onClick={() => increaseItem()}>+</button>
    </div>
  );
};

export default Qtd;
