import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
        color: darkMode ? '#ffffff' : '#1f2937',
        boxShadow: darkMode 
          ? '0 0 10px rgba(59, 130, 246, 0.3)'
          : '0 0 10px rgba(30, 41, 59, 0.2)',
      }}
      aria-label={darkMode ? 'Включить светлую тему' : 'Включить темную тему'}
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle; 