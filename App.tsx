import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuShowcase } from './components/MenuShowcase';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-brand-cream selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;