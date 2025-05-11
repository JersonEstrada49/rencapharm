import React from 'react';

const PharmaLocation = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800"> {/* Aplicar clase dark */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Ubicación</h2> {/* Aplicar clase dark */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center dark:bg-gray-700"> {/* Aplicar clase dark */}
            <span className="text-gray-500 dark:text-gray-400">Mapa de Google aquí</span> {/* Aplicar clase dark */}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Horarios de atención</h3> {/* Aplicar clase dark */}
            <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300"> {/* Aplicar clase dark */}
              <li>Lunes a Viernes: 8:00 - 20:00</li>
              <li>Sábados: 9:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
            <address className="not-italic">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Dirección</h3> {/* Aplicar clase dark */}
              <p className="text-gray-600 dark:text-gray-300">Calle Farmacéutica 123, Ciudad Salud</p> {/* Aplicar clase dark */}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaLocation;