import React from 'react';
import { products } from '../mock/products';
import PharmaProductCard from './PharmaProductCard';

const PharmaCategoriesSection = ({ addToCart }) => {
  const categories = [
    { name: 'Medicamentos', icon: '💊', description: 'Medicamentos para diversas condiciones' },
    { name: 'Cuidado Personal', icon: '🧴', description: 'Productos de higiene y cuidado' },
    { name: 'Suplementos', icon: '💪', description: 'Vitaminas y suplementos nutricionales' },
    { name: 'Maternidad', icon: '👶', description: 'Productos para madres y bebés' },
    { name: 'Primeros Auxilios', icon: '🩹', description: 'Artículos para emergencias' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Categorías</h2>
        
        <div className="grid grid-cols-1 gap-12">
          {categories.map((category, index) => {
            const categoryProducts = products.filter(p => p.category === category.name);
            
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
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
      </div>
    </section>
  );
};

export default PharmaCategoriesSection;