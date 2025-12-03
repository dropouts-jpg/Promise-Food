import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-2xl">P</span>
                </div>
                <span className="font-serif font-bold text-3xl tracking-tight">Promise Foods</span>
              </div>
              <p className="text-gray-400 max-w-md text-lg">
                Bringing the authentic taste of tradition to your plate. 
                Healthy, hygienic, and absolutely delicious.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-400">Shop #12, Precinct 10-A, Main Boulevard,<br/>Bahria Town, Karachi.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Monday - Sunday<br/>12:00 PM - 12:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                   <h4 className="font-bold text-lg mb-1">Contact</h4>
                   <p className="text-3xl font-serif text-brand-yellow font-bold mt-2">+92 300 123 4567</p>
                   <Button 
                      variant="primary" 
                      className="mt-4"
                      onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                   >
                     Chat on WhatsApp
                   </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[400px] bg-gray-800 rounded-3xl overflow-hidden relative group">
            {/* Using an image to simulate map for visual aesthetic */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-brand-dark/20 backdrop-blur-[2px]">
               <MapPin className="w-12 h-12 text-brand-orange mb-4 drop-shadow-lg animate-bounce" />
               <h3 className="text-2xl font-serif font-bold text-center">Located in the Heart of Bahria Town</h3>
               <p className="text-gray-300 mt-2 text-center">Precinct 10-A, Near The Main Park</p>
               <Button variant="secondary" size="sm" className="mt-6">Get Directions</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Promise Foods. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Instagram className="w-5 h-5"/></a>
             <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors"><Facebook className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};