import React, { useState } from 'react';

const PharmaProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    setImgError(true);
  };

  const handleAddToCart = () => {
    if (typeof onAddToCart === 'function') {
      setIsAnimating(true);
      onAddToCart();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isHovered ? 'transform -translate-y-1 shadow-lg' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative">
        {imgError ? (
          <div className="text-center p-4">
            <div className="bg-blue-100 text-blue-800 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
              <span className="text-2xl">💊</span>
            </div>
            <p className="text-gray-500 mt-2 text-sm">{product.name}</p>
          </div>
        ) : (
          <img 
            src={product.image} // Usar la nueva URL
            alt={product.name}
            className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
            onError={handleImageError} // Si falla, activar el error
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="font-bold text-blue-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={isAnimating}
            className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all ${isAnimating ? 'animate-buttonClick opacity-75' : ''}`}
          >
            {isAnimating ? '✓ Añadido' : 'Añadir'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PharmaProductCard;

// DONE