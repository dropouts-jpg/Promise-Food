import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <section className="relative min-h-screen pt-24 pb-12 md:pt-32 flex items-center overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/10 rounded-l-[100px] -z-10 hidden md:block" />
      <div className="absolute top-20 left-10 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center md:text-left animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-semibold text-sm tracking-wider uppercase mb-2">
              Shudh Desi • 100% Organic
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-dark leading-[1.1]">
              Ghar Ka Khana, <br />
              <span className="text-brand-orange italic">Five Star Style.</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              Experience the authentic taste of Karachi in Bahria Town. Pure Desi Ghee, hand-ground spices, and recipes passed down through generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="primary" 
                size="lg" 
                rightIcon={<ArrowRight className="w-5 h-5"/>}
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                leftIcon={<Phone className="w-5 h-5"/>}
                onClick={openWhatsApp}
              >
                WhatsApp Order
              </Button>
            </div>

            {/* Social Proof Mini */}
            <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
               <div className="text-sm font-medium">
                 <span className="text-brand-orange font-bold">4.9/5</span> from 1000+ Happy Eaters
               </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center items-center animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
             {/* Rotating text ring effect could go here, keeping it simple for now */}
             <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl transform scale-90"></div>
                <img 
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop" 
                  alt="Delicious Biryani" 
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white relative z-10 hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 right-10 md:bottom-10 md:-right-4 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[150px]">
                   <p className="font-serif font-bold text-brand-dark text-lg leading-tight">Mutton Biryani</p>
                   <p className="text-brand-orange font-bold">PKR 1250</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};