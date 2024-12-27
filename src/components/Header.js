import React, { useState } from 'react';
import { Banana, Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="fixed w-full bg-yellow-50 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Banana className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">Fresh Horizon</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors">Services</a>
            <a href="#feedback" className="text-gray-700 hover:text-yellow-500 transition-colors">Customer Feedback</a>
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-yellow-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-500 transition-colors">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-yellow-500 transition-colors">Services</a>
              <a href="#feedback" className="text-gray-700 hover:text-yellow-500 transition-colors">Customer Feedback</a>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header;