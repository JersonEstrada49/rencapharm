import React from 'react';
import PharmaProductCard from './PharmaProductCard';
import { products } from '../mock/products';
import { addToCart } from '../utils/cart';

const PharmaProductsGrid = ({ cart, setCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product, setCart);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Productos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
            <PharmaProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmaProductsGrid;