// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTelegramPlane, FaRegLightbulb, FaCodeBranch } from 'react-icons/fa';
import { SiPython, SiDjango, SiPostgresql, SiDocker, SiRedis } from 'react-icons/si';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import ThemeToggle from './components/ThemeToggle';

// Mock project data based on GitHub repositories
const projects = [
  {
    id: 'async-tg-bot',
    title: 'Async Telegram Bot Accounts',
    shortDescription: 'Асинхронный Telegram-бот для управления аккаунтами с поддержкой нескольких сессий',
    description: 'Проект для управления несколькими Telegram-аккаунтами одновременно с поддержкой авторизации и интеграции с базой данных. Используется для автоматизации задач в Telegram.',
    image: 'https://picsum.photos/600/400?random=1',
    technologies: ['Python', 'Aiogram', 'SQLite', 'JWT', 'FastAPI'],
    githubUrl: 'https://github.com/semenkulikov/async-tg-bot-accounts',
    features: [
      'Поддержка нескольких сессий',
      'Система авторизации',
      'Интеграция с SQLite',
      'REST API для управления'
    ],
    screenshots: [
      'https://picsum.photos/800/600?random=11',
      'https://picsum.photos/800/600?random=12',
      'https://picsum.photos/800/600?random=13'
    ]
  },
  {
    id: 'django-ecommerce',
    title: 'Интернет-магазин на Django',
    shortDescription: 'Полнофункциональный интернет-магазин с корзиной и системой управления',
    description: 'Современный интернет-магазин с корзиной, платежной системой и CMS. Разработан с применением микросервисной архитектуры и современных стандартов проектирования.',
    image: 'https://picsum.photos/600/400?random=2',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Redis'],
    githubUrl: 'https://github.com/semenkulikov/django-ecommerce',
    features: [
      'Корзина и система заказов',
      'Платежная система',
      'CMS для управления контентом',
      'Микросервисная архитектура'
    ],
    screenshots: [
      'https://picsum.photos/800/600?random=21',
      'https://picsum.photos/800/600?random=22',
      'https://picsum.photos/800/600?random=23'
    ]
  },
  {
    id: 'scripts-automation',
    title: 'Система автоматизации бизнес-процессов',
    shortDescription: 'Автоматизация рутинных задач для малого бизнеса',
    description: 'Набор Python-скриптов для автоматизации рутинных задач в малом бизнесе, включая обработку данных, генерацию отчетов и интеграцию с внешними сервисами.',
    image: 'https://picsum.photos/600/400?random=3',
    technologies: ['Python', 'Flask', 'MySQL', 'Celery', 'Nginx'],
    githubUrl: 'https://github.com/semenkulikov/scripts-automation',
    features: [
      'Автоматизация рутинных задач',
      'Интеграция с внешними API',
      'Генерация PDF-отчетов',
      'Расписание задач через Celery'
    ],
    screenshots: [
      'https://picsum.photos/800/600?random=31',
      'https://picsum.photos/800/600?random=32',
      'https://picsum.photos/800/600?random=33'
    ]
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Header darkMode={darkMode} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Hero darkMode={darkMode} />
                <About darkMode={darkMode} />
                <Projects projects={projects} darkMode={darkMode} />
              </motion.div>
            } />
            
            <Route path="/projects" element={
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Projects projects={projects} darkMode={darkMode} />
              </motion.div>
            } />
            
            <Route path="/project/:id" element={
              <motion.div
                key="project-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectDetails projects={projects} darkMode={darkMode} />
              </motion.div>
            } />
            
            <Route path="/contact" element={
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Contact darkMode={darkMode} />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App; 