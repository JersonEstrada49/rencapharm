import React from 'react';

const PharmaContact = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900"> {/* Aplicar clase dark */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Contacto</h2> {/* Aplicar clase dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Nombre</label> {/* Aplicar clase dark */}
                <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /> {/* Aplicar clase dark */}
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Email</label> {/* Aplicar clase dark */}
                <input type="email" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" /> {/* Aplicar clase dark */}
              </div>
              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300">Mensaje</label> {/* Aplicar clase dark */}
                <textarea className="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea> {/* Aplicar clase dark */}
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-800"> {/* Aplicar clase dark */}
                Enviar
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Otras formas de contacto</h3> {/* Aplicar clase dark */}
            <ul className="space-y-3 text-gray-600 dark:text-gray-300"> {/* Aplicar clase dark */}
              <li>📞 Teléfono: 555-123-4567</li>
              <li>📱 WhatsApp: 555-987-6543</li>
              <li>✉️ Email: info@rencapharm.com</li>
              <li>📷 Instagram: @Rencapharm</li>
              <li>👍 Facebook: /Rencapharm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaContact;

// DONE