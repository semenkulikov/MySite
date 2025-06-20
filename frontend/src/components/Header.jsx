// components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaRegLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = ({ darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Контакты', path: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaRegLightbulb className="text-blue-500 text-2xl" />
          <span className="text-xl font-bold">Семен Сайфутдинов</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-blue-500'
                  : darkMode 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`py-2 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-blue-500'
                    : darkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header; 