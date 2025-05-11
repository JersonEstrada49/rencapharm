import React from 'react';
import PharmaCart from './PharmaCart';

const PharmaHeader = ({ cart, setCart, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold text-xl">RP</span>
          </div>
          <h1 className="text-2xl font-bold">RENCAPHARM</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><button className="hover:text-blue-200 transition">Inicio</button></li>
            <li><button className="hover:text-blue-200 transition">Productos</button></li>
            <li><button className="hover:text-blue-200 transition">Contacto</button></li>
            <li>
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-blue-700 transition"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
            <li>
              <PharmaCart cart={cart} setCart={setCart} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PharmaHeader;