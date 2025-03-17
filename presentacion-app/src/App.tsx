import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
