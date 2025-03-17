import React from 'react';

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: 'Devocionales diarios',
    description: 'Recibe mensajes de inspiración y fortaleza espiritual cada día.',
  },
  {
    title: 'Calendario de cultos',
    description: 'Consulta los horarios de cultos, reuniones y actividades especiales.',
  },
  {
    title: 'Conexión con tu comunidad',
    description: 'Comparte oraciones, noticias y mensajes con los miembros de tu iglesia.',
  },
  {
    title: 'Pedidos de oración',
    description: 'Envía y responde peticiones de oración para apoyarnos unos a otros en la fe.',
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">¿Qué te ofrece Iglesia MMM?</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Una app pensada para acercarte más a Dios, mantenerte conectado con tu congregación y vivir tu fe cada día.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
