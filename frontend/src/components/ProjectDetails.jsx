// components/ProjectDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetails = ({ projects, darkMode }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Проект не найден</h2>
        <Link to="/projects" className="text-blue-500 hover:underline">Вернуться к проектам</Link>
      </div>
    );
  }

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <div className="flex space-x-4">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-lg mb-6">{project.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Технологии</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Функциональность</h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-600'
                    }`}></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Скриншоты</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, i) => (
                <a 
                  key={i} 
                  href={screenshot} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={screenshot} 
                    alt={`Скриншот ${i + 1}`} 
                    className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link 
              to="/projects" 
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
              }`}
            >
              <FaExternalLinkAlt />
              <span>Вернуться к проектам</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails; 