import React, { useContext } from 'react';
import { AddProps } from './AddToCart';
import Qtd from './Qtd';
import { ContextValue } from '../context/contextValue';
import { Product } from './ProductGrid';
import '../styles/ProductCheckoutCard.css'

const ProductCheckoutCard = ({ product }: AddProps) => {
  const { cart, setCart } = useContext(ContextValue);
  const removeItem = () => {
    const newList = cart.filter((el: Product) => el !== product);
    setCart(newList);
  };

  return (
    <div className='checkout-big-container' key={product.id}>
      <button className='close-checkout-card' onClick={() => removeItem()}>
        x
      </button>
      <div className='product-checkout-card-container'>
        <div className='product-checkout-img-container'>
          <img src={product.photo} />
          <p className='product-checkout-card-name'>{product.name}</p>
          <Qtd product={product} />
        </div>
        <p className='product-checkout-card-price'>R${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCheckoutCard;
