// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 border-t ${
      darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-800 border-gray-700 text-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 md:mb-0"
          >
            &copy; {new Date().getFullYear()} Семен Сайфутдинов. Все права защищены.
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex space-x-6"
          >
            <a 
              href="https://github.com/semenkulikov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a 
              href="https://t.me/ss_user" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTelegram className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 