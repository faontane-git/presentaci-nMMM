import React from 'react';

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-16 text-center px-6">
      <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
      <p className="text-lg mb-6">A continuación podrás descargar nuestra aplicación y unirte a nuestra comunidad.</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
        Descargar App
      </button>
    </section>
  );
};

export default CTA;
