import React, { useState } from 'react';
import { addToCart } from './utils/cart';
import { useDarkMode } from './utils/theme';
import PharmaHeader from './components/PharmaHeader';
import PharmaHero from './components/PharmaHero';
import PharmaServices from './components/PharmaServices';
import PharmaProductsGrid from './components/PharmaProductsGrid';
import PharmaCategories from './components/PharmaCategories';
import PharmaLocation from './components/PharmaLocation';
import PharmaContact from './components/PharmaContact';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const handleAddToCart = (product) => {
    addToCart(product, setCart);
  };

  return (
    <div className={`min-h-screen flex flex-col`}> {/* La clase 'dark' se aplica al html en useDarkMode */}
      <PharmaHeader cart={cart} setCart={setCart} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <PharmaHero />
        <PharmaServices />
        <PharmaProductsGrid cart={cart} setCart={setCart} />
        <PharmaCategories addToCart={handleAddToCart} />
        <PharmaLocation />
        <PharmaContact />
      </main>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto text-center">
          <p>© 2023 Rencapharm - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

// DONE