import React from 'react';
import { products } from '../mock/products';
import PharmaProductCard from './PharmaProductCard';

const PharmaCategories = ({ addToCart }) => {
  const categories = [
    { name: 'Medicamentos', icon: '💊' },
    { name: 'Suplementos', icon: '💪' },
    { name: 'Cuidado Personal', icon: '🧴' },
    { name: 'Maternidad', icon: '🤰' },
    { name: 'Primeros Auxilios', icon: '🩹' }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900"> {/* Aplicar clase dark */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Nuestras Categorías</h2> {/* Aplicar clase dark */}
        
        {categories.map((category, index) => {
          const categoryProducts = products.filter(p => p.category === category.name);
          
          return (
            <div key={index} className="mb-12">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{category.name}</h3> {/* Aplicar clase dark */}
              </div>
              
              {categoryProducts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {categoryProducts.map(product => (
                    <PharmaProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={() => addToCart(product)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PharmaCategories;