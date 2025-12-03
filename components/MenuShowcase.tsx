import React, { useRef } from 'react';
import { Plus, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES } from '../constants';
import { Button } from './ui/Button';

export const MenuShowcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
             <h4 className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-2">Our Menu</h4>
             <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">
               Explore Our <br/>
               <span className="text-brand-orange">Signature Dishes</span>
             </h2>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-200 hover:bg-brand-cream hover:border-brand-orange transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-brand-dark" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-brand-dark text-white hover:bg-brand-orange transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Categories Pills - For visual filtering hint (Static for now) */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide mb-4">
          <button className="px-6 py-2 rounded-full bg-brand-orange text-white font-medium whitespace-nowrap shadow-lg shadow-orange-500/20">All Items</button>
          {CATEGORIES.map(cat => (
             <button key={cat.id} className="px-6 py-2 rounded-full bg-brand-cream text-brand-dark hover:bg-brand-yellow/20 font-medium whitespace-nowrap transition-colors">
               {cat.name}
             </button>
          ))}
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-12 pt-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
        >
          {MENU_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[280px] md:min-w-[350px] bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 snap-center group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                 <img 
                   src={item.imageUrl} 
                   alt={item.name} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                    <span className="text-xs font-bold text-brand-dark">{item.rating}</span>
                 </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl font-bold text-brand-dark leading-tight">{item.name}</h3>
                 </div>
                 <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                 
                 <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="font-bold text-xl text-brand-orange">PKR {item.price}</span>
                    <Button variant="secondary" size="sm" className="rounded-xl px-3" rightIcon={<Plus className="w-4 h-4"/>}>
                      Add
                    </Button>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};