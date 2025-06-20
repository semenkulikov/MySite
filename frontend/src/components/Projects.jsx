// components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ projects, darkMode }) => {
  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Мои проекты
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800 hover:shadow-blue-500/20' : 'bg-white hover:shadow-xl'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.shortDescription}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Технологии:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-2 py-1 rounded-full text-xs ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/project/${project.id}`}
                  className={`inline-flex items-center gap-2 mt-4 text-sm font-medium ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  } transition-colors`}
                >
                  Подробнее
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/semenkulikov/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-block px-8 py-4 rounded-lg transition-all transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Посмотреть все проекты на GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 