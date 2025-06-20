// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegramPlane } from 'react-icons/fa';

const Hero = ({ darkMode }) => {
  return (
    <section className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Привет, я <span className="text-blue-500">Семен</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8 text-gray-600 dark:text-gray-300"
            >
              Python разработчик с 3+ лет опыта в backend-разработке и автоматизации процессов
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://github.com/semenkulikov" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://t.me/ss_user" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                <FaTelegramPlane />
                <span>Telegram</span>
              </a>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                darkMode ? 'border-blue-500' : 'border-blue-600'
              } shadow-2xl transform transition-transform hover:rotate-6 duration-500`}
            >
              <img 
                src="https://picsum.photos/400/400?random=5" 
                alt="Семен Сайфутдинов" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 