import React from 'react';
import AddToCart from './AddToCart';
import { Product } from './ProductGrid';
import '../styles/ProductCard.css';
import Layout from './Layout';

const ProductCard = (props: Product) => {
  return (
    <Layout>
      <div className='product-card' key={props.id}>
        <div className='product-container'>
          <img src={props.photo} />
          <div className='product-text-container'>
            <p className='product-name'>{props.name}</p>
            <p className='product-price'>R${props.price}</p>
          </div>
          <p className='product-description'>{props.description}</p>
        </div>
        <AddToCart product={props} />
      </div>
    </Layout>
  );
};

export default ProductCard;
