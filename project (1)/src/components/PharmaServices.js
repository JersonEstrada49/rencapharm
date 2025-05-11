import React from 'react';

const PharmaServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Medicamentos</h3>
            <p className="text-gray-600">Con o sin receta médica</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Asesoría</h3>
            <p className="text-gray-600">Farmacéutica profesional</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Controles</h3>
            <p className="text-gray-600">Presión y glicemia</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Envíos</h3>
            <p className="text-gray-600">A domicilio rápido</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaServices;