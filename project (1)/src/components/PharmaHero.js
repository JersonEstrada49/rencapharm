import React from 'react';

const PharmaHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 dark:from-blue-700 dark:to-blue-900"> {/* Aplicar clase dark */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Tu salud es nuestra prioridad</h2>
        <p className="text-xl mb-8">Encuentra los mejores productos farmacéuticos al mejor precio</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition dark:bg-gray-200 dark:text-blue-800 dark:hover:bg-gray-300"> {/* Aplicar clase dark */}
          Ver productos
        </button>
      </div>
    </section>
  );
};

export default PharmaHero;