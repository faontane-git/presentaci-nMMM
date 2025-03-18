import React from 'react';
import logoMMM from '../assets/logo MMM MI IGLESIA.png';

const Hero = () => {
  return (
    <section className="bg-[#001F5C] py-20 px-6 text-center text-white">
      <div className="flex justify-center mb-6">
        <img src={logoMMM} alt="Logo Iglesia MMM" className="w-32 h-auto md:w-40" />
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Bienvenido a <span className="text-yellow-400">Iglesia MMM</span>
      </h1>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-6">
        Una aplicación para acercarte más a Dios, estar conectado con tu congregación y crecer espiritualmente cada día.
      </p>
    </section>
  );
};

export default Hero;
