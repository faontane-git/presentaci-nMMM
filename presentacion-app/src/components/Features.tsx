import React from 'react';
import primera from '../assets/primera.jpg';
import segunda from '../assets/segunda.jpg';
import tercera from '../assets/tercera.jpg';

type Feature = {
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    title: 'Devocionales diarios',
    description: 'Recibe mensajes de inspiración y fortaleza espiritual cada día.',
    image: primera,
  },
  {
    title: 'Calendario de cultos',
    description: 'Consulta los horarios de cultos, consejerías pastorales y actividades nacionales.',
    image: segunda,
  },
  {
    title: 'Conexión con tu comunidad',
    description: 'Recibe oraciones, noticias y mensajes.',
    image: tercera,
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">¿Qué te ofrece Mi Iglesia MMM?</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Una app pensada para acercarte más a Dios, mantenerte conectado con tu congregación y vivir tu fe cada día.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col items-center text-center"
          >
            <div className="w-full max-h-80 flex justify-center overflow-hidden bg-gray-100">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
