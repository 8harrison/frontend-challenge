import React from 'react';
import ProductCard from './ProductCard';
import axios from 'axios'
import '../styles/ProductGrid.css';

export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

interface ApiResponse {
  products: Product[];
}
const ProductGrid = async () => {
  const res = await axios.get(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC',
  );
  const apiResponse: ApiResponse = await res.data;
  return (
    <div className='product-grid'>
      {apiResponse.products.map((product: Product) => (
          <ProductCard
            id={product.id}
            brand={product.brand}
            key={product.id}
            name={product.name}
            photo={product.photo}
            description={product.description}
            price={product.price}
          />
      ))}
    </div>
  );
};

export default ProductGrid;
