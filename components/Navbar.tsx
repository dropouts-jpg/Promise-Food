import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Locations', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-orange rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl md:text-2xl">P</span>
          </div>
          <span className="font-serif font-bold text-xl md:text-2xl text-brand-dark tracking-tight">
            Promise Foods
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark font-medium hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center text-sm text-gray-500">
             <MapPin className="w-4 h-4 mr-1 text-brand-orange" />
             <span>Bahria Town, KHI</span>
          </div>

          <Button variant="primary" size="sm" rightIcon={<ShoppingBag className="w-4 h-4"/>}>
            Order Delivery
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-4 shadow-lg flex flex-col gap-4 animate-in slide-in-from-top-5 fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark font-medium py-2 hover:text-brand-orange"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center text-sm text-gray-500 py-2">
             <MapPin className="w-4 h-4 mr-1 text-brand-orange" />
             <span>Bahria Town, Karachi</span>
          </div>
          <Button variant="primary" className="w-full" rightIcon={<ShoppingBag className="w-4 h-4"/>}>
            Order Delivery
          </Button>
        </div>
      )}
    </nav>
  );
};